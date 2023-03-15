"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"GSM IP Usage Application Notes"},o=void 0,s={unversionedId:"GSM-IP-Usage-Application-Notes",id:"GSM-IP-Usage-Application-Notes",title:"GSM IP Usage Application Notes",description:"Overview",source:"@site/docs/GSM-IP-Usage-Application-Notes.md",sourceDirName:".",slug:"/GSM-IP-Usage-Application-Notes",permalink:"/docs/GSM-IP-Usage-Application-Notes",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/GSM-IP-Usage-Application-Notes.md",tags:[],version:"current",frontMatter:{title:"GSM IP Usage Application Notes"},sidebar:"Documents",previous:{title:"NTP Application Notes",permalink:"/docs/NTP-Application-Notes"},next:{title:"IEC104 Application Notes",permalink:"/docs/IEC104-Application-Notes"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Required Connections",id:"required-connections",level:3},{value:"GSM APN Settings",id:"gsm-apn-settings",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Sim cards provided by GSM operators can be used by receiving IP over Mikrodev PLC/RTU products.  "),(0,a.kt)("p",null,"If Modbus Slave, IEC 104 Slave, DNP3 Slave will be used, sim card must have Static IP feature.  "),(0,a.kt)("p",null,"Dynamic IP enabled sim card is sufficient for Mqtt, DNP3 Master applications."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Dynamic IP enabled sim cards cannot be connected via GSM with Mikrodiagram/Telediagram program, If you want to connect with Mikrodiagram/Telediagram program via GSM; Static IP capable sim card should be used."),(0,a.kt)("h3",{id:"required-connections"},"Required Connections"),(0,a.kt)("p",null,"To establish a connection to the PLC/RTU device via GSM, the antenna and USB/Ethernet connection of the devices must be made first and the sim card must be inserted into the device."),(0,a.kt)("p",null,"If USB connection is to be made, GSM IP settings are made with AT commands via Mikroterminal. Whether the device receives an IP can be checked from AT commands."),(0,a.kt)("p",null,"If Ethernet connection is to be made, GSM IP settings are made by entering GSM APN, Username and Password information via Mikrodiagram/Telediagram program or If the GSM IP is known, the connection is established by entering the GSM IP and port information in the device configuration section via the Mikrodiagram / Telediagram application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," However, in connections made by establishing an Ethernet connection, the IP received by the device through the Mikrodiagram / Telediagram program cannot be seen."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip1",src:n(28871).Z,width:"1471",height:"706"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 1: Mikrodiagram GSM Settings"))))),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip2",src:n(73587).Z,width:"1054",height:"395"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 2: Entering Mikrodiagram GSM IP and Port Information"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If Mikrodev PLC/RTU products want to receive IP over GSM, TCP Socket block should be included in the Mikrodiagram/Telediagram project installed on the device and GSM should be selected as the media type."),(0,a.kt)("p",null,"TCP Socket block is not needed for DM series."),(0,a.kt)("h3",{id:"gsm-apn-settings"},"GSM APN Settings"),(0,a.kt)("p",null,"After the necessary hardware connections are made, Mikroterminal application is opened to get IP for Sim cards with Static IP feature. The port to which the device is connected is selected."),(0,a.kt)("p",null,"Command -> GSM -> AT+GPRSAPN=","*"," -> W(Write)"),(0,a.kt)("p",null,"*","For Vodafone AT+GPRSAPN=internetstatik"),(0,a.kt)("p",null,"For Turkcell AT+GPRSAPN=mgbs"),(0,a.kt)("p",null,"For Turk Telekom AT+GPRSAPN=statikip must be written."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip3",src:n(56120).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 3: Mikroterminal AT+GPRSAPN Command"))))),(0,a.kt)("p",null,"If Username and Password information is provided to the user by the GSM operators, the user information obtained must be written in the appropriate places in the Mikroterminal application."),(0,a.kt)("p",null,"If user information is not provided by the operator, the username and password sections in Mikroterminal application should be left as default."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip4",src:n(14147).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 4: Mikroterminal Username and Password Definition Command"))))),(0,a.kt)("p",null,"In order for the GPRSAPN settings to be applied on the device, the device must be reset."),(0,a.kt)("p",null,"Commands -> Internal FS -> AT+RESET=1 -> W(Write) should be typed and waited for the device to stand up again."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip5",src:n(78122).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 5: Mikroterminal Device Reset Command"))))),(0,a.kt)("p",null,"When the \u201cErr (Error) LED\u201d of the device turns off, when the \u201cSYS (System) LED\u201d starts to flash, the device is reconnected via the Mikroterminal application."),(0,a.kt)("p",null,"In order to learn the GSM signal quality of the device, the GSM part of the Mikroterminal application is opened."),(0,a.kt)("p",null,"Commands -> GSM -> AT+CSQ=? -> R(Read) query is made."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip6",src:n(69954).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 6: Mikroterminal AT+CSQ Command"))))),(0,a.kt)("p",null,"The query can take values between 1 and 31."),(0,a.kt)("p",null,"1 means the lowest signal quality, 31 means the highest."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip7",src:n(242).Z,width:"609",height:"98"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 7: CSQ Tables"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If the signal quality is insufficient, the position or gain of the antenna is checked. If the antenna is in the panel, the signal quality can be increased by taking the antenna out or replacing the antenna with a more gain antenna."),(0,a.kt)("p",null,"IP status of the device can be monitored from the Socket Status section of Mikroterminal application."),(0,a.kt)("p",null,"Commands -> Socket Status -> AT+Connection=? -> R (Read) query is made."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip8",src:n(89530).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 8: Mikroterminal AT+CONNECTION Commands"))))),(0,a.kt)("p",null,"AT+CONNECTION answer to your query"),(0,a.kt)("p",null,"If 0; The module is de-energized,"),(0,a.kt)("p",null,"If 2; The module is energized, (can make calls, send sms.)"),(0,a.kt)("p",null,"If 4; Module trying to get IP,"),(0,a.kt)("p",null,"If 6; Module got IP,"),(0,a.kt)("p",null,"If 8; It means that the module has both received IP and its connection has been made.."),(0,a.kt)("p",null,"If the answer to the AT+CONNECTION query is 8, it means that our device received IP and established a connection via GSM."),(0,a.kt)("p",null,"In order to learn the IP received by the device, the GSM section of the Mikroterminal application is opened."),(0,a.kt)("p",null,"Commands -> GSM -> AT+GPRSIP=? -> R(Read) query is made."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip9",src:n(91656).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 9: Mikroterminal AT+GPRSIP Command"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If the answer to this query comes as TIMEOUT, it means that the device has not received an IP."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," GSM part of Mikroterminal application is opened in order to understand whether the sim card is inserted correctly."),(0,a.kt)("p",null,"Commands -> GSM -> AT+SIM=? -> R(Read) query is made."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip10",src:n(18667).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 10: Mikroterminal AT+SIM Command"))))),(0,a.kt)("p",null,"AT","+","SIM=? The answer to your query;"),(0,a.kt)("p",null,"0 indicates that the SIM card is not inserted, incorrectly inserted, or defective."),(0,a.kt)("p",null,"1 indicates that the SIM card is inserted correctly and is error-free."),(0,a.kt)("p",null,"In order to prevent short-term breaks in the GSM connection, the connection waiting time can be defined by specifying a time. The unit of time written to the command is seconds."),(0,a.kt)("p",null,"Commands -> Custom Command Entry -> AT+GSMRESET=<Time",">"," -> Send"),(0,a.kt)("p",null,"From the moment a connection request is received from the GSM part, the device checks the GSM connection for the defined period of time, if the connection is not established after the specified period, the device resets itself."),(0,a.kt)("p",null,"Commands -> Custom Command Entry -> AT+GSMRESET=0 -> Send"),(0,a.kt)("p",null,"Turns off the GSM reset feature."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip11",src:n(21472).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 11: Mikroterminal AT+GSMRESET Command"))))),(0,a.kt)("p",null,"Command can be sent to GSM modem via Mikroterminal."),(0,a.kt)("p",null,"Commad -> GSM -> AT+MODEM= -> AT+<Command",">"," -> W query is made."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gsm_ip12",src:n(39541).Z,width:"1001",height:"731"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 12: Mikroterminal AT+MODEM Command"))))))}d.isMDXComponent=!0},28871:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip1-b97d8ab22448e0b80f303db002535da3.png"},18667:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip10-5db66956b0a741a898bb3708dcaf3c60.png"},21472:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip11-ecb87629bd484af096e3b67023183e0e.png"},39541:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip12-04741678241a658fb9181ecb00c0887c.png"},73587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip2-8a6385a5e4e28b3f154e38f861e44078.png"},56120:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip3-b6250962913eaea9cc7ef96bd2d4e8eb.png"},14147:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip4-c52c920b835d107efcfed37772bb2fda.png"},78122:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip5-2c966c72a7fe953a47bcbc42235fc324.png"},69954:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip6-511bc836f70e59f00805a304cb07de3a.png"},242:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmEAAABiCAIAAACXnJObAAASTElEQVR4nO2d65XbuBKElYuD2VgciiPZQDYOx4LLM233raluQJBEQCJQ3485GpICHyih8CL6VoQQQgiRcXv3BQghhBAfyjePvAkhhBDCIY+c69BiI6QuMQhJSwxCHinmIXWJQUhaYhDySDEPqUsMQtISg5BHrsOPHz+O7Pv58+e7L6SK1CUGIWmJQVzVI//9918bTD2MwTf+999/tTHX379/p+mYrzhHCrPu4HzkkSmUxf/8849fDILPLQrp0Jvt+vXrF6VzSCsVj5/Xv4vbO7OpMXXgSIH0H7fQveB2/wXRTyO9dz84Eh+Ip0BXMpS3SKuB5UV8kml24Jb0Ubu00ixGjlzwfGlv9xPhYS5mEkYt91Nt4A+Bfn2YZlqGe7KPPOyx8DP6NKnV8Cy/ZcbmQmx4nqvB8+NIc+av+nSo8D3uCwvi47fxdvucrK6YxVbEuCpSnzBpoRJsix3jluDJph6JRaGbh9HpkZ6Cnbd2L3c9EgtrLHpqHtlIqvYtfyb2BOgBztHhpxVcDTPznDW78qdne+kJ+7/2bNseiQ5Hx2CBSSnjYShvclmjtsvSR6nH3wV9F83VN5JQP6EQ42f0aVJLQSmkxU2PR1qm0nfxXzyFZyEWVb73vy/8X0oBjzw+pzU1VPCtUrFKtRsrcX4LlCZd21uYfAFU+vjGhkemBUf5EgZ65JFBXqNKPZKaEegonR5ph6V5jae465F4GViEneiRBYrI+NObo8O3a5tomxnWKmoK9C2ohM5koyC9uHPtpVLHZl96FtvV45GxgKWb9Quwq8L0sd0yQTxt+JSfJrUUL6fSQrB0eGSslad7sV5sme27TEDU0UTFH2YqdSxESdHdtRNJa4Kx8D0+2+n8w3uZrK5axSIeQJWVNF8M155p7Pg39UhXVzx7j0emAqYT9XikX0CjNnCKR1K1lZ72BB1+WsHV3yl6u9e+7/dIPzJqzAsxE/AhoeiRrjpqvCK1XxP9cGoFLG7EO/Wrjd96eyH27RmVz5NaiudTLSfSIgazpDaGZJAQUUz0RRI0CQWvjS4par3WlGwkQr+E+MM4tmCdsTYoO4356qKaNT2fmkc2DMw9skAfLGkJq24xo2seiRcTmxcllDs9Honn8l9N7d6RRz0Sd8UaxgQdzpdWm3Q8ko6hX7rRrgc3PBK/GBsPKGzLo+iRWHzVVEoqSr9b6q0U/DpegN1XWp6/vRDjnPs0qUWojpNW/Ps9Mm1HUpoNcz3LI22XSQFL4XYi1B2ndmQD7Axv+ATmIM1eob7W8te0vHLjYrOMoERob6dHvtKOxGZB3Hu6R5Z6Aap2ZATrxGm9zbnbnY4JUv8/dVqi2fgF2AH+lXSU1Kll8SvtSN/ll6R25EukPdT0o+0Zj0yLKvt3cjuSGg1neWRjqPJdTFaXDyI69MR6eiBpC+UONhcsU2qTqxvN/RT7VmM8kq6kBN2mTZmadOOju53kkXN0OFlad+kZOMThW5yl8kS+UF+342URdZDguCNeUiQ1uXPHI+MFxKcxVDxt/n+J/v/kK3gIquwYcUuPR0Z11mZhpOORJ3pku33QSIRKSSp8j8uI9dNnH/w5TL4Ae5IujKiKxrxWv9S2RxYYMMbswzulKnmnR9J5Y8U89sfaldMUQep7v31vTNzGe+QcHb5d20TPvFYsXm7BOR7KF9dYrW5HjhXnGGLnh5F20aVZnB7cP6/VvxJfl/qEQux2u5RHegGEAoqlUo9HGo33I3F7nNd6bl8r1qHskno8smSt6rc3Fhu8R99A6m3xuTX6u6JH4hxFlwemRhU7khzq5+7102Gx7u/ao/cxaOORTrxHu+zGu6Hl2b7WCdw+rOBKG/H/fkEKoYnuPR4Zk6XcN/BEsVWHdUGc2+UHpDN3YhZHIT36fmTckg6BvYtvl1g+T2piJaSu57g7k0hIWmIQ8kgxD6nraWr1dGFIWmIQ8kgxD6lLDELSEoNIPFIIIYQQfyCPnGvSYiOkLjEISUsMQh4p5iF1iUFIWmIQ8kgxD6lLDELSEoOQR4p5SF1iEJLWo/z8+bOxdv9z2Luei8273tQj7YUzfFO1Z7C2Te1t2fhSdrwSY/kX4DZR1+vg4gCLlTiDWE9aVm7EKC6PpkMLTbgvyiM72dEjfSnqVCK0+hFxy9a/sARpMTxLPK5Vb0uZ2GcLQ+i76N/12EFdr4Oa+ZCALZ/PetIyjzwKBFq87aFE4jrgQ5cFl0cuwqE5X004lj5PeGTjK3audFdUPCosqu32plW+TmQHdb3Ozy/836NQsw6PJSVxFutJywoo+2tbqMTAReBqtoQWS1A7kla1tI0WipKi5Bp4MK2r54syrqHVHT3SCx3Lftr7hEc2NGo6TsVBRaGfPa4Na3zUGobPsYO6XodkiYJcTxJnsZ60vBL/64vy3SPdQekzYeu71nal/a54FnNHO7tpL0rOzh6rcctodTuPxHqZ1ZLogOiR6erPJJ2eACP4rfREcaPFu7cPC3S4La+uU2h4ZFlOEmexnrSwo+sGy53b3tgKxIA/uIvGI72k8hSoBCOPpJDdaXXft1NSa2h1O4/E1ltqb+e2IwnTvenpbjuyrCIyZ3l1nYI88gnWkxZ65OFbhwbQvUgVaJm1mRblr1966CH0SAqq5cfXPJJaDvLIdYjNQTKqc8cjI35wezyyLNRZ4SyvrlOojUeWFSVxFutJiyZMHDKwjlP7t9GObOOyeaUdaV6L1xY9chmt7uWRRz5R52o0qic80tRMEbdNf1b7oyN75rWuNOjtrK2us6jNa11SEmexnrTIIynaYud4JDXgzNvsM7qsGbB9tsk7fnzNI307zurXnJ3Lk/anU+Y91CikdBCTZnw5kixW70eKiN6PfJT1pBUn3qN7lb55rTQYiYaHHoltPnxdpNHX6q+D//iic3LGFdnLIz+Z2nj4SkhdYhCS1lnEzrbNkUd+Ct7iXFigUpcYhKR1FjtU1h9CHinmIXWJQUhar4Bdsmsv9fUEiUcKIYQQ4g/kkXNNWmyE1CUGIWmJQcgjxTykLjEISUsMQh4p5iF1iUFIWmIQ8kgxD6lLDELSOp2n3xRfDHmkmIfU5TSCpkVu2XvZPp9AExHLxtKilcJozZ1XXuqXRxrySDEPqavAPPseb3MjpGIOFw/Dz9uys7Ru36N53GDhsFcWBJBHGrt7pC3vROsKRu5qBdecQ1HWKvu0av5iqzfV2E1dDWhN6gaxKRADNZjkVlok81F2lhYGC7IVADAwJIUH8TLH9YMb8TGiR1rF7lDahhrb2iMtv9MYVeWR9SZoFfxDSaZRrODj4uYmSj8eA2atzVbqavOKR6bda7juuXPdYAuPsrO03BSP3Lfakj8NDBqDi6+moXPL97AK7pG4EnrZT2Nbe+SR94cIMOoyUvPItFKfNgRTAaWL9JMKV2WHe+wkeiSubt8WWMMjyypB+x5lZ2l5v4KFmSxfWvLgG64BLI5qpRZ6p3lkjIxUNtPY1h7plSysbeHeHo+s1cgshbgrPX7JmDKRrdTVZlA7smxWfjmbS8tKMO+s+vWFd2gZt4CLCjeiR9qWWP5spbF9PRKbj2mB1emRjcLOOyXwgNrxXstbuCtjH3XdZcR4ZFlaPG02l5YNGLljHWqxgR4swdKGI0Z/LKEdeWAHoJB209i+HonDkDFUWwke6fHSkNJR2Pl0Hgr/TaDaVq2m7aOuu7zikaUyr3XtTog2m0vLuhbibEGqzVP8yN9f4GGHJqmvtfwtwbAGv5XG9vXIaHiU06/3tSIuUFKqQcqTRy4Mhb1tOyVJNJ2Arfcji6T19QRw7iEFZDZQezh/B7UUPbL89eA9XwXZ1CPjQHS0uk6PTOfgRDx9OzU5H5594a6MTdQl5iNpiUFs6pHx9dhodZ0eWcK7HDZUfhyDFXzsHKMqnrnmDl0Zm6hLzEfSEoPY1CPT9hmtV/JQPO60EwNfziVLpvd2bbBz+ZUENlGXmI+kJQaxqUd+IL6gwbsvZCBSlxiEpCUGIY8U85C6xCAkLTEIeaSYh9QlBiFpiUEkHimEEEKIP5BHzjVpsRFSlxiEpCUGIY8U85C6xCAkLTEIeaSYh9QlBiFpiUHII8U8pC4xCElrKLgQ2EMvji+APFLMY3N1Ybx4pBbBlMB1KigdjD152uVeimvdOK43efeV6E/wpEc98rbQIprySDGPbdVVC8XnMWHuPhkMTUPhinCV/HTF/B24orQ6jeTTPLIHeeQ6WOGVhlNA7tb1sLCLEWpuITiDrdHqLL8KnbGbuohaYZeGeics/naaFEYI99CSay/8G7mitNBIPP4U1Zlw0co0UodnsUVbs+PtSMtxPNLralSgeeC/GNchnh21lxaS2Kvh5R7eCFb1Pl+iW3ukL/+WWmB/9c2ESGual+8LwHqI8BLWQLefxweK43S2UlfkFY8kbs1F8JcP1h25orSiR7qjUHxQlA2qBT9bqYK5fAtrR9teCpeLAR7wM17D3b5WjDFZQjsSv365GEdbe+SRW4cIaqNBnXE/0hC4fmTM9TSWlrnsM/dwKXa4xwb9HtkYeix/A8Tb54ZHlnUDkUauKK3okZ5HGII7BnvHf2/14O2YPnWWumbovC5F2t4zHkntS3Jr6uq4UKzcrT3SO6mwtwr3vhhj+ccXtDE9PjXaq/RF9LOVuiKntCPRIIs88i9XlNbTHnn7znMeiW1KooR5ZDWPpDGjhkcS8sgLgCKI8irdHpl+1/CeBDygdryrCntuL9EX0c8+6kp53SMpfJtvjOORZTnxtLmitJ72yDQrX/HImFpPO5LGmNrtyLSn7RIS3dcjcRiSBGHcrb7Zs2p4JCbeqO4ZqUeWK9Sz+tlHXSmveCTNZUXSea3rdUK0uaK0Oj2SAsLTuMzxr+Xycx5ZQsXLE0HBYJcYeiSNLOLxKDaabn38e6FpZft6ZDQ8yp7X+1oRV0k6O78xqCmPXACc6YdKiz1dtRRwhNJAFen9yGvdeHw/suGRfrDnOPVwxq8YnR5ZvuuHWg6+Me1rxQmxuN2/65eURqG/BJt6ZDpLIs577vHIdA5OxNO3U5Pb1Yz2En0R/WyiLjEfSUsMYlOPpO6Lklldp0eW8C6HvfthbyNhavT+kO8y14z+d5W+iH42UZeYj6QlBrGpR6aeRP3yDy1vkfYk4GuzZMm4y77S0xi9OpuoS8xH0hKD2NQjPxBf0ODdFzIQqUsMQtISg5BHinlIXWIQkpYYhDxSzEPqEoOQtMQgEo8UQgghxB/II+eatNgIqUsMQtISg5BHinlIXWIQkpYYhDxSzEPqEoOQtMQg5JFiHlKXGISkNY644spWyCPFPLZVVzseZC32AoGr6j+dyKrsfO8OLQt8lrHJI+WRYhJ7qguXq6bwHbhs9N1EvJx6OpGF2fneS2UFElsR8/XE5ZFbe6TVvGhN1MhdiWA5RevrG7QkP63cv/wqdMZu6jKOzMUl7OMahw/FWDYOObUTWW+x3zZ7Ssu5a2PYk4FqxIII1ULRFCzx3URlbO2RXvlK5dW/XitFfLQ1zcv3BWCPD17xpzXQzV+Xl1rZTF01bmGt4Ec90gRzN5HFgsa02Vxa7Xo2xhrCzxjIAT9TRwUa8FaiMrb2yMOWjryvDeR0xv1ohH5MNZTG0qK4qauywz22+ecL2phGavNiCEXo3RVRmanRrhR8tM3O0moUQQa1Mr1ko5CTfhiF6otf30RUxtYeeeSxeZh/oL0vxljG4N3t413la/dmbKWuSGqQ5am+1s4O232Ks82lhYUGVrA891Et7nlkfm6Zx8Gpdxr7iMrY1yOx+RhDeJduj0y/a3i/BB5QO94bnQv3ZuyjrghFXkOe8MioIvW1vvsS3kkcj8Ta9ontyK1EZezrkTgMiTMPHfJInHnvlKZHYuKup7seWdatqe2jLoRGdyI9HnlIEVOIvQuas/PuS3gnlt1YsKAAHh2PjGOTmrPz7f93XcpkouFRZr/e14ocIrPD/ANC4pNHrgT2fRkuAJwO7bWuFKq/p4OUdxNZmD3vmmi8H/novFY//tCq3v3Y0SPTWRJkXZ0emc7BiXj6WI9Lz75wb8Ym6hLzkbTEIDb1yFgzilbX6ZElvMth734cx2DXBw5HWXXPd5lr4mDkqr0Zm6hLzEfSEoPY1CPT9hnNquh/P7J878rwFqF5Z+z3oF32lZ7G6NXZRF1iPpKWGMSmHvmBpKtJLYbUJQYhaYlByCPFPKQuMQhJSwxCHinmIXWJQUhaYhCJRwohhBDiD+/yZyGEEOLD+R8glkdjMxPXAgAAABR0RVh0U29mdHdhcmUAWWFuZGV4LkRpc2tOX/iRAAAAAElFTkSuQmCC"},89530:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip8-41a67e39be0cf6b44db2f8657f9e83af.png"},91656:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gsm_ip9-ee733a960b7dd8e79269e689e860febe.png"}}]);