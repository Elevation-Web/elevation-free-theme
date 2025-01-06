(()=>{"use strict";var e,t={6056:(e,t,n)=>{const o=window.wp.blocks,i=JSON.parse('{"title":"Feed, Layout: Events Horizontal","name":"elevation/contract-components--feed-events-horizontal"}'),r=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=n.p+"images/preview.3da3edbb.webp",l=[["elevation/interior-components--spacer",{space:"spacer__large"}],["elevation/interior-components--custom-container",{className:"",containerWidth:"medium"},[["elevation/interior-components--group",{},[["core/heading",{level:2,content:"H2. Heading lorem ipsum euismod"}],["core/paragraph",{content:" Maximum 30 words. Dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-02",text:"Text Button"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,linePosition:"bottom",lineType:"dash"}],["elevation/interior-components--spacer",{space:"spacer__extra-small",linePosition:"top"}]]],["elevation/contract-components--feed-events-horizontal-container",{}]]],["elevation/interior-components--spacer",{space:"spacer__large"}]],p=["core/heading","core/paragraph","elevation/interior-components--custom-container","elevation/interior-components--buttons","elevation/contract-components--feed-events-horizontal-container","elevation/interior-components--group","elevation/interior-components--spacer"],m=window.ReactJSXRuntime,d=window.wp.components,{name:u,title:v}=i;(0,o.registerBlockType)(u,{title:v,icon:{src:(0,m.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,m.jsx)(d.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:t}=i,{name:n,blockId:o}=s(t),{clientId:d,attributes:u,setAttributes:v}=e,{anchor:w,id:h,grid_column:g,preview:b}=u,f=(0,r.useBlockProps)({className:`${n} alignfull row-${g}`}),x=(0,r.useInnerBlocksProps)(f,{template:l,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,a.useEffect)((()=>{v({id:`${n}-${d}`})}),[d,n,v]),b?(0,m.jsx)("div",{className:`${n}-preview`,children:(0,m.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{"data-block-id":o,"data-block-js":"true",id:w||h,...x})})},save:e=>{const{name:t}=i,{name:n,blockId:o}=s(t),{attributes:a}=e,{anchor:c,id:l,grid_column:p}=a,d=r.useBlockProps.save({className:`${n} alignfull row-${p}`});return(0,m.jsx)("div",{"data-block-id":o,"data-block-js":"false",id:c||l,...d,children:(0,m.jsx)(r.InnerBlocks.Content,{})})}})}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,i,r)=>{if(!n){var a=1/0;for(p=0;p<e.length;p++){for(var[n,i,r]=e[p],s=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,i,r]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&!e;)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={7087:0,4098:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(c)var p=c(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(p)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[4098],(()=>o(6056)));i=o.O(i)})();