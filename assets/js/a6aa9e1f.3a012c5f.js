(window.webpackJsonp=window.webpackJsonp||[]).push([[40,13,15],{137:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t(147),i=t(181),s=t(143),o=t(142);var d=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(o.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.a.createElement(o.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},r.a.createElement(o.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=t(155);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:s}}=Object(l.default)(),{blogDescription:o,blogTitle:p,permalink:h}=a,u="/"===h?s:p;return r.a.createElement(c.a,{title:u,description:o,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(m.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},t.map((({content:e})=>r.a.createElement(i.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(d,{metadata:a})))))}},144:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(145),c=t.n(l),i=t(23),s=t(16);a.a=e=>{const a=Object(n.useRef)(!1),l=Object(n.useRef)(null),o=Object(i.useHistory)(),{siteConfig:d={}}=Object(s.default)(),{baseUrl:m}=d,p=()=>{a.current||(Promise.all([fetch(`${m}search-doc.json`).then((e=>e.json())),fetch(`${m}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(68),t.e(72)]).then(t.bind(null,150)),t.e(45).then(t.t.bind(null,149,7))]).then((([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=m+t.url;document.createElement("a").href=n,o.push(n)}})})(e,a,t)})),a.current=!0)},h=Object(n.useCallback)((a=>{l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:h,onBlur:h,ref:l}))}}}]);