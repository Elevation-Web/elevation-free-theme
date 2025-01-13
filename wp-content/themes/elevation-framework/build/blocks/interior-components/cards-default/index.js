(()=>{"use strict";var e,t={6515:(e,t,r)=>{const o=window.wp.blocks,n=JSON.parse('{"title":" Cards, Layout: Default","name":"elevation/interior-components--cards-default"}'),i=(window.wp.i18n,window.wp.blockEditor),a=window.wp.components,s=window.wp.element,c=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},l=r.p+"images/preview.af4cfc7a.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum dolor sit amet"}],["core/paragraph",{content:"Maximum 20 words. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac."}],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!1}]]],["elevation/interior-components--group",{className:"cards-default-card__container-group",allowedBlocks:["elevation/interior-components--cards-default-card"]},[["elevation/interior-components--cards-default-card",{tagName:"5",link:{text:"H5. Subheading lorem"}}],["elevation/interior-components--cards-default-card",{tagName:"5",link:{text:"H5. Subheading lorem"}}]]]]],["elevation/interior-components--spacer"]],d=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--cards-icons"],m=window.ReactJSXRuntime,{name:u,title:v}=n;(0,o.registerBlockType)(u,{title:v,icon:{src:(0,m.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,m.jsx)(a.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{clientId:t,attributes:r,setAttributes:o}=e,{anchor:a,id:u,preview:v}=r,{name:w}=n,{blockId:h,name:g}=c(w),f=(0,i.useBlockProps)({className:`${g} alignfull`}),b=(0,i.useInnerBlocksProps)(f,{template:p,templateInsertUpdatesSelection:!0,allowedBlocks:d,orientation:"horizontal"});return(0,s.useEffect)((()=>{o({id:`${g}-${t}`})}),[t,g,o]),v?(0,m.jsx)("div",{className:`${g}-preview`,children:(0,m.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{"data-block-id":h,"data-block-js":"true",id:a||u,...b})})},save:e=>{const{attributes:t}=e,{anchor:r,id:o,grid_column:a}=t,{name:s}=n,{name:l,blockId:p}=c(s),d=i.useBlockProps.save({className:`${l} alignfull row-${a}`});return(0,m.jsx)("div",{"data-block-id":p,"data-block-js":"false",id:r||o,...d,children:(0,m.jsx)(i.InnerBlocks.Content,{})})}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,n,i]=e[p],s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,n,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={931:0,6829:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,s,c]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var p=c(o)}for(t&&t(r);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[6829],(()=>o(6515)));n=o.O(n)})();