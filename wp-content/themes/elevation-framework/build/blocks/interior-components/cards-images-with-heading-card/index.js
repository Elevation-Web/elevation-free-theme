<<<<<<< HEAD
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var a=i.getElementsByTagName("script");if(a.length)for(var l=a.length-1;l>-1&&!t;)t=a[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.wp.components,i=window.wp.blocks,a=JSON.parse('{"title":"Card : with Border, image, Title and Links.","name":"elevation/interior-components--cards-images-with-heading-card"}'),l=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.element,s=e.p+"images/preview.a6f4068f.webp",c=window.ReactJSXRuntime,o=({onClick:e})=>(0,c.jsx)(t.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,l.__)("Remove Image")}),d=({value:e,onSelect:i})=>(0,c.jsx)(n.MediaUploadCheck,{children:(0,c.jsx)(n.MediaUpload,{onSelect:i,allowedTypes:["image"],value:e,render:({open:e})=>(0,c.jsx)(t.Button,{onClick:e,variant:"secondary",children:(0,l.__)("Select Image")})})}),h=({img:e,className:t,lazyload:i=!0,selectorId:a})=>{if(!e?.url)return;const{url:l,alt:n,width:r,height:s,sizes:o,srcset:d,focalPoint:h}=e;let m="center";return h?.x&&h?.y&&(m=`${100*h.x}% ${100*h.y}%`),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{decoding:"async",src:l,alt:n,width:r,height:s,className:t,srcSet:d,sizes:o,loading:i?"lazy":"eager"}),!!h&&(0,c.jsx)("style",{children:`#${a} .${t} {object-position: ${m};}`})]})},m=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},{name:g,title:u}=a;(0,i.registerBlockType)(g,{title:u,icon:{src:(0,c.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,c.jsxs)(t.G,{children:[(0,c.jsx)(t.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:i}=a,{name:g,blockId:u}=m(i),{clientId:x,attributes:p,setAttributes:v}=e,{id:w,anchor:j,preview:b,img:k,link:f,tagName:z}=p,{url:y,text:_,target:$,ariaLabel:P}=f;(0,r.useEffect)((()=>{v({id:`${g}-${x}`})}),[x,g,v]);const C=(0,n.useBlockProps)({className:`${g}`}),B={backgroundImage:`url(${k.url})`,backgroundSize:"cover",backgroundPosition:`${100*k.focalPoint?.x}% ${100*k.focalPoint?.y}%`},S=e=>{v({img:{...k,focalPoint:e}})},N=(0,c.jsxs)(n.InspectorControls,{children:[(0,c.jsx)(t.PanelBody,{title:(0,l.__)("Background Image"),children:k.url?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.FocalPointPicker,{url:k.url,value:k.focalPoint,onDragStart:S,onDrag:S,onChange:S}),(0,c.jsx)("div",{style:B}),(0,c.jsx)(o,{onClick:()=>{v({img:{url:"",alt:"",id:0,srcset:"",width:0,height:0,sizes:"",focalPoint:{x:.5,y:.5}}})}})]}):(0,c.jsx)(d,{value:k.url,onSelect:e=>{const{fullSize:t,srcset:i,sizes:a,alt:l,id:n}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const i=Math.max(...Object.values(e.sizes).map((e=>e.width))),a=`(max-width: ${i}px) 100vw, ${i}px`,l=Object.keys(e.sizes).map((t=>{const i=e.sizes[t];return`${i.url} ${i.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:l,sizes:a,alt:e.alt,id:e.id}}(e);v({img:{...k,url:t.url,alt:l,id:n,srcset:i,width:t.width,height:t.height,sizes:a}})}})}),(0,c.jsxs)(t.PanelBody,{title:(0,l.__)("Card Link","elevation"),children:[(0,c.jsxs)(c.Fragment,{children:[y&&(0,c.jsx)("a",{href:y,target:"_blank",style:{display:"block",marginBottom:"20px"},children:y}),(0,c.jsx)("div",{style:{marginBottom:"20px"},children:(0,c.jsx)(n.URLInputButton,{url:y,placeholder:(0,l.__)("Card Link URL...","elevation"),onChange:e=>v({link:{...f,url:e}})})}),(0,c.jsx)(t.ToggleControl,{label:"Open in new tab",checked:$,onChange:e=>{v({link:{...f,target:e}})}})]}),(0,c.jsx)(t.__experimentalInputControl,{value:P,placeholder:"Button Aria Label...",onChange:e=>{v({link:{...f,ariaLabel:e}})}})]}),(0,c.jsx)(t.PanelBody,{title:(0,l.__)("Heading Options","elevation"),children:(0,c.jsx)(t.SelectControl,{label:"Heading Size",value:z,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{v({tagName:e})}})})]});return b?(0,c.jsx)("div",{className:`${g}-preview`,children:(0,c.jsx)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,c.jsxs)(c.Fragment,{children:[N,(0,c.jsxs)("div",{id:j||w,...C,children:[(0,c.jsx)(h,{img:k,className:`${g}__img`,selectorId:j||w}),(0,c.jsx)("div",{className:`${g}__container`,children:(0,c.jsx)(n.RichText,{style:{maxWidth:"100%",textWrap:"wrap",marginBottom:"0px"},tagName:"h"+z,value:_,allowedFormats:[],onChange:e=>{v({link:{...f,text:e}})},placeholder:(0,l.__)("Heading...")})})]})]})},save:e=>{const{name:t}=a,{name:i,blockId:l}=m(t),{attributes:r}=e,{anchor:s,id:o,img:d,link:g,tagName:u}=r,{url:x,text:p,target:v,ariaLabel:w}=g,j=n.useBlockProps.save({className:`${i} `}),b=w||p,k=v?{target:"_blank"}:{},f=v?{rel:"noopener noreferrer"}:{};return(0,c.jsxs)("div",{id:s||o,...j,children:[(0,c.jsx)(h,{img:d,className:`${i}__img no-animate`,selectorId:s||o}),(0,c.jsx)("div",{className:`${i}__container`,children:(0,c.jsx)("a",{className:`stretched-link wp-block-heading has-h-${u}-font-size`,href:x,"aria-label":b,...k,...f,children:p})})]})}})})();
=======
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

/***/ "./src/blocks/interior-components/cards-images-with-heading-card/edit.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-images-with-heading-card/edit.js ***!
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _preview_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview.webp */ "./src/blocks/interior-components/cards-images-with-heading-card/preview.webp");
/* harmony import */ var _utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getImageAttributes */ "./src/blocks/utils/getImageAttributes.js");
/* harmony import */ var _components_UploadMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UploadMedia */ "./src/blocks/components/UploadMedia.js");
/* harmony import */ var _components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ImageWithFocalPoint */ "./src/blocks/components/ImageWithFocalPoint.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interior-components/cards-images-with-heading-card/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-images-with-heading-card/block.json");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");





/* Internal Dependencies */









const Edit = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_10__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_11__.getBlockName)(blockName);
  /*  */

  const {
    clientId,
    attributes,
    setAttributes
  } = props;
  const {
    id,
    anchor,
    preview,
    img,
    link,
    tagName
  } = attributes;
  const {
    url,
    text,
    target,
    ariaLabel
  } = link; // Set Block name

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setAttributes({
      id: `${name}-${clientId}`
    });
  }, [clientId, name, setAttributes]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `${name}`
  });
  const styleImg = {
    backgroundImage: `url(${img.url})`,
    backgroundSize: 'cover',
    backgroundPosition: `${img.focalPoint?.x * 100}% ${img.focalPoint?.y * 100}%`
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

  const setNewFocalPoint = value => {
    setAttributes({
      img: { ...img,
        focalPoint: value
      }
    });
  };

  const removeImage = () => {
    setAttributes({
      img: {
        url: '',
        alt: '',
        id: 0,
        srcset: '',
        width: 0,
        height: 0,
        sizes: '',
        focalPoint: {
          x: 0.5,
          y: 0.5
        }
      }
    });
  };

  const addMedia = media => {
    const {
      fullSize,
      srcset,
      sizes,
      alt,
      id
    } = (0,_utils_getImageAttributes__WEBPACK_IMPORTED_MODULE_6__.getImageAttributes)(media);
    setAttributes({
      img: { ...img,
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

  const controls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image')
  }, img.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FocalPointPicker, {
    url: img.url,
    value: img.focalPoint,
    onDragStart: setNewFocalPoint,
    onDrag: setNewFocalPoint,
    onChange: setNewFocalPoint
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styleImg
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_7__.RemoveImageButton, {
    onClick: removeImage
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UploadMedia__WEBPACK_IMPORTED_MODULE_7__.UploadMedia, {
    value: img.url,
    onSelect: addMedia
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
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
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.URLInputButton, {
    url: url,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Link URL...', 'elevation'),
    onChange: newValue => setAttributes({
      link: { ...link,
        url: newValue
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Open in new tab",
    checked: target,
    onChange: newValue => {
      setAttributes({
        link: { ...link,
          target: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    value: ariaLabel,
    placeholder: "Button Aria Label...",
    onChange: newValue => {
      setAttributes({
        link: { ...link,
          ariaLabel: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Options', 'elevation')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Heading Size",
    value: tagName,
    options: headingOptions,
    onChange: newValue => {
      setAttributes({
        tagName: newValue
      });
    }
  })));

  if (preview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${name}-preview`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _preview_webp__WEBPACK_IMPORTED_MODULE_5__,
      alt: "Preview",
      style: {
        objectFit: 'contain',
        maxHeight: '100%',
        maxWidth: '100%'
      }
    }));
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-block-id": blockId,
    id: anchor || id,
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_8__.ImageWithFocalPoint, {
    img: img,
    className: `${name}__img`,
    selectorId: anchor || id
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      maxWidth: '100%',
      textWrap: 'wrap',
      marginBottom: '0px'
    },
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
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/interior-components/cards-images-with-heading-card/save.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-images-with-heading-card/save.js ***!
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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-images-with-heading-card/block.json");
/* harmony import */ var _components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ImageWithFocalPoint */ "./src/blocks/components/ImageWithFocalPoint.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helpers */ "./src/blocks/utils/helpers.js");


/* Gutenberg Dependencies */

/* Internal Dependencies */





const save = props => {
  const {
    name: blockName
  } = _block_json__WEBPACK_IMPORTED_MODULE_2__;
  const {
    name,
    blockId
  } = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.getBlockName)(blockName);
  const {
    attributes
  } = props;
  const {
    anchor,
    id,
    img,
    link,
    tagName
  } = attributes;
  const {
    url,
    text,
    target,
    ariaLabel
  } = link;
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
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ImageWithFocalPoint__WEBPACK_IMPORTED_MODULE_3__.ImageWithFocalPoint, {
    img: img,
    className: `${name}__img no-animate`,
    selectorId: anchor || id
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${name}__container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `stretched-link wp-block-heading has-h-${tagName}-font-size`,
    href: url,
    "aria-label": ariaLabelText,
    ...actualTarget,
    ...rel
  }, text)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

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

/***/ "./src/blocks/interior-components/cards-images-with-heading-card/editor.scss":
/*!***********************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-images-with-heading-card/editor.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interior-components/cards-images-with-heading-card/preview.webp":
/*!************************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-images-with-heading-card/preview.webp ***!
  \************************************************************************************/
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

/***/ "./src/blocks/interior-components/cards-images-with-heading-card/block.json":
/*!**********************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-images-with-heading-card/block.json ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Card : with Border, image, Title and Links.","name":"elevation/interior-components--cards-images-with-heading-card","version":"1.0.0","category":"elevation-blocks","description":"Cards with title, background and images","textdomain":"elevation","supports":{"html":true,"align":false,"alignWide":false,"color":{"background":true,"gradients":false,"text":true,"link":false,"border":false},"spacing":{"margin":["top","bottom"]}},"attributes":{"id":{"type":"string","default":""},"preview":{"type":"boolean","default":false},"tagName":{"type":"string","default":"6"},"link":{"type":"object","default":{"text":"","url":"","target":false,"ariaLabel":""}},"img":{"type":"object","default":{"url":"","alt":"","id":0,"srcset":"","width":0,"height":0,"sizes":"","focalPoint":{"x":0.5,"y":0.5}}}},"editorScript":["file:index.js"],"editorStyle":["file:index.css"]}');

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
/*!********************************************************************************!*\
  !*** ./src/blocks/interior-components/cards-images-with-heading-card/index.js ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interior-components/cards-images-with-heading-card/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/interior-components/cards-images-with-heading-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/interior-components/cards-images-with-heading-card/save.js");
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
