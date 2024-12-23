(()=>{"use strict";var e,t={4461:(e,t,r)=>{const c=window.React,n=window.wp.components,l=window.wp.blocks,a=JSON.parse('{"title":"List, Default w/Icon","name":"elevation/interior-components--lists-default-with-icons-item"}'),i=window.wp.i18n,o=window.wp.blockEditor,s=window.wp.element,m=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},d=({onClick:e})=>(0,c.createElement)(n.Button,{isDestructive:!0,variant:"secondary",onClick:e},(0,i.__)("Remove Image")),u=({value:e,onSelect:t})=>(0,c.createElement)(o.MediaUploadCheck,null,(0,c.createElement)(o.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,c.createElement)(n.Button,{onClick:e,variant:"secondary"},(0,i.__)("Select Image"))})),h=e=>{const{attributes:t,setAttributes:r}=e,{icon:l}=t;return(0,c.createElement)(o.InspectorControls,null,(0,c.createElement)(n.PanelBody,{title:(0,i.__)("Icon Settings","elevation")},(0,c.createElement)("div",{className:"cards-long-description-icons-card__control-icon"},l.url?(0,c.createElement)(c.Fragment,null,(0,c.createElement)("div",{className:"cards-long-description-icons-card__control-icon-picker"},(0,c.createElement)("img",{src:l.url})),(0,c.createElement)(d,{onClick:()=>{r({icon:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})):(0,c.createElement)(u,{value:l.url,onSelect:e=>{((e,c)=>{const{fullSize:n,srcset:l,sizes:a,alt:i,id:o}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const r=Math.max(...Object.values(e.sizes).map((e=>e.width))),c=`(max-width: ${r}px) 100vw, ${r}px`,n=Object.keys(e.sizes).map((t=>{const r=e.sizes[t];return`${r.url} ${r.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:n,sizes:c,alt:e.alt,id:e.id}}(c);r({[e]:{...t[e],url:n.url,alt:i,id:o,srcset:l,width:n.width,height:n.height,sizes:a}})})("icon",e)}}))))},p=r.p+"images/preview.a6f4068f.webp",v=["core/paragraph"],w=[["core/heading",{level:6,content:"H6. Subheading lorem ipsum felis eget nunc"}],["core/paragraph",{fontSize:"body",content:"Maximum 5 words. Integer malesuada nunc vel risus."}]],g=({img:e,className:t,lazyload:r=!0,selectorId:n})=>{if(!e?.url)return;const{url:l,alt:a,width:i,height:o,sizes:s,srcset:m,focalPoint:d}=e;let u="center";return d?.x&&d?.y&&(u=`${100*d.x}% ${100*d.y}%`),(0,c.createElement)(c.Fragment,null,(0,c.createElement)("img",{decoding:"async",src:l,alt:a,width:i,height:o,className:t,srcSet:m,sizes:s,loading:r?"lazy":"eager"}),!!d&&(0,c.createElement)("style",null,`#${n} .${t} {object-position: ${u};}`))},{name:f,title:E}=a;(0,l.registerBlockType)(f,{title:E,icon:{src:(0,c.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,c.createElement)(n.G,null,(0,c.createElement)(n.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.createElement)(n.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.createElement)(n.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,c.createElement)(n.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:e=>{const{name:t}=a,{name:r,blockId:n}=m(t),{clientId:l,attributes:i,setAttributes:d}=e,{id:u,anchor:g,preview:f,icon:E}=i;(0,s.useEffect)((()=>{d({id:`${r}-${l}`})}),[l,r,d]);const b=(0,o.useBlockProps)({className:`${r}`});return f?(0,c.createElement)("div",{className:`${r}-preview`},(0,c.createElement)("img",{src:p,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,c.createElement)(c.Fragment,null,(0,c.createElement)(h,{...e}),(0,c.createElement)("div",{"data-block-id":n,id:g||u,...b},(0,c.createElement)("div",{className:`${r}__container`},E?.url&&(0,c.createElement)("img",{src:E.url,className:`${r}__icon`,selectorId:g||u}),(0,c.createElement)(o.InnerBlocks,{template:w,allowedBlocks:v,templateLock:"all"}))))},save:e=>{const{name:t}=a,{name:r,blockId:n}=m(t),{attributes:l}=e,{anchor:i,id:s,icon:d}=l,u=o.useBlockProps.save({className:`${r}`});return(0,c.createElement)("li",{"data-block-id":n,id:i||s,...u},(0,c.createElement)("div",{className:`${r}__container`},(0,c.createElement)(g,{img:d,className:`${r}__icon `,selectorId:i||s}),(0,c.createElement)(o.InnerBlocks.Content,null)))}})}},r={};function c(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,c),l.exports}c.m=t,e=[],c.O=(t,r,n,l)=>{if(!r){var a=1/0;for(m=0;m<e.length;m++){for(var[r,n,l]=e[m],i=!0,o=0;o<r.length;o++)(!1&l||a>=l)&&Object.keys(c.O).every((e=>c.O[e](r[o])))?r.splice(o--,1):(i=!1,l<a&&(a=l));if(i){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[r,n,l]},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../../../"})(),(()=>{var e={1029:0,710:0};c.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[a,i,o]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(o)var m=o(c)}for(t&&t(r);s<a.length;s++)l=a[s],c.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return c.O(m)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=c.O(void 0,[710],(()=>c(4461)));n=c.O(n)})();