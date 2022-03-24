"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2900],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=p(n),g=r,o=k["".concat(m,".").concat(g)]||k[g]||N[g]||l;return n?a.createElement(o,i(i({ref:e},d),{},{components:n})):a.createElement(o,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},98444:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return N}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],u={title:"Special Modbus Registers"},m=void 0,p={unversionedId:"Mikrodiagram-Special-Modbus-Registers",id:"Mikrodiagram-Special-Modbus-Registers",title:"Special Modbus Registers",description:"Mikrodev Devices have MODBUS registers which you could set some special parameters. You can find these special registers in the following table. Please note that the values you set via MODBUS will be saved into retentive memory once every 5 minutes for security purposes. After setting the parameter via MODBUS, if you power off the device earlier than 5 minutes, the changes may be lost.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mikrodiagram-Special-Modbus-Registers.md",sourceDirName:".",slug:"/Mikrodiagram-Special-Modbus-Registers",permalink:"/tr/docs/Mikrodiagram-Special-Modbus-Registers",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-Special-Modbus-Registers.md",tags:[],version:"current",frontMatter:{title:"Special Modbus Registers"},sidebar:"Documents",previous:{title:"Mikroterminal Interface",permalink:"/tr/docs/Mikrodiagram-Mikroterminal-Interface"},next:{title:"AT Commands",permalink:"/tr/docs/Mikrodiagram-ATCommands"}},d={},N=[],k={toc:N};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mikrodev Devices have MODBUS registers which you could set some special parameters. You can find these special registers in the following table. Please note that the values you set via MODBUS will be saved into retentive memory once every 5 minutes for security purposes. After setting the parameter via MODBUS, if you power off the device earlier than 5 minutes, the changes may be lost."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SHORT NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"EXPLANATIONS"),(0,l.kt)("th",{parentName:"tr",align:null},"MODBUS ADRESS"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"SIZE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigPort;"),(0,l.kt)("td",{parentName:"tr",align:null},"Mikrodiagram Connection TCP Port"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConnectionTrack;"),(0,l.kt)("td",{parentName:"tr",align:null},"Server Timeout, Track the up sockets is alive or not"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigPlcReset;"),(0,l.kt)("td",{parentName:"tr",align:null},"Reset the PLC when the defined seconds if there is no sokect activity over ETH or GSM"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigAinVoltage;"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigTempType;"),(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigPto;"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration of Pulse Train Output Functionality. 1- Enable, 0- Disable"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigDhcp;"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration of DHCP. 1- Enable, 0- Disable"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigCanSpeed;"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration of CAN Extension Bus Spees. 0- 500 Kbit, 1- 250 Kbit, 2- 100 Kbit, 3- 1000 Kbit"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigCanTmo;"),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout value for CAN extensions, milisecond"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigTimeZone;"),(0,l.kt)("td",{parentName:"tr",align:null},"Time zone,"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"s16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigGsmReset;"),(0,l.kt)("td",{parentName:"tr",align:null},"Power Reset the integrated GSM if there is no GSM activity after defined seconds( After firmware version 15.08. Before 15.08 this value is fixed to 480 seconds)"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProductSubCode;"),(0,l.kt)("td",{parentName:"tr",align:null},"Product Familiy code"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BoardPcbVersion;"),(0,l.kt)("td",{parentName:"tr",align:null},"PCB version number"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"u8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VersionHighByte;"),(0,l.kt)("td",{parentName:"tr",align:null},"Firmware Version Number, High Byte"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"u8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VersionLowByte;"),(0,l.kt)("td",{parentName:"tr",align:null},"Firmware Version Number, High Low"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"u8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ErrorCode;"),(0,l.kt)("td",{parentName:"tr",align:null},"PLC Error State"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"u8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CsqLevel;"),(0,l.kt)("td",{parentName:"tr",align:null},"GSM CSQ Level"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LwipTmo;"),(0,l.kt)("td",{parentName:"tr",align:null},"Resets the integrated ETH Phy if there is no ETH activity after defined seconds AND resets the GSM Modem if the PPP(Point to Point) connection has no activity after defined seconds."),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"u16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mac;"),(0,l.kt)("td",{parentName:"tr",align:null},"MAC adress of ETH units"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SerialNo;"),(0,l.kt)("td",{parentName:"tr",align:null},"Serial number of the PLC"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LocalIp;"),(0,l.kt)("td",{parentName:"tr",align:null},"Local IP adress of the PLC over ETHERNET"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Netmask;"),(0,l.kt)("td",{parentName:"tr",align:null},"Subnet Mask of the PLC over ETHERNET"),(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gateway;"),(0,l.kt)("td",{parentName:"tr",align:null},"Gateway adress of the PLC over ETHERNET"),(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PowerResetCount;"),(0,l.kt)("td",{parentName:"tr",align:null},"Keep to number of power reset counter of the device."),(0,l.kt)("td",{parentName:"tr",align:null},"26"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AppPlcTime;"),(0,l.kt)("td",{parentName:"tr",align:null},"PLC Current Dat/Time"),(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AppPlcRam;"),(0,l.kt)("td",{parentName:"tr",align:null},"PLC Current RAM Usage"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AppPlcSecret;"),(0,l.kt)("td",{parentName:"tr",align:null},"PLC Security Info"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ScheduleItemList","[64]",";"),(0,l.kt)("td",{parentName:"tr",align:null},"This is used with, ViewPLUS SCADA to control scheduling items"),(0,l.kt)("td",{parentName:"tr",align:null},"34"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GprsName","[32]",";"),(0,l.kt)("td",{parentName:"tr",align:null},"GSM APN Username - must be terminated with NULL char"),(0,l.kt)("td",{parentName:"tr",align:null},"162"),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GprsPssw","[32]",";"),(0,l.kt)("td",{parentName:"tr",align:null},"GSM APN Password  - must be terminated with NULL char"),(0,l.kt)("td",{parentName:"tr",align:null},"178"),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GprsPin","[8]",";"),(0,l.kt)("td",{parentName:"tr",align:null},"GSM PIN - Not Used Now"),(0,l.kt)("td",{parentName:"tr",align:null},"194"),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GprsApn","[64]",";"),(0,l.kt)("td",{parentName:"tr",align:null},"GSM APN Name  - must be terminated with NULL char"),(0,l.kt)("td",{parentName:"tr",align:null},"198"),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MenuFbdAddress;"),(0,l.kt)("td",{parentName:"tr",align:null},"Which of the blok values want to be seen on LCD display"),(0,l.kt)("td",{parentName:"tr",align:null},"214"),(0,l.kt)("td",{parentName:"tr",align:null},"u32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MenuLine1","[24]",";"),(0,l.kt)("td",{parentName:"tr",align:null},"LCD raw 1 text  - must be terminated with NULL char"),(0,l.kt)("td",{parentName:"tr",align:null},"216"),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MenuLine2","[24]",";"),(0,l.kt)("td",{parentName:"tr",align:null},"LCD raw 2 text  - must be terminated with NULL char"),(0,l.kt)("td",{parentName:"tr",align:null},"228"),(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_DO16;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x000"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_RL16;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x080"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_AQ2;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x180"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_DI16;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x200"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_AI2;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x280"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_RTD2;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x300"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_DI8DQ8;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x380"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_AI4AQ4;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x400"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_DI8;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x480"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_DQ8;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x500"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_AI4;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x580"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_AQ4;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x600"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_T8;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x680"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_LC2;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x700"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_T4;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"16000 + 0x780"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_STATUS_TMO;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"19000"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_STATUS_TX;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"19002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E_MODCAN_STATUS_RX;"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"19004"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);