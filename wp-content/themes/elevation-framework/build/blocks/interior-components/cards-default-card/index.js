<<<<<<< HEAD
<<<<<<< HEAD
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var r=o.getElementsByTagName("script");if(r.length)for(var l=r.length-1;l>-1&&!t;)t=r[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.wp.components,o=window.wp.blocks,r=JSON.parse('{"title":"Card, Layout: Default.","name":"elevation/interior-components--cards-default-card"}'),l=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.element,c=e.p+"images/preview.a6f4068f.webp",i=["core/heading","core/paragraph"],s=[["core/paragraph",{fontSize:"body",content:"Maximum 10 words. At augue eget arcu dictum varius duis at consectetur lorem"}]],d=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}};function h(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(o=h(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}const u=function(){for(var e,t,o=0,r="",l=arguments.length;o<l;o++)(e=arguments[o])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r},g=window.ReactJSXRuntime,p=({onChange:e,color:o,label:r,colorPallet:l})=>{const c=(0,a.useSetting)("color.palette"),[i,s]=(0,n.useState)(!1),d={className:u("block-editor-panel-color-gradient-settings__dropdown",{"is-open":i}),style:{height:"auto",padding:"0px"}};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Button,{...d,onClick:()=>{s(!0)},children:(0,g.jsxs)(t.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"},children:[(0,g.jsx)(t.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:o}),(0,g.jsx)(t.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:r,style:{fontWeight:600},children:r})]})}),i&&(0,g.jsx)(t.Popover,{onClose:()=>s(!1),children:(0,g.jsx)(t.ColorPalette,{value:o,colors:l||c,onChange:e})})]})},x=e=>{const{attributes:o,setAttributes:r}=e,{link:c,tagName:i,backgroundColorHover:s,textColorHover:d,headingColor:h}=o,{url:u,target:x,ariaLabel:m}=c,v=(0,a.useSetting)("color.palette");(0,n.useEffect)((()=>{b("backgroundColorHover"),b("textColorHover"),b("headingColor")}),[]);const b=e=>{if(!o[e].includes("#")){const t=v.reduce(((t,r)=>r.slug==o[e]?r.color:t));t&&r({[e]:t?.color||t})}},j=(e,t)=>{r(t?{[e]:t}:{[e]:"#000"})};return(0,g.jsxs)(a.InspectorControls,{children:[(0,g.jsxs)(t.PanelBody,{title:(0,l.__)("Card Link","elevation"),children:[(0,g.jsxs)(g.Fragment,{children:[u&&(0,g.jsx)("a",{href:u,target:"_blank",style:{display:"block",marginBottom:"20px"},children:u}),(0,g.jsx)("div",{style:{marginBottom:"20px"},children:(0,g.jsx)(a.URLInputButton,{url:u,placeholder:(0,l.__)("Card Link URL...","elevation"),onChange:e=>r({link:{...c,url:e}})})}),(0,g.jsx)(t.ToggleControl,{label:"Open in new tab",checked:x,onChange:e=>{r({link:{...c,target:e}})}})]}),(0,g.jsx)(t.__experimentalInputControl,{value:m,placeholder:"Button Aria Label...",onChange:e=>{r({link:{...c,ariaLabel:e}})}})]}),(0,g.jsxs)(t.PanelBody,{title:(0,l.__)("Heading Options","elevation"),children:[(0,g.jsx)(t.SelectControl,{label:"Heading Size",value:i,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{r({tagName:e})}}),(0,g.jsx)(p,{color:h,label:"Heading Color",onChange:e=>{j("headingColor",e)}})]}),(0,g.jsx)(t.PanelBody,{title:(0,l.__)("Hover Options","elevation"),children:(0,g.jsxs)(t.__experimentalVStack,{justify:"flex-start",className:"cards-default__control-icon__colors",children:[(0,g.jsx)(p,{color:s,label:"Background Color [Hover]",onChange:e=>{j("backgroundColorHover",e)}}),(0,g.jsx)(p,{color:d,label:"Text Color [Hover]",onChange:e=>{j("textColorHover",e)}})]})})]})},{name:m,title:v}=r;(0,o.registerBlockType)(m,{title:v,icon:{src:(0,g.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,g.jsxs)(t.G,{children:[(0,g.jsx)(t.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,g.jsx)(t.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,g.jsx)(t.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,g.jsx)(t.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:t}=r,{name:o,blockId:h}=d(t),{clientId:u,attributes:p,setAttributes:m}=e,{id:v,anchor:b,preview:j,tagName:f,link:w,headingColor:k}=p,{text:C}=w;(0,n.useEffect)((()=>{m({id:`${o}-${u}`})}),[u,o,m]);const _=(0,a.useBlockProps)({className:`${o}`});return j?(0,g.jsx)("div",{className:`${o}-preview`,children:(0,g.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{...e}),(0,g.jsx)("div",{id:b||v,..._,children:(0,g.jsxs)("div",{className:`${o}__container`,children:[(0,g.jsx)(a.RichText,{style:{maxWidth:"100%",textWrap:"wrap",marginBottom:"0px","--default-editor-color":k},className:"wp-block-heading",tagName:"h"+f,value:C,allowedFormats:[],onChange:e=>{m({link:{...w,text:e}})},placeholder:(0,l.__)("Heading...")}),(0,g.jsx)(a.InnerBlocks,{template:s,allowedBlocks:i,templateLock:"all"})]})})]})},save:e=>{const{name:t}=r,{name:o,blockId:l}=d(t),{attributes:n}=e,{anchor:c,id:i,backgroundColorHover:s,tagName:h,link:u,textColorHover:p,headingColor:x}=n,{url:m,text:v,target:b,ariaLabel:j}=u,f={"--card-default-background-color":s,"--card-default-color-hover":p,"--card-heading-default-color":x},w=a.useBlockProps.save({className:`${o} `}),k=j||v,C=b?{target:"_blank"}:{},_=b?{rel:"noopener noreferrer"}:{};return(0,g.jsx)("div",{id:c||i,...w,style:f,children:(0,g.jsxs)("div",{className:`${o}__container`,children:[(0,g.jsx)("a",{className:`stretched-link wp-block-heading has-h-${h}-font-size`,href:m,"aria-label":k,...C,..._,children:v}),(0,g.jsx)(a.InnerBlocks.Content,{})]})})}})})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/ColorPicker.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/ColorPicker.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);





const ColorPicker = ({
  onChange,
  color,
  label,
  colorPallet
}) => {
  const colorPaletteDefault = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.palette');
  const [visible, setVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const toggleProps = {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('block-editor-panel-color-gradient-settings__dropdown', {
      'is-open': visible
    }),
    style: {
      height: 'auto',
      padding: '0px'
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, { ...toggleProps,
    onClick: () => {
      setVisible(true);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
    justify: "flex-start",
    style: {
      border: '1px solid #ddd',
      padding: '10px 12px',
      borderRadius: '2px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorIndicator, {
    className: "block-editor-panel-color-gradient-settings__color-indicator",
    colorValue: color
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
    className: "block-editor-panel-color-gradient-settings__color-name",
    title: label,
    style: {
      fontWeight: 600
    }
  }, label))), visible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    onClose: () => setVisible(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: color,
    colors: !!colorPallet ? colorPallet : colorPaletteDefault,
    onChange: onChange
  })));
};

/***/ }),

/***/ "./src/blocks/interior-components/cards-default-card/controls.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/controls.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ColorPicker */ "./src/blocks/components/ColorPicker.js");


/* External Dependencies */

/* Gutenberg Dependencies */




/* Internal Dependencies */


const Controls = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    link,
    tagName,
    backgroundColorHover,
    textColorHover,
    headingColor
  } = attributes;
  const {
    url,
    target,
    ariaLabel
  } = link;
  const colorPalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.palette');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getDefaultColor('backgroundColorHover');
    getDefaultColor('textColorHover');
    getDefaultColor('headingColor');
  }, []);
  /* This function set the rgba color based in custom vars 
        with the key set the attribute 
     */

  const getDefaultColor = key => {
    if (!attributes[key].includes('#')) {
      const colorDefault = colorPalette.reduce((acc, curr) => curr.slug == attributes[key] ? curr.color : acc);

      if (!!colorDefault) {
        setAttributes({
          [key]: colorDefault?.color || colorDefault
        });
      }
    }
  };

  const headingOptions = [{
    label: 'h1',
    value: '1'
  }, {
    label: 'h2',
    value: '2'
  }, {
    label: 'h3',
    value: '3'
  }, {
    label: 'h4',
    value: '4'
  }, {
    label: 'h5',
    value: '5'
  }, {
    label: 'h6',
    value: '6'
  }];

  const changeColor = (key, newValue) => {
    if (!newValue) {
      setAttributes({
        [key]: '#000'
      });
    } else {
      setAttributes({
        [key]: newValue
      });
    }
  };

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Link', 'elevation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: url,
    target: "_blank",
    style: {
      display: 'block',
      marginBottom: '20px'
    }
  }, url), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLInputButton, {
    url: url,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Link URL...', 'elevation'),
    onChange: newValue => setAttributes({
      link: { ...link,
        url: newValue
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Open in new tab",
    checked: target,
    onChange: newValue => {
      setAttributes({
        link: { ...link,
          target: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalInputControl, {
    value: ariaLabel,
    placeholder: "Button Aria Label...",
    onChange: newValue => {
      setAttributes({
        link: { ...link,
          ariaLabel: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Options', 'elevation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Heading Size",
    value: tagName,
    options: headingOptions,
    onChange: newValue => {
      setAttributes({
        tagName: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
    color: headingColor,
    label: 'Heading Color',
    onChange: newValue => {
      changeColor('headingColor', newValue);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Options', 'elevation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    justify: "flex-start",
    className: 'cards-default__control-icon__colors'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
    color: backgroundColorHover,
    label: 'Background Color [Hover]',
    onChange: newValue => {
      changeColor('backgroundColorHover', newValue);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
    color: textColorHover,
    label: 'Text Color [Hover]',
    onChange: newValue => {
      changeColor('textColorHover', newValue);
    }
  }))));
};

/***/ }),

/***/ "./src/blocks/interior-components/cards-default-card/edit.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/edit.js ***!
  \*******************************************************************/
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
/* harmony import */ var _preview_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview.webp */ "./src/blocks/interior-components/cards-default-card/preview.webp");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/blocks/interior-components/cards-default-card/template.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-default-card/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/cards-default-card/editor.scss");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls */ "./src/blocks/interior-components/cards-default-card/controls.js");




/* Internal Dependencies */




/* Block */





const Edit = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_7__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_6__.getBlockName)(blockName);
  const {
    clientId,
    attributes,
    setAttributes
  } = props;
  const {
    id,
    anchor,
    preview,
    tagName,
    link,
    headingColor
  } = attributes;
  const {
    text
  } = link;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setAttributes({
      id: `${name}-${clientId}`
    });
  }, [clientId, name, setAttributes]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `${name}`
  });

  if (preview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${name}-preview`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _preview_webp__WEBPACK_IMPORTED_MODULE_4__,
      alt: "Preview",
      style: {
        objectFit: 'contain',
        maxHeight: '100%',
        maxWidth: '100%'
      }
    }));
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls__WEBPACK_IMPORTED_MODULE_9__.Controls, { ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-block-id": blockId,
    id: anchor || id,
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      maxWidth: '100%',
      textWrap: 'wrap',
      marginBottom: '0px',
      '--default-editor-color': headingColor
    },
    className: "wp-block-heading",
    tagName: 'h' + tagName,
    value: text,
    allowedFormats: [],
    onChange: newValue => {
      setAttributes({
        link: { ...link,
          text: newValue
        }
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading...')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: _template__WEBPACK_IMPORTED_MODULE_5__.template,
    allowedBlocks: _template__WEBPACK_IMPORTED_MODULE_5__.allowedBlocks,
    templateLock: 'all'
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/cards-default-card/save.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/save.js ***!
  \*******************************************************************/
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-default-card/block.json");


/* Gutenberg Dependencies */

/* Internal Dependencies */




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
    anchor,
    id,
    backgroundColorHover,
    tagName,
    link,
    textColorHover,
    headingColor
  } = attributes;
  const {
    url,
    text,
    target,
    ariaLabel
  } = link;
  const style = {
    '--card-default-background-color': backgroundColorHover,
    '--card-default-color-hover': textColorHover,
    '--card-heading-default-color': headingColor
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `${name} `
  });
  const ariaLabelText = !!ariaLabel ? ariaLabel : text;
  const actualTarget = target ? {
    target: '_blank'
  } : {};
  const rel = target ? {
    rel: 'noopener noreferrer'
  } : {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-block-id": blockId,
    id: anchor || id,
    ...blockProps,
    style: style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `stretched-link wp-block-heading has-h-${tagName}-font-size`,
    href: url,
    "aria-label": ariaLabelText,
    ...actualTarget,
    ...rel
  }, text), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/cards-default-card/template.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/template.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowedBlocks: () => (/* binding */ allowedBlocks),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
const allowedBlocks = ['core/heading', 'core/paragraph'];
const template = [['core/paragraph', {
  fontSize: 'body',
  content: 'Maximum 10 words. At augue eget arcu dictum varius duis at consectetur lorem'
}]];

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

/***/ "./src/blocks/interior-components/cards-default-card/editor.scss":
/*!***********************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/editor.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/cards-default-card/preview.webp":
/*!************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/preview.webp ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/preview.a6f4068f.webp";

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

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./src/blocks/interior-components/cards-default-card/block.json":
/*!**********************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/block.json ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Card, Layout: Default.","name":"elevation/interior-components--cards-default-card","version":"1.0.0","category":"elevation-blocks","description":"Cards with title, subtitle.","textdomain":"elevation","supports":{"html":true,"align":false,"alignWide":false,"color":{"background":true,"gradients":false,"text":false,"link":false,"border":false},"spacing":{"margin":["top","bottom"]}},"attributes":{"id":{"type":"string","default":""},"preview":{"type":"boolean","default":false},"tagName":{"type":"string","default":"5"},"link":{"type":"object","default":{"text":"H5. Subheading lorem","url":"","target":false,"ariaLabel":""}},"headingColor":{"type":"string","default":"ui-foreground-primary-text-headings"},"backgroundColorHover":{"type":"string","default":"ui-foreground-primary-text-headings-span"},"textColorHover":{"type":"string","default":"ui-base-white"}},"editorScript":["file:index.js"],"editorStyle":["file:index.css"]}');

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-card/index.js ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-default-card/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/cards-default-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/cards-default-card/save.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


/**
 * Internal dependencies
 */





const {
  name,
  title
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, {
  title: title,
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      viewBox: "-5.0 -10.0 110.0 135.0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.G, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Path, {
          d: "m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Path, {
          d: "m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Path, {
          d: "m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Path, {
          d: "m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"
        })]
      })
    })
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
>>>>>>> 8c92ec8 (init : team bios option 1)
=======
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var r=o.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.wp.components,o=window.wp.blocks,r=JSON.parse('{"title":"Card, Layout: Default.","name":"elevation/interior-components--cards-default-card"}'),a=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.element,c=e.p+"images/preview.a6f4068f.webp",i=["core/heading","core/paragraph"],s=[["core/paragraph",{fontSize:"body",content:"Maximum 10 words. At augue eget arcu dictum varius duis at consectetur lorem"}]],d=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}};function h(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(o=h(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}const u=function(){for(var e,t,o=0,r="",a=arguments.length;o<a;o++)(e=arguments[o])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r},g=window.ReactJSXRuntime,p=({onChange:e,color:o,label:r,colorPallet:a})=>{const c=(0,l.useSetting)("color.palette"),[i,s]=(0,n.useState)(!1),d={className:u("block-editor-panel-color-gradient-settings__dropdown",{"is-open":i}),style:{height:"auto",padding:"0px"}};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.Button,{...d,onClick:()=>{s(!0)},children:(0,g.jsxs)(t.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"},children:[(0,g.jsx)(t.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:o}),(0,g.jsx)(t.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:r,style:{fontWeight:600},children:r})]})}),i&&(0,g.jsx)(t.Popover,{onClose:()=>s(!1),children:(0,g.jsx)(t.ColorPalette,{value:o,colors:a||c,onChange:e})})]})},x=e=>{const{attributes:o,setAttributes:r}=e,{link:c,tagName:i,backgroundColorHover:s,textColorHover:d,headingColor:h}=o,{url:u,target:x,ariaLabel:m}=c,v=(0,l.useSetting)("color.palette");(0,n.useEffect)((()=>{b("backgroundColorHover"),b("textColorHover"),b("headingColor")}),[]);const b=e=>{if(!o[e].includes("#")){const t=v.reduce(((t,r)=>r.slug==o[e]?r.color:t));t&&r({[e]:t?.color||t})}},j=(e,t)=>{r(t?{[e]:t}:{[e]:"#000"})};return(0,g.jsxs)(l.InspectorControls,{children:[(0,g.jsxs)(t.PanelBody,{title:(0,a.__)("Card Link","elevation"),children:[(0,g.jsxs)(g.Fragment,{children:[u&&(0,g.jsx)("a",{href:u,target:"_blank",style:{display:"block",marginBottom:"20px"},children:u}),(0,g.jsx)("div",{style:{marginBottom:"20px"},children:(0,g.jsx)(l.URLInputButton,{url:u,placeholder:(0,a.__)("Card Link URL...","elevation"),onChange:e=>r({link:{...c,url:e}})})}),(0,g.jsx)(t.ToggleControl,{label:"Open in new tab",checked:x,onChange:e=>{r({link:{...c,target:e}})}})]}),(0,g.jsx)(t.__experimentalInputControl,{value:m,placeholder:"Button Aria Label...",onChange:e=>{r({link:{...c,ariaLabel:e}})}})]}),(0,g.jsxs)(t.PanelBody,{title:(0,a.__)("Heading Options","elevation"),children:[(0,g.jsx)(t.SelectControl,{label:"Heading Size",value:i,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{r({tagName:e})}}),(0,g.jsx)(p,{color:h,label:"Heading Color",onChange:e=>{j("headingColor",e)}})]}),(0,g.jsx)(t.PanelBody,{title:(0,a.__)("Hover Options","elevation"),children:(0,g.jsxs)(t.__experimentalVStack,{justify:"flex-start",className:"cards-default__control-icon__colors",children:[(0,g.jsx)(p,{color:s,label:"Background Color [Hover]",onChange:e=>{j("backgroundColorHover",e)}}),(0,g.jsx)(p,{color:d,label:"Text Color [Hover]",onChange:e=>{j("textColorHover",e)}})]})})]})},{name:m,title:v}=r;(0,o.registerBlockType)(m,{title:v,icon:{src:(0,g.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,g.jsxs)(t.G,{children:[(0,g.jsx)(t.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,g.jsx)(t.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,g.jsx)(t.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,g.jsx)(t.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:t}=r,{name:o,blockId:h}=d(t),{clientId:u,attributes:p,setAttributes:m}=e,{id:v,anchor:b,preview:j,tagName:f,link:w,headingColor:k}=p,{text:C}=w;(0,n.useEffect)((()=>{m({id:`${o}-${u}`})}),[u,o,m]);const _=(0,l.useBlockProps)({className:`${o}`});return j?(0,g.jsx)("div",{className:`${o}-preview`,children:(0,g.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{...e}),(0,g.jsx)("div",{"data-block-id":h,id:b||v,..._,children:(0,g.jsxs)("div",{className:`${o}__container`,children:[(0,g.jsx)(l.RichText,{style:{maxWidth:"100%",textWrap:"wrap",marginBottom:"0px","--default-editor-color":k},className:"wp-block-heading",tagName:"h"+f,value:C,allowedFormats:[],onChange:e=>{m({link:{...w,text:e}})},placeholder:(0,a.__)("Heading...")}),(0,g.jsx)(l.InnerBlocks,{template:s,allowedBlocks:i,templateLock:"all"})]})})]})},save:e=>{const{name:t}=r,{name:o,blockId:a}=d(t),{attributes:n}=e,{anchor:c,id:i,backgroundColorHover:s,tagName:h,link:u,textColorHover:p,headingColor:x}=n,{url:m,text:v,target:b,ariaLabel:j}=u,f={"--card-default-background-color":s,"--card-default-color-hover":p,"--card-heading-default-color":x},w=l.useBlockProps.save({className:`${o} `}),k=j||v,C=b?{target:"_blank"}:{},_=b?{rel:"noopener noreferrer"}:{};return(0,g.jsx)("div",{"data-block-id":a,id:c||i,...w,style:f,children:(0,g.jsxs)("div",{className:`${o}__container`,children:[(0,g.jsx)("a",{className:`stretched-link wp-block-heading has-h-${h}-font-size`,href:m,"aria-label":k,...C,..._,children:v}),(0,g.jsx)(l.InnerBlocks.Content,{})]})})}})})();
>>>>>>> 9725f44 (added : Team-Bios/Carousel)
