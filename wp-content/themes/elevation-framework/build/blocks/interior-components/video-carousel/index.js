(()=>{"use strict";var e,o={3678:(e,o,t)=>{const i=window.wp.components,r=window.wp.blocks,n=JSON.parse('{"title":"Video Carousel","name":"elevation/interior-components--video-carousel"}'),c=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,s=e=>{const o=e.split("/")[1].split("--");return{blockId:o.join("/"),name:o[1]}},l=t.p+"images/preview.42e51697.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Name of Block: Video, Layout: Carousel. Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius."}],["elevation/interior-components--spacer",{space:"spacer__small"}]]],["elevation/interior-components--swiper",{className:"video-carousel__container",slidesPerViewLg:"2",slidesPerViewXl:"3",slidesPerViewXxl:"3"},[["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}],["elevation/interior-components--video-carousel-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],m=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--cards-icons"],v=window.ReactJSXRuntime,{name:d,title:u}=n;(0,r.registerBlockType)(d,{title:u,icon:{src:(0,v.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,v.jsxs)(i.G,{children:[(0,v.jsx)(i.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,v.jsx)(i.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,v.jsx)(i.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,v.jsx)(i.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:o}=n,{name:t,blockId:i}=s(o),{clientId:r,attributes:d,setAttributes:u}=e,{id:h,anchor:w,preview:b}=d;(0,a.useEffect)((()=>{u({id:`${t}-${r}`})}),[r,t,u]);const g=(0,c.useBlockProps)({className:`${t} `});return b?(0,v.jsx)("div",{className:`${t}-preview`,children:(0,v.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{"data-block-id":i,"data-block-js":"true",id:w||h,...g,children:(0,v.jsx)(c.InnerBlocks,{template:p,allowedBlocks:m,templateLock:!1})})})},save:e=>{const{attributes:o}=e,{anchor:t,id:i}=o,{name:r}=n,{name:a,blockId:l}=s(r),p=c.useBlockProps.save({className:`${a} `});return(0,v.jsx)("div",{"data-block-id":l,"data-block-js":"false",id:t||i,...p,children:(0,v.jsx)(c.InnerBlocks.Content,{})})}})}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var n=t[e]={exports:{}};return o[e](n,n.exports,i),n.exports}i.m=o,e=[],i.O=(o,t,r,n)=>{if(!t){var c=1/0;for(p=0;p<e.length;p++){for(var[t,r,n]=e[p],a=!0,s=0;s<t.length;s++)(!1&n||c>=n)&&Object.keys(i.O).every((e=>i.O[e](t[s])))?t.splice(s--,1):(a=!1,n<c&&(c=n));if(a){e.splice(p--,1);var l=r();void 0!==l&&(o=l)}}return o}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[t,r,n]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var o=i.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../../"})(),(()=>{var e={568:0,1291:0};i.O.j=o=>0===e[o];var o=(o,t)=>{var r,n,[c,a,s]=t,l=0;if(c.some((o=>0!==e[o]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(s)var p=s(i)}for(o&&o(t);l<c.length;l++)n=c[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(p)},t=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var r=i.O(void 0,[1291],(()=>i(3678)));r=i.O(r)})();