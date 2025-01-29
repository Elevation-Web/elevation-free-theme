(()=>{"use strict";var e,t={6516:(e,t,i)=>{const o=window.wp.blocks,n=JSON.parse('{"DD":"Background Callout - Content Center","UU":"elevation/interior-components--callout-background-content-center"}'),r=window.wp.i18n,s=window.wp.blockEditor,l=window.wp.components,a=window.wp.element,c=window.ReactJSXRuntime,u=({imgMobile:e,imgTablet:t,imgDesktop:i,imgAlt:o,width:n,height:r,className:s,lazyload:l=!0})=>{if(!i?.url)return;const a=`${100*i.focalPoint.x}% ${100*i.focalPoint.y}%`;return(0,c.jsxs)("picture",{className:s,children:[e&&(0,c.jsx)("source",{media:"(max-width:575px)",srcset:e}),t&&(0,c.jsx)("source",{media:"(max-width:1200px)",srcset:t}),(0,c.jsx)("img",{decoding:"async",lazyload:l?"lazy":"eager",src:i.url,alt:o,width:n,height:r,className:s,style:{objectPosition:a}})]})},m=({onClick:e})=>(0,c.jsx)(l.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,r.__)("Remove Image")}),d=({value:e,onSelect:t})=>(0,c.jsx)(s.MediaUploadCheck,{children:(0,c.jsx)(s.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,c.jsx)(l.Button,{onClick:e,variant:"secondary",children:(0,r.__)("Select Image")})})}),g=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},p=[["elevation/interior-components--custom-container",{className:"callout-background-content-center__custom-container",containerWidth:"small"},[["elevation/interior-components--group",{className:""},[["core/paragraph",{fontSize:"body",content:"<strong>Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.</strong>",align:"center"}],["elevation/interior-components--buttons",{layout:{type:"flex",justifyContent:"center"}},[["elevation/interior-components--button",{btnStyle:"primary--color-03",text:"Text Button"}],["elevation/interior-components--button",{btnStyle:"secondary--outline",text:"Text Button"}]]]]]]]],h=["core/heading","core/paragraph","elevation/interior-components--buttons"],b=i.p+"images/preview.30df6938.webp",{UU:x,DD:v}=n;(0,o.registerBlockType)(x,{title:v,edit:e=>{const{UU:t}=n,{name:i,blockId:o}=g(t),{attributes:x,setAttributes:v,grid_column:k}=e,{preview:w,imgMobile:f,imgTablet:j,imgDesktop:y,imgAlt:_,style:P,focalPointDesktop:D}=x,S=(0,s.useBlockProps)({className:i}),[$,N]=(0,a.useState)("");(0,a.useEffect)((()=>{N((()=>S.className.includes("alignfull")?"":"contain "))}),[S.className]);const T={backgroundImage:`url(${y.url})`,backgroundSize:"cover",backgroundPosition:`${100*y.focalPoint?.x}% ${100*y.focalPoint?.y}%`},C=(e,t)=>{v({[e]:{...x[e],focalPoint:t}})},B=(0,c.jsxs)(s.InspectorControls,{children:[(0,c.jsx)(l.PanelBody,{title:(0,r.__)("Background Image Desktop"),children:y.url?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.FocalPointPicker,{url:y.url,value:y.focalPoint,onDragStart:e=>{C("imgDesktop",e)},onDrag:e=>{C("imgDesktop",e)},onChange:e=>{C("imgDesktop",e)}}),(0,c.jsx)("div",{style:T}),(0,c.jsx)(m,{onClick:e=>{var t;t="imgDesktop",v({[t]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})]}):(0,c.jsx)(d,{value:y.url,onSelect:e=>{((e,t)=>{const{fullSize:i,srcset:o,sizes:n,alt:r,id:s}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const i=Math.max(...Object.values(e.sizes).map((e=>e.width))),o=`(max-width: ${i}px) 100vw, ${i}px`,n=Object.keys(e.sizes).map((t=>{const i=e.sizes[t];return`${i.url} ${i.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:n,sizes:o,alt:e.alt,id:e.id}}(t);v({[e]:{...x[e],url:i.url,alt:r,id:s,srcset:o,width:i.width,height:i.height,sizes:n}})})("imgDesktop",e)}})}),(0,c.jsx)(l.PanelBody,{title:(0,r.__)("Background Image Tablet"),children:j?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:j}),(0,c.jsx)(m,{onClick:()=>{v({imgTablet:""})},attrId:"imgTablet"})]}):(0,c.jsx)(d,{value:j,onSelect:({url:e})=>{v({imgTablet:e})},attrId:"imgTablet"})}),(0,c.jsx)(l.PanelBody,{title:(0,r.__)("Background Image Mobile"),children:f?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:f}),(0,c.jsx)(m,{onClick:()=>{v({imgMobile:""})},attrId:"imgMobile"})]}):(0,c.jsx)(d,{value:f,onSelect:({url:e})=>{v({imgMobile:e})},attrId:"imgMobile"})})]});return w?(0,c.jsx)("div",{className:`${i}-preview`,children:(0,c.jsx)("img",{src:b,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,c.jsxs)(c.Fragment,{children:[B,(0,c.jsxs)("div",{"data-block-id":o,...S,...P,children:[(0,c.jsx)(u,{imgMobile:f,imgTablet:j,imgDesktop:y,imgAlt:_,className:`${i}__background`,width:"1920",height:"1080",focalPointDesktop:D}),(0,c.jsx)("div",{className:`${$}${i}__container`,children:(0,c.jsx)("div",{className:`${i}__wrapper`,children:(0,c.jsx)(s.InnerBlocks,{template:p,allowedBlocks:h})})})]})]})},save:e=>{const{UU:t}=n,{name:i,blockId:o}=g(t),{attributes:r}=e,{imgMobile:l,imgTablet:a,imgDesktop:m,imgAlt:d,style:p,focalPointDesktop:h}=r,b=s.useBlockProps.save({className:i}),x=b.className.includes("alignfull")?"container ":"";return(0,c.jsxs)("div",{"data-block-id":o,...b,...p,children:[(0,c.jsx)(u,{imgMobile:l,imgTablet:a,imgDesktop:m,imgAlt:d,className:`${i}__background`,width:"1920",height:"1080",focalPointDesktop:h}),(0,c.jsx)("div",{className:`${x}${i}__container`,children:(0,c.jsx)("div",{className:`${i}__wrapper`,children:(0,c.jsx)(s.InnerBlocks.Content,{})})})]})}})}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,i,n,r)=>{if(!i){var s=1/0;for(u=0;u<e.length;u++){for(var[i,n,r]=e[u],l=!0,a=0;a<i.length;a++)(!1&r||s>=r)&&Object.keys(o.O).every((e=>o.O[e](i[a])))?i.splice(a--,1):(l=!1,r<s&&(s=r));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,n,r]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={6360:0,5408:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[s,l,a]=i,c=0;if(s.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)var u=a(o)}for(t&&t(i);c<s.length;c++)r=s[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},i=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=o.O(void 0,[5408],(()=>o(6516)));n=o.O(n)})();