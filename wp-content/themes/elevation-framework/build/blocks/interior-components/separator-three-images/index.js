(()=>{"use strict";var e,t={3333:(e,t,o)=>{const r=window.wp.blocks,i=JSON.parse('{"title":"Separator Layout: Three Images","name":"elevation/interior-components--separator-three-images"}'),a=window.wp.i18n,n=window.wp.blockEditor,s=window.wp.element,l=window.wp.components,c=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},p=o.p+"images/preview.2d5c4224.webp",m=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"",containerWidth:"default"},[["elevation/interior-components--group",{tagName:"div",className:"separator-three-images__container"},[["elevation/interior-components--image-with-srcset"],["elevation/interior-components--image-with-srcset"],["elevation/interior-components--image-with-srcset"]]]]],["elevation/interior-components--spacer"]],d=window.ReactJSXRuntime,{name:v,title:u}=i;(0,r.registerBlockType)(v,{title:u,icon:{src:(0,d.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,d.jsx)(l.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:t}=i,{name:o,blockId:r}=c(t),{clientId:v,attributes:u,setAttributes:w}=e,{anchor:h,id:g,imagesRatio:b,preview:f}=u,k=(0,n.useBlockProps)({className:`${o} alignfull ratio-${b}`}),x=(0,n.useInnerBlocksProps)(k,{template:m,templateInsertUpdatesSelection:!0,allowedBlocks:[],orientation:"horizontal",templateLock:!0});(0,s.useEffect)((()=>{w({id:`${o}-${v}`})}),[v,o,w]);const j=(0,d.jsx)(n.InspectorControls,{children:(0,d.jsx)(l.PanelBody,{title:(0,a.__)("Images Ratio"),children:(0,d.jsx)(l.SelectControl,{label:"Image Ratio",value:b,options:[{label:"Square - 1:1",value:"1-1"},{label:"Classic - 3:2",value:"3-2"},{label:"Standard - 4:3",value:"4-3"},{label:"Studio - 5:4",value:"5-4"},{label:"Wide - 16:9",value:"16-9"}],onChange:e=>(e=>{w({imagesRatio:e})})(e),__nextHasNoMarginBottom:!0})})});return f?(0,d.jsx)("div",{className:`${o}-preview`,children:(0,d.jsx)("img",{src:p,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsxs)(d.Fragment,{children:[j,(0,d.jsx)("div",{"data-block-id":r,"data-block-js":"false",id:h||g,...x})]})},save:e=>{const{name:t}=i,{name:o,blockId:r}=c(t),{attributes:a}=e,{anchor:s,id:l,imagesRatio:p}=a,m=n.useBlockProps.save({className:`${o} alignfull ratio-${p}`});return(0,d.jsx)("div",{"data-block-id":r,"data-block-js":"false",id:s||l,...m,children:(0,d.jsx)(n.InnerBlocks.Content,{})})}})}},o={};function r(e){var i=o[e];if(void 0!==i)return i.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,i,a)=>{if(!o){var n=1/0;for(p=0;p<e.length;p++){for(var[o,i,a]=e[p],s=!0,l=0;l<o.length;l++)(!1&a||n>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<n&&(n=a));if(s){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,i,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"})(),(()=>{var e={4482:0,5584:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var i,a,[n,s,l]=o,c=0;if(n.some((t=>0!==e[t]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var p=l(r)}for(t&&t(o);c<n.length;c++)a=n[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=r.O(void 0,[5584],(()=>r(3333)));i=r.O(i)})();