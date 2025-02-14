(()=>{"use strict";var e,t={1332:(e,t,n)=>{const o=window.React,i=window.wp.blocks,r=JSON.parse('{"title":"Lists, Layout: Bullets","name":"elevation/interior-components--lists-bullets"}'),l=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,a=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=n.p+"images/preview.6d3a0486.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"",containerWidth:"medium"},[["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,linePosition:"top",lineType:"dash"}],["elevation/interior-components--group",{tagName:"ul",className:"lists-bullets__container",allowedBlocks:["elevation/interior-components--lists-bullets-item"]},[["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,linePosition:"bottom",lineType:"dash"}]]],["elevation/interior-components--spacer"]],m=[["elevation/interior-components--group",{tagName:"ul",className:"lists-bullets__container--alt",allowedBlocks:["elevation/interior-components--lists-bullets-item"]},[["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}]]]],u=["core/heading","core/paragraph","elevation/interior-components--buttons"],v=window.wp.components,{name:d,title:w}=r;(0,i.registerBlockType)(d,{title:w,icon:{src:(0,o.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,o.createElement)(v.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{name:t}=r,{name:n,blockId:i}=a(t),{clientId:v,attributes:d,setAttributes:w}=e,{anchor:b,id:h,grid_column:g,preview:k,altTemplate:f}=d,x=(0,l.useBlockProps)({className:`${n} row-${g}`}),y=(0,l.useInnerBlocksProps)(x,{template:f?m:p,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"horizontal"});return(0,s.useEffect)((()=>{w({id:`${n}-${v}`})}),[v,n,w]),k?(0,o.createElement)("div",{className:`${n}-preview`},(0,o.createElement)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{"data-block-id":i,"data-block-js":"true",id:b||h,...y}))},save:e=>{const{name:t}=r,{name:n,blockId:i}=a(t),{attributes:s}=e,{anchor:c,id:p,grid_column:m}=s,u=l.useBlockProps.save({className:`${n} row-${m}`});return(0,o.createElement)("div",{"data-block-id":i,"data-block-js":"false",id:c||p,...u},(0,o.createElement)(l.InnerBlocks.Content,null))}})}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,i,r)=>{if(!n){var l=1/0;for(p=0;p<e.length;p++){for(var[n,i,r]=e[p],s=!0,a=0;a<n.length;a++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](n[a])))?n.splice(a--,1):(s=!1,r<l&&(l=r));if(s){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,i,r]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&!e;)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={5754:0,6280:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[l,s,a]=n,c=0;if(l.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(a)var p=a(o)}for(t&&t(n);c<l.length;c++)r=l[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(p)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[6280],(()=>o(1332)));i=o.O(i)})();