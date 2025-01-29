(()=>{"use strict";var e,r={3405:(e,r,t)=>{const o=window.wp.blocks,n=JSON.parse('{"DD":"Numbered Accordion","UU":"elevation/interior-components--numbered-accordion"}');function i(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(t=i(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const a=function(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=i(e))&&(o&&(o+=" "),o+=r);return o},s=(window.wp.i18n,window.wp.blockEditor),c=window.wp.element,l=t.p+"images/preview.d2423d6a.webp",p=[["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}],["elevation/interior-components--custom-container",{className:"numbered-accordion__custom-container",containerWidth:"medium"},[["elevation/interior-components--group",{className:"numbered-accordion__content"},[["core/heading",{level:2,content:"H2. Heading lorem ipsum"}],["core/paragraph",{content:"Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius."}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"solid",linePosition:"bottom",borderColor:"#E7E1EA"}],["elevation/interior-components--spacer",{line:!1,space:"spacer__extra-small"}],["elevation/interior-components--numbered-accordion-item",{}],["elevation/interior-components--numbered-accordion-item",{}],["elevation/interior-components--numbered-accordion-item",{}]]],["elevation/interior-components--spacer",{line:!1,space:"spacer__large"}]],u=["elevation/interior-components--numbered-accordion-item"],m=e=>{const r=e.split("/")[1].split("--");return{blockId:r.join("/"),name:r[1]}},d=window.ReactJSXRuntime,{UU:v,DD:b}=n;(0,o.registerBlockType)(v,{title:b,edit:e=>{const{UU:r}=n,{name:t,blockId:o}=m(r),{clientId:i,attributes:v,setAttributes:b}=e,{id:f,anchor:h,preview:w}=v,g=(0,s.useBlockProps)({className:a(t)}),k=(0,s.useInnerBlocksProps)(g,{template:p,templateInsertUpdatesSelection:!0,allowedBlocks:u,orientation:"vertical",attributes:{itemNumber:0}});return(0,c.useEffect)((()=>{b({id:h||`${t}-${i}`})}),[i,b,h]),w?(0,d.jsx)("div",{className:`${t}-preview`,children:(0,d.jsx)("img",{src:l,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{"data-block-id":o,"data-block-js":"true",id:h||f,...k})})},save:e=>{const{UU:r}=n,{name:t,blockId:o}=m(r),{attributes:i}=e,{style:a}=i,c=s.useBlockProps.save({className:t});return(0,d.jsx)("ul",{"data-block-id":o,...c,...a,"data-block-js":"true",children:(0,d.jsx)(s.InnerBlocks.Content,{})})}})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=(r,t,n,i)=>{if(!t){var a=1/0;for(p=0;p<e.length;p++){for(var[t,n,i]=e[p],s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(p--,1);var l=n();void 0!==l&&(r=l)}}return r}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,n,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={6700:0,7988:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[a,s,c]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var p=c(o)}for(r&&r(t);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},t=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[7988],(()=>o(3405)));n=o.O(n)})();