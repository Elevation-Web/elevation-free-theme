(()=>{"use strict";var e,t={4803:(e,t,n)=>{const o=window.wp.blocks,r=JSON.parse('{"DD":"Background Callout - Content Box Center w/ Icon","UU":"elevation/interior-components--callout-background-content-center-icon"}'),i=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,c=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},s=[["elevation/interior-components--custom-container",{className:"callout-background-content-center-icon__custom-container",containerWidth:"medium",backgroundColor:"ui-foreground-primary-text-headings-span"},[["elevation/interior-components--group",{className:""},[["elevation/interior-components--image-with-srcset",{img:{url:"/wp-content/themes/elevation-framework/src/blocks/interior-components/callout-background-content-center-icon/images/callout-icon.webp"},layout:{type:"flex",justifyContent:"center"},align:"center"}],["core/heading",{level:2,content:"H2. Heading lorem",textColor:"ui-base-white",textAlign:"center",align:"center"}],["core/paragraph",{fontSize:"body",textColor:"ui-base-white",content:"Maximum 30 words. Nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementu..",textAlign:"center",align:"center"}],["elevation/interior-components--buttons",{layout:{type:"flex",justifyContent:"center"}},[["elevation/interior-components--button",{btnStyle:"primary--color-03",text:"Text Button"}],["elevation/interior-components--button",{btnStyle:"secondary--outline",text:"Text Button"}]]]]]]]],l=["core/heading","core/paragraph","elevation/interior-components--buttons"],u=n.p+"images/preview.ca816425.webp",p=window.ReactJSXRuntime,{UU:m,DD:d}=r;(0,o.registerBlockType)(m,{title:d,edit:e=>{const{UU:t}=r,{name:n,blockId:o}=c(t),{attributes:m}=e,{preview:d,style:g}=m,v=(0,i.useBlockProps)({className:n}),[b,h]=(0,a.useState)("");return(0,a.useEffect)((()=>{h((()=>v.className.includes("alignfull")?"":"contain "))}),[v.className]),d?(0,p.jsx)("div",{className:`${n}-preview`,children:(0,p.jsx)("img",{src:u,alt:"Preview",style:{objectFit:"contain",maxHeight:"100%",maxWidth:"100%"}})}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{"data-block-id":o,...v,...g,children:(0,p.jsx)("div",{className:`${b}${n}__container`,children:(0,p.jsx)("div",{className:`${n}__wrapper`,children:(0,p.jsx)(i.InnerBlocks,{template:s,allowedBlocks:l})})})})})},save:e=>{const{UU:t}=r,{name:n,blockId:o}=c(t),{attributes:a}=e,{style:s}=a,l=i.useBlockProps.save({className:n}),u=l.className.includes("alignfull")?"container ":"";return(0,p.jsx)("div",{"data-block-id":o,...l,...s,children:(0,p.jsx)("div",{className:`${u}${n}__container`,children:(0,p.jsx)("div",{className:`${n}__wrapper`,children:(0,p.jsx)(i.InnerBlocks.Content,{})})})})}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../../"})(),(()=>{var e={3028:0,3868:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,c,s]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var u=s(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[3868],(()=>o(4803)));r=o.O(r)})();