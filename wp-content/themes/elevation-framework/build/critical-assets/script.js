(()=>{"use strict";const e=e=>{let t=document.createElement("link");t.rel="stylesheet",t.href=`${e}/style-index.css`,document.head.appendChild(t)},t=(e,t="index")=>{let n=document.createElement("script");n.src=`${e}/${t}.js`,document.body.appendChild(n)},n=`${window.location.origin}/wp-content/themes/elevation-framework`,d=(d,o=!1)=>{let s=[];if(o){if(0===d.length)return;s=d}else s=Array.from(document.querySelectorAll(".dynamic-assets-load")).filter(((e,t,n)=>n.map((e=>e.dataset.id)).indexOf(e.dataset.id)===t)).map((e=>e.dataset.id)),s=s.filter((e=>!d.includes(e)));s?.forEach((function(d){const o=`${n}/build/blocks/${d}`;e(o),t(o)}))},o=[],s=Array.from(document.querySelectorAll(".dynamic-assets-load")).map((e=>e.dataset.id)).slice(0,2);s&&o.push(...s),d(o,!0),(e=>{var t=!0;const n=()=>{t&&(t=!1,e())};document.querySelector("body").addEventListener("mouseover",n,{once:!0}),window.addEventListener("keydown",n,{once:!0}),window.addEventListener("scroll",n,{once:!0})})((()=>{(()=>{const d=`${n}/build/assets`;e(d),t(d,"script")})(),d(o)}))})();