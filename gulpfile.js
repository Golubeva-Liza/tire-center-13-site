"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browserSync = require("browser-sync");
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');

const dist = "./dist/";

gulp.task('html', function () {
  return gulp.src("src/*.html")
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("dist/"))
      .on("end", browserSync.reload);
});

gulp.task('styles', function() {
  return gulp.src("src/sass/**/*.+(scss|sass)")
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(rename({suffix: '.min', prefix: ''}))
      .pipe(autoprefixer())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.stream());
});

gulp.task("copy-resources", () => {
  return gulp.src("./src/resources/**/*.*")
    .pipe(gulp.dest(dist + "/resources"))
    .on("end", browserSync.reload);
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
      .pipe(webpack({
          mode: 'development',
          output: {
              filename: 'script.js'
          },
          watch: false,
          devtool: "source-map",
          module: {
              rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [['@babel/preset-env', {
                          debug: true,
                          corejs: 3,
                          useBuiltIns: "usage"
                      }]]
                    }
                  }
                }
              ]
            }
      }))
      .pipe(gulp.dest(dist))
      .on("end", browserSync.reload);
});

gulp.task("watch", () => {
    browserSync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("./src/resources/**/*.*", gulp.parallel("copy-resources"));

    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
      .pipe(webpack({
          mode: 'production',
          output: {
              filename: 'script.js'
          },
          module: {
              rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [['@babel/preset-env', {
                          corejs: 3,
                          useBuiltIns: "usage"
                      }]]
                    }
                  }
                }
              ]
            }
      }))
      .pipe(gulp.dest(dist));
});

gulp.task('default', gulp.parallel('watch', 'copy-resources', 'styles', 'html', "build-js"));