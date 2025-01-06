(()=>{"use strict";var e,o={6330:(e,o,t)=>{const n=window.wp.blocks,i=JSON.parse('{"title":"Impact, Layout: Content Boxes w/Icons","name":"elevation/interior-components--impact-content-boxes-with-icons"}'),r=(window.wp.i18n,window.wp.blockEditor),c=window.wp.element,a=e=>{const o=e.split("/")[1].split("--");return{blockId:o.join("/"),name:o[1]}},s=t.p+"images/preview.b2895575.webp",l=[["elevation/interior-components--custom-container",{containerWidth:"medium"},[["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}],["elevation/interior-components--group",{className:"",type:"type-row"},[["core/heading",{level:2,content:"H2. Heading lorem ipsum nunc scelerisque viverra mauris"}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"secondary--outline",text:"Text Button"}]]]]],["elevation/interior-components--spacer",{line:!1,space:"spacer__extra-small"}],["elevation/interior-components--spacer",{line:!0,lineType:"solid",linePosition:"top",borderColor:"#E7E1EA",space:"spacer__extra-small"}],["elevation/interior-components--group",{tagName:"div",className:"impact-content-boxes-with-icons__row",allowedBlocks:["elevation/interior-components--impact-content-boxes-with-icons-item"]},[["elevation/interior-components--impact-content-boxes-with-icons-item",{value:"+8700",icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-1.svg"},backgroundColor:"ui-background-light-01"}],["elevation/interior-components--impact-content-boxes-with-icons-item",{value:"45%",icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-2.svg"},backgroundColor:"ui-background-light-01"}],["elevation/interior-components--impact-content-boxes-with-icons-item",{value:"50+",icon:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-3.svg"},backgroundColor:"ui-background-light-01"}]]],["elevation/interior-components--spacer",{line:!0,lineType:"solid",linePosition:"bottom",borderColor:"#E7E1EA",space:"spacer__extra-small"}],["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}]]]],p=["core/heading","core/paragraph","elevation/interior-components--buttons"],m=window.ReactJSXRuntime,u=e=>{const{attributes:o,setAttributes:t}=e,{backgroundColor:n}=o;return(0,m.jsx)(r.InspectorControls,{children:(0,m.jsx)(r.PanelColorSettings,{title:"Background Color",initialOpen:!1,colorSettings:[{value:n,onChange:e=>{t({backgroundColor:e})},label:"Background Color"}]})})},d=window.wp.components,{name:v,title:b}=i;(0,n.registerBlockType)(v,{title:b,icon:{src:(0,m.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,m.jsx)(d.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:o}=i,{name:t,blockId:n}=a(o),{clientId:d,attributes:v,setAttributes:b}=e,{anchor:w,id:g,preview:h,backgroundColor:k}=v,x=(0,r.useBlockProps)({className:`${t} alignfull`,style:{backgroundColor:k}}),f=(0,r.useInnerBlocksProps)(x,{template:l,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,c.useEffect)((()=>{b({id:`${t}-${d}`})}),[d,t,b]),h?(0,m.jsx)("div",{className:`${t}-preview`,children:(0,m.jsx)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{...e}),(0,m.jsx)("div",{"data-block-id":n,"data-block-js":"true",id:w||g,...f})]})},save:e=>{const{name:o}=i,{name:t,blockId:n}=a(o),{attributes:c}=e,{anchor:s,id:l,backgroundColor:p}=c,u=r.useBlockProps.save({className:`${t} counter alignfull`,style:{backgroundColor:p}});return(0,m.jsx)("div",{"data-block-id":n,"data-block-js":"true",id:s||l,...u,children:(0,m.jsx)(r.InnerBlocks.Content,{})})}})}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var r=t[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.m=o,e=[],n.O=(o,t,i,r)=>{if(!t){var c=1/0;for(p=0;p<e.length;p++){for(var[t,i,r]=e[p],a=!0,s=0;s<t.length;s++)(!1&r||c>=r)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(a=!1,r<c&&(c=r));if(a){e.splice(p--,1);var l=i();void 0!==l&&(o=l)}}return o}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[t,i,r]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var o=n.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&!e;)e=t[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={4782:0,9169:0};n.O.j=o=>0===e[o];var o=(o,t)=>{var i,r,[c,a,s]=t,l=0;if(c.some((o=>0!==e[o]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var p=s(n)}for(o&&o(t);l<c.length;l++)r=c[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},t=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var i=n.O(void 0,[9169],(()=>n(6330)));i=n.O(i)})();