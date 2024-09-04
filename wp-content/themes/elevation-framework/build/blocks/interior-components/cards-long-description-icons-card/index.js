(()=>{"use strict";var e,t={8434:(e,t,r)=>{const o=window.React,n=window.wp.components,c=window.wp.blocks,l=JSON.parse('{"title":"Card: With Icon, title, description and button.","name":"elevation/interior-components--cards-long-description-icons-card"}'),a=window.wp.i18n,i=window.wp.blockEditor,s=window.wp.element,m=r.p+"images/preview.a6f4068f.webp",d=["core/heading","core/paragraph","elevation/interior-components--card-icon-cotainer","elevation/interior-components--buttons"],u=[["core/heading",{level:6,content:"Strong Text. Subheading lorem ipsum",textColor:"ui-foreground-primary-text-headings"}],["core/paragraph",{fontSize:"body",content:"Maximum 20 words. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus"}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"tertiary"}]]]],g=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},p=({onClick:e})=>(0,o.createElement)(n.Button,{isDestructive:!0,variant:"secondary",onClick:e},(0,a.__)("Remove Image")),v=({value:e,onSelect:t})=>(0,o.createElement)(i.MediaUploadCheck,null,(0,o.createElement)(i.MediaUpload,{onSelect:t,allowedTypes:["image"],value:e,render:({open:e})=>(0,o.createElement)(n.Button,{onClick:e,variant:"secondary"},(0,a.__)("Select Image"))}));function h(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=h(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}const b=function(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=h(e))&&(o&&(o+=" "),o+=t);return o},E=({onChange:e,color:t,label:r,colorPallet:c})=>{const l=(0,i.useSetting)("color.palette"),[a,m]=(0,s.useState)(!1),d={className:b("block-editor-panel-color-gradient-settings__dropdown",{"is-open":a}),style:{height:"auto",padding:"0px"}};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(n.Button,{...d,onClick:()=>{m(!0)}},(0,o.createElement)(n.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"}},(0,o.createElement)(n.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:t}),(0,o.createElement)(n.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:r,style:{fontWeight:600}},r))),a&&(0,o.createElement)(n.Popover,{onClose:()=>m(!1)},(0,o.createElement)(n.ColorPalette,{value:t,colors:c||l,onChange:e})))},f=e=>{const{attributes:t,setAttributes:r}=e,c=(0,i.useSetting)("color.palette"),{icon:l,hasIconHover:m,iconHover:d,iconBackgroundColor:u,backgroundColorHover:g}=t;(0,s.useEffect)((()=>{h("iconBackgroundColor"),h("backgroundColorHover")}),[]);const h=e=>{if(!t[e].includes("#")){const o=c.reduce(((r,o)=>o.slug==t[e]?o.color:r));o&&r({[e]:o?.color||o})}},b=e=>{r({[e]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})},f=(e,o)=>{const{fullSize:n,srcset:c,sizes:l,alt:a,id:i}=function(e,t="full"){if(!e||!e.sizes||!e.sizes.full)return null;const r=Math.max(...Object.values(e.sizes).map((e=>e.width))),o=`(max-width: ${r}px) 100vw, ${r}px`,n=Object.keys(e.sizes).map((t=>{const r=e.sizes[t];return`${r.url} ${r.width}w`})).join(", ");return{fullSize:e.sizes[t],srcset:n,sizes:o,alt:e.alt,id:e.id}}(o);r({[e]:{...t[e],url:n.url,alt:a,id:i,srcset:c,width:n.width,height:n.height,sizes:l}})},w=(e,t)=>{r(t?{[e]:t}:{[e]:"#000"})};return(0,o.createElement)(i.InspectorControls,null,(0,o.createElement)(n.PanelBody,{title:(0,a.__)("Icon")},(0,o.createElement)("div",{className:"cards-long-description-icons-card__control-icon"},l.url?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:u}},(0,o.createElement)("img",{src:l.url})),(0,o.createElement)(p,{onClick:()=>{b("icon")}})):(0,o.createElement)(v,{value:l.url,onSelect:e=>{f("icon",e)}})),(0,o.createElement)(n.ToggleControl,{label:"Has Icon Hover",help:m?"Icon Hover in enable":"",checked:m,onChange:e=>r({hasIconHover:e})}),m&&(0,o.createElement)(o.Fragment,null,d.url?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:g}},(0,o.createElement)("img",{src:d.url})),(0,o.createElement)(p,{onClick:()=>{b("iconHover")}})):(0,o.createElement)(v,{value:d.url,onSelect:e=>{f("iconHover",e)}})),(0,o.createElement)(n.__experimentalVStack,{justify:"flex-start",className:"cards-icons__control-icon__colors"},(0,o.createElement)(E,{color:u,label:"Background Color",onChange:e=>w("iconBackgroundColor",e)}),(0,o.createElement)(E,{color:g,label:"Background Color [Hover]",onChange:e=>w("backgroundColorHover",e)}))))},w=({img:e,className:t,lazyload:r=!0,selectorId:n})=>{if(!e?.url)return;const{url:c,alt:l,width:a,height:i,sizes:s,srcset:m,focalPoint:d}=e;let u="center";return d?.x&&d?.y&&(u=`${100*d.x}% ${100*d.y}%`),(0,o.createElement)(o.Fragment,null,(0,o.createElement)("img",{decoding:"async",src:c,alt:l,width:a,height:i,className:t,srcSet:m,sizes:s,loading:r?"lazy":"eager"}),!!d&&(0,o.createElement)("style",null,`#${n} .${t} {object-position: ${u};}`))},{name:k,title:_}=l;(0,c.registerBlockType)(k,{title:_,icon:{src:(0,o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,o.createElement)(n.G,null,(0,o.createElement)(n.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,o.createElement)(n.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,o.createElement)(n.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,o.createElement)(n.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:e=>{const{name:t}=l,{name:r,blockId:n}=g(t),{clientId:c,attributes:a,setAttributes:p}=e,{id:v,anchor:h,preview:b,icon:E,iconBackgroundColor:w}=a;(0,s.useEffect)((()=>{p({id:`${r}-${c}`})}),[c,r,p]);const k=(0,i.useBlockProps)({className:`${r}`});return b?(0,o.createElement)("div",{className:`${r}-preview`},(0,o.createElement)("img",{src:m,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(f,{...e}),(0,o.createElement)("div",{"data-block-id":n,id:h||v,...k},(0,o.createElement)("div",{className:`${r}__icon-container no-hover`,style:{backgroundColor:w}},E?.url&&(0,o.createElement)("img",{src:E.url,className:`${r}__img`,selectorId:h||v})),(0,o.createElement)("div",{className:`${r}__container`},(0,o.createElement)(i.InnerBlocks,{template:u,allowedBlocks:d,templateLock:"all"}))))},save:e=>{const{name:t}=l,{name:r,blockId:n}=g(t),{attributes:c}=e,{anchor:a,id:s,icon:m,iconBackgroundColor:d,backgroundColorHover:u,hasIconHover:p,iconHover:v}=c,h=i.useBlockProps.save({className:`${r} `}),b={"background-color":d,"--background-color":u};return(0,o.createElement)("div",{"data-block-id":n,id:a||s,...h},(0,o.createElement)("div",{className:`${r}__icon-container ${p?"has_icon-hover":""}`,style:b},(0,o.createElement)(w,{img:m,className:`${r}__img`,selectorId:a||s}),p&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(w,{img:v,className:`${r}__img hover`,selectorId:a||s}))),(0,o.createElement)("div",{className:`${r}__container`},(0,o.createElement)(i.InnerBlocks.Content,null)))}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,r,n,c)=>{if(!r){var l=1/0;for(m=0;m<e.length;m++){for(var[r,n,c]=e[m],a=!0,i=0;i<r.length;i++)(!1&c||l>=c)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(a=!1,c<l&&(l=c));if(a){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}c=c||0;for(var m=e.length;m>0&&e[m-1][2]>c;m--)e[m]=e[m-1];e[m]=[r,n,c]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={3244:0,7058:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,c,[l,a,i]=r,s=0;if(l.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(i)var m=i(o)}for(t&&t(r);s<l.length;s++)c=l[s],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(m)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[7058],(()=>o(8434)));n=o.O(n)})();