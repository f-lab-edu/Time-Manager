/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/d_day.js":
/*!*********************!*\
  !*** ./js/d_day.js ***!
  \*********************/
/***/ (() => {

eval("const DDAY_INPUT = document.querySelector(\".main-content--d-day\");\r\nconst DDAY_INFO_MSG = document.querySelector(\".main-content--h1\");\r\nconst RE_DDAY = document.querySelector(\".main-content--d-day-btn\");\r\nconst SAVED_DDAY = localStorage.getItem(\"dday\");\r\n\r\nRE_DDAY.style.display = \"none\";\r\n\r\nRE_DDAY.addEventListener(\"click\", (e) => {\r\n  localStorage.removeItem(\"dday\");\r\n  location.reload();\r\n});\r\n\r\nDDAY_INPUT.addEventListener(\"input\", (e) => {\r\n  localStorage.setItem(\"dday\", e.target.value);\r\n  countDate(e.target.value);\r\n});\r\n\r\nconst countDate = (date) => {\r\n  const nowDate = new Date();\r\n  //자정을 기준으로 날짜를 가져옴\r\n  const targetDate = new Date(date).setHours(0, 0, 0, 0);\r\n  //밀리세컨드라서 나눠줘야 함.\r\n  const remaining = (targetDate - nowDate) / 1000;\r\n  const remainingDate = Math.ceil(remaining / 60 / 60 / 24);\r\n\r\n  if (remainingDate <= 0) {\r\n    DDAY_INFO_MSG.innerHTML = \"D-Day가 종료되었습니다.\";\r\n    DDAY_INFO_MSG.style.display = \"block\";\r\n  } else {\r\n    DDAY_INFO_MSG.innerHTML = \"🍅D-\" + remainingDate;\r\n    DDAY_INFO_MSG.style.fontSize = \"60px\";\r\n    DDAY_INPUT.style.display = \"none\";\r\n    RE_DDAY.style.display = \"block\";\r\n  }\r\n};\r\n\r\nif (SAVED_DDAY) {\r\n  countDate(SAVED_DDAY);\r\n}\r\n\n\n//# sourceURL=webpack://Time-Manager/./js/d_day.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _d_day_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d_day.js */ \"./js/d_day.js\");\n/* harmony import */ var _d_day_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_day_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wise_saying_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wise_saying.js */ \"./js/wise_saying.js\");\n/* harmony import */ var _wise_saying_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wise_saying_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack://Time-Manager/./js/index.js?");

/***/ }),

/***/ "./js/wise_saying.js":
/*!***************************!*\
  !*** ./js/wise_saying.js ***!
  \***************************/
/***/ (() => {

eval("WISE_SAYING = document.querySelector(\".main-content__text\");\r\n\r\n$.ajax({\r\n  method: \"GET\",\r\n  url: \"https://api.qwer.pw/request/helpful_text\",\r\n  data: { apikey: \"guest\" },\r\n}).done((msg) => {\r\n  let extractMSG = msg.split('respond\":\"');\r\n  WISE_SAYING.innerHTML = extractMSG[1].replace('\"}]', \"\");\r\n  WISE_SAYING.innerHTML = WISE_SAYING.innerHTML.replace(\"-\", \"<br /> - \");\r\n  WISE_SAYING.innerHTML = WISE_SAYING.innerHTML.replace(\"–\", \"<br /> - \");\r\n});\r\n\n\n//# sourceURL=webpack://Time-Manager/./js/wise_saying.js?");

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;