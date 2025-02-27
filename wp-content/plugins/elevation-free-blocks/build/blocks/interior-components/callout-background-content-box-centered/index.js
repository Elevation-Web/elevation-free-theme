(()=>{"use strict";var e,t={805:(e,t,o)=>{const i=window.wp.blocks,r=JSON.parse('{"DD":"Background Callout - Content Box Centered","UU":"elevation/interior-components--callout-background-content-box-centered"}'),l=window.wp.i18n,n=window.wp.blockEditor,s=window.wp.components,a=window.wp.element,c=window.ReactJSXRuntime,d=({imgMobile:e,imgTablet:t,imgDesktop:o,imgAlt:i,width:r,height:l,className:n,lazyload:s=!0})=>{if(!o?.url)return;const a=`${100*o.focalPoint.x}% ${100*o.focalPoint.y}%`;return(0,c.jsxs)("picture",{className:n,children:[e&&(0,c.jsx)("source",{media:"(max-width:575px)",srcSet:e}),t&&(0,c.jsx)("source",{media:"(max-width:1200px)",srcSet:t}),(0,c.jsx)("img",{decoding:"async",lazyload:s?"lazy":"eager",src:o.url,alt:i,width:r,height:l,className:n,style:{objectPosition:a}})]})},u=({onClick:e})=>(0,c.jsx)(s.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,l.__)("Remove Image")}),g=({value:e,onSelect:t})=>(0,c.jsx)(n.MediaUploadCheck,{children:(0,c.jsx)(n.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,c.jsx)(s.Button,{onClick:e,variant:"secondary",children:(0,l.__)("Select Image")})})}),m=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},p=[["elevation/interior-components--group",{className:""},[["core/heading",{level:4,content:"H4. Heading lorem ipsum euismod"}],["core/paragraph",{fontSize:"body",content:"Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.."}],["elevation/interior-components--buttons",{layout:{type:"flex",justifyContent:"start"}},[["elevation/interior-components--button",{btnStyle:"tertiary--inverse",text:"Text Button"}]]]]]],h=["core/heading","core/paragraph","elevation/interior-components--buttons"];function x(e){var t,o,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(o=x(e[t]))&&(i&&(i+=" "),i+=o)}else for(o in e)e[o]&&(i&&(i+=" "),i+=o);return i}const b=function(){for(var e,t,o=0,i="",r=arguments.length;o<r;o++)(e=arguments[o])&&(t=x(e))&&(i&&(i+=" "),i+=t);return i},f=({onChange:e,color:t,label:o,colorPallet:i})=>{const r=(0,n.useSetting)("color.palette"),[l,d]=(0,a.useState)(!1),u={className:b("block-editor-panel-color-gradient-settings__dropdown",{"is-open":l}),style:{height:"auto",padding:"0px"}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Button,{...u,onClick:()=>{d(!0)},children:(0,c.jsxs)(s.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"},children:[(0,c.jsx)(s.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:t}),(0,c.jsx)(s.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:o,style:{fontWeight:600},children:o})]})}),l&&(0,c.jsx)(s.Popover,{onClose:()=>d(!1),children:(0,c.jsx)(s.ColorPalette,{value:t,colors:i||r,onChange:e})})]})},v=o.p+"images/preview.ca816425.webp",{UU:k,DD:j}=r;(0,i.registerBlockType)(k,{title:j,edit:e=>{const{UU:t}=r,{name:o,blockId:i}=m(t),{attributes:x,setAttributes:b}=e,{preview:k,imgMobile:j,imgTablet:w,imgDesktop:y,imgAlt:_,style:C,focalPointDesktop:B,boxBgColor:P}=x,S=(0,n.useBlockProps)({className:o}),[D,N]=(0,a.useState)("");(0,a.useEffect)((()=>{N((()=>S.className.includes("alignfull")?"":"contain "))}),[S.className]);const $={backgroundImage:`url(${y.url})`,backgroundSize:"cover",backgroundPosition:`${100*y.focalPoint?.x}% ${100*y.focalPoint?.y}%`},I=(e,t)=>{b({[e]:{...x[e],focalPoint:t}})},T=(0,c.jsxs)(n.InspectorControls,{children:[(0,c.jsx)(s.PanelBody,{title:(0,l.__)("Background Image Desktop"),children:y.url?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.FocalPointPicker,{url:y.url,value:y.focalPoint,onDragStart:e=>{I("imgDesktop",e)},onDrag:e=>{I("imgDesktop",e)},onChange:e=>{I("imgDesktop",e)}}),(0,c.jsx)("div",{style:$}),(0,c.jsx)(u,{onClick:e=>{var t;t="imgDesktop",b({[t]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})]}):(0,c.jsx)(g,{value:y.url,onSelect:e=>{((e,t)=>{const{fullSize:o,srcset:i,sizes:r,alt:l,id:n}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const o=Math.max(...Object.values(e.sizes).map((e=>e.width))),i=`(max-width: ${o}px) 100vw, ${o}px`,r=Object.keys(e.sizes).map((t=>{const o=e.sizes[t];return`${o.url} ${o.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:r,sizes:i,alt:e.alt,id:e.id}}(t);b({[e]:{...x[e],url:o.url,alt:l,id:n,srcset:i,width:o.width,height:o.height,sizes:r}})})("imgDesktop",e)}})}),(0,c.jsx)(s.PanelBody,{title:(0,l.__)("Background Image Tablet"),children:w?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:w}),(0,c.jsx)(u,{onClick:()=>{b({imgTablet:""})},attrId:"imgTablet"})]}):(0,c.jsx)(g,{value:w,onSelect:({url:e})=>{b({imgTablet:e})},attrId:"imgTablet"})}),(0,c.jsx)(s.PanelBody,{title:(0,l.__)("Background Image Mobile"),children:j?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:j}),(0,c.jsx)(u,{onClick:()=>{b({imgMobile:""})},attrId:"imgMobile"})]}):(0,c.jsx)(g,{value:j,onSelect:({url:e})=>{b({imgMobile:e})},attrId:"imgMobile"})}),(0,c.jsx)(s.PanelBody,{title:(0,l.__)("Box Background Color"),children:(0,c.jsx)(f,{onChange:e=>b({boxBgColor:e}),color:P,label:"Box Background Color"})})]});if(k)return(0,c.jsx)("div",{className:`${o}-preview`,children:(0,c.jsx)("img",{src:v,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})});const z=P?{backgroundColor:P}:{};return(0,c.jsxs)(c.Fragment,{children:[T,(0,c.jsxs)("div",{"data-block-id":i,...S,...C,children:[(0,c.jsx)(d,{imgMobile:j,imgTablet:w,imgDesktop:y,imgAlt:_,className:`${o}__background`,width:"1920",height:"1080",focalPointDesktop:B}),(0,c.jsx)("div",{className:`${D}${o}__container`,children:(0,c.jsx)("div",{className:`${o}__wrapper`,style:z,children:(0,c.jsx)(n.InnerBlocks,{template:p,allowedBlocks:h})})})]})]})},save:e=>{const{UU:t}=r,{name:o,blockId:i}=m(t),{attributes:l}=e,{imgMobile:s,imgTablet:a,imgDesktop:u,imgAlt:g,style:p,focalPointDesktop:h,boxBgColor:x}=l,b=n.useBlockProps.save({className:o}),f=b.className.includes("alignfull")?"container ":"",v=x?{backgroundColor:x}:{};return(0,c.jsxs)("div",{"data-block-id":i,...b,...p,children:[(0,c.jsx)(d,{imgMobile:s,imgTablet:a,imgDesktop:u,imgAlt:g,className:`${o}__background`,width:"1920",height:"1080",focalPointDesktop:h}),(0,c.jsx)("div",{className:`${f}${o}__container`,children:(0,c.jsx)("div",{className:`${o}__wrapper`,style:v,children:(0,c.jsx)(n.InnerBlocks.Content,{})})})]})}})}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,i),l.exports}i.m=t,e=[],i.O=(t,o,r,l)=>{if(!o){var n=1/0;for(d=0;d<e.length;d++){for(var[o,r,l]=e[d],s=!0,a=0;a<o.length;a++)(!1&l||n>=l)&&Object.keys(i.O).every((e=>i.O[e](o[a])))?o.splice(a--,1):(s=!1,l<n&&(n=l));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[o,r,l]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../../"})(),(()=>{var e={915:0,659:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[n,s,a]=o,c=0;if(n.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(a)var d=a(i)}for(t&&t(o);c<n.length;c++)l=n[c],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(d)},o=globalThis.webpackChunkelevation_free_blocks=globalThis.webpackChunkelevation_free_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=i.O(void 0,[659],(()=>i(805)));r=i.O(r)})();