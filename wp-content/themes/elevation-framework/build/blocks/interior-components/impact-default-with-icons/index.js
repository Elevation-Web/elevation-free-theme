(()=>{"use strict";var e,t={7139:(e,t,o)=>{const n=window.wp.blocks,i=JSON.parse('{"title":"Impact, Layout: Default with Icons.","name":"elevation/interior-components--impact-default-with-icons"}'),r=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,c=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},l=o.p+"images/preview.f7e992c1.webp",s=[["elevation/interior-components--custom-container",{className:"impact-default-with-icons__row",containerWidth:"medium"},[["elevation/interior-components--spacer",{line:!1}],["elevation/interior-components--group",{className:""},[["core/heading",{level:2,content:"H2. Heading lorem ipsum nunc scelerisque viverra mauris"}],["core/paragraph",{content:"Maximum 50 words per paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero donec pulvinar."}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary-1",text:"Text Button"}]]],["elevation/interior-components--spacer",{space:"spacer__small"}]]],["elevation/interior-components--group",{tagName:"div",className:""},[["elevation/interior-components--impact-default-with-icons-item",{value:8700,after_value:"+",icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-default-with-icons/images/icon-1.svg"}}],["elevation/interior-components--impact-default-with-icons-item",{value:45,after_value:"%",icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-default-with-icons/images/icon-2.svg"}}],["elevation/interior-components--impact-default-with-icons-item",{value:50,after_value:"+",icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-default-with-icons/images/icon-3.svg"}}]]],["elevation/interior-components--spacer",{line:!0,lineType:"solid",linePosition:"top",borderColor:"#8a55b3ff"}]]]],p=["core/heading","core/paragraph","elevation/interior-components--buttons"],u=window.ReactJSXRuntime,m=e=>{const{attributes:t,setAttributes:o}=e,{backgroundColor:n}=t;return(0,u.jsx)(r.InspectorControls,{children:(0,u.jsx)(r.PanelColorSettings,{title:"Background Color",initialOpen:!1,colorSettings:[{value:n,onChange:e=>{o({backgroundColor:e})},label:"Background Color"}]})})},d=window.wp.components,{name:v,title:w}=i;(0,n.registerBlockType)(v,{title:w,icon:{src:(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,u.jsx)(d.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:t}=i,{name:o,blockId:n}=c(t),{clientId:d,attributes:v,setAttributes:w}=e,{anchor:h,id:g,preview:b,backgroundColor:f}=v,k=(0,r.useBlockProps)({className:`${o} alignfull`,style:{backgroundColor:f}}),x=(0,r.useInnerBlocksProps)(k,{template:s,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,a.useEffect)((()=>{w({id:`${o}-${d}`})}),[d,o,w]),b?(0,u.jsx)("div",{className:`${o}-preview`,children:(0,u.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...e}),(0,u.jsx)("div",{"data-block-id":n,"data-block-js":"true",id:h||g,...x})]})},save:e=>{const{name:t}=i,{name:o,blockId:n}=c(t),{attributes:a}=e,{anchor:l,id:s,backgroundColor:p}=a,m=r.useBlockProps.save({className:`${o} counter alignfull`,style:{backgroundColor:p}});return(0,u.jsx)("div",{"data-block-id":n,"data-block-js":"false",id:l||s,...m,children:(0,u.jsx)(r.InnerBlocks.Content,{})})}})}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,i,r)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,i,r]=e[p],c=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(c=!1,r<a&&(a=r));if(c){e.splice(p--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={3833:0,1858:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[a,c,l]=o,s=0;if(a.some((t=>0!==e[t]))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(l)var p=l(n)}for(t&&t(o);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=n.O(void 0,[1858],(()=>n(7139)));i=n.O(i)})();