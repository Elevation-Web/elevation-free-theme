(()=>{"use strict";var e,t={6471:(e,t,o)=>{const r=window.wp.blocks,n=JSON.parse('{"title":"Impact, Layout: Default Content Centered","name":"elevation/interior-components--impact-default-content-centered"}'),i=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,l=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=o.p+"images/preview.a7a7d9b1.webp",s=[["elevation/interior-components--custom-container",{containerWidth:"medium"},[["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}],["elevation/interior-components--group",{className:"",color:"ui-base-white"},[["core/heading",{level:3,content:"H3. Heading lorem ipsum",textColor:"ui-base-white"}],["core/paragraph",{content:"Name of Block: Impact, Layout: Default Content Centered. Maximum 20 words. Orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.",align:"center",textColor:"ui-base-white"}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"secondary--outline",text:"Text Button"}]]]]],["elevation/interior-components--spacer",{line:!1,space:"spacer__extra-small"}],["elevation/interior-components--spacer",{line:!0,lineType:"dash",linePosition:"top",space:"spacer__extra-small"}],["elevation/interior-components--group",{tagName:"div",className:"impact-default-content-centered__row",allowedBlocks:["elevation/interior-components--impact-default-content-centered-item"]},[["elevation/interior-components--impact-default-content-centered-item",{value:"45+"}],["elevation/interior-components--impact-default-content-centered-item",{value:"50%"}],["elevation/interior-components--impact-default-content-centered-item",{value:"870+"}],["elevation/interior-components--impact-default-content-centered-item",{value:">60"}]]],["elevation/interior-components--spacer",{line:!0,lineType:"dash",linePosition:"bottom",borderColor:"#8a55b3ff",space:"spacer__extra-small"}],["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}]]]],p=["core/heading","core/paragraph","elevation/interior-components--buttons"],u=window.ReactJSXRuntime,d=e=>{const{attributes:t,setAttributes:o}=e,{backgroundColor:r,borderColor:n}=t,l=(0,i.useSetting)("color.palette");(0,a.useEffect)((()=>{c("backgroundColor"),c("borderColor")}),[]);const c=e=>{if(!t[e].includes("#")){const r=l.reduce(((o,r)=>r.slug==t[e]?r.color:o));r&&o({[e]:r?.color||r})}},s=(e,t)=>{o(t?{[e]:t}:{[e]:"#000"})};return(0,u.jsx)(i.InspectorControls,{children:(0,u.jsx)(i.PanelColorSettings,{title:"Background Color",initialOpen:!1,colorSettings:[{value:r,onChange:e=>{s("backgroundColor",e)},label:"Background Color"},{value:n,onChange:e=>{s("borderColor",e)},label:"Border Color"}]})})},m=window.wp.components,{name:v,title:b}=n;(0,r.registerBlockType)(v,{title:b,icon:{src:(0,u.jsx)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,u.jsx)(m.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:t}=n,{name:o,blockId:r}=l(t),{clientId:m,attributes:v,setAttributes:b}=e,{anchor:g,id:h,preview:w,backgroundColor:f,borderColor:k}=v,C=(0,i.useBlockProps)({className:`${o} alignfull`,style:{backgroundColor:f,"--border-color-impact-default":k}}),x=(0,i.useInnerBlocksProps)(C,{template:s,templateInsertUpdatesSelection:!0,allowedBlocks:p,orientation:"horizontal"});return(0,a.useEffect)((()=>{b({id:`${o}-${m}`})}),[m,o,b]),w?(0,u.jsx)("div",{className:`${o}-preview`,children:(0,u.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{...e}),(0,u.jsx)("div",{"data-block-id":r,"data-block-js":"true",id:g||h,...x})]})},save:e=>{const{name:t}=n,{name:o,blockId:r}=l(t),{attributes:a}=e,{anchor:c,id:s,backgroundColor:p,borderColor:d}=a,m=i.useBlockProps.save({className:`${o} counter alignfull`,style:{backgroundColor:p,"--border-color-impact-default":d}});return(0,u.jsx)("div",{"data-block-id":r,"data-block-js":"false",id:c||s,...m,children:(0,u.jsx)(i.InnerBlocks.Content,{})})}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,n,i)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){for(var[o,n,i]=e[p],l=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(p--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,n,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"})(),(()=>{var e={9488:0,3735:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[a,l,c]=o,s=0;if(a.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(c)var p=c(r)}for(t&&t(o);s<a.length;s++)i=a[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(p)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[3735],(()=>r(6471)));n=r.O(n)})();