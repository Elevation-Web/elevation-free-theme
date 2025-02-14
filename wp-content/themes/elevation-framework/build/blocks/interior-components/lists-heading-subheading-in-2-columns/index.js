(()=>{"use strict";var e,n={935:(e,n,t)=>{const i=window.React,o=window.wp.blocks,r=JSON.parse('{"title":"Lists, Layout: Heading+Subheading in 2 Columns","name":"elevation/interior-components--lists-heading-subheading-in-2-columns"}'),a=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,l=e=>{const n=e.split("/")[1].split("--");return{blockId:n.join("/"),name:n[1]}},c=t.p+"images/preview.93a6f5b1.webp",m=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"",containerWidth:"medium"},[["core/heading",{level:2,content:"H2. Heading lorem ipsum euismod"}],["elevation/interior-components--spacer",{space:"spacer__normal"}],["elevation/interior-components--group",{tagName:"ul",className:"lists-heading-subheading-in-2-columns__container",allowedBlocks:["elevation/interior-components--lists-heading-subheading-in-2-columns-item"]},[["elevation/interior-components--lists-heading-subheading-in-2-columns-item",{}],["elevation/interior-components--lists-heading-subheading-in-2-columns-item",{}],["elevation/interior-components--lists-heading-subheading-in-2-columns-item",{}]]]]],["elevation/interior-components--spacer"]],p=["core/heading","core/paragraph","elevation/interior-components--buttons"],d=window.wp.components,{name:u,title:h}=r;(0,o.registerBlockType)(u,{title:h,icon:{src:(0,i.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,i.createElement)(d.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{name:n}=r,{name:t,blockId:o}=l(n),{clientId:d,attributes:u,setAttributes:h}=e,{anchor:v,id:g,grid_column:w,preview:b}=u,f=(0,a.useBlockProps)({className:`${t} alignfull row-${w}`}),k=(0,a.useInnerBlocksProps)(f,{template:m,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,s.useEffect)((()=>{h({id:`${t}-${d}`})}),[d,t,h]),b?(0,i.createElement)("div",{className:`${t}-preview`},(0,i.createElement)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",{"data-block-id":o,"data-block-js":"true",id:v||g,...k}))},save:e=>{const{name:n}=r,{name:t,blockId:o}=l(n),{attributes:s}=e,{anchor:c,id:m,grid_column:p}=s,d=a.useBlockProps.save({className:`${t} alignfull row-${p}`});return(0,i.createElement)("div",{"data-block-id":o,"data-block-js":"false",id:c||m,...d},(0,i.createElement)(a.InnerBlocks.Content,null))}})}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,t,o,r)=>{if(!t){var a=1/0;for(m=0;m<e.length;m++){for(var[t,o,r]=e[m],s=!0,l=0;l<t.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(m--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[t,o,r]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../../"})(),(()=>{var e={1391:0,2621:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[a,s,l]=t,c=0;if(a.some((n=>0!==e[n]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var m=l(i)}for(n&&n(t);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(m)},t=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[2621],(()=>i(935)));o=i.O(o)})();