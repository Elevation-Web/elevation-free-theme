<<<<<<< HEAD
<<<<<<< HEAD
(()=>{"use strict";var e,t={5416:(e,t,n)=>{const o=window.wp.blocks,r=JSON.parse('{"title":"Feed, Layout: Events Horizontal Container","name":"elevation/contract-components--feed-events-horizontal-container"}'),s=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components,i=window.wp.serverSideRender;var c=n.n(i);const d=window.wp.element,p=window.wp.coreData,u=window.ReactJSXRuntime,v=e=>{const{onChange:t,options:n,selectedOptions:o,type:r="post",max:s=3}=e,[l,i]=(0,d.useState)(""),[c,p]=(0,d.useState)(!1),v=(0,d.useRef)(),h=n&&n.filter((e=>"post"==r?e.title.rendered.toLowerCase().includes(l.toLowerCase()):e.name.toLowerCase().includes(l.toLowerCase())));return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{style:{marginTop:"10px"},children:[(0,u.jsx)(a.SearchControl,{value:l,onClick:()=>p(!0),onChange:function(e){v?.current&&document.activeElement===v.current?p(!0):p(!1),i(e)},ref:v}),(0,u.jsx)("div",{style:{position:"relative"},className:"member-control__popover",children:c&&(0,u.jsx)("div",{className:"component-popover",children:h.length>0?h.map((e=>(0,u.jsx)(a.CheckboxControl,{label:"post"==r?e.title.rendered:e.name,checked:o.includes(e.id),disabled:o.length>=s&&!o.includes(e.id),onChange:()=>(e=>{const n=o.includes(e.id)?o.filter((t=>t!==e.id)):[...o,e.id];t(n)})(e)},e.id))):(0,u.jsx)("p",{children:"No results found."})})})]})})},h=e=>{const{attributes:t,setAttributes:n}=e,{categorySelected:o,postsSelected:r,postsPerPage:i,filterBy:c}=t,{records:h}=(0,p.useEntityRecords)("taxonomy","tribe_events_cat"),{records:w}=(0,p.useEntityRecords)("postType","tribe_events"),[g,m]=(0,d.useState)({}),[x,f]=(0,d.useState)([]);return(0,d.useEffect)((()=>{if(h){const e={};h.forEach((t=>{e[t.name]={id:t.id,name:t.name,parent:t.parent}})),m(e)}}),[h]),(0,d.useEffect)((()=>{f(w)}),[w]),(0,u.jsxs)(l.InspectorControls,{children:[(0,u.jsxs)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:[(0,u.jsx)(a.SelectControl,{label:"Filter By",value:c,options:[{label:"Newest Oldest",value:"latest"},{label:"Oldest Newest",value:"oldest"},{label:"Event Categories",value:"category"},{label:"Events",value:"events"}],onChange:e=>n({filterBy:e})}),"category"==c&&g&&(0,u.jsx)(a.QueryControls,{categorySuggestions:g,onCategoryChange:function(e){var t;o.length>e.length?n({categorySelected:e}):(t=e,n({categorySelected:[...o,g[t[t.length-1]]]}))},selectedCategories:o})]}),(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:(0,u.jsx)(a.RangeControl,{label:"Number of Items",value:i,onChange:e=>n({postsPerPage:e}),min:1,max:21})}),"events"==c&&x&&(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Select Posts"),children:(0,u.jsx)(v,{options:x,selectedOptions:r,onChange:e=>{n({postsSelected:e})}})})]})},{name:w,title:g}=r;(0,o.registerBlockType)(w,{title:g,icon:{src:(0,u.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,u.jsx)(a.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{attributes:t,clientId:n,setAttributes:o}=e,{id:s,anchor:i}=t,{name:p}=r,{name:v}=(e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}})(p),w=(0,l.useBlockProps)({className:`${v}`});return(0,d.useEffect)((()=>{o({id:`${v}-${n}`})}),[n,v,o]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{...e}),(0,u.jsx)("div",{id:i||s,"data-block-id":v,...w,children:(0,u.jsx)(c(),{block:p,attributes:t,loadingResponsePlaceholder:a.Spinner})})]})}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,r,s)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,r,s]=e[d],a=!0,i=0;i<n.length;i++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={6265:0,1731:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[l,a,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(i)var d=i(o)}for(t&&t(n);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[1731],(()=>o(5416)));r=o.O(r)})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/Search.js":
/*!*****************************************!*\
  !*** ./src/blocks/components/Search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* Gutenberg Dependencies */




const SearchByOptions = props => {
  const {
    onChange,
    options,
    selectedOptions,
    type = 'post'
  } = props;
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isVisible, setIsVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const filteredOptions = options && options.filter(option => {
    if (type == 'post') {
      return option.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return option.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const toggleOption = option => {
    const newOptions = selectedOptions.includes(option.id) ? selectedOptions.filter(o => o !== option.id) : [...selectedOptions, option.id];
    onChange(newOptions);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        marginTop: '10px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SearchControl, {
        value: searchTerm,
        onClick: () => setIsVisible(true),
        onChange: function noRefCheck(e) {
          if (ref?.current && document.activeElement === ref.current) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          setSearchTerm(e);
        },
        ref: ref
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          position: 'relative'
        },
        className: "member-control__popover",
        children: isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "component-popover",
          children: filteredOptions.length > 0 ? filteredOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
            label: type == 'post' ? option.title.rendered : option.name,
            checked: selectedOptions.includes(option.id),
            onChange: () => toggleOption(option)
          }, option.id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: "No results found."
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchByOptions);

/***/ }),

/***/ "./src/blocks/contract-components/feed-events-horizontal-container/controls.js":
/*!*************************************************************************************!*\
  !*** ./src/blocks/contract-components/feed-events-horizontal-container/controls.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Search */ "./src/blocks/components/Search.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* Gutenberg Dependencies */






/* Internal Dependencies */



const Controls = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    categorySelected,
    postsSelected,
    postsPerPage,
    filterBy
  } = attributes;
  const {
    records: categories
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)('taxonomy', 'tribe_events_cat');
  const {
    records: posts
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)('postType', 'tribe_events');
  const [categorySuggestions, setCategorySuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)({});
  const [postSuggestions, setPostSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (categories) {
      const suggestions = {};
      categories.forEach(category => {
        suggestions[category.name] = {
          id: category.id,
          name: category.name,
          parent: category.parent
        };
      });
      setCategorySuggestions(suggestions);
    }
  }, [categories]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setPostSuggestions(posts);
  }, [posts]);

  const addCategory = value => {
    setAttributes({
      categorySelected: [...categorySelected, categorySuggestions[value[value.length - 1]]]
    });
  };

  const removeCategory = value => {
    setAttributes({
      categorySelected: value
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Category Filter'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "Filter By",
        value: filterBy,
        options: [{
          label: 'Newest Oldest',
          value: 'latest'
        }, {
          label: 'Oldest Newest',
          value: 'oldest'
        }, {
          label: 'Event Categories',
          value: 'category'
        }, {
          label: 'Events',
          value: 'events'
        }],
        onChange: newSize => setAttributes({
          filterBy: newSize
        })
      }), filterBy == 'category' && categorySuggestions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.QueryControls, {
        categorySuggestions: categorySuggestions,
        onCategoryChange: function noRefCheck(val) {
          if (categorySelected.length > val.length) {
            removeCategory(val);
          } else {
            addCategory(val);
          }
        },
        selectedCategories: categorySelected
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Category Filter'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: "Number of Items",
        value: postsPerPage,
        onChange: newValue => setAttributes({
          postsPerPage: newValue
        }),
        min: 1,
        max: 21
      })
    }), filterBy == 'events' && postSuggestions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Posts'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {
        options: postSuggestions,
        selectedOptions: postsSelected,
        onChange: value => {
          setAttributes({
            postsSelected: value
          });
        }
      })
    })]
  });
};

/***/ }),

/***/ "./src/blocks/contract-components/feed-events-horizontal-container/edit.js":
/*!*********************************************************************************!*\
  !*** ./src/blocks/contract-components/feed-events-horizontal-container/edit.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/contract-components/feed-events-horizontal-container/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/contract-components/feed-events-horizontal-container/block.json");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls */ "./src/blocks/contract-components/feed-events-horizontal-container/controls.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* External Dependencies */





/* Internal Dependencies */







const Edit = props => {
  const {
    attributes,
    clientId,
    setAttributes
  } = props;
  const {
    id,
    anchor
  } = attributes;
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_6__;
  const {
    name
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_7__.getBlockName)(blockName);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `${name}`
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setAttributes({
      id: `${name}-${clientId}`
    });
  }, [clientId, name, setAttributes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_controls__WEBPACK_IMPORTED_MODULE_8__.Controls, { ...props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      id: anchor || id,
      "data-block-id": name,
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
        block: blockName,
        attributes: attributes,
        loadingResponsePlaceholder: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/contract-components/feed-events-horizontal-container/index.js":
/*!**********************************************************************************!*\
  !*** ./src/blocks/contract-components/feed-events-horizontal-container/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/contract-components/feed-events-horizontal-container/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/contract-components/feed-events-horizontal-container/edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/contract-components/feed-events-horizontal-container/style.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      version: "1.1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 100 125",
      enableBackground: "new 0 0 100 100",
      xmlSpace: "preserve",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
        d: "M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"
      })
    })
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

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

/***/ "./src/blocks/contract-components/feed-events-horizontal-container/editor.scss":
/*!*************************************************************************************!*\
  !*** ./src/blocks/contract-components/feed-events-horizontal-container/editor.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/contract-components/feed-events-horizontal-container/style.scss":
/*!************************************************************************************!*\
  !*** ./src/blocks/contract-components/feed-events-horizontal-container/style.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

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

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/blocks/contract-components/feed-events-horizontal-container/block.json":
/*!************************************************************************************!*\
  !*** ./src/blocks/contract-components/feed-events-horizontal-container/block.json ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Feed, Layout: Events Horizontal Container","name":"elevation/contract-components--feed-events-horizontal-container","version":"1.0.0","category":"elevation-blocks","description":"Feed, Layout: Events Horizontal Container","textdomain":"elevation","parent":["elevation/interior-components--custom-container"],"supports":{"anchor":true,"align":false,"alignWide":false,"renaming":false,"inserter":true,"interactivity":{"clientNavigation":true}},"attributes":{"id":{"type":"string","default":""},"headingLevel":{"type":"string","default":"h5"},"filterBy":{"type":"string","default":"latest"},"categorySelected":{"type":"array","default":[]},"postsSelected":{"type":"array","default":[]},"postsPerPage":{"type":"number","default":3}},"editorScript":["file:index.js"],"style":["file:style-index.css"],"editorStyle":["file:index.css"],"render":"file:./render.php"}');

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
/******/ 			"blocks/contract-components/feed-events-horizontal-container/index": 0,
/******/ 			"blocks/contract-components/feed-events-horizontal-container/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/contract-components/feed-events-horizontal-container/style-index"], () => (__webpack_require__("./src/blocks/contract-components/feed-events-horizontal-container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
>>>>>>> 8c92ec8 (init : team bios option 1)
=======
(()=>{"use strict";var e,t={5416:(e,t,n)=>{const o=window.wp.blocks,r=JSON.parse('{"title":"Feed, Layout: Events Horizontal Container","name":"elevation/contract-components--feed-events-horizontal-container"}'),s=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components,i=window.wp.serverSideRender;var c=n.n(i);const d=window.wp.element,p=window.wp.coreData,u=window.ReactJSXRuntime,v=e=>{const{onChange:t,options:n,selectedOptions:o,type:r="post"}=e,[s,l]=(0,d.useState)(""),[i,c]=(0,d.useState)(!1),p=(0,d.useRef)(),v=n&&n.filter((e=>"post"==r?e.title.rendered.toLowerCase().includes(s.toLowerCase()):e.name.toLowerCase().includes(s.toLowerCase())));return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{style:{marginTop:"10px"},children:[(0,u.jsx)(a.SearchControl,{value:s,onClick:()=>c(!0),onChange:function(e){p?.current&&document.activeElement===p.current?c(!0):c(!1),l(e)},ref:p}),(0,u.jsx)("div",{style:{position:"relative"},className:"member-control__popover",children:i&&(0,u.jsx)("div",{className:"component-popover",children:v.length>0?v.map((e=>(0,u.jsx)(a.CheckboxControl,{label:"post"==r?e.title.rendered:e.name,checked:o.includes(e.id),onChange:()=>(e=>{const n=o.includes(e.id)?o.filter((t=>t!==e.id)):[...o,e.id];t(n)})(e)},e.id))):(0,u.jsx)("p",{children:"No results found."})})})]})})},h=e=>{const{attributes:t,setAttributes:n}=e,{categorySelected:o,postsSelected:r,postsPerPage:i,filterBy:c}=t,{records:h}=(0,p.useEntityRecords)("taxonomy","tribe_events_cat"),{records:w}=(0,p.useEntityRecords)("postType","tribe_events"),[g,m]=(0,d.useState)({}),[x,f]=(0,d.useState)([]);return(0,d.useEffect)((()=>{if(h){const e={};h.forEach((t=>{e[t.name]={id:t.id,name:t.name,parent:t.parent}})),m(e)}}),[h]),(0,d.useEffect)((()=>{f(w)}),[w]),(0,u.jsxs)(l.InspectorControls,{children:[(0,u.jsxs)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:[(0,u.jsx)(a.SelectControl,{label:"Filter By",value:c,options:[{label:"Newest Oldest",value:"latest"},{label:"Oldest Newest",value:"oldest"},{label:"Event Categories",value:"category"},{label:"Events",value:"events"}],onChange:e=>n({filterBy:e})}),"category"==c&&g&&(0,u.jsx)(a.QueryControls,{categorySuggestions:g,onCategoryChange:function(e){var t;o.length>e.length?n({categorySelected:e}):(t=e,n({categorySelected:[...o,g[t[t.length-1]]]}))},selectedCategories:o})]}),(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:(0,u.jsx)(a.RangeControl,{label:"Number of Items",value:i,onChange:e=>n({postsPerPage:e}),min:1,max:21})}),"events"==c&&x&&(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Select Posts"),children:(0,u.jsx)(v,{options:x,selectedOptions:r,onChange:e=>{n({postsSelected:e})}})})]})},{name:w,title:g}=r;(0,o.registerBlockType)(w,{title:g,icon:{src:(0,u.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,u.jsx)(a.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{attributes:t,clientId:n,setAttributes:o}=e,{id:s,anchor:i}=t,{name:p}=r,{name:v}=(e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}})(p),w=(0,l.useBlockProps)({className:`${v}`});return(0,d.useEffect)((()=>{o({id:`${v}-${n}`})}),[n,v,o]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{...e}),(0,u.jsx)("div",{id:i||s,"data-block-id":v,...w,children:(0,u.jsx)(c(),{block:p,attributes:t,loadingResponsePlaceholder:a.Spinner})})]})}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,r,s)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,r,s]=e[d],a=!0,i=0;i<n.length;i++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={6265:0,1731:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[l,a,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(i)var d=i(o)}for(t&&t(n);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[1731],(()=>o(5416)));r=o.O(r)})();
>>>>>>> 9725f44 (added : Team-Bios/Carousel)
