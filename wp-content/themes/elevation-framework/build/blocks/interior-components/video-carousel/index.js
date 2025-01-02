(()=>{"use strict";var e,t={4432:(e,t,r)=>{const o=window.React,n=window.wp.components,i=window.wp.blocks,a=JSON.parse('{"title":"Video Carousel","name":"elevation/interior-components--video-carousel"}'),c=(window.wp.i18n,window.wp.blockEditor),l=window.wp.element,s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},m=r.p+"images/preview.42e51697.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Name of Block: Video, Layout: Carousel. Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius."}],["elevation/interior-components--spacer",{space:"spacer__small"}]]],["elevation/interior-components--swiper",{className:"video-carousel__container",slidesPerViewLg:"2",slidesPerViewXl:"3",slidesPerViewXxl:"3"},[["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],v=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--cards-icons"],{name:u,title:d}=a;(0,i.registerBlockType)(u,{title:d,icon:{src:(0,o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,o.createElement)(n.G,null,(0,o.createElement)(n.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,o.createElement)(n.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,o.createElement)(n.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,o.createElement)(n.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:e=>{const{name:t}=a,{name:r,blockId:n}=s(t),{clientId:i,attributes:u,setAttributes:d}=e,{id:h,anchor:w,preview:b}=u;(0,l.useEffect)((()=>{d({id:`${r}-${i}`})}),[i,r,d]);const g=(0,c.useBlockProps)({className:`${r} `});return b?(0,o.createElement)("div",{className:`${r}-preview`},(0,o.createElement)("img",{src:m,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{"data-block-id":n,"data-block-js":"true",id:w||h,...g},(0,o.createElement)(c.InnerBlocks,{template:p,allowedBlocks:v,templateLock:!1})))},save:e=>{const{attributes:t}=e,{anchor:r,id:n}=t,{name:i}=a,{name:l,blockId:m}=s(i),p=c.useBlockProps.save({className:`${l} `});return(0,o.createElement)("div",{"data-block-id":m,"data-block-js":"false",id:r||n,...p},(0,o.createElement)(c.InnerBlocks.Content,null))}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(m=0;m<e.length;m++){for(var[r,n,i]=e[m],c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[r,n,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={568:0,1291:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,c,l]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(l)var m=l(o)}for(t&&t(r);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(m)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[1291],(()=>o(4432)));n=o.O(n)})();