/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_projectile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/projectile.js */ \"./src/scripts/projectile.js\");\n\nwindow.Projectile = _scripts_projectile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const myCanvas = document.getElementById(\"game-canvas\");\n  myCanvas.width = 1000;\n  myCanvas.height = 750;\n  const context = myCanvas.getContext(\"2d\");\n  const projectile = new _scripts_projectile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 750, 45, 10);\n  setInterval(function () {\n    // context.clearRect();\n    projectile.draw(context);\n    projectile.move();\n  }, 100);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUQ7QUFFakRDLE1BQU0sQ0FBQ0QsVUFBVSxHQUFHQSw4REFBVTtBQUU5QkUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3ZERCxRQUFRLENBQUNFLEtBQUssR0FBRyxJQUFJO0VBQ3JCRixRQUFRLENBQUNHLE1BQU0sR0FBRyxHQUFHO0VBQ3JCLE1BQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3pDLE1BQU1DLFVBQVUsR0FBRyxJQUFJViw4REFBVSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztFQUU5Q1csV0FBVyxDQUFDLFlBQVU7SUFDbEI7SUFDQUQsVUFBVSxDQUFDRSxJQUFJLENBQUNKLE9BQU8sQ0FBQztJQUN4QkUsVUFBVSxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO0FBRVgsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0aWxlIGZyb20gXCIuL3NjcmlwdHMvcHJvamVjdGlsZS5qc1wiO1xuXG53aW5kb3cuUHJvamVjdGlsZSA9IFByb2plY3RpbGU7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBteUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgbXlDYW52YXMud2lkdGggPSAxMDAwO1xuICAgIG15Q2FudmFzLmhlaWdodCA9IDc1MDtcbiAgICBjb25zdCBjb250ZXh0ID0gbXlDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZSgwLDc1MCw0NSwxMCk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAvLyBjb250ZXh0LmNsZWFyUmVjdCgpO1xuICAgICAgICBwcm9qZWN0aWxlLmRyYXcoY29udGV4dCk7XG4gICAgICAgIHByb2plY3RpbGUubW92ZSgpO1xuICAgIH0sIDEwMCk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIlByb2plY3RpbGUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJteUNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInByb2plY3RpbGUiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/projectile.js":
/*!***********************************!*\
  !*** ./src/scripts/projectile.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Projectile {\n  constructor(x, y, degrees, power) {\n    this.x = x;\n    this.y = y;\n    this.angle = degrees * Math.PI / 180;\n    this.power = power;\n    this.active = true;\n    this.gravity = 0.2;\n    this.velocity = 0;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);\n    ctx.fillStyle = \"Black\";\n    ctx.fill();\n    ctx.closePath();\n  }\n  move() {\n    this.x += Math.cos(this.angle) * this.power;\n    this.y -= Math.sin(this.angle) * this.power;\n    this.velocity += this.gravity;\n    this.y += this.velocity;\n  }\n  checkCollision(tank) {\n    if (this.x < tank.x + tank.width && this.x + 5 > tank.x && this.y < tank.y + tank.height && this.y + 5 > tank.y) {\n      this.active = false;\n      return true;\n    }\n    return false;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wcm9qZWN0aWxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLENBQUM7RUFDYkMsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLE9BQU8sRUFBQ0MsS0FBSyxFQUFFO0lBQzNCLElBQUksQ0FBQ0gsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNHLEtBQUssR0FBSUYsT0FBTyxHQUFHRyxJQUFJLENBQUNDLEVBQUUsR0FBSSxHQUFHO0lBQ3RDLElBQUksQ0FBQ0gsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0ksTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxPQUFPLEdBQUcsR0FBRztJQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO0VBQ3JCO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ2IsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHSSxJQUFJLENBQUNDLEVBQUUsQ0FBQztJQUN2Q0ssR0FBRyxDQUFDRyxTQUFTLEdBQUcsT0FBTztJQUN2QkgsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNWSixHQUFHLENBQUNLLFNBQVMsQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ2pCLENBQUMsSUFBSUssSUFBSSxDQUFDYSxHQUFHLENBQUMsSUFBSSxDQUFDZCxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUNELEtBQUs7SUFDM0MsSUFBSSxDQUFDRixDQUFDLElBQUlJLElBQUksQ0FBQ2MsR0FBRyxDQUFDLElBQUksQ0FBQ2YsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDRCxLQUFLO0lBRTNDLElBQUksQ0FBQ00sUUFBUSxJQUFJLElBQUksQ0FBQ0QsT0FBTztJQUM3QixJQUFJLENBQUNQLENBQUMsSUFBSSxJQUFJLENBQUNRLFFBQVE7RUFDM0I7RUFFQVcsY0FBY0EsQ0FBQ0MsSUFBSSxFQUFFO0lBQ2pCLElBQ0ksSUFBSSxDQUFDckIsQ0FBQyxHQUFHcUIsSUFBSSxDQUFDckIsQ0FBQyxHQUFHcUIsSUFBSSxDQUFDQyxLQUFLLElBQzVCLElBQUksQ0FBQ3RCLENBQUMsR0FBRyxDQUFDLEdBQUdxQixJQUFJLENBQUNyQixDQUFDLElBQ25CLElBQUksQ0FBQ0MsQ0FBQyxHQUFHb0IsSUFBSSxDQUFDcEIsQ0FBQyxHQUFHb0IsSUFBSSxDQUFDRSxNQUFNLElBQzdCLElBQUksQ0FBQ3RCLENBQUMsR0FBRyxDQUFDLEdBQUdvQixJQUFJLENBQUNwQixDQUFDLEVBQ3JCO01BQ0UsSUFBSSxDQUFDTSxNQUFNLEdBQUcsS0FBSztNQUNuQixPQUFPLElBQUk7SUFDZjtJQUNBLE9BQU8sS0FBSztFQUNoQjtBQUNKO0FBRUEsK0RBQWVULFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdGlsZS5qcz9mZjU3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3RpbGUgeyBcbiAgICBjb25zdHJ1Y3Rvcih4LHksZGVncmVlcyxwb3dlcikge1xuICAgICAgICB0aGlzLnggPSB4OyBcbiAgICAgICAgdGhpcy55ID0geTsgXG4gICAgICAgIHRoaXMuYW5nbGUgPSAoZGVncmVlcyAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4yO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LHRoaXMueSwxLDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiQmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMucG93ZXI7XG4gICAgICAgIHRoaXMueSAtPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIHRoaXMucG93ZXI7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eSArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5O1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKHRhbmspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy54IDwgdGFuay54ICsgdGFuay53aWR0aCAmJlxuICAgICAgICAgICAgdGhpcy54ICsgNSA+IHRhbmsueCAmJlxuICAgICAgICAgICAgdGhpcy55IDwgdGFuay55ICsgdGFuay5oZWlnaHQgJiZcbiAgICAgICAgICAgIHRoaXMueSArIDUgPiB0YW5rLnlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlOyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RpbGU7Il0sIm5hbWVzIjpbIlByb2plY3RpbGUiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiZGVncmVlcyIsInBvd2VyIiwiYW5nbGUiLCJNYXRoIiwiUEkiLCJhY3RpdmUiLCJncmF2aXR5IiwidmVsb2NpdHkiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsIm1vdmUiLCJjb3MiLCJzaW4iLCJjaGVja0NvbGxpc2lvbiIsInRhbmsiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/projectile.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;