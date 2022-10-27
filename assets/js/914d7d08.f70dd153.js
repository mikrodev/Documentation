"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8154],{35889:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return d}});var i=n(83117),o=(n(67294),n(3905));const a={title:"MDC100 Software Manual"},c=void 0,r={unversionedId:"Gateway-MDC100-Software-Manual",id:"Gateway-MDC100-Software-Manual",title:"MDC100 Software Manual",description:"MODC Gateway Configuration Software",source:"@site/docs/Gateway-MDC100-Software-Manual.md",sourceDirName:".",slug:"/Gateway-MDC100-Software-Manual",permalink:"/docs/Gateway-MDC100-Software-Manual",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Gateway-MDC100-Software-Manual.md",tags:[],version:"current",frontMatter:{title:"MDC100 Software Manual"},sidebar:"Documents",previous:{title:"MMS100 Software Manual",permalink:"/docs/Gateway-MMS100-Software-Manual"},next:{title:"SC100 Software Manual",permalink:"/docs/Gateway-SC100-Software-Manual"}},s={},d=[{value:"MODC Gateway Configuration Software",id:"modc-gateway-configuration-software",level:2},{value:"General Information",id:"general-information",level:3},{value:"Device Connection",id:"device-connection",level:3},{value:"USB Serial Connection",id:"usb-serial-connection",level:4},{value:"TCP Connection \u2013 Device Discovery Mode",id:"tcp-connection--device-discovery-mode",level:4},{value:"TCP Connection \u2013 Manual",id:"tcp-connection--manual",level:4},{value:"Offline Settings",id:"offline-settings",level:3},{value:"MODC Gateway Settings",id:"modc-gateway-settings",level:2},{value:"Status Screen",id:"status-screen",level:3},{value:"Basic Settings",id:"basic-settings",level:3},{value:"MODC General Settings",id:"modc-general-settings",level:3},{value:"Loading Settings to Device",id:"loading-settings-to-device",level:3},{value:"MODC Gateway Parameter Settings",id:"modc-gateway-parameter-settings",level:2},{value:"Adding Meters",id:"adding-meters",level:3},{value:"Adding OBIS Codes",id:"adding-obis-codes",level:3},{value:"Adding OBIS Codes with Special Commands",id:"adding-obis-codes-with-special-commands",level:3},{value:"MODBUS Adress Table",id:"modbus-adress-table",level:3},{value:"Terminal",id:"terminal",level:3}],l={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"modc-gateway-configuration-software"},"MODC Gateway Configuration Software"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mikrodev.com/en/docs/DlmsModbusGateway/software_manual/MIKRODEV_SM_MDC100_EN.pdf"},"MDC100 Software Manual")),(0,o.kt)("h3",{id:"general-information"},"General Information"),(0,o.kt)("p",null,"The Assistant software is used to make all necessary settings for the Mikrodev Gateway\ndevices. Thanks to the software, device settings can be made online and/or offline. The\nsettings that are loaded on the device can easily be downloaded and the previously saved\nsettings can easilly be uploaded into the device by the program.\nThe connection between the program and the device can be established in various ways\nsuch as USB, Ethernet, GSM, Wi-Fi. For Ethernet supported devices; there is also the ability\nto search the network and list details with connection information."),(0,o.kt)("h3",{id:"device-connection"},"Device Connection"),(0,o.kt)("h4",{id:"usb-serial-connection"},"USB Serial Connection"),(0,o.kt)("p",null,'One of the methods for establishing communication between PC and Mikrodev device in\ndevice configuration is USB serial connection. In order to perform USB connection\nbetween PC and device, you need to install USB driver for PCs with Windows 7/8 / 8.1\noperating systems. There is no need to install the USB driver for Windows 10 operating\nsystems. For serial connection over USB, \u201cConnect over USB" box in the Connect and\nConfigure Your Device section of the Assistant software is selected. In the USB Port\nSelection section, you should select the port and click "Connect". USB connection will be\nestablished after that.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-01",src:n(66833).Z,width:"1124",height:"634"}),"  ")),(0,o.kt)("h4",{id:"tcp-connection--device-discovery-mode"},"TCP Connection \u2013 Device Discovery Mode"),(0,o.kt)("p",null,'"Network Discovery" option is used to detect and connect IP addresses of Mikrodev\ndevices which are active in the local network. The "Network Discovery " box will be\nhighlighted after the "Connect via TCP" box is checked in the Connect and Configure to\nDevice section of the Assistant software. After clicking "Scan Network for Mikrodev\nDevices", the serial number, IP address, listening port and software versions of all Mikrodev devices which are active in the network are listed on the screen. You\ncan connect the device on the list by double clicking on the device name on the screen.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-02",src:n(57743).Z,width:"1166",height:"706"})," ")),(0,o.kt)("h4",{id:"tcp-connection--manual"},"TCP Connection \u2013 Manual"),(0,o.kt)("p",null,'When manually entering the ip address and port number of the device that is active in\nthe local network, "Manual" option is used. The "Manual" box is checked after the\n"Connect over TCP" checkbox is checked in the Connect and Configure Device section\nfrom the Assistant software. The IP address of the device to be connected is entered into\nthe "Device IP" section, the port number is entered into the "Port" section and "Connect"\nis clicked. Assistant software connects to the Mikrodev device with specified ip\naddress and port number.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-03",src:n(47690).Z,width:"1160",height:"689"}))),(0,o.kt)("h3",{id:"offline-settings"},"Offline Settings"),(0,o.kt)("p",null,'Offline mode is used when parameter settings are made and saved without connecting to\nthe device. Click on "Click here for offline configuration" on the Assistant main screen\nwhen you want to make the offline parameter settings. The device is selected in the\nscreen that appears, and then "Select this device" is clicked. Offline parameter\nsettings of the selected device can be made. In addition, using the "Load from\nconfiguration file" option on the same page, previously saved configuration values can\nalso be loaded to the program.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-04",src:n(66478).Z,width:"1159",height:"697"}))),(0,o.kt)("h2",{id:"modc-gateway-settings"},"MODC Gateway Settings"),(0,o.kt)("h3",{id:"status-screen"},"Status Screen"),(0,o.kt)("p",null,'It is the status information screen which shows related information to the connected\nMikrodev device. This screen contains the device\'s manufacturing information, Ip settings\nand serial connection settings (RS-485, RS-232). You can access the web\ninterface of the device from this screen as well. Select "Click here to access the web\ninterface of the device" to access the web interface.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-05",src:n(18225).Z,width:"1163",height:"701"}))),(0,o.kt)("h3",{id:"basic-settings"},"Basic Settings"),(0,o.kt)("p",null,'In the basic settings section, parameter set values are entered according to\ncommunication types. For Ethernet connection enter the local ip, gateway ip, subnet and\nfor GSM connection enter the APN, user name, user password. SSID (Modem user name)\nand password are entered when wifi connection is requested. In addition; the password\ndefinition for access control to the Mikrodev device is performed on this page. In\naddition, device connection follow-up duration, auto reset duration, and configuration\nport can be entered. You can send ID after connection by checking the "Send ID after\nconnection" checkbox. '),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-06",src:n(24151).Z,width:"1164",height:"693"}))),(0,o.kt)("h3",{id:"modc-general-settings"},"MODC General Settings"),(0,o.kt)("p",null,"In the ModC General Settings section, the Modbus communication settings of the Mikrodev\ndevice are made. In case of connection via Modbus TCP, server or client selection of the\nconnection type is made and port settings are defined. And also, Modbus Slave ID settings\nare defined."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-07",src:n(16760).Z,width:"1231",height:"778"})," ")),(0,o.kt)("h3",{id:"loading-settings-to-device"},"Loading Settings to Device"),(0,o.kt)("p",null,'Click "Device Management" on the Assistant software to send the configuration settings\nto the device. Then click "Send Configuration" option.'),(0,o.kt)("p",null,"After completing the configuration, the device must be rebooted in order to register the\nsettings."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-08",src:n(98673).Z,width:"1173",height:"659"})," ")),(0,o.kt)("p",null,'Restart the device by clicking "Restart Device" under "Device Management" on the main\nscreen of the Assistant program. When the device is rebooted, you may need to remove\nand reinsert the USB cable to reconnect with the serial port. '),(0,o.kt)("p",null,"The TCP connection between the device and the PC will be established automatically after\nthe device is rebooted, after waiting approximately 20 seconds to reconnect to the device\nthrough the TCP connection."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-09",src:n(6859).Z,width:"1170",height:"840"})," ")),(0,o.kt)("h2",{id:"modc-gateway-parameter-settings"},"MODC Gateway Parameter Settings"),(0,o.kt)("h3",{id:"adding-meters"},"Adding Meters"),(0,o.kt)("p",null,"MODC Gateway support addressing mode or non-adressing boardcasting mode. If you want\nto read meter without addressing, you should give 0 into Meter Serial No. if not you should\ngive serial number for addressing."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-10",src:n(38349).Z,width:"638",height:"566"}))),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-11",src:n(90059).Z,width:"668",height:"216"}))),(0,o.kt)("p",null,"Port terminal places might difference according to pcb version of device. To do right\nconfiguration connect over USB to device and check version with AT commands. Response from device should be like below."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-17",src:n(87233).Z,width:"812",height:"155"}))),(0,o.kt)("p",null,"\u2022 If pcb version is p55 ;\no Port 1 -> RS 232 (ROUTE 1)\no Port 2 -> RS 485 (ROUTE 2)"),(0,o.kt)("p",null,"\u2022 If pcb version is p66 ;\no Port 1 -> RS 485 (ROUTE 1)\no Port 2 -> RS 232 (ROUTE 2)"),(0,o.kt)("h3",{id:"adding-obis-codes"},"Adding OBIS Codes"),(0,o.kt)("p",null,'To define the OBIS codes to be read out from the electricity meters, first click on the meter\nfrom the list of defined meters. Then click "Add OBIS Code to Selected Meter " on the Modc\nSettings page. The OBIS value to be read is entered in the "OBIS Name" section in the\nopened page. (Eg 0.0.0, 1.8.0, ...) In the "Code 1 Type" section, the variable type of the value\nfrom the relevant OBIS code is selected. If more than one value is read from an OBIS code\nto be defined, the variable type of the second value to be read is selected in the "Code 2\nType" section.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-12",src:n(56159).Z,width:"1140",height:"642"})," ")),(0,o.kt)("p",null,'After all settings are made, click "Add OBIS". If more than one OBIS code is to be defined,\nthe "Add and Continue OBIS" option is clicked. Here you can add new OBIS codes in\nsuccession.\nIf you want to modify the OBIS codes created in the MODC OBIS Codes list, you can click on\nthe parameter to be modified and make changes.'),(0,o.kt)("h3",{id:"adding-obis-codes-with-special-commands"},"Adding OBIS Codes with Special Commands"),(0,o.kt)("p",null,'Special instructions may be required to read certain information on the electricity meters. In\nsuch cases, the specific command information must be requested from the electricity meter\'s\nmanufacturer. In order to add OBIS code with special command, click "Add Programming\nMode Command to Selected Meter" option on the ModC Settings page. In the incoming\nscreen, special command input is entered in the "Command" section.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-13",src:n(98838).Z,width:"1172",height:"827"})," ")),(0,o.kt)("p",null,'After all settings are made, click "Add Command". If more than one custom command will be\nadded, the "Add Command and Continue" option is clicked. You can add successive OBIS\ncodes in this way.\nMODC If you want to change the special commands created in the MEter Programming\nMode Commands list, you can click on the parameter to be changed and make changes.'),(0,o.kt)("h3",{id:"modbus-adress-table"},"MODBUS Adress Table"),(0,o.kt)("p",null,"MODBUS address table shows the type of OBIS codes defined earlier and corresponding\nmodbus addresses."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-14",src:n(75981).Z,width:"1174",height:"860"})," ")),(0,o.kt)("p",null,"Addresses in the Modbus Address Table start at 10,000. The first two addresses of each\ncounter added to the table represent error counter and rx counter values.\nWhen adding new OBIS code definitions it should be noted that; when multiple meters are\ndefined on the system, if a new OBIS code value is defined on the first meter, the modbus\naddresses of the latter meters also change. For this reason, it is necessary to go through the\nnext meter after defining all the parameters of the previous meters completely."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-15",src:n(32007).Z,width:"1068",height:"371"}))),(0,o.kt)("h3",{id:"terminal"},"Terminal"),(0,o.kt)("p",null,'Terminal window is the section where the commands for the MMS100 series converters are\nentered. In this section, information coming from the device is displayed on the screen. In the\n"Custom Command Input" section, type the command to be queried (eg AT + VERSION =?)\nAnd click "Send" to send the query to the device. The query answer appears on the screen.\nClick on "Clear History" in the "Console Window" section to clear the queries that\nare displayed on the screen.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mdc100-16",src:n(91526).Z,width:"1174",height:"851"})," ")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),h=d(n),m=o,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||a;return n?i.createElement(f,c(c({ref:t},l),{},{components:n})):i.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var d=2;d<a;d++)c[d]=n[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66833:function(e,t,n){t.Z=n.p+"assets/images/mdc100-01-19a71d822eb6b6954681da3e40321760.png"},57743:function(e,t,n){t.Z=n.p+"assets/images/mdc100-02-8fb58ce669668ceacbfd551cade6288a.png"},47690:function(e,t,n){t.Z=n.p+"assets/images/mdc100-03-b92914bdcd275055caa8b7a8f48bb48b.png"},66478:function(e,t,n){t.Z=n.p+"assets/images/mdc100-04-e51104ca20ac3c1790b23245a4fdbfa8.png"},18225:function(e,t,n){t.Z=n.p+"assets/images/mdc100-05-99cc0d8f5a9951bc71e5df3f10f0f795.png"},24151:function(e,t,n){t.Z=n.p+"assets/images/mdc100-06-0e7f80dd3c5627db8cfa8eefb94dde7c.png"},16760:function(e,t,n){t.Z=n.p+"assets/images/mdc100-07-3d43213033b61807202bd6227d6949fe.png"},98673:function(e,t,n){t.Z=n.p+"assets/images/mdc100-08-dccaa53675c6a7461ee6f830ba1a0139.png"},6859:function(e,t,n){t.Z=n.p+"assets/images/mdc100-09-a397c912721ffa8e9349aaeb6d3bca87.png"},38349:function(e,t,n){t.Z=n.p+"assets/images/mdc100-10-0521373478b1f9234c0f1de1484daf81.png"},90059:function(e,t,n){t.Z=n.p+"assets/images/mdc100-11-5759f42f92362a99247aacfb29c2d71b.png"},56159:function(e,t,n){t.Z=n.p+"assets/images/mdc100-12-59e1a54acaa6e308094ebea20c50361a.png"},98838:function(e,t,n){t.Z=n.p+"assets/images/mdc100-13-26b389689663f8ca92901f00a248a1bf.png"},75981:function(e,t,n){t.Z=n.p+"assets/images/mdc100-14-81a8436c2182cc370ddc0095b7aab474.png"},32007:function(e,t,n){t.Z=n.p+"assets/images/mdc100-15-c697d7c22835c462db08ba9a557cb9d0.png"},91526:function(e,t,n){t.Z=n.p+"assets/images/mdc100-16-33b59c880f5906d44596d362a06e0ed7.png"},87233:function(e,t,n){t.Z=n.p+"assets/images/mdc100-17-cac918d60afa87ca07b5725158ededd6.png"}}]);