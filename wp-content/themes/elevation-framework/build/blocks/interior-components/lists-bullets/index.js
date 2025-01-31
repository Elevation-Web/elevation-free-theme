(()=>{"use strict";var e,t={7832:(e,t,o)=>{const i=window.wp.blocks,n=JSON.parse('{"DD":"Lists, Layout: Bullets","UU":"elevation/interior-components--lists-bullets"}'),r=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,l=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},a=o.p+"images/preview.6d3a0486.webp",c=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"",containerWidth:"medium"},[["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,linePosition:"top",lineType:"dash"}],["elevation/interior-components--group",{tagName:"ul",className:"lists-bullets__container",allowedBlocks:["elevation/interior-components--lists-bullets-item"]},[["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}],["elevation/interior-components--lists-bullets-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,linePosition:"bottom",lineType:"dash"}]]],["elevation/interior-components--spacer"]],p=["core/heading","core/paragraph","elevation/interior-components--buttons"],m=window.ReactJSXRuntime,u=window.wp.components,{UU:d,DD:v}=n;(0,i.registerBlockType)(d,{title:v,icon:{src:(0,m.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,m.jsx)(u.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{UU:t}=n,{name:o,blockId:i}=l(t),{clientId:u,attributes:d,setAttributes:v}=e,{anchor:w,id:h,grid_column:b,preview:g}=d,f=(0,r.useBlockProps)({className:`${o} alignfull row-${b}`}),k=(0,r.useInnerBlocksProps)(f,{template:c,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,s.useEffect)((()=>{v({id:`${o}-${u}`})}),[u,o,v]),g?(0,m.jsx)("div",{className:`${o}-preview`,children:(0,m.jsx)("img",{src:a,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{"data-block-id":i,"data-block-js":"true",id:w||h,...k})})},save:e=>{const{UU:t}=n,{name:o,blockId:i}=l(t),{attributes:s}=e,{anchor:a,id:c,grid_column:p}=s,u=r.useBlockProps.save({className:`${o} alignfull row-${p}`});return(0,m.jsx)("div",{"data-block-id":i,"data-block-js":"false",id:a||c,...u,children:(0,m.jsx)(r.InnerBlocks.Content,{})})}})}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(t,o,n,r)=>{if(!o){var s=1/0;for(p=0;p<e.length;p++){for(var[o,n,r]=e[p],l=!0,a=0;a<o.length;a++)(!1&r||s>=r)&&Object.keys(i.O).every((e=>i.O[e](o[a])))?o.splice(a--,1):(l=!1,r<s&&(s=r));if(l){e.splice(p--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,n,r]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../../"})(),(()=>{var e={6814:0,1970:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[s,l,a]=o,c=0;if(s.some((t=>0!==e[t]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(a)var p=a(i)}for(t&&t(o);c<s.length;c++)r=s[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=i.O(void 0,[1970],(()=>i(7832)));n=i.O(n)})();