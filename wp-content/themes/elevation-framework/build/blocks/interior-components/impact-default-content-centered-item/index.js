(()=>{"use strict";var e,t={3954:(e,t,a)=>{const l=window.wp.blocks,o=JSON.parse('{"title":"Impact, Layout: Default Content Centered Item.","name":"elevation/interior-components--impact-default-content-centered-item"}'),r=window.wp.i18n,n=window.wp.blockEditor,s=window.wp.element,i=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},c=a.p+"images/preview.a7a7d9b1.webp",u=["core/heading","core/paragraph"],h=[["core/paragraph",{fontSize:"body",content:"Maximum 5 words. Integer malesuada nunc vel risus."}]],v=window.wp.components,d=window.ReactJSXRuntime,m=e=>{const{attributes:t,setAttributes:a}=e,{value:l,remove_comma:o,title_size:i,color:c}=t,u=(0,n.useSetting)("color.palette");(0,s.useEffect)((()=>{h("color")}),[]);const h=e=>{if(!t[e].includes("#")){const l=u.reduce(((a,l)=>l.slug==t[e]?l.color:a));l&&a({[e]:l?.color||l})}};return(0,d.jsxs)(n.InspectorControls,{children:[(0,d.jsxs)(v.PanelBody,{title:(0,r.__)("Impact Settings","elevation"),children:[(0,d.jsx)(v.TextControl,{label:(0,r.__)("Value","elevation"),value:l,onChange:e=>a({value:e})}),(0,d.jsx)(v.ToggleControl,{label:(0,r.__)("Remove Comma","elevation"),checked:o,help:"This applies only to frontpage.",onChange:e=>a({remove_comma:e})}),(0,d.jsx)(v.SelectControl,{label:(0,r.__)("Title Size","elevation"),value:i,options:[{label:"h1",value:"h-1"},{label:"h2",value:"h-2"},{label:"h3",value:"h-3"},{label:"h4",value:"h-4"},{label:"h5",value:"h-5"},{label:"h6",value:"h-6"}],onChange:e=>a({title_size:e})})]}),(0,d.jsx)(n.PanelColorSettings,{title:"Color Settings",initialOpen:!1,colorSettings:[{value:c,onChange:e=>{var t,l;t="color",a((l=e)?{[t]:l}:{[t]:"#000"})},label:"Text Color"}]})]})},{name:p,title:w}=o;(0,l.registerBlockType)(p,{title:w,icon:{src:(0,d.jsx)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,d.jsx)(v.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:t}=o,{name:a,blockId:l}=i(t),{clientId:r,attributes:v,setAttributes:p}=e,{id:w,preview:b,value:g,remove_comma:x,title_size:_,color:f}=v,j=(0,n.useBlockProps)({className:`${a}`,style:{"--color":f}});return(0,s.useEffect)((()=>{p({id:`${a}-${r}`})}),[r,a,p]),b?(0,d.jsx)("div",{className:`${a}-preview`,children:(0,d.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{...e}),(0,d.jsxs)("div",{"data-block-id":l,"data-block-js":"true",id:w,...j,children:[(0,d.jsx)("div",{className:`${a}__header`,children:(0,d.jsx)("h2",{className:`${a}__value has-${_}-font-size`,children:(0,d.jsx)(n.RichText,{tagName:"div",className:`${a}__value-value`,value:g,onChange:e=>p({value:e})})})}),(0,d.jsx)("div",{className:`${a}__content`,children:(0,d.jsx)(n.InnerBlocks,{template:h,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"horizontal"})})]})]})},save:e=>{const{name:t}=o,{name:a,blockId:l}=i(t),{attributes:r}=e,{anchor:s,id:c,value:u,remove_comma:h,title_size:v,color:m}=r,p=n.useBlockProps.save({className:`${a}`,style:{"--color":m}});return(0,d.jsxs)("div",{"data-block-id":l,"data-block-js":"false",id:s||c,...p,children:[(0,d.jsx)("div",{className:`${a}__header`,children:(0,d.jsx)("h2",{className:`${a}__value has-${v}-font-size`,children:h?(0,d.jsx)("span",{className:`${a}__value-value numscrolleryears`,"data-num":u,children:u}):(0,d.jsx)("span",{className:`${a}__value-value numscroller`,"data-num":u,children:u})})}),(0,d.jsx)("div",{className:`${a}__content`,children:(0,d.jsx)(n.InnerBlocks.Content,{})})]})}})}},a={};function l(e){var o=a[e];if(void 0!==o)return o.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,a,o,r)=>{if(!a){var n=1/0;for(u=0;u<e.length;u++){for(var[a,o,r]=e[u],s=!0,i=0;i<a.length;i++)(!1&r||n>=r)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(s=!1,r<n&&(n=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../../../"})(),(()=>{var e={2577:0,7852:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var o,r,[n,s,i]=a,c=0;if(n.some((t=>0!==e[t]))){for(o in s)l.o(s,o)&&(l.m[o]=s[o]);if(i)var u=i(l)}for(t&&t(a);c<n.length;c++)r=n[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},a=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=l.O(void 0,[7852],(()=>l(3954)));o=l.O(o)})();