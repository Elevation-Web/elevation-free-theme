(()=>{"use strict";var e,t={3754:(e,t,o)=>{const n=window.wp.blocks,i=JSON.parse('{"title":"Logos, Layout: Descriptions","name":"elevation/contract-components--logos-descriptions"}'),r=window.React,a=window.wp.i18n,s=window.wp.blockEditor,c=window.wp.element,l=window.wp.components,p=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},m=o.p+"images/preview.ce25af55.webp",u=[["elevation/interior-components--custom-container",{className:"logos-descriptions__container",containerWidth:"medium"},[["elevation/interior-components--spacer",{line:!1}],["core/heading",{level:2,fontSize:"h3",content:"H2. Heading lorem"}],["core/paragraph",{content:"Name of Block: Logos, Layout: Carousel. Maximum 30 words. Dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Text Button"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots",linePosition:"bottom"}],["elevation/interior-components--spacer",{space:"spacer__extra-small"}],["elevation/interior-components--group",{className:"logos-descriptions__items",allowedBlocks:["elevation/contract-components--logos-descriptions-item"]},[["elevation/contract-components--logos-descriptions-item",{}],["elevation/contract-components--logos-descriptions-item",{}],["elevation/contract-components--logos-descriptions-item",{}],["elevation/contract-components--logos-descriptions-item",{}]]],["elevation/interior-components--spacer",{line:!1}]]]],d=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--spacer"],{name:v,title:g}=i;(0,n.registerBlockType)(v,{title:g,edit:e=>{const{name:t}=i,{name:o,blockId:n}=p(t),{clientId:v,attributes:g,setAttributes:w}=e,{anchor:h,id:b,preview:f,columns:k}=g,y=(0,s.useBlockProps)({className:`${o} alignfull`}),E=(0,s.useInnerBlocksProps)(y,{template:u,templateInsertUpdatesSelection:!0,allowedBlocks:d,orientation:"horizontal"});if((0,c.useEffect)((()=>{w({id:`${o}-${v}`})}),[v,o,w]),f)return(0,r.createElement)("div",{className:`${o}-preview`},(0,r.createElement)("img",{src:m,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}}));const x=(0,r.createElement)(s.InspectorControls,null,(0,r.createElement)(l.PanelBody,{title:(0,a.__)("Columns")},(0,r.createElement)(l.RangeControl,{value:k,onChange:e=>{w({columns:e})},min:2,max:4})));return(0,r.createElement)(r.Fragment,null,x,(0,r.createElement)("div",{"data-block-id":n,id:h||b,"data-columns":k,...E}))},save:e=>{const{name:t}=i,{name:o,blockId:n}=p(t),{attributes:a}=e,{anchor:c,id:l,columns:m}=a,u=s.useBlockProps.save({className:`${o} alignfull`});return(0,r.createElement)("div",{"data-block-id":n,"data-columns":m,id:c||l,...u},(0,r.createElement)(s.InnerBlocks.Content,null))}})}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,i,r)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,i,r]=e[p],s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={9621:0,9335:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[a,s,c]=o,l=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var p=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=n.O(void 0,[9335],(()=>n(3754)));i=n.O(i)})();