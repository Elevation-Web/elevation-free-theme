(()=>{"use strict";const e=window.React,t=window.wp.components,n=window.wp.blocks,o=JSON.parse('{"title":"Elevation Group","name":"elevation/interior-components--group"}'),l=(window.wp.i18n,window.wp.blockEditor),a=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},{name:r,title:s}=o;(0,n.registerBlockType)(r,{title:s,icon:{src:(0,e.createElement)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,e.createElement)(t.Path,{d:"m92.379 7.6211h-84.758v84.758h84.758zm-5.9648 72.488v6.3047h-6.3047zm-10.012 6.3047h-7.0703l17.082-17.086v7.0703zm-10.777 0h-7.0703l27.859-27.859v7.0703zm-10.777 0h-7.0703l38.641-38.641v7.0703zm-10.777 0h-7.0703l49.418-49.418v7.0703zm-10.781 0h-7.0703l60.195-60.195v7.0703zm-10.777 0h-7.0703l70.973-70.973v7.0703zm-8.9258-1.8555v-70.973h70.973zm-1.3086-73.594h76.758v78.07h-78.07v-78.07zm-5.9648-5.9648h88.688v90h-90v-90z",fillRule:"evenodd"}))},edit:t=>{const{name:n}=o,{attributes:r}=t,{type:s,allowedBlocks:i}=r,{name:c}=a(n),m=(0,l.useBlockProps)({className:`elevation-interior-components--group ${c} ${s}`}),v=i?.length>0?i:void 0;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{...m},(0,e.createElement)(l.InnerBlocks,{allowedBlocks:v})))},save:({attributes:t})=>{const{name:n}=o,{tagName:r,type:s}=t,{name:i,blockId:c}=a(n),m=l.useBlockProps.save({className:`elevation-interior-components--group ${i} ${s}`}),v=`${r}`;return(0,e.createElement)(v,{"data-block-id":c,"data-block-js":"false",...m},(0,e.createElement)(l.InnerBlocks.Content,null))}})})();