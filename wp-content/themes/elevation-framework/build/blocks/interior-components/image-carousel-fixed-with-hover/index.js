(()=>{"use strict";var e,t={309:(e,t,r)=>{const o=window.wp.components,i=window.wp.blocks,n=JSON.parse('{"DD":"Image Carousel, Layout: Fixed w/Hover","UU":"elevation/interior-components--image-carousel-fixed-with-hover"}'),c=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},l=r.p+"images/preview.e013e6a0.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container",containerWidth:"small"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum",textAlign:"center"}],["core/paragraph",{content:"Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis.",align:"center"}],["elevation/interior-components--spacer",{space:"spacer__small"}]]],["elevation/interior-components--swiper",{className:"image-carousel-horizontal-centered__container",slidesPerViewXl:"1",slidesPerViewXxl:"1",allowedBlocks:["elevation/interior-components--image-carousel"]},[["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],m=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--cards-icons"],d=window.ReactJSXRuntime,{UU:u,DD:v}=n;(0,i.registerBlockType)(u,{title:v,icon:{src:(0,d.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,d.jsxs)(o.G,{children:[(0,d.jsx)(o.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(o.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(o.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(o.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{UU:t}=n,{name:r,blockId:o}=s(t),{clientId:i,attributes:u,setAttributes:v}=e,{id:h,anchor:w,preview:g}=u;(0,a.useEffect)((()=>{v({id:`${r}-${i}`})}),[i,r,v]);const b=(0,c.useBlockProps)({className:`${r} `});return g?(0,d.jsx)("div",{className:`${r}-preview`,children:(0,d.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{"data-block-id":o,"data-block-js":"true",id:w||h,...b,children:(0,d.jsx)(c.InnerBlocks,{template:p,allowedBlocks:m,templateLock:!1})})})},save:e=>{const{attributes:t}=e,{anchor:r,id:o}=t,{UU:i}=n,{name:a,blockId:l}=s(i),p=c.useBlockProps.save({className:`${a} `});return(0,d.jsx)("div",{"data-block-id":l,"data-block-js":"false",id:r||o,...p,children:(0,d.jsx)(c.InnerBlocks.Content,{})})}})}},r={};function o(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,i,n)=>{if(!r){var c=1/0;for(p=0;p<e.length;p++){for(var[r,i,n]=e[p],a=!0,s=0;s<r.length;s++)(!1&n||c>=n)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(a=!1,n<c&&(c=n));if(a){e.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,i,n]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={6264:0,8720:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[c,a,s]=r,l=0;if(c.some((t=>0!==e[t]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var p=s(o)}for(t&&t(r);l<c.length;l++)n=c[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(p)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=o.O(void 0,[8720],(()=>o(309)));i=o.O(i)})();