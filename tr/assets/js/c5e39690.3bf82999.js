"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7941],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8414:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],l={title:"Format File System"},c=void 0,m={unversionedId:"Mikrodiagram-Format-File-System",id:"Mikrodiagram-Format-File-System",title:"Format File System",description:"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mikrodiagram-Format-File-System.md",sourceDirName:".",slug:"/Mikrodiagram-Format-File-System",permalink:"/tr/docs/Mikrodiagram-Format-File-System",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-Format-File-System.md",tags:[],version:"current",frontMatter:{title:"Format File System"},sidebar:"Documents",previous:{title:"Device Error Codes",permalink:"/tr/docs/Mikrodiagram-DeviceErrorCodes"},next:{title:"Updating Firmware",permalink:"/tr/docs/Mikrodiagram-Updating-Firmware"}},s={},p=[],u={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before starting, make sure that all USB connections to device are closed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Power OFF the device, disconnect the DC supply connection."))),(0,i.kt)("center",null,(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/disconnect.gif",alt:null}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connect the USB cable between the computer and the device.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Power ON device\xa0, connect the DC supply."))),(0,i.kt)("center",null,(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/connect.gif",alt:null}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.')),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"mikrodiagram-formatfilesystem-01",src:r(46715).Z,width:"416",height:"532"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'After the device starts in boot mode, write "AT+FORMATFS=1" into the "Send Command" box  and click "SEND" button. In this stage, the system light on the device will flash rapidly and the error light will be steady. After the process is finished, the system led will start to flash normally again. The format procedure will take about 2-3 minutes. Do not power off the device during the format process. The device will reset several times and it will disconnect the USB connection.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'You can check whether the format process has finished or not by checking the boot version of the device. To check the boot version connect USB port and then write "AT+VERSION=?" into the "Send Command" box  and click "SEND" button. If you can see the boot version on the console after this command, it means that you are ready to load the firmware on the device.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go to Step 7 on ",(0,i.kt)("a",{parentName:"p",href:"Mikrodiagram-Updating-Firmware"},"Loading Firmware")," page and continue loading firmware. Since the device is formatted, initial boot time will take significantly longer compared to standard firmware loading process."))),(0,i.kt)("p",null,"Download Serial Loader application from the link below :"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip"},"MikrodevSerialLoader")))}d.isMDXComponent=!0},46715:function(e,t,r){t.Z=r.p+"assets/images/mikrodiagram-formatfilesystem-01-371142ce25cdc2327ee063d9c934a4b5.png"}}]);