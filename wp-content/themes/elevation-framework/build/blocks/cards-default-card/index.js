(()=>{"use strict";var e,t={3341:(e,t,r)=>{const a=window.React,l=window.wp.components,o=window.wp.blocks,n=JSON.parse('{"title":"Card, Layout: Default.","name":"elevation/cards-default-card"}'),c=window.wp.i18n,i=window.wp.blockEditor,s=window.wp.element,d=r.p+"images/preview.a6f4068f.webp",m=["core/heading","core/paragraph"],u=[["core/paragraph",{fontSize:"body",content:"Maximum 10 words. At augue eget arcu dictum varius duis at consectetur lorem"}]];function h(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(r=h(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}const p=function(){for(var e,t,r=0,a="",l=arguments.length;r<l;r++)(e=arguments[r])&&(t=h(e))&&(a&&(a+=" "),a+=t);return a},g=({onChange:e,color:t,label:r,colorPallet:o})=>{const n=(0,i.useSetting)("color.palette"),[c,d]=(0,s.useState)(!1),m={className:p("block-editor-panel-color-gradient-settings__dropdown",{"is-open":c}),style:{height:"auto",padding:"0px"}};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.Button,{...m,onClick:()=>{d(!0)}},(0,a.createElement)(l.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"}},(0,a.createElement)(l.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:t}),(0,a.createElement)(l.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:r,style:{fontWeight:600}},r))),c&&(0,a.createElement)(l.Popover,{onClose:()=>d(!1)},(0,a.createElement)(l.ColorPalette,{value:t,colors:o||n,onChange:e})))},v=e=>{const{attributes:t,setAttributes:r}=e,{link:o,tagName:n,backgroundColorHover:d,textColorHover:m,headingColor:u}=t,{url:h,target:p,ariaLabel:v}=o,b=(0,i.useSetting)("color.palette");(0,s.useEffect)((()=>{f("backgroundColorHover"),f("textColorHover"),f("headingColor")}),[]);const f=e=>{if(!t[e].includes("#")){const a=b.reduce(((r,a)=>a.slug==t[e]?a.color:r));a&&r({[e]:a?.color||a})}},w=(e,t)=>{r(t?{[e]:t}:{[e]:"#000"})};return(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(l.PanelBody,{title:(0,c.__)("Card Link","elevation")},(0,a.createElement)(a.Fragment,null,h&&(0,a.createElement)("a",{href:h,target:"_blank",style:{display:"block",marginBottom:"20px"}},h),(0,a.createElement)("div",{style:{marginBottom:"20px"}},(0,a.createElement)(i.URLInputButton,{url:h,placeholder:(0,c.__)("Card Link URL...","elevation"),onChange:e=>r({link:{...o,url:e}})})),(0,a.createElement)(l.ToggleControl,{label:"Open in new tab",checked:p,onChange:e=>{r({link:{...o,target:e}})}})),(0,a.createElement)(l.__experimentalInputControl,{value:v,placeholder:"Button Aria Label...",onChange:e=>{r({link:{...o,ariaLabel:e}})}})),(0,a.createElement)(l.PanelBody,{title:(0,c.__)("Heading Options","elevation")},(0,a.createElement)(l.SelectControl,{label:"Heading Size",value:n,options:[{label:"h1",value:"1"},{label:"h2",value:"2"},{label:"h3",value:"3"},{label:"h4",value:"4"},{label:"h5",value:"5"},{label:"h6",value:"6"}],onChange:e=>{r({tagName:e})}}),(0,a.createElement)(g,{color:u,label:"Heading Color",onChange:e=>{w("headingColor",e)}})),(0,a.createElement)(l.PanelBody,{title:(0,c.__)("Hover Options","elevation")},(0,a.createElement)(l.__experimentalVStack,{justify:"flex-start",className:"cards-default__control-icon__colors"},(0,a.createElement)(g,{color:d,label:"Background Color [Hover]",onChange:e=>{w("backgroundColorHover",e)}}),(0,a.createElement)(g,{color:m,label:"Text Color [Hover]",onChange:e=>{w("textColorHover",e)}}))))},{name:b,title:f}=n;(0,o.registerBlockType)(b,{title:f,icon:{src:(0,a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,a.createElement)(l.G,null,(0,a.createElement)(l.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,a.createElement)(l.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,a.createElement)(l.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,a.createElement)(l.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:e=>{const{name:t}=n,r=t.split("/")[1],{clientId:l,attributes:o,setAttributes:h}=e,{id:p,anchor:g,preview:b,tagName:f,link:w,headingColor:k}=o,{text:E}=w;(0,s.useEffect)((()=>{h({id:`${r}-${l}`})}),[l,r,h]);const C=(0,i.useBlockProps)({className:`${r}`});return b?(0,a.createElement)("div",{className:`${r}-preview`},(0,a.createElement)("img",{src:d,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(v,{...e}),(0,a.createElement)("div",{"data-block-id":r,id:g||p,...C},(0,a.createElement)("div",{className:`${r}__container`},(0,a.createElement)(i.RichText,{style:{maxWidth:"100%",textWrap:"wrap",marginBottom:"0px","--default-editor-color":k},className:"wp-block-heading",tagName:"h"+f,value:E,allowedFormats:[],onChange:e=>{h({link:{...w,text:e}})},placeholder:(0,c.__)("Heading...")}),(0,a.createElement)(i.InnerBlocks,{template:u,allowedBlocks:m,templateLock:"all"}))))},save:e=>{const{name:t}=n,r=t.split("/")[1],{attributes:l}=e,{anchor:o,id:c,backgroundColorHover:s,tagName:d,link:m,textColorHover:u,headingColor:h}=l,{url:p,text:g,target:v,ariaLabel:b}=m,f={"--card-default-background-color":s,"--card-default-color-hover":u,"--card-heading-default-color":h},w=i.useBlockProps.save({className:`${r} `}),k=b||g,E=v?{target:"_blank"}:{},C=v?{rel:"noopener noreferrer"}:{};return(0,a.createElement)("div",{"data-block-id":r,id:o||c,...w,style:f},(0,a.createElement)("div",{className:`${r}__container`},(0,a.createElement)("a",{className:`stretched-link wp-block-heading has-h-${d}-font-size`,href:p,"aria-label":k,...E,...C},g),(0,a.createElement)(i.InnerBlocks.Content,null)))}})}},r={};function a(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,l,o)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,l,o]=e[d],c=!0,i=0;i<r.length;i++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(c=!1,o<n&&(n=o));if(c){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,l,o]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var l=r.length-1;l>-1&&!e;)e=r[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e={1381:0,8887:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var l,o,[n,c,i]=r,s=0;if(n.some((t=>0!==e[t]))){for(l in c)a.o(c,l)&&(a.m[l]=c[l]);if(i)var d=i(a)}for(t&&t(r);s<n.length;s++)o=n[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=a.O(void 0,[8887],(()=>a(3341)));l=a.O(l)})();