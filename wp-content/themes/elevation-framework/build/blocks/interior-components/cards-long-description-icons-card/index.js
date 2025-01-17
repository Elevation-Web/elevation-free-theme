(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var o;e.g.importScripts&&(o=e.g.location+"");var r=e.g.document;if(!o&&r&&(r.currentScript&&(o=r.currentScript.src),!o)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!o;)o=t[n--].src}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=o+"../../../"})();const o=window.wp.components,r=window.wp.blocks,t=JSON.parse('{"title":"Card: With Icon, title, description and button.","name":"elevation/interior-components--cards-long-description-icons-card"}'),n=window.wp.i18n,c=window.wp.blockEditor,s=window.wp.element,i=e.p+"images/preview.a6f4068f.webp",l=["core/heading","core/paragraph","elevation/interior-components--buttons"],a=[["core/heading",{level:6,content:"Strong Text. Subheading lorem ipsum",textColor:"ui-foreground-primary-text-headings"}],["core/paragraph",{fontSize:"body",content:"Maximum 20 words. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus"}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"tertiary--color-01"}]]]],d=e=>{const o=e.split("/")[1].split("--");return{blockId:o.join("/"),name:o[1]}},u=window.ReactJSXRuntime,h=({onClick:e})=>(0,u.jsx)(o.Button,{isDestructive:!0,variant:"secondary",onClick:e,children:(0,n.__)("Remove Image")}),g=({value:e,onSelect:r})=>(0,u.jsx)(c.MediaUploadCheck,{children:(0,u.jsx)(c.MediaUpload,{onSelect:r,allowedTypes:["image"],value:e,render:({open:e})=>(0,u.jsx)(o.Button,{onClick:e,variant:"secondary",children:(0,n.__)("Select Image")})})});function m(e){var o,r,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(r=m(e[o]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}const p=function(){for(var e,o,r=0,t="",n=arguments.length;r<n;r++)(e=arguments[r])&&(o=m(e))&&(t&&(t+=" "),t+=o);return t},x=({onChange:e,color:r,label:t,colorPallet:n})=>{const i=(0,c.useSetting)("color.palette"),[l,a]=(0,s.useState)(!1),d={className:p("block-editor-panel-color-gradient-settings__dropdown",{"is-open":l}),style:{height:"auto",padding:"0px"}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Button,{...d,onClick:()=>{a(!0)},children:(0,u.jsxs)(o.__experimentalHStack,{justify:"flex-start",style:{border:"1px solid #ddd",padding:"10px 12px",borderRadius:"2px"},children:[(0,u.jsx)(o.ColorIndicator,{className:"block-editor-panel-color-gradient-settings__color-indicator",colorValue:r}),(0,u.jsx)(o.FlexItem,{className:"block-editor-panel-color-gradient-settings__color-name",title:t,style:{fontWeight:600},children:t})]})}),l&&(0,u.jsx)(o.Popover,{onClose:()=>a(!1),children:(0,u.jsx)(o.ColorPalette,{value:r,colors:n||i,onChange:e})})]})},v=e=>{const{attributes:r,setAttributes:t}=e,i=(0,c.useSetting)("color.palette"),{icon:l,hasHover:a,iconHover:d,iconBackgroundColor:m,backgroundColorHover:p}=r;(0,s.useEffect)((()=>{v("iconBackgroundColor"),v("backgroundColorHover")}),[]);const v=e=>{if(!r[e].includes("#")){const o=i.reduce(((o,t)=>t.slug==r[e]?t.color:o));o&&t({[e]:o?.color||o})}},j=e=>{t({[e]:{url:"",alt:"",id:0,srcset:"",width:0,height:0}})},b=(e,o)=>{const{fullSize:n,srcset:c,sizes:s,alt:i,id:l}=function(e,o="full"){if(!e||!e.sizes||!e.sizes.full)return null;const r=Math.max(...Object.values(e.sizes).map((e=>e.width))),t=`(max-width: ${r}px) 100vw, ${r}px`,n=Object.keys(e.sizes).map((o=>{const r=e.sizes[o];return`${r.url} ${r.width}w`})).join(", ");return{fullSize:e.sizes[o],srcset:n,sizes:t,alt:e.alt,id:e.id}}(o);t({[e]:{...r[e],url:n.url,alt:i,id:l,srcset:c,width:n.width,height:n.height,sizes:s}})},w=(e,o)=>{t(o?{[e]:o}:{[e]:"#000"})};return(0,u.jsx)(c.InspectorControls,{children:(0,u.jsxs)(o.PanelBody,{title:(0,n.__)("Icon"),children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon",children:l.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:m},children:(0,u.jsx)("img",{src:l.url})}),(0,u.jsx)(h,{onClick:()=>{j("icon")}})]}):(0,u.jsx)(g,{value:l.url,onSelect:e=>{b("icon",e)}})}),(0,u.jsx)(o.ToggleControl,{label:"Has Hover",help:a?"Icon Hover in enable":"",checked:a,onChange:e=>t({hasHover:e})}),a&&(0,u.jsx)(u.Fragment,{children:d.url?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cards-long-description-icons-card__control-icon-picker",style:{backgroundColor:p},children:(0,u.jsx)("img",{src:d.url})}),(0,u.jsx)(h,{onClick:()=>{j("iconHover")}})]}):(0,u.jsx)(g,{value:d.url,onSelect:e=>{b("iconHover",e)}})}),(0,u.jsxs)(o.__experimentalVStack,{justify:"flex-start",className:"cards-icons__control-icon__colors",children:[(0,u.jsx)(x,{color:m,label:"Background Color",onChange:e=>w("iconBackgroundColor",e)}),a&&(0,u.jsx)(x,{color:p,label:"Background Color [Hover]",onChange:e=>w("backgroundColorHover",e)})]})]})})},j=({img:e,className:o,lazyload:r=!0,selectorId:t})=>{if(!e?.url)return;const{url:n,alt:c,width:s,height:i,sizes:l,srcset:a,focalPoint:d}=e;let h="center";return d?.x&&d?.y&&(h=`${100*d.x}% ${100*d.y}%`),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{decoding:"async",src:n,alt:c,width:s,height:i,className:o,srcSet:a,sizes:l,loading:r?"lazy":"eager"}),!!d&&(0,u.jsx)("style",{children:`#${t} .${o} {object-position: ${h};}`})]})},{name:b,title:w}=t;(0,r.registerBlockType)(b,{title:w,icon:{src:(0,u.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,u.jsxs)(o.G,{children:[(0,u.jsx)(o.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,u.jsx)(o.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{name:o}=t,{name:r,blockId:n}=d(o),{clientId:h,attributes:g,setAttributes:m}=e,{id:p,anchor:x,preview:j,icon:b,iconBackgroundColor:w}=g;(0,s.useEffect)((()=>{m({id:`${r}-${h}`})}),[h,r,m]);const k=(0,c.useBlockProps)({className:`${r}`});return j?(0,u.jsx)("div",{className:`${r}-preview`,children:(0,u.jsx)("img",{src:i,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{...e}),(0,u.jsxs)("div",{id:x||p,...k,children:[(0,u.jsx)("div",{className:`${r}__icon-container no-hover`,style:{backgroundColor:w},children:b?.url&&(0,u.jsx)("img",{src:b.url,className:`${r}__img`,selectorId:x||p})}),(0,u.jsx)("div",{className:`${r}__container`,children:(0,u.jsx)(c.InnerBlocks,{template:a,allowedBlocks:l,templateLock:!1})})]})]})},save:e=>{const{name:o}=t,{name:r,blockId:n}=d(o),{attributes:s}=e,{anchor:i,id:l,icon:a,iconBackgroundColor:h,backgroundColorHover:g,hasHover:m,iconHover:p}=s,x=c.useBlockProps.save({className:`${r} `}),v={"background-color":h,"--background-color":m?g:h};return(0,u.jsxs)("div",{id:i||l,...x,children:[(0,u.jsxs)("div",{className:`${r}__icon-container ${m?"has_icon-hover":""}`,style:v,children:[(0,u.jsx)(j,{img:a,className:`${r}__img no-animate`,selectorId:i||l}),m&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(j,{img:p,className:`${r}__img hover no-animate`,selectorId:i||l})})]}),(0,u.jsx)("div",{className:`${r}__container`,children:(0,u.jsx)(c.InnerBlocks.Content,{})})]})}})})();