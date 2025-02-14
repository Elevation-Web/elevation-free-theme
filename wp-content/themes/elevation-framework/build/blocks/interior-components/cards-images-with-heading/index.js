(()=>{"use strict";var e,t={7206:(e,t,i)=>{const r=window.React,n=window.wp.blocks,a=JSON.parse('{"title":"Cards, Layout: Images w/Heading","name":"elevation/interior-components--cards-images-with-heading"}'),o=window.wp.i18n,s=window.wp.blockEditor,l=window.wp.components,c=window.wp.element,m=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},p=i.p+"images/preview.0f9b7290.webp",d=[["elevation/interior-components--spacer"],["elevation/interior-components--custom-container",{className:"cards-border-images__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:""},[["core/heading",{level:3,content:"H3. Heading lorem ipsum euismod"}],["core/paragraph",{content:"Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Read More"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots"}]]],["elevation/interior-components--group",{className:"cards-images-with-heading-card__container-group",allowedBlocks:["elevation/interior-components--cards-images-with-heading-card"]},[["elevation/interior-components--cards-images-with-heading-card",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading/images/image-1.webp",alt:""},link:{text:"H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget sit"},textColor:"$ui-foreground-primary-text-headings"}],["elevation/interior-components--cards-images-with-heading-card",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading/images/image-2.webp",alt:""},link:{text:"H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget sit"},textColor:"$ui-foreground-primary-text-headings"}],["elevation/interior-components--cards-images-with-heading-card",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading/images/image-3.webp",alt:""},link:{text:"H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget sit"},textColor:"$ui-foreground-primary-text-headings"}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots",linePosition:"bottom"}]]],["elevation/interior-components--spacer"]],{name:u,title:g}=a;(0,n.registerBlockType)(u,{title:g,icon:{src:(0,r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,r.createElement)(l.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{name:t}=a,{name:i,blockId:n}=m(t),{clientId:u,attributes:g,setAttributes:v}=e,{anchor:w,id:h,grid_column:b,preview:f}=g,k=(0,s.useBlockProps)({className:`${i} alignfull row-${b}`}),x=(0,s.useInnerBlocksProps)(k,{template:d,templateInsertUpdatesSelection:!0,orientation:"horizontal"});(0,c.useEffect)((()=>{v({id:`${i}-${u}`})}),[u,i,v]);const y=(0,r.createElement)(s.InspectorControls,null,(0,r.createElement)(l.PanelBody,{title:(0,o.__)("Cards options")},(0,r.createElement)(l.SelectControl,{label:"Grid Layout",value:b,options:[{label:"2",value:"cards-2"},{label:"3",value:"cards-3"}],onChange:e=>{v({grid_column:e})}})));return f?(0,r.createElement)("div",{className:`${i}-preview`},(0,r.createElement)("img",{src:p,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,r.createElement)(r.Fragment,null,y,(0,r.createElement)("div",{"data-block-id":n,"data-block-js":"true",id:w||h,...x}))},save:e=>{const{name:t}=a,{name:i,blockId:n}=m(t),{attributes:o}=e,{anchor:l,id:c,grid_column:p}=o,d=s.useBlockProps.save({className:`${i} alignfull row-${p}`});return(0,r.createElement)("div",{"data-block-id":n,"data-block-js":"false",id:l||c,...d},(0,r.createElement)(s.InnerBlocks.Content,null))}})}},i={};function r(e){var n=i[e];if(void 0!==n)return n.exports;var a=i[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,i,n,a)=>{if(!i){var o=1/0;for(m=0;m<e.length;m++){for(var[i,n,a]=e[m],s=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](i[l])))?i.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(m--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[i,n,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"})(),(()=>{var e={3934:0,4189:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var n,a,[o,s,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var m=l(r)}for(t&&t(i);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},i=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=r.O(void 0,[4189],(()=>r(7206)));n=r.O(n)})();