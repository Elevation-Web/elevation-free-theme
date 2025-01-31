(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&"SCRIPT"===i.currentScript.tagName.toUpperCase()&&(t=i.currentScript.src),!t)){var a=i.getElementsByTagName("script");if(a.length)for(var l=a.length-1;l>-1&&(!t||!/^http(s?):/.test(t));)t=a[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.wp.components,i=window.wp.blocks,a=JSON.parse('{"DD":"Card : with Border, image, Title and Links.","UU":"elevation/interior-components--cards-images-with-heading-card"}'),l=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.element,s=e.p+"images/preview.a6f4068f.webp",c=window.ReactJSXRuntime,o=({onClick:e})=>(0,c.jsx)(t.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,l.__)("Remove Image")}),d=({value:e,onSelect:i})=>(0,c.jsx)(n.MediaUploadCheck,{children:(0,c.jsx)(n.MediaUpload,{onSelect:i,allowedTypes:["image"],value:e,render:({open:e})=>(0,c.jsx)(t.Button,{onClick:e,variant:"secondary",children:(0,l.__)("Select Image")})})}),h=({img:e,className:t,lazyload:i=!0,selectorId:a})=>{if(!e?.url)return;const{url:l,alt:n,width:r,height:s,sizes:o,srcset:d,focalPoint:h}=e;let g="center";return h?.x&&h?.y&&(g=`${100*h.x}% ${100*h.y}%`),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{decoding:"async",src:l,alt:n,width:r,height:s,className:t,srcSet:d,sizes:o,loading:i?"lazy":"eager"}),!!h&&(0,c.jsx)("style",{children:`#${a} .${t} {object-position: ${g};}`})]})},g=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},{UU:m,DD:u}=a;(0,i.registerBlockType)(m,{title:u,icon:{src:(0,c.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,c.jsxs)(t.G,{children:[(0,c.jsx)(t.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{UU:i}=a,{name:m,blockId:u}=g(i),{clientId:p,attributes:x,setAttributes:v}=e,{id:w,anchor:j,preview:b,img:k,link:f,tagName:z}=x,{url:y,text:_,target:$,ariaLabel:P}=f;(0,r.useEffect)((()=>{v({id:`${m}-${p}`})}),[p,m,v]);const C=(0,n.useBlockProps)({className:`${m}`}),S={backgroundImage:`url(${k.url})`,backgroundSize:"cover",backgroundPosition:`${100*k.focalPoint?.x}% ${100*k.focalPoint?.y}%`},B=e=>{v({img:{...k,focalPoint:e}})},N=(0,c.jsxs)(n.InspectorControls,{children:[(0,c.jsx)(t.PanelBody,{title:(0,l.__)("Background Image"),children:k.url?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.FocalPointPicker,{url:k.url,value:k.focalPoint,onDragStart:B,onDrag:B,onChange:B}),(0,c.jsx)("div",{style:S}),(0,c.jsx)(o,{onClick:()=>{v({img:{url:"",alt:"",id:0,srcset:"",width:0,height:0,sizes:"",focalPoint:{x:.5,y:.5}}})}})]}):(0,c.jsx)(d,{value:k.url,onSelect:e=>{const{fullSize:t,srcset:i,sizes:a,alt:l,id:n}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const i=Math.max(...Object.values(e.sizes).map((e=>e.width))),a=`(max-width: ${i}px) 100vw, ${i}px`,l=Object.keys(e.sizes).map((t=>{const i=e.sizes[t];return`${i.url} ${i.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:l,sizes:a,alt:e.alt,id:e.id}}(e);v({img:{...k,url:t.url,alt:l,id:n,srcset:i,width:t.width,height:t.height,sizes:a}})}})}),(0,c.jsxs)(t.PanelBody,{title:(0,l.__)("Card Link","elevation"),children:[(0,c.jsxs)(c.Fragment,{children:[y&&(0,c.jsx)("a",{href:y,target:"_blank",style:{display:"block",marginBottom:"20px"},children:y}),(0,c.jsx)("div",{style:{marginBottom:"20px"},children:(0,c.jsx)(n.URLInputButton,{url:y,placeholder:(0,l.__)("Card Link URL...","elevation"),onChange:e=>v({link:{...f,url:e}})})}),(0,c.jsx)(t.ToggleControl,{label:"Open in new tab",checked:$,onChange:e=>{v({link:{...f,target:e}})}})]}),(0,c.jsx)(t.__experimentalInputControl,{value:P,placeholder:"Button Aria Label...",onChange:e=>{v({link:{...f,ariaLabel:e}})}})]}),(0,c.jsx)(t.PanelBody,{title:(0,l.__)("Heading Options","elevation"),children:(0,c.jsx)(t.SelectControl,{label:"Heading Size",value:z,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{v({tagName:e})}})})]});return b?(0,c.jsx)("div",{className:`${m}-preview`,children:(0,c.jsx)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,c.jsxs)(c.Fragment,{children:[N,(0,c.jsxs)("div",{id:j||w,...C,children:[(0,c.jsx)(h,{img:k,className:`${m}__img`,selectorId:j||w}),(0,c.jsx)("div",{className:`${m}__container`,children:(0,c.jsx)(n.RichText,{style:{maxWidth:"100%",textWrap:"wrap",marginBottom:"0px"},tagName:"h"+z,value:_,allowedFormats:[],onChange:e=>{v({link:{...f,text:e}})},placeholder:(0,l.__)("Heading...")})})]})]})},save:e=>{const{UU:t}=a,{name:i,blockId:l}=g(t),{attributes:r}=e,{anchor:s,id:o,img:d,link:m,tagName:u}=r,{url:p,text:x,target:v,ariaLabel:w}=m,j=n.useBlockProps.save({className:`${i} `}),b=w||x,k=v?{target:"_blank"}:{},f=v?{rel:"noopener noreferrer"}:{};return(0,c.jsxs)("div",{id:s||o,...j,children:[(0,c.jsx)(h,{img:d,className:`${i}__img no-animate`,selectorId:s||o}),(0,c.jsx)("div",{className:`${i}__container`,children:(0,c.jsx)("a",{className:`stretched-link wp-block-heading has-h-${u}-font-size`,href:p,"aria-label":b,...k,...f,children:x})})]})}})})();