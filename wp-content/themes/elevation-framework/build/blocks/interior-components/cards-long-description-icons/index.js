(()=>{"use strict";var e,o={95:(e,o,n)=>{const i=window.wp.blocks,r=JSON.parse('{"DD":"Cards, Layout: Long Description+Icons","UU":"elevation/interior-components--cards-long-description-icons"}'),t=window.wp.i18n,s=window.wp.blockEditor,c=window.wp.components,a=window.wp.element,l=n.p+"images/preview.66a12130.webp",p=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:4,content:"H4. Heading lorem ipsum euismod"}],["core/paragraph",{content:"Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"secondary--outline",text:"Read More"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots"}]]],["elevation/interior-components--group",{className:"cards-long-description-icons-card__container-group",allowedBlocks:["elevation/interior-components--cards-long-description-icons-card"]},[["elevation/interior-components--cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-long-description-icons/images/icon-1.webp"}}],["elevation/interior-components--cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-long-description-icons/images/icon-2.webp"}}],["elevation/interior-components--cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-long-description-icons/images/icon-3.webp"}}],["elevation/interior-components--cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-long-description-icons/images/icon-4.webp"}}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots",linePosition:"bottom"}]]],["elevation/interior-components--spacer"]],d=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--cards-icons"],u=e=>{const o=e.split("/")[1].split("--");return{blockId:o.join("/"),name:o[1]}},m=window.ReactJSXRuntime,{UU:v,DD:g}=r;(0,i.registerBlockType)(v,{title:g,icon:{src:(0,m.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,m.jsx)(c.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{clientId:o,attributes:n,setAttributes:i}=e,{anchor:v,id:g,grid_column:w,preview:b}=n,{UU:h}=r,{name:f,blockId:k}=u(h),x=(0,s.useBlockProps)({className:`${f} alignfull row-${w}`}),j=(0,s.useInnerBlocksProps)(x,{template:p,templateInsertUpdatesSelection:!0,allowedBlocks:d,orientation:"horizontal"});(0,a.useEffect)((()=>{i({id:`${f}-${o}`})}),[o,f,i]);const y=(0,m.jsx)(s.InspectorControls,{children:(0,m.jsx)(c.PanelBody,{title:(0,t.__)("Cards options"),children:(0,m.jsx)(c.SelectControl,{label:"Grid Layout",value:w,options:[{label:"2",value:"cards-2"},{label:"3",value:"cards-3"}],onChange:e=>{i({grid_column:e})}})})});return b?(0,m.jsx)("div",{className:`${f}-preview`,children:(0,m.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsxs)(m.Fragment,{children:[y,(0,m.jsx)("div",{"data-block-id":k,"data-block-js":"true",id:v||g,...j})]})},save:e=>{const{UU:o}=r,{name:n,blockId:i}=u(o),{attributes:t}=e,{anchor:c,id:a,grid_column:l}=t,p=s.useBlockProps.save({className:`${n} alignfull row-${l}`});return(0,m.jsx)("div",{"data-block-id":i,"data-block-js":"false",id:c||a,...p,children:(0,m.jsx)(s.InnerBlocks.Content,{})})}})}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,e=[],i.O=(o,n,r,t)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){for(var[n,r,t]=e[p],c=!0,a=0;a<n.length;a++)(!1&t||s>=t)&&Object.keys(i.O).every((e=>i.O[e](n[a])))?n.splice(a--,1):(c=!1,t<s&&(s=t));if(c){e.splice(p--,1);var l=r();void 0!==l&&(o=l)}}return o}t=t||0;for(var p=e.length;p>0&&e[p-1][2]>t;p--)e[p]=e[p-1];e[p]=[n,r,t]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var o=i.g.document;if(!e&&o&&(o.currentScript&&"SCRIPT"===o.currentScript.tagName.toUpperCase()&&(e=o.currentScript.src),!e)){var n=o.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../../"})(),(()=>{var e={9597:0,8321:0};i.O.j=o=>0===e[o];var o=(o,n)=>{var r,t,[s,c,a]=n,l=0;if(s.some((o=>0!==e[o]))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(a)var p=a(i)}for(o&&o(n);l<s.length;l++)t=s[l],i.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return i.O(p)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=i.O(void 0,[8321],(()=>i(95)));r=i.O(r)})();