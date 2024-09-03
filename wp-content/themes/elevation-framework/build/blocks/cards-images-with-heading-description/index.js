(()=>{"use strict";var e,t={885:(e,t,i)=>{const a=window.React,r=window.wp.blocks,n=JSON.parse('{"title":"Cards, Layout: Images w/Heading+Description+Link","name":"elevation/cards-images-with-heading-description"}'),o=window.wp.i18n,s=window.wp.blockEditor,l=window.wp.components,c=window.wp.element,d=i.p+"images/preview.7bfe8165.webp",p=[["elevation/spacer"],["elevation/custom-container",{className:"cards-images__custom-container",containerWidth:"medium"},[["elevation/group",{className:""},[["core/heading",{level:3,content:"H3. Heading lorem ipsum euismod",textColor:"$ui-foreground-primary-text-headings"}],["core/paragraph",{content:"Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."}],["elevation/buttons",{},[["elevation/button",{btnStyle:"primary-1",text:"Read More"}]]],["elevation/spacer",{space:"spacer__extra-small",line:!0,lineType:"dots"}]]],["elevation/group",{className:"cards-images-with-heading-description-card__container-group"},[["elevation/cards-images-with-heading-description-card",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/cards-images-with-heading-description/images/image-1.webp",alt:""}}],["elevation/cards-images-with-heading-description-card",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/cards-images-with-heading-description/images/image-2.webp",alt:""}}],["elevation/cards-images-with-heading-description-card",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/cards-images-with-heading-description/images/image-3.webp",alt:""}}]]],["elevation/spacer",{space:"spacer__extra-small",line:!0,lineType:"dots",linePosition:"bottom"}]]],["elevation/spacer"]],{name:m,title:u}=n;(0,r.registerBlockType)(m,{title:u,icon:{src:(0,a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,a.createElement)(l.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{clientId:t,attributes:i,setAttributes:r}=e,{anchor:m,id:u,grid_column:g,preview:w}=i,{name:v}=n,h=v.split("/")[1],b=(0,s.useBlockProps)({className:`${h} alignfull row-${g}`}),f=(0,s.useInnerBlocksProps)(b,{template:p,templateInsertUpdatesSelection:!0,orientation:"horizontal"});(0,c.useEffect)((()=>{r({id:`${h}-${t}`})}),[t,h,r]);const k=(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(l.PanelBody,{title:(0,o.__)("Cards options")},(0,a.createElement)(l.SelectControl,{label:"Grid Layout",value:g,options:[{label:"2",value:"cards-2"},{label:"3",value:"cards-3"}],onChange:e=>{r({grid_column:e})}})));return w?(0,a.createElement)("div",{className:`${h}-preview`},(0,a.createElement)("img",{src:d,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,a.createElement)(a.Fragment,null,k,(0,a.createElement)("div",{"data-block-id":h,"data-block-js":"true",id:m||u,...f}))},save:e=>{const{attributes:t}=e,{anchor:i,id:r,grid_column:o}=t,{name:l}=n,c=l.split("/")[1],d=s.useBlockProps.save({className:`${c} alignfull row-${o}`});return(0,a.createElement)("div",{"data-block-id":c,"data-block-js":"false",id:i||r,...d},(0,a.createElement)(s.InnerBlocks.Content,null))}})}},i={};function a(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,i,r,n)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){for(var[i,r,n]=e[d],s=!0,l=0;l<i.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](i[l])))?i.splice(l--,1):(s=!1,n<o&&(o=n));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,r,n]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e={7027:0,4382:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var r,n,[o,s,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(t&&t(i);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},i=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var r=a.O(void 0,[4382],(()=>a(885)));r=a.O(r)})();