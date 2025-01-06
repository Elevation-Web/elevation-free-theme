(()=>{"use strict";var e,t={5416:(e,t,n)=>{const o=window.wp.blocks,r=JSON.parse('{"title":"Feed, Layout: Events Horizontal Container","name":"elevation/contract-components--feed-events-horizontal-container"}'),s=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components,i=window.wp.serverSideRender;var c=n.n(i);const d=window.wp.element,p=window.wp.coreData,u=window.ReactJSXRuntime,v=e=>{const{onChange:t,options:n,selectedOptions:o,type:r="post"}=e,[s,l]=(0,d.useState)(""),[i,c]=(0,d.useState)(!1),p=(0,d.useRef)(),v=n&&n.filter((e=>"post"==r?e.title.rendered.toLowerCase().includes(s.toLowerCase()):e.name.toLowerCase().includes(s.toLowerCase())));return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{style:{marginTop:"10px"},children:[(0,u.jsx)(a.SearchControl,{value:s,onClick:()=>c(!0),onChange:function(e){p?.current&&document.activeElement===p.current?c(!0):c(!1),l(e)},ref:p}),(0,u.jsx)("div",{style:{position:"relative"},className:"member-control__popover",children:i&&(0,u.jsx)("div",{className:"component-popover",children:v.length>0?v.map((e=>(0,u.jsx)(a.CheckboxControl,{label:"post"==r?e.title.rendered:e.name,checked:o.includes(e.id),onChange:()=>(e=>{const n=o.includes(e.id)?o.filter((t=>t!==e.id)):[...o,e.id];t(n)})(e)},e.id))):(0,u.jsx)("p",{children:"No results found."})})})]})})},h=e=>{const{attributes:t,setAttributes:n}=e,{categorySelected:o,postsSelected:r,postsPerPage:i,filterBy:c}=t,{records:h}=(0,p.useEntityRecords)("taxonomy","tribe_events_cat"),{records:w}=(0,p.useEntityRecords)("postType","tribe_events"),[g,m]=(0,d.useState)({}),[x,f]=(0,d.useState)([]);return(0,d.useEffect)((()=>{if(h){const e={};h.forEach((t=>{e[t.name]={id:t.id,name:t.name,parent:t.parent}})),m(e)}}),[h]),(0,d.useEffect)((()=>{f(w)}),[w]),(0,u.jsxs)(l.InspectorControls,{children:[(0,u.jsxs)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:[(0,u.jsx)(a.SelectControl,{label:"Filter By",value:c,options:[{label:"Newest Oldest",value:"latest"},{label:"Oldest Newest",value:"oldest"},{label:"Event Categories",value:"category"},{label:"Events",value:"events"}],onChange:e=>n({filterBy:e})}),"category"==c&&g&&(0,u.jsx)(a.QueryControls,{categorySuggestions:g,onCategoryChange:function(e){var t;o.length>e.length?n({categorySelected:e}):(t=e,n({categorySelected:[...o,g[t[t.length-1]]]}))},selectedCategories:o})]}),(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:(0,u.jsx)(a.RangeControl,{label:"Number of Items",value:i,onChange:e=>n({postsPerPage:e}),min:1,max:21})}),"events"==c&&x&&(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Select Posts"),children:(0,u.jsx)(v,{options:x,selectedOptions:r,onChange:e=>{n({postsSelected:e})}})})]})},{name:w,title:g}=r;(0,o.registerBlockType)(w,{title:g,icon:{src:(0,u.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,u.jsx)(a.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{attributes:t,clientId:n,setAttributes:o}=e,{id:s,anchor:i}=t,{name:p}=r,{name:v}=(e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}})(p),w=(0,l.useBlockProps)({className:`${v}`});return(0,d.useEffect)((()=>{o({id:`${v}-${n}`})}),[n,v,o]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{...e}),(0,u.jsx)("div",{id:i||s,"data-block-id":v,...w,children:(0,u.jsx)(c(),{block:p,attributes:t,loadingResponsePlaceholder:a.Spinner})})]})}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,r,s)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,r,s]=e[d],a=!0,i=0;i<n.length;i++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={6265:0,1731:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[l,a,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(i)var d=i(o)}for(t&&t(n);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[1731],(()=>o(5416)));r=o.O(r)})();