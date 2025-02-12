(()=>{"use strict";var e,t={479:(e,t,i)=>{const a=window.wp.components,r=window.wp.blocks,n=JSON.parse('{"DD":"Text Block, Layout: Float Image","UU":"elevation/interior-components--text-block-float-image"}'),o=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,c=i.p+"images/preview.256be34b.webp",l=["core/heading","core/paragraph","elevation/interior-components--buttons"],u=[["elevation/interior-components--custom-container",{className:"text-block-float-image__container",containerWidth:"medium"},[["elevation/interior-components--group",{className:"text-block-float-image__info"},[["elevation/interior-components--image-with-srcset",{showPosition:!0,inheritClassName:"float-right media"}],["core/heading",{content:"H2. Subheading lorem aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales",level:2,fontSize:"h4"}],["core/paragraph",{content:"Name of Block: Text-Block, Layout: Float Image. Ideal maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse."}],["core/paragraph",{content:"Tincidunt id aliquet risus feugiat in ante metus dictum at tempor <strong>euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.</strong>"}],["core/paragraph",{content:'Accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra <a href="#">adipiscing at in tellus integer feugiat scelerisque</a> varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus.'}]]]]]],m=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},d=window.ReactJSXRuntime,{UU:p,DD:v}=n;(0,r.registerBlockType)(p,{title:v,icon:{src:(0,d.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,d.jsxs)(a.G,{children:[(0,d.jsx)(a.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(a.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(a.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(a.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{UU:t}=n,{name:i,blockId:a}=m(t),{clientId:r,attributes:p,setAttributes:v}=e,{id:h,anchor:g,preview:b,verticalAlignment:w}=p;(0,s.useEffect)((()=>{v({id:`${i}-${r}`})}),[r,i,v]);const f=(0,o.useBlockProps)({className:`${i} align-${w}`});return b?(0,d.jsx)("div",{className:`${i}-preview`,children:(0,d.jsx)("img",{src:c,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{id:g||h,"data-block-id":a,...f,children:(0,d.jsx)(o.InnerBlocks,{template:u,allowedBlocks:l,templateLock:!1})})})},save:e=>{const{UU:t}=n,{name:i,blockId:a}=m(t),{attributes:r}=e,{anchor:s,id:c,verticalAlignment:l}=r,u=o.useBlockProps.save({className:`${i} align-${l}`});return(0,d.jsx)("div",{id:s||c,"data-block-id":a,...u,children:(0,d.jsx)(o.InnerBlocks.Content,{})})}})}},i={};function a(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,i,r,n)=>{if(!i){var o=1/0;for(u=0;u<e.length;u++){for(var[i,r,n]=e[u],s=!0,c=0;c<i.length;c++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](i[c])))?i.splice(c--,1):(s=!1,n<o&&(o=n));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[i,r,n]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../../"})(),(()=>{var e={1373:0,9777:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var r,n,[o,s,c]=i,l=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var u=c(a)}for(t&&t(i);l<o.length;l++)n=o[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},i=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var r=a.O(void 0,[9777],(()=>a(479)));r=a.O(r)})();