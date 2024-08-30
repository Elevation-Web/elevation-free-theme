(()=>{"use strict";var e,t={250:(e,t,a)=>{const r=window.React,i=window.wp.blocks,o=JSON.parse('{"title":" Cards, Layout: Default","name":"elevation/cards-default"}'),n=(window.wp.i18n,window.wp.blockEditor),l=window.wp.components,c=window.wp.element,s=a.p+"images/preview.af4cfc7a.webp",p=[["elevation/spacer"],["elevation/custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum dolor sit amet",textColor:"$ui-foreground-primary-text-headings"}],["core/paragraph",{content:"Maximum 20 words. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac."}],["elevation/spacer",{space:"spacer__extra-small",line:!1}]]],["elevation/group",{className:"cards-default-card__container-group"},[["elevation/cards-default-card",{tagName:"5",link:{text:"H5. Subheading lorem"}}],["elevation/cards-default-card",{tagName:"5",link:{text:"H5. Subheading lorem"}}]]]]],["elevation/spacer"]],d=["core/heading","core/paragraph","elevation/buttons","elevation/cards-icons"],{name:u,title:m}=o;(0,i.registerBlockType)(u,{title:m,icon:{src:(0,r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,r.createElement)(l.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{clientId:t,attributes:a,setAttributes:i}=e,{anchor:l,id:u,preview:m}=a,{name:v}=o,w=v.split("/")[1],g=(0,n.useBlockProps)({className:`${w} alignfull`}),h=(0,n.useInnerBlocksProps)(g,{template:p,templateInsertUpdatesSelection:!0,allowedBlocks:d,orientation:"horizontal"});return(0,c.useEffect)((()=>{i({id:`${w}-${t}`})}),[t,w,i]),m?(0,r.createElement)("div",{className:`${w}-preview`},(0,r.createElement)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{"data-block-id":w,"data-block-js":"true",id:l||u,...h}))},save:e=>{const{attributes:t}=e,{anchor:a,id:i,grid_column:l}=t,{name:c}=o,s=c.split("/")[1],p=n.useBlockProps.save({className:`${s} alignfull row-${l}`});return(0,r.createElement)("div",{"data-block-id":s,"data-block-js":"false",id:a||i,...p},(0,r.createElement)(n.InnerBlocks.Content,null))}})}},a={};function r(e){var i=a[e];if(void 0!==i)return i.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,a,i,o)=>{if(!a){var n=1/0;for(p=0;p<e.length;p++){for(var[a,i,o]=e[p],l=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(l=!1,o<n&&(n=o));if(l){e.splice(p--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[a,i,o]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../"})(),(()=>{var e={8443:0,1043:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var i,o,[n,l,c]=a,s=0;if(n.some((t=>0!==e[t]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(c)var p=c(r)}for(t&&t(a);s<n.length;s++)o=n[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},a=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=r.O(void 0,[1043],(()=>r(250)));i=r.O(i)})();