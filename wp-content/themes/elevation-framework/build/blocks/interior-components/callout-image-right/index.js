(()=>{"use strict";var e,t={9047:(e,t,i)=>{const o=window.wp.blocks,r=JSON.parse('{"DD":"Background Callout - Image Right","UU":"elevation/interior-components--callout-image-right"}'),s=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components,a=window.wp.element,c=window.ReactJSXRuntime,u=({imgMobile:e,imgTablet:t,imgDesktop:i,imgAlt:o,width:r,height:s,className:l,lazyload:n=!0})=>{if(!i?.url)return;const a=`${100*i.focalPoint.x}% ${100*i.focalPoint.y}%`;return(0,c.jsxs)("picture",{className:l,children:[e&&(0,c.jsx)("source",{media:"(max-width:575px)",srcset:e}),t&&(0,c.jsx)("source",{media:"(max-width:1200px)",srcset:t}),(0,c.jsx)("img",{decoding:"async",lazyload:n?"lazy":"eager",src:i.url,alt:o,width:r,height:s,className:l,style:{objectPosition:a}})]})},m=({onClick:e})=>(0,c.jsx)(n.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,s.__)("Remove Image")}),d=({value:e,onSelect:t})=>(0,c.jsx)(l.MediaUploadCheck,{children:(0,c.jsx)(l.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,c.jsx)(n.Button,{onClick:e,variant:"secondary",children:(0,s.__)("Select Image")})})}),g=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},p=[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum sapien et"}],["core/paragraph",{fontSize:"body",content:"Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui."}],["elevation/interior-components--buttons",{layout:{type:"flex",justifyContent:"center"}},[["elevation/interior-components--button",{btnStyle:"primary--color-03",text:"Text Button"}],["elevation/interior-components--button",{btnStyle:"secondary--outline",text:"Text Button"}]]]]]],h=["core/heading","core/paragraph","elevation/interior-components--buttons"],v=i.p+"images/preview.ae25e478.webp",{UU:b,DD:w}=r;(0,o.registerBlockType)(b,{title:w,edit:e=>{const{UU:t}=r,{name:i,blockId:o}=g(t),{attributes:b,setAttributes:w}=e,{preview:x,imgMobile:k,imgTablet:f,imgDesktop:j,imgAlt:y,style:_,focalPointDesktop:P,isRowReverse:$}=b,D=(0,l.useBlockProps)({className:i}),[S,T]=(0,a.useState)("");(0,a.useEffect)((()=>{T((()=>D.className.includes("alignfull")?"":"contain "))}),[D.className]);const B={backgroundImage:`url(${j.url})`,backgroundSize:"cover",backgroundPosition:`${100*j.focalPoint?.x}% ${100*j.focalPoint?.y}%`},C=(e,t)=>{w({[e]:{...b[e],focalPoint:t}})},N=(0,c.jsxs)(l.InspectorControls,{children:[(0,c.jsx)(n.PanelBody,{title:(0,s.__)("Background Image Desktop"),children:j.url?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.FocalPointPicker,{url:j.url,value:j.focalPoint,onDragStart:e=>{C("imgDesktop",e)},onDrag:e=>{C("imgDesktop",e)},onChange:e=>{C("imgDesktop",e)}}),(0,c.jsx)("div",{style:B}),(0,c.jsx)(m,{onClick:e=>{var t;t="imgDesktop",w({[t]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})]}):(0,c.jsx)(d,{value:j.url,onSelect:e=>{((e,t)=>{const{fullSize:i,srcset:o,sizes:r,alt:s,id:l}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const i=Math.max(...Object.values(e.sizes).map((e=>e.width))),o=`(max-width: ${i}px) 100vw, ${i}px`,r=Object.keys(e.sizes).map((t=>{const i=e.sizes[t];return`${i.url} ${i.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:r,sizes:o,alt:e.alt,id:e.id}}(t);w({[e]:{...b[e],url:i.url,alt:s,id:l,srcset:o,width:i.width,height:i.height,sizes:r}})})("imgDesktop",e)}})}),(0,c.jsx)(n.PanelBody,{title:(0,s.__)("Background Image Tablet"),children:f?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:f}),(0,c.jsx)(m,{onClick:()=>{w({imgTablet:""})},attrId:"imgTablet"})]}):(0,c.jsx)(d,{value:f,onSelect:({url:e})=>{w({imgTablet:e})},attrId:"imgTablet"})}),(0,c.jsx)(n.PanelBody,{title:(0,s.__)("Background Image Mobile"),children:k?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:k}),(0,c.jsx)(m,{onClick:()=>{w({imgMobile:""})},attrId:"imgMobile"})]}):(0,c.jsx)(d,{value:k,onSelect:({url:e})=>{w({imgMobile:e})},attrId:"imgMobile"})}),(0,c.jsx)(n.PanelBody,{title:(0,s.__)("Row Reverse"),children:(0,c.jsx)(n.ToggleControl,{label:(0,s.__)("Enable Row Reverse"),checked:$,onChange:e=>w({isRowReverse:e})})})]});if(x)return(0,c.jsx)("div",{className:`${i}-preview`,children:(0,c.jsx)("img",{src:v,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})});const I=$?"row-reverse":"row";return(0,c.jsxs)(c.Fragment,{children:[N,(0,c.jsx)("div",{"data-block-id":o,...D,..._,children:(0,c.jsx)("div",{className:`${S}${i}__container`,children:(0,c.jsxs)("div",{className:`${i}__wrapper ${I}`,children:[(0,c.jsx)(l.InnerBlocks,{template:p,allowedBlocks:h}),(0,c.jsx)(u,{imgMobile:k,imgTablet:f,imgDesktop:j,imgAlt:y,className:`${i}__background`,width:"1920",height:"1080",focalPointDesktop:P})]})})})]})},save:e=>{const{UU:t}=r,{name:i,blockId:o}=g(t),{attributes:s}=e,{imgMobile:n,imgTablet:a,imgDesktop:m,imgAlt:d,style:p,focalPointDesktop:h,isRowReverse:v}=s,b=l.useBlockProps.save({className:i}),w=b.className.includes("alignfull")?"container ":"",x=v?"row-reverse":"row";return(0,c.jsx)("div",{"data-block-id":o,...b,...p,children:(0,c.jsx)("div",{className:`${w}${i}__container`,children:(0,c.jsxs)("div",{className:`${i}__wrapper ${x}`,children:[(0,c.jsx)(l.InnerBlocks.Content,{}),(0,c.jsx)(u,{imgMobile:n,imgTablet:a,imgDesktop:m,imgAlt:d,className:`${i}__background`,width:"1920",height:"1080",focalPointDesktop:h})]})})})}})}},i={};function o(e){var r=i[e];if(void 0!==r)return r.exports;var s=i[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,i,r,s)=>{if(!i){var l=1/0;for(u=0;u<e.length;u++){for(var[i,r,s]=e[u],n=!0,a=0;a<i.length;a++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](i[a])))?i.splice(a--,1):(n=!1,s<l&&(l=s));if(n){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,r,s]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={9504:0,8888:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var r,s,[l,n,a]=i,c=0;if(l.some((t=>0!==e[t]))){for(r in n)o.o(n,r)&&(o.m[r]=n[r]);if(a)var u=a(o)}for(t&&t(i);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},i=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var r=o.O(void 0,[8888],(()=>o(9047)));r=o.O(r)})();