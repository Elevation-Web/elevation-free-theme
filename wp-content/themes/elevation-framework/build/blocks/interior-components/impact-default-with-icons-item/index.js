/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/ImageWithFocalPoint.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/ImageWithFocalPoint.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageWithFocalPoint: () => (/* binding */ ImageWithFocalPoint)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ImageWithFocalPoint = ({
  img,
  className,
  lazyload = true,
  selectorId
}) => {
  if (!img?.url) {
    return;
  }

  const {
    url,
    alt,
    width,
    height,
    sizes,
    srcset,
    focalPoint
  } = img; // Calculate object-position from focal point

  let objectPosition = 'center';

  if (focalPoint?.x && focalPoint?.y) {
    objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    decoding: "async",
    src: url,
    alt: alt,
    width: width,
    height: height,
    className: className,
    srcSet: srcset,
    sizes: sizes,
    loading: lazyload ? 'lazy' : 'eager'
  }), !!focalPoint && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `#${selectorId} .${className} {object-position: ${objectPosition};}`));
};

/***/ }),

/***/ "./src/blocks/components/UploadMedia.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/UploadMedia.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveImageButton: () => (/* binding */ RemoveImageButton),
/* harmony export */   UploadMedia: () => (/* binding */ UploadMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const RemoveImageButton = ({
  onClick
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isDestructive: true,
    variant: 'secondary',
    onClick: onClick
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove Image'));
};
const UploadMedia = ({
  value,
  onSelect
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelect,
    allowedTypes: ['image'],
    value: value,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Image'))
  }));
};

/***/ }),

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/controls.js":
/*!***********************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/controls.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getImageAttributes */ "./src/blocks/utils/getImageAttributes.js");
/* harmony import */ var _components_UploadMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UploadMedia */ "./src/blocks/components/UploadMedia.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* Gutenberg Dependencies */




/* Internal Dependencies */




const Controls = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    value,
    remove_comma,
    title_size,
    icon
  } = attributes;

  const removeImage = key => {
    setAttributes({
      [key]: {
        url: '',
        alt: '',
        id: 0,
        srcset: '',
        width: 0,
        height: 0
      }
    });
  };

  const addMedia = (key, media) => {
    const {
      fullSize,
      srcset,
      sizes,
      alt,
      id
    } = (0,_utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_3__.getImageAttributes)(media);
    setAttributes({
      [key]: { ...attributes[key],
        url: fullSize.url,
        alt,
        id,
        srcset,
        width: fullSize.width,
        height: fullSize.height,
        sizes
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Impact Settings', 'elevation'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Value', 'elevation'),
        value: value,
        onChange: newValue => setAttributes({
          value: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Comma', 'elevation'),
        checked: remove_comma,
        onChange: newValue => setAttributes({
          remove_comma: newValue
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Size', 'elevation'),
        value: title_size,
        options: [{
          label: 'h1',
          value: 'h-1'
        }, {
          label: 'h2',
          value: 'h-2'
        }, {
          label: 'h3',
          value: 'h-3'
        }, {
          label: 'h4',
          value: 'h-4'
        }, {
          label: 'h5',
          value: 'h-5'
        }, {
          label: 'h6',
          value: 'h-6'
        }],
        onChange: newValue => setAttributes({
          title_size: newValue
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cards-long-description-icons-card__control-icon",
        children: icon.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "cards-long-description-icons-card__control-icon-picker",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: icon.url
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_4__.RemoveImageButton, {
            onClick: () => {
              removeImage('icon');
            }
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_4__.UploadMedia, {
          value: icon.url,
          onSelect: newValue => {
            addMedia('icon', newValue);
          }
        })
      })
    })]
  });
};

/***/ }),

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/edit.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/edit.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/impact-default-with-icons-item/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/impact-default-with-icons-item/block.json");
/* harmony import */ var _preview_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview.webp */ "./src/blocks/interior-components/impact-default-with-icons-item/preview.webp");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template */ "./src/blocks/interior-components/impact-default-with-icons-item/template.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls */ "./src/blocks/interior-components/impact-default-with-icons-item/controls.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* Gutenberg Dependencies */



/* Internal Dependencies */


/* Block */








const Edit = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_5__;
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
    preview,
    value,
    remove_comma,
    title_size,
    icon
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `${name}`
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setAttributes({
      id: `${name}-${clientId}`
    });
  }, [clientId, name, setAttributes]);

  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: `${name}-preview`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
        src: _preview_webp__WEBPACK_IMPORTED_MODULE_6__,
        alt: "Preview",
        style: {
          objectFit: 'contain',
          maxHeight: '100%',
          maxWidth: '100%'
        }
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_controls__WEBPACK_IMPORTED_MODULE_8__.Controls, { ...props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      "data-block-id": blockId,
      "data-block-js": "true",
      id: id,
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: `${name}__icon-container no-hover`,
        children: icon?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
          src: icon.url,
          className: `${name}__img` // selectorId={anchor || id}

        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: `${name}__content`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: `${name}__header`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: `${name}__value has-${title_size}-font-size`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              className: `${name}__value-value`,
              value: remove_comma ? value.toString() : value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
              onChange: newValue => setAttributes({
                value: newValue
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          template: _template__WEBPACK_IMPORTED_MODULE_7__.template,
          templateInsertUpdatesSelection: true,
          allowedBlocks: _template__WEBPACK_IMPORTED_MODULE_7__.allowedBlocks,
          orientation: 'horizontal'
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/index.js":
/*!********************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/impact-default-with-icons-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/impact-default-with-icons-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/impact-default-with-icons-item/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/interior-components/impact-default-with-icons-item/style.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */







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
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      version: "1.1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 100 125",
      enableBackground: "new 0 0 100 100",
      xmlSpace: "preserve",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
        d: "M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"
      })
    })
  },

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

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/save.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/save.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ImageWithFocalPoint */ "./src/blocks/components/ImageWithFocalPoint.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/impact-default-with-icons-item/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* Gutenberg Dependencies */

/* Internal Dependencies */



/* Block */




const save = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_3__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getBlockName)(blockName);
  const {
    attributes
  } = props;
  const {
    anchor,
    id,
    value,
    remove_comma,
    icon,
    title_size
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: `${name}`
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    "data-block-id": blockId,
    "data-block-js": "false",
    id: anchor || id,
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: `${name}__icon-container no-hover`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_2__.ImageWithFocalPoint, {
        img: icon,
        className: `${name}__img no-animate`,
        selectorId: anchor || id
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `${name}__content`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: `${name}__header`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: `${name}__value has-${title_size}-font-size`,
          children: remove_comma ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: `${name}__value-value numscrolleryears`,
            "data-num": value,
            children: value
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: `${name}__value-value numscroller`,
            "data-num": value,
            children: value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/template.js":
/*!***********************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/template.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowedBlocks: () => (/* binding */ allowedBlocks),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
const allowedBlocks = ['core/heading', 'core/paragraph'];
const template = [['core/paragraph', {
  fontSize: 'body',
  content: 'Maximum 15 words. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.'
}]];

/***/ }),

/***/ "./src/blocks/utils/getImageAttributes.js":
/*!************************************************!*\
  !*** ./src/blocks/utils/getImageAttributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getImageAttributes: () => (/* binding */ getImageAttributes)
/* harmony export */ });
function getImageAttributes(imageObject, size = 'full') {
  if (!imageObject || !imageObject.sizes || !imageObject.sizes.full) {
    return null;
  } // Find the maximum width from the sizes object


  const maxWidth = Math.max(...Object.values(imageObject.sizes).map(size => size.width));
  const sizes = `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`;
  const srcset = Object.keys(imageObject.sizes).map(size => {
    const img = imageObject.sizes[size];
    return `${img.url} ${img.width}w`;
  }).join(', ');
  const fullSize = imageObject.sizes[size];
  return {
    fullSize,
    srcset,
    sizes,
    alt: imageObject.alt,
    id: imageObject.id
  };
}

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

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/editor.scss":
/*!***********************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/editor.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/style.scss":
/*!**********************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/style.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/preview.webp":
/*!************************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/preview.webp ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/preview.8a233a34.webp";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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

/***/ "./src/blocks/interior-components/impact-default-with-icons-item/block.json":
/*!**********************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-default-with-icons-item/block.json ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Impact, Layout: Default with Icons Item.","name":"elevation/interior-components--impact-default-with-icons-item","version":"1.0.0","category":"elevation-blocks","icon":"button","description":"Impact Default with Icons.","textdomain":"elevation","parent":["elevation/interior-components--group"],"supports":{"html":true,"anchor":true,"alignWide":false,"ariaLabel":false,"color":{"background":true,"gradients":false,"text":true,"link":false,"border":false},"spacing":{"margin":["top","bottom"],"blockGap":false},"layout":false,"interactivity":{"clientNavigation":true}},"attributes":{"id":{"type":"string","default":""},"value":{"type":"string","default":"0"},"remove_comma":{"type":"boolean","default":false},"title_size":{"type":"string","default":"h-1"},"icon":{"type":"object","default":{"url":"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-long-description-icons/images/icon-1.webp","alt":"","id":0,"srcset":"","width":"auto","height":"auto","sizes":""}}},"example":{"attributes":{"preview":true}},"editorScript":["file:index.js"],"style":["file:style-index.css"],"editorStyle":["file:index.css"]}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../../";
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
/******/ 			"blocks/interior-components/impact-default-with-icons-item/index": 0,
/******/ 			"blocks/interior-components/impact-default-with-icons-item/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/interior-components/impact-default-with-icons-item/style-index"], () => (__webpack_require__("./src/blocks/interior-components/impact-default-with-icons-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map