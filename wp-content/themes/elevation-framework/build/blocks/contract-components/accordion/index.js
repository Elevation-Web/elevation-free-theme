(()=>{"use strict";var e,t={944:(e,t,r)=>{const o=window.wp.blocks,n=JSON.parse('{"DD":"Accordion","UU":"elevation/contract-components--accordion"}');function i(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=i(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}const a=function(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o},c=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,l=r.p+"images/preview.a156d4be.webp",p=[["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}],["elevation/interior-components--custom-container",{className:"accordion__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:"accordion__content"},[["core/heading",{level:2,content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius."}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"solid",linePosition:"bottom",borderColor:"#E7E1EA"}],["elevation/interior-components--spacer",{line:!1,space:"spacer__extra-small"}],["elevation/contract-components--accordion-item",{}],["elevation/contract-components--accordion-item",{}],["elevation/contract-components--accordion-item",{}]]],["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}]],u=["elevation/contract-components--accordion-item"],m=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},d=window.ReactJSXRuntime,{UU:v,DD:f}=n;(0,o.registerBlockType)(v,{title:f,edit:e=>{const{UU:t}=n,{name:r,blockId:o}=m(t),{clientId:i,attributes:v,setAttributes:f}=e,{id:b,anchor:h,preview:w}=v,g=(0,c.useBlockProps)({className:a(r)}),k=(0,c.useInnerBlocksProps)(g,{template:p,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"vertical"});return(0,s.useEffect)((()=>{f({id:h||`${r}-${i}`})}),[i,f,h]),w?(0,d.jsx)("div",{className:`${r}-preview`,children:(0,d.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{"data-block-id":o,"data-block-js":"true",id:h||b,...k})})},save:e=>{const{UU:t}=n,{name:r,blockId:o}=m(t),{attributes:i}=e,{style:a}=i,s=c.useBlockProps.save({className:r});return(0,d.jsx)("div",{"data-block-id":o,...s,...a,"data-block-js":"true",children:(0,d.jsx)(c.InnerBlocks.Content,{})})}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,n,i]=e[p],c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(p--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,n,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={1245:0,3297:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,c,s]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(s)var p=s(o)}for(t&&t(r);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[3297],(()=>o(944)));n=o.O(n)})();