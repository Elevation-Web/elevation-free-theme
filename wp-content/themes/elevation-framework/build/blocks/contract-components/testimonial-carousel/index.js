(()=>{"use strict";var e,t={7956:(e,t,o)=>{const n=window.wp.blocks,i=JSON.parse('{"title":"Testimonial, Layout: Carousel","name":"elevation/contract-components--testimonial-carousel"}'),r=(window.wp.i18n,window.wp.blockEditor),a=(window.wp.components,window.wp.element),s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=o.p+"images/preview.fb00b920.webp",l=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"testimonial-carousel__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,fontSize:"h3",content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Text Button"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots",linePosition:"bottom"}],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--swiper",{className:"testimonial-carousel__swiper",slidesPerViewXl:"1",slidesPerViewXxl:"1",allowedBlocks:["elevation/contract-components--testimonial-carousel-item"]},[["elevation/contract-components--testimonial-carousel-item",{}],["elevation/contract-components--testimonial-carousel-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]],["elevation/interior-components--spacer"]],p=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--spacer"],m=window.ReactJSXRuntime,{name:u,title:d}=i;(0,n.registerBlockType)(u,{title:d,edit:e=>{const{name:t}=i,{name:o,blockId:n}=s(t),{clientId:u,attributes:d,setAttributes:v}=e,{id:w,anchor:h,preview:b}=d;(0,a.useEffect)((()=>{v({id:`${o}-${u}`})}),[u,o,v]);const g=(0,r.useBlockProps)({className:`${o}`});return b?(0,m.jsx)("div",{className:`${o}-preview`,children:(0,m.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{"data-block-id":n,id:h||w,...g,children:(0,m.jsx)(r.InnerBlocks,{template:l,allowedBlocks:p,templateLock:!1})})})},save:e=>{const{attributes:t}=e,{anchor:o,id:n}=t,{name:a}=i,{name:c,blockId:l}=s(a),p=r.useBlockProps.save({className:`${c} alignfull`});return(0,m.jsx)("div",{"data-block-id":l,id:o||n,...p,children:(0,m.jsx)(r.InnerBlocks.Content,{})})}})}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,i,r)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,i,r]=e[p],s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={5598:0,4733:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[a,s,c]=o,l=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var p=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=n.O(void 0,[4733],(()=>n(7956)));i=n.O(i)})();