(()=>{"use strict";var e,t={4521:(e,t,r)=>{const c=window.wp.components,i=window.wp.blocks,o=JSON.parse('{"DD":"Image Carousel, Item","UU":"elevation/interior-components--image-carousel"}'),n=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,a=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},l=r.p+"images/preview.134b1089.webp",h=[["elevation/interior-components--image-with-srcset"]],p=["elevation/interior-components--image-with-srcset"],d=window.ReactJSXRuntime,{UU:v,DD:m}=o;(0,i.registerBlockType)(v,{title:m,icon:{src:(0,d.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,d.jsxs)(c.G,{children:[(0,d.jsx)(c.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(c.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(c.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(c.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{UU:t}=o,{name:r,blockId:c}=a(t),{clientId:i,attributes:v,setAttributes:m}=e,{id:w,anchor:u,preview:b}=v;(0,s.useEffect)((()=>{m({id:`${r}-${i}`})}),[i,r,m]);const g=(0,n.useBlockProps)({className:`${r} swiper-slide`});return b?(0,d.jsx)("div",{className:`${r}-preview`,children:(0,d.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{"data-block-id":c,"data-block-js":"true",id:u||w,...g,children:(0,d.jsx)(n.InnerBlocks,{template:h,allowedBlocks:p,templateLock:"all"})})})},save:e=>{const{attributes:t}=e,{anchor:r,id:c}=t,{UU:i}=o,{name:s,blockId:l}=a(i),h=n.useBlockProps.save({className:`${s} swiper-slide no-animate`});return(0,d.jsx)("div",{"data-block-id":l,"data-block-js":"false",id:r||c,...h,children:(0,d.jsx)(n.InnerBlocks.Content,{})})}})}},r={};function c(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,c),o.exports}c.m=t,e=[],c.O=(t,r,i,o)=>{if(!r){var n=1/0;for(h=0;h<e.length;h++){for(var[r,i,o]=e[h],s=!0,a=0;a<r.length;a++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](r[a])))?r.splice(a--,1):(s=!1,o<n&&(n=o));if(s){e.splice(h--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[r,i,o]},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../../../"})(),(()=>{var e={3487:0,8599:0};c.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,[n,s,a]=r,l=0;if(n.some((t=>0!==e[t]))){for(i in s)c.o(s,i)&&(c.m[i]=s[i]);if(a)var h=a(c)}for(t&&t(r);l<n.length;l++)o=n[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(h)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=c.O(void 0,[8599],(()=>c(4521)));i=c.O(i)})();