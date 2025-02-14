(()=>{"use strict";const e=window.React,t=window.wp.components,n=window.wp.blocks,c=JSON.parse('{"title":"Text Block, Layout: List w/Button Item.","name":"elevation/interior-components--text-block-list-w-button-item"}'),o=(window.wp.i18n,window.wp.blockEditor),a=window.wp.element,r=["core/heading","core/paragraph","elevation/interior-components--buttons"],l=[["core/heading",{content:"H4. Subheading lorem ipsum",level:3,fontSize:"h4"}],["core/paragraph",{content:'<a href="#">Name of Block: Text-Block, Layout: List w/Button.</a> Maximum 50 words per paragraph. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.'}],["elevation/interior-components--buttons",{},[["elevation/interior-components--button",{btnStyle:"primary--color-01",text:"Text Button"}]]]],i=e=>{const t=e.split("/")[1].split("--");return{blockId:t.join("/"),name:t[1]}},{name:s,title:m}=c;(0,n.registerBlockType)(s,{title:m,icon:{src:(0,e.createElement)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-5.0 -10.0 110.0 135.0"},(0,e.createElement)(t.G,null,(0,e.createElement)(t.Path,{d:"m37.5 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,e.createElement)(t.Path,{d:"m79.168 13.543h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v29.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-29.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 36.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-29.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,e.createElement)(t.Path,{d:"m37.5 55.207h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v16.668c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-16.668c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 23.957c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-16.668c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"}),(0,e.createElement)(t.Path,{d:"m79.168 67.707h-16.668c-4.0195 0-7.293 3.2734-7.293 7.293v4.168c0 4.0195 3.2734 7.293 7.293 7.293h16.668c4.0195 0 7.293-3.2734 7.293-7.293v-4.168c0-4.0195-3.2734-7.293-7.293-7.293zm1.043 11.457c0 0.57422-0.46875 1.043-1.043 1.043h-16.668c-0.57422 0-1.043-0.46875-1.043-1.043v-4.168c0-0.57422 0.46875-1.043 1.043-1.043h16.668c0.57422 0 1.043 0.46875 1.043 1.043z"})))},edit:t=>{const{name:n}=c,{name:s}=i(n),{clientId:m,attributes:u,setAttributes:p}=t,{id:h,anchor:d}=u;(0,a.useEffect)((()=>{p({id:`${s}-${m}`})}),[m,s,p]);const w=(0,o.useBlockProps)({className:`${s}`});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{id:d||h,...w},(0,e.createElement)(o.InnerBlocks,{template:l,allowedBlocks:r,templateLock:!1})))},save:t=>{const{name:n}=c,{name:a}=i(n),{attributes:r}=t,{anchor:l,id:s}=r,m=o.useBlockProps.save({className:`${a} `});return(0,e.createElement)("div",{id:l||s,...m},(0,e.createElement)(o.InnerBlocks.Content,null))}})})();