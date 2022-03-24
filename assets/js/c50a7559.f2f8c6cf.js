"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4615],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(a),p=i,b=g["".concat(o,".").concat(p)]||g[p]||d[p]||l;return a?n.createElement(b,r(r({ref:t},u),{},{components:a})):n.createElement(b,r({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},83615:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(83117),i=a(80102),l=(a(67294),a(3905)),r=["components"],s={title:"Database"},o=void 0,c={unversionedId:"ViewPLUS-SCADA-Database",id:"ViewPLUS-SCADA-Database",title:"Database",description:"Database Tables",source:"@site/docs/ViewPLUS-SCADA-Database.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Database",permalink:"/docs/ViewPLUS-SCADA-Database",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Database.md",tags:[],version:"current",frontMatter:{title:"Database"},sidebar:"Documents",previous:{title:"Opc Ua Server Service",permalink:"/docs/ViewPLUS-SCADA-OPC-UA"},next:{title:"Web API",permalink:"/docs/ViewPLUS-SCADA-WebApi"}},u={},d=[{value:"Database Tables",id:"database-tables",level:3}],g={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"database-tables"},"Database Tables"),(0,l.kt)("p",null,"ViewPLUS SCADA uses various database tables for handling SCADA Project, logging and reporting."),(0,l.kt)("p",null,'For PostgreSQL The tables are seperated by "public" and "logs" schemas. The public schema consists of project channels, tags, users related tables. The "logs" schema consists of logs and statistical log tables.'),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"ViewPLUS-SCADA-Database-01",src:a(72258).Z,width:"315",height:"537"}))),(0,l.kt)("p",null,"alarms : This table contains alarm definitions created by SCADA editor"),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"dt-alarm",src:a(68332).Z,width:"1500",height:"428"}))),(0,l.kt)("p",null,"channels : Channel definitions contains connection information to the field devices"),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"dt-ch",src:a(82188).Z,width:"1476",height:"484"}))),(0,l.kt)("p",null,"tags : These are the the tag definitions used to define the tag details in the system"),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"dt-tag",src:a(32550).Z,width:"1434",height:"496"}))),(0,l.kt)("p",null,"users: Table of authorised users list for the project"),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"dt-users",src:a(64950).Z,width:"987",height:"361"}))),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"ViewPLUS-SCADA-Database-02",src:a(31301).Z,width:"303",height:"614"}))),(0,l.kt)("p",null,"aalm_table : This table contains the real time active alarms information of the system"),(0,l.kt)("p",null,"alarm_log : Contains historical alarm information"),(0,l.kt)("p",null,"event_log : It contains event information like user login, user requests etc."),(0,l.kt)("p",null,"lcd_table : This is the latest change time table containing the latest read values of the system tags from the field devices."),(0,l.kt)("p",null,"tag_log : All the raw data gathered from the field is recorded into tag_log table. This table can increase very rapidly in size."),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"database-taglog",src:a(75258).Z,width:"1137",height:"600"}))),(0,l.kt)("p",null,"tag_log_agrhour : The hourly statistical table of system tags. The statistics are calculated using tag_log table. The table is updated once a minute."),(0,l.kt)("p",null,"tag_log_agrday : The daily statistical table of system tags. The statistics are calculated using tag_log_agrhour table. The table is updated once a minute."),(0,l.kt)("p",null,"tag_log_agrweek : The daily statistical table of system tags. The statistics are calculated using tag_log_agrday table. The table is updated once a minute."),(0,l.kt)("p",null,"tag_log_agrmonth : The daily statistical table of system tags. The statistics are calculated using tag_log_agrday table. The table is updated once a minute."),(0,l.kt)("p",null,"tag_log_agryear : The daily statistical table of system tags. The statistics are calculated using tag_log_agryear table. The table is updated once a minute."))}p.isMDXComponent=!0},72258:function(e,t,a){t.Z=a.p+"assets/images/ViewPLUS-SCADA-Database-01-ef87f07b70626bbb9169a1e45f77fb52.png"},31301:function(e,t,a){t.Z=a.p+"assets/images/ViewPLUS-SCADA-Database-02-1b15d552c88292b368677d3323fd177b.png"},75258:function(e,t,a){t.Z=a.p+"assets/images/database-taglog-59d0218d0530135c96276575e3643e5e.png"},68332:function(e,t,a){t.Z=a.p+"assets/images/dt-alarm-0c7d41a8e3b94a3d5bf9865c76bc714c.png"},82188:function(e,t,a){t.Z=a.p+"assets/images/dt-ch-eb67f707461ede45fe4f4a9e5545d522.png"},32550:function(e,t,a){t.Z=a.p+"assets/images/dt-tag-97d0b2b71778d4d4f26ecb1151e1e7a4.png"},64950:function(e,t,a){t.Z=a.p+"assets/images/dt-users-a6840c7c0eeb1876ce7ff6b501fad977.png"}}]);