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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title ? title : \"Default Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"First Next.js app!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Header;\nfunction TipsList() {\n    const nextJsTips = [];\n    {\n        nextJsTips.map((tip)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: name\n            }, name, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this));\n    }\n}\n_c1 = TipsList;\nfunction HomePage() {\n    _s();\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleClick() {\n        setLikes(likes + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Maverick\\\\Desktop\\\\Projects\\\\web\\\\next\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"m4sdoi624sGASZMfyLgbxubRP0c=\");\n_c2 = HomePage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"TipsList\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWpDLFNBQVNDLE9BQU8sS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUO0lBQ2QscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBSUQsUUFBUUEsUUFBUTs7Ozs7OzBCQUNyQiw4REFBQ0U7MEJBQUU7Ozs7Ozs7O0FBR1Q7S0FQU0g7QUFTVCxTQUFTSTtJQUNQLE1BQU1DLGFBQWEsRUFBRTtJQUVyQjtRQUNFQSxXQUFXQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ2QsOERBQUNDOzBCQUFlQztlQUFQQTs7Ozs7SUFFYjtBQUNGO01BUlNMO0FBVU0sU0FBU007O0lBRXRCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuQyxTQUFTYztRQUNQRCxTQUFTRCxRQUFRO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ2Q7Z0JBQU9DLE9BQU07Ozs7OzswQkFDZCw4REFBQ2M7Ozs7OzBCQUlELDhEQUFDQztnQkFBT0MsU0FBU0o7O29CQUFhO29CQUFPRjtvQkFBTTs7Ozs7Ozs7Ozs7OztBQUdqRDtHQWxCd0JEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57dGl0bGUgPyB0aXRsZSA6IFwiRGVmYXVsdCBUaXRsZVwifTwvaDE+XHJcbiAgICAgIDxwPkZpcnN0IE5leHQuanMgYXBwITwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpcHNMaXN0KCkge1xyXG4gIGNvbnN0IG5leHRKc1RpcHMgPSBbXTtcclxuXHJcbiAge1xyXG4gICAgbmV4dEpzVGlwcy5tYXAoKHRpcCkgPT4gKFxyXG4gICAgICA8bGkga2V5PXtuYW1lfT57bmFtZX08L2xpPlxyXG4gICAgKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG5cclxuICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgIHNldExpa2VzKGxpa2VzICsgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5MaWtlICh7bGlrZXN9KTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJwIiwiVGlwc0xpc3QiLCJuZXh0SnNUaXBzIiwibWFwIiwidGlwIiwibGkiLCJuYW1lIiwiSG9tZVBhZ2UiLCJsaWtlcyIsInNldExpa2VzIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJ1bCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});