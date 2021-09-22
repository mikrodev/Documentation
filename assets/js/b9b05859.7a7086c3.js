(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(7),c=(t(0),t(120)),i={title:"ViewPLUS SCADA Data Manager"},s={unversionedId:"ViewPLUS-SCADA-Data-Manager",id:"ViewPLUS-SCADA-Data-Manager",isDocsHomePage:!1,title:"ViewPLUS SCADA Data Manager",description:"Archives are used to reduce the size in high-dimensional databases and to make a more detailed search between logs. To get to the archive screen, data manager is started from the tools tab.",source:"@site/docs/ViewPLUS-SCADA-Data-Manager.md",slug:"/ViewPLUS-SCADA-Data-Manager",permalink:"/docs/ViewPLUS-SCADA-Data-Manager",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Data-Manager.md",version:"current",sidebar:"Documents",previous:{title:"ViewPLUS SCADA Client",permalink:"/docs/ViewPLUS-SCADA-Client"},next:{title:"ViewPLUS OPC UA SERVER SERVICE",permalink:"/docs/ViewPLUS-SCADA-OPC-UA"}},o=[],l={toc:o};function d(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},l,i,{components:a,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Archives are used to reduce the size in high-dimensional databases and to make a more detailed search between logs. To get to the archive screen, data manager is started from the tools tab."),Object(c.a)("center",null,Object(c.a)("p",null,Object(c.a)("img",{alt:"datamanager1",src:t(491).default}))),Object(c.a)("p",null,"Archiving is selected in the window that opens."),Object(c.a)("center",null,Object(c.a)("p",null,Object(c.a)("img",{alt:"datamanager2",src:t(492).default}))),Object(c.a)("p",null,"Date is entered in Archieve Data Older Than section. All logs saved in the database before the date entered will be transferred to the archive database. Archiving is started by clicking Start Archiving."),Object(c.a)("center",null,Object(c.a)("p",null,Object(c.a)("img",{alt:"datamanager3",src:t(493).default}))),Object(c.a)("p",null,"When OK is selected for the warning displayed after archiving, archived logs in the main database are deleted. Since these logs are deleted, they will not be displayed in reporting in the main project. It can only be accessed from the Archive database. If Cancel is selected, logs are kept in the main database and logs are saved in the archive database."),Object(c.a)("center",null,Object(c.a)("p",null,Object(c.a)("img",{alt:"datamanager4",src:t(494).default}))),Object(c.a)("p",null,"After seeing the text Archive process completed in the data manager, archiving process is completed."),Object(c.a)("center",null,Object(c.a)("p",null,Object(c.a)("img",{alt:"datamanager5",src:t(495).default}))),Object(c.a)("p",null,"It is seen that a new database named main database archive has been created."),Object(c.a)("center",null,Object(c.a)("p",null,Object(c.a)("img",{alt:"datamanager6",src:t(496).default}))),Object(c.a)("p",null,"Logs before the archiving date determined in the data manager are displayed in the archivetestlog_archive database."),Object(c.a)("center",null,Object(c.a)("p",null,Object(c.a)("img",{alt:"datamanager7",src:t(497).default}))))}d.isMDXComponent=!0},120:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(t),g=n,b=p["".concat(i,".").concat(g)]||p[g]||u[g]||c;return t?r.a.createElement(b,s(s({ref:a},l),{},{components:t})):r.a.createElement(b,s({ref:a},l))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=p;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<c;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},491:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datamanager1-93ef5ccdbf421b122138ad89f4295113.png"},492:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datamanager2-ef5a9e40c40c3723c08831cdd62be8c8.png"},493:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datamanager3-dca52410baf47e18da188291f902e675.png"},494:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datamanager4-4c0ae0e6deae5da2f059d4da7edbec5d.png"},495:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datamanager5-71acc50dad472a1a5570eae5200875a2.png"},496:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datamanager6-5a19cfb09fa48078e487ced0cabed2ce.png"},497:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/datamanager7-41bc95f2e3da779af70027c9067b27d7.png"}}]);