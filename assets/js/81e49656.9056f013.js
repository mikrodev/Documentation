"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6008],{16012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var i=n(83117),o=(n(67294),n(3905));const a={title:"SC100 Software Manual"},r=void 0,s={unversionedId:"Gateway-SC100-Software-Manual",id:"Gateway-SC100-Software-Manual",title:"SC100 Software Manual",description:"SERIAL GATEWAY CONFIGURATION SOFTWARE",source:"@site/docs/Gateway-SC100-Software-Manual.md",sourceDirName:".",slug:"/Gateway-SC100-Software-Manual",permalink:"/docs/Gateway-SC100-Software-Manual",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Gateway-SC100-Software-Manual.md",tags:[],version:"current",frontMatter:{title:"SC100 Software Manual"},sidebar:"Documents",previous:{title:"MDC100 Software Manual",permalink:"/docs/Gateway-MDC100-Software-Manual"},next:{title:"MQTT Application Notes",permalink:"/docs/MQTT-Application-Notes"}},c={},l=[{value:"SERIAL GATEWAY CONFIGURATION SOFTWARE",id:"serial-gateway-configuration-software",level:2},{value:"General Information",id:"general-information",level:3},{value:"Device Connection",id:"device-connection",level:3},{value:"USB Serial Connection",id:"usb-serial-connection",level:4},{value:"TCP Connection \u2013 Device Discovery Mode",id:"tcp-connection--device-discovery-mode",level:4},{value:"TCP Connection \u2013 Manual",id:"tcp-connection--manual",level:4},{value:"Offline Settings",id:"offline-settings",level:3},{value:"SERIAL GATEWAY Settings",id:"serial-gateway-settings",level:2},{value:"Status Screen",id:"status-screen",level:3},{value:"Basic Settings",id:"basic-settings",level:3},{value:"Serial Gateway Settings",id:"serial-gateway-settings-1",level:3},{value:"Loading Settings to Device",id:"loading-settings-to-device",level:3},{value:"Terminal",id:"terminal",level:3}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"serial-gateway-configuration-software"},"SERIAL GATEWAY CONFIGURATION SOFTWARE"),(0,o.kt)("h3",{id:"general-information"},"General Information"),(0,o.kt)("p",null,"The Assistant software is used to make all necessary settings for the Mikrodev Gateway devices. Thanks to the software, device settings can be made online and/or offline. The settings that are loaded on the device can easily be downloaded and the previously saved settings can easilly be uploaded into the device by the program.\nThe connection between the program and the device can be established in various ways such as USB, Ethernet, GSM, Wi-Fi. For Ethernet supported devices; there is also the ability to search the network and list details with connection information."),(0,o.kt)("h3",{id:"device-connection"},"Device Connection"),(0,o.kt)("h4",{id:"usb-serial-connection"},"USB Serial Connection"),(0,o.kt)("p",null,'One of the methods for establishing communication between PC and Mikrodev device in device configuration is USB serial connection. In order to perform USB connection between PC and device, you need to install USB driver for PCs with Windows 7/8 / 8.1 operating systems. There is no need to install the USB driver for Windows 10 operating systems. For serial connection over USB, \u201cConnect over USB" box in the Connect and Configure Your Device section of the Assistant software is selected. In the USB Port Selection section, you should select the port and click "Connect". USB connection will be established after that. (Figure 1)\n.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_01",src:n(38212).Z,width:"1105",height:"458"}))),(0,o.kt)("h4",{id:"tcp-connection--device-discovery-mode"},"TCP Connection \u2013 Device Discovery Mode"),(0,o.kt)("p",null,'"Network Discovery" option is used to detect and connect IP addresses of Mikrodev devices which are active in the local network. The "Network Discovery " box will be highlighted after the "Connect via TCP" box is checked in the Connect and Configure to Device section of the Assistant software. After clicking "Scan Network for Mikrodev Devices", the serial number, IP address, listening port and software versions of all Mikrodev devices which are active in the network are listed on the screen. (Fig. 2) You can connect the device on the list by double clicking on the device name on the screen.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_02",src:n(95436).Z,width:"1082",height:"654"}))),(0,o.kt)("h4",{id:"tcp-connection--manual"},"TCP Connection \u2013 Manual"),(0,o.kt)("p",null,'When manually entering the ip address and port number of the device that is active in the local network, "Manual" option is used. The "Manual" box is checked after the "Connect over TCP" checkbox is checked in the Connect and Configure Device section from the Assistant software. The IP address of the device to be connected is entered into the "Device IP" section, the port number is entered into the "Port" section and "Connect" is clicked. (Figure 3) Assistan software connects to the Mikrodev device with specified ip address and port number.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_03",src:n(68493).Z,width:"1109",height:"588"}))),(0,o.kt)("h3",{id:"offline-settings"},"Offline Settings"),(0,o.kt)("p",null,'Offline mode is used when parameter settings are made and saved without connecting to the device. Click on "Click here for offline configuration" on the Assistant main screen when you want to make the offline parameter settings. The device is selected in the screen that appears, and then "Select this device" is clicked. (Fig. 4) Offline parameter settings of the selected device can be made. In addition, using the "Load from configuration file" option on the same page, previously saved configuration values can also be loaded to the program.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_04",src:n(47074).Z,width:"1118",height:"641"}))),(0,o.kt)("h2",{id:"serial-gateway-settings"},"SERIAL GATEWAY Settings"),(0,o.kt)("h3",{id:"status-screen"},"Status Screen"),(0,o.kt)("p",null,"It is the status information screen which shows related information to the connected Mikrodev device. This screen contains the device's manufacturing information, Ip settings and serial connection settings (RS-485, RS-232). (Fig. 5) You can access the web interface of the device from this screen as well. "),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_05",src:n(29879).Z,width:"899",height:"447"}))),(0,o.kt)("h3",{id:"basic-settings"},"Basic Settings"),(0,o.kt)("p",null,'In the basic settings section, parameter set values are entered according to communication types. For Ethernet connection enter the local ip, gateway ip, subnet and for GSM connection enter the APN, user name, user password. SSID (Modem user name) and password are entered when wifi connection is requested. In addition; the password definition for access control to the Mikrodev device is performed on this page. In addition, device connection follow-up duration, auto reset duration, and configuration port can be entered. You can send ID after connection by checking the "Send ID after connection" checkbox. (Figure 6)'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_06",src:n(44109).Z,width:"965",height:"491"}))),(0,o.kt)("h3",{id:"serial-gateway-settings-1"},"Serial Gateway Settings"),(0,o.kt)("p",null,"The device has 2 separate routes for RS232 - Ethernet and RS485 - ethernet connections. In route 1, RS232 - Ethernet settings are made and in route 2, rs485 - Ethernet connection settings are made."),(0,o.kt)("p",null,"On the TCP socket settings side, the TCP socket server is selected, the port is defined. The defined port should not be the same for RS232 and RS485, it should be different. In the IP filter section, you can define the TCP client IP that you want to connect to the device. Only the IP address can be connected to the device. If you do not want to filter, this section should be 0.0.0.0 as shown in the figure (Figure 7). Buffer settings are set here. The buffer size is used to define the packet size to be sent, and the buffer timeout, if the incoming data does not reach the specified buffer size, the time to wait for sending."),(0,o.kt)("p",null,"In the Serial Settings section, baud rate, parity, stop bit and databit settings are made for RS232 and RS485. these settings must be made in accordance with the serial device to be connected to the Mikrodev device.\t"),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_07",src:n(71538).Z,width:"965",height:"505"}))),(0,o.kt)("h3",{id:"loading-settings-to-device"},"Loading Settings to Device"),(0,o.kt)("p",null,'Click "Device Management" on the Assistant software to send the configuration settings to the device. Then click "Send Configuration" option. (Figure 8)'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_08",src:n(92702).Z,width:"958",height:"492"}))),(0,o.kt)("p",null,"After completing the configuration, the device must be rebooted in order to register the settings. (Figure 9)"),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_09",src:n(52154).Z,width:"945",height:"511"}))),(0,o.kt)("p",null,'Restart the device by clicking "Restart Device" under "Device Management" on the main screen of the Assistant program. When the device is rebooted, you may need to remove and reinsert the USB cable to reconnect with the serial port. (Figure 10)'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_10",src:n(60940).Z,width:"970",height:"518"}))),(0,o.kt)("p",null,"The TCP connection between the device and the PC will be established automatically after the device is rebooted, after waiting approximately 20 seconds to reconnect to the device through the TCP connection. (Figure 11)"),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_11",src:n(19508).Z,width:"958",height:"503"}))),(0,o.kt)("h3",{id:"terminal"},"Terminal"),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sc100_12",src:n(59901).Z,width:"951",height:"507"}))))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),f=o,g=h["".concat(c,".").concat(f)]||h[f]||u[f]||a;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38212:function(e,t,n){t.Z=n.p+"assets/images/sc100_01-0372cdc8bb3deed1d5b908134d792a1b.png"},95436:function(e,t,n){t.Z=n.p+"assets/images/sc100_02-61a4204d8d4b0c02c74a800ae4ffd9d8.png"},68493:function(e,t,n){t.Z=n.p+"assets/images/sc100_03-ef77932127e3430fe8aa8762f2b26ba5.png"},47074:function(e,t,n){t.Z=n.p+"assets/images/sc100_04-bf515c6244f47ddb229c238c4ec4782d.png"},29879:function(e,t,n){t.Z=n.p+"assets/images/sc100_05-0c825c0fdc596010d82ea86e6d12b17d.png"},44109:function(e,t,n){t.Z=n.p+"assets/images/sc100_06-a61998eaa024078160301ce6e988f2c2.png"},71538:function(e,t,n){t.Z=n.p+"assets/images/sc100_07-2367943bedea4f35bbe69dc163909c43.png"},92702:function(e,t,n){t.Z=n.p+"assets/images/sc100_08-9a251026d072c6edb0d669925de6d009.png"},52154:function(e,t,n){t.Z=n.p+"assets/images/sc100_09-00f90cda89bfe358cda707c099a1dfcc.png"},60940:function(e,t,n){t.Z=n.p+"assets/images/sc100_10-1d299d4f3a8a0e94d3064697f9cc9337.png"},19508:function(e,t,n){t.Z=n.p+"assets/images/sc100_11-67a634ab457f9a9ea9a5860cb98adcbd.png"},59901:function(e,t,n){t.Z=n.p+"assets/images/sc100_12-70e11fd482a146eac3d98f53a7fd328d.png"}}]);