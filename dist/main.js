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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nconst loadContact = (function () {\r\n    const contactElement = document.createElement(\"div\");\r\n  \r\n    contactElement.innerHTML = `\r\n    <div class=\"home\">\r\n        <h1 class=\"home-title\">Contact</h1>\r\n        <h2 class=\"home-subtitle\">\r\n        If you want to consult us about your addiction!\r\n        </h2>\r\n    </div>\r\n    <div class=\"content-container contact-box\">\r\n        <div class=\"contact-info\">\r\n        <div class=\"location\">\r\n            <p class=\"logo\"><i class=\"fas fa-map-marker-alt orange\"></i></p>\r\n            <p class=\"details\">\r\n            3012 Cimmaron Road, Garden Grove, California\r\n            </p>\r\n            <p class=\"logo\"><i class=\"fas fa-phone-volume orange\"></i></p>\r\n            <p class=\"details\">334 992 0091</p>\r\n        </div>\r\n        </div>\r\n        <div class=\"contact-map\">\r\n        <div class=\"mapouter\">\r\n            <div class=\"gmap_canvas\">\r\n            <iframe\r\n                width=\"100%\"\r\n                height=\"300\"\r\n                id=\"gmap_canvas\"\r\n                src=\"https://maps.google.com/maps?q=kepri%20mall&t=&z=19&ie=UTF8&iwloc=&output=embed\"\r\n                frameborder=\"0\"\r\n                scrolling=\"no\"\r\n                marginheight=\"0\"\r\n                marginwidth=\"0\"\r\n            ></iframe>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n      `;\r\n  \r\n    return contactElement;\r\n  })();\r\n  \r\n  \r\n\r\n\r\n       \n\n//# sourceURL=webpack://06_restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst loadHome = (function () {\r\n    const homeElement = document.createElement(\"div\");\r\n  \r\n    homeElement.innerHTML = `\r\n    <div class=\"home\">\r\n        <h1 class=\"home-title\">Come and get woke!</h1>\r\n        <h2 class=\"home-subtitle\">Relief your caffeine addiction!</h2>\r\n        <button class=\"see-menu\">See Menu</button>\r\n    </div>\r\n    <div class=\"content-container\">\r\n        <div class=\"location\">\r\n        <h2 class=\"title orange\">Where we are</h2>\r\n        <p class=\"logo\"><i class=\"fas fa-map-marker-alt orange\"></i></p>\r\n        <p class=\"details\">3012  Cimmaron Road, Garden Grove, California</p>\r\n        </div>\r\n        <div class=\"opening-hours\">\r\n        <h2 class=\"title orange\">We're open:</h2>\r\n        <p class=\"logo\"><i class=\"far fa-clock orange\"></i></i></p>\r\n        <p class=\"details\"><span class=\"orange\">Everyday:</span> 08.00 - 23.00</p>\r\n        </div>\r\n    </div>\r\n      `;\r\n  \r\n    return homeElement;\r\n  })();\r\n  \r\n  \r\n\r\n        \n\n//# sourceURL=webpack://06_restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst pageHeader = document.querySelector(\".page-header\");\r\nconst content = document.getElementById(\"content\");\r\n\r\n// ? create nav in page header\r\npageHeader.appendChild(_nav__WEBPACK_IMPORTED_MODULE_0__.loadNav);\r\n\r\n// ? initially show home in content\r\ncontent.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__.loadHome);\r\n\r\n// ? add event listener to pageHeader to change tabs\r\npageHeader.addEventListener(\"click\", changeTab);\r\n\r\nfunction changeTab(event) {\r\n  if (event.target.classList.contains(\"nav-item\")) {\r\n      clearActiveTab();\r\n      event.target.classList.add('active');\r\n      if(event.target.innerHTML === 'Home'){\r\n        content.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__.loadHome);\r\n      }else if(event.target.innerHTML === 'Menu'){\r\n        content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu);\r\n      }else if(event.target.innerHTML === 'Contact'){\r\n        content.appendChild(_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact);\r\n      }\r\n  }\r\n}\r\n\r\nfunction clearActiveTab(){\r\n    const navItems = pageHeader.querySelector('.main-nav').querySelectorAll('.nav-item');\r\n    for(let i = 0; i < navItems.length; i++){\r\n      navItems[i].classList.remove('active');\r\n    }\r\n    content.innerHTML = '';\r\n}\n\n//# sourceURL=webpack://06_restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = (function () {\r\n    const menuElement = document.createElement(\"div\");\r\n  \r\n    menuElement.innerHTML = `\r\n    <div class=\"home\">\r\n          <h1 class=\"home-title\">Menu</h1>\r\n          <h2 class=\"home-subtitle\">All kinds of coffee for your fix!</h2>\r\n        </div>\r\n        <div class=\"content-container\">\r\n          <div class=\"menu-item\">\r\n            <div class=\"info\">\r\n              <p class=\"title\">Latte</p>\r\n              <p class=\"price\">Rp. 20.000</p>\r\n            </div>\r\n            <div class=\"menu-picture\">\r\n              <img src=\"./images/latte.jpg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"menu-item\">\r\n            <div class=\"info\">\r\n              <p class=\"title\">Americano</p>\r\n              <p class=\"price\">Rp. 15.000</p>\r\n            </div>\r\n            <div class=\"menu-picture\">\r\n              <img src=\"./images/americano.jpg\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"menu-item\">\r\n            <div class=\"info\">\r\n              <p class=\"title\">Espresso</p>\r\n              <p class=\"price\">Rp. 12.000</p>\r\n            </div>\r\n            <div class=\"menu-picture\">\r\n              <img src=\"./images/espresso.jpg\" alt=\"\">\r\n            </div>\r\n          </div> \r\n        </div>\r\n      `;\r\n  \r\n    return menuElement;\r\n  })();\r\n  \r\n  \r\n\r\n\r\n        \n\n//# sourceURL=webpack://06_restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNav\": () => (/* binding */ loadNav)\n/* harmony export */ });\nconst loadNav = (function () {\r\n  const navElement = document.createElement(\"div\");\r\n  navElement.classList.add(\"page-container\");\r\n\r\n  navElement.innerHTML = `\r\n    <div class=\"page-logo\">\r\n        <img src=\"./images/page-logo.png\" alt=\"\" />\r\n    </div>\r\n    <ul class=\"main-nav\">\r\n        <li class=\"nav-item active\">Home</li>\r\n        <li class=\"nav-item\">Menu</li>\r\n        <li class=\"nav-item\">Contact</li>\r\n    </ul>\r\n    `;\r\n\r\n  return navElement;\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://06_restaurant_page/./src/nav.js?");

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