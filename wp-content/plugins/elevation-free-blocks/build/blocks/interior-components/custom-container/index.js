(()=>{"use strict";const e=window.wp.components,t=window.wp.blocks,l=JSON.parse('{"DD":"Custom Container","UU":"elevation/interior-components--custom-container"}'),n=window.wp.i18n,o=window.wp.blockEditor,s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},a=JSON.parse('{"T":[{"label":"Default","value":"default"},{"label":"Large","value":"large"},{"label":"Medium","value":"medium"},{"label":"Small","value":"small"}]}'),i=window.ReactJSXRuntime,{UU:r,DD:c}=l;(0,t.registerBlockType)(r,{title:c,icon:{src:(0,i.jsx)(e.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,i.jsx)(e.Path,{d:"m92.379 7.6211h-84.758v84.758h84.758zm-5.9648 72.488v6.3047h-6.3047zm-10.012 6.3047h-7.0703l17.082-17.086v7.0703zm-10.777 0h-7.0703l27.859-27.859v7.0703zm-10.777 0h-7.0703l38.641-38.641v7.0703zm-10.777 0h-7.0703l49.418-49.418v7.0703zm-10.781 0h-7.0703l60.195-60.195v7.0703zm-10.777 0h-7.0703l70.973-70.973v7.0703zm-8.9258-1.8555v-70.973h70.973zm-1.3086-73.594h76.758v78.07h-78.07v-78.07zm-5.9648-5.9648h88.688v90h-90v-90z",fillRule:"evenodd"})})},edit:t=>{const{UU:r}=l,{name:c}=s(r),{attributes:m,setAttributes:v}=t,{containerWidth:u}=m,d=(0,o.useBlockProps)({className:`${c} custom-container--${u}`}),h=Object.values(a.T).map((e=>({label:(0,n.__)(e.label),value:e.value}))),w=(0,i.jsx)(o.InspectorControls,{children:(0,i.jsx)(e.PanelBody,{title:(0,n.__)("Custom Container Styles"),children:(0,i.jsx)(e.SelectControl,{label:(0,n.__)("Custom Container Style"),value:u,options:h,onChange:e=>v({...m,containerWidth:e})})})});return(0,i.jsxs)(i.Fragment,{children:[w,(0,i.jsx)("div",{...d,children:(0,i.jsx)(o.InnerBlocks,{})})]})},save:e=>{const{UU:t}=l,{name:n}=s(t),{attributes:a}=e,{containerWidth:r}=a,c=o.useBlockProps.save({className:`${n} custom-container--${r}`});return(0,i.jsx)("div",{...c,children:(0,i.jsx)(o.InnerBlocks.Content,{})})}})})();