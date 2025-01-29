(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&"SCRIPT"===s.currentScript.tagName.toUpperCase()&&(t=s.currentScript.src),!t)){var i=s.getElementsByTagName("script");if(i.length)for(var c=i.length-1;c>-1&&(!t||!/^http(s?):/.test(t));)t=i[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.wp.components,s=window.wp.blocks,i=JSON.parse('{"DD":"List Item: Default w/Intro Text+Icons","UU":"elevation/interior-components--lists-default-with-intro-text-icons-item"}'),c=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.element,l=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},o=e.p+"images/preview.a6f4068f.webp",a=["core/paragraph"],d=[["core/heading",{level:6,content:"H6. Subheading lorem ipsum felis eget nunc"}],["core/paragraph",{fontSize:"body",content:"Maximum 10 words. Tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur."}]],h=window.ReactJSXRuntime,u=({onClick:e})=>(0,h.jsx)(t.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,c.__)("Remove Image")}),m=({value:e,onSelect:s})=>(0,h.jsx)(n.MediaUploadCheck,{children:(0,h.jsx)(n.MediaUpload,{onSelect:s,allowedTypes:["image"],value:e,render:({open:e})=>(0,h.jsx)(t.Button,{onClick:e,variant:"secondary",children:(0,c.__)("Select Image")})})}),p=e=>{const{attributes:s,setAttributes:i}=e,{icon:r}=s;return(0,h.jsx)(n.InspectorControls,{children:(0,h.jsx)(t.PanelBody,{title:(0,c.__)("Icon Settings","elevation"),children:(0,h.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:r.url?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",children:(0,h.jsx)("img",{src:r.url})}),(0,h.jsx)(u,{onClick:()=>{var e;e="icon",i({[e]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})]}):(0,h.jsx)(m,{value:r.url,onSelect:e=>{((e,t)=>{const{fullSize:c,srcset:n,sizes:r,alt:l,id:o}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const s=Math.max(...Object.values(e.sizes).map((e=>e.width))),i=`(max-width: ${s}px) 100vw, ${s}px`,c=Object.keys(e.sizes).map((t=>{const s=e.sizes[t];return`${s.url} ${s.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:c,sizes:i,alt:e.alt,id:e.id}}(t);i({[e]:{...s[e],url:c.url,alt:l,id:o,srcset:n,width:c.width,height:c.height,sizes:r}})})("icon",e)}})})})})},v=({img:e,className:t,lazyload:s=!0,selectorId:i})=>{if(!e?.url)return;const{url:c,alt:n,width:r,height:l,sizes:o,srcset:a,focalPoint:d}=e;let u="center";return d?.x&&d?.y&&(u=`${100*d.x}% ${100*d.y}%`),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{decoding:"async",src:c,alt:n,width:r,height:l,className:t,srcSet:a,sizes:o,loading:s?"lazy":"eager"}),!!d&&(0,h.jsx)("style",{children:`#${i} .${t} {object-position: ${u};}`})]})},{UU:w,DD:x}=i;(0,s.registerBlockType)(w,{title:x,icon:{src:(0,h.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,h.jsxs)(t.G,{children:[(0,h.jsx)(t.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,h.jsx)(t.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,h.jsx)(t.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,h.jsx)(t.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{UU:t}=i,{name:s,blockId:c}=l(t),{clientId:u,attributes:m,setAttributes:v}=e,{id:w,anchor:x,preview:g,icon:j}=m;(0,r.useEffect)((()=>{v({id:`${s}-${u}`})}),[u,s,v]);const f=(0,n.useBlockProps)({className:`${s}`});return g?(0,h.jsx)("div",{className:`${s}-preview`,children:(0,h.jsx)("img",{src:o,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{...e}),(0,h.jsx)("div",{"data-block-id":c,id:x||w,...f,children:(0,h.jsxs)("div",{className:`${s}__container`,children:[(0,h.jsx)("div",{className:`${s}__figure`,children:j?.url&&(0,h.jsx)("img",{src:j.url,className:`${s}__icon`,selectorId:x||w})}),(0,h.jsx)("div",{className:`${s}__content`,children:(0,h.jsx)(n.InnerBlocks,{template:d,allowedBlocks:a,templateLock:"all"})})]})})]})},save:e=>{const{UU:t}=i,{name:s,blockId:c}=l(t),{attributes:r}=e,{anchor:o,id:a,icon:d}=r,u=n.useBlockProps.save({className:`${s}`});return(0,h.jsx)("li",{"data-block-id":c,id:o||a,...u,children:(0,h.jsxs)("div",{className:`${s}__container`,children:[(0,h.jsx)("div",{className:`${s}__figure`,children:(0,h.jsx)(v,{img:d,className:`${s}__icon `,selectorId:o||a})}),(0,h.jsx)("div",{className:`${s}__content`,children:(0,h.jsx)(n.InnerBlocks.Content,{})})]})})}})})();