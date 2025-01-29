(()=>{"use strict";var e,t={7611:(e,t,o)=>{const n=window.wp.blocks,r=JSON.parse('{"DD":"Lists, Layout: Intro Text w/Content Boxes","UU":"elevation/interior-components--lists-intro-text-with-content-boxes"}'),i=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,a=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=o.p+"images/preview.ff9f9dd4.webp",l=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"lists-intro-text-with-content-boxes__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:3,content:"H3. Heading lorem"}],["core/paragraph",{content:"Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Text Button"}]]],["elevation/interior-components--spacer",{line:!0,space:"spacer__extra-small",linePosition:"bottom"}]]],["elevation/interior-components--group",{className:"lists-intro-text-with-content-boxes__container-group",tagName:"ul",allowedBlocks:["elevation/interior-components--lists-intro-text-with-content-boxes-box"]},[["elevation/interior-components--lists-intro-text-with-content-boxes-box",{backgroundColor:"ui-background-light-01",lineColor:"ui-foreground-primary-accent-01"}],["elevation/interior-components--lists-intro-text-with-content-boxes-box",{backgroundColor:"ui-background-light-01",lineColor:"ui-foreground-primary-accent-02"}],["elevation/interior-components--lists-intro-text-with-content-boxes-box",{backgroundColor:"ui-background-light-01",lineColor:"ui-foreground-primary-accent-05"}],["elevation/interior-components--lists-intro-text-with-content-boxes-box",{backgroundColor:"ui-background-light-01",lineColor:"ui-foreground-primary-accent-04"}]]]]],["elevation/interior-components--spacer"]],u=["core/heading","core/paragraph","elevation/interior-components--buttons"],p=window.ReactJSXRuntime,d=window.wp.components,{UU:m,DD:b}=r;(0,n.registerBlockType)(m,{title:b,icon:{src:(0,p.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,p.jsx)(d.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{UU:t}=r,{name:o,blockId:n}=a(t),{clientId:d,attributes:m,setAttributes:b}=e,{anchor:g,id:v,grid_column:w,preview:h}=m,x=(0,i.useBlockProps)({className:`${o} alignfull row-${w}`}),f=(0,i.useInnerBlocksProps)(x,{template:l,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"horizontal"});return(0,s.useEffect)((()=>{b({id:`${o}-${d}`})}),[d,o,b]),h?(0,p.jsx)("div",{className:`${o}-preview`,children:(0,p.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{"data-block-id":n,"data-block-js":"true",id:g||v,...f})})},save:e=>{const{UU:t}=r,{name:o,blockId:n}=a(t),{attributes:s}=e,{anchor:c,id:l,grid_column:u}=s,d=i.useBlockProps.save({className:`${o} alignfull row-${u}`});return(0,p.jsx)("div",{"data-block-id":n,"data-block-js":"false",id:c||l,...d,children:(0,p.jsx)(i.InnerBlocks.Content,{})})}})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,r,i]=e[u],a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={6698:0,2062:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[s,a,c]=o,l=0;if(s.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var u=c(n)}for(t&&t(o);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[2062],(()=>n(7611)));r=n.O(r)})();