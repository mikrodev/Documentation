"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9553],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>d});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||k[m]||l;return n?t.createElement(d,i(i({ref:a},c),{},{components:n})):t.createElement(d,i({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69977:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=n(87462),r=(n(67294),n(3905));const l={title:"NTP Uygulama Notu"},i=void 0,o={unversionedId:"NTP-Application-Notes",id:"NTP-Application-Notes",title:"NTP Uygulama Notu",description:"Genel Bak\u0131\u015f",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/NTP-Application-Notes.md",sourceDirName:".",slug:"/NTP-Application-Notes",permalink:"/tr/docs/NTP-Application-Notes",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/NTP-Application-Notes.md",tags:[],version:"current",frontMatter:{title:"NTP Uygulama Notu"},sidebar:"Documents",previous:{title:"DNP3 Slave Uygulama Notu",permalink:"/tr/docs/DNP3-Application-Notes"},next:{title:"GSM IP Kullan\u0131m\u0131 Uygulama Notu",permalink:"/tr/docs/GSM-IP-Usage-Application-Notes"}},s={},u=[{value:"Genel Bak\u0131\u015f",id:"genel-bak\u0131\u015f",level:2},{value:"NTP Senkronizasyon Blok Tan\u0131mlamalar\u0131",id:"ntp-senkronizasyon-blok-tan\u0131mlamalar\u0131",level:2},{value:"Ba\u011flant\u0131lar",id:"ba\u011flant\u0131lar",level:3},{value:"Blok \xd6zel Ayarlar\u0131",id:"blok-\xf6zel-ayarlar\u0131",level:3},{value:"Blok A\xe7\u0131klamas\u0131",id:"blok-a\xe7\u0131klamas\u0131",level:3},{value:"\xd6rnek Uygulama",id:"\xf6rnek-uygulama",level:3}],c={toc:u},p="wrapper";function k(e){let{components:a,...l}=e;return(0,r.kt)(p,(0,t.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"genel-bak\u0131\u015f"},"Genel Bak\u0131\u015f"),(0,r.kt)("p",null,"NTP (A\u011f Zamanlama Protokol\xfc), de\u011fi\u015fken gecikmeye sahip paket anahtarlamal\u0131 a\u011flar \xfczerindeki bilgisayarlar\u0131n saatlerinin e\u015f zamanlanmas\u0131n\u0131n sa\u011flanmas\u0131 i\xe7in kullan\u0131lan bir protokold\xfcr. "),(0,r.kt)("p",null,"NTP, 123 no'lu port \xfczerinden, Kullan\u0131c\u0131 Datagram Protokol\xfc (UDP)'n\xfc kullan\u0131r. "),(0,r.kt)("p",null,"NTP ayarlar\u0131 hangi da\u011f\u0131t\u0131m\u0131n kullan\u0131ld\u0131\u011f\u0131na ba\u011fl\u0131 olarak ya /etc/ntp.conf ya da /etc/xntp.conf dosyas\u0131ndan yap\u0131l\u0131r. "),(0,r.kt)("p",null,"Mikrodev, MP211 PLC ve RTU cihaz ailesi Network Time Protocol \u2013 NTP destekler ve b\xf6ylece cihazlar\u0131m\u0131z ger\xe7ek saat de\u011ferlerine sahip olur."),(0,r.kt)("h2",{id:"ntp-senkronizasyon-blok-tan\u0131mlamalar\u0131"},"NTP Senkronizasyon Blok Tan\u0131mlamalar\u0131"),(0,r.kt)("h3",{id:"ba\u011flant\u0131lar"},"Ba\u011flant\u0131lar"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ntp1",src:n(71199).Z,width:"528",height:"162"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ser: NTP Server IP Giri\u015fi"),(0,r.kt)("br",{parentName:"p"}),"\n","NTP Server IP blo\u011fa bu giri\u015ften tan\u0131mlanabilir."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Por: NTP Server Port Giri\u015fi"),(0,r.kt)("br",{parentName:"p"}),"\n","NTP Server Port numaras\u0131 blo\u011fa bu giri\u015ften tan\u0131mlanabilir."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trg: Tetik Giri\u015fi"),(0,r.kt)("br",{parentName:"p"}),"\n","Senkronizasyon i\xe7in tetik giri\u015fidir. Y\xfckselen kenar olarak \xe7al\u0131\u015f\u0131r."),(0,r.kt)("h3",{id:"blok-\xf6zel-ayarlar\u0131"},"Blok \xd6zel Ayarlar\u0131"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ntp4",src:n(45002).Z,width:"703",height:"496"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not:")," Tetikleme sonucu \xe7al\u0131\u015fmas\u0131 i\xe7in blok \xf6zel ayarlar\u0131ndan \u201cTrig Aktifken \xc7al\u0131\u015f\u201d se\xe7ene\u011fi i\u015faretli olmas\u0131 gerekir."),(0,r.kt)("h3",{id:"blok-a\xe7\u0131klamas\u0131"},"Blok A\xe7\u0131klamas\u0131"),(0,r.kt)("p",null,"NTP Senkronizasyon Blo\u011fu Ttk-Tetik pinine gelen y\xfcksek kenar sinyali ile aktif oldu\u011fundan blok tetik giri\u015fine Ger\xe7ek Zamanl\u0131 Darbe \xdcreticisi, Simetrik Darbe \xdcreticisi ya da \u0130kilik Yazma\xe7 blo\u011fu ba\u011flanabilir Tetik giri\u015fine ba\u011flanan bloklar NTP sunucuyla e\u015fleme s\u0131kl\u0131\u011f\u0131n\u0131 ayarlamak i\xe7in kullan\u0131l\u0131r."),(0,r.kt)("p",null,"NTP sunucu ayarlar\u0131 i\xe7in fonksiyon blo\u011fu i\xe7erisinden NTP Server IP k\u0131sm\u0131na NTP sunucu IPsi girilir. NTP port k\u0131sm\u0131na ise sunucu portu girilir. Trig Aktifken \xc7al\u0131\u015f se\xe7ene\u011fi ise tetikleme sonucu blo\u011fun \xe7al\u0131\u015fmas\u0131n\u0131 sa\u011flar."),(0,r.kt)("p",null,"\u0130stenilirse NTP Server IP ve NTP Port bilgileri NTP E\u015fleme Blo\u011funun Ser ve Por pinlerine ba\u011flanarak da tan\u0131mlanabilir."),(0,r.kt)("h3",{id:"\xf6rnek-uygulama"},"\xd6rnek Uygulama"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ntp3",src:n(65885).Z,width:"689",height:"486"}))),(0,r.kt)("p",null,"Ger\xe7ek zamanl\u0131 darbe \xfcretecinin zamanlama s\u0131kl\u0131\u011f\u0131 saniyede 1 se\xe7ilmi\u015ftir. GZD\xdc blo\u011fu NTP senkronizasyon blo\u011funa saniyede bir tetik g\xf6ndererek, saniyede bir NTP sunucuyla zaman e\u015flemesi ger\xe7ekle\u015ftirilir."))}k.isMDXComponent=!0},71199:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/ntp1-69a3b9a4678f8a86b0cea64e49390cc0.png"},65885:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/ntp3-b53556c2ed9bc4bca33df326848cc7cb.png"},45002:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/ntp4-b0b8f54b34c5b93ecf1cbcda98aff7c6.png"}}]);