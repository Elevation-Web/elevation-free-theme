(()=>{"use strict";var e,t={5690:(e,t,o)=>{const r=window.wp.blocks,i=JSON.parse('{"DD":"Impact, Layout: Vertical Image","UU":"elevation/interior-components--impact-vertical-image"}'),n=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,c=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},l=o.p+"images/preview.7edb33fd.webp",s=[["elevation/interior-components--custom-container",{containerWidth:"large"},[["elevation/interior-components--group",{className:"",color:"ui-base-white",className:"impact-vertical-image__container",backgroundColor:"ui-background-light-01"},[["elevation/interior-components--image-with-srcset",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-vertical-image/images/image.webp"}}],["elevation/interior-components--group",{className:"",color:"ui-base-white",className:"impact-vertical-image__content-wrapper"},[["core/heading",{level:3,content:"H3. Heading lorem ipsum"}],["core/paragraph",{content:"Maximum 20 words. Orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci.",align:"center"}],["elevation/interior-components--group",{className:"",color:"ui-base-white"},[["elevation/interior-components--spacer",{space:"spacer__extra-small"}],["elevation/interior-components--group",{tagName:"div",className:"impact-vertical-image__row"},[["elevation/interior-components--impact-vertical-image-item",{value:"50+"}],["elevation/interior-components--impact-vertical-image-item",{value:"45%"}],["elevation/interior-components--impact-vertical-image-item",{value:"8700+"}],["elevation/interior-components--impact-vertical-image-item",{value:">60"}]]],["elevation/interior-components--spacer",{line:!0,space:"spacer__extra-small",linePosition:"bottom"}],["elevation/interior-components--spacer",{space:"spacer__extra-small"}],["elevation/interior-components--buttons",{layout:{type:"flex",justifyContent:"center"}},[["elevation/interior-components--button",{btnStyle:"secondary--outline",text:"Text Button"}]]]]]]]]]]]],p=["core/heading","core/paragraph","elevation/interior-components--buttons"],m=window.ReactJSXRuntime,u=e=>{const{attributes:t,setAttributes:o}=e,{backgroundColor:r}=t,i=(0,n.useSetting)("color.palette");(0,a.useEffect)((()=>{c("backgroundColor")}),[]);const c=e=>{if(!t[e].includes("#")){const r=i.reduce(((o,r)=>r.slug==t[e]?r.color:o));r&&o({[e]:r?.color||r})}};return(0,m.jsx)(n.InspectorControls,{children:(0,m.jsx)(n.PanelColorSettings,{title:"Background Color",initialOpen:!1,colorSettings:[{value:r,onChange:e=>{var t,r;t="backgroundColor",o((r=e)?{[t]:r}:{[t]:"#000"})},label:"Background Color"}]})})},g=window.wp.components,{UU:v,DD:d}=i;(0,r.registerBlockType)(v,{title:d,icon:{src:(0,m.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,m.jsx)(g.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{UU:t}=i,{name:o,blockId:r}=c(t),{clientId:g,attributes:v,setAttributes:d}=e,{anchor:w,id:b,preview:h,backgroundColor:k}=v,f=(0,n.useBlockProps)({className:`${o} alignfull`,style:{backgroundColor:k}}),x=(0,n.useInnerBlocksProps)(f,{template:s,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,a.useEffect)((()=>{d({id:`${o}-${g}`})}),[g,o,d]),h?(0,m.jsx)("div",{className:`${o}-preview`,children:(0,m.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{...e}),(0,m.jsx)("div",{"data-block-id":r,"data-block-js":"true",id:w||b,...x})]})},save:e=>{const{UU:t}=i,{name:o,blockId:r}=c(t),{attributes:a}=e,{anchor:l,id:s,backgroundColor:p}=a,u=n.useBlockProps.save({className:`${o} counter alignfull`,style:{"--background-color":p}});return(0,m.jsx)("div",{"data-block-id":r,"data-block-js":"true",id:l||s,...u,children:(0,m.jsx)(n.InnerBlocks.Content,{})})}})}},o={};function r(e){var i=o[e];if(void 0!==i)return i.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,i,n)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,i,n]=e[p],c=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(c=!1,n<a&&(a=n));if(c){e.splice(p--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[o,i,n]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"})(),(()=>{var e={7028:0,4108:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var i,n,[a,c,l]=o,s=0;if(a.some((t=>0!==e[t]))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(l)var p=l(r)}for(t&&t(o);s<a.length;s++)n=a[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=r.O(void 0,[4108],(()=>r(5690)));i=r.O(i)})();