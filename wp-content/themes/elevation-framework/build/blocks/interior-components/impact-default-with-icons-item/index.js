(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var i=s.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&!t;)t=i[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.wp.blocks,s=JSON.parse('{"title":"Impact, Layout: Default with Icons Item.","name":"elevation/interior-components--impact-default-with-icons-item"}'),i=window.wp.i18n,a=window.wp.blockEditor,l=window.wp.element,n=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},r=e.p+"images/preview.8a233a34.webp",c=["core/heading","core/paragraph"],o=[["core/paragraph",{fontSize:"body",content:"Maximum 15 words. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue."}]],d=window.wp.components,h=window.ReactJSXRuntime,u=({onClick:e})=>(0,h.jsx)(d.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,i.__)("Remove Image")}),m=({value:e,onSelect:t})=>(0,h.jsx)(a.MediaUploadCheck,{children:(0,h.jsx)(a.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,h.jsx)(d.Button,{onClick:e,variant:"secondary",children:(0,i.__)("Select Image")})})}),v=e=>{const{attributes:t,setAttributes:s}=e,{value:l,remove_comma:n,title_size:r,icon:c}=t;return(0,h.jsxs)(a.InspectorControls,{children:[(0,h.jsxs)(d.PanelBody,{title:(0,i.__)("Impact Settings","elevation"),children:[(0,h.jsx)(d.TextControl,{label:(0,i.__)("Value","elevation"),value:l,onChange:e=>s({value:e})}),(0,h.jsx)(d.ToggleControl,{label:(0,i.__)("Remove Comma","elevation"),checked:n,help:"This applies only to frontpage.",onChange:e=>s({remove_comma:e})}),(0,h.jsx)(d.SelectControl,{label:(0,i.__)("Title Size","elevation"),value:r,options:[{label:"h1",value:"h-1"},{label:"h2",value:"h-2"},{label:"h3",value:"h-3"},{label:"h4",value:"h-4"},{label:"h5",value:"h-5"},{label:"h6",value:"h-6"}],onChange:e=>s({title_size:e})})]}),(0,h.jsx)(d.PanelBody,{title:(0,i.__)("Icon"),children:(0,h.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:c.url?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",children:(0,h.jsx)("img",{src:c.url})}),(0,h.jsx)(u,{onClick:()=>{s({icon:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})]}):(0,h.jsx)(m,{value:c.url,onSelect:e=>{((e,i)=>{const{fullSize:a,srcset:l,sizes:n,alt:r,id:c}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const s=Math.max(...Object.values(e.sizes).map((e=>e.width))),i=`(max-width: ${s}px) 100vw, ${s}px`,a=Object.keys(e.sizes).map((t=>{const s=e.sizes[t];return`${s.url} ${s.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:a,sizes:i,alt:e.alt,id:e.id}}(i);s({[e]:{...t[e],url:a.url,alt:r,id:c,srcset:l,width:a.width,height:a.height,sizes:n}})})("icon",e)}})})})]})},p=({img:e,className:t,lazyload:s=!0,selectorId:i})=>{if(!e?.url)return;const{url:a,alt:l,width:n,height:r,sizes:c,srcset:o,focalPoint:d}=e;let u="center";return d?.x&&d?.y&&(u=`${100*d.x}% ${100*d.y}%`),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{decoding:"async",src:a,alt:l,width:n,height:r,className:t,srcSet:o,sizes:c,loading:s?"lazy":"eager"}),!!d&&(0,h.jsx)("style",{children:`#${i} .${t} {object-position: ${u};}`})]})},{name:x,title:g}=s;(0,t.registerBlockType)(x,{title:g,icon:{src:(0,h.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,h.jsx)(d.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:t}=s,{name:i,blockId:d}=n(t),{clientId:u,attributes:m,setAttributes:p}=e,{id:x,preview:g,value:w,remove_comma:j,title_size:_,icon:b}=m,$=(0,a.useBlockProps)({className:`${i}`});return(0,l.useEffect)((()=>{p({id:`${i}-${u}`})}),[u,i,p]),g?(0,h.jsx)("div",{className:`${i}-preview`,children:(0,h.jsx)("img",{src:r,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{...e}),(0,h.jsxs)("div",{"data-block-id":d,"data-block-js":"true",id:x,...$,children:[(0,h.jsx)("div",{className:`${i}__icon-container no-hover`,children:b?.url&&(0,h.jsx)("img",{src:b.url,className:`${i}__img`})}),(0,h.jsxs)("div",{className:`${i}__content`,children:[(0,h.jsx)("div",{className:`${i}__header`,children:(0,h.jsx)("h2",{className:`${i}__value has-${_}-font-size`,children:(0,h.jsx)(a.RichText,{tagName:"div",className:`${i}__value-value`,value:w,onChange:e=>p({value:e})})})}),(0,h.jsx)(a.InnerBlocks,{template:o,templateInsertUpdatesSelection:!0,allowedBlocks:c,orientation:"horizontal"})]})]})]})},save:e=>{const{name:t}=s,{name:i,blockId:l}=n(t),{attributes:r}=e,{anchor:c,id:o,value:d,remove_comma:u,icon:m,title_size:v}=r,x=a.useBlockProps.save({className:`${i}`});return(0,h.jsxs)("div",{"data-block-id":l,"data-block-js":"false",id:c||o,...x,children:[(0,h.jsx)("div",{className:`${i}__icon-container no-hover`,children:(0,h.jsx)(p,{img:m,className:`${i}__img no-animate`,selectorId:c||o})}),(0,h.jsxs)("div",{className:`${i}__content`,children:[(0,h.jsx)("div",{className:`${i}__header`,children:(0,h.jsx)("h2",{className:`${i}__value has-${v}-font-size`,children:u?(0,h.jsx)("span",{className:`${i}__value-value numscrolleryears`,"data-num":d,children:d}):(0,h.jsx)("span",{className:`${i}__value-value numscroller`,"data-num":d,children:d})})}),(0,h.jsx)(a.InnerBlocks.Content,{})]})]})}})})();
