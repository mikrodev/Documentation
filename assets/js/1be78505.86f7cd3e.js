(window.webpackJsonp=window.webpackJsonp||[]).push([[13,15],{144:function(e,a,n){"use strict";var r=n(0),c=n.n(r),s=n(145),t=n.n(s),l=n(23),o=n(16);a.a=e=>{const a=Object(r.useRef)(!1),s=Object(r.useRef)(null),h=Object(l.useHistory)(),{siteConfig:d={}}=Object(o.default)(),{baseUrl:i}=d,u=()=>{a.current||(Promise.all([fetch(`${i}search-doc.json`).then((e=>e.json())),fetch(`${i}lunr-index.json`).then((e=>e.json())),Promise.all([n.e(68),n.e(72)]).then(n.bind(null,150)),n.e(45).then(n.t.bind(null,149,7))]).then((([e,a,{default:n}])=>{((e,a,n)=>{new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,n)=>{const r=i+n.url;document.createElement("a").href=r,h.push(r)}})})(e,a,n)})),a.current=!0)},b=Object(r.useCallback)((a=>{s.current.contains(a.target)||s.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:t()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:t()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:b,onBlur:b,ref:s}))}}}]);