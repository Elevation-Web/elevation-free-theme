(()=>{"use strict";var e,t={5995:(e,t,o)=>{const n=window.wp.blocks,i=JSON.parse('{"DD":"Feed, Layout: Default Blog w/Content Boxes","UU":"elevation/contract-components--feed-default-blog-with-content-boxes"}'),r=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=o.p+"images/preview.f51aed97.webp",l=[["elevation/interior-components--spacer",{space:"spacer__large"}],["elevation/interior-components--custom-container",{className:"",containerWidth:"medium"},[["elevation/interior-components--group",{},[["core/heading",{level:3,content:"H3. Heading lorem ipsum euismod"}],["core/paragraph",{content:" Maximum 30 words. Dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Text Button"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,linePosition:"bottom",lineType:"dash"}],["elevation/interior-components--spacer",{space:"spacer__extra-small",linePosition:"top"}]]],["elevation/contract-components--feed-default-blog-with-content-boxes-container",{}]]],["elevation/interior-components--spacer",{space:"spacer__large"}]],p=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/contract-components--feed-default-blog-with-content-boxes-container"],d=window.ReactJSXRuntime,m=window.wp.components,{UU:u,DD:w}=i;(0,n.registerBlockType)(u,{title:w,icon:{src:(0,d.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,d.jsx)(m.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{UU:t}=i,{name:o,blockId:n}=s(t),{clientId:m,attributes:u,setAttributes:w}=e,{anchor:v,id:h,grid_column:g,preview:b}=u,f=(0,r.useBlockProps)({className:`${o} alignfull row-${g}`}),x=(0,r.useInnerBlocksProps)(f,{template:l,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,a.useEffect)((()=>{w({id:`${o}-${m}`})}),[m,o,w]),b?(0,d.jsx)("div",{className:`${o}-preview`,children:(0,d.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{"data-block-id":n,"data-block-js":"true",id:v||h,...x})})},save:e=>{const{UU:t}=i,{name:o,blockId:n}=s(t),{attributes:a}=e,{anchor:c,id:l,grid_column:p}=a,m=r.useBlockProps.save({className:`${o} alignfull row-${p}`});return(0,d.jsx)("div",{"data-block-id":n,"data-block-js":"false",id:c||l,...m,children:(0,d.jsx)(r.InnerBlocks.Content,{})})}})}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,i,r)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,i,r]=e[p],s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={8529:0,3477:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[a,s,c]=o,l=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var p=c(n)}for(t&&t(o);l<a.length;l++)r=a[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=n.O(void 0,[3477],(()=>n(5995)));i=n.O(i)})();