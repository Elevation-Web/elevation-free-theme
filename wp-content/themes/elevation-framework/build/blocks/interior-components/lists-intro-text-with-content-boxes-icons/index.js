(()=>{"use strict";var e,t={8754:(e,t,o)=>{const n=window.wp.blocks,i=JSON.parse('{"title":"Lists, Layout: Intro Text w/Content Boxes+Icons","name":"elevation/interior-components--lists-intro-text-with-content-boxes-icons"}'),r=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,c=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},a=o.p+"images/preview.b5b5e91c.webp",l=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"lists-intro-text-with-content-boxes-icons__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:4,content:"H4. Heading lorem ipsum felis eget"}],["core/paragraph",{content:"Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Text Button"}]]],["elevation/interior-components--spacer",{line:!0,space:"spacer__extra-small",linePosition:"bottom"}]]],["elevation/interior-components--group",{className:"lists-intro-text-with-content-boxes-icons__container-group",tagName:"ul",allowedBlocks:["elevation/interior-components--lists-intro-text-with-content-boxes-icons-item"]},[["elevation/interior-components--lists-intro-text-with-content-boxes-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-1.webp"}}],["elevation/interior-components--lists-intro-text-with-content-boxes-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-2.webp"}}],["elevation/interior-components--lists-intro-text-with-content-boxes-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-3.webp"}}],["elevation/interior-components--lists-intro-text-with-content-boxes-icons-item",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-4.webp"}}]]]]],["elevation/interior-components--spacer"]],p=["core/heading","core/paragraph","elevation/interior-components--buttons"],m=window.ReactJSXRuntime,u=window.wp.components,{name:w,title:b}=i;(0,n.registerBlockType)(w,{title:b,icon:{src:(0,m.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,m.jsx)(u.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:t}=i,{name:o,blockId:n}=c(t),{clientId:u,attributes:w,setAttributes:b}=e,{anchor:d,id:v,grid_column:h,preview:x}=w,g=(0,r.useBlockProps)({className:`${o} alignfull row-${h}`}),f=(0,r.useInnerBlocksProps)(g,{template:l,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,s.useEffect)((()=>{b({id:`${o}-${u}`})}),[u,o,b]),x?(0,m.jsx)("div",{className:`${o}-preview`,children:(0,m.jsx)("img",{src:a,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{"data-block-id":n,"data-block-js":"true",id:d||v,...f})})},save:e=>{const{name:t}=i,{name:o,blockId:n}=c(t),{attributes:s}=e,{anchor:a,id:l,grid_column:p}=s,u=r.useBlockProps.save({className:`${o} alignfull row-${p}`});return(0,m.jsx)("div",{"data-block-id":n,"data-block-js":"false",id:a||l,...u,children:(0,m.jsx)(r.InnerBlocks.Content,{})})}})}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,i,r)=>{if(!o){var s=1/0;for(p=0;p<e.length;p++){for(var[o,i,r]=e[p],c=!0,a=0;a<o.length;a++)(!1&r||s>=r)&&Object.keys(n.O).every((e=>n.O[e](o[a])))?o.splice(a--,1):(c=!1,r<s&&(s=r));if(c){e.splice(p--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={9429:0,6229:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[s,c,a]=o,l=0;if(s.some((t=>0!==e[t]))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(a)var p=a(n)}for(t&&t(o);l<s.length;l++)r=s[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=n.O(void 0,[6229],(()=>n(8754)));i=n.O(i)})();