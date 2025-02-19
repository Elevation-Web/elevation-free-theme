(()=>{"use strict";var e,r={890:(e,r,t)=>{const i=window.wp.components,o=window.wp.blocks,n=JSON.parse('{"DD":"Image Carousel, Layout: Fixed w/Hover","UU":"elevation/interior-components--image-carousel-fixed-with-hover"}'),c=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,a=e=>{const r=e.split("/")[1].split("--");return{blockId:r.join("/"),name:r[1]}},l=t.p+"images/preview.e013e6a0.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container",containerWidth:"small"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum",textAlign:"center"}],["core/paragraph",{content:"Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis.",align:"center"}],["elevation/interior-components--spacer",{space:"spacer__small"}]]],["elevation/interior-components--swiper",{className:"image-carousel-horizontal-centered__container",slidesPerView:1,slidesPerViewSm:1,slidesPerViewMd:1,slidesPerViewLg:"auto",slidesPerViewXl:"auto",slidesPerViewXxl:"auto",allowedBlocks:["elevation/interior-components--image-carousel"]},[["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}],["elevation/interior-components--image-carousel",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],m=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--cards-icons"],d=window.ReactJSXRuntime,{UU:u,DD:v}=n;(0,o.registerBlockType)(u,{title:v,icon:{src:(0,d.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,d.jsxs)(i.G,{children:[(0,d.jsx)(i.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(i.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(i.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(i.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{UU:r}=n,{name:t,blockId:i}=a(r),{clientId:o,attributes:u,setAttributes:v}=e,{id:h,anchor:w,preview:g}=u;(0,s.useEffect)((()=>{v({id:`${t}-${o}`})}),[o,t,v]);const b=(0,c.useBlockProps)({className:`${t} `});return g?(0,d.jsx)("div",{className:`${t}-preview`,children:(0,d.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{"data-block-id":i,"data-block-js":"true",id:w||h,...b,children:(0,d.jsx)(c.InnerBlocks,{template:p,allowedBlocks:m,templateLock:!1})})})},save:e=>{const{attributes:r}=e,{anchor:t,id:i}=r,{UU:o}=n,{name:s,blockId:l}=a(o),p=c.useBlockProps.save({className:`${s} `});return(0,d.jsx)("div",{"data-block-id":l,"data-block-js":"false",id:t||i,...p,children:(0,d.jsx)(c.InnerBlocks.Content,{})})}})}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.m=r,e=[],i.O=(r,t,o,n)=>{if(!t){var c=1/0;for(p=0;p<e.length;p++){for(var[t,o,n]=e[p],s=!0,a=0;a<t.length;a++)(!1&n||c>=n)&&Object.keys(i.O).every((e=>i.O[e](t[a])))?t.splice(a--,1):(s=!1,n<c&&(c=n));if(s){e.splice(p--,1);var l=o();void 0!==l&&(r=l)}}return r}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[t,o,n]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../../"})(),(()=>{var e={6264:0,8720:0};i.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[c,s,a]=t,l=0;if(c.some((r=>0!==e[r]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(a)var p=a(i)}for(r&&r(t);l<c.length;l++)n=c[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(p)},t=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=i.O(void 0,[8720],(()=>i(890)));o=i.O(o)})();