"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4781],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74082:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=["components"],l={title:"Basit Cihaz Ba\u011flant\u0131s\u0131 Notlar\u0131"},c=void 0,u={unversionedId:"Basic-Network-Connection-Notes",id:"Basic-Network-Connection-Notes",title:"Basit Cihaz Ba\u011flant\u0131s\u0131 Notlar\u0131",description:"Cihaz Ba\u011flant\u0131s\u0131",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Basic-Network-Connection-Notes.md",sourceDirName:".",slug:"/Basic-Network-Connection-Notes",permalink:"/tr/docs/Basic-Network-Connection-Notes",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Basic-Network-Connection-Notes.md",tags:[],version:"current",frontMatter:{title:"Basit Cihaz Ba\u011flant\u0131s\u0131 Notlar\u0131"},sidebar:"Documents",previous:{title:"MDV61850 BROWSER Uygulama Notu",permalink:"/tr/docs/MDV61850BROWSER-Application-Notes"}},s={},p=[{value:"Cihaz Ba\u011flant\u0131s\u0131",id:"cihaz-ba\u011flant\u0131s\u0131",level:3}],m={toc:p};function d(e){var n=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"cihaz-ba\u011flant\u0131s\u0131"},"Cihaz Ba\u011flant\u0131s\u0131"),(0,i.kt)("p",null,"Ethernet ve USB kablosu ile PC-PLC ileti\u015fimi kurabilirsiniz.\nEthernet kablosunu bilgisayar\u0131m\u0131z\u0131n W\u0130-F\u0130 veya Ethernetle ba\u011fl\u0131 oldu\u011fu modemine ba\u011fl\u0131yoruz."),(0,i.kt)("p",null,"Daha sonra PLC nin bilgisayar ba\u011flant\u0131s\u0131n\u0131 USB \xfczerinden yap\u0131yoruz.\nCihaz\u0131m\u0131za bir \u0130P adresi tan\u0131mlamak i\xe7in Mikrodiagramda bulunan Mikroterminali a\xe7\u0131yoruz."),(0,i.kt)("p",null,"Mikroterminal program\u0131na Mikrodiagram Tools men\xfcs\xfcnden ula\u015f\u0131labilir."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"terminal-01",src:t(17020).Z,width:"643",height:"358"}))),(0,i.kt)("p",null,'Mikroterminal \xfczerinde COM portunu a\xe7mak i\xe7in "port name" k\u0131sm\u0131ndan cihaz ile bilgisayar aras\u0131ndaki ba\u011flant\u0131n\u0131n kuruldu\u011fu portu se\xe7iniz. (Cihaz ile bilgisayar aras\u0131ndaki ba\u011flant\u0131 portu "ayg\u0131t y\xf6neticisi"nden kontrol edilebilir.)'),(0,i.kt)("p",null,'"A\xe7" sekmesine t\u0131kland\u0131\u011f\u0131nda, "konsol penceresinde" g\xf6r\xfcnt\xfclenen COM port bilgisi g\xf6r\xfcnt\xfclenir.'),(0,i.kt)("p",null,"AT Komutunu G\xf6nderme"),(0,i.kt)("p",null,"AT komutlar\u0131 ile cihaz \xfczerindeki ayarlar okunabilir veya cihaza istenilen de\u011ferler yaz\u0131labilir."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dvc-cnnctn-01",src:t(17388).Z,width:"588",height:"313"}))),(0,i.kt)("p",null,"Burada cihaz\u0131m\u0131za bir \u0130P adresi tan\u0131mla subnetlerini ayn\u0131 olmas\u0131na dikkat etmemiz gerekiyor."),(0,i.kt)("p",null,"Daha sonra \u0130P adresinin kullan\u0131mda olup olmad\u0131\u011f\u0131n\u0131 belirlemek i\xe7in ping at\u0131yoruz. "),(0,i.kt)("p",null,"Ping 192.168.10.122 (Sadece 4 kez ping atar)"),(0,i.kt)("p",null,"Ping 192.168.10.122 -t (s\u0131n\u0131rs\u0131z ping atar)"),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dvc-cnnctn-03",src:t(66507).Z,width:"595",height:"371"}))),'Daha sonra cihaz\u0131 a\xe7\u0131p kapatmam\u0131z ya da Internal FS k\u0131sm\u0131nda AT+Reset 1 i\u015flemini yapmam\u0131z gerekiyor. AT + RESET = 1 yaz\u0131p "g\xf6nder" butonuna t\u0131kland\u0131\u011f\u0131nda cihaz yeniden ba\u015flat\u0131l\u0131r.',(0,i.kt)("p",null,"Daha fazla bilgi i\xe7in:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=HtjkckOZhUQ&list=PLJRed6B6rTSqHFYRp19xlIEmJEg2C9LGG&index=9"},"Device Parameters"),"."))}d.isMDXComponent=!0},17388:function(e,n,t){n.Z=t.p+"assets/images/dvc-cnnctn-01-12296b4a9dca87f6cb0838e578690360.png"},66507:function(e,n,t){n.Z=t.p+"assets/images/dvc-cnnctn-03-5d189a480e244775e8b917f821d3af49.png"},17020:function(e,n,t){n.Z=t.p+"assets/images/terminal-01-734e1a985274ed20c24eea9c78db9e48.png"}}]);