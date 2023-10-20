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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_projectile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/projectile.js */ \"./src/scripts/projectile.js\");\n\nwindow.Projectile = _scripts_projectile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const myCanvas = document.getElementById(\"game-canvas\");\n  myCanvas.width = 1000;\n  myCanvas.height = 750;\n  const context = myCanvas.getContext(\"2d\");\n  const projectile = new _scripts_projectile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](30, 20);\n\n  // for (let i = 0; i < 100; i++) {\n  //     context.clearRect(0,0,500,500);\n  //     projectile.draw(context);\n  //     projectile.move();\n  // }\n\n  setInterval(function () {\n    // context.clearRect(0,0,500,500);\n    projectile.draw(context);\n    projectile.move();\n  }, 100);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUQ7QUFFakRDLE1BQU0sQ0FBQ0QsVUFBVSxHQUFHQSw4REFBVTtBQUU5QkUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3ZERCxRQUFRLENBQUNFLEtBQUssR0FBRyxJQUFJO0VBQ3JCRixRQUFRLENBQUNHLE1BQU0sR0FBRyxHQUFHO0VBQ3JCLE1BQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3pDLE1BQU1DLFVBQVUsR0FBRyxJQUFJViw4REFBVSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7O0VBRXhDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUFXLFdBQVcsQ0FBQyxZQUFVO0lBQ2xCO0lBQ0FELFVBQVUsQ0FBQ0UsSUFBSSxDQUFDSixPQUFPLENBQUM7SUFDeEJFLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDckIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUVYLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdGlsZSBmcm9tIFwiLi9zY3JpcHRzL3Byb2plY3RpbGUuanNcIjtcblxud2luZG93LlByb2plY3RpbGUgPSBQcm9qZWN0aWxlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbXlDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIG15Q2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBteUNhbnZhcy5oZWlnaHQgPSA3NTA7XG4gICAgY29uc3QgY29udGV4dCA9IG15Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBwcm9qZWN0aWxlID0gbmV3IFByb2plY3RpbGUoMzAsMjApO1xuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIC8vICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsNTAwLDUwMCk7XG4gICAgLy8gICAgIHByb2plY3RpbGUuZHJhdyhjb250ZXh0KTtcbiAgICAvLyAgICAgcHJvamVjdGlsZS5tb3ZlKCk7XG4gICAgLy8gfVxuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gY29udGV4dC5jbGVhclJlY3QoMCwwLDUwMCw1MDApO1xuICAgICAgICBwcm9qZWN0aWxlLmRyYXcoY29udGV4dCk7XG4gICAgICAgIHByb2plY3RpbGUubW92ZSgpO1xuICAgIH0sIDEwMCk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbIlByb2plY3RpbGUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJteUNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInByb2plY3RpbGUiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/projectile.js":
/*!***********************************!*\
  !*** ./src/scripts/projectile.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Projectile {\n  constructor(power, initialAngle) {\n    this.angleInRadians = initialAngle * Math.PI / 180;\n    this.initialHorizontalVelocity = power * Math.cos(this.angleInRadians);\n    this.initialVerticalVelocity = power * Math.sin(this.angleInRadians);\n    this.color = \"Black\";\n    this.pos = [500, 500];\n    this.gravity = 9.81;\n    this.radius = 1;\n    this.horizontalPosition = initialHorizontalVelocity * time;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n  }\n  move() {\n    if (this.initialAngle === 0) {\n      this.pos[0] += this.vel[0];\n    } else if (this.initialAngle === 90) {\n      this.pos[1] -= this.vel[1];\n    } else if (this.initialAngle === 180) {\n      this.pos[0] -= this.vel[0];\n    } else if (this.initialAngle === 270) {\n      this.pos[1] += this.vel[1];\n    } else if (this.initialAngle === 360) {\n      this.pos[0] += this.vel[0];\n    } else {\n      this.pos[0] += this.vel[0];\n      this.pos[1] -= this.vel[1];\n    }\n    this.vel[1] += this.gravity;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3Byb2plY3RpbGUuanM/ZmY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0aWxlIHsgXG4gICAgY29uc3RydWN0b3IocG93ZXIsaW5pdGlhbEFuZ2xlKSB7XG4gICAgICAgIHRoaXMuYW5nbGVJblJhZGlhbnMgPSAoaW5pdGlhbEFuZ2xlICogTWF0aC5QSSkgLyAxODA7XG4gICAgICAgIHRoaXMuaW5pdGlhbEhvcml6b250YWxWZWxvY2l0eSA9IHBvd2VyICogTWF0aC5jb3ModGhpcy5hbmdsZUluUmFkaWFucylcbiAgICAgICAgdGhpcy5pbml0aWFsVmVydGljYWxWZWxvY2l0eSA9IHBvd2VyICogTWF0aC5zaW4odGhpcy5hbmdsZUluUmFkaWFucylcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiQmxhY2tcIjtcbiAgICAgICAgdGhpcy5wb3MgPSBbNTAwLDUwMF1cbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gOS44MTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxO1xuICAgICAgICB0aGlzLmhvcml6b250YWxQb3NpdGlvbiA9IGluaXRpYWxIb3Jpem9udGFsVmVsb2NpdHkgKiB0aW1lO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NbMF0sdGhpcy5wb3NbMV0sdGhpcy5yYWRpdXMsMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbEFuZ2xlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXVxuICAgICAgICB9IGVsc2UgaWYodGhpcy5pbml0aWFsQW5nbGUgPT09IDkwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSAtPSB0aGlzLnZlbFsxXVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbEFuZ2xlID09PSAxODApIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdIC09IHRoaXMudmVsWzBdXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsQW5nbGUgPT09IDI3MCkge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gKz0gdGhpcy52ZWxbMV1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxBbmdsZSA9PT0gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSArPSB0aGlzLnZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF1cbiAgICAgICAgICAgIHRoaXMucG9zWzFdIC09IHRoaXMudmVsWzFdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZlbFsxXSArPSB0aGlzLmdyYXZpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0aWxlOyJdLCJuYW1lcyI6WyJQcm9qZWN0aWxlIiwiY29uc3RydWN0b3IiLCJwb3dlciIsImluaXRpYWxBbmdsZSIsImFuZ2xlSW5SYWRpYW5zIiwiTWF0aCIsIlBJIiwiaW5pdGlhbEhvcml6b250YWxWZWxvY2l0eSIsImNvcyIsImluaXRpYWxWZXJ0aWNhbFZlbG9jaXR5Iiwic2luIiwiY29sb3IiLCJwb3MiLCJncmF2aXR5IiwicmFkaXVzIiwiaG9yaXpvbnRhbFBvc2l0aW9uIiwidGltZSIsImRyYXciLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsU3R5bGUiLCJzdHJva2UiLCJtb3ZlIiwidmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/projectile.js\n");

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