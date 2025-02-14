(()=>{"use strict";var e,t={5065:(e,t,o)=>{const n=window.wp.blocks,r=JSON.parse('{"title":"Testimonial, Layout: Carousel","name":"elevation/contract-components--testimonial-carousel"}'),i=window.React,a=(window.wp.i18n,window.wp.blockEditor),s=(window.wp.components,window.wp.element),l=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=o.p+"images/preview.fb00b920.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"testimonial-carousel__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,fontSize:"h3",content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Text Button"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots",linePosition:"bottom"}],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--swiper",{className:"testimonial-carousel__swiper",slidesPerViewXl:"1",slidesPerViewXxl:"1",allowedBlocks:["elevation/contract-components--testimonial-carousel-item"]},[["elevation/contract-components--testimonial-carousel-item",{}],["elevation/contract-components--testimonial-carousel-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],m=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--spacer"],{name:u,title:d}=r;(0,n.registerBlockType)(u,{title:d,edit:e=>{const{name:t}=r,{name:o,blockId:n}=l(t),{clientId:u,attributes:d,setAttributes:v}=e,{id:w,anchor:b,preview:h}=d;(0,s.useEffect)((()=>{v({id:`${o}-${u}`})}),[u,o,v]);const g=(0,a.useBlockProps)({className:`${o}`});return h?(0,i.createElement)("div",{className:`${o}-preview`},(0,i.createElement)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",{"data-block-id":n,id:b||w,...g},(0,i.createElement)(a.InnerBlocks,{template:p,allowedBlocks:m,templateLock:!1})))},save:e=>{const{attributes:t}=e,{anchor:o,id:n}=t,{name:s}=r,{name:c,blockId:p}=l(s),m=a.useBlockProps.save({className:`${c} alignfull`});return(0,i.createElement)("div",{"data-block-id":p,id:o||n,...m},(0,i.createElement)(a.InnerBlocks.Content,null))}})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,r,i]=e[p],s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,r,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={5598:0,4733:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[a,s,l]=o,c=0;if(a.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var p=l(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[4733],(()=>n(5065)));r=n.O(r)})();