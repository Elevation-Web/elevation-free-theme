(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var i=a.getElementsByTagName("script");if(i.length)for(var l=i.length-1;l>-1&&!t;)t=i[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.wp.components,a=window.wp.blocks,i=JSON.parse('{"title":"Card: With Background Image, Title and subtitle.","name":"elevation/interior-components--cards-background-images-card"}'),l=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.element,s=e.p+"images/preview.a6f4068f.webp",c=window.ReactJSXRuntime,o=({onClick:e})=>(0,c.jsx)(t.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,l.__)("Remove Image")}),d=({value:e,onSelect:a})=>(0,c.jsx)(n.MediaUploadCheck,{children:(0,c.jsx)(n.MediaUpload,{onSelect:a,allowedTypes:["image"],value:e,render:({open:e})=>(0,c.jsx)(t.Button,{onClick:e,variant:"secondary",children:(0,l.__)("Select Image")})})}),h=({img:e,className:t,lazyload:a=!0,selectorId:i})=>{if(!e?.url)return;const{url:l,alt:n,width:r,height:s,sizes:o,srcset:d,focalPoint:h}=e;let g="center";return h?.x&&h?.y&&(g=`${100*h.x}% ${100*h.y}%`),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{decoding:"async",src:l,alt:n,width:r,height:s,className:t,srcSet:d,sizes:o,loading:a?"lazy":"eager"}),!!h&&(0,c.jsx)("style",{children:`#${i} .${t} {object-position: ${g};}`})]})},g=["core/heading","core/paragraph"],m=[["core/paragraph",{fontSize:"body",content:"Subheading",textColor:"$ui-base-white"}]],u=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},{name:x,title:p}=i;(0,a.registerBlockType)(x,{title:p,icon:{src:(0,c.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,c.jsxs)(t.G,{children:[(0,c.jsx)(t.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.jsx)(t.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:a}=i,{name:x,blockId:p}=u(a),{clientId:v,attributes:w,setAttributes:j}=e,{id:b,anchor:k,preview:f,img:_,link:z,tagName:$}=w,{url:y,text:C,target:P,ariaLabel:B}=z;(0,r.useEffect)((()=>{j({id:`${x}-${v}`})}),[v,x,j]);const N=(0,n.useBlockProps)({className:`${x}`}),S={backgroundImage:`url(${_.url})`,backgroundSize:"cover",backgroundPosition:`${100*_.focalPoint?.x}% ${100*_.focalPoint?.y}%`},I=e=>{j({img:{..._,focalPoint:e}})},L=(0,c.jsxs)(n.InspectorControls,{children:[(0,c.jsx)(t.PanelBody,{title:(0,l.__)("Background Image"),children:_.url?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.FocalPointPicker,{url:_.url,value:_.focalPoint,onDragStart:I,onDrag:I,onChange:I}),(0,c.jsx)("div",{style:S}),(0,c.jsx)(o,{onClick:()=>{j({img:{url:"",alt:"",id:0,srcset:"",width:0,height:0,sizes:"",focalPoint:{x:.5,y:.5}}})}})]}):(0,c.jsx)(d,{value:_.url,onSelect:e=>{const{fullSize:t,srcset:a,sizes:i,alt:l,id:n}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const a=Math.max(...Object.values(e.sizes).map((e=>e.width))),i=`(max-width: ${a}px) 100vw, ${a}px`,l=Object.keys(e.sizes).map((t=>{const a=e.sizes[t];return`${a.url} ${a.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:l,sizes:i,alt:e.alt,id:e.id}}(e);j({img:{..._,url:t.url,alt:l,id:n,srcset:a,width:t.width,height:t.height,sizes:i}})}})}),(0,c.jsxs)(t.PanelBody,{title:(0,l.__)("Card Link","elevation"),children:[(0,c.jsxs)(c.Fragment,{children:[y&&(0,c.jsx)("a",{href:y,target:"_blank",style:{display:"block",marginBottom:"20px"},children:y}),(0,c.jsx)("div",{style:{marginBottom:"20px"},children:(0,c.jsx)(n.URLInputButton,{url:y,placeholder:(0,l.__)("Card Link URL...","elevation"),onChange:e=>j({link:{...z,url:e}})})}),(0,c.jsx)(t.ToggleControl,{label:"Open in new tab",checked:P,onChange:e=>{j({link:{...z,target:e}})}})]}),(0,c.jsx)(t.__experimentalInputControl,{value:B,placeholder:"Button Aria Label...",onChange:e=>{j({link:{...z,ariaLabel:e}})}})]}),(0,c.jsx)(t.PanelBody,{title:(0,l.__)("Heading Options","elevation"),children:(0,c.jsx)(t.SelectControl,{label:"Heading Size",value:$,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{j({tagName:e})}})})]});return f?(0,c.jsx)("div",{className:`${x}-preview`,children:(0,c.jsx)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,c.jsxs)(c.Fragment,{children:[L,(0,c.jsxs)("div",{"data-block-id":p,id:k||b,...N,children:[(0,c.jsx)("div",{className:`${x}__figure`,children:(0,c.jsx)(h,{img:_,className:`${x}__img`,selectorId:k||b})}),(0,c.jsxs)("div",{className:`${x}__container`,children:[(0,c.jsx)(n.InnerBlocks,{template:m,allowedBlocks:g,templateLock:"all"}),(0,c.jsx)(n.RichText,{style:{maxWidth:"100%",textWrap:"wrap",margin:"0px"},className:"is-white",tagName:"h"+$,value:C,allowedFormats:!1,onChange:e=>{j({link:{...z,text:e}})},placeholder:(0,l.__)("Heading...")})]})]})]})},save:e=>{const{name:t}=i,{name:a,blockId:l}=u(t),{attributes:r}=e,{anchor:s,id:o,img:d,tagName:g,link:m}=r,{url:x,text:p,target:v,ariaLabel:w}=m,j=n.useBlockProps.save({className:`${a} `}),b=w||p,k=v?{target:"_blank"}:{},f=v?{rel:"noopener noreferrer"}:{};return(0,c.jsxs)("div",{"data-block-id":l,id:s||o,...j,children:[(0,c.jsx)("div",{className:`${a}__figure no-animate`,children:(0,c.jsx)(h,{img:d,className:`${a}__img`,selectorId:s||o})}),(0,c.jsxs)("div",{className:`${a}__container`,children:[(0,c.jsx)(n.InnerBlocks.Content,{}),(0,c.jsx)("a",{className:`stretched-link wp-block-heading has-h-${g}-font-size`,href:x,"aria-label":b,...k,...f,children:p})]})]})}})})();