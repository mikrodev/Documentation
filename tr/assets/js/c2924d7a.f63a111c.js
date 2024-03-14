"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},k="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=u(a),p=r,g=k["".concat(s,".").concat(p)]||k[p]||b[p]||n;return a?l.createElement(g,i(i({ref:t},c),{},{components:a})):l.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[k]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},40258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"ViewPLUS SCADA Veritaban\u0131"},i=void 0,o={unversionedId:"ViewPLUS-SCADA-Database",id:"ViewPLUS-SCADA-Database",title:"ViewPLUS SCADA Veritaban\u0131",description:"Veritaban\u0131 Tablolar\u0131",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/ViewPLUS-SCADA-Database.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Database",permalink:"/tr/docs/ViewPLUS-SCADA-Database",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Database.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Veritaban\u0131"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Veri Y\xf6neticisi",permalink:"/tr/docs/ViewPLUS-SCADA-Data-Manager"},next:{title:"ViewPLUS SCADA Web API",permalink:"/tr/docs/ViewPLUS-SCADA-WebApi"}},s={},u=[{value:"Veritaban\u0131 Tablolar\u0131",id:"veritaban\u0131-tablolar\u0131",level:3}],c={toc:u},k="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"veritaban\u0131-tablolar\u0131"},"Veritaban\u0131 Tablolar\u0131"),(0,r.kt)("p",null,"ViewPLUS SCADA, SCADA Projesini y\xf6netmek, g\xfcnl\xfc\u011fe kaydetmek ve raporlamak i\xe7in \xe7e\u015fitli veritaban\u0131 tablolar\u0131n\u0131 kullan\u0131r."),(0,r.kt)("p",null,'PostgreSQL i\xe7in Tablolar "public" ve "logs" \u015femalar\u0131na g\xf6re ayr\u0131lm\u0131\u015ft\u0131r. Genel \u015fema proje kanallar\u0131, etiketler, kullan\u0131c\u0131larla ilgili tablolardan olu\u015fur. "G\xfcnl\xfckler" \u015femas\u0131, g\xfcnl\xfcklerden ve istatistiksel g\xfcnl\xfck tablolar\u0131ndan olu\u015fur.'),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ViewPLUS-SCADA-Database-01",src:a(78220).Z,width:"315",height:"537"}))),(0,r.kt)("p",null,"alarmlar : Bu tablo SCADA edit\xf6r\xfc taraf\u0131ndan olu\u015fturulan alarm tan\u0131mlar\u0131n\u0131 i\xe7erir"),(0,r.kt)("p",null,"kanallar : Kanal tan\u0131mlar\u0131 saha cihazlar\u0131na ba\u011flant\u0131 bilgilerini i\xe7erir"),(0,r.kt)("p",null,"etiketler : Sistemde etiket detaylar\u0131n\u0131 tan\u0131mlamak i\xe7in kullan\u0131lan etiket tan\u0131mlar\u0131d\u0131r"),(0,r.kt)("p",null,"kullan\u0131c\u0131lar: Proje i\xe7in yetkili kullan\u0131c\u0131lar listesi"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ViewPLUS-SCADA-Database-02",src:a(70764).Z,width:"303",height:"614"}))),(0,r.kt)("p",null,"alarm_table : Bu tablo sistemin ger\xe7ek zamanl\u0131 aktif alarm bilgilerini i\xe7erir."),(0,r.kt)("p",null,"alarm_log : Ge\xe7mi\u015f alarm bilgilerini i\xe7erir"),(0,r.kt)("p",null,"event_log : Kullan\u0131c\u0131 giri\u015fi, kullan\u0131c\u0131 istekleri vb. olay bilgilerini i\xe7erir."),(0,r.kt)("p",null,"lcd_table : Saha cihazlar\u0131ndan sistem etiketlerinin en son okunan de\u011ferlerini i\xe7eren en son de\u011fi\u015fiklik zaman tablosudur."),(0,r.kt)("p",null,"tag_log : Alandan toplanan t\xfcm ham veriler tag_log tablosuna kaydedilir. Bu tablonun boyutu \xe7ok h\u0131zl\u0131 b\xfcy\xfcyebilir."),(0,r.kt)("p",null,"tag_log_agrhour : Sistem etiketlerinin saatlik istatistiksel tablosu. \u0130statistikler tag_log tablosu kullan\u0131larak hesaplan\u0131r. Tablo dakikada bir g\xfcncellenir."),(0,r.kt)("p",null,"tag_log_agrday : Sistem etiketlerinin g\xfcnl\xfck istatistiksel tablosu. \u0130statistikler tag_log_agrhour tablosu kullan\u0131larak hesaplan\u0131r. Tablo dakikada bir g\xfcncellenir."),(0,r.kt)("p",null,"tag_log_agrweek : Sistem etiketlerinin g\xfcnl\xfck istatistiksel tablosu. \u0130statistikler tag_log_agrday tablosu kullan\u0131larak hesaplan\u0131r. Tablo dakikada bir g\xfcncellenir."),(0,r.kt)("p",null,"tag_log_agrmonth : Sistem etiketlerinin g\xfcnl\xfck istatistiksel tablosu. \u0130statistikler tag_log_agrday tablosu kullan\u0131larak hesaplan\u0131r. Tablo dakikada bir g\xfcncellenir."),(0,r.kt)("p",null,"tag_log_agryear : Sistem etiketlerinin g\xfcnl\xfck istatistiksel tablosu. \u0130statistikler tag_log_agryear tablosu kullan\u0131larak hesaplan\u0131r. Tablo dakikada bir g\xfcncellenir."))}b.isMDXComponent=!0},78220:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/ViewPLUS-SCADA-Database-01-ef87f07b70626bbb9169a1e45f77fb52.png"},70764:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/ViewPLUS-SCADA-Database-02-1b15d552c88292b368677d3323fd177b.png"}}]);