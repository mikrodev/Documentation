(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(119)),c={title:"Factory Settings"},i={unversionedId:"Mikrodiagram-Factory-Settings",id:"Mikrodiagram-Factory-Settings",isDocsHomePage:!1,title:"Factory Settings",description:"You can do factory settings of Mikrodev PLC, RTU and Gateway product families via USB connection.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mikrodiagram-Factory-Settings.md",slug:"/Mikrodiagram-Factory-Settings",permalink:"/tr/docs/Mikrodiagram-Factory-Settings",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Mikrodiagram-Factory-Settings.md",version:"current",sidebar:"Documents",previous:{title:"Updating Firmware",permalink:"/tr/docs/Mikrodiagram-Updating-Firmware"},next:{title:"Example Projects",permalink:"/tr/docs/Mikrodiagram-Example-Projects"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"You can do factory settings of Mikrodev PLC, RTU and Gateway product families via USB connection. "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Before starting, make sure that all USB connections to the device are closed. ")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Power OFF device, disconnect the DC supply connection. "))),Object(o.a)("center",null,Object(o.a)("p",null,Object(o.a)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/disconnect.gif",alt:null}))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Connect the USB cable between the computer and the device. ")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Power ON device, connect the DC supply.  "))),Object(o.a)("center",null,Object(o.a)("p",null,Object(o.a)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/connect.gif",alt:null}))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},'Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.')),Object(o.a)("center",null,Object(o.a)("p",null,Object(o.a)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/Default_1.png",alt:null}))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},'After the device starts in boot mode, write "AT+DEFAULT=1" into the "Send Command" box and click "SEND" button. ')),Object(o.a)("center",null,Object(o.a)("p",null,Object(o.a)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/Default_2.png",alt:null}))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},'After write "AT+DEFAULT=1" into the "Send Command", write "AT+RESET=1" into the "Send Command" box and click "SEND" button.')),Object(o.a)("center",null,Object(o.a)("p",null,Object(o.a)("img",{parentName:"p",src:"http://www.mikrodev.com/images/wiki/en/Default_3.png",alt:null}))))}p.isMDXComponent=!0}}]);