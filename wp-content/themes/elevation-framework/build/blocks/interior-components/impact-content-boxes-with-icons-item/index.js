(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var l;e.g.importScripts&&(l=e.g.location+"");var t=e.g.document;if(!l&&t&&(t.currentScript&&(l=t.currentScript.src),!l)){var o=t.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&!l;)l=o[s--].src}if(!l)throw new Error("Automatic publicPath is not supported in this browser");l=l.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=l+"../../../"})();const l=window.wp.blocks,t=JSON.parse('{"title":"Impact, Layout: Content Boxes w/Icons Item.","name":"elevation/interior-components--impact-content-boxes-with-icons-item"}'),o=window.wp.i18n,s=window.wp.blockEditor,i=window.wp.element,a=e=>{const l=e.split("/")[1].split("--");return{blockId:l.join("/"),name:l[1]}},n=e.p+"images/preview.b2895575.webp",r=["core/heading","core/paragraph"],c=[["core/paragraph",{fontSize:"body",content:"Maximum 15 words. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue."}]],d=window.wp.components,u=window.ReactJSXRuntime,h=({onClick:e})=>(0,u.jsx)(d.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,o.__)("Remove Image")}),m=({value:e,onSelect:l})=>(0,u.jsx)(s.MediaUploadCheck,{children:(0,u.jsx)(s.MediaUpload,{onSelect:l,allowedTypes:["image"],value:e,render:({open:e})=>(0,u.jsx)(d.Button,{onClick:e,variant:"secondary",children:(0,o.__)("Select Image")})})}),v=e=>{const{attributes:l,setAttributes:t}=e,a=(0,s.useSetting)("color.palette"),{value:n,remove_comma:r,title_size:c,icon:v,borderColor:p,backgroundColor:g}=l;(0,i.useEffect)((()=>{x("borderColor"),x("backgroundColor")}),[]);const x=e=>{if(!l[e].includes("#")){const o=a.reduce(((t,o)=>o.slug==l[e]?o.color:t));o&&t({[e]:o?.color||o})}},b=(e,l)=>{t(l?{[e]:l}:{[e]:"#000"})};return(0,u.jsxs)(s.InspectorControls,{children:[(0,u.jsxs)(d.PanelBody,{title:(0,o.__)("Impact Settings","elevation"),children:[(0,u.jsx)(d.TextControl,{label:(0,o.__)("Value","elevation"),value:n,onChange:e=>t({value:e})}),(0,u.jsx)(d.ToggleControl,{label:(0,o.__)("Remove Comma","elevation"),checked:r,help:"This applies only to frontpage.",onChange:e=>t({remove_comma:e})}),(0,u.jsx)(d.SelectControl,{label:(0,o.__)("Title Size","elevation"),value:c,options:[{label:"h1",value:"h-1"},{label:"h2",value:"h-2"},{label:"h3",value:"h-3"},{label:"h4",value:"h-4"},{label:"h5",value:"h-5"},{label:"h6",value:"h-6"}],onChange:e=>t({title_size:e})})]}),(0,u.jsx)(d.PanelBody,{title:(0,o.__)("Icon"),children:(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:v.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",children:(0,u.jsx)("img",{src:v.url})}),(0,u.jsx)(h,{onClick:()=>{t({icon:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})]}):(0,u.jsx)(m,{value:v.url,onSelect:e=>{((e,o)=>{const{fullSize:s,srcset:i,sizes:a,alt:n,id:r}=function(e,l="full"){if(!e||!e.sizes||!e.sizes.full)return null;const t=Math.max(...Object.values(e.sizes).map((e=>e.width))),o=`(max-width: ${t}px) 100vw, ${t}px`,s=Object.keys(e.sizes).map((l=>{const t=e.sizes[l];return`${t.url} ${t.width}w`})).join(", ");return{fullSize:e.sizes[l],srcset:s,sizes:o,alt:e.alt,id:e.id}}(o);t({[e]:{...l[e],url:s.url,alt:n,id:r,srcset:i,width:s.width,height:s.height,sizes:a}})})("icon",e)}})})}),(0,u.jsx)(s.PanelColorSettings,{title:"Colors Options",initialOpen:!1,colorSettings:[{value:g,onChange:e=>{b("backgroundColor",e)},label:"Background Color"},{value:p,onChange:e=>{b("borderColor",e)},label:"Border Color"}]})]})},p=({img:e,className:l,lazyload:t=!0,selectorId:o})=>{if(!e?.url)return;const{url:s,alt:i,width:a,height:n,sizes:r,srcset:c,focalPoint:d}=e;let h="center";return d?.x&&d?.y&&(h=`${100*d.x}% ${100*d.y}%`),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{decoding:"async",src:s,alt:i,width:a,height:n,className:l,srcSet:c,sizes:r,loading:t?"lazy":"eager"}),!!d&&(0,u.jsx)("style",{children:`#${o} .${l} {object-position: ${h};}`})]})},{name:g,title:x}=t;(0,l.registerBlockType)(g,{title:x,icon:{src:(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,u.jsx)(d.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{name:l}=t,{name:o,blockId:d}=a(l),{clientId:h,attributes:m,setAttributes:p}=e,{id:g,preview:x,value:b,remove_comma:j,title_size:w,icon:_,borderColor:C,backgroundColor:k}=m,$=(0,s.useBlockProps)({className:`${o}`,style:{"--border-color":C,"--background-color":k}});return(0,i.useEffect)((()=>{p({id:`${o}-${h}`})}),[h,o,p]),x?(0,u.jsx)("div",{className:`${o}-preview`,children:(0,u.jsx)("img",{src:n,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{...e}),(0,u.jsxs)("div",{"data-block-id":d,"data-block-js":"true",id:g,...$,children:[(0,u.jsxs)("div",{className:`${o}__header`,children:[(0,u.jsx)("div",{className:`${o}__icon-container no-hover`,children:_?.url&&(0,u.jsx)("img",{src:_.url,className:`${o}__img`})}),(0,u.jsx)("div",{children:(0,u.jsx)("h2",{className:`${o}__value has-${w}-font-size`,children:(0,u.jsx)(s.RichText,{tagName:"div",className:`${o}__value-value`,value:b,onChange:e=>p({value:e})})})})]}),(0,u.jsx)("div",{className:`${o}__content`,children:(0,u.jsx)(s.InnerBlocks,{template:c,templateInsertUpdatesSelection:!0,allowedBlocks:r,orientation:"horizontal"})})]})]})},save:e=>{const{name:l}=t,{name:o,blockId:i}=a(l),{attributes:n}=e,{anchor:r,id:c,value:d,remove_comma:h,icon:m,title_size:v,borderColor:g,backgroundColor:x}=n,b=s.useBlockProps.save({className:`${o}`,style:{"--border-color":g,"--background-color":x}});return(0,u.jsxs)("div",{"data-block-id":i,"data-block-js":"false",id:r||c,...b,children:[(0,u.jsxs)("div",{className:`${o}__header`,children:[(0,u.jsx)("div",{className:`${o}__icon-container no-hover`,children:(0,u.jsx)(p,{img:m,className:`${o}__img no-animate`,selectorId:r||c})}),(0,u.jsx)("div",{children:(0,u.jsx)("h2",{className:`${o}__value has-${v}-font-size`,children:h?(0,u.jsx)("span",{className:`${o}__value-value numscrolleryears`,"data-num":d,children:d}):(0,u.jsx)("span",{className:`${o}__value-value numscroller`,"data-num":d,children:d})})})]}),(0,u.jsx)("div",{className:`${o}__content`,children:(0,u.jsx)(s.InnerBlocks.Content,{})})]})}})})();