"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={title:"Format File System"},i=void 0,l={unversionedId:"Mikrodiagram-Format-File-System",id:"Mikrodiagram-Format-File-System",title:"Format File System",description:"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition.",source:"@site/docs/Mikrodiagram-Format-File-System.md",sourceDirName:".",slug:"/Mikrodiagram-Format-File-System",permalink:"/docs/Mikrodiagram-Format-File-System",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-Format-File-System.md",tags:[],version:"current",frontMatter:{title:"Format File System"},sidebar:"Documents",previous:{title:"Mikrodiagram-DeviceErrorCodes",permalink:"/docs/Mikrodiagram-DeviceErrorCodes"},next:{title:"Updating Firmware",permalink:"/docs/Mikrodiagram-Updating-Firmware"}},c={},m=[],s={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Before starting, make sure that all USB connections to device are closed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Power OFF the device, disconnect the DC supply connection."))),(0,o.kt)("center",null,(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/disconnect.gif",alt:null}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connect the USB cable between the computer and the device.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Power ON device\xa0, connect the DC supply."))),(0,o.kt)("center",null,(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/connect.gif",alt:null}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.')),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mikrodiagram-formatfilesystem-01",src:r(95006).Z,width:"416",height:"532"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'After the device starts in boot mode, write "AT+FORMATFS=1" into the "Send Command" box  and click "SEND" button. In this stage, the system light on the device will flash rapidly and the error light will be steady. After the process is finished, the system led will start to flash normally again. The format procedure will take about 2-3 minutes. Do not power off the device during the format process. The device will reset several times and it will disconnect the USB connection.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'You can check whether the format process has finished or not by checking the boot version of the device. To check the boot version connect USB port and then write "AT+VERSION=?" into the "Send Command" box  and click "SEND" button. If you can see the boot version on the console after this command, it means that you are ready to load the firmware on the device.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to Step 7 on ",(0,o.kt)("a",{parentName:"p",href:"Mikrodiagram-Updating-Firmware"},"Loading Firmware")," page and continue loading firmware. Since the device is formatted, initial boot time will take significantly longer compared to standard firmware loading process."))),(0,o.kt)("p",null,"Download Serial Loader application from the link below :"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip"},"MikrodevSerialLoader")))}p.isMDXComponent=!0},95006:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mikrodiagram-formatfilesystem-01-371142ce25cdc2327ee063d9c934a4b5.png"}}]);