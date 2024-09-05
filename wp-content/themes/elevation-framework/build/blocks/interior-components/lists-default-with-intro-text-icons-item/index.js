(()=>{"use strict";var e,t={7121:(e,t,c)=>{const r=window.React,n=window.wp.components,a=window.wp.blocks,l=JSON.parse('{"title":"List Item: Default w/Intro Text+Icons","name":"elevation/interior-components--lists-default-with-intro-text-icons-item"}'),i=window.wp.i18n,o=window.wp.blockEditor,s=window.wp.element,m=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},d=c.p+"images/preview.a6f4068f.webp",u=["core/paragraph"],h=[["core/heading",{level:6,content:"H6. Subheading lorem ipsum felis eget nunc"}],["core/paragraph",{fontSize:"body",content:"Maximum 10 words. Tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur."}]],p=({onClick:e})=>(0,r.createElement)(n.Button,{isDestructive:!0,variant:"secondary",onClick:e},(0,i.__)("Remove Image")),v=({value:e,onSelect:t})=>(0,r.createElement)(o.MediaUploadCheck,null,(0,r.createElement)(o.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,r.createElement)(n.Button,{onClick:e,variant:"secondary"},(0,i.__)("Select Image"))})),w=e=>{const{attributes:t,setAttributes:c}=e,{icon:a}=t;return(0,r.createElement)(o.InspectorControls,null,(0,r.createElement)(n.PanelBody,{title:(0,i.__)("Icon Settings","elevation")},(0,r.createElement)("div",{className:"cards-long-description-icons-card__control-icon"},a.url?(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"cards-long-description-icons-card__control-icon-picker"},(0,r.createElement)("img",{src:a.url})),(0,r.createElement)(p,{onClick:()=>{c({icon:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})}})):(0,r.createElement)(v,{value:a.url,onSelect:e=>{((e,r)=>{const{fullSize:n,srcset:a,sizes:l,alt:i,id:o}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const c=Math.max(...Object.values(e.sizes).map((e=>e.width))),r=`(max-width: ${c}px) 100vw, ${c}px`,n=Object.keys(e.sizes).map((t=>{const c=e.sizes[t];return`${c.url} ${c.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:n,sizes:r,alt:e.alt,id:e.id}}(r);c({[e]:{...t[e],url:n.url,alt:i,id:o,srcset:a,width:n.width,height:n.height,sizes:l}})})("icon",e)}}))))},g=({img:e,className:t,lazyload:c=!0,selectorId:n})=>{if(!e?.url)return;const{url:a,alt:l,width:i,height:o,sizes:s,srcset:m,focalPoint:d}=e;let u="center";return d?.x&&d?.y&&(u=`${100*d.x}% ${100*d.y}%`),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("img",{decoding:"async",src:a,alt:l,width:i,height:o,className:t,srcSet:m,sizes:s,loading:c?"lazy":"eager"}),!!d&&(0,r.createElement)("style",null,`#${n} .${t} {object-position: ${u};}`))},{name:f,title:E}=l;(0,a.registerBlockType)(f,{title:E,icon:{src:(0,r.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,r.createElement)(n.G,null,(0,r.createElement)(n.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,r.createElement)(n.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,r.createElement)(n.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,r.createElement)(n.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:e=>{const{name:t}=l,{name:c,blockId:n}=m(t),{clientId:a,attributes:i,setAttributes:p}=e,{id:v,anchor:g,preview:f,icon:E}=i;(0,s.useEffect)((()=>{p({id:`${c}-${a}`})}),[a,c,p]);const b=(0,o.useBlockProps)({className:`${c}`});return f?(0,r.createElement)("div",{className:`${c}-preview`},(0,r.createElement)("img",{src:d,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,r.createElement)(r.Fragment,null,(0,r.createElement)(w,{...e}),(0,r.createElement)("div",{"data-block-id":n,id:g||v,...b},(0,r.createElement)("div",{className:`${c}__container`},(0,r.createElement)("div",{className:`${c}__figure`},E?.url&&(0,r.createElement)("img",{src:E.url,className:`${c}__icon`,selectorId:g||v})),(0,r.createElement)("div",{className:`${c}__content`},(0,r.createElement)(o.InnerBlocks,{template:h,allowedBlocks:u,templateLock:"all"})))))},save:e=>{const{name:t}=l,{name:c,blockId:n}=m(t),{attributes:a}=e,{anchor:i,id:s,icon:d}=a,u=o.useBlockProps.save({className:`${c}`});return(0,r.createElement)("li",{"data-block-id":n,id:i||s,...u},(0,r.createElement)("div",{className:`${c}__container`},(0,r.createElement)("div",{className:`${c}__figure`},(0,r.createElement)(g,{img:d,className:`${c}__icon `,selectorId:i||s})),(0,r.createElement)("div",{className:`${c}__content`},(0,r.createElement)(o.InnerBlocks.Content,null))))}})}},c={};function r(e){var n=c[e];if(void 0!==n)return n.exports;var a=c[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,c,n,a)=>{if(!c){var l=1/0;for(m=0;m<e.length;m++){for(var[c,n,a]=e[m],i=!0,o=0;o<c.length;o++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(i=!1,a<l&&(l=a));if(i){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[c,n,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");if(c.length)for(var n=c.length-1;n>-1&&!e;)e=c[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"})(),(()=>{var e={1803:0,8814:0};r.O.j=t=>0===e[t];var t=(t,c)=>{var n,a,[l,i,o]=c,s=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(o)var m=o(r)}for(t&&t(c);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},c=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))})();var n=r.O(void 0,[8814],(()=>r(7121)));n=r.O(n)})();