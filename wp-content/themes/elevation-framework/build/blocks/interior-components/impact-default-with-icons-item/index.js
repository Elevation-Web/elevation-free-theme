(()=>{"use strict";var e,a={1135:(e,a,l)=>{const t=window.wp.blocks,s=JSON.parse('{"title":"Impact, Layout: Default with Icons Item.","name":"elevation/interior-components--impact-default-with-icons-item"}'),i=window.wp.i18n,r=window.wp.blockEditor,n=window.wp.element,o=e=>{const a=e.split("/")[1].split("--");return{blockId:a.join("/"),name:a[1]}},c=l.p+"images/preview.8a233a34.webp",u=["core/heading","core/paragraph"],d=[["core/paragraph",{fontSize:"body",content:"Maximum 15 words. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue."}]],h=window.wp.components,v=window.ReactJSXRuntime,m=({onClick:e})=>(0,v.jsx)(h.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,i.__)("Remove Image")}),p=({value:e,onSelect:a})=>(0,v.jsx)(r.MediaUploadCheck,{children:(0,v.jsx)(r.MediaUpload,{onSelect:a,allowedTypes:["image"],value:e,render:({open:e})=>(0,v.jsx)(h.Button,{onClick:e,variant:"secondary",children:(0,i.__)("Select Image")})})}),_=e=>{const{attributes:a,setAttributes:l}=e,{before_value:t,value:s,after_value:n,remove_comma:o,title_size:c,icon:u}=a;return(0,v.jsxs)(r.InspectorControls,{children:[(0,v.jsxs)(h.PanelBody,{title:(0,i.__)("Impact Settings","elevation"),children:[(0,v.jsx)(h.TextControl,{label:(0,i.__)("Before Value","elevation"),value:t,onChange:e=>l({before_value:e})}),(0,v.jsx)(h.TextControl,{label:(0,i.__)("Value","elevation"),value:s,onChange:e=>l({value:e})}),(0,v.jsx)(h.TextControl,{label:(0,i.__)("After Value","elevation"),value:n,onChange:e=>l({after_value:e})}),(0,v.jsx)(h.ToggleControl,{label:(0,i.__)("Remove Comma","elevation"),checked:o,onChange:e=>l({remove_comma:e})}),(0,v.jsx)(h.SelectControl,{label:(0,i.__)("Title Size","elevation"),value:c,options:[{label:"h1",value:"h-1"},{label:"h2",value:"h-2"},{label:"h3",value:"h-3"},{label:"h4",value:"h-4"},{label:"h5",value:"h-5"},{label:"h6",value:"h-6"}],onChange:e=>l({title_size:e})})]}),(0,v.jsx)(h.PanelBody,{title:(0,i.__)("Icon"),children:(0,v.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:u.url?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",children:(0,v.jsx)("img",{src:u.url})}),(0,v.jsx)(m,{onClick:()=>{l({icon:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})]}):(0,v.jsx)(p,{value:u.url,onSelect:e=>{((e,t)=>{const{fullSize:s,srcset:i,sizes:r,alt:n,id:o}=function(e,a="full"){if(!e||!e.sizes||!e.sizes.full)return null;const l=Math.max(...Object.values(e.sizes).map((e=>e.width))),t=`(max-width: ${l}px) 100vw, ${l}px`,s=Object.keys(e.sizes).map((a=>{const l=e.sizes[a];return`${l.url} ${l.width}w`})).join(", ");return{fullSize:e.sizes[a],srcset:s,sizes:t,alt:e.alt,id:e.id}}(t);l({[e]:{...a[e],url:s.url,alt:n,id:o,srcset:i,width:s.width,height:s.height,sizes:r}})})("icon",e)}})})})]})},x=({img:e,className:a,lazyload:l=!0,selectorId:t})=>{if(!e?.url)return;const{url:s,alt:i,width:r,height:n,sizes:o,srcset:c,focalPoint:u}=e;let d="center";return u?.x&&u?.y&&(d=`${100*u.x}% ${100*u.y}%`),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{decoding:"async",src:s,alt:i,width:r,height:n,className:a,srcSet:c,sizes:o,loading:l?"lazy":"eager"}),!!u&&(0,v.jsx)("style",{children:`#${t} .${a} {object-position: ${d};}`})]})},{name:g,title:j}=s;(0,t.registerBlockType)(g,{title:j,icon:{src:(0,v.jsx)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,v.jsx)(h.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:a}=s,{name:l,blockId:t}=o(a),{clientId:i,attributes:h,setAttributes:m}=e,{id:p,preview:x,before_value:g,value:j,after_value:w,remove_comma:f,title_size:b,icon:$}=h,k=(0,r.useBlockProps)({className:`${l}`});return(0,n.useEffect)((()=>{m({id:`${l}-${i}`})}),[i,l,m]),x?(0,v.jsx)("div",{className:`${l}-preview`,children:(0,v.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,{...e}),(0,v.jsxs)("div",{"data-block-id":t,"data-block-js":"true",id:p,...k,children:[(0,v.jsx)("div",{className:`${l}__icon-container no-hover`,children:$?.url&&(0,v.jsx)("img",{src:$.url,className:`${l}__img`})}),(0,v.jsxs)("div",{className:`${l}__content`,children:[(0,v.jsx)("div",{className:`${l}__header`,children:(0,v.jsxs)("h2",{className:`${l}__value has-${b}-font-size`,children:[g&&(0,v.jsx)(r.RichText,{tagName:"div",className:`${l}__value-before`,value:g,onChange:e=>m({before_value:e})}),(0,v.jsx)(r.RichText,{tagName:"div",className:`${l}__value-value`,value:f?j.toString():j.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),onChange:e=>m({value:e})}),w&&(0,v.jsx)(r.RichText,{tagName:"div",className:`${l}__value-after`,value:w,onChange:e=>m({after_value:e})})]})}),(0,v.jsx)(r.InnerBlocks,{template:d,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"horizontal"})]})]})]})},save:e=>{const{name:a}=s,{name:l,blockId:t}=o(a),{attributes:i}=e,{anchor:n,id:c,value:u,before_value:d,after_value:h,remove_comma:m,icon:p,title_size:_}=i,g=r.useBlockProps.save({className:`${l}`});return(0,v.jsxs)("div",{"data-block-id":t,"data-block-js":"false",id:n||c,...g,children:[(0,v.jsx)("div",{className:`${l}__icon-container no-hover`,children:(0,v.jsx)(x,{img:p,className:`${l}__img no-animate`,selectorId:n||c})}),(0,v.jsxs)("div",{className:`${l}__content`,children:[(0,v.jsx)("div",{className:`${l}__header`,children:(0,v.jsxs)("h2",{className:`${l}__value has-${_}-font-size`,children:[(0,v.jsx)("span",{className:`${l}__value-before`,children:d}),m?(0,v.jsx)("span",{className:`${l}__value-value numscrolleryears`,"data-num":u,children:u}):(0,v.jsx)("span",{className:`${l}__value-value numscroller`,"data-num":u,children:u}),(0,v.jsx)("span",{className:`${l}__value-after`,children:h})]})}),(0,v.jsx)(r.InnerBlocks.Content,{})]})]})}})}},l={};function t(e){var s=l[e];if(void 0!==s)return s.exports;var i=l[e]={exports:{}};return a[e](i,i.exports,t),i.exports}t.m=a,e=[],t.O=(a,l,s,i)=>{if(!l){var r=1/0;for(u=0;u<e.length;u++){for(var[l,s,i]=e[u],n=!0,o=0;o<l.length;o++)(!1&i||r>=i)&&Object.keys(t.O).every((e=>t.O[e](l[o])))?l.splice(o--,1):(n=!1,i<r&&(r=i));if(n){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[l,s,i]},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var a=t.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var l=a.getElementsByTagName("script");if(l.length)for(var s=l.length-1;s>-1&&!e;)e=l[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../../../"})(),(()=>{var e={8222:0,2100:0};t.O.j=a=>0===e[a];var a=(a,l)=>{var s,i,[r,n,o]=l,c=0;if(r.some((a=>0!==e[a]))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(o)var u=o(t)}for(a&&a(l);c<r.length;c++)i=r[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},l=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var s=t.O(void 0,[2100],(()=>t(1135)));s=t.O(s)})();