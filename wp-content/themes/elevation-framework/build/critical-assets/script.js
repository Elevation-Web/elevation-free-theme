(()=>{"use strict";const e=e=>{let t=document.createElement("link");t.rel="stylesheet",t.href=`${e}/style-index.css`,document.head.appendChild(t)},t=(e,t="index")=>{let o=document.createElement("script");o.src=`${e}/${t}.js`,document.body.appendChild(o)},o=`${window.location.origin}/wp-content/themes/elevation-framework`,i=(i=[],r=!1,n=[],a)=>{let c=[];const s=Array.from(document.querySelectorAll('[data-block-js="true"]')).map((e=>e.dataset.blockId)),l=Array.from(document.querySelectorAll("[data-block-id]")).map((e=>e.dataset.blockId));if(n.length>0){const e=n.filter((e=>l.includes(e)));c=Array.from(new Set([...e,...i]))}else if(r){if(0===i.length)return;c=i}else c=Array.from(document.querySelectorAll("[data-block-id]")).filter(((e,t,o)=>o.map((e=>e.dataset.blockId)).indexOf(e.dataset.blockId)===t)).map((e=>e.dataset.blockId)),c=c.filter((e=>!i.includes(e)));a.length>0&&(c=c.filter((e=>!a.includes(e)))),c?.forEach((function(i){const r=`${o}/build/blocks/${i}`;e(r),s.includes(i)&&t(r,"view")}))},r=["interior-components/spacer","interior-components/swiper","interior-components/group"],n=["interior-components/group"],a=((e=[])=>{const t=Array.from(document.querySelectorAll("[data-block-id]")).map((e=>e.dataset.blockId)).filter((t=>!e.includes(t))).slice(0,2);return console.log("firstTwoBlockIds",t),t})(r);a&&r.push(...a),(()=>{const e=(o=[".accordion-item__item p",".banner-full-img img",".video-full-screen-pop-up img",".accordion-item__item img",".accordion-item__item .cta",".team-bios-with-pop-up .title",".team-bios-with-pop-up img",".team-bios-with-pop-up p",".team-bios-with-pop-up .cta",".no-animate *",".no-animate",".logos-descriptions-item img",".logos-carousel-item img",".testimonial-carousel-item__image img",".testimonial-single-item__image img"],["#primary p","#primary img","#primary .cta","#primary li","#primary h1","#primary h2","#primary h3","#primary h4","#primary h5","#primary h6",".fade-in-bottom"].map((e=>`${e}${o.map((e=>`:not(${e})`)).join("")}`)).join(",\n")),t=document.querySelectorAll(e);var o;t.forEach((e=>{e.classList.add("fade-in-bottom")}));const i={root:null,rootMargin:"0px",threshold:.1};if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const o=e.target;o.classList.add("animate"),t.unobserve(o)}}))}),i);t.forEach((t=>{e.observe(t)}))}})(),i(r,!0,["interior-components/swiper"],n),(e=>{var t=!0;const o=()=>{t&&(t=!1,e())};document.querySelector("body").addEventListener("mouseover",o,{once:!0}),window.addEventListener("keydown",o,{once:!0}),window.addEventListener("scroll",o,{once:!0})})((()=>{(()=>{const i=`${o}/build/assets`;e(i),t(i,"script")})(),i(r,!1,[],n)}))})();