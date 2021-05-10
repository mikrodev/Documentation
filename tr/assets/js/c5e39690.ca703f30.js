(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(119)),i={title:"Format File System"},c={unversionedId:"Mikrodiagram-Format-File-System",id:"Mikrodiagram-Format-File-System",isDocsHomePage:!1,title:"Format File System",description:"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mikrodiagram-Format-File-System.md",slug:"/Mikrodiagram-Format-File-System",permalink:"/tr/docs/Mikrodiagram-Format-File-System",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-Format-File-System.md",version:"current",sidebar:"Documents",previous:{title:"Device Error Codes",permalink:"/tr/docs/Mikrodiagram-DeviceErrorCodes"},next:{title:"Updating Firmware",permalink:"/tr/docs/Mikrodiagram-Updating-Firmware"}},l=[],m={toc:l};function s(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"You can  format the filesystem of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connecition."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Before starting, make sure that all USB connections to device are closed.")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Power OFF the device, disconnect the DC supply connection."))),Object(o.a)("center",null,Object(o.a)("p",null," ",Object(o.a)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/disconnect.gif",alt:null}))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Connect the USB cable between the computer and the device.")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Power ON device\xa0, connect the DC supply."))),Object(o.a)("center",null,Object(o.a)("p",null," ",Object(o.a)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/connect.gif",alt:null}))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},'Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.')),Object(o.a)("center",null,Object(o.a)("p",null,Object(o.a)("img",{alt:"mikrodiagram-formatfilesystem-01",src:r(473).default}))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},'After the device starts in boot mode, write "AT+FORMATFS=1" into the "Send Command" box  and click "SEND" button. In this stage, the system light on the device will flash rapidly and the error light will be steady. After the process is finished, the system led will start to flash normally again. The format procedure will take about 2-3 minutes. Do not power off the device during the format process. The device will reset several times and it will disconnect the USB connection.')),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},'You can check whether the format process has finished or not by checking the boot version of the device. To check the boot version connect USB port and then write "AT+VERSION=?" into the "Send Command" box  and click "SEND" button. If you can see the boot version on the console after this command, it means that you are ready to load the firmware on the device.')),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Go to Step 7 on ",Object(o.a)("a",{parentName:"p",href:"Mikrodiagram-Updating-Firmware"},"Loading Firmware")," page and continue loading firmware. Since the device is formatted, initial boot time will take significantly longer compared to standard firmware loading process."))),Object(o.a)("p",null,"Download Serial Loader application from the link below :"),Object(o.a)("p",null,Object(o.a)("a",{parentName:"p",href:"https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip"},"MikrodevSerialLoader")))}s.isMDXComponent=!0},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=n.a.createContext({}),s=function(e){var t=n.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return r?n.a.createElement(f,c(c({ref:t},m),{},{components:r})):n.a.createElement(f,c({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},473:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mikrodiagram-formatfilesystem-01-371142ce25cdc2327ee063d9c934a4b5.png"}}]);