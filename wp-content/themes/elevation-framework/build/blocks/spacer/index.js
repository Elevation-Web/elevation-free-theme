(()=>{"use strict";var e,t={145:()=>{const e=window.wp.blocks,t=JSON.parse('{"title":"Spacer","name":"elevation/spacer"}'),a=window.React,r=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components,o=(window.wp.element,[{label:"Small",value:"spacer__small"},{label:"Normal",value:"spacer__normal"},{label:"Large",value:"spacer__large"},{label:"Huge",value:"spacer__huge"}]),s=({space:e,attributes:t,setAttributes:r})=>(0,a.createElement)(n.SelectControl,{label:"Spacer Height",value:e,options:o,onChange:e=>{console.log("selectedItem",e),r({space:e})}}),{name:i,title:c}=t;(0,e.registerBlockType)(i,{title:c,edit:e=>{const{attributes:o,setAttributes:i}=e,c=t.name.split("/")[1],{anchor:p,space:u}=o,d=(0,l.useBlockProps)({className:`${c} ${u}`}),v=(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:(0,r.__)("Spacer Settings")},(0,a.createElement)(s,{space:u,attributes:o,setAttributes:i})));return(0,a.createElement)(a.Fragment,null,v,(0,a.createElement)("div",{id:p,...d,"aria-hidden":"true","data-block-id":c}))},save:e=>{const r=t.name.split("/")[1],{attributes:n}=e,{anchor:o,space:s}=n,i=l.useBlockProps.save({className:`${r} ${s}`});return(0,a.createElement)("div",{id:o,"data-block-id":r,"aria-hidden":"true",...i})}})}},a={};function r(e){var l=a[e];if(void 0!==l)return l.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,a,l,n)=>{if(!a){var o=1/0;for(p=0;p<e.length;p++){for(var[a,l,n]=e[p],s=!0,i=0;i<a.length;i++)(!1&n||o>=n)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(s=!1,n<o&&(o=n));if(s){e.splice(p--,1);var c=l();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[a,l,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={77:0,912:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var l,n,[o,s,i]=a,c=0;if(o.some((t=>0!==e[t]))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(i)var p=i(r)}for(t&&t(a);c<o.length;c++)n=o[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(p)},a=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=r.O(void 0,[912],(()=>r(145)));l=r.O(l)})();