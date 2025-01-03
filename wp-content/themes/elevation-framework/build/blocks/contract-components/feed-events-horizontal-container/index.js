(()=>{"use strict";var e,t={5416:(e,t,o)=>{const n=window.wp.blocks,r=JSON.parse('{"title":"Feed, Layout: Default Blog w/Content Boxes Container","name":"elevation/contract-components--feed-events-horizontal-container"}'),s=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components,i=window.wp.serverSideRender;var c=o.n(i);const d=window.wp.element,p=window.wp.coreData,u=window.ReactJSXRuntime,h=e=>{const{onChange:t,options:o,selectedOptions:n,type:r="post"}=e,[s,l]=(0,d.useState)(""),[i,c]=(0,d.useState)(!1),p=(0,d.useRef)(),h=o&&o.filter((e=>"post"==r?e.title.rendered.toLowerCase().includes(s.toLowerCase()):e.name.toLowerCase().includes(s.toLowerCase())));return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{style:{marginTop:"10px"},children:[(0,u.jsx)(a.SearchControl,{value:s,onClick:()=>c(!0),onChange:function(e){p?.current&&document.activeElement===p.current?c(!0):c(!1),l(e)},ref:p}),(0,u.jsx)("div",{style:{position:"relative"},className:"member-control__popover",children:i&&(0,u.jsx)("div",{className:"component-popover",children:h.length>0?h.map((e=>(0,u.jsx)(a.CheckboxControl,{label:"post"==r?e.title.rendered:e.name,checked:n.includes(e.id),onChange:()=>(e=>{const o=n.includes(e.id)?n.filter((t=>t!==e.id)):[...n,e.id];t(o)})(e)},e.id))):(0,u.jsx)("p",{children:"No results found."})})})]})})},v=e=>{const{attributes:t,setAttributes:o}=e,{categorySelected:n,postsSelected:r,postsPerPage:i,filterBy:c}=t,{records:v}=(0,p.useEntityRecords)("taxonomy","category"),{records:w}=(0,p.useEntityRecords)("postType","post"),[g,m]=(0,d.useState)({}),[x,f]=(0,d.useState)([]);return(0,d.useEffect)((()=>{if(v){const e={};v.forEach((t=>{e[t.name]={id:t.id,name:t.name,parent:t.parent}})),m(e)}}),[v]),(0,d.useEffect)((()=>{f(w)}),[w]),(0,u.jsxs)(l.InspectorControls,{children:[(0,u.jsxs)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:[(0,u.jsx)(a.SelectControl,{label:"Filter By",value:c,options:[{label:"Newest Oldest",value:"latest"},{label:"Oldest Newest",value:"oldest"},{label:"Category",value:"category"},{label:"Posts",value:"posts"}],onChange:e=>o({filterBy:e})}),"category"==c&&g&&(0,u.jsx)(a.QueryControls,{categorySuggestions:g,onCategoryChange:function(e){var t;n.length>e.length?o({categorySelected:e}):(t=e,o({categorySelected:[...n,g[t[t.length-1]]]}))},selectedCategories:n})]}),(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Category Filter"),children:(0,u.jsx)(a.RangeControl,{label:"Number of Items",value:i,onChange:e=>o({postsPerPage:e}),min:1,max:21})}),"posts"==c&&x&&(0,u.jsx)(a.PanelBody,{title:(0,s.__)("Select Posts"),children:(0,u.jsx)(h,{options:x,selectedOptions:r,onChange:e=>{o({postsSelected:e})}})})]})},{name:w,title:g}=r;(0,n.registerBlockType)(w,{title:g,icon:{src:(0,u.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",children:(0,u.jsx)(a.Path,{d:"M95.833,0h-18.75c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h18.75C100,100,100,100,100,95.833V4.167  C100,0,100,0,95.833,0z M22.917,0H4.167C0,0,0,0,0,4.167v91.667C0,100,0,100,4.167,100h18.75c4.167,0,4.167,0,4.167-4.167V4.167  C27.083,0,27.083,0,22.917,0z M60.417,0H39.583c-4.167,0-4.167,0-4.167,4.167v91.667c0,4.167,0,4.167,4.167,4.167h20.833  c4.167,0,4.167,0,4.167-4.167V4.167C64.583,0,64.583,0,60.417,0z"})})},edit:e=>{const{attributes:t,clientId:o,setAttributes:n}=e,{id:s,anchor:i}=t,{name:p}=r,{name:h}=(e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}})(p),w=(0,l.useBlockProps)({className:`${h}`});return(0,d.useEffect)((()=>{n({id:`${h}-${o}`})}),[o,h,n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v,{...e}),(0,u.jsx)("div",{id:i||s,"data-block-id":h,...w,children:(0,u.jsx)(c(),{block:p,attributes:t,loadingResponsePlaceholder:a.Spinner})})]})}})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,o,r,s)=>{if(!o){var l=1/0;for(d=0;d<e.length;d++){for(var[o,r,s]=e[d],a=!0,i=0;i<o.length;i++)(!1&s||l>=s)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,r,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={6265:0,1731:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,s,[l,a,i]=o,c=0;if(l.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(i)var d=i(n)}for(t&&t(o);c<l.length;c++)s=l[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},o=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[1731],(()=>n(5416)));r=n.O(r)})();