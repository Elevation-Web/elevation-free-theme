(()=>{"use strict";var e,t={9882:(e,t,r)=>{const n=window.wp.blocks,o=JSON.parse('{"title":"Accordion","name":"elevation/interior-components--accordion"}'),i=window.React;function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const c=function(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n},l=(window.wp.i18n,window.wp.blockEditor),s=window.wp.element,p=r.p+"images/preview.a156d4be.webp",m=[["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}],["elevation/interior-components--custom-container",{className:"accordion__custom-container",containerWidth:"small"},[["elevation/interior-components--group",{className:"accordion__content"},[["core/heading",{level:2,content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius."}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"solid",linePosition:"bottom",borderColor:"#E7E1EA"}],["elevation/interior-components--spacer",{line:!1,space:"spacer__extra-small"}],["elevation/interior-components--accordion-item",{}],["elevation/interior-components--accordion-item",{}],["elevation/interior-components--accordion-item",{}]]],["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}]],u=["elevation/interior-components--accordion-item"],v=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},{name:d,title:f}=o;(0,n.registerBlockType)(d,{title:f,edit:e=>{const{name:t}=o,{name:r,blockId:n}=v(t),{clientId:a,attributes:d,setAttributes:f}=e,{id:b,anchor:w,preview:g}=d,h=(0,l.useBlockProps)({className:c(r)}),k=(0,l.useInnerBlocksProps)(h,{template:m,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"vertical"});return(0,s.useEffect)((()=>{f({id:w||`${r}-${a}`})}),[a,f,w]),g?(0,i.createElement)("div",{className:`${r}-preview`},(0,i.createElement)("img",{src:p,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})):(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",{"data-block-id":n,"data-block-js":"true",id:w||b,...k}))},save:e=>{const{name:t}=o,{name:r,blockId:n}=v(t),{attributes:a}=e,{style:c}=a,s=l.useBlockProps.save({className:r});return(0,i.createElement)("div",{"data-block-id":n,...s,...c,"data-block-js":"true"},(0,i.createElement)(l.InnerBlocks.Content,null))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,o,i]=e[p],c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(p--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,o,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={8434:0,3173:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,c,l]=r,s=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var p=l(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[3173],(()=>n(9882)));o=n.O(o)})();