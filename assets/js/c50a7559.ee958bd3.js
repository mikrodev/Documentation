(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(120)),s={title:"ViewPLUS SCADA Database"},l={unversionedId:"ViewPLUS-SCADA-Database",id:"ViewPLUS-SCADA-Database",isDocsHomePage:!1,title:"ViewPLUS SCADA Database",description:"Database Tables",source:"@site/docs/ViewPLUS-SCADA-Database.md",slug:"/ViewPLUS-SCADA-Database",permalink:"/docs/ViewPLUS-SCADA-Database",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Database.md",version:"current",sidebar:"SCADA",previous:{title:"ViewPLUS SCADA OPC UA Server Service",permalink:"/docs/ViewPLUS-SCADA-OPC-UA"},next:{title:"ViewPLUS SCADA Web API",permalink:"/docs/ViewPLUS-SCADA-WebApi"}},o=[{value:"Database Tables",id:"database-tables",children:[]}],c={toc:o};function b(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"database-tables"},"Database Tables"),Object(i.b)("p",null,"ViewPLUS SCADA uses various database tables for handling SCADA Project, logging and reporting."),Object(i.b)("p",null,'For PostgreSQL The tables are seperated by "public" and "logs" schemas. The public schema consists of project channels, tags, users related tables. The "logs" schema consists of logs and statistical log tables.'),Object(i.b)("center",null,Object(i.b)("p",null,Object(i.b)("img",{alt:"ViewPLUS-SCADA-Database-01",src:a(468).default}))),Object(i.b)("p",null,"alarms : This table contains alarm definitions created by SCADA editor"),Object(i.b)("p",null,"channels : Channel definitions contains connection information to the field devices"),Object(i.b)("p",null,"tags : These are the the tag definitions used to define the tag details in the system"),Object(i.b)("p",null,"users: Table of authorised users list for the project"),Object(i.b)("center",null,Object(i.b)("p",null,Object(i.b)("img",{alt:"ViewPLUS-SCADA-Database-02",src:a(469).default}))),Object(i.b)("p",null,"aalm_table : This table contains the real time active alarms information of the system"),Object(i.b)("p",null,"alarm_log : Contains historical alarm information"),Object(i.b)("p",null,"event_log : It contains event information like user login, user requests etc."),Object(i.b)("p",null,"lcd_table : This is the latest change time table containing the latest read values of the system tags from the field devices."),Object(i.b)("p",null,"tag_log : All the raw data gathered from the field is recorded into tag_log table. This table can increase very rapidly in size."),Object(i.b)("p",null,"tag_log_agrhour : The hourly statistical table of system tags. The statistics are calculated using tag_log table. The table is updated once a minute."),Object(i.b)("p",null,"tag_log_agrday : The daily statistical table of system tags. The statistics are calculated using tag_log_agrhour table. The table is updated once a minute."),Object(i.b)("p",null,"tag_log_agrweek : The daily statistical table of system tags. The statistics are calculated using tag_log_agrday table. The table is updated once a minute."),Object(i.b)("p",null,"tag_log_agrmonth : The daily statistical table of system tags. The statistics are calculated using tag_log_agrday table. The table is updated once a minute."),Object(i.b)("p",null,"tag_log_agryear : The daily statistical table of system tags. The statistics are calculated using tag_log_agryear table. The table is updated once a minute."))}b.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return a?r.a.createElement(g,l(l({ref:t},c),{},{components:a})):r.a.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},468:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ViewPLUS-SCADA-Database-01-ef87f07b70626bbb9169a1e45f77fb52.png"},469:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ViewPLUS-SCADA-Database-02-1b15d552c88292b368677d3323fd177b.png"}}]);