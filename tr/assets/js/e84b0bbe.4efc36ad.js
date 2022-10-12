"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9373],{21342:function(e,r,a){a.r(r),a.d(r,{assets:function(){return o},contentTitle:function(){return n},default:function(){return m},frontMatter:function(){return l},metadata:function(){return k},toc:function(){return u}});var i=a(83117),t=(a(67294),a(3905));const l={title:"ViewPLUS SCADA Raporlay\u0131c\u0131"},n=void 0,k={unversionedId:"ViewPLUS-SCADA-Reporting",id:"ViewPLUS-SCADA-Reporting",title:"ViewPLUS SCADA Raporlay\u0131c\u0131",description:"Genel Bak\u0131\u015f",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/ViewPLUS-SCADA-Reporting.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Reporting",permalink:"/tr/docs/ViewPLUS-SCADA-Reporting",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Reporting.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Raporlay\u0131c\u0131"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Web API",permalink:"/tr/docs/ViewPLUS-SCADA-WebApi"},next:{title:"ViewPLUS SCADA Harita Sayfas\u0131",permalink:"/tr/docs/ViewPLUS-SCADA-Map-Page"}},o={},u=[{value:"Genel Bak\u0131\u015f",id:"genel-bak\u0131\u015f",level:2},{value:"Etiket Loglar\u0131",id:"etiket-loglar\u0131",level:2},{value:"Loga Kaydedilecek Etiketlerin Se\xe7imi",id:"loga-kaydedilecek-etiketlerin-se\xe7imi",level:3},{value:"Etiket Loglar\u0131n\u0131 G\xf6r\xfcnt\xfcleme",id:"etiket-loglar\u0131n\u0131-g\xf6r\xfcnt\xfcleme",level:3},{value:"Bir Zaman Aral\u0131\u011f\u0131 Se\xe7me",id:"bir-zaman-aral\u0131\u011f\u0131-se\xe7me",level:4},{value:"Veri T\xfcr\xfc Se\xe7me",id:"veri-t\xfcr\xfc-se\xe7me",level:4},{value:"Grafikleri Y\xf6netme",id:"grafikleri-y\xf6netme",level:3},{value:"Grafikleri Kaydetme",id:"grafikleri-kaydetme",level:3},{value:"Verileri D\u0131\u015fa Aktarma",id:"verileri-d\u0131\u015fa-aktarma",level:3},{value:"Filtreleri Kaydetme",id:"filtreleri-kaydetme",level:3},{value:"Kaydedilmi\u015f Filtre Sorgular\u0131n\u0131 \xc7a\u011f\u0131rma",id:"kaydedilmi\u015f-filtre-sorgular\u0131n\u0131-\xe7a\u011f\u0131rma",level:4},{value:"Raporlama Komutu Olu\u015fturma",id:"raporlama-komutu-olu\u015fturma",level:3},{value:"\xd6rnek Uygulama",id:"\xf6rnek-uygulama",level:4}],d={toc:u};function m(e){let{components:r,...l}=e;return(0,t.kt)("wrapper",(0,i.Z)({},d,l,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"genel-bak\u0131\u015f"},"Genel Bak\u0131\u015f"),(0,t.kt)("p",null,"SCADA yaz\u0131l\u0131m\u0131 taraf\u0131ndan kaydedilen trend verilerini g\xf6r\xfcnt\xfclemek ve analiz etmek i\xe7in Reporter'\u0131 kullanabilirsiniz. Raporlama 3 temel kay\u0131t t\xfcr\xfc \xfczerinde yap\u0131l\u0131r. Bunlar etiket g\xfcnl\xfckleri, alarm g\xfcnl\xfckleri ve olay g\xfcnl\xfckleridir."),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report1",src:a(75882).Z,width:"1352",height:"721"}))),(0,t.kt)("h2",{id:"etiket-loglar\u0131"},"Etiket Loglar\u0131"),(0,t.kt)("p",null,"Etiket loglar\u0131, etiketin g\xfcnl\xfck kayd\u0131 yap\u0131land\u0131rmas\u0131na ba\u011fl\u0131 olarak kaydedilen verilerdir. Etiketin lokasyon, zaman ve di\u011fer parametrelerine g\xf6re filtreleme yap\u0131larak farkl\u0131 formatlarda \xe7\u0131kt\u0131 olu\u015fturulabilir."),(0,t.kt)("h3",{id:"loga-kaydedilecek-etiketlerin-se\xe7imi"},"Loga Kaydedilecek Etiketlerin Se\xe7imi"),(0,t.kt)("p",null,"Etiketler se\xe7im ekran\u0131nda, bir istasyonun alt\u0131ndaki etiketler gruplanabilir veya t\xfcm\xfc se\xe7ilebilir. \u0130stasyonun alt\u0131ndaki etiketler se\xe7ene\u011fini kullan\u0131rsan\u0131z, t\xfcm istasyonlar\u0131n bir listesi g\xf6r\xfcnt\xfclenir."),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report2",src:a(20777).Z,width:"1366",height:"727"}))),(0,t.kt)("p",null,"\u0130stasyon ad\u0131 \xfczerine t\u0131klanarak istasyon alt\u0131ndaki etiketler listelenebilir."),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report3",src:a(21603).Z,width:"675",height:"388"}))),(0,t.kt)("p",null,'T\xfcm etiketler aras\u0131ndan se\xe7im yapmak i\xe7in "T\xfcm Etiketler" se\xe7ene\u011fi se\xe7ilir.'),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report4",src:a(55289).Z,width:"661",height:"422"}))),(0,t.kt)("p",null,'Etiket \xf6zelliklerine g\xf6re etiket listesinde farkl\u0131 \u015fekillerde filtreler yap\u0131labilir. Sol paneldeki listeden raporlanacak etiketler \xe7ift t\u0131klanarak se\xe7ilir. Se\xe7ilen etiketler sa\u011fdaki panelde g\xf6r\xfcnt\xfclenir. Sa\u011f panelden belirli bir etiketi silmek i\xe7in etiketi se\xe7in ve klavyede "Sil" tu\u015funa bas\u0131n. T\xfcm etiketleri silmek i\xe7in "Listeyi Temizle"yi se\xe7in.'),(0,t.kt)("h3",{id:"etiket-loglar\u0131n\u0131-g\xf6r\xfcnt\xfcleme"},"Etiket Loglar\u0131n\u0131 G\xf6r\xfcnt\xfcleme"),(0,t.kt)("p",null,'Rapor sayfas\u0131 ilk a\xe7\u0131ld\u0131\u011f\u0131nda, se\xe7ilen etiketlerin de\u011ferleri belirli bir zaman aral\u0131\u011f\u0131 i\xe7in grafiksel olarak g\xf6r\xfcnt\xfclenir. Tablo formundaki verileri g\xf6r\xfcnt\xfclemek i\xe7in "Tablo G\xf6r\xfcn\xfcm\xfc" se\xe7ilebilir. G\xf6sterilen verinin zaman aral\u0131\u011f\u0131 ve t\xfcr\xfc ile ilgili olarak farkl\u0131 se\xe7imler yap\u0131labilir.'),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report5",src:a(61296).Z,width:"605",height:"340"}))),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report6",src:a(34017).Z,width:"605",height:"340"}))),(0,t.kt)("h4",{id:"bir-zaman-aral\u0131\u011f\u0131-se\xe7me"},"Bir Zaman Aral\u0131\u011f\u0131 Se\xe7me"),(0,t.kt)("p",null,"G\xf6r\xfcnt\xfclenen verilerin zaman aral\u0131\u011f\u0131 4 farkl\u0131 \u015fekilde se\xe7ilebilir."),(0,t.kt)("p",null,"A) Interval: 2 farkl\u0131 tarih se\xe7ilir.",(0,t.kt)("br",{parentName:"p"}),"\n","B) Within the last:  Saat, g\xfcn, hafta vb. se\xe7ilir ve ge\xe7erli tarih/saatten geriye do\u011fru zaman hesaplan\u0131r.",(0,t.kt)("br",{parentName:"p"}),"\n","C) On Time/Date: Kesin bir tarih se\xe7ilir.",(0,t.kt)("br",{parentName:"p"}),"\n","D) ... Time Ago: G\xf6r\xfcnt\xfclendi\u011fi g\xfcnden itibaren geriye d\xf6n\xfck rapor g\xf6r\xfcnt\xfclemek i\xe7in dakika, saat, g\xfcn vb. se\xe7ilir.",(0,t.kt)("br",{parentName:"p"}),"\n",'\xd6rne\u011fin "Today - 5 Day", "5 g\xfcn \xf6nce" anlam\u0131na gelir. "Today - 5 Month" se\xe7iliyse ve zaman birimi "Ay" ise; zaman aral\u0131\u011f\u0131 olarak o tarihin ay\u0131 se\xe7ilir.'),(0,t.kt)("h4",{id:"veri-t\xfcr\xfc-se\xe7me"},"Veri T\xfcr\xfc Se\xe7me"),(0,t.kt)("p",null,"G\xf6r\xfcnt\xfclenecek veri t\xfcr\xfc, verinin kendisinin de\u011feri kadar istatistiksel de\u011fer de olabilir."),(0,t.kt)("p",null,"A) All Data: G\xfcnl\xfc\u011fe kaydedilen verilerin ger\xe7ek de\u011feri g\xf6sterilir.",(0,t.kt)("br",{parentName:"p"}),"\n","B) Statistics: Se\xe7ilen zaman periyotlar\u0131 i\xe7in verilerin ortalama, toplam, maksimum, minimum, de\u011fi\u015fim ve medyan de\u011ferlerini g\xf6r\xfcnt\xfcler. \xd6rne\u011fin, bir g\xfcnl\xfck zaman aral\u0131\u011f\u0131ndaki saatlik maksimumlar se\xe7ilirse, 24 noktadan olu\u015fan bir \xe7\u0131kt\u0131 \xfcretmek i\xe7in zaman aral\u0131\u011f\u0131 saatlik dilimlere b\xf6l\xfcn\xfcr."),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report7",src:a(28108).Z,width:"605",height:"340"}))),(0,t.kt)("h3",{id:"grafikleri-y\xf6netme"},"Grafikleri Y\xf6netme"),(0,t.kt)("p",null,"Show/hide Legend button: Grafi\u011fin sa\u011f \xfcst k\xf6\u015fesinde \xe7izgi rengini g\xf6steren \xe7izilen etiketin ve a\xe7\u0131klamalar\u0131n ad\u0131n\u0131 g\xf6sterir veya gizler.",(0,t.kt)("br",{parentName:"p"}),"\n","Add a New Chart: Ana grafikteki verileri \xf6nceki d\xf6nemlerle kar\u015f\u0131la\u015ft\u0131rabilece\u011finiz yeni bir grafik nesnesi ekler. Eklenen \xe7izelge, belirlenen zaman aral\u0131\u011f\u0131na g\xf6re ana \xe7izelge ile senkron olarak g\xf6r\xfcnt\xfclenir.    "),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report8",src:a(89557).Z,width:"605",height:"340"}))),(0,t.kt)("p",null,"Grafikte tan\u0131mlanan aral\u0131kta se\xe7ilen \xf6\u011feye ait veriler varsa, bu veriler bir nokta ile g\xf6sterilir. G\xf6sterilen noktalar birbirine farkl\u0131 \u015fekillerde ba\u011flanabilir. Grafi\u011fin alt\u0131nda, her bir grafik i\xe7in grafik \xf6zellikleri men\xfcs\xfc bulunur. Bu men\xfc arac\u0131l\u0131\u011f\u0131 ile a\u015fa\u011f\u0131daki i\u015flemler ger\xe7ekle\u015ftirilebilir."),(0,t.kt)("p",null,"A) Show / hide chart: Bu sat\u0131r bu buton ile gizlenebilir ve g\xf6sterilebilir.",(0,t.kt)("br",{parentName:"p"}),"\n","B) Charged / unloaded: Tag ile ilgili sat\u0131r\u0131n alt\u0131 integral ile doldurulur. Bu \u015fekilde di\u011fer etiketlerle kar\u015f\u0131la\u015ft\u0131rmak daha kolay olabilir.",(0,t.kt)("br",{parentName:"p"}),"\n","C) Merge Points: \xd6\u011fe verilerinin g\xf6sterdi\u011fi noktalar farkl\u0131 \u015fekillerde birle\u015ftirilebilir.           "),(0,t.kt)("center",null,(0,t.kt)("p",null,(0,t.kt)("img",{alt:"report9",src:a(49799).Z,width:"651",height:"310"}))),(0,t.kt)("h3",{id:"grafikleri-kaydetme"},"Grafikleri Kaydetme"),(0,t.kt)("p",null,'Se\xe7ilen parametrelere g\xf6re grafik "png" format\u0131nda bir resim dosyas\u0131na kaydedilebilir. Sol paneldeki "Grafik Kaydet" d\xfc\u011fmesini kullan\u0131n.     '),(0,t.kt)("h3",{id:"verileri-d\u0131\u015fa-aktarma"},"Verileri D\u0131\u015fa Aktarma"),(0,t.kt)("p",null,'Se\xe7ilen parametrelere g\xf6re veriler \xe7e\u015fitli formatlarda d\u0131\u015fa aktar\u0131labilir. Bunun i\xe7in \xf6ncelikle tablo g\xf6r\xfcn\xfcm\xfc butonuna bas\u0131larak veri tablosu olu\u015fturulur. Tablo g\xf6r\xfcnt\xfcleme ekran\u0131n\u0131n \xfcst k\u0131sm\u0131nda yer alan "html, xml, xslx, csv" butonlar\u0131 kullan\u0131larak tablodaki veriler bu formatlara d\xf6n\xfc\u015ft\xfcr\xfcl\xfcr ve saklan\u0131r.'),(0,t.kt)("h3",{id:"filtreleri-kaydetme"},"Filtreleri Kaydetme"),(0,t.kt)("p",null,'Verileri olu\u015fturmak i\xe7in se\xe7ilen parametreler kaydedilebilir ve gerekti\u011finde ayn\u0131 filtre tekrar uygulanabilir. Bunun i\xe7in olu\u015fturulan parametreler en az bir kez uygulanmal\u0131d\u0131r (Uygula Butonu). Bunu yapt\u0131ktan sonra "Bu filtreyi kaydet" se\xe7ene\u011fini se\xe7in ve filtreye bir isim verilecektir. Filtreler kullan\u0131c\u0131 hesab\u0131 i\xe7in kaydedilir. Kullan\u0131c\u0131 bu filtrelere herhangi bir yerden ula\u015fabilir. Kaydedilen filtre, ekran\u0131n sa\u011f taraf\u0131nda bulunan kay\u0131tl\u0131 filtreler men\xfcs\xfcnden uygulanabilir.'),(0,t.kt)("h4",{id:"kaydedilmi\u015f-filtre-sorgular\u0131n\u0131-\xe7a\u011f\u0131rma"},"Kaydedilmi\u015f Filtre Sorgular\u0131n\u0131 \xc7a\u011f\u0131rma"),(0,t.kt)("p",null,"Bu men\xfcdeki filtreler fare ile sa\u011f t\u0131klanarak kopyaland\u0131\u011f\u0131nda filtre i\xe7eri\u011fi panoya kopyalan\u0131r. Bu kopyalanan i\xe7erik, SCADA Edit\xf6r ekran\u0131ndaki nesnelere ba\u011flanabilir. Bu ekranda ilgili nesneye t\u0131kland\u0131\u011f\u0131nda rapor ekran\u0131 a\xe7\u0131l\u0131r ve \xf6n tan\u0131ml\u0131 filtre \xe7al\u0131\u015ft\u0131r\u0131l\u0131r."),(0,t.kt)("h3",{id:"raporlama-komutu-olu\u015fturma"},"Raporlama Komutu Olu\u015fturma"),(0,t.kt)("p",null,'Olu\u015fturulan filtreler raporlama komut sat\u0131r\u0131 \xfczerinden \xe7a\u011fr\u0131larak istenilen formatta rapor \xe7\u0131kt\u0131s\u0131n\u0131n olu\u015fturulmas\u0131 m\xfcmk\xfcnd\xfcr. Bunun i\xe7in raporlama uygulamas\u0131 i\xe7in gerekli olan komut parametrelerini vermeniz yeterlidir. Bu \xf6zellik kullan\u0131larak Windows i\u015fletim sisteminin "G\xf6rev Zamanlay\u0131c\u0131" \xfczerinden belirli zaman aral\u0131klar\u0131nda otomatik raporlar olu\u015fturulabilmektedir.'),(0,t.kt)("p",null,"A\u015fa\u011f\u0131daki ad\u0131mlar takip edilir."),(0,t.kt)("p",null,"ScadaReporter.exe",(0,t.kt)("br",{parentName:"p"}),"\n","-database  Proje veritaban\u0131n\u0131n ad\u0131 (proje ile ayn\u0131 ad)",(0,t.kt)("br",{parentName:"p"}),"\n","-user      Database kullan\u0131c\u0131 ad\u0131",(0,t.kt)("br",{parentName:"p"}),"\n","-password  Database kullan\u0131c\u0131 \u015fifresi",(0,t.kt)("br",{parentName:"p"}),"\n","-server    Database ip adresi\n-port      Database ba\u011flant\u0131 portu",(0,t.kt)("br",{parentName:"p"}),"\n","-tnsname   Oracle veritabanlar\u0131 i\xe7in tns ad\u0131",(0,t.kt)("br",{parentName:"p"}),"\n","-format    Rapor \xe7\u0131kt\u0131 formu. Olas\u0131 de\u011ferler html, csv, xlsx, xml",(0,t.kt)("br",{parentName:"p"}),"\n","-query     Rapora kaydedilen filtrenin ad\u0131. Bu parametre rapor komutu i\xe7in gereklidir. Verilmezse rapor \xfcretmiyoruz; Raporlama aray\xfcz\xfc a\xe7\u0131l\u0131r.",(0,t.kt)("br",{parentName:"p"}),"\n","-output    D\u0131\u015fa aktar\u0131lacak dosyan\u0131n yolu ve ad\u0131.   "),(0,t.kt)("h4",{id:"\xf6rnek-uygulama"},"\xd6rnek Uygulama"),(0,t.kt)("p",null,"ScadaReporter.exe",(0,t.kt)("br",{parentName:"p"}),"\n","-database modpollread",(0,t.kt)("br",{parentName:"p"}),"\n","-user postgres",(0,t.kt)("br",{parentName:"p"}),"\n","-password pwd123",(0,t.kt)("br",{parentName:"p"}),"\n","-server localhost",(0,t.kt)("br",{parentName:"p"}),"\n","-port 5432",(0,t.kt)("br",{parentName:"p"}),"\n","-query twohours",(0,t.kt)("br",{parentName:"p"}),"\n","-format csv",(0,t.kt)("br",{parentName:"p"}),"\n",'-output "C:\\Users\\yg\\Documents\\Reports\\Last2Hours"'))}m.isMDXComponent=!0},3905:function(e,r,a){a.d(r,{Zo:function(){return d},kt:function(){return p}});var i=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function k(e,r){if(null==e)return{};var a,i,t=function(e,r){if(null==e)return{};var a,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=i.createContext({}),u=function(e){var r=i.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},d=function(e){var r=u(e.components);return i.createElement(o.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},s=i.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,d=k(e,["components","mdxType","originalType","parentName"]),s=u(a),p=t,c=s["".concat(o,".").concat(p)]||s[p]||m[p]||l;return a?i.createElement(c,n(n({ref:r},d),{},{components:a})):i.createElement(c,n({ref:r},d))}));function p(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,n=new Array(l);n[0]=s;var k={};for(var o in r)hasOwnProperty.call(r,o)&&(k[o]=r[o]);k.originalType=e,k.mdxType="string"==typeof e?e:t,n[1]=k;for(var u=2;u<l;u++)n[u]=a[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}s.displayName="MDXCreateElement"},75882:function(e,r,a){r.Z=a.p+"assets/images/report1-3708198841acc448b80b9067975084db.png"},20777:function(e,r,a){r.Z=a.p+"assets/images/report2-748124932abb0561eaaf5b1614de5dfa.png"},21603:function(e,r,a){r.Z=a.p+"assets/images/report3-b773a1fb30c9014dba846921d24976d2.png"},55289:function(e,r,a){r.Z=a.p+"assets/images/report4-5302a94ff80d99b7f8b6c779f4e46d44.png"},61296:function(e,r,a){r.Z=a.p+"assets/images/report5-1eb3e7cc907ac46f50c940fd809969a7.png"},34017:function(e,r,a){r.Z=a.p+"assets/images/report6-983d530c270e2ad3841e344e47f752d4.png"},28108:function(e,r,a){r.Z=a.p+"assets/images/report7-9e09ff98dab07697e9891d1cd1192c2c.png"},89557:function(e,r,a){r.Z=a.p+"assets/images/report8-a2614f673dd113870a2f66ac203b26c5.png"},49799:function(e,r,a){r.Z=a.p+"assets/images/report9-a0caff614d2a7df3ada2b8c31d85becb.png"}}]);