(()=>{"use strict";var e,t={7672:(e,t,o)=>{const r=window.wp.components,n=window.wp.blocks,i=JSON.parse('{"title":" Image Carousel, Layout: Horizontal Left Aligned","name":"elevation/interior-components--image-carousel-horizontal-left-aligned"}'),a=(window.wp.i18n,window.wp.blockEditor),c=window.wp.element,s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},l=o.p+"images/preview.bcfda3d9.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id."}],["elevation/interior-components--spacer",{space:"spacer__small"}]]],["elevation/interior-components--swiper",{className:"image-carousel-horizontal-centered__container",allowedBlocks:["elevation/interior-components--image-carousel"]},[["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],m=["core/heading","core/paragraph","elevation/interior-components--buttons"],u=window.ReactJSXRuntime,{name:d,title:v}=i;(0,n.registerBlockType)(d,{title:v,icon:{src:(0,u.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,u.jsxs)(r.G,{children:[(0,u.jsx)(r.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(r.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(r.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(r.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:t}=i,{name:o,blockId:r}=s(t),{clientId:n,attributes:d,setAttributes:v}=e,{id:h,anchor:w,preview:g}=d;(0,c.useEffect)((()=>{v({id:`${o}-${n}`})}),[n,o,v]);const b=(0,a.useBlockProps)({className:`${o} `});return g?(0,u.jsx)("div",{className:`${o}-preview`,children:(0,u.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{"data-block-id":r,"data-block-js":"true",id:w||h,...b,children:(0,u.jsx)(a.InnerBlocks,{template:p,allowedBlocks:m,templateLock:!1})})})},save:e=>{const{attributes:t}=e,{anchor:o,id:r}=t,{name:n}=i,{name:c,blockId:l}=s(n),p=a.useBlockProps.save({className:`${c} `});return(0,u.jsx)("div",{"data-block-id":l,"data-block-js":"false",id:o||r,...p,children:(0,u.jsx)(a.InnerBlocks.Content,{})})}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,n,i)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,n,i]=e[p],c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(p--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,n,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"})(),(()=>{var e={538:0,6831:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[a,c,s]=o,l=0;if(a.some((t=>0!==e[t]))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var p=s(r)}for(t&&t(o);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[6831],(()=>r(7672)));n=r.O(n)})();