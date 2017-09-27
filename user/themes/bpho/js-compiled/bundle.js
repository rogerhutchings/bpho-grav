/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initFaqs() {
  var faq = $('.js-faq');
  var answers = $('.js-faq-answer');
  var questions = $('.js-faq-question');

  questions.addClass('pointer dim').append('<i class="fa fa-angle-down pe-none" aria-hidden="true"></i>');

  answers.removeClass('js-dn').hide();

  questions.on('click', toggleFaqState);
}

function toggleFaqState(_ref) {
  var target = _ref.target;

  var question = $(target);
  var arrow = question.children('.fa');
  var isOpen = question.data('is-open');
  var rotation = isOpen ? '0deg' : '-180deg';

  arrow.transition({ rotate: rotation });
  $(target).siblings().slideToggle(200);
  question.data('is-open', !isOpen);
  return false;
}

$(document).ready(initFaqs);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initHeader() {
  var header = $('.js-header');

  header.stick_in_parent();
}

$(document).ready(initHeader);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initNav() {
  var openMenu = $('.js-open-menu');
  var closeMenu = $('.js-close-menu');
  var nav = $('.js-nav');

  var MENU_TRANSITION = 200;

  nav.removeClass('js-dn').addClass('db absolute top-0 left-0 tr-translate translate-y--100');

  openMenu.on('click', function () {
    nav.removeClass('translate-y--100');
    setTimeout(function () {
      return closeMenu.addClass('is-active');
    }, MENU_TRANSITION);
  });

  closeMenu.on('click', function () {
    nav.addClass('translate-y--100');
    setTimeout(function () {
      return closeMenu.removeClass('is-active');
    }, MENU_TRANSITION);
  });
}

$(document).ready(initNav);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

$('html').addClass('js');

/***/ })
/******/ ]);