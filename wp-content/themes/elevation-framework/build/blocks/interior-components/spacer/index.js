/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const resizeCornerNE = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 18h4.5v1.5h-7v-7H6V17L17 6h-4.5V4.5h7v7H18V7L7 18Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeCornerNE);
//# sourceMappingURL=resize-corner-n-e.js.map

/***/ }),

/***/ "./src/blocks/interior-components/spacer/edit.js":
/*!*******************************************************!*\
  !*** ./src/blocks/interior-components/spacer/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "./src/blocks/interior-components/spacer/options.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/spacer/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/spacer/editor.scss");


/* Gutenberg Dependencies */



/* Internal Dependencies */


/* Block */





const HeightSelectControl = ({
  space,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Spacer Height",
    value: space,
    options: _options__WEBPACK_IMPORTED_MODULE_5__.options,
    onChange: selectedItem => {
      setAttributes({
        space: selectedItem
      });
    }
  });
};

const Edit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_6__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.getBlockName)(blockName);
  const {
    anchor,
    space,
    line,
    lineType,
    linePosition
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `${name} ${space} line-${line ? 'enable' : 'disable'} line-type-${lineType} position-${linePosition}`
  });
  const controls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacer Settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeightSelectControl, {
    space: space,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Show line division.",
    checked: line,
    onChange: newValue => {
      setAttributes({
        line: newValue
      });
    }
  }), line && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Type Line Division.",
    value: lineType,
    options: _options__WEBPACK_IMPORTED_MODULE_5__.lineOptions,
    onChange: selectedItem => {
      setAttributes({
        lineType: selectedItem
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Line Position.",
    value: linePosition,
    options: _options__WEBPACK_IMPORTED_MODULE_5__.linePositionOptions,
    onChange: selectedItem => {
      setAttributes({
        linePosition: selectedItem
      });
    }
  }))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...blockProps,
    "data-block-id": blockId,
    "aria-hidden": "true",
    id: anchor
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/spacer/index.js":
/*!********************************************************!*\
  !*** ./src/blocks/interior-components/spacer/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/spacer/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/spacer/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/spacer/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/interior-components/spacer/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/spacer/editor.scss");







const {
  name,
  title
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  title: title,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/interior-components/spacer/options.js":
/*!**********************************************************!*\
  !*** ./src/blocks/interior-components/spacer/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lineOptions: () => (/* binding */ lineOptions),
/* harmony export */   linePositionOptions: () => (/* binding */ linePositionOptions),
/* harmony export */   options: () => (/* binding */ options)
/* harmony export */ });
const options = [{
  label: 'Extra Small',
  value: 'spacer__extra-small'
}, {
  label: 'Small',
  value: 'spacer__small'
}, {
  label: 'Normal',
  value: 'spacer__normal'
}, {
  label: 'Large',
  value: 'spacer__large'
}, {
  label: 'Huge',
  value: 'spacer__huge'
}];
const lineOptions = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Dash',
  value: 'dash'
}, {
  label: 'Dots',
  value: 'dots'
}];
const linePositionOptions = [{
  label: 'Top',
  value: 'top'
}, {
  label: 'Bottom',
  value: 'bottom'
}];

/***/ }),

/***/ "./src/blocks/interior-components/spacer/save.js":
/*!*******************************************************!*\
  !*** ./src/blocks/interior-components/spacer/save.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/spacer/block.json");


/* Gutenberg Dependencies */

/* Internal Depencies */


/* Block */



const save = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_3__;
  const {
    blockId,
    name
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.getBlockName)(blockName);
  const {
    attributes
  } = props;
  const {
    anchor,
    space,
    line,
    lineType,
    linePosition
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `${name} ${space} line-${line ? 'enable' : 'disable'} line-type-${lineType} position-${linePosition}`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: anchor,
    "data-block-id": blockId,
    "aria-hidden": "true",
    ...blockProps
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/utils/helpers.js":
/*!*************************************!*\
  !*** ./src/blocks/utils/helpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockName: () => (/* binding */ getBlockName)
/* harmony export */ });
const getBlockName = blockName => {
  const newName = blockName.split('/')[1];
  const className = newName.split('--');
  return {
    blockId: className.join('/'),
    name: className[1]
  };
};

/***/ }),

/***/ "./src/blocks/interior-components/spacer/editor.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/interior-components/spacer/editor.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/spacer/style.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/interior-components/spacer/style.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/blocks/interior-components/spacer/block.json":
/*!**********************************************************!*\
  !*** ./src/blocks/interior-components/spacer/block.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Spacer","name":"elevation/interior-components--spacer","version":"1.0.0","category":"elevation-blocks","icon":"editor-expand","description":"Spacer block with responsive height","textdomain":"elevation","supports":{"anchor":true,"align":["full"],"alignWide":false,"renaming":false},"attributes":{"space":{"type":"string","default":"spacer__small"},"line":{"type":"boolean","default":false},"lineType":{"type":"string","default":"solid"},"linePosition":{"type":"string","default":"top"}},"script":["file:index.js"],"style":["file:style-index.css"],"editorStyle":["file:index.css"]}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/interior-components/spacer/index": 0,
/******/ 			"blocks/interior-components/spacer/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkelevation_framework"] = globalThis["webpackChunkelevation_framework"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/interior-components/spacer/style-index"], () => (__webpack_require__("./src/blocks/interior-components/spacer/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map