(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{129:function(e,n,t){"use strict";var a=t(0),r=t.n(a),c=t(130),l=t.n(c),o=t(23),s=t(16);n.a=function(e){var n=Object(a.useRef)(!1),c=Object(a.useRef)(null),i=Object(o.useHistory)(),u=Object(s.default)().siteConfig,d=(void 0===u?{}:u).baseUrl,m=function(){n.current||(Promise.all([fetch(d+"search-doc.json").then((function(e){return e.json()})),fetch(d+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(51),t.e(53)]).then(t.bind(null,138)),t.e(33).then(t.t.bind(null,137,7))]).then((function(e){!function(e,n,t){new t({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,t){var a=d+t.url;document.createElement("a").href=a,i.push(a)}})}(e[0],e[1],e[2].default)})),n.current=!0)},f=Object(a.useCallback)((function(n){c.current.contains(n.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:f,onBlur:f,ref:c}))}},152:function(e,n,t){"use strict";var a=t(0),r=t.n(a),c=t(122);var l=function(e,n,t){var r=Object(a.useState)(void 0),c=r[0],l=r[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),n=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(n){if(n.getBoundingClientRect().top>=t){var a=e[e.indexOf(n)-1];return null!=a?a:n}return n}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var i=s[r],u=i.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));a.id===d&&(c&&c.classList.remove(n),i.classList.add(n),l(i),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},o=t(56),s=t.n(o),i="table-of-contents__link";function u(e){var n=e.toc,t=e.isChild;return n.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(u,{isChild:!0,toc:e.children}))}))):null}n.a=function(e){var n=e.toc;return l(i,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(c.a)(s.a.tableOfContents,"thin-scrollbar")},r.a.createElement(u,{toc:n}))}},76:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(136),l=t(167),o=t(172),s=t(152);n.default=function(e){var n=e.content,t=n.frontMatter,a=n.metadata,i=t.title,u=t.description,d=t.wrapperClassName,m=t.hide_table_of_contents,f=a.permalink;return r.a.createElement(c.a,{title:i,description:u,permalink:f,wrapperClassName:d},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{components:o.a},r.a.createElement(n,null)))),!m&&n.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{toc:n.toc})))))))}}}]);