(()=>{"use strict";var e,t={3584:(e,t,a)=>{const l=window.wp.blocks,i=JSON.parse('{"title":"Background Callout - Content Box Left","name":"elevation/interior-components--callout-background-content-box-left"}'),n=window.React,r=window.wp.i18n,o=window.wp.blockEditor,c=window.wp.components,s=window.wp.element,m=({imgMobile:e,imgTablet:t,imgDesktop:a,imgAlt:l,width:i,height:r,className:o,lazyload:c=!0})=>{if(!a?.url)return;const s=`${100*a.focalPoint.x}% ${100*a.focalPoint.y}%`;return(0,n.createElement)("picture",{className:o},e&&(0,n.createElement)("source",{media:"(max-width:575px)",srcSet:e}),t&&(0,n.createElement)("source",{media:"(max-width:1200px)",srcSet:t}),(0,n.createElement)("img",{decoding:"async",lazyload:c?"lazy":"eager",src:a.url,alt:l,width:i,height:r,className:o,style:{objectPosition:s}}))},u=({onClick:e})=>(0,n.createElement)(c.Button,{isDestructive:!0,variant:"secondary",onClick:e},(0,r.__)("Remove Image")),g=({value:e,onSelect:t})=>(0,n.createElement)(o.MediaUploadCheck,null,(0,n.createElement)(o.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,n.createElement)(c.Button,{onClick:e,variant:"secondary"},(0,r.__)("Select Image"))})),d=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},p=[["elevation/interior-components--group",{className:""},[["core/heading",{level:4,content:"H4. Heading lorem ipsum euismod"}],["core/paragraph",{fontSize:"body",content:"Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui."}],["elevation/interior-components--buttons",{btnStyle:"tertiary--color-01",text:"Text Button"}]]]],b=["core/heading","core/paragraph","elevation/interior-components--buttons"],h=a.p+"images/preview.ca816425.webp",{name:v,title:k}=i;(0,l.registerBlockType)(v,{title:k,edit:e=>{const{name:t}=i,{name:a,blockId:l}=d(t),{attributes:v,setAttributes:k}=e,{preview:w,imgMobile:f,imgTablet:E,imgDesktop:y,imgAlt:_,style:P,focalPointDesktop:x}=v,$=(0,o.useBlockProps)({className:a}),[S,B]=(0,s.useState)("");(0,s.useEffect)((()=>{B((()=>$.className.includes("alignfull")?"":"contain "))}),[$.className]);const D={backgroundImage:`url(${y.url})`,backgroundSize:"cover",backgroundPosition:`${100*y.focalPoint?.x}% ${100*y.focalPoint?.y}%`},N=(e,t)=>{k({[e]:{...v[e],focalPoint:t}})},T=(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(c.PanelBody,{title:(0,r.__)("Background Image Desktop")},y.url?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.FocalPointPicker,{url:y.url,value:y.focalPoint,onDragStart:e=>{N("imgDesktop",e)},onDrag:e=>{N("imgDesktop",e)},onChange:e=>{N("imgDesktop",e)}}),(0,n.createElement)("div",{style:D}),(0,n.createElement)(u,{onClick:e=>{k({imgDesktop:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})):(0,n.createElement)(g,{value:y.url,onSelect:e=>{((e,t)=>{const{fullSize:a,srcset:l,sizes:i,alt:n,id:r}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const a=Math.max(...Object.values(e.sizes).map((e=>e.width))),l=`(max-width: ${a}px) 100vw, ${a}px`,i=Object.keys(e.sizes).map((t=>{const a=e.sizes[t];return`${a.url} ${a.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:i,sizes:l,alt:e.alt,id:e.id}}(t);k({[e]:{...v[e],url:a.url,alt:n,id:r,srcset:l,width:a.width,height:a.height,sizes:i,focalPoint:{x:.5,y:.5}}})})("imgDesktop",e)}})),(0,n.createElement)(c.PanelBody,{title:(0,r.__)("Background Image Tablet")},E?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("img",{src:E}),(0,n.createElement)(u,{onClick:()=>{k({imgTablet:""})},attrId:"imgTablet"})):(0,n.createElement)(g,{value:E,onSelect:({url:e})=>{k({imgTablet:e})},attrId:"imgTablet"})),(0,n.createElement)(c.PanelBody,{title:(0,r.__)("Background Image Mobile")},f?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("img",{src:f}),(0,n.createElement)(u,{onClick:()=>{k({imgMobile:""})},attrId:"imgMobile"})):(0,n.createElement)(g,{value:f,onSelect:({url:e})=>{k({imgMobile:e})},attrId:"imgMobile"})));return w?(0,n.createElement)("div",{className:`${a}-preview`},(0,n.createElement)("img",{src:h,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,n.createElement)(n.Fragment,null,T,(0,n.createElement)("div",{"data-block-id":l,...$,...P},(0,n.createElement)(m,{imgMobile:f,imgTablet:E,imgDesktop:y,imgAlt:_,className:`${a}__background`,width:"1920",height:"1080",focalPointDesktop:x}),(0,n.createElement)("div",{className:`${S}${a}__container`},(0,n.createElement)("div",{className:`${a}__wrapper`},(0,n.createElement)(o.InnerBlocks,{template:p,allowedBlocks:b})))))},save:e=>{const{name:t}=i,{name:a,blockId:l}=d(t),{attributes:r}=e,{imgMobile:c,imgTablet:s,imgDesktop:u,imgAlt:g,style:p,focalPointDesktop:b}=r,h=o.useBlockProps.save({className:a}),v=h.className.includes("alignfull")?"container ":"";return(0,n.createElement)("div",{"data-block-id":l,...h,...p},(0,n.createElement)(m,{imgMobile:c,imgTablet:s,imgDesktop:u,imgAlt:g,className:`${a}__background`,width:"1920",height:"1080",focalPointDesktop:b}),(0,n.createElement)("div",{className:`${v}${a}__container`},(0,n.createElement)("div",{className:`${a}__wrapper`},(0,n.createElement)(o.InnerBlocks.Content,null))))}})}},a={};function l(e){var i=a[e];if(void 0!==i)return i.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,a,i,n)=>{if(!a){var r=1/0;for(m=0;m<e.length;m++){for(var[a,i,n]=e[m],o=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(l.O).every((e=>l.O[e](a[c])))?a.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(m--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,i,n]},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../../../"})(),(()=>{var e={3574:0,4023:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var i,n,[r,o,c]=a,s=0;if(r.some((t=>0!==e[t]))){for(i in o)l.o(o,i)&&(l.m[i]=o[i]);if(c)var m=c(l)}for(t&&t(a);s<r.length;s++)n=r[s],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(m)},a=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=l.O(void 0,[4023],(()=>l(3584)));i=l.O(i)})();