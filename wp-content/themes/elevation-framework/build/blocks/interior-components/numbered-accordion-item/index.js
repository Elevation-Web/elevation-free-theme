/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/interior-components/numbered-accordion-item/edit.js":
/*!************************************************************************!*\
  !*** ./src/blocks/interior-components/numbered-accordion-item/edit.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/blocks/interior-components/numbered-accordion-item/template.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/numbered-accordion-item/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const Edit = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_6__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.getBlockName)(blockName);
  const {
    clientId,
    attributes,
    setAttributes
  } = props;
  const {
    id,
    anchor,
    heading,
    style
  } = attributes;
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setAttributes({
      id: anchor || `${name}-${clientId}`
    });
  }, [clientId, setAttributes]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `${name}__item`
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
    "data-block-id": blockId,
    ...blockProps,
    ...style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "numbered-accordion__item-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        value: heading,
        onChange: value => setAttributes({
          heading: value
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        "aria-expanded": isOpen,
        onClick: () => {
          setIsOpen(!isOpen);
        },
        variant: 'secondary',
        children: [isOpen ? 'Close' : 'Expand', isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          width: "12",
          height: "3",
          viewBox: "0 0 12 3",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
            d: "M10 1.5L2 1.5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SVG, {
          width: "12",
          height: "13",
          viewBox: "0 0 12 13",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
            d: "M6 1.5V11.5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Path, {
            d: "M11 6.5L1 6.5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        id: id,
        className: `numbered-accordion__panel ${isOpen ? 'active' : ''}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          template: _template__WEBPACK_IMPORTED_MODULE_5__.template,
          allowedBlocks: _template__WEBPACK_IMPORTED_MODULE_5__.allowedBlocks,
          templateLock: false
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/numbered-accordion-item/save.js":
/*!************************************************************************!*\
  !*** ./src/blocks/interior-components/numbered-accordion-item/save.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/numbered-accordion-item/block.json");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const save = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_1__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.getBlockName)(blockName);
  const {
    attributes
  } = props;
  const {
    id,
    anchor,
    heading,
    style
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: `${name}__item`
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
      "data-block-id": blockId,
      ...blockProps,
      ...style,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "numbered-accordion__item-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "wp-block-heading has-h-6-font-size numbered-accordion__button",
          "aria-controls": anchor || id,
          children: heading
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          id: anchor || id,
          className: "numbered-accordion__panel",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/numbered-accordion-item/template.js":
/*!****************************************************************************!*\
  !*** ./src/blocks/interior-components/numbered-accordion-item/template.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowedBlocks: () => (/* binding */ allowedBlocks),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
const template = [['elevation/interior-components--group', {
  className: 'numbered-accordion__panel-wrapper'
}, [['elevation/interior-components--image-with-srcset', {
  img: {
    url: '/wp-content/themes/elevation-framework/src/blocks/interior-components/numbered-accordion/images/image.webp'
  }
}], ['elevation/interior-components--group', {
  className: 'numbered-accordion__panel-content'
}, [['core/paragraph', {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, nulla aliquam lacus lectus habitant. Eu ullamcorper sed fames libero morbi velit euismod. Sem cursus commodo mollis aliquam aliquam varius. Amet ut mi nunc ut tellus bibendum morbi curabitur adipiscing. Nisl sed risus sit odio. Bibendum massa habitasse nulla fringilla sociis nec cursus et urna. Urna, vitae aliquet fringilla placerat. Porta duis turpis dignissim.'
}], ['elevation/interior-components--buttons', {}, [['elevation/interior-components--button', {
  btnStyle: 'tertiary',
  text: 'Read More'
}]]]]]]]];
const allowedBlocks = ['core/paragraph', 'core/list', 'elevation/interior-components--buttons', 'elevation/interior-components--group', 'elevation/interior-components--image-with-srcset'];

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

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/interior-components/numbered-accordion-item/block.json":
/*!***************************************************************************!*\
  !*** ./src/blocks/interior-components/numbered-accordion-item/block.json ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Numbered Accordion Item","name":"elevation/interior-components--numbered-accordion-item","version":"1.0.0","category":"elevation-blocks","icon":"text","description":"Numbered Accordion item","parent":["elevation/interior-components--custom-container"],"textdomain":"elevation","supports":{"anchor":true,"html":true,"align":false,"alignWide":false,"color":{"background":false,"gradients":false,"text":false,"link":false,"border":false},"inserter":true,"interactivity":{"clientNavigation":true}},"attributes":{"id":{"type":"string","default":""},"heading":{"type":"string","default":"H6. Question. Lorem ipsum sit amet risus nullam eget felis eget nunc lobortis? "}},"editorScript":["file:index.js"]}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************************************!*\
  !*** ./src/blocks/interior-components/numbered-accordion-item/index.js ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   json: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   name: () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/numbered-accordion-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/numbered-accordion-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/numbered-accordion-item/save.js");




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

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map