(()=>{"use strict";var e,t={9989:(e,t,i)=>{const n=window.wp.components,r=window.wp.blocks,o=JSON.parse('{"DD":"Text Block, Layout: Heading + Subheading + List","UU":"elevation/interior-components--text-block-heading-subheading-list"}'),c=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,s=i.p+"images/preview.13a69811.webp",l=["core/heading","core/paragraph","elevation/interior-components--buttons","elevation/interior-components--spacer"],p=[["elevation/interior-components--custom-container",{className:"text-block-heading-subheading-list__container",containerWidth:"medium"},[["elevation/interior-components--group",{className:"text-block-heading-subheading-list__heading"},[["core/heading",{content:"H2. Heading lorem ipsum euismod sagittis vitae at urna ",level:2}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots"}],["elevation/interior-components--spacer",{space:"spacer__extra-small"}],["elevation/interior-components--group",{className:"text-block-heading-subheading-list__list-wrapper"},[["elevation/interior-components--text-block-heading-subheading-list-item",{}],["elevation/interior-components--text-block-heading-subheading-list-item",{}]]],["elevation/interior-components--spacer",{space:"spacer__extra-small",line:!0,lineType:"dots"}],["elevation/interior-components--spacer",{space:"spacer__extra-small"}]]]],h=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},d=window.ReactJSXRuntime,{UU:m,DD:v}=o;(0,r.registerBlockType)(m,{title:v,icon:{src:(0,d.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0",children:(0,d.jsxs)(n.G,{children:[(0,d.jsx)(n.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(n.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(n.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,d.jsx)(n.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})]})})},edit:e=>{const{UU:t}=o,{name:i,blockId:n}=h(t),{clientId:r,attributes:m,setAttributes:v}=e,{id:u,anchor:g,preview:w}=m;(0,a.useEffect)((()=>{v({id:`${i}-${r}`})}),[r,i,v]);const b=(0,c.useBlockProps)({className:`${i}`});return w?(0,d.jsx)("div",{className:`${i}-preview`,children:(0,d.jsx)("img",{src:s,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{id:g||u,"data-block-id":n,...b,children:(0,d.jsx)(c.InnerBlocks,{template:p,allowedBlocks:l,templateLock:!1})})})},save:e=>{const{UU:t}=o,{name:i,blockId:n}=h(t),{attributes:r}=e,{anchor:a,id:s}=r,l=c.useBlockProps.save({className:`${i}`});return(0,d.jsx)("div",{id:a||s,"data-block-id":n,...l,children:(0,d.jsx)(c.InnerBlocks.Content,{})})}})}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,i,r,o)=>{if(!i){var c=1/0;for(p=0;p<e.length;p++){for(var[i,r,o]=e[p],a=!0,s=0;s<i.length;s++)(!1&o||c>=o)&&Object.keys(n.O).every((e=>n.O[e](i[s])))?i.splice(s--,1):(a=!1,o<c&&(c=o));if(a){e.splice(p--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[i,r,o]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),(()=>{var e={6947:0,7499:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var r,o,[c,a,s]=i,l=0;if(c.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var p=s(n)}for(t&&t(i);l<c.length;l++)o=c[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},i=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var r=n.O(void 0,[7499],(()=>n(9989)));r=n.O(r)})();