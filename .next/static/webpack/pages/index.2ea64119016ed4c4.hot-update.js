"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title ? title : \"Default Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"First Next.js app!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Header;\nfunction TipsList() {\n    {\n        names.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: name\n            }, name, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this));\n    }\n}\n_c1 = TipsList;\nfunction HomePage() {\n    _s();\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleClick() {\n        setLikes(likes + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"m4sdoi624sGASZMfyLgbxubRP0c=\");\n_c2 = HomePage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"TipsList\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWpDLFNBQVNDLE9BQU8sS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUO0lBQ2QscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBSUQsUUFBUUEsUUFBUTs7Ozs7OzBCQUNyQiw4REFBQ0U7MEJBQUU7Ozs7Ozs7O0FBR1Q7S0FQU0g7QUFTVCxTQUFTSTtJQUNQO1FBQ0VDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7MEJBQWVEO2VBQVBBOzs7OztJQUViO0FBQ0Y7TUFOU0g7QUFRTSxTQUFTSzs7SUFFdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNhO1FBQ1BELFNBQVNELFFBQVE7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDYjtnQkFBT0MsT0FBTTs7Ozs7OzBCQUNkLDhEQUFDYTs7Ozs7MEJBSUQsOERBQUNDO2dCQUFPQyxTQUFTSjs7b0JBQWE7b0JBQU9GO29CQUFNOzs7Ozs7Ozs7Ozs7O0FBR2pEO0dBbEJ3QkQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPnt0aXRsZSA/IHRpdGxlIDogXCJEZWZhdWx0IFRpdGxlXCJ9PC9oMT5cclxuICAgICAgPHA+Rmlyc3QgTmV4dC5qcyBhcHAhPC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGlwc0xpc3QoKSB7XHJcbiAge1xyXG4gICAgbmFtZXMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XHJcbiAgICApKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgc2V0TGlrZXMobGlrZXMgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPVwiRGV2ZWxvcC4gUHJldmlldy4gU2hpcC4g8J+agFwiIC8+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICBcclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Pkxpa2UgKHtsaWtlc30pPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsInAiLCJUaXBzTGlzdCIsIm5hbWVzIiwibWFwIiwibmFtZSIsImxpIiwiSG9tZVBhZ2UiLCJsaWtlcyIsInNldExpa2VzIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJ1bCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});