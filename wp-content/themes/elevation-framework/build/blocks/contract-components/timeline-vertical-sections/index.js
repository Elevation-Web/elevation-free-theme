(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"DD":"Timeline vertical - Sections","UU":"elevation/contract-components--timeline-vertical-sections"}'),n=(window.wp.i18n,window.wp.blockEditor),i=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},o=[["elevation/contract-components--timeline-vertical-year",{}],["elevation/contract-components--timeline-vertical-year",{}]],c=["elevation/contract-components--timeline-vertical-year"],s=window.React,r=window.ReactJSXRuntime,{UU:a,DD:l}=t;(0,e.registerBlockType)(a,{title:l,edit:e=>{const{UU:a}=t,{name:l}=i(a),{clientId:d,attributes:m,setAttributes:p}=e,{anchor:w,id:v}=m;(0,s.useEffect)((()=>{p({id:`${l}-${d}`})}),[d,l,p]);const u=(0,n.useBlockProps)({className:`${l}`}),k=(0,n.useInnerBlocksProps)(u,{template:o,allowedBlocks:c});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:w||v,...k})})},save:e=>{const{UU:o}=t,{name:c}=i(o),{attributes:s}=e,{anchor:a,id:l}=s,d=n.useBlockProps.save({className:`${c}`});return(0,r.jsx)("div",{id:a||l,...d,children:(0,r.jsx)(n.InnerBlocks.Content,{})})}})})();