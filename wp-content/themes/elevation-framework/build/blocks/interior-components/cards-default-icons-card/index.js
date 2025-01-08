<<<<<<< HEAD
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var o;e.g.importScripts&&(o=e.g.location+"");var r=e.g.document;if(!o&&r&&(r.currentScript&&(o=r.currentScript.src),!o)){var t=r.getElementsByTagName("script");if(t.length)for(var l=t.length-1;l>-1&&!o;)o=t[l--].src}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=o+"../../../"})();const o=window.wp.components,r=window.wp.blocks,t=JSON.parse('{"title":"Card : Default+Icons.","name":"elevation/interior-components--cards-default-icons-card"}'),l=window.wp.i18n,n=window.wp.blockEditor,a=window.wp.element,s=e.p+"images/preview.a6f4068f.webp",i=["core/paragraph"],c=[["core/paragraph",{fontSize:"body",content:"Maximum 10 words. Tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur."}]],d=e=>{const o=e.split("/")[1].split("--");return{blockId:o.join("/"),name:o[1]}};function h(e){var o,r,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(r=h(e[o]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}const g=function(){for(var e,o,r=0,t="",l=arguments.length;r<l;r++)(e=arguments[r])&&(o=h(e))&&(t&&(t+=" "),t+=o);return t},u=window.ReactJSXRuntime,x=({onChange:e,color:r,label:t,colorPallet:l})=>{const s=(0,n.useSetting)("color.palette"),[i,c]=(0,a.useState)(!1),d={className:g("block-editor-panel-color-gradient-settings__dropdown",{"is-open":i}),style:{height:"auto",padding:"0px"}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Button,{...d,onClick:()=>{c(!0)},children:(0,u.jsxs)(o.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"},children:[(0,u.jsx)(o.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:r}),(0,u.jsx)(o.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:t,style:{fontWeight:600},children:t})]})}),i&&(0,u.jsx)(o.Popover,{onClose:()=>c(!1),children:(0,u.jsx)(o.ColorPalette,{value:r,colors:l||s,onChange:e})})]})},v=({onClick:e})=>(0,u.jsx)(o.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,l.__)("Remove Image")}),m=({value:e,onSelect:r})=>(0,u.jsx)(n.MediaUploadCheck,{children:(0,u.jsx)(n.MediaUpload,{onSelect:r,allowedTypes:["image"],value:e,render:({open:e})=>(0,u.jsx)(o.Button,{onClick:e,variant:"secondary",children:(0,l.__)("Select Image")})})}),p=e=>{const{attributes:r,setAttributes:t}=e,{link:s,tagName:i,icon:c,hasIconHover:d,iconHover:h,backgroundColorHover:g,headingColor:p,textColorHover:j,hasColorHover:b}=r,{url:w,target:f,ariaLabel:C}=s,k=(0,n.useSetting)("color.palette");(0,a.useEffect)((()=>{_("backgroundColorHover"),_("textColorHover"),_("headingColor")}),[]);const _=e=>{if(!r[e].includes("#")){const o=k.reduce(((o,t)=>t.slug==r[e]?t.color:o));o&&t({[e]:o?.color||o})}},y=e=>{t({[e]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})},H=(e,o)=>{const{fullSize:l,srcset:n,sizes:a,alt:s,id:i}=function(e,o="full"){if(!e||!e.sizes||!e.sizes.full)return null;const r=Math.max(...Object.values(e.sizes).map((e=>e.width))),t=`(max-width: ${r}px) 100vw, ${r}px`,l=Object.keys(e.sizes).map((o=>{const r=e.sizes[o];return`${r.url} ${r.width}w`})).join(", ");return{fullSize:e.sizes[o],srcset:l,sizes:t,alt:e.alt,id:e.id}}(o);t({[e]:{...r[e],url:l.url,alt:s,id:i,srcset:n,width:l.width,height:l.height,sizes:a}})},z=(e,o)=>{t(o?{[e]:o}:{[e]:"#000"})};return(0,u.jsxs)(n.InspectorControls,{children:[(0,u.jsxs)(o.PanelBody,{title:(0,l.__)("Link Settings","elevation"),children:[(0,u.jsxs)(u.Fragment,{children:[w&&(0,u.jsx)("a",{href:w,target:"_blank",style:{display:"block",marginBottom:"20px"},children:w}),(0,u.jsx)("div",{style:{marginBottom:"20px"},children:(0,u.jsx)(n.URLInputButton,{url:w,placeholder:(0,l.__)("Card Link URL...","elevation"),onChange:e=>t({link:{...s,url:e}})})}),(0,u.jsx)(o.ToggleControl,{label:"Open in new tab",checked:f,onChange:e=>{t({link:{...s,target:e}})}})]}),(0,u.jsx)(o.__experimentalInputControl,{value:C,placeholder:"Button Aria Label...",onChange:e=>{t({link:{...s,ariaLabel:e}})}})]}),(0,u.jsxs)(o.PanelBody,{title:(0,l.__)("Heading Settings","elevation"),children:[(0,u.jsx)(o.SelectControl,{label:"Heading Size",value:i,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{t({tagName:e})}}),(0,u.jsx)(x,{color:p,label:"Heading Color",onChange:e=>{z("headingColor",e)}})]}),(0,u.jsxs)(o.PanelBody,{title:(0,l.__)("Icon Settings","elevation"),children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:c.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",children:(0,u.jsx)("img",{src:c.url})}),(0,u.jsx)(v,{onClick:()=>{y("icon")}})]}):(0,u.jsx)(m,{value:c.url,onSelect:e=>{H("icon",e)}})}),(0,u.jsx)(o.ToggleControl,{label:"Has Icon Hover",help:d?"Icon Hover in enable":"",checked:d,onChange:e=>t({hasIconHover:e})}),d&&(0,u.jsx)(u.Fragment,{children:h.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",children:(0,u.jsx)("img",{src:h.url})}),(0,u.jsx)(v,{onClick:()=>{y("iconHover")}})]}):(0,u.jsx)(m,{value:h.url,onSelect:e=>{H("iconHover",e)}})})]}),(0,u.jsx)(o.PanelBody,{title:(0,l.__)("Hover Settings","elevation"),children:(0,u.jsxs)(o.__experimentalVStack,{justify:"flex-start",className:"cards-default__control-icon__colors",children:[(0,u.jsx)(o.ToggleControl,{label:"has Colors Hover",help:b?"has Colors Hover":"",checked:b,onChange:e=>t({hasColorHover:e})}),b&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{color:g,label:"Background Color [Hover]",onChange:e=>{z("backgroundColorHover",e)}}),(0,u.jsx)(x,{color:j,label:"Text Color [Hover]",onChange:e=>{z("textColorHover",e)}})]})]})})]})},j=({img:e,className:o,lazyload:r=!0,selectorId:t})=>{if(!e?.url)return;const{url:l,alt:n,width:a,height:s,sizes:i,srcset:c,focalPoint:d}=e;let h="center";return d?.x&&d?.y&&(h=`${100*d.x}% ${100*d.y}%`),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{decoding:"async",src:l,alt:n,width:a,height:s,className:o,srcSet:c,sizes:i,loading:r?"lazy":"eager"}),!!d&&(0,u.jsx)("style",{children:`#${t} .${o} {object-position: ${h};}`})]})},{name:b,title:w}=t;(0,r.registerBlockType)(b,{title:w,icon:{src:(0,u.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,u.jsxs)(o.G,{children:[(0,u.jsx)(o.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:o}=t,{name:r,blockId:h}=d(o),{clientId:g,attributes:x,setAttributes:v}=e,{id:m,anchor:j,preview:b,tagName:w,link:f,icon:C,headingColor:k}=x,{text:_}=f;(0,a.useEffect)((()=>{v({id:`${r}-${g}`})}),[g,r,v]);const y=(0,n.useBlockProps)({className:`${r}`});return b?(0,u.jsx)("div",{className:`${r}-preview`,children:(0,u.jsx)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p,{...e}),(0,u.jsx)("div",{id:j||m,...y,children:(0,u.jsxs)("div",{className:`${r}__container`,children:[C?.url&&(0,u.jsx)("img",{src:C.url,className:`${r}__icon`,selectorId:j||m}),(0,u.jsx)(n.RichText,{style:{maxWidth:"100%",textWrap:"wrap",marginBottom:"0px","--default-editor-color":k},className:"wp-block-heading",tagName:"h"+w,value:_,allowedFormats:[],onChange:e=>{v({link:{...f,text:e}})},placeholder:(0,l.__)("Heading...")}),(0,u.jsx)(n.InnerBlocks,{template:c,allowedBlocks:i,templateLock:"all"})]})})]})},save:e=>{const{name:o}=t,{name:r,blockId:l}=d(o),{attributes:a}=e,{anchor:s,id:i,backgroundColorHover:c,tagName:h,link:g,textColorHover:x,icon:v,hasIconHover:m,iconHover:p,headingColor:b,hasColorHover:w}=a,{url:f,text:C,target:k,ariaLabel:_}=g,y={"--card-default-background-hover":c,"--card-default-color-hover":x,"--card-default-color-heading":b},H=n.useBlockProps.save({className:`${r} ${w?"has-hover":""} `}),z=_||C,N=k?{target:"_blank"}:{},S=k?{rel:"noopener noreferrer"}:{};return(0,u.jsx)("div",{id:s||i,...H,style:y,children:(0,u.jsxs)("div",{className:`${r}__container ${m?"has-icon-hover":""}`,children:[(0,u.jsx)(j,{img:v,className:`${r}__icon `,selectorId:s||i}),m&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(j,{img:p,className:`${r}__icon hover`,selectorId:s||i})}),(0,u.jsx)("a",{className:`stretched-link wp-block-heading has-h-${h}-font-size`,href:f,"aria-label":z,...N,...S,children:C}),(0,u.jsx)(n.InnerBlocks.Content,{})]})})}})})();
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

/***/ "./src/blocks/interior-components/cards-default-icons-card/controls.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/controls.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _components_UploadMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UploadMedia */ "./src/blocks/components/UploadMedia.js");
/* harmony import */ var _utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/getImageAttributes */ "./src/blocks/utils/getImageAttributes.js");


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
    icon,
    hasIconHover,
    iconHover,
    backgroundColorHover,
    headingColor,
    textColorHover,
    hasColorHover
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Settings', 'elevation')
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Settings', 'elevation')
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Settings', 'elevation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cards-long-description-icons-card__control-icon"
  }, icon.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cards-long-description-icons-card__control-icon-picker"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: icon.url
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_6__.RemoveImageButton, {
    onClick: () => {
      removeImage('icon');
    }
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_6__.UploadMedia, {
    value: icon.url,
    onSelect: newValue => {
      addMedia('icon', newValue);
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Has Icon Hover",
    help: hasIconHover ? 'Icon Hover in enable' : '',
    checked: hasIconHover,
    onChange: newValue => setAttributes({
      hasIconHover: newValue
    })
  }), hasIconHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, iconHover.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cards-long-description-icons-card__control-icon-picker"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: iconHover.url
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_6__.RemoveImageButton, {
    onClick: () => {
      removeImage('iconHover');
    }
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_6__.UploadMedia, {
    value: iconHover.url,
    onSelect: newValue => {
      addMedia('iconHover', newValue);
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Settings', 'elevation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    justify: "flex-start",
    className: 'cards-default__control-icon__colors'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "has Colors Hover",
    help: hasColorHover ? 'has Colors Hover' : '',
    checked: hasColorHover,
    onChange: newValue => setAttributes({
      hasColorHover: newValue
    })
  }), hasColorHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
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
  })))));
};

/***/ }),

/***/ "./src/blocks/interior-components/cards-default-icons-card/edit.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/edit.js ***!
  \*************************************************************************/
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
/* harmony import */ var _preview_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview.webp */ "./src/blocks/interior-components/cards-default-icons-card/preview.webp");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/blocks/interior-components/cards-default-icons-card/template.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-default-icons-card/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/cards-default-icons-card/editor.scss");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls */ "./src/blocks/interior-components/cards-default-icons-card/controls.js");


/* Gutenberg Dependencies */



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
    icon,
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
  }, icon?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: icon.url,
    className: `${name}__icon`,
    selectorId: anchor || id
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
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

/***/ "./src/blocks/interior-components/cards-default-icons-card/save.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/save.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ImageWithFocalPoint */ "./src/blocks/components/ImageWithFocalPoint.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-default-icons-card/block.json");


/* Gutenberg Dependencies */

/* Internal Dependencies */



/* Block */



const save = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_4__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.getBlockName)(blockName);
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
    icon,
    hasIconHover,
    iconHover,
    headingColor,
    hasColorHover
  } = attributes;
  const {
    url,
    text,
    target,
    ariaLabel
  } = link;
  const style = {
    '--card-default-background-hover': backgroundColorHover,
    '--card-default-color-hover': textColorHover,
    '--card-default-color-heading': headingColor
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `${name} ${hasColorHover ? 'has-hover' : ''} `
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
    className: `${name}__container ${hasIconHover ? 'has-icon-hover' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_2__.ImageWithFocalPoint, {
    img: icon,
    className: `${name}__icon `,
    selectorId: anchor || id
  }), hasIconHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_2__.ImageWithFocalPoint, {
    img: iconHover,
    className: `${name}__icon hover`,
    selectorId: anchor || id
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `stretched-link wp-block-heading has-h-${tagName}-font-size`,
    href: url,
    "aria-label": ariaLabelText,
    ...actualTarget,
    ...rel
  }, text), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/cards-default-icons-card/template.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/template.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowedBlocks: () => (/* binding */ allowedBlocks),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
const allowedBlocks = ['core/paragraph'];
const template = [['core/paragraph', {
  fontSize: 'body',
  content: 'Maximum 10 words. Tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur.'
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

/***/ "./src/blocks/interior-components/cards-default-icons-card/editor.scss":
/*!*****************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/editor.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/cards-default-icons-card/preview.webp":
/*!******************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/preview.webp ***!
  \******************************************************************************/
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

/***/ "./src/blocks/interior-components/cards-default-icons-card/block.json":
/*!****************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/block.json ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Card : Default+Icons.","name":"elevation/interior-components--cards-default-icons-card","version":"1.0.0","category":"elevation-blocks","description":"Cards with title, subtitle.","textdomain":"elevation","supports":{"html":true,"align":false,"alignWide":false,"color":{"background":true,"gradients":false,"text":false,"link":false,"border":false},"spacing":{"margin":["top","bottom"]}},"attributes":{"id":{"type":"string","default":""},"preview":{"type":"boolean","default":false},"icon":{"type":"object","default":{"url":"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-default-icons/images/icon-1.webp","alt":"","id":0,"srcset":"","width":"auto","height":"auto","sizes":""}},"hasIconHover":{"type":"boolean","default":false},"iconHover":{"type":"object","default":{"url":"","alt":"","id":0,"srcset":"","width":0,"height":0,"sizes":""}},"tagName":{"type":"string","default":"6"},"link":{"type":"object","default":{"text":"H6. Subheading lorem ipsum felis eget nunc","url":"","target":false,"ariaLabel":""}},"hasColorHover":{"type":"boolean","default":false},"backgroundColorHover":{"type":"string","default":"ui-foreground-primary-text-headings-span"},"textColorHover":{"type":"string","default":"ui-base-white"},"headingColor":{"type":"string","default":"ui-foreground-primary-text-headings"}},"editorScript":["file:index.js"],"editorStyle":["file:index.css"]}');

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
/*!**************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-default-icons-card/index.js ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-default-icons-card/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/cards-default-icons-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/cards-default-icons-card/save.js");
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
