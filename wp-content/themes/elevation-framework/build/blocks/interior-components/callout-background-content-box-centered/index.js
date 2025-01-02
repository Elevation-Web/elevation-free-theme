/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/BackgroundPicture.js":
/*!****************************************************!*\
  !*** ./src/blocks/components/BackgroundPicture.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const BackgroundPicture = ({
  imgMobile,
  imgTablet,
  imgDesktop,
  imgAlt,
  width,
  height,
  className,
  lazyload = true
}) => {
  if (!imgDesktop?.url) {
    return;
  } // Calculate object-position from focal point


  const objectPositionDesktop = `${imgDesktop.focalPoint.x * 100}% ${imgDesktop.focalPoint.y * 100}%`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: className
  }, imgMobile && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    media: "(max-width:575px)",
    srcset: imgMobile
  }), imgTablet && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    media: "(max-width:1200px)",
    srcset: imgTablet
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    decoding: "async",
    lazyload: lazyload ? 'lazy' : 'eager',
    src: imgDesktop.url,
    alt: imgAlt,
    width: width,
    height: height,
    className: className,
    style: {
      objectPosition: objectPositionDesktop
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundPicture);

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

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/edit.js":
/*!****************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/edit.js ***!
  \****************************************************************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BackgroundPicture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BackgroundPicture */ "./src/blocks/components/BackgroundPicture.js");
/* harmony import */ var _components_UploadMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UploadMedia */ "./src/blocks/components/UploadMedia.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/getImageAttributes */ "./src/blocks/utils/getImageAttributes.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template */ "./src/blocks/interior-components/callout-background-content-box-centered/template.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/callout-background-content-box-centered/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/callout-background-content-box-centered/editor.scss");
/* harmony import */ var _preview_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preview.webp */ "./src/blocks/interior-components/callout-background-content-box-centered/preview.webp");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* Gutenberg Dependencies */




/* Internal Dependencies */






/* Blocks */






const Edit = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_9__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_6__.getBlockName)(blockName);
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preview,
    imgMobile,
    imgTablet,
    imgDesktop,
    imgAlt,
    style,
    focalPointDesktop
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: name
  });
  const [withContainer, setWithContainer] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setWithContainer(() => {
      return blockProps.className.includes('alignfull') ? '' : 'contain ';
    });
  }, [blockProps.className]);
  const styleImgDesktop = {
    backgroundImage: `url(${imgDesktop.url})`,
    backgroundSize: 'cover',
    backgroundPosition: `${imgDesktop.focalPoint?.x * 100}% ${imgDesktop.focalPoint?.y * 100}%`
  };

  const setNewFocalPoint = (key, value) => {
    setAttributes({
      [key]: { ...attributes[key],
        focalPoint: value
      }
    });
  };

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
    } = (0,_utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_7__.getImageAttributes)(media);
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

  const controls = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Image Desktop'),
      children: imgDesktop.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FocalPointPicker, {
          url: imgDesktop.url,
          value: imgDesktop.focalPoint,
          onDragStart: newValue => {
            setNewFocalPoint('imgDesktop', newValue);
          },
          onDrag: newValue => {
            setNewFocalPoint('imgDesktop', newValue);
          },
          onChange: newValue => {
            setNewFocalPoint('imgDesktop', newValue);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          style: styleImgDesktop
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_5__.RemoveImageButton, {
          onClick: newValue => {
            removeImage('imgDesktop', newValue);
          }
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_5__.UploadMedia, {
        value: imgDesktop.url,
        onSelect: newValue => {
          addMedia('imgDesktop', newValue);
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Image Tablet'),
      children: imgTablet ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          src: imgTablet
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_5__.RemoveImageButton, {
          onClick: () => {
            setAttributes({
              imgTablet: ''
            });
          },
          attrId: 'imgTablet'
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_5__.UploadMedia, {
        value: imgTablet,
        onSelect: ({
          url
        }) => {
          setAttributes({
            imgTablet: url
          });
        },
        attrId: 'imgTablet'
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Image Mobile'),
      children: imgMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          src: imgMobile
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_5__.RemoveImageButton, {
          onClick: () => {
            setAttributes({
              imgMobile: ''
            });
          },
          attrId: 'imgMobile'
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_5__.UploadMedia, {
        value: imgMobile,
        onSelect: ({
          url
        }) => {
          setAttributes({
            imgMobile: url
          });
        },
        attrId: 'imgMobile'
      })
    })]
  });

  if (preview) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: `${name}-preview`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
        src: _preview_webp__WEBPACK_IMPORTED_MODULE_11__,
        alt: "Preview",
        style: {
          objectFit: 'contain',
          maxHeight: '100%',
          maxWidth: '100%'
        }
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [controls, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      "data-block-id": blockId,
      ...blockProps,
      ...style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_BackgroundPicture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        imgMobile: imgMobile,
        imgTablet: imgTablet,
        imgDesktop: imgDesktop,
        imgAlt: imgAlt,
        className: `${name}__background`,
        width: "1920",
        height: "1080",
        focalPointDesktop: focalPointDesktop
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: `${withContainer}${name}__container`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: `${name}__wrapper`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
            template: _template__WEBPACK_IMPORTED_MODULE_8__.template,
            allowedBlocks: _template__WEBPACK_IMPORTED_MODULE_8__.allowedBlocks
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/index.js":
/*!*****************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/callout-background-content-box-centered/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/callout-background-content-box-centered/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/callout-background-content-box-centered/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/interior-components/callout-background-content-box-centered/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/callout-background-content-box-centered/editor.scss");
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

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/save.js":
/*!****************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/save.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BackgroundPicture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BackgroundPicture */ "./src/blocks/components/BackgroundPicture.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/callout-background-content-box-centered/block.json");
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
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.getBlockName)(blockName);
  const {
    attributes
  } = props;
  const {
    imgMobile,
    imgTablet,
    imgDesktop,
    imgAlt,
    style,
    focalPointDesktop
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: name
  });
  const withContainer = blockProps.className.includes('alignfull') ? 'container ' : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    "data-block-id": blockId,
    ...blockProps,
    ...style,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_BackgroundPicture__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imgMobile: imgMobile,
      imgTablet: imgTablet,
      imgDesktop: imgDesktop,
      imgAlt: imgAlt,
      className: `${name}__background`,
      width: "1920",
      height: "1080",
      focalPointDesktop: focalPointDesktop
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: `${withContainer}${name}__container`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: `${name}__wrapper`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/template.js":
/*!********************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/template.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowedBlocks: () => (/* binding */ allowedBlocks),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
const template = [['elevation/interior-components--group', {
  className: ''
}, [['core/heading', {
  level: 4,
  content: 'H4. Heading lorem ipsum euismod'
}], ['core/paragraph', {
  fontSize: 'body',
  content: `Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis..`
}], ['elevation/interior-components--buttons', {
  layout: {
    type: 'flex',
    justifyContent: 'start'
  }
}, [['elevation/interior-components--button', {
  btnStyle: 'tertiary-inverse',
  text: 'Text Button'
}]]]]]];
const allowedBlocks = ['core/heading', 'core/paragraph', 'elevation/interior-components--buttons'];

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

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/editor.scss":
/*!********************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/editor.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/style.scss":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/style.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/preview.webp":
/*!*********************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/preview.webp ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/preview.ca816425.webp";

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

/***/ "./src/blocks/interior-components/callout-background-content-box-centered/block.json":
/*!*******************************************************************************************!*\
  !*** ./src/blocks/interior-components/callout-background-content-box-centered/block.json ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Background Callout - Content Box Centered","name":"elevation/interior-components--callout-background-content-box-centered","version":"1.0.0","category":"elevation-blocks","icon":"format-image","description":"Background Callout, content box centered, with title, ddescription and button.","textdomain":"elevation","supports":{"html":true,"align":["full"],"alignWide":false,"ariaLabel":true,"color":{"background":true,"gradients":false,"text":true},"spacing":{"margin":["top","bottom"]}},"attributes":{"preview":{"type":"boolean","default":false},"align":{"type":"string","default":"center"},"imgMobile":{"type":"string","default":""},"imgTablet":{"type":"string","default":""},"imgDesktop":{"type":"object","default":{"url":"","alt":"","id":0,"srcset":"","width":0,"height":0,"sizes":"","focalPoint":{"x":0.5,"y":0.5}}}},"example":{"attributes":{"preview":true}},"script":["file:index.js"],"style":["file:style-index.css"],"editorStyle":["file:index.css"]}');

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
/******/ 			"blocks/interior-components/callout-background-content-box-centered/index": 0,
/******/ 			"blocks/interior-components/callout-background-content-box-centered/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/interior-components/callout-background-content-box-centered/style-index"], () => (__webpack_require__("./src/blocks/interior-components/callout-background-content-box-centered/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map