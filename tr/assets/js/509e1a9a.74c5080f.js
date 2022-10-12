"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3351],{60746:function(e,a,t){t.r(a),t.d(a,{assets:function(){return k},contentTitle:function(){return i},default:function(){return o},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=t(83117),r=(t(67294),t(3905));const l={title:"GSM IP Kullan\u0131m\u0131"},i=void 0,u={unversionedId:"GSM-IP-Usage-Application-Notes",id:"GSM-IP-Usage-Application-Notes",title:"GSM IP Kullan\u0131m\u0131",description:"Genel Bak\u0131\u015f",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/GSM-IP-Usage-Application-Notes.md",sourceDirName:".",slug:"/GSM-IP-Usage-Application-Notes",permalink:"/tr/docs/GSM-IP-Usage-Application-Notes",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/GSM-IP-Usage-Application-Notes.md",tags:[],version:"current",frontMatter:{title:"GSM IP Kullan\u0131m\u0131"},sidebar:"Documents",previous:{title:"NTP Uygulama Notu",permalink:"/tr/docs/NTP-Application-Notes"},next:{title:"Block-Descriptions-Notes",permalink:"/tr/docs/Block-Descriptions-Notes"}},k={},m=[{value:"Genel Bak\u0131\u015f",id:"genel-bak\u0131\u015f",level:2},{value:"Gerekli Ba\u011flant\u0131lar",id:"gerekli-ba\u011flant\u0131lar",level:3},{value:"GSM APN Ayarlar\u0131",id:"gsm-apn-ayarlar\u0131",level:3}],s={toc:m};function o(e){let{components:a,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"genel-bak\u0131\u015f"},"Genel Bak\u0131\u015f"),(0,r.kt)("p",null,"GSM operat\xf6rleri taraf\u0131ndan temin edilen Sim kartlar Mikrodev PLC/RTU \xfcr\xfcnleri \xfczerinden IP al\u0131n\u0131p kullan\u0131labilmektedir.  "),(0,r.kt)("p",null,"Modbus Slave, IEC 104 Slave, DNP3 Slave kullan\u0131lacak ise sim kart\u0131n Statik IP \xf6zellikli olmas\u0131 gerekir.  "),(0,r.kt)("p",null,"Mqtt, DNP3 Master uygulamalar\u0131 i\xe7in Dinamik IP \xf6zellikli sim kart yeterlidir."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not:")," Dinamik IP \xf6zellikli sim kartlara Mikrodiagram/Telediagram program\u0131 ile GSM \xfczerinden ba\u011flant\u0131 kurulamaz, Mikrodiagram/Telediagram program\u0131 ile GSM \xfczerinden ba\u011flant\u0131 kurulmak istenirse; Statik IP \xf6zellikli sim kart kullan\u0131lmal\u0131d\u0131r."),(0,r.kt)("h3",{id:"gerekli-ba\u011flant\u0131lar"},"Gerekli Ba\u011flant\u0131lar"),(0,r.kt)("p",null,"PLC/RTU cihaza GSM \xfczerinden ba\u011flant\u0131 kurmak i\xe7in \xf6ncelikle cihazlar\u0131n anten ve USB/Ethernet ba\u011flant\u0131s\u0131 yap\u0131lmal\u0131d\u0131r ve sim kart cihaza tak\u0131lmal\u0131d\u0131r."),(0,r.kt)("p",null,"USB ba\u011flant\u0131s\u0131 yap\u0131lacaksa, Mikroterminal \xfczerinden AT komutlar\u0131 ile GSM IP ayarlar\u0131 yap\u0131l\u0131r. Cihaz\u0131n IP al\u0131p almad\u0131\u011f\u0131 AT komutlar\u0131ndan kontrol edilebilir."),(0,r.kt)("p",null,"Ethernet ba\u011flant\u0131s\u0131 yap\u0131lacaksa, Mikrodiagram/Telediagram program\u0131 \xfczerinden GSM APN, Username ve Password bilgileri girilerek GSM IP ayarlar\u0131 yap\u0131l\u0131r veya GSM IP biliniyorsa Mikrodiagram/Telediagram uygulamas\u0131 \xfczerinden cihaz konfig\xfcrasyonu k\u0131sm\u0131na GSM IP ve port bilgisi girilerek ba\u011flant\u0131 kurulur."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not:")," Ancak Ethernet ba\u011flant\u0131s\u0131 kurularak yap\u0131lan ba\u011flant\u0131larda cihaz\u0131n Mikrodiagram/Telediagram program\u0131 \xfczerinden ald\u0131\u011f\u0131 IP g\xf6r\xfclemez."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip1",src:t(51110).Z,width:"1471",height:"706"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 1: Mikrodiagram GSM Ayarlar\u0131"))))),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip2",src:t(26826).Z,width:"1054",height:"395"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 2: Mikrodiagram GSM IP ve Port Bilgisi Girme"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not:")," Mikrodev PLC/RTU \xfcr\xfcnleri GSM \xfczerinden IP al\u0131nmas\u0131 isteniyorsa cihaza y\xfckl\xfc olan Mikrodiagram/Telediagram projesinde TCP Soket blo\u011fu yer almal\u0131d\u0131r ve medya tipi olarak GSM se\xe7ili olmal\u0131d\u0131r."),(0,r.kt)("p",null,"DM serisi i\xe7in TCP Soket blo\u011funa gerek yoktur."),(0,r.kt)("h3",{id:"gsm-apn-ayarlar\u0131"},"GSM APN Ayarlar\u0131"),(0,r.kt)("p",null,"Donan\u0131msal olarak gerekli ba\u011flant\u0131lar yap\u0131ld\u0131ktan sonra Statik IP \xf6zelli\u011fne sahip Sim kartlara IP ald\u0131rmak i\xe7in Mikroterminal uygulamas\u0131 a\xe7\u0131l\u0131r. Cihaz\u0131n ba\u011fl\u0131 oldu\u011fu port se\xe7ilir."),(0,r.kt)("p",null,"Komutlar -> GSM -> AT+GPRSAPN=","*"," -> W(Write)"),(0,r.kt)("p",null,"*","Vodafone i\xe7in AT+GPRSAPN=internetstatik"),(0,r.kt)("p",null,"Turkcell i\xe7in AT+GPRSAPN=mgbs"),(0,r.kt)("p",null,"T\xfcrk Telekom i\xe7in AT+GPRSAPN=statikip yaz\u0131lmal\u0131d\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip3",src:t(18763).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 3: Mikroterminal AT+GPRSAPN Komutu"))))),(0,r.kt)("p",null,"GSM operat\xf6rleri taraf\u0131ndan kullan\u0131c\u0131ya Username ve Password bilgisi temin edilmi\u015fse, Mikroterminal uygulamas\u0131ndaki uygun yerlere edinilen kullan\u0131c\u0131 bilgileri yaz\u0131lmal\u0131d\u0131r."),(0,r.kt)("p",null,"E\u011fer operat\xf6r taraf\u0131ndan kullan\u0131c\u0131 bilgileri temin edilmediyse, Mikroterminal uygulamas\u0131nda yer alan username ve password k\u0131s\u0131mlar\u0131 default b\u0131rak\u0131lmal\u0131d\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip4",src:t(33765).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 4: Mikroterminal Kullan\u0131c\u0131 Ad\u0131 ve \u015eifre Tan\u0131mlama Komutu"))))),(0,r.kt)("p",null,"GPRSAPN ayarlar\u0131n\u0131n cihazda uygulanabilmesi i\xe7in cihaza reset at\u0131lmal\u0131d\u0131r."),(0,r.kt)("p",null,"Komutlar -> Internal FS -> AT+RESET=1 -> W(Write) az\u0131l\u0131p, cihaz\u0131n tekrar aya\u011fa kalkmas\u0131 beklenmelidir."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip5",src:t(9953).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 5: Mikroterminal Cihaz Resetleme Komutu"))))),(0,r.kt)("p",null,"Cihaz\u0131n \u201cErr (Error) Ledi\u201d s\xf6nd\xfc\u011f\xfcnde, \u201cSYS (Sistem) ledi\u201d yan\u0131p s\xf6nmeye ba\u015flad\u0131\u011f\u0131nda cihaza Mikroterminal uygulamas\u0131 \xfczerinden tekrar ba\u011flan\u0131l\u0131r."),(0,r.kt)("p",null,"Cihaz\u0131n GSM sinyal kalitesini \xf6\u011frenebilmek i\xe7in Mikroterminal uygulamas\u0131n\u0131n GSM k\u0131sm\u0131 a\xe7\u0131l\u0131r."),(0,r.kt)("p",null,"Komutlar -> GSM -> AT+CSQ=? -> R(Read) sorgusu yap\u0131l\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip6",src:t(18795).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 6: Mikroterminal AT+CSQ Komutu"))))),(0,r.kt)("p",null,"AT+CSQ=? Sorgusu 1 ile 31 aras\u0131 de\u011fer alabilmektedir."),(0,r.kt)("p",null,"1 sinyal kalitesi en d\xfc\u015f\xfck, 31 ise en y\xfcksek anlam\u0131na gelmektedir."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip7",src:t(29062).Z,width:"609",height:"98"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 7: CSQ Tablosu"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not:")," Sinyal kalitesi yetersiz ise antenin konumuna veya kazanc\u0131na bak\u0131l\u0131r. Anten pano i\xe7erisinde bulunuyorsa anteni d\u0131\u015far\u0131 alarak veya anteni daha kazan\xe7l\u0131 bir anten ile de\u011fi\u015ftirerek sinyal kalitesi artt\u0131r\u0131labilir."),(0,r.kt)("p",null,"Cihaz\u0131n IP alma durumlar\u0131, Mikroterminal uygulamas\u0131n\u0131n Socket Status k\u0131sm\u0131ndan izlenebilir."),(0,r.kt)("p",null,"Komutlar -> Socket Status -> AT+Connection=? -> R (Read) sorgusu yap\u0131l\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip8",src:t(48948).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 8: Mikroterminal AT+CONNECTION Komutu"))))),(0,r.kt)("p",null,"AT+CONNECTION sorgusunun cevab\u0131"),(0,r.kt)("p",null,"0 ise; Mod\xfcl enerjisiz,"),(0,r.kt)("p",null,"2 ise; Mod\xfcl enerjili, (arama yapabilir, sms atabilir.)"),(0,r.kt)("p",null,"4 ise; Mod\xfcl IP almaya \xe7al\u0131\u015f\u0131yor,"),(0,r.kt)("p",null,"6 ise; Mod\xfcl IP ald\u0131,"),(0,r.kt)("p",null,"8 ise; Mod\xfcl hem IP ald\u0131 hem de ba\u011flant\u0131s\u0131 ger\xe7ekle\u015fti anlam\u0131na gelmektedir."),(0,r.kt)("p",null,"AT+CONNECTION sorgusunun cevab\u0131 8 ise, cihaz\u0131m\u0131z IP ald\u0131 ve GSM \xfczerinden ba\u011flant\u0131 kurdu demektir."),(0,r.kt)("p",null,"Cihaz\u0131n ald\u0131\u011f\u0131 IP\u2019yi \xf6\u011frenebilmek i\xe7in Mikroterminal uygulamas\u0131n\u0131n GSM k\u0131sm\u0131 a\xe7\u0131l\u0131r."),(0,r.kt)("p",null,"Komutlar -> GSM -> AT+GPRSIP=? -> R(Read) sorgusu yap\u0131l\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip9",src:t(68079).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 9: Mikroterminal AT+GPRSIP Komutu"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not:")," Bu sorgunun cevab\u0131 TIMEOUT olarak geliyorsa, cihaz IP almam\u0131\u015f demektir."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not:")," Sim kart\u0131n do\u011fru tak\u0131l\u0131p tak\u0131lmad\u0131\u011f\u0131n\u0131 anlayabilmek i\xe7in Mikroterminal uygulamas\u0131n\u0131n GSM k\u0131sm\u0131 a\xe7\u0131l\u0131r."),(0,r.kt)("p",null,"Komutlar -> GSM -> AT+SIM=? -> R(Read) sorgusu yap\u0131l\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip10",src:t(94065).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 10: MMikroterminal AT+SIM Komutu"))))),(0,r.kt)("p",null,"AT+SIM=? Sorgusunun cevab\u0131;"),(0,r.kt)("p",null,"0 ise SIM kart\u0131n tak\u0131l\u0131 olmad\u0131\u011f\u0131n\u0131, yanl\u0131\u015f tak\u0131ld\u0131\u011f\u0131n\u0131 veya ar\u0131zal\u0131 oldu\u011funu belirtir."),(0,r.kt)("p",null,"1 ise SIM kart\u0131n do\u011fru tak\u0131ld\u0131\u011f\u0131n\u0131 ve hatas\u0131z oldu\u011funu g\xf6sterir."),(0,r.kt)("p",null,"GSM ba\u011flant\u0131s\u0131nda k\u0131sa s\xfcreli kopmalar\u0131n \xf6n\xfcne ge\xe7mek i\xe7in zaman belirlenerek ba\u011flant\u0131 bekleme s\xfcresi tan\u0131mlanabilir. Komuta yaz\u0131lan s\xfcrenin birimi saniyedir."),(0,r.kt)("p",null,"Komutlar -> \xd6zel Komut Giri\u015fi -> AT+GSMRESET=<S\xfcre",">"," -> G\xf6nder"),(0,r.kt)("p",null,"GSM k\u0131sm\u0131ndan ba\u011flant\u0131 istedi\u011fi geldi\u011fi andan itibaren cihaz tan\u0131mlanan s\xfcre boyunca GSM ba\u011flant\u0131s\u0131n\u0131 kontrol eder, belirtilen s\xfcre sonunda ba\u011flant\u0131 kurulmazsa cihaz kendini resetler."),(0,r.kt)("p",null,"Komutlar -> \xd6zel Komut Giri\u015fi -> AT+GSMRESET=0 -> G\xf6nder"),(0,r.kt)("p",null,"GSM reset \xf6zelli\u011fini kapat\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip11",src:t(74673).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 11: Mikroterminal AT+GSMRESET Komutu"))))),(0,r.kt)("p",null,"Mikroterminal \xfczerinden GSM modemine komut g\xf6nderilebilmektedir."),(0,r.kt)("p",null,"Komutlar -> GSM -> AT+MODEM= -> AT+<Command",">"," -> W sorgusu yap\u0131l\u0131r."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gsm_ip12",src:t(48707).Z,width:"1001",height:"731"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"\u015eekil 12: Mikroterminal AT+MODEM Komutu"))))))}o.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var k=n.createContext({}),m=function(e){var a=n.useContext(k),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(k.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,c=p["".concat(k,".").concat(d)]||p[d]||o[d]||l;return t?n.createElement(c,i(i({ref:a},s),{},{components:t})):n.createElement(c,i({ref:a},s))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var u={};for(var k in a)hasOwnProperty.call(a,k)&&(u[k]=a[k]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<l;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},51110:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip1-b97d8ab22448e0b80f303db002535da3.png"},94065:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip10-5db66956b0a741a898bb3708dcaf3c60.png"},74673:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip11-ecb87629bd484af096e3b67023183e0e.png"},48707:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip12-04741678241a658fb9181ecb00c0887c.png"},26826:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip2-8a6385a5e4e28b3f154e38f861e44078.png"},18763:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip3-b6250962913eaea9cc7ef96bd2d4e8eb.png"},33765:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip4-c52c920b835d107efcfed37772bb2fda.png"},9953:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip5-2c966c72a7fe953a47bcbc42235fc324.png"},18795:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip6-511bc836f70e59f00805a304cb07de3a.png"},29062:function(e,a){a.Z="data:image/png;base64,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"},48948:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip8-41a67e39be0cf6b44db2f8657f9e83af.png"},68079:function(e,a,t){a.Z=t.p+"assets/images/gsm_ip9-ee733a960b7dd8e79269e689e860febe.png"}}]);