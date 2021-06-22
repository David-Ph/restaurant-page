/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst loadHome = (function () {\n    const homeElement = document.createElement(\"div\");\n  \n    homeElement.innerHTML = `\n    <div class=\"home\">\n        <h1 class=\"home-title\">Come and get woke!</h1>\n        <h2 class=\"home-subtitle\">Relief your caffeine addiction!</h2>\n        <button class=\"see-menu\">See Menu</button>\n    </div>\n    <div class=\"content-container\">\n        <div class=\"location\">\n        <h2 class=\"title orange\">Where we are</h2>\n        <p class=\"logo\"><i class=\"fas fa-map-marker-alt orange\"></i></p>\n        <p class=\"details\">3012  Cimmaron Road, Garden Grove, California</p>\n        </div>\n        <div class=\"opening-hours\">\n        <h2 class=\"title orange\">We're open:</h2>\n        <p class=\"logo\"><i class=\"far fa-clock orange\"></i></i></p>\n        <p class=\"details\"><span class=\"orange\">Everyday:</span> 08.00 - 23.00</p>\n        </div>\n    </div>\n      `;\n  \n    return homeElement;\n  })();\n  \n  \n\n        \n\n//# sourceURL=webpack://06_restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst pageHeader = document.querySelector(\".page-header\");\nconst content = document.getElementById(\"content\");\n\n// ? create nav in page header\npageHeader.appendChild(_nav__WEBPACK_IMPORTED_MODULE_0__.loadNav);\n\n// ? initially show home in content\ncontent.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__.loadHome);\n\n// ? add event listener to pageHeader to change tabs\npageHeader.addEventListener(\"click\", changeTab);\n\nfunction changeTab(event) {\n  if (event.target.classList.contains(\"nav-item\")) {\n      console.log(event.target);\n  }\n}\n\n\n//# sourceURL=webpack://06_restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNav\": () => (/* binding */ loadNav)\n/* harmony export */ });\nconst loadNav = (function () {\n  const navElement = document.createElement(\"div\");\n  navElement.classList.add(\"page-container\");\n\n  navElement.innerHTML = `\n    <div class=\"page-logo\">\n        <img src=\"./images/page-logo.png\" alt=\"\" />\n    </div>\n    <ul class=\"main-nav\">\n        <li class=\"nav-item active\">Home</li>\n        <li class=\"nav-item\">Menu</li>\n        <li class=\"nav-item\">Contact</li>\n    </ul>\n    `;\n\n  return navElement;\n})();\n\n\n\n//# sourceURL=webpack://06_restaurant_page/./src/nav.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;