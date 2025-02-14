(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var l=a.getElementsByTagName("script");if(l.length)for(var n=l.length-1;n>-1&&!t;)t=l[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"})();const t=window.React,a=window.wp.components,l=window.wp.blocks,n=JSON.parse('{"title":"Card: With Background Image, Title and subtitle.","name":"elevation/interior-components--cards-background-images-card"}'),r=window.wp.i18n,c=window.wp.blockEditor,i=window.wp.element,o=e.p+"images/preview.a6f4068f.webp",s=({onClick:e})=>(0,t.createElement)(a.Button,{isDestructive:!0,variant:"secondary",onClick:e},(0,r.__)("Remove Image")),m=({value:e,onSelect:l})=>(0,t.createElement)(c.MediaUploadCheck,null,(0,t.createElement)(c.MediaUpload,{onSelect:l,allowedTypes:["image"],value:e,render:({open:e})=>(0,t.createElement)(a.Button,{onClick:e,variant:"secondary"},(0,r.__)("Select Image"))})),d=({img:e,className:a,lazyload:l=!0,selectorId:n})=>{if(!e?.url)return;const{url:r,alt:c,width:i,height:o,sizes:s,srcset:m,focalPoint:d}=e;let u="center";return d?.x&&d?.y&&(u=`${100*d.x}% ${100*d.y}%`),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("img",{decoding:"async",src:r,alt:c,width:i,height:o,className:a,srcSet:m,sizes:s,loading:l?"lazy":"eager"}),!!d&&(0,t.createElement)("style",null,`#${n} .${a} {object-position: ${u};}`))},u=["core/heading","core/paragraph"],h=[["core/paragraph",{fontSize:"body",content:"Subheading",textColor:"$ui-base-white"}]],g=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},{name:p,title:v}=n;(0,l.registerBlockType)(p,{title:v,icon:{src:(0,t.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,t.createElement)(a.G,null,(0,t.createElement)(a.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,t.createElement)(a.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,t.createElement)(a.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,t.createElement)(a.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:e=>{const{name:l}=n,{name:p,blockId:v}=g(l),{clientId:w,attributes:E,setAttributes:b}=e,{id:k,anchor:f,preview:_,img:z,link:$,tagName:y}=E,{url:x,text:C,target:P,ariaLabel:B}=$;(0,i.useEffect)((()=>{b({id:`${p}-${w}`})}),[w,p,b]);const N=(0,c.useBlockProps)({className:`${p}`}),S={backgroundImage:`url(${z.url})`,backgroundSize:"cover",backgroundPosition:`${100*z.focalPoint?.x}% ${100*z.focalPoint?.y}%`},I=e=>{b({img:{...z,focalPoint:e}})},L=(0,t.createElement)(c.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:(0,r.__)("Background Image")},z.url?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.FocalPointPicker,{url:z.url,value:z.focalPoint,onDragStart:I,onDrag:I,onChange:I}),(0,t.createElement)("div",{style:S}),(0,t.createElement)(s,{onClick:()=>{b({img:{url:"",alt:"",id:0,srcset:"",width:0,height:0,sizes:"",focalPoint:{x:.5,y:.5}}})}})):(0,t.createElement)(m,{value:z.url,onSelect:e=>{const{fullSize:t,srcset:a,sizes:l,alt:n,id:r}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const a=Math.max(...Object.values(e.sizes).map((e=>e.width))),l=`(max-width: ${a}px) 100vw, ${a}px`,n=Object.keys(e.sizes).map((t=>{const a=e.sizes[t];return`${a.url} ${a.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:n,sizes:l,alt:e.alt,id:e.id}}(e);b({img:{...z,url:t.url,alt:n,id:r,srcset:a,width:t.width,height:t.height,sizes:l}})}})),(0,t.createElement)(a.PanelBody,{title:(0,r.__)("Card Link","elevation")},(0,t.createElement)(t.Fragment,null,x&&(0,t.createElement)("a",{href:x,target:"_blank",style:{display:"block",marginBottom:"20px"}},x),(0,t.createElement)("div",{style:{marginBottom:"20px"}},(0,t.createElement)(c.URLInputButton,{url:x,placeholder:(0,r.__)("Card Link URL...","elevation"),onChange:e=>b({link:{...$,url:e}})})),(0,t.createElement)(a.ToggleControl,{label:"Open in new tab",checked:P,onChange:e=>{b({link:{...$,target:e}})}})),(0,t.createElement)(a.__experimentalInputControl,{value:B,placeholder:"Button Aria Label...",onChange:e=>{b({link:{...$,ariaLabel:e}})}})),(0,t.createElement)(a.PanelBody,{title:(0,r.__)("Heading Options","elevation")},(0,t.createElement)(a.SelectControl,{label:"Heading Size",value:y,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{b({tagName:e})}})));return _?(0,t.createElement)("div",{className:`${p}-preview`},(0,t.createElement)("img",{src:o,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,t.createElement)(t.Fragment,null,L,(0,t.createElement)("div",{id:f||k,...N},(0,t.createElement)("div",{className:`${p}__figure`},(0,t.createElement)(d,{img:z,className:`${p}__img`,selectorId:f||k})),(0,t.createElement)("div",{className:`${p}__container`},(0,t.createElement)(c.InnerBlocks,{template:h,allowedBlocks:u,templateLock:"all"}),(0,t.createElement)(c.RichText,{style:{maxWidth:"100%",textWrap:"wrap",margin:"0px"},className:"is-white",tagName:"h"+y,value:C,allowedFormats:!1,onChange:e=>{b({link:{...$,text:e}})},placeholder:(0,r.__)("Heading...")}))))},save:e=>{const{name:a}=n,{name:l,blockId:r}=g(a),{attributes:i}=e,{anchor:o,id:s,img:m,tagName:u,link:h}=i,{url:p,text:v,target:w,ariaLabel:E}=h,b=c.useBlockProps.save({className:`${l} `}),k=E||v,f=w?{target:"_blank"}:{},_=w?{rel:"noopener noreferrer"}:{};return(0,t.createElement)("div",{id:o||s,...b},(0,t.createElement)("div",{className:`${l}__figure no-animate`},(0,t.createElement)(d,{img:m,className:`${l}__img`,selectorId:o||s})),(0,t.createElement)("div",{className:`${l}__container`},(0,t.createElement)(c.InnerBlocks.Content,null),(0,t.createElement)("a",{className:`stretched-link wp-block-heading has-h-${u}-font-size`,href:p,"aria-label":k,...f,..._},v)))}})})();