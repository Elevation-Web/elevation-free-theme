(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"title":"Logos Carousel Item","name":"elevation/contract-components--logos-carousel-item"}'),n=window.React,o=(window.wp.i18n,window.wp.blockEditor),s=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},i=[["elevation/interior-components--image-with-srcset",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/contract-components/logos-carousel-item/images/logo.webp",inheritClassName:"no-animate"}}]],l=["elevation/interior-components--image-with-srcset"],{name:a,title:r}=t;(0,e.registerBlockType)(a,{title:r,edit:e=>{const{name:a}=t,{name:r}=s(a),{clientId:c,attributes:m,setAttributes:p}=e,{anchor:d,id:w}=m;(0,n.useEffect)((()=>{p({id:`${r}-${c}`})}),[c,r,p]);const u=(0,o.useBlockProps)({className:`${r} swiper-slide`}),k=(0,o.useInnerBlocksProps)(u,{template:i,templateInsertUpdatesSelection:!0,allowedBlocks:l,templateLock:"all"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{id:d||w,...k}))},save:e=>{const{name:i}=t,{name:l}=s(i),{attributes:a}=e,{anchor:r,id:c}=a,m=o.useBlockProps.save({className:`${l} swiper-slide`});return(0,n.createElement)("div",{id:r||c,...m},(0,n.createElement)(o.InnerBlocks.Content,null))}})})();