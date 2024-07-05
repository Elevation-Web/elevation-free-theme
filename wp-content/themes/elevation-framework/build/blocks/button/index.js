(()=>{"use strict";var e,t={25:()=>{const e=window.wp.blocks,t=JSON.parse('{"title":"Button","name":"elevation/button"}'),a=window.React,l=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.components,{name:o,title:i}=t;(0,e.registerBlockType)(o,{title:i,edit:e=>{const{name:o}=t,i=o.split("/")[1],{attributes:s,setAttributes:c}=e,{text:u,url:v,btnStyle:p,ariaLabel:b}=s;console.log("attributes",s);const m=(0,n.useBlockProps)({className:`${i} cta cta--${p}`}),d=(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(r.PanelBody,{title:(0,l.__)("Button Styles","elevation")},(0,a.createElement)(r.SelectControl,{label:(0,l.__)("Button Style","elevation"),value:p,options:[{label:(0,l.__)("Primary","elevation"),value:"primary"},{label:(0,l.__)("Secondary","elevation"),value:"secondary"}],onChange:e=>c({...s,btnStyle:e})}),(0,a.createElement)(r.__experimentalInputControl,{value:v,placeholder:(0,l.__)("Button URL...","elevation"),onChange:e=>c({...s,url:e})})),(0,a.createElement)(r.PanelBody,{title:(0,l.__)("Button Aria Label","elevation")},(0,a.createElement)(r.__experimentalInputControl,{value:b,placeholder:"Button Aria Label...",onChange:e=>c({...s,ariaLabel:e})})));return(0,a.createElement)(a.Fragment,null,d,(0,a.createElement)("div",{...m},(0,a.createElement)(r.TextControl,{placeholder:(0,l.__)("Button text...","elevation"),value:u,onChange:e=>c({...s,text:e})})))},save:e=>{const{name:l}=t,r=l.split("/")[1],{attributes:o}=e,{text:i,url:s,btnStyle:c,ariaLabel:u}=o,v=n.useBlockProps.save({className:`${r} cta cta--${c}`}),p=u||i;return(0,a.createElement)("a",{...v,href:s,"aria-label":p},i)}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,a,n,r)=>{if(!a){var o=1/0;for(u=0;u<e.length;u++){for(var[a,n,r]=e[u],i=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,n,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={807:0,133:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[o,i,s]=a,c=0;if(o.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(s)var u=s(l)}for(t&&t(a);c<o.length;c++)r=o[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},a=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[133],(()=>l(25)));n=l.O(n)})();