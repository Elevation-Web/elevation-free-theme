(()=>{"use strict";var e,t={1812:(e,t,i)=>{const o=window.React,n=window.wp.blocks,r=JSON.parse('{"title":"List, Item: Default w/Intro Text+Icons","name":"elevation/lists-default-with-intro-text-icons"}'),a=(window.wp.i18n,window.wp.blockEditor),s=window.wp.components,l=window.wp.element,c=i.p+"images/preview.0c75c3ab.webp",u=[["elevation/spacer"],["elevation/custom-container",{className:"lists-default-with-intro-text-icons__custom-container",containerWidth:"medium"},[["elevation/group",{className:""},[["core/heading",{level:4,content:"H4. Heading lorem ipsum felis eget"}],["core/paragraph",{content:"Maximum 30 words per paragraph. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam."}],["core/paragraph",{content:"Felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus:"}],["elevation/buttons",{},[["elevation/button",{btnStyle:"secondary",text:"Text Button"}]]]]],["elevation/group",{className:"lists-default-with-intro-text-icons-item__container-group"},[["elevation/lists-default-with-intro-text-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-1.webp"}}],["elevation/lists-default-with-intro-text-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-2.webp"}}],["elevation/lists-default-with-intro-text-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-3.webp"}}],["elevation/lists-default-with-intro-text-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-4.webp"}}]]]]],["elevation/spacer"]],p=["core/heading","core/paragraph","elevation/buttons"],{name:m,title:w}=r;(0,n.registerBlockType)(m,{title:w,icon:{src:(0,o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,o.createElement)(s.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{clientId:t,attributes:i,setAttributes:n}=e,{anchor:s,id:m,grid_column:w,preview:d}=i,{name:v}=r,h=v.split("/")[1],g=(0,a.useBlockProps)({className:`${h} alignfull row-${w}`}),f=(0,a.useInnerBlocksProps)(g,{template:u,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,l.useEffect)((()=>{n({id:`${h}-${t}`})}),[t,h,n]),d?(0,o.createElement)("div",{className:`${h}-preview`},(0,o.createElement)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{"data-block-id":h,"data-block-js":"true",id:s||m,...f}))},save:e=>{const{attributes:t}=e,{anchor:i,id:n,grid_column:s}=t,{name:l}=r,c=l.split("/")[1],u=a.useBlockProps.save({className:`${c} alignfull row-${s}`});return(0,o.createElement)("div",{"data-block-id":c,"data-block-js":"false",id:i||n,...u},(0,o.createElement)(a.InnerBlocks.Content,null))}})}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,i,n,r)=>{if(!i){var a=1/0;for(u=0;u<e.length;u++){for(var[i,n,r]=e[u],s=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](i[l])))?i.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,n,r]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../"})(),(()=>{var e={6689:0,8640:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[a,s,l]=i,c=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var u=l(o)}for(t&&t(i);c<a.length;c++)r=a[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},i=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=o.O(void 0,[8640],(()=>o(1812)));n=o.O(n)})();