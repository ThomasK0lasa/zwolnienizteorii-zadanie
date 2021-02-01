/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/404.ejs":
/*!***************************!*\
  !*** ./src/pages/404.ejs ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>404 Not found</h1>");

/***/ }),

/***/ "./src/pages/example2.ejs":
/*!********************************!*\
  !*** ./src/pages/example2.ejs ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>\r\n    <%= title %>\r\n</h1>\r\n<button class=\"my-button\">Click me <%= counter %></button>");

/***/ }),

/***/ "./src/pages/home.ejs":
/*!****************************!*\
  !*** ./src/pages/home.ejs ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>Start <%= where %>!</h1>");

/***/ }),

/***/ "./src/pages/test/example1.ejs":
/*!*************************************!*\
  !*** ./src/pages/test/example1.ejs ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>\r\n    <%= title %>\r\n</h1>\r\n<% for (let i of title) { %>\r\n    <span>\r\n        <%= i %>\r\n    </span>\r\n    <% } %>");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");


(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/', 'home', 'home.ejs', function() {
  this.where = 'here';
});

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/ex1', 'example1', 'test/example1.ejs', function() {
  this.title = 'Example 1';
});

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('/ex2', 'example2', 'example2.ejs', function() {
  this.title = 'Example 2';
  this.counter = 0;
  this.$on('.my-button', 'click', () => {
    this.counter += 1;
    this.$refresh();
  });
});

(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)('*', '404', '404.ejs', function () {});


/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "engine": () => /* binding */ engine
/* harmony export */ });
// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
const cache = {};

const engine = (str, path, data) => {
  const template = __webpack_require__("./src/pages sync recursive ^\\.\\/.*$")("./"+path).default;
  // Figure out if we're getting a template, or if we need to
  // load the template - and be sure to cache the result.
  const fn = !/\W/.test(template) ? cache[str] = cache[str] || engine(template) :
    // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj",
      "var p=[],print=function(){p.push.apply(p,arguments);};" +             
      // Introduce the data as local variables using with(){}
      "with(obj){p.push('" +
      // Convert the template into pure JavaScript
      template
        .replace(/[\r\t\n]/g, " ")
        .split("<%").join("\t")
        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
        .replace(/\t=(.*?)%>/g, "',$1,'")
        .split("\t").join("');")
        .split("%>").join("p.push('")
        .split("\r").join("\\'")
    + "');}return p.join('');");
   
  // Provide some basic currying to the user
  return data ? fn( data ) : fn;
};


/***/ }),

/***/ "./src/pages sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./src/pages/ sync ^\.\/.*$ ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./404.ejs": "./src/pages/404.ejs",
	"./example2.ejs": "./src/pages/example2.ejs",
	"./home.ejs": "./src/pages/home.ejs",
	"./test/example1.ejs": "./src/pages/test/example1.ejs"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": () => /* binding */ route
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engine.js");
// JavaScript router in 20 lines
// Joakim Carlstein - https://joakim.beng.se/

let el = null;
let events = [];
const routes = {};

const route = (path, templateId, templateFile, controller) => {
  const listeners = [];
  controller.prototype.$on = (selector, evt, handler) => events.push([selector, evt, handler]);
  controller.prototype.$refresh = () => listeners.forEach(fn => fn());
  routes[path] = {
    templateId: templateId,
    controller: controller,
    templateFile: templateFile,
    onRefresh: listeners.push.bind(listeners)
  };
};

const forEachEvent = fnName => {
  for (let i = 0; i < events.length; i++) {
    const els = el.querySelectorAll(events[i][0]);
    for (let j = 0; j < els.length; j++) {
      els[j][fnName].apply(els[j], events[i].slice(1));
    }
  }
};

const router = () => {
  // Lazy load view element:
  el = el || document.getElementById('app');
  // Remove current event listeners:
  forEachEvent('removeEventListener');
  // Clear events, to prepare for next render:
  events = [];
  // Current route url (getting rid of '#' in hash as well):
  const url = location.hash.slice(1) || '/';
  // Get route by url or fallback if it does not exist:
  const route = routes[url] || routes['*'];
  if (route && route.controller) {
    const ctrl = new route.controller();
    // Listen on route refreshes:
    route.onRefresh(() => {
      forEachEvent('removeEventListener');
      // Render route template with John Resig's template engine:
      el.innerHTML = (0,_engine__WEBPACK_IMPORTED_MODULE_0__.engine)(route.templateId, route.templateFile, ctrl);
      forEachEvent('addEventListener');
    });
    // Trigger the first refresh:
    ctrl.$refresh();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL3BhZ2VzLzQwNC5lanMiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3NyYy9wYWdlcy9leGFtcGxlMi5lanMiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3NyYy9wYWdlcy9ob21lLmVqcyIsIndlYnBhY2s6Ly96YWRhbmllLy4vc3JjL3BhZ2VzL3Rlc3QvZXhhbXBsZTEuZWpzIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL3phZGFuaWUvLi9zcmMvcGFnZXN8c3luY3wvXi8uKiQiLCJ3ZWJwYWNrOi8vemFkYW5pZS8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vemFkYW5pZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96YWRhbmllL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vemFkYW5pZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3phZGFuaWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsd0JBQXdCLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QyxpRUFBZSxtR0FBbUcsRTs7Ozs7Ozs7Ozs7Ozs7O0FDQWxILGlFQUFlLDhCQUE4QixFOzs7Ozs7Ozs7Ozs7Ozs7QUNBN0MsaUVBQWUsK0RBQStELGdFQUFnRSxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7QUNBakg7O0FBRWpDLDhDQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVELDhDQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVELDhDQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELDhDQUFLLHNDQUFzQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CM0M7QUFDQTtBQUNBOztBQUVPO0FBQ1AsbUJBQW1CLDZEQUFRLElBQVUsS0FBSyxDQUFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0QkFBNEI7QUFDN0Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjs7QUFFN0I7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RDs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ2tDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBTTtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiPGgxPjQwNCBOb3QgZm91bmQ8L2gxPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlxcclxcbiAgICA8JT0gdGl0bGUgJT5cXHJcXG48L2gxPlxcclxcbjxidXR0b24gY2xhc3M9XFxcIm15LWJ1dHRvblxcXCI+Q2xpY2sgbWUgPCU9IGNvdW50ZXIgJT48L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5TdGFydCA8JT0gd2hlcmUgJT4hPC9oMT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5cXHJcXG4gICAgPCU9IHRpdGxlICU+XFxyXFxuPC9oMT5cXHJcXG48JSBmb3IgKGxldCBpIG9mIHRpdGxlKSB7ICU+XFxyXFxuICAgIDxzcGFuPlxcclxcbiAgICAgICAgPCU9IGkgJT5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8JSB9ICU+XCI7IiwiaW1wb3J0IHsgcm91dGUgfSBmcm9tICcuL3JvdXRlcic7XG5cbnJvdXRlKCcvJywgJ2hvbWUnLCAnaG9tZS5lanMnLCBmdW5jdGlvbigpIHtcbiAgdGhpcy53aGVyZSA9ICdoZXJlJztcbn0pO1xuXG5yb3V0ZSgnL2V4MScsICdleGFtcGxlMScsICd0ZXN0L2V4YW1wbGUxLmVqcycsIGZ1bmN0aW9uKCkge1xuICB0aGlzLnRpdGxlID0gJ0V4YW1wbGUgMSc7XG59KTtcblxucm91dGUoJy9leDInLCAnZXhhbXBsZTInLCAnZXhhbXBsZTIuZWpzJywgZnVuY3Rpb24oKSB7XG4gIHRoaXMudGl0bGUgPSAnRXhhbXBsZSAyJztcbiAgdGhpcy5jb3VudGVyID0gMDtcbiAgdGhpcy4kb24oJy5teS1idXR0b24nLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgdGhpcy4kcmVmcmVzaCgpO1xuICB9KTtcbn0pO1xuXG5yb3V0ZSgnKicsICc0MDQnLCAnNDA0LmVqcycsIGZ1bmN0aW9uICgpIHt9KTtcbiIsIi8vIFNpbXBsZSBKYXZhU2NyaXB0IFRlbXBsYXRpbmdcbi8vIEpvaG4gUmVzaWcgLSBodHRwczovL2pvaG5yZXNpZy5jb20vIC0gTUlUIExpY2Vuc2VkXG5jb25zdCBjYWNoZSA9IHt9O1xuXG5leHBvcnQgY29uc3QgZW5naW5lID0gKHN0ciwgcGF0aCwgZGF0YSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vcGFnZXMvJytwYXRoKS5kZWZhdWx0O1xuICAvLyBGaWd1cmUgb3V0IGlmIHdlJ3JlIGdldHRpbmcgYSB0ZW1wbGF0ZSwgb3IgaWYgd2UgbmVlZCB0b1xuICAvLyBsb2FkIHRoZSB0ZW1wbGF0ZSAtIGFuZCBiZSBzdXJlIHRvIGNhY2hlIHRoZSByZXN1bHQuXG4gIGNvbnN0IGZuID0gIS9cXFcvLnRlc3QodGVtcGxhdGUpID8gY2FjaGVbc3RyXSA9IGNhY2hlW3N0cl0gfHwgZW5naW5lKHRlbXBsYXRlKSA6XG4gICAgLy8gR2VuZXJhdGUgYSByZXVzYWJsZSBmdW5jdGlvbiB0aGF0IHdpbGwgc2VydmUgYXMgYSB0ZW1wbGF0ZVxuICAgIC8vIGdlbmVyYXRvciAoYW5kIHdoaWNoIHdpbGwgYmUgY2FjaGVkKS5cbiAgICBuZXcgRnVuY3Rpb24oXCJvYmpcIixcbiAgICAgIFwidmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307XCIgKyAgICAgICAgICAgICBcbiAgICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAgIFwid2l0aChvYmope3AucHVzaCgnXCIgK1xuICAgICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICAgIHRlbXBsYXRlXG4gICAgICAgIC5yZXBsYWNlKC9bXFxyXFx0XFxuXS9nLCBcIiBcIilcbiAgICAgICAgLnNwbGl0KFwiPCVcIikuam9pbihcIlxcdFwiKVxuICAgICAgICAucmVwbGFjZSgvKChefCU+KVteXFx0XSopJy9nLCBcIiQxXFxyXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCBcIicsJDEsJ1wiKVxuICAgICAgICAuc3BsaXQoXCJcXHRcIikuam9pbihcIicpO1wiKVxuICAgICAgICAuc3BsaXQoXCIlPlwiKS5qb2luKFwicC5wdXNoKCdcIilcbiAgICAgICAgLnNwbGl0KFwiXFxyXCIpLmpvaW4oXCJcXFxcJ1wiKVxuICAgICsgXCInKTt9cmV0dXJuIHAuam9pbignJyk7XCIpO1xuICAgXG4gIC8vIFByb3ZpZGUgc29tZSBiYXNpYyBjdXJyeWluZyB0byB0aGUgdXNlclxuICByZXR1cm4gZGF0YSA/IGZuKCBkYXRhICkgOiBmbjtcbn07XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vNDA0LmVqc1wiOiBcIi4vc3JjL3BhZ2VzLzQwNC5lanNcIixcblx0XCIuL2V4YW1wbGUyLmVqc1wiOiBcIi4vc3JjL3BhZ2VzL2V4YW1wbGUyLmVqc1wiLFxuXHRcIi4vaG9tZS5lanNcIjogXCIuL3NyYy9wYWdlcy9ob21lLmVqc1wiLFxuXHRcIi4vdGVzdC9leGFtcGxlMS5lanNcIjogXCIuL3NyYy9wYWdlcy90ZXN0L2V4YW1wbGUxLmVqc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9wYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8vIEphdmFTY3JpcHQgcm91dGVyIGluIDIwIGxpbmVzXG4vLyBKb2FraW0gQ2FybHN0ZWluIC0gaHR0cHM6Ly9qb2FraW0uYmVuZy5zZS9cbmltcG9ydCB7IGVuZ2luZSB9IGZyb20gJy4vZW5naW5lJztcbmxldCBlbCA9IG51bGw7XG5sZXQgZXZlbnRzID0gW107XG5jb25zdCByb3V0ZXMgPSB7fTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlID0gKHBhdGgsIHRlbXBsYXRlSWQsIHRlbXBsYXRlRmlsZSwgY29udHJvbGxlcikgPT4ge1xuICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgY29udHJvbGxlci5wcm90b3R5cGUuJG9uID0gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpID0+IGV2ZW50cy5wdXNoKFtzZWxlY3RvciwgZXZ0LCBoYW5kbGVyXSk7XG4gIGNvbnRyb2xsZXIucHJvdG90eXBlLiRyZWZyZXNoID0gKCkgPT4gbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gIHJvdXRlc1twYXRoXSA9IHtcbiAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZUlkLFxuICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgdGVtcGxhdGVGaWxlOiB0ZW1wbGF0ZUZpbGUsXG4gICAgb25SZWZyZXNoOiBsaXN0ZW5lcnMucHVzaC5iaW5kKGxpc3RlbmVycylcbiAgfTtcbn07XG5cbmNvbnN0IGZvckVhY2hFdmVudCA9IGZuTmFtZSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxzID0gZWwucXVlcnlTZWxlY3RvckFsbChldmVudHNbaV1bMF0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWxzLmxlbmd0aDsgaisrKSB7XG4gICAgICBlbHNbal1bZm5OYW1lXS5hcHBseShlbHNbal0sIGV2ZW50c1tpXS5zbGljZSgxKSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCByb3V0ZXIgPSAoKSA9PiB7XG4gIC8vIExhenkgbG9hZCB2aWV3IGVsZW1lbnQ6XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAvLyBSZW1vdmUgY3VycmVudCBldmVudCBsaXN0ZW5lcnM6XG4gIGZvckVhY2hFdmVudCgncmVtb3ZlRXZlbnRMaXN0ZW5lcicpO1xuICAvLyBDbGVhciBldmVudHMsIHRvIHByZXBhcmUgZm9yIG5leHQgcmVuZGVyOlxuICBldmVudHMgPSBbXTtcbiAgLy8gQ3VycmVudCByb3V0ZSB1cmwgKGdldHRpbmcgcmlkIG9mICcjJyBpbiBoYXNoIGFzIHdlbGwpOlxuICBjb25zdCB1cmwgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpIHx8ICcvJztcbiAgLy8gR2V0IHJvdXRlIGJ5IHVybCBvciBmYWxsYmFjayBpZiBpdCBkb2VzIG5vdCBleGlzdDpcbiAgY29uc3Qgcm91dGUgPSByb3V0ZXNbdXJsXSB8fCByb3V0ZXNbJyonXTtcbiAgaWYgKHJvdXRlICYmIHJvdXRlLmNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBjdHJsID0gbmV3IHJvdXRlLmNvbnRyb2xsZXIoKTtcbiAgICAvLyBMaXN0ZW4gb24gcm91dGUgcmVmcmVzaGVzOlxuICAgIHJvdXRlLm9uUmVmcmVzaCgoKSA9PiB7XG4gICAgICBmb3JFYWNoRXZlbnQoJ3JlbW92ZUV2ZW50TGlzdGVuZXInKTtcbiAgICAgIC8vIFJlbmRlciByb3V0ZSB0ZW1wbGF0ZSB3aXRoIEpvaG4gUmVzaWcncyB0ZW1wbGF0ZSBlbmdpbmU6XG4gICAgICBlbC5pbm5lckhUTUwgPSBlbmdpbmUocm91dGUudGVtcGxhdGVJZCwgcm91dGUudGVtcGxhdGVGaWxlLCBjdHJsKTtcbiAgICAgIGZvckVhY2hFdmVudCgnYWRkRXZlbnRMaXN0ZW5lcicpO1xuICAgIH0pO1xuICAgIC8vIFRyaWdnZXIgdGhlIGZpcnN0IHJlZnJlc2g6XG4gICAgY3RybC4kcmVmcmVzaCgpO1xuICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHJvdXRlcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJvdXRlcik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==