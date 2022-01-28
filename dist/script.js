/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/headerSearch.js":
/*!*******************************************!*\
  !*** ./src/js/components/headerSearch.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function headerSelect() {
  const searchIcon = document.querySelector('.header-search__icon'); // console.log(searchIcon);

  searchIcon.addEventListener('click', () => {
    searchIcon.closest('.header-search').classList.toggle('header-search_active');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (headerSelect);

/***/ }),

/***/ "./src/js/components/headerSelect.js":
/*!*******************************************!*\
  !*** ./src/js/components/headerSelect.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function headerSelect() {
  const header = document.querySelector('.header');
  const menuBtns = header.querySelectorAll('[data-menu-item]');
  const submenu = header.querySelectorAll('[data-submenu-item]');
  menuBtns.forEach(item => {
    item.addEventListener('click', () => {
      const currentMenuName = item.getAttribute('data-menu-item');
      const currentDrop = header.querySelector(`[data-submenu-item = "${currentMenuName}"]`);

      if (!header.querySelector('[data-menu-item="menu"]').classList.contains('active')) {
        menuBtns.forEach(el => {
          if (el !== item) {
            el.classList.remove('active');
          }
        });
        submenu.forEach(el => {
          if (el !== currentDrop) {
            el.classList.remove('sub-menu_active');
          }
        });
      }

      currentDrop.classList.toggle('sub-menu_active');
      item.classList.toggle('active');
      document.addEventListener('click', closeSubMenu);
    });
  });

  function closeSubMenu(e) {
    if (!e.target.closest('.header__menu') && !e.target.closest('.header__mobile-btn') && !e.target.closest('.authorization')) {
      // console.log('закрыть');
      menuBtns.forEach(el => {
        el.classList.remove('active');
      });
      submenu.forEach(el => {
        el.classList.remove('sub-menu_active');
      });
      document.removeEventListener('click', closeSubMenu);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (headerSelect);

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": function() { return /* binding */ Select; }
/* harmony export */ });
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

const getSelect = (placeholder = 'Выберите элемент', data, selectedId) => {
  const selectItems = data.map(item => {
    let cls = '';

    if (item.id === selectedId) {
      placeholder = item.value;
      cls = 'selected';
    }

    return `
         <li class="select__item ${cls}" data-type="select-item" data-id="${item.id}">${item.value}</li>
      `;
  }); //возвращает массив, будет выводиться с запятыми

  return `
      <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input">
         <span data-type="value">${placeholder}</span>
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.72499L3.54236 7L8 9.91976L12.4576 7L13 7.72499L8 11L3 7.72499Z" fill="#1A1E29"/>
         </svg>
      </div>
      <div class="select__dropdown">
         <ul class="select__list">
            ${selectItems.join('')}
         </ul>
      </div>
   `;
};

var _render = /*#__PURE__*/new WeakSet();

var _setup = /*#__PURE__*/new WeakSet();

class Select {
  constructor(selector, options) {
    _classPrivateMethodInitSpec(this, _setup);

    _classPrivateMethodInitSpec(this, _render);

    this.select = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;
    this.disabled = options.disabled;

    _classPrivateMethodGet(this, _render, _render2).call(this); //настройка выводимого шаблона


    _classPrivateMethodGet(this, _setup, _setup2).call(this); //настройка работы

  } //приватный метод


  clickSelect(e) {
    const {
      type
    } = e.target.dataset;

    if (type === 'input') {
      this.select.classList.toggle('select_open');
    } else if (type === 'select-item') {
      const id = e.target.dataset.id;
      this.changeValue(e.target, id);
    } else if (type === 'backdrop') {
      this.select.classList.remove('select_open');
    }
  }

  changeValue(elem, id) {
    // const current = this.options.data.find(item => item.id === id);
    this.value.textContent = elem.textContent;
    this.select.classList.remove('select_open');
    this.select.querySelectorAll('[data-type="select-item"]').forEach(elem => {
      elem.classList.remove('selected');
    });
    this.select.querySelector(`[data-id="${id}"]`).classList.add('selected');
  }

  destoy() {
    this.select.removeEventListener('click', this.clickSelect);
  }

}

function _render2() {
  const {
    placeholder,
    data
  } = this.options;
  this.select.classList.add('select');

  if (this.disabled) {
    this.select.classList.add('select_disabled');
  }

  this.select.innerHTML = getSelect(placeholder, data, this.selectedId);
}

function _setup2() {
  if (this.disabled) {
    return;
  }

  this.clickSelect = this.clickSelect.bind(this); //иначе теряется контекст вызова

  this.select.addEventListener('click', this.clickSelect);
  this.value = this.select.querySelector('[data-type="value"]');
}

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(selector) {
  const tabs = document.querySelector(selector);

  if (tabs) {
    const tabsContents = tabs.querySelectorAll('.tabs__content');
    const tabsBtns = tabs.querySelectorAll('.tabs__btn');
    tabs.addEventListener('click', e => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabName = e.target.getAttribute('data-tabs-btn'); //скрываем все элементы каталога и класс активности у кнопок

        tabsContents.forEach(el => {
          el.classList.remove('tabs__content_active');
        });
        tabsBtns.forEach(el => {
          el.classList.remove('tabs__btn_active');
        }); //показываем выбранный контент и делаем кнопку активной

        const activeTab = tabs.querySelector(`[data-tabs-target="${tabName}"]`);
        activeTab.classList.add('tabs__content_active');
        e.target.classList.add('tabs__btn_active');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/ellipsis.min.js":
/*!********************************!*\
  !*** ./src/js/ellipsis.min.js ***!
  \********************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function () {
  "use strict";

  function a(a) {
    var c = k(b, a || {});
    this.create(c), this.add();
  }

  var b = {
    ellipsis: "…",
    debounce: 0,
    responsive: !0,
    className: ".clamp",
    lines: 2,
    portrait: null,
    break_word: !0
  },
      c = 0,
      d = !!window.requestAnimationFrame,
      e = function () {
    return c += 1;
  },
      f = function (a, b) {
    a.setAttribute("data-ellipsis-id", b);
  },
      g = function (a) {
    return a.getAttribute("data-ellipsis-id");
  },
      h = function (a, b) {
    var c = e();
    f(b, c), a[c] = a[c] || {}, a[c].element = b, a[c].innerHTML = b.innerHTML;
  },
      i = function (a, b) {
    return a ? a[g(b)] : null;
  },
      j = function (a) {
    return Object.keys(a).map(function (b, c) {
      return a[b].element;
    });
  },
      k = function (a, b) {
    var c = {};

    for (var d in a) c[d] = a[d];

    for (var e in b) c[e] = b[e];

    return c;
  };

  a.prototype = {
    conf: {},
    prop: {},
    lines: {},
    temp: null,
    listener: null,
    create: function (a) {
      if (this.conf = a, this.lines = {
        get current() {
          return a.portrait && window.innerHeight > window.innerWidth ? a.portrait : a.lines;
        }

      }, this.conf.responsive) {
        this.temp = {};
        var b,
            c = this.conf.debounce;

        if (d && !c) {
          this._isScheduled = !1;
          var e = this;

          b = function (a) {
            e._isScheduled || (e._isScheduled = !0, window.requestAnimationFrame(function () {
              e._isScheduled = !1, e.add(j(e.temp));
            }));
          };
        } else {
          c = c || 16;
          var f;

          b = function (a) {
            clearTimeout(f), f = setTimeout(function () {
              this.add(j(this.temp));
            }.bind(this), c);
          };
        }

        this.listener = b.bind(this), window.addEventListener("resize", this.listener, !1), window.removeEventListener("beforeunload", this.listener, !1);
      }
    },
    destroy: function () {
      this.listener && window.removeEventListener("resize", this.listener, !1);
    },
    createProp: function (a) {
      this.prop = {
        get height() {
          var b = a.getBoundingClientRect();
          return parseInt(b.bottom - b.top, 10);
        },

        get lineheight() {
          var b = getComputedStyle(a).getPropertyValue("line-height");
          return String("normal|initial|inherit").indexOf(b) > -1 && (b = parseInt(getComputedStyle(a).getPropertyValue("font-size"), 10) + 2), parseInt(b, 10);
        }

      };
    },
    add: function (a) {
      if (!a && this.conf.className && (a = document.querySelectorAll(this.conf.className)), a) if (a.length) for (var b = 0; b < a.length; b++) this.addElement(a[b]);else void 0 === a.length && this.addElement(a);
    },
    addElement: function (a) {
      if (this.conf.responsive) {
        var b = i(this.temp, a);
        b ? a.innerHTML !== b.innerHTML && (a.innerHTML = b.innerHTML) : h(this.temp, a);
      }

      this.createProp(a), this.isNotCorrect() && (a.childNodes.length && a.childNodes.length > 1 ? this.handleChildren(a) : a.childNodes.length && 1 === a.childNodes.length && 3 === a.childNodes[0].nodeType && this.simpleText(a));
    },
    breakWord: function (a, b, c) {
      var d = a.split(" ");
      if (d.pop(), c && d.pop(), !b) return d[d.length - 1] && (d[d.length - 1] = d[d.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, "")), d.push(this.conf.ellipsis), d.join(" ");
      if (d[d.length - 1]) return d[d.length - 1] = d[d.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, ""), d.push(this.conf.ellipsis), [d.join(" "), b];

      if (!d[d.length - 1] && b) {
        var e = " " + b.trim().replace(/(,$)/g, "").replace(/(\.$)/g, "") + " ";
        return d.push(this.conf.ellipsis), [d.join(" "), e];
      }
    },
    simpleText: function (a) {
      for (var b = a.childNodes[0].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) a.childNodes[0].nodeValue = b.slice(0, -1), b = a.childNodes[0].nodeValue;

      this.conf.break_word ? (a.childNodes[0].nodeValue = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect() && (a.childNodes[0].nodeValue = " " + a.childNodes[0].nodeValue.slice(0, -(this.conf.ellipsis.length + 1)).trim().slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis)) : (a.childNodes[0].nodeValue = this.breakWord(a.childNodes[0].nodeValue), this.isNotCorrect() && (a.childNodes[0].nodeValue = this.breakWord(a.childNodes[0].nodeValue, null, !0)));
    },
    isNotCorrect: function () {
      return this.prop.height > this.prop.lineheight * this.lines.current;
    },
    processBreak: function (a, b, c) {
      var d = this.breakWord(a.innerText || a.nodeValue, b.innerText || b.nodeValue, c);
      a.innerText ? a.innerText = d[0] : a.nodeValue = d[0], b.innerText ? b.innerText = d[1] : b.nodeValue = d[1];
    },
    handleChildren: function (a) {
      for (var b, c = a.childNodes, d = c.length - 1; d >= 0; d--) {
        var e;

        if (8 !== c[d].nodeType) {
          if (3 === c[d].nodeType ? (e = c[d].nodeValue, c[d].nodeValue = "") : (e = getComputedStyle(c[d]).getPropertyValue("display"), c[d].style.display = "none"), this.prop.height <= this.prop.lineheight * this.lines.current) {
            if (3 === c[d].nodeType) {
              for (c[d].nodeValue = e, b = c[d].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) c[d].nodeValue = b.slice(0, -1), b = c[d].nodeValue;

              if (this.conf.break_word) {
                if (c[d].nodeValue = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                  if (c[d].nodeValue = " " + c[d].nodeValue.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(c[d].nodeValue.length > 1)) continue;
                  c[d].nodeValue = c[d].nodeValue.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                }
              } else {
                if (!c[d].innerText && !c[d].nodeValue) continue;

                if (this.processBreak(c[d], c[d - 1]), this.isNotCorrect() && (this.processBreak(c[d], c[d - 1], !0), this.isNotCorrect())) {
                  a.removeChild(c[d]);
                  continue;
                }
              }
            } else {
              for (c[d].style.display = e, b = c[d].innerText; this.prop.height > this.prop.lineheight * this.lines.current;) c[d].innerText = b.slice(0, -1), b = c[d].innerText;

              if (this.conf.break_word) {
                if (c[d].innerText = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                  if (c[d].innerText = " " + c[d].innerText.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(c[d].innerText.length > 1)) continue;
                  c[d].innerText = c[d].innerText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                }
              } else {
                if (!c[d].innerText && !c[d].nodeValue) continue;

                if (this.processBreak(c[d], c[d - 1]), this.isNotCorrect() && (this.processBreak(c[d], c[d - 1], !0), this.isNotCorrect())) {
                  a.removeChild(c[d]);
                  continue;
                }
              }
            }

            break;
          }

          a.removeChild(c[d]);
        }
      }
    }
  };

  var l = function (b) {
    return new a(b);
  };

   true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return l;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), self.Ellipsis = l;
}();
!function () {
  "use strict";

  function a(a) {
    var c = k(b, a || {});
    this.create(c), this.add();
  }

  var b = {
    ellipsis: "…",
    debounce: 0,
    responsive: !0,
    className: ".clamp",
    lines: 2,
    portrait: null,
    break_word: !0
  },
      c = 0,
      d = !!window.requestAnimationFrame,
      e = function () {
    return c += 1;
  },
      f = function (a, b) {
    a.setAttribute("data-ellipsis-id", b);
  },
      g = function (a) {
    return a.getAttribute("data-ellipsis-id");
  },
      h = function (a, b) {
    var c = e();
    f(b, c), a[c] = a[c] || {}, a[c].element = b, a[c].innerHTML = b.innerHTML;
  },
      i = function (a, b) {
    return a ? a[g(b)] : null;
  },
      j = function (a) {
    return Object.keys(a).map(function (b, c) {
      return a[b].element;
    });
  },
      k = function (a, b) {
    var c = {};

    for (var d in a) c[d] = a[d];

    for (var e in b) c[e] = b[e];

    return c;
  };

  a.prototype = {
    conf: {},
    prop: {},
    lines: {},
    temp: null,
    listener: null,
    create: function (a) {
      if (this.conf = a, this.lines = {
        get current() {
          return a.portrait && window.innerHeight > window.innerWidth ? a.portrait : a.lines;
        }

      }, this.conf.responsive) {
        this.temp = {};
        var b,
            c = this.conf.debounce;

        if (d && !c) {
          this._isScheduled = !1;
          var e = this;

          b = function (a) {
            e._isScheduled || (e._isScheduled = !0, window.requestAnimationFrame(function () {
              e._isScheduled = !1, e.add(j(e.temp));
            }));
          };
        } else {
          c = c || 16;
          var f;

          b = function (a) {
            clearTimeout(f), f = setTimeout(function () {
              this.add(j(this.temp));
            }.bind(this), c);
          };
        }

        this.listener = b.bind(this), window.addEventListener("resize", this.listener, !1), window.removeEventListener("beforeunload", this.listener, !1);
      }
    },
    destroy: function () {
      this.listener && window.removeEventListener("resize", this.listener, !1);
    },
    createProp: function (a) {
      this.prop = {
        get height() {
          var b = a.getBoundingClientRect();
          return parseInt(b.bottom - b.top, 10);
        },

        get lineheight() {
          var b = getComputedStyle(a).getPropertyValue("line-height");
          return String("normal|initial|inherit").indexOf(b) > -1 && (b = parseInt(getComputedStyle(a).getPropertyValue("font-size"), 10) + 2), parseInt(b, 10);
        }

      };
    },
    add: function (a) {
      if (!a && this.conf.className && (a = document.querySelectorAll(this.conf.className)), a) if (a.length) for (var b = 0; b < a.length; b++) this.addElement(a[b]);else void 0 === a.length && this.addElement(a);
    },
    addElement: function (a) {
      if (this.conf.responsive) {
        var b = i(this.temp, a);
        b ? a.innerHTML !== b.innerHTML && (a.innerHTML = b.innerHTML) : h(this.temp, a);
      }

      this.createProp(a), this.isNotCorrect() && (a.childNodes.length && a.childNodes.length > 1 ? this.handleChildren(a) : a.childNodes.length && 1 === a.childNodes.length && 3 === a.childNodes[0].nodeType && this.simpleText(a));
    },
    breakWord: function (a, b, c) {
      var d = a.split(" ");
      if (d.pop(), c && d.pop(), !b) return d[d.length - 1] && (d[d.length - 1] = d[d.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, "")), d.push(this.conf.ellipsis), d.join(" ");
      if (d[d.length - 1]) return d[d.length - 1] = d[d.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, ""), d.push(this.conf.ellipsis), [d.join(" "), b];

      if (!d[d.length - 1] && b) {
        var e = " " + b.trim().replace(/(,$)/g, "").replace(/(\.$)/g, "") + " ";
        return d.push(this.conf.ellipsis), [d.join(" "), e];
      }
    },
    simpleText: function (a) {
      for (var b = a.childNodes[0].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) a.childNodes[0].nodeValue = b.slice(0, -1), b = a.childNodes[0].nodeValue;

      this.conf.break_word ? (a.childNodes[0].nodeValue = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect() && (a.childNodes[0].nodeValue = " " + a.childNodes[0].nodeValue.slice(0, -(this.conf.ellipsis.length + 1)).trim().slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis)) : (a.childNodes[0].nodeValue = this.breakWord(a.childNodes[0].nodeValue), this.isNotCorrect() && (a.childNodes[0].nodeValue = this.breakWord(a.childNodes[0].nodeValue, null, !0)));
    },
    isNotCorrect: function () {
      return this.prop.height > this.prop.lineheight * this.lines.current;
    },
    processBreak: function (a, b, c) {
      var d = this.breakWord(a.innerText || a.nodeValue, b.innerText || b.nodeValue, c);
      a.innerText ? a.innerText = d[0] : a.nodeValue = d[0], b.innerText ? b.innerText = d[1] : b.nodeValue = d[1];
    },
    handleChildren: function (a) {
      for (var b, c = a.childNodes, d = c.length - 1; d >= 0; d--) {
        var e;

        if (8 !== c[d].nodeType) {
          if (3 === c[d].nodeType ? (e = c[d].nodeValue, c[d].nodeValue = "") : (e = getComputedStyle(c[d]).getPropertyValue("display"), c[d].style.display = "none"), this.prop.height <= this.prop.lineheight * this.lines.current) {
            if (3 === c[d].nodeType) {
              for (c[d].nodeValue = e, b = c[d].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) c[d].nodeValue = b.slice(0, -1), b = c[d].nodeValue;

              if (this.conf.break_word) {
                if (c[d].nodeValue = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                  if (c[d].nodeValue = " " + c[d].nodeValue.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(c[d].nodeValue.length > 1)) continue;
                  c[d].nodeValue = c[d].nodeValue.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                }
              } else {
                if (!c[d].innerText && !c[d].nodeValue) continue;

                if (this.processBreak(c[d], c[d - 1]), this.isNotCorrect() && (this.processBreak(c[d], c[d - 1], !0), this.isNotCorrect())) {
                  a.removeChild(c[d]);
                  continue;
                }
              }
            } else {
              for (c[d].style.display = e, b = c[d].innerText; this.prop.height > this.prop.lineheight * this.lines.current;) c[d].innerText = b.slice(0, -1), b = c[d].innerText;

              if (this.conf.break_word) {
                if (c[d].innerText = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                  if (c[d].innerText = " " + c[d].innerText.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(c[d].innerText.length > 1)) continue;
                  c[d].innerText = c[d].innerText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                }
              } else {
                if (!c[d].innerText && !c[d].nodeValue) continue;

                if (this.processBreak(c[d], c[d - 1]), this.isNotCorrect() && (this.processBreak(c[d], c[d - 1], !0), this.isNotCorrect())) {
                  a.removeChild(c[d]);
                  continue;
                }
              }
            }

            break;
          }

          a.removeChild(c[d]);
        }
      }
    }
  };

  var l = function (b) {
    return new a(b);
  };

   true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return l;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), self.Ellipsis = l;
}();

/***/ }),

/***/ "./src/js/settings/selects.js":
/*!************************************!*\
  !*** ./src/js/settings/selects.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/select */ "./src/js/components/select.js");


function selectSettings() {
  new _components_select__WEBPACK_IMPORTED_MODULE_0__.Select('#select-maker', {
    placeholder: 'Производитель',
    data: [{
      id: '1',
      value: 'пункт1'
    }, {
      id: '2',
      value: 'пункт2'
    }, {
      id: '3',
      value: 'пункт4'
    }]
  });
  new _components_select__WEBPACK_IMPORTED_MODULE_0__.Select('#select-model', {
    placeholder: 'Модель',
    data: [{
      id: '1',
      value: 'пункт1'
    }, {
      id: '2',
      value: 'пункт2'
    }, {
      id: '3',
      value: 'пункт3'
    }],
    disabled: true
  });
  new _components_select__WEBPACK_IMPORTED_MODULE_0__.Select('#select-generation', {
    placeholder: 'Поколение',
    data: [{
      id: '1',
      value: 'пункт1'
    }, {
      id: '2',
      value: 'пункт2'
    }, {
      id: '3',
      value: 'пункт3'
    }],
    disabled: true
  });
  new _components_select__WEBPACK_IMPORTED_MODULE_0__.Select('#select-modification', {
    placeholder: 'Модификация',
    data: [{
      id: '1',
      value: 'пункт1'
    }, {
      id: '2',
      value: 'пункт2'
    }, {
      id: '3',
      value: 'пункт3'
    }],
    disabled: true
  });
  new _components_select__WEBPACK_IMPORTED_MODULE_0__.Select('#select-car-body', {
    placeholder: 'Кузов',
    data: [{
      id: '1',
      value: 'пункт1'
    }, {
      id: '2',
      value: 'пункт2'
    }, {
      id: '3',
      value: 'пункт3'
    }],
    disabled: true // selectedId: '3'

  });
}

/* harmony default export */ __webpack_exports__["default"] = (selectSettings);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ellipsis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ellipsis.min */ "./src/js/ellipsis.min.js");
/* harmony import */ var _ellipsis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ellipsis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_headerSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/headerSelect */ "./src/js/components/headerSelect.js");
/* harmony import */ var _components_headerSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/headerSearch */ "./src/js/components/headerSearch.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _settings_selects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/selects */ "./src/js/settings/selects.js");
// import Swiper from './swiper-bundle.min';





document.addEventListener('DOMContentLoaded', () => {
  // const swiper = new Swiper('.swiper', {
  //    // Navigation arrows
  //    navigation: {
  //      nextEl: '.swiper-button-next',
  //      prevEl: '.swiper-button-prev',
  //    }
  //  });
  //settings
  (0,_settings_selects__WEBPACK_IMPORTED_MODULE_4__["default"])();
  _ellipsis_min__WEBPACK_IMPORTED_MODULE_0___default()({
    ellipsis: '…',
    debounce: 0,
    responsive: true,
    className: '.clamp-2',
    lines: 2,
    break_word: false //!!default the ellipsis can truncate words

  });
  _ellipsis_min__WEBPACK_IMPORTED_MODULE_0___default()({
    ellipsis: '…',
    debounce: 0,
    responsive: true,
    className: '.clamp-3',
    lines: 3,
    break_word: false //!!default the ellipsis can truncate words

  }); //functions

  (0,_components_headerSelect__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_headerSearch__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])('#popular-tires-tabs');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map