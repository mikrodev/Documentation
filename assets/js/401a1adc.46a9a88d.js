"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"SNMP Application Notes"},l=void 0,i={unversionedId:"SNMP-Application-Notes",id:"SNMP-Application-Notes",title:"SNMP Application Notes",description:"SNMP PROTOCOL",source:"@site/docs/SNMP-Application-Notes.md",sourceDirName:".",slug:"/SNMP-Application-Notes",permalink:"/docs/SNMP-Application-Notes",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/SNMP-Application-Notes.md",tags:[],version:"current",frontMatter:{title:"SNMP Application Notes"},sidebar:"Documents",previous:{title:"MODBUS Application Notes",permalink:"/docs/MODBUS-Application-Notes"},next:{title:"DNP3 SLAVE Application Notes",permalink:"/docs/DNP3-Application-Notes"}},s={},p=[{value:"SNMP PROTOCOL",id:"snmp-protocol",level:2},{value:"General Information",id:"general-information",level:3},{value:"Block Definitions",id:"block-definitions",level:3},{value:"SNMP Agent Block",id:"snmp-agent-block",level:4},{value:"SNMP Trap Block",id:"snmp-trap-block",level:4},{value:"OID CALCULATION and EXAMPLE",id:"oid-calculation-and-example",level:2},{value:"OID Calculation",id:"oid-calculation",level:3},{value:"Example Application",id:"example-application",level:3},{value:"SNMP Trap Application",id:"snmp-trap-application",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"snmp-protocol"},"SNMP PROTOCOL"),(0,r.kt)("h3",{id:"general-information"},"General Information"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_01",src:n(87198).Z,width:"617",height:"328"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 1: SNMP Protocol"))))),(0,r.kt)("p",null,"This technology, called Simple Network Management Protocol, is designed to control units on computer networks as they grow. Various information from the temperature on the device to the users connected to the device, from the internet connection speed to the system operating time are kept in the tree structure defined in SNMP."),(0,r.kt)("p",null,"The components that make up SNMP are;"),(0,r.kt)("p",null,"\u2022\tAgent application: The name given to the application that runs the SNMP service on the device and saves the necessary information and transfers it to the administrator unit or applies the change from the administrator unit to the device."),(0,r.kt)("p",null,"\u2022\tAdmin application: The application that receives the information needed from the agent application and displays it to the user and sends the values that the user wants to change to the device."),(0,r.kt)("p",null,"\u2022\tNetwork Management System (NMS): It is the name given to the application that runs in the administrative unit and provides monitoring and management of all devices connected to a network."),(0,r.kt)("p",null,"Mikrodev products work as SNMP Agent application."),(0,r.kt)("p",null,"SNMP Management Information Units (MIBs): MIBs are collections of information stored in a hierarchical structure. To reach the value of a particular variable in SNMP, the relevant unit of this universally determined collection is used. For example, for the device description assigned by the manufacturer of a device, it is necessary to access the information in the 1.3.6.1.2.1.2 unit."),(0,r.kt)("h3",{id:"block-definitions"},"Block Definitions"),(0,r.kt)("h4",{id:"snmp-agent-block"},"SNMP Agent Block"),(0,r.kt)("p",null,"The SNMP Agent block is added to the project to be able to define the device as an agent."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_02",src:n(90738).Z,width:"128",height:"99"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 2: SNMP Agent Block"))))),(0,r.kt)("p",null,"Pin definitions;"),(0,r.kt)("p",null,"  \u2022\tLis: Listen port"),(0,r.kt)("p",null,"  \u2022\tSNAg0: Block output"),(0,r.kt)("p",null,"  \u2022 Err: Error Output  "),(0,r.kt)("p",null,"Block custom settings;"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_03",src:n(93581).Z,width:"268",height:"319"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 3: SNMP Agent Block Custom Settings"))))),(0,r.kt)("p",null,"Definitions;"),(0,r.kt)("p",null,"\u2022\tUDP Listen Port: Number of listen port, SNMP default is 161."),(0,r.kt)("p",null,"\u2022\tRead Community, Write Community: It works like username and password. Should be same on the manager."),(0,r.kt)("h4",{id:"snmp-trap-block"},"SNMP Trap Block"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_04",src:n(49721).Z,width:"364",height:"112"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 4: SNMP Trap Block"))))),(0,r.kt)("p",null,"The SNMP Trap block is used to send data in certain exchange values from the device to the manager. As in the figure, it sends the value of the register connected to its input to the manager according to the conditions in its special settings."),(0,r.kt)("p",null,"Block custom settings;"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_05",src:n(17911).Z,width:"251",height:"326"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 5: SNMP Trap Block Custom Settings"))))),(0,r.kt)("p",null,"Definitions;"),(0,r.kt)("p",null,"\u2022\tSNMP Manager IP Address: The manager\u2019s IP address."),(0,r.kt)("p",null,"\u2022\tSNMP Manager Port: Port number of manager"),(0,r.kt)("p",null,"\u2022\tAlarm Control: Conditions of send data;"),(0,r.kt)("p",null,"   o\tGreater Than: If the input value is greater than the threshold value, data is sent."),(0,r.kt)("p",null,"   o\tSmaller Than: If the input value is smaller than the threshold value, data is sent."),(0,r.kt)("p",null,"   o\tLevel Change: If the input value changes by the threshold value, data is sent."),(0,r.kt)("p",null,"   o\tPercent Change: If the input value changes by the %threshold, data is sent."),(0,r.kt)("p",null,"\u2022   Threshold Value: Input threshold value."),(0,r.kt)("h2",{id:"oid-calculation-and-example"},"OID CALCULATION and EXAMPLE"),(0,r.kt)("h3",{id:"oid-calculation"},"OID Calculation"),(0,r.kt)("p",null,"The query to be sent to the agent device by the manager in the SNMP protocol should be in the following structure;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                    .1.3.6.1.2.1.BlockType.BlockNumber \n")),(0,r.kt)("p",null,"The block type can be the following values;\n\u2022\t1: Bool\n\u2022\t2: Word\n\u2022\t3: Float\n\u2022\t4: Long"),(0,r.kt)("p",null,"The block number should not be written as in the Microdiagram, but should be converted to the following format;"),(0,r.kt)("p",null,"Block No: 3004 >> 30*100+4 = 30.4 "),(0,r.kt)("p",null,"Block No: 3000 >> 30*100+0 = 30.0"),(0,r.kt)("p",null,"Block No: 6000 >> 60*100+0 = 60.0"),(0,r.kt)("h3",{id:"example-application"},"Example Application"),(0,r.kt)("p",null,"An SNMP Agent block and word, binary, long, analog registers are added to the project as in the Figure."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_06",src:n(89761).Z,width:"448",height:"506"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 6: SNMP Example Application"))))),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_07",src:n(51175).Z,width:"286",height:"344"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 7: SNMP Example Application Settings"))))),(0,r.kt)("p",null,"In Figure 6, the OID query that the manager will send to get the values of the registers in the project should be as follows;"),(0,r.kt)("p",null,"Binary register with Block Number 2: .1.3.6.1.2.1.1.0.2 "),(0,r.kt)("p",null,"Word register with Block Number 3000: .1.3.6.1.2.1.2.30.0"),(0,r.kt)("p",null,"Analog register with Block Number 5000: .1.3.6.1.2.1.3.50.0"),(0,r.kt)("p",null,"Long register with Block Number 6000: .1.3.6.1.2.1.4.60.0"),(0,r.kt)("p",null,"MIB Browser program can be used as manager. After the IP and port settings are made, if the above queries are sent from the OID section, the values of the registers will appear as in the Figure."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_08",src:n(80103).Z,width:"748",height:"407"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 8: MIB Browser SNMP Application"))))),(0,r.kt)("h4",{id:"snmp-trap-application"},"SNMP Trap Application"),(0,r.kt)("p",null,"The way the agent sends data to the manager without sending a query is the Trap method. In this method, the register connected to the input of the Trap block is sent according to the conditions in the Trap block."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_09",src:n(56180).Z,width:"368",height:"117"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 9: SNMP Trap Application"))))),(0,r.kt)("p",null,"Trap settings are entered as follows."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_10",src:n(56214).Z,width:"253",height:"322"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 10: SNMP Trap Block Custom Settings"))))),(0,r.kt)("p",null,"MIB Browser Trap settings are also made as follows."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_11",src:n(88438).Z,width:"672",height:"107"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 11: MIB Browser Trap Receiver Settings"))))),(0,r.kt)("p",null,"If the register value at the input of the trap block is changed and the condition specified in the block settings is met, it will appear on the trap receiver as follows."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp_12",src:n(68908).Z,width:"672",height:"488"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 12: MIB Browser Trap Receiver"))))))}d.isMDXComponent=!0},87198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_01-a9194a3a081b755093345c1eeab8b436.png"},90738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_02-a8beab2845278ba8628b4432ac552fa6.png"},93581:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_03-d51d5fe514bcdffcde35ad94abf5727e.png"},49721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_04-d95b4cbf52dfda35589f9b49dd7739b5.png"},17911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_05-4103d3ba8b05f4a3b719bc00eaaeae16.png"},89761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_06-632887536f38f23285ec74b582915461.png"},51175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_07-c094ce817a571d628401f5aaf971cb79.png"},80103:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_08-cd05552befa493e906389adbb775c2a8.png"},56180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_09-e0390e94fe67e5ac4da27f75166ec888.png"},56214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_10-7baa8298fdb282a8c96ae45cfdda2c3b.png"},88438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_11-c4658c484f655204bc50fdd935a5c2fa.png"},68908:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snmp_12-cb227ba716280d5736d231486db4d6ee.png"}}]);