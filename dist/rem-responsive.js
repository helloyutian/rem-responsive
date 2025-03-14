(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RemResponsive"] = factory();
	else
		root["RemResponsive"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
!function() {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// 计算字体大小
function recalc(_a) {
    var root = _a.root, max = _a.max;
    var docEl = document.documentElement;
    var maxWidth = !max || isNaN(max) ? docEl.clientWidth : max;
    var clientWidth = Math.min(docEl.clientWidth, maxWidth);
    var fz = clientWidth / root;
    docEl.style.fontSize = Number(fz.toFixed(5)) + 'px';
}
var RemResponsive = {
    config: function (_a) {
        var root = _a.root, max = _a.max, _b = _a.watch, watch = _b === void 0 ? false : _b;
        if (isNaN(root) || root <= 0) {
            throw new Error('params `root` is invalid');
        }
        var timer;
        if (watch) {
            var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
            window.addEventListener(resizeEvt, function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    recalc({ root: root, max: max });
                }, 150);
            }, false);
        }
        recalc({ root: root, max: max });
    }
};
exports["default"] = RemResponsive;

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rem-responsive.js.map