(()=>{"use strict";var t,e={717:()=>{var t=jQuery.noConflict();t(document).ready((function(){!function(){if(0!==t("#counter").length){var e=t("#counter").offset().top,r=0;t(window).bind("scroll",(function(){t(window).scrollTop()>e-500?0==r&&(t(".numscroller").each((function(){t(this).prop("Counter",0).animate({Counter:parseInt(t(this).attr("data-num"))},{duration:3e3,easing:"swing",step:function(e){t(this).text(Math.ceil(e).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}})})),t(".numscrollerdec").each((function(){t(this).prop("Counter",0).animate({Counter:parseFloat(t(this).attr("data-num")).toFixed(1)},{duration:3e3,easing:"swing",step:function(e){t(this).text(parseFloat(e).toFixed(1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}})})),t(".numscrolleryears").each((function(){t(this).prop("Counter",0).animate({Counter:parseInt(t(this).text())},{duration:3e3,easing:"swing",step:function(e){t(this).text(parseInt(e))}})})),r=1):r=0}))}}()}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var a=1/0;for(l=0;l<t.length;l++){for(var[r,o,i]=t[l],s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={8285:0,7675:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[a,s,u]=r,c=0;if(a.some((e=>0!==t[e]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=globalThis.webpackChunkelevation_framework=globalThis.webpackChunkelevation_framework||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[7675],(()=>n(717)));o=n.O(o)})();