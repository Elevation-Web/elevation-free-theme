(()=>{"use strict";var o,r={1149:()=>{const o=window.ReactJSXRuntime,{addFilter:r}=wp.hooks,{createHigherOrderComponent:s}=wp.compose,{InspectorControls:t}=wp.blockEditor,{PanelBody:e}=wp.components,{Fragment:p}=wp.element,{select:n}=wp.data;r("editor.BlockEdit","custom/with-conditional-image-controls",s((r=>s=>{const{name:i,clientId:a}=s;if("core/image"===i){const l=n("core/block-editor").getBlockParents(a)[0],c=n("core/block-editor").getBlocksByClientId(l)[0];if(c&&"elevation/banner-standard"===c?.name){const n=wp.blocks.getBlockType(i);return n.supports&&(n.supports.anchor=!1,n.supports.align=!1,n.supports.alignwide=!1,n.supports.arialabel=!1,n.supports.background=!1,n.supports.classname=!1,n.supports.color=!1,n.supports.customclassname=!1,n.supports.dimensions=!1,n.supports.filter=!1,n.supports.html=!1,n.supports.inserter=!1,n.supports.interactivity=!1,n.supports.layout=!1,n.supports.lock=!1,n.supports.position=!1,n.supports.renaming=!1,n.supports.reusable=!1,n.supports.shadow=!1,n.supports.spacing=!1,n.supports.typography=!1,n.supports.splitting=!1),(0,o.jsxs)(p,{children:[(0,o.jsx)(r,{...s}),(0,o.jsx)(t,{children:(0,o.jsx)(e,{children:"My custom control"})})]})}}return(0,o.jsx)(r,{...s})}),"withConditionalImageControls"))}},s={};function t(o){var e=s[o];if(void 0!==e)return e.exports;var p=s[o]={exports:{}};return r[o](p,p.exports,t),p.exports}t.m=r,o=[],t.O=(r,s,e,p)=>{if(!s){var n=1/0;for(c=0;c<o.length;c++){for(var[s,e,p]=o[c],i=!0,a=0;a<s.length;a++)(!1&p||n>=p)&&Object.keys(t.O).every((o=>t.O[o](s[a])))?s.splice(a--,1):(i=!1,p<n&&(n=p));if(i){o.splice(c--,1);var l=e();void 0!==l&&(r=l)}}return r}p=p||0;for(var c=o.length;c>0&&o[c-1][2]>p;c--)o[c]=o[c-1];o[c]=[s,e,p]},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),(()=>{var o={2961:0,5061:0};t.O.j=r=>0===o[r];var r=(r,s)=>{var e,p,[n,i,a]=s,l=0;if(n.some((r=>0!==o[r]))){for(e in i)t.o(i,e)&&(t.m[e]=i[e]);if(a)var c=a(t)}for(r&&r(s);l<n.length;l++)p=n[l],t.o(o,p)&&o[p]&&o[p][0](),o[p]=0;return t.O(c)},s=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))})();var e=t.O(void 0,[5061],(()=>t(1149)));e=t.O(e)})();