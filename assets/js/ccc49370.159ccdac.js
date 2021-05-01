(window.webpackJsonp=window.webpackJsonp||[]).push([[55,13,15],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(147),c=a(181),i=a(142),o=a(143);var s=function(e){const{nextItem:t,prevItem:a}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(i.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(i.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(i.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(155),d=a(163),u=a(185);t.default=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:i}=t,{title:o,description:p,nextItem:h,prevItem:b,editUrl:v}=i,{hide_table_of_contents:g}=n;return r.a.createElement(l.a,{title:o,description:p,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(m.a,{sidebar:a})),r.a.createElement("main",{className:"col col--7"},r.a.createElement(c.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,v&&r.a.createElement(u.a,{editUrl:v})),(h||b)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(s,{nextItem:h,prevItem:b}))),!g&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(d.a,{toc:t.toc})))))}},144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(145),c=a.n(l),i=a(23),o=a(16);t.a=e=>{const t=Object(n.useRef)(!1),l=Object(n.useRef)(null),s=Object(i.useHistory)(),{siteConfig:m={}}=Object(o.default)(),{baseUrl:d}=m,u=()=>{t.current||(Promise.all([fetch(`${d}search-doc.json`).then((e=>e.json())),fetch(`${d}lunr-index.json`).then((e=>e.json())),Promise.all([a.e(68),a.e(72)]).then(a.bind(null,150)),a.e(45).then(a.t.bind(null,149,7))]).then((([e,t,{default:a}])=>{((e,t,a)=>{new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,a)=>{const n=d+a.url;document.createElement("a").href=n,s.push(n)}})})(e,t,a)})),t.current=!0)},p=Object(n.useCallback)((t=>{l.current.contains(t.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:p,onBlur:p,ref:l}))}},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(141);var c=function(e,t,a){const[r,l]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,c=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!c;){const e=i[a],{href:o}=e,s=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===s&&(r&&r.classList.remove(t),e.classList.add(t),l(e),c=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(56),o=a.n(i);const s="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return c(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:e}))}},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),l=a(142),c=a(3),i=a(141),o=a(61),s=a.n(o);var m=({className:e,...t})=>r.a.createElement("svg",Object(c.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(i.a)(s.a.iconEdit,e),"aria-label":"Edit page"},t),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function d({editUrl:e}){return r.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(m,null),r.a.createElement(l.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);