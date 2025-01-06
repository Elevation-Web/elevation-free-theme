(()=>{"use strict";const e=window.wp.blocks,n=JSON.parse('{"title":"Image with Srcset","name":"elevation/interior-components--image-with-srcset"}'),t=window.wp.i18n,i=window.wp.blockEditor,l=window.wp.components,a=window.React,o=window.wp.primitives,s=(0,a.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,a.createElement)(o.Path,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"})),c=window.wp.element,r=window.ReactJSXRuntime,{name:d,title:m}=n;(0,e.registerBlockType)(d,{title:m,edit:e=>{const{name:a}=n,{name:o,blockId:d}=(e=>{const n=e.split("/")[1].split("--");return{blockId:n.join("/"),name:n[1]}})(a),{attributes:m,setAttributes:g,context:p}=e,{img:w,link:h,isLazy:u,showCaption:x}=m,j=p["elevation/image-classname"];(0,c.useEffect)((()=>{g({inheritClassName:j||"media"})}),[j,g]);const _=(0,i.useBlockProps)({className:`${o} ${j}`}),k=e=>{const{url:n,id:t,caption:i}=e;g({img:{url:n,id:t,caption:i}})},[C,b]=(0,c.useState)(!1),I=(0,r.jsx)(i.InspectorControls,{children:(0,r.jsx)(l.PanelBody,{title:(0,t.__)("Image Settings"),children:(0,r.jsx)(l.ToggleControl,{__nextHasNoMarginBottom:!0,label:"Defer image loading?",help:u?"Yes":"No",checked:u,onChange:e=>{g({isLazy:e})}})})}),v=(0,r.jsxs)(i.BlockControls,{children:[(0,r.jsx)(i.MediaReplaceFlow,{mediaId:w?.id,mediaUrl:w?.url,allowedTypes:["image"],onSelect:k,name:w?.url?(0,t.__)("Replace Image"):(0,t.__)("Add Image")}),(0,r.jsx)(l.Button,{variant:"secondary",onClick:()=>b(!C),children:h.url?"Change Link":"Add Link to Image"}),C&&(0,r.jsxs)(l.Popover,{onClose:()=>b(!1),children:[(0,r.jsxs)("form",{className:`${o}__form`,children:[(0,r.jsx)(i.URLInput,{value:h.url,onChange:e=>{g({link:{...h,url:e}})}}),(0,r.jsx)(l.Button,{onClick:()=>b(!1),icon:s,label:(0,t.__)("Apply"),type:"submit"})]}),(0,r.jsx)(l.ToggleControl,{label:(0,t.__)("Open in new tab"),checked:h.target,onChange:e=>{g({link:{...h,target:e}})}})]})]});return(0,r.jsxs)(r.Fragment,{children:[I,(0,r.jsxs)("div",{..._,children:[v,w?.url?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:w?.url,className:`${o}__img`,loading:u?"lazy":"eager"}),w?.caption&&(0,r.jsx)("span",{className:`${o}__img--caption`,children:w.caption})]}):(0,r.jsx)(i.MediaPlaceholder,{onSelect:k,allowedTypes:["image"],multiple:!1,labels:{title:"Image"}})]})]})}})})();