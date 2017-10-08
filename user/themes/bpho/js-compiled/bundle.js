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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
  var header = $('.js-header');

  var MENU_TRANSITION = 200;

  nav.removeClass('js-dn').addClass('db absolute top-0 left-0 tr-translate translate-y--100');

  openMenu.on('click', function () {
    nav.removeClass('translate-y--100');
    openMenu.addClass('is-active');
    setTimeout(function () {
      return closeMenu.addClass('is-active');
    }, MENU_TRANSITION);
  });

  closeMenu.on('click', function () {
    nav.addClass('translate-y--100');
    openMenu.removeClass('is-active');
    setTimeout(function () {
      // closeMenu.removeClass('is-active');
      closeMenu.removeClass('is-active');
    }, MENU_TRANSITION);
  });
}

$(document).ready(initNav);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*

  TOP HERO resizer

  Looks for a hero element at the top of the page (designated by class), and
  resizes it to fill the viewport space minus the nav height.

 */

function initTopHero() {
  var resizers = $('.js-top-hero');

  if (!resizers.length) {
    return false;
  }

  function setHeight(el) {
    var navHeight = $('#header').outerHeight();
    var windowHeight = $(window).height();
    $(this).height(windowHeight - navHeight);
  }

  resizers.each(setHeight);
  resizers.children('.js-dn').removeClass('js-dn');

  $(window).resize(function () {
    $.throttle(resizers.each(setHeight), 100);
  });
}

$(document).ready(initTopHero);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

$('html').addClass('js');

/***/ })
/******/ ]);