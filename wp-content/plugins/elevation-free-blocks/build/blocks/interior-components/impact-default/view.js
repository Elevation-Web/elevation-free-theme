(()=>{"use strict";(()=>{const e=document.querySelectorAll(".impact-default-item__value-value"),t={root:null,rootMargin:"0px",threshold:.1};if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const n=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const n=e.target,r=n.innerText;!function(e,t,n,r){const a=1500,o=(Math.abs(Math.floor(a/t)),(new Date).getTime()+a);requestAnimationFrame((function c(){const i=(new Date).getTime(),s=Math.max((o-i)/a,0),l=Math.round(t-s*t),u=e.classList.contains("numscrolleryears");e.innerText=function(e,t,n,r=!1){let a=e.toLocaleString();return r&&(a=a.replace(/,/g,"")),`${t}${a}${n}`}(l,n,r,u),l<t&&requestAnimationFrame(c)}))}(n,parseFloat(r.replace(/[^0-9.]/g,"")),r.match(/^[^\d]+/)?.[0]||"",r.match(/[^\d]+$/)?.[0]||""),t.unobserve(n)}}))}),t);e.forEach((e=>{n.observe(e)}))}})()})();