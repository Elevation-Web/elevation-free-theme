(()=>{"use strict";var e,t={2743:()=>{const e=window.wp.blocks,t=JSON.parse('{"title":"Buttons","name":"elevation/interior-components--buttons"}');function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}const n=function(){for(var e,t,n=0,o="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o},o=(window.wp.i18n,window.wp.blockEditor),i=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},s=window.ReactJSXRuntime,a=window.React,l=window.wp.primitives,c=(0,a.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(l.Path,{d:"M14.5 17.5H9.5V16H14.5V17.5Z M14.5 8H9.5V6.5H14.5V8Z M7 3.5H17C18.1046 3.5 19 4.39543 19 5.5V9C19 10.1046 18.1046 11 17 11H7C5.89543 11 5 10.1046 5 9V5.5C5 4.39543 5.89543 3.5 7 3.5ZM17 5H7C6.72386 5 6.5 5.22386 6.5 5.5V9C6.5 9.27614 6.72386 9.5 7 9.5H17C17.2761 9.5 17.5 9.27614 17.5 9V5.5C17.5 5.22386 17.2761 5 17 5Z M7 13H17C18.1046 13 19 13.8954 19 15V18.5C19 19.6046 18.1046 20.5 17 20.5H7C5.89543 20.5 5 19.6046 5 18.5V15C5 13.8954 5.89543 13 7 13ZM17 14.5H7C6.72386 14.5 6.5 14.7239 6.5 15V18.5C6.5 18.7761 6.72386 19 7 19H17C17.2761 19 17.5 18.7761 17.5 18.5V15C17.5 14.7239 17.2761 14.5 17 14.5Z"})),{name:p,title:v}=t;(0,e.registerBlockType)(p,{title:v,icon:c,edit:e=>{const{name:r}=t,{name:a}=i(r),l=(0,o.useBlockProps)({className:n(a)}),c=(0,o.useInnerBlocksProps)(l,{template:[["elevation/interior-components--button"]],templateInsertUpdatesSelection:!0});return(0,s.jsx)("div",{...c})},save:e=>{const{name:r}=t,{name:a}=i(r),l=o.useBlockProps.save({className:n(a)}),c=o.useInnerBlocksProps.save(l);return(0,s.jsx)("div",{...c})}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var s=1/0;for(p=0;p<e.length;p++){for(var[r,o,i]=e[p],a=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,o,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={327:0,3611:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[s,a,l]=r,c=0;if(s.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var p=l(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[3611],(()=>n(2743)));o=n.O(o)})();