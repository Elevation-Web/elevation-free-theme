<<<<<<< HEAD
<<<<<<< HEAD
(()=>{"use strict";var e,n={8858:(e,n,r)=>{const a=window.wp.blocks,t=JSON.parse('{"title":"Banner Standard","name":"elevation/interior-components--banner-standard"}'),s=(window.wp.i18n,window.wp.blockEditor),i=window.wp.element,o=e=>{const n=e.split("/")[1].split("--");return{blockId:n.join("/"),name:n[1]}},l=r.p+"images/preview.314dfb7b.webp",c=window.ReactJSXRuntime,d=JSON.parse('{"name":"elevation/banner-standard-info","version":"1.0.0","title":"Info","category":"elevation-blocks","icon":"format-image","description":"Info","supports":{"html":false,"anchor":false},"parent":["elevation/interior-components--banner-standard"]}'),{name:p}=d,m={title:p,edit:e=>{const{attributes:n}=e,{style:r}=n,a=(0,s.useBlockProps)({className:"banner-standard__info"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks,{template:[["core/heading",{level:1}],["core/paragraph",{placeholder:"Type description here"}]],allowedBlocks:["core/heading","core/paragraph","elevation/interior-components--buttons"]})})},save:e=>{const{attributes:n}=e,{style:r}=n,a=s.useBlockProps.save({className:"banner-standard__info"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks.Content,{})})}},v=JSON.parse('{"name":"elevation/banner-standard-image","version":"1.0.0","title":"Image","category":"elevation-blocks","icon":"format-image","description":"Image","supports":{"html":false,"anchor":false,"inserter":false},"parent":["elevation/interior-components--banner-standard"]}'),{name:u}=v,b={title:u,edit:e=>{const{attributes:n}=e,{style:r}=n,a=(0,s.useBlockProps)({className:"banner-standard__image"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks,{template:[["core/image",{url:"https://via.placeholder.com/644/408"}]],allowedBlocks:["core/image"]})})},save:e=>{const{attributes:n}=e,{style:r}=n,a=s.useBlockProps.save({className:"banner-standard__image"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks.Content,{})})}},{name:h,title:f}=t;(0,a.registerBlockType)(h,{title:f,edit:e=>{const{name:n}=t,{name:r,blockId:a}=o(n),{attributes:d}=e,{preview:p,style:m}=d,v=(0,s.useBlockProps)({className:r}),[u,b]=(0,i.useState)("");return(0,i.useEffect)((()=>{b((()=>v.className.includes("alignfull")?"container ":""))}),[e]),p?(0,c.jsx)("div",{className:`${r}-preview`,children:(0,c.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{"data-block-id":a,...v,...m,children:(0,c.jsx)("div",{className:`${u}${r}__container`,children:(0,c.jsx)("div",{className:`${r}__wrapper`,children:(0,c.jsx)(s.InnerBlocks,{template:[["elevation/banner-standard-info"],["elevation/banner-standard-image"]],allowedBlocks:["elevation/banner-standard-info","elevation/banner-standard-image"]})})})})})},save:e=>{const{name:n}=t,{name:r,blockId:a}=o(n),{attributes:i}=e,{style:l}=i,d=s.useBlockProps.save({className:r}),p=d.className.includes("alignfull")?"container ":"";return(0,c.jsx)("div",{"data-block-id":a,...d,...l,children:(0,c.jsx)("div",{className:`${p}${r}__container`,children:(0,c.jsx)("div",{className:`${r}__wrapper`,children:(0,c.jsx)(s.InnerBlocks.Content,{})})})})}}),(0,a.registerBlockType)({infoName:p,...d},m),(0,a.registerBlockType)({imageName:u,...v},b)}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,a),s.exports}a.m=n,e=[],a.O=(n,r,t,s)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,t,s]=e[d],o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var c=t();void 0!==c&&(n=c)}}return n}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,t,s]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var t=r.length-1;t>-1&&!e;)e=r[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../../"})(),(()=>{var e={2132:0,7249:0};a.O.j=n=>0===e[n];var n=(n,r)=>{var t,s,[i,o,l]=r,c=0;if(i.some((n=>0!==e[n]))){for(t in o)a.o(o,t)&&(a.m[t]=o[t]);if(l)var d=l(a)}for(n&&n(r);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var t=a.O(void 0,[7249],(()=>a(8858)));t=a.O(t)})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/interior-components/banner-standard/children/image/edit.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/image/edit.js ***!
  \*******************************************************************************/
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




const Edit = props => {
  const BANNER_STANDARD_IMAGE_ALLOWED_BLOCKS = ['core/image'];
  const BANNER_STANDARD_IMAGE_TEMPLATE = [['core/image', {
    url: 'https://via.placeholder.com/644/408'
  }]];
  const {
    attributes
  } = props;
  const {
    style
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'banner-standard__image'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...blockProps,
    ...style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: BANNER_STANDARD_IMAGE_TEMPLATE,
    allowedBlocks: BANNER_STANDARD_IMAGE_ALLOWED_BLOCKS
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/children/image/index.js":
/*!********************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/image/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   json: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/banner-standard/children/image/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/banner-standard/children/image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/banner-standard/children/image/save.js");
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
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const settings = {
  title: name,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/children/image/save.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/image/save.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const save = props => {
  const {
    attributes
  } = props;
  const {
    style
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'banner-standard__image'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...blockProps,
    ...style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/children/info/edit.js":
/*!******************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/info/edit.js ***!
  \******************************************************************************/
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




const Edit = props => {
  const BANNER_STANDARD_INFO_ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'elevation/interior-components--buttons'];
  const BANNER_STANDARD_INFO_TEMPLATE = [['core/heading', {
    level: 1
  }], ['core/paragraph', {
    placeholder: 'Type description here'
  }]];
  const {
    attributes
  } = props;
  const {
    style
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'banner-standard__info'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...blockProps,
    ...style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: BANNER_STANDARD_INFO_TEMPLATE,
    allowedBlocks: BANNER_STANDARD_INFO_ALLOWED_BLOCKS
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/children/info/index.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/info/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   json: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/banner-standard/children/info/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/banner-standard/children/info/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/banner-standard/children/info/save.js");
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
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const settings = {
  title: name,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/children/info/save.js":
/*!******************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/info/save.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const save = props => {
  const {
    attributes
  } = props;
  const {
    style
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'banner-standard__info'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...blockProps,
    ...style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/edit.js":
/*!****************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/edit.js ***!
  \****************************************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/banner-standard/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/banner-standard/editor.scss");
/* harmony import */ var _preview_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview.webp */ "./src/blocks/interior-components/banner-standard/preview.webp");


/* Gutenberg Dependencies */



/* Interior Dependencies */


/* Block */





const Edit = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_5__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.getBlockName)(blockName);
  const BANNER_STANDARD_ALLOWED_BLOCKS = ['elevation/banner-standard-info', 'elevation/banner-standard-image'];
  const BANNER_STANDARD_TEMPLATE = [['elevation/banner-standard-info'], ['elevation/banner-standard-image']];
  const {
    attributes
  } = props;
  const {
    preview,
    style
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: name
  });
  const [withContainer, setWithContainer] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setWithContainer(() => {
      return blockProps.className.includes('alignfull') ? 'container ' : '';
    });
  }, [props]);

  if (preview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${name}-preview`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _preview_webp__WEBPACK_IMPORTED_MODULE_7__,
      alt: "Preview",
      style: {
        objectFit: 'contain',
        maxHeight: '100%',
        maxWidth: '100%'
      }
    }));
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-block-id": blockId,
    ...blockProps,
    ...style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${withContainer}${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: BANNER_STANDARD_TEMPLATE,
    allowedBlocks: BANNER_STANDARD_ALLOWED_BLOCKS
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/index.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/banner-standard/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/banner-standard/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/banner-standard/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/interior-components/banner-standard/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/banner-standard/editor.scss");
/* harmony import */ var _children_info_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./children/info/index */ "./src/blocks/interior-components/banner-standard/children/info/index.js");
/* harmony import */ var _children_image_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./children/image/index */ "./src/blocks/interior-components/banner-standard/children/image/index.js");
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
/** Child blocks */


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)({
  infoName: _children_info_index__WEBPACK_IMPORTED_MODULE_6__.name,
  ..._children_info_index__WEBPACK_IMPORTED_MODULE_6__.json
}, _children_info_index__WEBPACK_IMPORTED_MODULE_6__.settings);

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)({
  imageName: _children_image_index__WEBPACK_IMPORTED_MODULE_7__.name,
  ..._children_image_index__WEBPACK_IMPORTED_MODULE_7__.json
}, _children_image_index__WEBPACK_IMPORTED_MODULE_7__.settings);

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/save.js":
/*!****************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/save.js ***!
  \****************************************************************/
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/banner-standard/block.json");


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
    style
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: name
  });
  const withContainer = blockProps.className.includes('alignfull') ? 'container ' : '';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-block-id": blockId,
    ...blockProps,
    ...style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${withContainer}${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
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

/***/ "./src/blocks/interior-components/banner-standard/editor.scss":
/*!********************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/editor.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/style.scss":
/*!*******************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/style.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/preview.webp":
/*!*********************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/preview.webp ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/preview.314dfb7b.webp";

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

/***/ "./src/blocks/interior-components/banner-standard/block.json":
/*!*******************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/block.json ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Banner Standard","name":"elevation/interior-components--banner-standard","version":"1.0.0","category":"elevation-blocks","icon":"format-image","description":"banner-standard with title and description.","textdomain":"elevation","supports":{"html":true,"align":["full"],"alignWide":false,"ariaLabel":true,"color":{"background":true,"gradients":false,"text":true},"spacing":{"margin":["top","bottom"]}},"attributes":{"preview":{"type":"boolean","default":false},"align":{"type":"array","default":"full"},"backgroundColor":{"type":"string","default":"ui-background-light-01"}},"example":{"attributes":{"preview":true}},"script":["file:index.js"],"style":["file:style-index.css"],"editorStyle":["file:index.css"]}');

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/children/image/block.json":
/*!**********************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/image/block.json ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"elevation/banner-standard-image","version":"1.0.0","title":"Image","category":"elevation","icon":"format-image","description":"Image","supports":{"html":false,"anchor":false,"inserter":false},"parent":["elevation/interior-components--banner-standard"]}');

/***/ }),

/***/ "./src/blocks/interior-components/banner-standard/children/info/block.json":
/*!*********************************************************************************!*\
  !*** ./src/blocks/interior-components/banner-standard/children/info/block.json ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"elevation/banner-standard-info","version":"1.0.0","title":"Info","category":"elevation","icon":"format-image","description":"Info","supports":{"html":false,"anchor":false},"parent":["elevation/interior-components--banner-standard"]}');

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
/******/ 			"blocks/interior-components/banner-standard/index": 0,
/******/ 			"blocks/interior-components/banner-standard/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/interior-components/banner-standard/style-index"], () => (__webpack_require__("./src/blocks/interior-components/banner-standard/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
>>>>>>> 8c92ec8 (init : team bios option 1)
=======
(()=>{"use strict";var e,n={8858:(e,n,r)=>{const a=window.wp.blocks,t=JSON.parse('{"title":"Banner Standard","name":"elevation/interior-components--banner-standard"}'),s=(window.wp.i18n,window.wp.blockEditor),i=window.wp.element,o=e=>{const n=e.split("/")[1].split("--");return{blockId:n.join("/"),name:n[1]}},l=r.p+"images/preview.314dfb7b.webp",c=window.ReactJSXRuntime,d=JSON.parse('{"name":"elevation/banner-standard-info","version":"1.0.0","title":"Info","category":"elevation","icon":"format-image","description":"Info","supports":{"html":false,"anchor":false},"parent":["elevation/interior-components--banner-standard"]}'),{name:p}=d,m={title:p,edit:e=>{const{attributes:n}=e,{style:r}=n,a=(0,s.useBlockProps)({className:"banner-standard__info"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks,{template:[["core/heading",{level:1}],["core/paragraph",{placeholder:"Type description here"}]],allowedBlocks:["core/heading","core/paragraph","elevation/interior-components--buttons"]})})},save:e=>{const{attributes:n}=e,{style:r}=n,a=s.useBlockProps.save({className:"banner-standard__info"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks.Content,{})})}},v=JSON.parse('{"name":"elevation/banner-standard-image","version":"1.0.0","title":"Image","category":"elevation","icon":"format-image","description":"Image","supports":{"html":false,"anchor":false,"inserter":false},"parent":["elevation/interior-components--banner-standard"]}'),{name:u}=v,h={title:u,edit:e=>{const{attributes:n}=e,{style:r}=n,a=(0,s.useBlockProps)({className:"banner-standard__image"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks,{template:[["core/image",{url:"https://via.placeholder.com/644/408"}]],allowedBlocks:["core/image"]})})},save:e=>{const{attributes:n}=e,{style:r}=n,a=s.useBlockProps.save({className:"banner-standard__image"});return(0,c.jsx)("div",{...a,...r,children:(0,c.jsx)(s.InnerBlocks.Content,{})})}},{name:b,title:f}=t;(0,a.registerBlockType)(b,{title:f,edit:e=>{const{name:n}=t,{name:r,blockId:a}=o(n),{attributes:d}=e,{preview:p,style:m}=d,v=(0,s.useBlockProps)({className:r}),[u,h]=(0,i.useState)("");return(0,i.useEffect)((()=>{h((()=>v.className.includes("alignfull")?"container ":""))}),[e]),p?(0,c.jsx)("div",{className:`${r}-preview`,children:(0,c.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{"data-block-id":a,...v,...m,children:(0,c.jsx)("div",{className:`${u}${r}__container`,children:(0,c.jsx)("div",{className:`${r}__wrapper`,children:(0,c.jsx)(s.InnerBlocks,{template:[["elevation/banner-standard-info"],["elevation/banner-standard-image"]],allowedBlocks:["elevation/banner-standard-info","elevation/banner-standard-image"]})})})})})},save:e=>{const{name:n}=t,{name:r,blockId:a}=o(n),{attributes:i}=e,{style:l}=i,d=s.useBlockProps.save({className:r}),p=d.className.includes("alignfull")?"container ":"";return(0,c.jsx)("div",{"data-block-id":a,...d,...l,children:(0,c.jsx)("div",{className:`${p}${r}__container`,children:(0,c.jsx)("div",{className:`${r}__wrapper`,children:(0,c.jsx)(s.InnerBlocks.Content,{})})})})}}),(0,a.registerBlockType)({infoName:p,...d},m),(0,a.registerBlockType)({imageName:u,...v},h)}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,a),s.exports}a.m=n,e=[],a.O=(n,r,t,s)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,t,s]=e[d],o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var c=t();void 0!==c&&(n=c)}}return n}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,t,s]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var t=r.length-1;t>-1&&!e;)e=r[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../../"})(),(()=>{var e={2132:0,7249:0};a.O.j=n=>0===e[n];var n=(n,r)=>{var t,s,[i,o,l]=r,c=0;if(i.some((n=>0!==e[n]))){for(t in o)a.o(o,t)&&(a.m[t]=o[t]);if(l)var d=l(a)}for(n&&n(r);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var t=a.O(void 0,[7249],(()=>a(8858)));t=a.O(t)})();
>>>>>>> 9725f44 (added : Team-Bios/Carousel)
