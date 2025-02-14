(()=>{"use strict";var e,t={9992:(e,t,n)=>{const o=window.React,r=window.wp.blocks,l=JSON.parse('{"title":"Feed, Layout: Events Horizontal Container","name":"elevation/contract-components--feed-events-horizontal-container"}'),a=window.wp.i18n,s=window.wp.blockEditor,i=window.wp.components,c=window.wp.serverSideRender;var d=n.n(c);const p=window.wp.element,u=window.wp.coreData,m=e=>{const{onChange:t,options:n,selectedOptions:r,type:l="post",max:a=3}=e,[s,c]=(0,p.useState)(""),[d,u]=(0,p.useState)(!1),m=(0,p.useRef)(),v=n&&n.filter((e=>"post"==l?e.title.rendered.toLowerCase().includes(s.toLowerCase()):e.name.toLowerCase().includes(s.toLowerCase())));return(0,o.createElement)("div",null,(0,o.createElement)("div",{style:{marginTop:"10px"}},(0,o.createElement)(i.SearchControl,{value:s,onClick:()=>u(!0),onChange:function(e){m?.current&&document.activeElement===m.current?u(!0):u(!1),c(e)},ref:m}),(0,o.createElement)("div",{style:{position:"relative"},className:"member-control__popover"},d&&(0,o.createElement)("div",{className:"component-popover"},v.length>0?v.map((e=>(0,o.createElement)(i.CheckboxControl,{key:e.id,label:"post"==l?e.title.rendered:e.name,checked:r.includes(e.id),disabled:r.length>=a&&!r.includes(e.id),onChange:()=>(e=>{const n=r.includes(e.id)?r.filter((t=>t!==e.id)):[...r,e.id];t(n)})(e)}))):(0,o.createElement)("p",null,"No results found.")))))},v=e=>{const{attributes:t,setAttributes:n}=e,{categorySelected:r,postsSelected:l,postsPerPage:c,filterBy:d}=t,{records:v}=(0,u.useEntityRecords)("taxonomy","tribe_events_cat"),{records:w}=(0,u.useEntityRecords)("postType","tribe_events"),[g,h]=(0,p.useState)({}),[f,b]=(0,p.useState)([]);return(0,p.useEffect)((()=>{if(v){const e={};v.forEach((t=>{e[t.name]={id:t.id,name:t.name,parent:t.parent}})),h(e)}}),[v]),(0,p.useEffect)((()=>{b(w)}),[w]),(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,a.__)("Category Filter")},(0,o.createElement)(i.SelectControl,{label:"Filter By",value:d,options:[{label:"Newest Oldest",value:"latest"},{label:"Oldest Newest",value:"oldest"},{label:"Event Categories",value:"category"},{label:"Events",value:"events"}],onChange:e=>n({filterBy:e})}),"category"==d&&g&&(0,o.createElement)(i.QueryControls,{categorySuggestions:g,onCategoryChange:function(e){var t;r.length>e.length?n({categorySelected:e}):(t=e,n({categorySelected:[...r,g[t[t.length-1]]]}))},selectedCategories:r})),(0,o.createElement)(i.PanelBody,{title:(0,a.__)("Category Filter")},(0,o.createElement)(i.RangeControl,{label:"Number of Items",value:c,onChange:e=>n({postsPerPage:e}),min:1,max:21})),"events"==d&&f&&(0,o.createElement)(i.PanelBody,{title:(0,a.__)("Select Posts")},(0,o.createElement)(m,{options:f,selectedOptions:l,onChange:e=>{n({postsSelected:e})}})))},{name:w,title:g}=l;(0,r.registerBlockType)(w,{title:g,icon:{src:(0,o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve"},(0,o.createElement)(i.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"}))},edit:e=>{const{attributes:t,clientId:n,setAttributes:r}=e,{id:a,anchor:c}=t,{name:u}=l,{name:m}=(e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}})(u),w=(0,s.useBlockProps)({className:`${m}`});return(0,p.useEffect)((()=>{r({id:`${m}-${n}`})}),[n,m,r]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(v,{...e}),(0,o.createElement)("div",{id:c||a,"data-block-id":m,...w},(0,o.createElement)(d(),{block:u,attributes:t,loadingResponsePlaceholder:i.Spinner})))}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,r,l]=e[d],s=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(s=!1,l<a&&(a=l));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,r,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={6265:0,1731:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,s,i]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var d=i(o)}for(t&&t(n);c<a.length;c++)l=a[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[1731],(()=>o(9992)));r=o.O(r)})();