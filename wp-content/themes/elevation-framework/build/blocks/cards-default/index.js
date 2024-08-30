(()=>{"use strict";var e,t={250:(e,t,a)=>{const r=window.React,o=window.wp.blocks,i=JSON.parse('{"title":" Cards, Layout: Default","name":"elevation/cards-default"}'),n=(window.wp.i18n,window.wp.blockEditor),l=window.wp.components,c=window.wp.element,s=a.p+"images/preview.af4cfc7a.webp",p=[["elevation/spacer"],["elevation/custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum dolor sit amet",textColor:"$ui-foreground-primary-text-headings"}],["core/paragraph",{content:"Maximum 20 words. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac."}],["elevation/spacer",{space:"spacer__extra-small",line:!1}]]],["elevation/group",{className:"cards-default-card__container-group"},[["elevation/cards-default-card",{tagName:"5",link:{text:"H5. Subheading lorem"}}],["elevation/cards-default-card",{tagName:"5",link:{text:"H5. Subheading lorem"}}]]]]],["elevation/spacer"]],d=["core/heading","core/paragraph","elevation/buttons","elevation/cards-icons"],{name:u,title:m}=i;(0,o.registerBlockType)(u,{title:m,icon:{src:(0,r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,r.createElement)(l.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{clientId:t,attributes:a,setAttributes:o}=e,{anchor:l,id:u,grid_column:m,preview:v}=a,{name:w}=i,g=w.split("/")[1],h=(0,n.useBlockProps)({className:`${g} alignfull row-${m}`}),f=(0,n.useInnerBlocksProps)(h,{template:p,templateInsertUpdatesSelection:!0,allowedBlocks:d,orientation:"horizontal"});return(0,c.useEffect)((()=>{o({id:`${g}-${t}`})}),[t,g,o]),v?(0,r.createElement)("div",{className:`${g}-preview`},(0,r.createElement)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{"data-block-id":g,"data-block-js":"true",id:l||u,...f}))},save:e=>{const{attributes:t}=e,{anchor:a,id:o,grid_column:l}=t,{name:c}=i,s=c.split("/")[1],p=n.useBlockProps.save({className:`${s} alignfull row-${l}`});return(0,r.createElement)("div",{"data-block-id":s,"data-block-js":"false",id:a||o,...p},(0,r.createElement)(n.InnerBlocks.Content,null))}})}},a={};function r(e){var o=a[e];if(void 0!==o)return o.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,a,o,i)=>{if(!a){var n=1/0;for(p=0;p<e.length;p++){for(var[a,o,i]=e[p],l=!0,c=0;c<a.length;c++)(!1&i||n>=i)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(l=!1,i<n&&(n=i));if(l){e.splice(p--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[a,o,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../"})(),(()=>{var e={8443:0,1043:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[n,l,c]=a,s=0;if(n.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var p=c(r)}for(t&&t(a);s<n.length;s++)i=n[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(p)},a=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=r.O(void 0,[1043],(()=>r(250)));o=r.O(o)})();