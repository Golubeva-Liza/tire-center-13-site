/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/headerSearch.js":
/*!*******************************************!*\
  !*** ./src/js/components/headerSearch.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function headerSelect() {
  const searchIcon = document.querySelector('.header-search__icon');
  console.log(searchIcon);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_headerSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/headerSelect */ "./src/js/components/headerSelect.js");
/* harmony import */ var _components_headerSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/headerSearch */ "./src/js/components/headerSearch.js");


 //settings

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
    value: 'пункт3'
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

}); //functions

(0,_components_headerSelect__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_headerSearch__WEBPACK_IMPORTED_MODULE_2__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=script.js.map