"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2707],{96399:function(e,a,r){r.r(a),r.d(a,{assets:function(){return u},contentTitle:function(){return t},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(83117),l=(r(67294),r(3905));const i={title:"ViewPLUS SCADA Mail Server Hizmeti"},t=void 0,s={unversionedId:"ViewPLUS-SCADA-Mail-Server-Service",id:"ViewPLUS-SCADA-Mail-Server-Service",title:"ViewPLUS SCADA Mail Server Hizmeti",description:"Scada projesinde tan\u0131ml\u0131 olan kullan\u0131c\u0131lar\u0131n e-posta adresleri girilerek, alarm durumlar\u0131nda burada yer alan e-posta adreslerine mail at\u0131lmas\u0131 sa\u011flanabilir.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/ViewPLUS-SCADA-Mail-Server-Service.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Mail-Server-Service",permalink:"/tr/docs/ViewPLUS-SCADA-Mail-Server-Service",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Mail-Server-Service.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Mail Server Hizmeti"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Referans Sayfas\u0131",permalink:"/tr/docs/ViewPLUS-SCADA-Template-Page"},next:{title:"ViewPLUS SCADA \xd6rnek Projeler",permalink:"/tr/docs/ViewPLUS-SCADA-Example-Projects"}},u={},m=[{value:"Scada Mail Server Ayarlar\u0131",id:"scada-mail-server-ayarlar\u0131",level:3},{value:"Gmail Uygulama \u015eifresi Alma",id:"gmail-uygulama-\u015fifresi-alma",level:4},{value:"ViewPLUS Edit\xf6r Ayarlar\u0131",id:"viewplus-edit\xf6r-ayarlar\u0131",level:3}],c={toc:m};function p(e){let{components:a,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Scada projesinde tan\u0131ml\u0131 olan kullan\u0131c\u0131lar\u0131n e-posta adresleri girilerek, alarm durumlar\u0131nda burada yer alan e-posta adreslerine mail at\u0131lmas\u0131 sa\u011flanabilir."),(0,l.kt)("p",null,"\xd6ncelikle scada projesinde bulunan ServerEngine.ini dosyas\u0131na mail server ayarlar\u0131n\u0131n tan\u0131ml\u0131 olmas\u0131 gerekmektedir. Burada yer alacak olan e-posta, alarm durumlar\u0131nda mail g\xf6nderecek olan adrestir."),(0,l.kt)("h3",{id:"scada-mail-server-ayarlar\u0131"},"Scada Mail Server Ayarlar\u0131"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Not:")," Scada Mail Server yap\u0131land\u0131r\u0131lmas\u0131 yap\u0131l\u0131rken, aktif ise scada sunucusu ve client uygulamas\u0131 kapat\u0131lmal\u0131d\u0131r."),(0,l.kt)("p",null,"C:\\Users\\< Kullan\u0131c\u0131 Ad\u0131 >\\AppData\\Roaming\\Mikrodev\\ScadaServer\\< Scada Projesi >"),(0,l.kt)("p",null,"Dosya yolu izlenerek mail server tan\u0131mlanacak scada projesinin ServerEngine.ini dosyas\u0131 bulunur. Notepad++ vb. bir uygulama ile d\xfczenle se\xe7ene\u011fi ile a\xe7\u0131l\u0131r."),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mailserver",src:r(8389).Z,width:"909",height:"675"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("center",null,"\u015eekil 1: ServerEngine.ini dosyas\u0131n\u0131 d\xfczenleme"))))),(0,l.kt)("p",null,"Bu dosyada SMTP k\u0131sm\u0131 bulunur."),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mailserver1",src:r(71343).Z,width:"268",height:"145"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("center",null,"\u015eekil 2: ServerEngine.ini dosyas\u0131nda yer alan SMTP k\u0131sm\u0131"))))),(0,l.kt)("p",null,"SMTP_user = < E-posta Adresi > // Maili g\xf6nderecek olan e-posta adresi yaz\u0131l\u0131r."),(0,l.kt)("p",null,"SMTP_pwd = < Uygulama \u015eifresi > // Maili g\xf6nderecek olan hesaptan scada uygulamas\u0131 i\xe7in \u015fifre al\u0131nmas\u0131 gerekmektedir. (Bu k\u0131s\u0131m Gmail Uygulama \u015eifresi Alma ba\u015fl\u0131\u011f\u0131n\u0131n alt\u0131nda anlat\u0131lm\u0131\u015ft\u0131r.)"),(0,l.kt)("p",null,"SMTP_host = < SMTP Server Adresi > // E-posta adresine ait SMTP Server Adresi girilir. (Gmail i\xe7in smtp.gmail.com yaz\u0131lmal\u0131d\u0131r.)"),(0,l.kt)("p",null,"SMTP_port = < SMTP Server Portu > // E-posta adresine ait SMTP Server Portu girilir. (Gmail i\xe7in 465 yaz\u0131lmal\u0131d\u0131r.)"),(0,l.kt)("p",null,"SMTP_mailDelay = < S\xfcre > // Bir alarm durumundan sonra bir e-postan\u0131n g\xf6nderilmesi i\xe7in beklenecek s\xfcre girilir. (saniye cinsinden)  "),(0,l.kt)("h4",{id:"gmail-uygulama-\u015fifresi-alma"},"Gmail Uygulama \u015eifresi Alma"),(0,l.kt)("p",null,"Maili g\xf6nderecek olan e-posta adresi gmail ise a\u015fa\u011f\u0131daki ad\u0131mlar takip edilerek uygulama \u015fifresi al\u0131n\u0131r."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gmail adresinde oturum a\xe7\u0131n.    "),(0,l.kt)("li",{parentName:"ul"},"\u201cGoogle hesab\u0131n\u0131z\u0131 y\xf6netin\u201d t\u0131klay\u0131n.      "),(0,l.kt)("li",{parentName:"ul"},"G\xfcvenlik k\u0131sm\u0131ndan Oturum A\xe7ma Se\xe7eneklerinden 2 ad\u0131ml\u0131 do\u011frulama \xf6zelli\u011fini a\xe7\u0131n.    ")),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mailserver2",src:r(25550).Z,width:"858",height:"328"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("center",null,"\u015eekil 3: Google Oturum A\xe7ma Se\xe7enekleri"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Uygulama \u015fifreleri k\u0131sm\u0131ndan scada uygulamas\u0131na yeni bir \u015fifre tan\u0131mlay\u0131n. Uygulama se\xe7in k\u0131sm\u0131ndan Di\u011fer (\xd6zel ad) se\xe7ene\u011fini se\xe7in ve istedi\u011finiz isimlendirmeyi yap\u0131n, olu\u015ftur yaz\u0131s\u0131na t\u0131klay\u0131n.    ")),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mailserver3",src:r(38648).Z,width:"666",height:"400"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("center",null,"\u015eekil 4: Uygulama \u015eifresi Olu\u015fturma"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ekranda yer alan \u015fifreyi kaydedin. Ekranda yer alan \u015fifre mail server un \u015fifresi olacakt\u0131r. (SMTP Pwd: K\u0131sm\u0131na burada yer alan \u015fifre girilmelidir.)")),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mailserver4",src:r(129).Z,width:"645",height:"470"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("center",null,"\u015eekil 5: \xd6rnek Uygulama \u015eifresi"))))),(0,l.kt)("h3",{id:"viewplus-edit\xf6r-ayarlar\u0131"},"ViewPLUS Edit\xf6r Ayarlar\u0131"),(0,l.kt)("p",null,"Scada projesinde yer alan alarmlar tan\u0131mlanan kullan\u0131c\u0131n\u0131n e-posta adresine mail olarak g\xf6nderilmesi isteniyorsa, ViewPLUS Edit\xf6r \xfczerinden Kullan\u0131c\u0131 Y\xf6neticisi ba\u015flat\u0131l\u0131r."),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mailserver5",src:r(92946).Z,width:"802",height:"503"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("center",null,"\u015eekil 6: Kullan\u0131c\u0131 Y\xf6neticisini Ba\u015flatma"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"E-posta adresi tan\u0131mlanacak olan kullan\u0131c\u0131 se\xe7ilir.    "),(0,l.kt)("li",{parentName:"ul"},"Kullan\u0131c\u0131 Verisi -> Di\u011fer -> Eposta k\u0131sm\u0131na mailin g\xf6nderilmesi istenilen e-posta adresi girilir.   "),(0,l.kt)("li",{parentName:"ul"},"Kullan\u0131c\u0131 Verisi -> Di\u011fer -> Abonelikler k\u0131sm\u0131ndan mail at\u0131lmas\u0131 istenilen alarm durumlar\u0131 se\xe7ilir. (bu k\u0131s\u0131m ViewPLUS edit\xf6r\xfcn\xfcn alarmlarda yer alan abone kullan\u0131c\u0131lar k\u0131sm\u0131ndan kullan\u0131c\u0131 atamas\u0131 yap\u0131larak da yap\u0131labilir.)         "),(0,l.kt)("li",{parentName:"ul"},"Kullan\u0131c\u0131 Verisi -> Di\u011fer -> Abonelikler k\u0131sm\u0131nda yer alan \u201cAlarm Uyar\u0131lar\u0131n\u0131 e-posta ile g\xf6nder\u201d se\xe7ene\u011finin i\u015faretli olmas\u0131 gerekmektedir.        ")),(0,l.kt)("center",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mailserver6",src:r(14481).Z,width:"882",height:"686"}),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},(0,l.kt)("center",null,"\u015eekil 7: Kullan\u0131c\u0131 Ayarlar\u0131"))))),(0,l.kt)("p",null,"Yukar\u0131daki ad\u0131mlar takip edildi\u011finde alarm durumlar\u0131nda tan\u0131mlanan e-posta adresine mail at\u0131lacakt\u0131r."))}p.isMDXComponent=!0},3905:function(e,a,r){r.d(a,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function l(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function t(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){l(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,l=function(e,a){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),m=function(e){var a=n.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):t(t({},a),e)),r},c=function(e){var a=m(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},o=n.forwardRef((function(e,a){var r=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),o=m(r),d=l,k=o["".concat(u,".").concat(d)]||o[d]||p[d]||i;return r?n.createElement(k,t(t({ref:a},c),{},{components:r})):n.createElement(k,t({ref:a},c))}));function d(e,a){var r=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=r.length,t=new Array(i);t[0]=o;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,t[1]=s;for(var m=2;m<i;m++)t[m]=r[m];return n.createElement.apply(null,t)}return n.createElement.apply(null,r)}o.displayName="MDXCreateElement"},8389:function(e,a,r){a.Z=r.p+"assets/images/mailserver-6aaec03c6307b130667eb00ce330b22e.png"},71343:function(e,a){a.Z="data:image/png;base64,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"},25550:function(e,a,r){a.Z=r.p+"assets/images/mailserver2-1fb8a6d8f80e5e5bcbede6836ab04bb5.png"},38648:function(e,a,r){a.Z=r.p+"assets/images/mailserver3-8fc2e6f720a4e9cf196e5fa720411b9f.png"},129:function(e,a,r){a.Z=r.p+"assets/images/mailserver4-4c59f0e5333ace51945188bf43809542.png"},92946:function(e,a,r){a.Z=r.p+"assets/images/mailserver5-33853a826ba03e90663d95f97c8a0e50.png"},14481:function(e,a,r){a.Z=r.p+"assets/images/mailserver6-8f12ffb9c5da038adc19b101c86c2ed3.png"}}]);