(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"title":"Image with Srcset","name":"elevation/interior-components--image-with-srcset"}'),l=window.React,a=window.wp.i18n,n=window.wp.blockEditor,i=window.wp.components,o=window.wp.primitives,m=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,l.createElement)(o.Path,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"})),r=window.wp.element,{name:c,title:s}=t;(0,e.registerBlockType)(c,{title:s,edit:e=>{const{name:o}=t,{name:c,blockId:s}=(e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}})(o),{attributes:g,setAttributes:d,context:p}=e,{img:h,link:w,isLazy:u,showCaption:E,showPosition:_,inheritClassName:b,toogleSelection:y}=g,C=p["elevation/image-classname"]||b;(0,r.useEffect)((()=>{d({inheritClassName:C||"media"})}),[C,d]);const k=(0,n.useBlockProps)({className:`${c} ${b}`}),v=e=>{const{url:t,id:l,caption:a,width:n,height:i}=e;d({img:{url:t,id:l,caption:a,styledWidth:n,styledHeight:i}})},[f,S]=(0,r.useState)(!1),I=(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(i.PanelBody,{title:(0,a.__)("Image Settings")},(0,l.createElement)(i.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Defer image loading?",help:u?"Yes":"No",checked:u,onChange:e=>{d({isLazy:e})}}),_&&(0,l.createElement)(i.SelectControl,{label:"Image Position",value:b,options:[{label:"Default",value:"media"},{label:"Left",value:"float-left media"},{label:"Right",value:"float-right media"}],onChange:e=>{d({inheritClassName:e})}}))),N=(0,l.createElement)(n.BlockControls,{group:"inline"},(0,l.createElement)(n.MediaReplaceFlow,{mediaId:h?.id,mediaUrl:h?.url,allowedTypes:["image"],onSelect:v,name:h?.url?(0,a.__)("Replace Image"):(0,a.__)("Add Image")}),(0,l.createElement)(i.Button,{variant:"secondary",onClick:()=>S(!f)},w.url?"Change Link":"Add Link to Image"),f&&(0,l.createElement)(i.Popover,{onClose:()=>S(!1)},(0,l.createElement)("form",{className:`${c}__form`},(0,l.createElement)(n.URLInput,{value:w.url,onChange:e=>{d({link:{...w,url:e}})}}),(0,l.createElement)(i.Button,{onClick:()=>S(!1),icon:m,label:(0,a.__)("Apply"),type:"submit"})),(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Open in new tab"),checked:w.target,onChange:e=>{d({link:{...w,target:e}})}})));return(0,l.createElement)(l.Fragment,null,I,(0,l.createElement)("div",{...k},N,h?.url?(0,l.createElement)(l.Fragment,null,_?(0,l.createElement)(i.ResizableBox,{size:{width:h?.styledWidth,hegiht:h?.styledHeight},minHeight:"50",minWidth:"50",enable:{top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},onResizeStop:(e,t,l,a)=>{d({img:{...h,styledWidth:h.styledWidth+a.width,styledHeight:h.styledHeight+a.height},toogleSelection:!1})},onResizeStart:()=>{d({toogleSelection:!0})}},(0,l.createElement)("img",{src:h?.url,className:`${c}__img`,loading:u?"lazy":"eager"}),h?.caption&&(0,l.createElement)("span",{className:`${c}__img--caption`},h.caption)):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("img",{src:h?.url,className:`${c}__img`,loading:u?"lazy":"eager"}),h?.caption&&(0,l.createElement)("span",{className:`${c}__img--caption`},h.caption))):(0,l.createElement)(n.MediaPlaceholder,{onSelect:v,allowedTypes:["image"],multiple:!1,labels:{title:"Image"}})))}})})();