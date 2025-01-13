<<<<<<< HEAD
<<<<<<< HEAD
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var o;e.g.importScripts&&(o=e.g.location+"");var r=e.g.document;if(!o&&r&&(r.currentScript&&(o=r.currentScript.src),!o)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!o;)o=t[n--].src}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=o+"../../../"})();const o=window.wp.components,r=window.wp.blocks,t=JSON.parse('{"title":"Card: With Icon, title, description and button.","name":"elevation/interior-components--cards-long-description-icons-card"}'),n=window.wp.i18n,c=window.wp.blockEditor,s=window.wp.element,i=e.p+"images/preview.a6f4068f.webp",l=["core/heading","core/paragraph","elevation/interior-components--buttons"],a=[["core/heading",{level:6,content:"Strong Text. Subheading lorem ipsum",textColor:"ui-foreground-primary-text-headings"}],["core/paragraph",{fontSize:"body",content:"Maximum 20 words. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus"}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"tertiary--color-01"}]]]],d=e=>{const o=e.split("/")[1].split("--");return{blockId:o.join("/"),name:o[1]}},u=window.ReactJSXRuntime,h=({onClick:e})=>(0,u.jsx)(o.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,n.__)("Remove Image")}),g=({value:e,onSelect:r})=>(0,u.jsx)(c.MediaUploadCheck,{children:(0,u.jsx)(c.MediaUpload,{onSelect:r,allowedTypes:["image"],value:e,render:({open:e})=>(0,u.jsx)(o.Button,{onClick:e,variant:"secondary",children:(0,n.__)("Select Image")})})});function m(e){var o,r,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(r=m(e[o]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}const p=function(){for(var e,o,r=0,t="",n=arguments.length;r<n;r++)(e=arguments[r])&&(o=m(e))&&(t&&(t+=" "),t+=o);return t},x=({onChange:e,color:r,label:t,colorPallet:n})=>{const i=(0,c.useSetting)("color.palette"),[l,a]=(0,s.useState)(!1),d={className:p("block-editor-panel-color-gradient-settings__dropdown",{"is-open":l}),style:{height:"auto",padding:"0px"}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Button,{...d,onClick:()=>{a(!0)},children:(0,u.jsxs)(o.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"},children:[(0,u.jsx)(o.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:r}),(0,u.jsx)(o.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:t,style:{fontWeight:600},children:t})]})}),l&&(0,u.jsx)(o.Popover,{onClose:()=>a(!1),children:(0,u.jsx)(o.ColorPalette,{value:r,colors:n||i,onChange:e})})]})},v=e=>{const{attributes:r,setAttributes:t}=e,i=(0,c.useSetting)("color.palette"),{icon:l,hasHover:a,iconHover:d,iconBackgroundColor:m,backgroundColorHover:p}=r;(0,s.useEffect)((()=>{v("iconBackgroundColor"),v("backgroundColorHover")}),[]);const v=e=>{if(!r[e].includes("#")){const o=i.reduce(((o,t)=>t.slug==r[e]?t.color:o));o&&t({[e]:o?.color||o})}},j=e=>{t({[e]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})},b=(e,o)=>{const{fullSize:n,srcset:c,sizes:s,alt:i,id:l}=function(e,o="full"){if(!e||!e.sizes||!e.sizes.full)return null;const r=Math.max(...Object.values(e.sizes).map((e=>e.width))),t=`(max-width: ${r}px) 100vw, ${r}px`,n=Object.keys(e.sizes).map((o=>{const r=e.sizes[o];return`${r.url} ${r.width}w`})).join(", ");return{fullSize:e.sizes[o],srcset:n,sizes:t,alt:e.alt,id:e.id}}(o);t({[e]:{...r[e],url:n.url,alt:i,id:l,srcset:c,width:n.width,height:n.height,sizes:s}})},w=(e,o)=>{t(o?{[e]:o}:{[e]:"#000"})};return(0,u.jsx)(c.InspectorControls,{children:(0,u.jsxs)(o.PanelBody,{title:(0,n.__)("Icon"),children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:l.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:m},children:(0,u.jsx)("img",{src:l.url})}),(0,u.jsx)(h,{onClick:()=>{j("icon")}})]}):(0,u.jsx)(g,{value:l.url,onSelect:e=>{b("icon",e)}})}),(0,u.jsx)(o.ToggleControl,{label:"Has Hover",help:a?"Icon Hover in enable":"",checked:a,onChange:e=>t({hasHover:e})}),a&&(0,u.jsx)(u.Fragment,{children:d.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:p},children:(0,u.jsx)("img",{src:d.url})}),(0,u.jsx)(h,{onClick:()=>{j("iconHover")}})]}):(0,u.jsx)(g,{value:d.url,onSelect:e=>{b("iconHover",e)}})}),(0,u.jsxs)(o.__experimentalVStack,{justify:"flex-start",className:"cards-icons__control-icon__colors",children:[(0,u.jsx)(x,{color:m,label:"Background Color",onChange:e=>w("iconBackgroundColor",e)}),a&&(0,u.jsx)(x,{color:p,label:"Background Color [Hover]",onChange:e=>w("backgroundColorHover",e)})]})]})})},j=({img:e,className:o,lazyload:r=!0,selectorId:t})=>{if(!e?.url)return;const{url:n,alt:c,width:s,height:i,sizes:l,srcset:a,focalPoint:d}=e;let h="center";return d?.x&&d?.y&&(h=`${100*d.x}% ${100*d.y}%`),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{decoding:"async",src:n,alt:c,width:s,height:i,className:o,srcSet:a,sizes:l,loading:r?"lazy":"eager"}),!!d&&(0,u.jsx)("style",{children:`#${t} .${o} {object-position: ${h};}`})]})},{name:b,title:w}=t;(0,r.registerBlockType)(b,{title:w,icon:{src:(0,u.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,u.jsxs)(o.G,{children:[(0,u.jsx)(o.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:o}=t,{name:r,blockId:n}=d(o),{clientId:h,attributes:g,setAttributes:m}=e,{id:p,anchor:x,preview:j,icon:b,iconBackgroundColor:w}=g;(0,s.useEffect)((()=>{m({id:`${r}-${h}`})}),[h,r,m]);const k=(0,c.useBlockProps)({className:`${r}`});return j?(0,u.jsx)("div",{className:`${r}-preview`,children:(0,u.jsx)("img",{src:i,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{...e}),(0,u.jsxs)("div",{id:x||p,...k,children:[(0,u.jsx)("div",{className:`${r}__icon-container no-hover`,style:{backgroundColor:w},children:b?.url&&(0,u.jsx)("img",{src:b.url,className:`${r}__img`,selectorId:x||p})}),(0,u.jsx)("div",{className:`${r}__container`,children:(0,u.jsx)(c.InnerBlocks,{template:a,allowedBlocks:l,templateLock:!1})})]})]})},save:e=>{const{name:o}=t,{name:r,blockId:n}=d(o),{attributes:s}=e,{anchor:i,id:l,icon:a,iconBackgroundColor:h,backgroundColorHover:g,hasHover:m,iconHover:p}=s,x=c.useBlockProps.save({className:`${r} `}),v={"background-color":h,"--background-color":m?g:h};return(0,u.jsxs)("div",{id:i||l,...x,children:[(0,u.jsxs)("div",{className:`${r}__icon-container ${m?"has_icon-hover":""}`,style:v,children:[(0,u.jsx)(j,{img:a,className:`${r}__img no-animate`,selectorId:i||l}),m&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(j,{img:p,className:`${r}__img hover no-animate`,selectorId:i||l})})]}),(0,u.jsx)("div",{className:`${r}__container`,children:(0,u.jsx)(c.InnerBlocks.Content,{})})]})}})})();
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

/***/ "./src/blocks/interior-components/cards-long-description-icons-card/controls.js":
/*!**************************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/controls.js ***!
  \**************************************************************************************/
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
/* harmony import */ var _utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getImageAttributes */ "./src/blocks/utils/getImageAttributes.js");
/* harmony import */ var _components_UploadMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UploadMedia */ "./src/blocks/components/UploadMedia.js");
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ColorPicker */ "./src/blocks/components/ColorPicker.js");


/* External Dependencies */

/* Gutenberg Dependencies */




/* Internal Dependencies */




const Controls = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const colorPalette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useSetting)('color.palette');
  const {
    icon,
    hasHover,
    iconHover,
    iconBackgroundColor,
    backgroundColorHover
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getDefaultColor('iconBackgroundColor');
    getDefaultColor('backgroundColorHover');
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
    } = (0,_utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_5__.getImageAttributes)(media);
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cards-long-description-icons-card__control-icon"
  }, icon.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cards-long-description-icons-card__control-icon-picker",
    style: {
      backgroundColor: iconBackgroundColor
    }
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
    label: "Has Hover",
    help: hasHover ? 'Icon Hover in enable' : '',
    checked: hasHover,
    onChange: newValue => setAttributes({
      hasHover: newValue
    })
  }), hasHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, iconHover.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cards-long-description-icons-card__control-icon-picker",
    style: {
      backgroundColor: backgroundColorHover
    }
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
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    justify: "flex-start",
    className: 'cards-icons__control-icon__colors'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
    color: iconBackgroundColor,
    label: 'Background Color',
    onChange: newValue => changeColor('iconBackgroundColor', newValue)
  }), hasHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
    color: backgroundColorHover,
    label: 'Background Color [Hover]',
    onChange: newValue => changeColor('backgroundColorHover', newValue)
  }))));
};

/***/ }),

/***/ "./src/blocks/interior-components/cards-long-description-icons-card/edit.js":
/*!**********************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/edit.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _preview_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview.webp */ "./src/blocks/interior-components/cards-long-description-icons-card/preview.webp");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/blocks/interior-components/cards-long-description-icons-card/template.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-long-description-icons-card/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/cards-long-description-icons-card/editor.scss");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls */ "./src/blocks/interior-components/cards-long-description-icons-card/controls.js");


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
    icon,
    iconBackgroundColor
  } = attributes;
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
    className: `${name}__icon-container no-hover`,
    style: {
      backgroundColor: iconBackgroundColor
    }
  }, icon?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: icon.url,
    className: `${name}__img`,
    selectorId: anchor || id
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: _template__WEBPACK_IMPORTED_MODULE_5__.template,
    allowedBlocks: _template__WEBPACK_IMPORTED_MODULE_5__.allowedBlocks,
    templateLock: false
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/cards-long-description-icons-card/save.js":
/*!**********************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/save.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-long-description-icons-card/block.json");


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
    icon,
    iconBackgroundColor,
    backgroundColorHover,
    hasHover,
    iconHover
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `${name} `
  });
  const style = {
    'background-color': iconBackgroundColor,
    '--background-color': hasHover ? backgroundColorHover : iconBackgroundColor
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-block-id": blockId,
    id: anchor || id,
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__icon-container ${hasHover ? 'has_icon-hover' : ''}`,
    style: style
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_2__.ImageWithFocalPoint, {
    img: icon,
    className: `${name}__img no-animate`,
    selectorId: anchor || id
  }), hasHover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_2__.ImageWithFocalPoint, {
    img: iconHover,
    className: `${name}__img hover no-animate`,
    selectorId: anchor || id
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/interior-components/cards-long-description-icons-card/template.js":
/*!**************************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/template.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowedBlocks: () => (/* binding */ allowedBlocks),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
const allowedBlocks = ['core/heading', 'core/paragraph', 'elevation/interior-components--buttons'];
const template = [['core/heading', {
  level: 6,
  content: 'Strong Text. Subheading lorem ipsum',
  textColor: 'ui-foreground-primary-text-headings'
}], ['core/paragraph', {
  fontSize: 'body',
  content: 'Maximum 20 words. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus'
}], ['elevation/interior-components--buttons', {}, [['elevation/interior-components--button', {
  btnStyle: 'tertiary--color-01'
}]]]];

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

/***/ "./src/blocks/interior-components/cards-long-description-icons-card/editor.scss":
/*!**************************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/editor.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/cards-long-description-icons-card/preview.webp":
/*!***************************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/preview.webp ***!
  \***************************************************************************************/
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

/***/ "./src/blocks/interior-components/cards-long-description-icons-card/block.json":
/*!*************************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/block.json ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Card: With Icon, title, description and button.","name":"elevation/interior-components--cards-long-description-icons-card","version":"1.0.0","category":"elevation-blocks","description":"Cards with title, subtitle and background images","textdomain":"elevation","supports":{"html":true,"align":false,"alignWide":false,"color":{"background":true,"gradients":false,"text":false,"link":false,"border":false},"spacing":{"margin":["top","bottom"]}},"attributes":{"id":{"type":"string","default":""},"preview":{"type":"boolean","default":false},"icon":{"type":"object","default":{"url":"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-long-description-icons/images/icon-1.webp","alt":"","id":0,"srcset":"","width":"auto","height":"auto","sizes":""}},"iconBackgroundColor":{"type":"string","default":"ui-foreground-primary-text-headings-span"},"hasHover":{"type":"boolean","default":false},"iconHover":{"type":"object","default":{"url":"","alt":"","id":0,"srcset":"","width":0,"height":0,"sizes":""}},"backgroundColorHover":{"type":"string","default":"ui-foreground-primary-text-headings-span"},"headingColor":{"type":"string","default":"ui-foreground-primary-text-headings"}},"editorScript":["file:index.js"],"editorStyle":["file:index.css"]}');

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
/*!***********************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-long-description-icons-card/index.js ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-long-description-icons-card/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/cards-long-description-icons-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/cards-long-description-icons-card/save.js");
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
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var o;e.g.importScripts&&(o=e.g.location+"");var r=e.g.document;if(!o&&r&&(r.currentScript&&(o=r.currentScript.src),!o)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!o;)o=t[n--].src}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=o+"../../../"})();const o=window.wp.components,r=window.wp.blocks,t=JSON.parse('{"title":"Card: With Icon, title, description and button.","name":"elevation/interior-components--cards-long-description-icons-card"}'),n=window.wp.i18n,c=window.wp.blockEditor,i=window.wp.element,s=e.p+"images/preview.a6f4068f.webp",l=["core/heading","core/paragraph","elevation/interior-components--buttons"],a=[["core/heading",{level:6,content:"Strong Text. Subheading lorem ipsum",textColor:"ui-foreground-primary-text-headings"}],["core/paragraph",{fontSize:"body",content:"Maximum 20 words. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus"}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"tertiary--color-01"}]]]],d=e=>{const o=e.split("/")[1].split("--");return{blockId:o.join("/"),name:o[1]}},u=window.ReactJSXRuntime,h=({onClick:e})=>(0,u.jsx)(o.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,n.__)("Remove Image")}),g=({value:e,onSelect:r})=>(0,u.jsx)(c.MediaUploadCheck,{children:(0,u.jsx)(c.MediaUpload,{onSelect:r,allowedTypes:["image"],value:e,render:({open:e})=>(0,u.jsx)(o.Button,{onClick:e,variant:"secondary",children:(0,n.__)("Select Image")})})});function m(e){var o,r,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(r=m(e[o]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}const p=function(){for(var e,o,r=0,t="",n=arguments.length;r<n;r++)(e=arguments[r])&&(o=m(e))&&(t&&(t+=" "),t+=o);return t},x=({onChange:e,color:r,label:t,colorPallet:n})=>{const s=(0,c.useSetting)("color.palette"),[l,a]=(0,i.useState)(!1),d={className:p("block-editor-panel-color-gradient-settings__dropdown",{"is-open":l}),style:{height:"auto",padding:"0px"}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Button,{...d,onClick:()=>{a(!0)},children:(0,u.jsxs)(o.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"},children:[(0,u.jsx)(o.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:r}),(0,u.jsx)(o.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:t,style:{fontWeight:600},children:t})]})}),l&&(0,u.jsx)(o.Popover,{onClose:()=>a(!1),children:(0,u.jsx)(o.ColorPalette,{value:r,colors:n||s,onChange:e})})]})},v=e=>{const{attributes:r,setAttributes:t}=e,s=(0,c.useSetting)("color.palette"),{icon:l,hasHover:a,iconHover:d,iconBackgroundColor:m,backgroundColorHover:p}=r;(0,i.useEffect)((()=>{v("iconBackgroundColor"),v("backgroundColorHover")}),[]);const v=e=>{if(!r[e].includes("#")){const o=s.reduce(((o,t)=>t.slug==r[e]?t.color:o));o&&t({[e]:o?.color||o})}},j=e=>{t({[e]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})},b=(e,o)=>{const{fullSize:n,srcset:c,sizes:i,alt:s,id:l}=function(e,o="full"){if(!e||!e.sizes||!e.sizes.full)return null;const r=Math.max(...Object.values(e.sizes).map((e=>e.width))),t=`(max-width: ${r}px) 100vw, ${r}px`,n=Object.keys(e.sizes).map((o=>{const r=e.sizes[o];return`${r.url} ${r.width}w`})).join(", ");return{fullSize:e.sizes[o],srcset:n,sizes:t,alt:e.alt,id:e.id}}(o);t({[e]:{...r[e],url:n.url,alt:s,id:l,srcset:c,width:n.width,height:n.height,sizes:i}})},w=(e,o)=>{t(o?{[e]:o}:{[e]:"#000"})};return(0,u.jsx)(c.InspectorControls,{children:(0,u.jsxs)(o.PanelBody,{title:(0,n.__)("Icon"),children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:l.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:m},children:(0,u.jsx)("img",{src:l.url})}),(0,u.jsx)(h,{onClick:()=>{j("icon")}})]}):(0,u.jsx)(g,{value:l.url,onSelect:e=>{b("icon",e)}})}),(0,u.jsx)(o.ToggleControl,{label:"Has Hover",help:a?"Icon Hover in enable":"",checked:a,onChange:e=>t({hasHover:e})}),a&&(0,u.jsx)(u.Fragment,{children:d.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:p},children:(0,u.jsx)("img",{src:d.url})}),(0,u.jsx)(h,{onClick:()=>{j("iconHover")}})]}):(0,u.jsx)(g,{value:d.url,onSelect:e=>{b("iconHover",e)}})}),(0,u.jsxs)(o.__experimentalVStack,{justify:"flex-start",className:"cards-icons__control-icon__colors",children:[(0,u.jsx)(x,{color:m,label:"Background Color",onChange:e=>w("iconBackgroundColor",e)}),a&&(0,u.jsx)(x,{color:p,label:"Background Color [Hover]",onChange:e=>w("backgroundColorHover",e)})]})]})})},j=({img:e,className:o,lazyload:r=!0,selectorId:t})=>{if(!e?.url)return;const{url:n,alt:c,width:i,height:s,sizes:l,srcset:a,focalPoint:d}=e;let h="center";return d?.x&&d?.y&&(h=`${100*d.x}% ${100*d.y}%`),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{decoding:"async",src:n,alt:c,width:i,height:s,className:o,srcSet:a,sizes:l,loading:r?"lazy":"eager"}),!!d&&(0,u.jsx)("style",{children:`#${t} .${o} {object-position: ${h};}`})]})},{name:b,title:w}=t;(0,r.registerBlockType)(b,{title:w,icon:{src:(0,u.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,u.jsxs)(o.G,{children:[(0,u.jsx)(o.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:o}=t,{name:r,blockId:n}=d(o),{clientId:h,attributes:g,setAttributes:m}=e,{id:p,anchor:x,preview:j,icon:b,iconBackgroundColor:w}=g;(0,i.useEffect)((()=>{m({id:`${r}-${h}`})}),[h,r,m]);const k=(0,c.useBlockProps)({className:`${r}`});return j?(0,u.jsx)("div",{className:`${r}-preview`,children:(0,u.jsx)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{...e}),(0,u.jsxs)("div",{"data-block-id":n,id:x||p,...k,children:[(0,u.jsx)("div",{className:`${r}__icon-container no-hover`,style:{backgroundColor:w},children:b?.url&&(0,u.jsx)("img",{src:b.url,className:`${r}__img`,selectorId:x||p})}),(0,u.jsx)("div",{className:`${r}__container`,children:(0,u.jsx)(c.InnerBlocks,{template:a,allowedBlocks:l,templateLock:!1})})]})]})},save:e=>{const{name:o}=t,{name:r,blockId:n}=d(o),{attributes:i}=e,{anchor:s,id:l,icon:a,iconBackgroundColor:h,backgroundColorHover:g,hasHover:m,iconHover:p}=i,x=c.useBlockProps.save({className:`${r} `}),v={"background-color":h,"--background-color":m?g:h};return(0,u.jsxs)("div",{"data-block-id":n,id:s||l,...x,children:[(0,u.jsxs)("div",{className:`${r}__icon-container ${m?"has_icon-hover":""}`,style:v,children:[(0,u.jsx)(j,{img:a,className:`${r}__img no-animate`,selectorId:s||l}),m&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(j,{img:p,className:`${r}__img hover no-animate`,selectorId:s||l})})]}),(0,u.jsx)("div",{className:`${r}__container`,children:(0,u.jsx)(c.InnerBlocks.Content,{})})]})}})})();
>>>>>>> 9725f44 (added : Team-Bios/Carousel)
