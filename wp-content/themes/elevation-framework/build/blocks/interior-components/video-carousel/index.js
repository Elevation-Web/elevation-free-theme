(()=>{"use strict";var e,t={4432:(e,t,o)=>{const r=window.React,i=window.wp.components,n=window.wp.blocks,a=JSON.parse('{"title":"Video Carousel","name":"elevation/interior-components--video-carousel"}'),c=(window.wp.i18n,window.wp.blockEditor),l=window.wp.element,s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},m=o.p+"images/preview.42e51697.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Name of Block: Video, Layout: Carousel. Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius."}],["elevation/interior-components--spacer",{space:"spacer__small"}]]],["elevation/interior-components--swiper",{className:"video-carousel__container",slidesPerViewLg:"2",slidesPerViewXl:"3",slidesPerViewXxl:"3",allowedBlocks:["elevation/interior-components--video-carousel-item"]},[["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],v=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--cards-icons","elevation/interior-components--spacer","elevation/interior-components--video-carousel-swiper","elevation/interior-components--video-carousel-item"],{name:u,title:d}=a;(0,n.registerBlockType)(u,{title:d,icon:{src:(0,r.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,r.createElement)(i.G,null,(0,r.createElement)(i.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,r.createElement)(i.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,r.createElement)(i.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,r.createElement)(i.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:e=>{const{name:t}=a,{name:o,blockId:i}=s(t),{clientId:n,attributes:u,setAttributes:d}=e,{id:h,anchor:w,preview:b}=u;(0,l.useEffect)((()=>{d({id:`${o}-${n}`})}),[n,o,d]);const g=(0,c.useBlockProps)({className:`${o} `});return b?(0,r.createElement)("div",{className:`${o}-preview`},(0,r.createElement)("img",{src:m,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{"data-block-id":i,"data-block-js":"true",id:w||h,...g},(0,r.createElement)(c.InnerBlocks,{template:p,allowedBlocks:v,templateLock:!1})))},save:e=>{const{attributes:t}=e,{anchor:o,id:i}=t,{name:n}=a,{name:l,blockId:m}=s(n),p=c.useBlockProps.save({className:`${l} `});return(0,r.createElement)("div",{"data-block-id":m,"data-block-js":"true",id:o||i,...p},(0,r.createElement)(c.InnerBlocks.Content,null))}})}},o={};function r(e){var i=o[e];if(void 0!==i)return i.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,i,n)=>{if(!o){var a=1/0;for(m=0;m<e.length;m++){for(var[o,i,n]=e[m],c=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(c=!1,n<a&&(a=n));if(c){e.splice(m--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[o,i,n]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"})(),(()=>{var e={568:0,1291:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var i,n,[a,c,l]=o,s=0;if(a.some((t=>0!==e[t]))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(l)var m=l(r)}for(t&&t(o);s<a.length;s++)n=a[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(m)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=r.O(void 0,[1291],(()=>r(4432)));i=r.O(i)})();