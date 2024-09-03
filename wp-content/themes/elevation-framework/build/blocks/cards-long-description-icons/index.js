(()=>{"use strict";var e,t={1712:(e,t,n)=>{const r=window.React,o=window.wp.blocks,i=JSON.parse('{"title":"Cards, Layout: Long Description+Icons","name":"elevation/cards-long-description-icons"}'),a=window.wp.i18n,s=window.wp.blockEditor,c=window.wp.components,l=window.wp.element,p=n.p+"images/preview.66a12130.webp",d=[["elevation/spacer"],["elevation/custom-container",{className:"cards-icons__custom-container",containerWidth:"medium"},[["elevation/group",{className:""},[["core/heading",{level:4,content:"H4. Heading lorem ipsum euismod"}],["core/paragraph",{content:"Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."}],["elevation/buttons",{},[["elevation/button",{btnStyle:"secondary",text:"Read More"}]]],["elevation/spacer",{space:"spacer__extra-small",line:!0,lineType:"dots"}]]],["elevation/group",{className:"cards-long-description-icons-card__container-group"},[["elevation/cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-1.webp"}}],["elevation/cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-2.webp"}}],["elevation/cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-3.webp"}}],["elevation/cards-long-description-icons-card",{icon:{url:"/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-4.webp"}}]]],["elevation/spacer",{space:"spacer__extra-small",line:!0,lineType:"dots",linePosition:"bottom"}]]],["elevation/spacer"]],u=["core/heading","core/paragraph","elevation/buttons","elevation/cards-icons"],{name:m,title:v}=i;(0,o.registerBlockType)(m,{title:v,icon:{src:(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,r.createElement)(c.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{clientId:t,attributes:n,setAttributes:o}=e,{anchor:m,id:v,grid_column:w,preview:g}=n,{name:b}=i,h=b.split("/")[1],f=(0,s.useBlockProps)({className:`${h} alignfull row-${w}`}),k=(0,s.useInnerBlocksProps)(f,{template:d,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"horizontal"});(0,l.useEffect)((()=>{o({id:`${h}-${t}`})}),[t,h,o]);const x=(0,r.createElement)(s.InspectorControls,null,(0,r.createElement)(c.PanelBody,{title:(0,a.__)("Cards options")},(0,r.createElement)(c.SelectControl,{label:"Grid Layout",value:w,options:[{label:"2",value:"cards-2"},{label:"3",value:"cards-3"}],onChange:e=>{o({grid_column:e})}})));return g?(0,r.createElement)("div",{className:`${h}-preview`},(0,r.createElement)("img",{src:p,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,r.createElement)(r.Fragment,null,x,(0,r.createElement)("div",{"data-block-id":h,"data-block-js":"true",id:m||v,...k}))},save:e=>{const{attributes:t}=e,{anchor:n,id:o,grid_column:a}=t,{name:c}=i,l=c.split("/")[1],p=s.useBlockProps.save({className:`${l} alignfull row-${a}`});return(0,r.createElement)("div",{"data-block-id":l,"data-block-js":"false",id:n||o,...p},(0,r.createElement)(s.InnerBlocks.Content,null))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(p=0;p<e.length;p++){for(var[n,o,i]=e[p],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[n,o,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../"})(),(()=>{var e={3961:0,5234:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var p=c(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(p)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[5234],(()=>r(1712)));o=r.O(o)})();