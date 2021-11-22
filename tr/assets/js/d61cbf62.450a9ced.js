(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(126)),l={title:"DNP3 SLAVE Application Notes"},o={unversionedId:"DNP3-Application-Notes",id:"DNP3-Application-Notes",isDocsHomePage:!1,title:"DNP3 SLAVE Application Notes",description:"DNP3 SLAVE",source:"@site/docs/DNP3-Application-Notes.md",slug:"/DNP3-Application-Notes",permalink:"/tr/docs/DNP3-Application-Notes",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/DNP3-Application-Notes.md",version:"current",sidebar:"Documents",previous:{title:"SNMP Application Notes",permalink:"/tr/docs/SNMP-Application-Notes"},next:{title:"Block-Descriptions-Notes",permalink:"/tr/docs/Block-Descriptions-Notes"}},c=[{value:"DNP3 SLAVE",id:"dnp3-slave",children:[{value:"General Information",id:"general-information",children:[]},{value:"DNP3 SLAVE Driver",id:"dnp3-slave-driver",children:[]},{value:"DNP3 Slave Block Definitions",id:"dnp3-slave-block-definitions",children:[]}]},{value:"DNP3 Variable Table Definitions",id:"dnp3-variable-table-definitions",children:[{value:"Variable Table",id:"variable-table",children:[]},{value:"Line Label Definition",id:"line-label-definition",children:[]},{value:"Line Label Attribution",id:"line-label-attribution",children:[]},{value:"DNP3 Object Types",id:"dnp3-object-types",children:[]},{value:"DNP3 Event Mechanism",id:"dnp3-event-mechanism",children:[]}]}],d={toc:c};function s(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"dnp3-slave"},"DNP3 SLAVE"),Object(r.a)("h3",{id:"general-information"},"General Information"),Object(r.a)("p",null,"DNP3 protocol is a distributed communication protocol. Primary advantage are:"),Object(r.a)("p",null,"\u2022Time-labeled variable support"),Object(r.a)("p",null,"\u2022Ability to re-send the events that occurred during the absence of communication when connected with the time tags."),Object(r.a)("p",null,"\u2022The ability of SCADA to automatically send changes without the need to query."),Object(r.a)("p",null,"\u2022Ability to query multiple variables as a class, not individually"),Object(r.a)("p",null,"\u2022Time syncronization"),Object(r.a)("h3",{id:"dnp3-slave-driver"},"DNP3 SLAVE Driver"),Object(r.a)("p",null,"Mikrodev RTU devices are supports DNP3 SLAVE mode and gives service to DNP3 supported systems over TCP IP and/or SerialPort . The following services are supported:"),Object(r.a)("p",null,"1-\tBulk object reading with Class object query"),Object(r.a)("p",null,"2-\tTime syncronization"),Object(r.a)("p",null,"3-\tEvent control in instantaneous measurement data as a percentage and level "),Object(r.a)("p",null,"4-\tAutomatic send the event datas"),Object(r.a)("p",null,"5-\tPeriodically send the points of data"),Object(r.a)("h3",{id:"dnp3-slave-block-definitions"},"DNP3 Slave Block Definitions"),Object(r.a)("h4",{id:"connections"},"Connections"),Object(r.a)("center",null,Object(r.a)("p",null,Object(r.a)("img",{alt:"dnp3_01",src:a(612).default}))),Object(r.a)("h4",{id:"connection-explanation"},"Connection Explanation"),Object(r.a)("p",null,"Ser: TCP Socket Input"),Object(r.a)("p",null,"The TCP server socket block, where the DNP3 protocol will run, is connected from this input."),Object(r.a)("p",null,"Trg: Trigger Input"),Object(r.a)("p",null,"The trigger input for periodically send operation. Works as a rising edge. "),Object(r.a)("p",null,"Asd: Asdu Address Input"),Object(r.a)("p",null,"It is used as an ASDU address entry."),Object(r.a)("center",null,Object(r.a)("p",null,Object(r.a)("img",{alt:"dnp3_02",src:a(613).default}))),Object(r.a)("h4",{id:"block-explanation"},"Block Explanation"),Object(r.a)("p",null,"By adding the DNP3 slave block, DNP3 is activated on the RTU. TCP or Seriport block is added to the DNP3 block Ser entry. To serve more than one server, a DNP3 block must be added for each server.\nIf the DNP3 asdu address is to be set from outside the ASD entry is used.On the rising edge of trigger , periodic submission between DNP3 objects active selected objects, send to server with periodic COT. The input of trigger and can be left blank."),Object(r.a)("center",null,Object(r.a)("p",null,Object(r.a)("img",{alt:"dnp3_03",src:a(614).default}))),Object(r.a)("h2",{id:"dnp3-variable-table-definitions"},"DNP3 Variable Table Definitions"),Object(r.a)("h3",{id:"variable-table"},"Variable Table"),Object(r.a)("p",null,"To RTU logic project , Dnp3 becomes active in the DNP3 protocol within the RTU with the addition of the Slave Block to DNP3. Variables that in the RTU logic, The association of DNP3 is provided in the variable address table."),Object(r.a)("center",null,Object(r.a)("p",null,Object(r.a)("img",{alt:"dnp3_04",src:a(615).default}))),Object(r.a)("h3",{id:"line-label-definition"},"Line Label Definition"),Object(r.a)("p",null,"Line label can be defined for all blocks defined on the microdiagram. In order to associate with the protocol addresses in the variable table, the line label must be defined."),Object(r.a)("center",null,Object(r.a)("p",null,Object(r.a)("img",{alt:"dnp3_05",src:a(616).default}))),Object(r.a)("h3",{id:"line-label-attribution"},"Line Label Attribution"),Object(r.a)("p",null,"Associating the protocol adresses with line labelss, The variable is provided from the menu by pressing the \u201cAdd\u201d button in the address table."),Object(r.a)("center",null,Object(r.a)("p",null,Object(r.a)("img",{alt:"dnp3_06",src:a(617).default}))),Object(r.a)("p",null,"Alias:"),Object(r.a)("p",null,"A special name is given that defines this variable."),Object(r.a)("p",null,"Start Address:"),Object(r.a)("p",null,"The address reserved for this variable on SCADA is written here.\u0130t is written as a Decimal value."),Object(r.a)("p",null,"LineLabel:"),Object(r.a)("p",null,"The block to be associated with on the microdiagram is selected by the line label."),Object(r.a)("p",null,"Point Coint:"),Object(r.a)("p",null,"It is calculated automatically. It makes sense in tables."),Object(r.a)("p",null,"Protocol Type:"),Object(r.a)("p",null,"Modbus, Dnp3, iec101, iec104 to choosing from among them. The Object Type will change according to the protocol type."),Object(r.a)("p",null,"Object Type:"),Object(r.a)("p",null,"DNP3 object type information is selected. See protocol type information for detailed information."),Object(r.a)("p",null,"Object Class:"),Object(r.a)("p",null,"The class information to which the variable belongs is selected."),Object(r.a)("p",null,"Send On Trigger:"),Object(r.a)("p",null,"When Dnp3 Slave is detected from the trigger input in the trigger block, it is the choice of whether to send this variable as a periodic send to SCADA."),Object(r.a)("p",null,"Send Method:"),Object(r.a)("p",null,"When the value of the defined variable changes, the operation to be performed is selected."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"None: Spinner does not trigger submission. ")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},'Level: When the amount defined "Change Value" changes, sending is triggered.')),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},'Percentage: Submission is triggered when there is a percentage change defined in " Change Value\u201d.'))),Object(r.a)("p",null,"Change Value:"),Object(r.a)("p",null,'Sets the percent or level change value with\u201d Send method".'),Object(r.a)("h3",{id:"dnp3-object-types"},"DNP3 Object Types"),Object(r.a)("h4",{id:"dnp3-object-types-in-reading-direction"},"DNP3 Object Types in Reading Direction"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",{parentName:"tr",align:null},"DNP3 Object Type"),Object(r.a)("th",{parentName:"tr",align:null},"Register Data Type"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Single Bit Binary Input : Data Object 01 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word, Analog, Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Binary Input With Status :Data Object 01 - Variation 02"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word, Analog, Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Binary Input Change Without Time : Data Object 02 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word, Analog, Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Binary Output : Data object 10 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word, Analog, Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Binary Output Status : Data object 10 - Variation 02"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word, Analog, Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"32 BIT Analog Input : Data Object 30 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"16 BIT Analog Input : Data Object 30 - Variation 02"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"32 BIT Analog Input Without Flag : Data Object 30 - Variation 03"),Object(r.a)("td",{parentName:"tr",align:null},"Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"16 BIT Analog Input Without Flag : Data Object 30 - Variation 04"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Short Float Analog Input Without Flag : Data Object 30 - Variation 05"),Object(r.a)("td",{parentName:"tr",align:null},"Analog")))),Object(r.a)("p",null,"NOTE 1: A variable of type DNP_OBJTYPE_CLASSOBJ must be added from the variable Adress table to draw Class 0, Class 1, and Class 2 data. Other settings of this variable, such as address, line tag, can be selected at random.    "),Object(r.a)("center",null,Object(r.a)("p",null,Object(r.a)("img",{alt:"dnp3_07",src:a(618).default}))),Object(r.a)("h4",{id:"dnp3-object-types-in-control-direction"},"DNP3 Object Types in Control Direction"),Object(r.a)("p",null,"The write variable is also automatically generated for each block mapped to the read type. The types of variables that can be accessed as write to defined read objects are as follows:"),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",{parentName:"tr",align:null},"DNP3 Object Type"),Object(r.a)("th",{parentName:"tr",align:null},"Register Data Type"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Control Relay Output Block : Data Object 12 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word, Analog, Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"32 Bit Analog Output Block : Data Object 41 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"16 Bit Analog Output Block : Data Object 41 - Variation 02"),Object(r.a)("td",{parentName:"tr",align:null},"Binary, Word")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Short Float Analog Output Block : Data Object 41 - Variation 03"),Object(r.a)("td",{parentName:"tr",align:null},"Analog")))),Object(r.a)("h3",{id:"dnp3-event-mechanism"},"DNP3 Event Mechanism"),Object(r.a)("h4",{id:"event-definition-for-dnp3-objects"},"Event Definition for DNP3 Objects"),Object(r.a)("p",null,"In the variable address table, the send in change selection is available for DNP3 objects. When the value of the variable defined in this menu changes, the operation to be performed is selected."),Object(r.a)("p",null,"None: Spinner does not trigger submission"),Object(r.a)("p",null,"\u25cf\tLevel: when the amount defined in \u201cChange Value\u201d is changed, the sending is triggered."),Object(r.a)("p",null,'\u25cf\tPercentage: Submission is triggered when there is a percentage change defined in " Change Value\u201d.'),Object(r.a)("p",null,'The change face or level is set with the value\u201d Change Value". Sets the percent or level change value with \u201cSend method\u201d.'),Object(r.a)("h4",{id:"dnp3-instantaneous-transmission-of-event-situations"},"DNP3 Instantaneous Transmission of Event Situations"),Object(r.a)("p",null,"The RTU device tags the states defined as send and change detected as events and assigns a time tag to the event. In case of a tagged event, if there is a connection to the server and the server is active in the device sending \u201cUNSOLICED\u201d, the relevant object is immediately forwarded as \u201cUNSOLICED\u201d."),Object(r.a)("p",null,"If the connection exists with the server and the events detected with the \u201cUNSOLICITED\u201d sending active are sent with the DNP3 object types specified in the following table."),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",{parentName:"tr",align:null},"DNP3 Object Type"),Object(r.a)("th",{parentName:"tr",align:null},"Register Data Type"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Binary Input Change Without Time : Data Object 02 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Binary")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"32 Bit Analog Input Change Without Time : Data Object 32 - Variation 01"),Object(r.a)("td",{parentName:"tr",align:null},"Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"16 Bit Analog Input Change Without Time : Data Object 32 - Variation 02"),Object(r.a)("td",{parentName:"tr",align:null},"Word")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Short Float Analog Input Change Without Time : Data Object 32 - Variation 05"),Object(r.a)("td",{parentName:"tr",align:null},"Analog")))),Object(r.a)("h4",{id:"dnp3-time-tagged-submission-of-event-states"},"DNP3 Time-Tagged Submission Of Event States"),Object(r.a)("p",null,'Event Controls continue passively sending \u201cUNSOLICED\u201d even if there is connection to the server or even if there is no connection. In the event of an event under these circumstances, event information is recorded in the event memory with the time tag and this data is kept in the device as CLASS 1 data.\nThis event data stored in memory can be read by the server with Class 1 data read management. This CLASS 1 data is also automatically forwarded to the server by RTU if\u201d UNSOLICED " sending is enabled.'),Object(r.a)("p",null,"Class 1 event data is dispatched with the DNP3 object types specified in the following table."),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",{parentName:"tr",align:null},"DNP3 Object Type"),Object(r.a)("th",{parentName:"tr",align:null},"Register Data Type"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Binary Input Change With Time : Data Object 02 - Variation 02"),Object(r.a)("td",{parentName:"tr",align:null},"Binary")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"32 Bit Analog Input Change With Time : Data Object 32 - Variation 03"),Object(r.a)("td",{parentName:"tr",align:null},"Long")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"16 Bit Analog Input Change With Time : Data Object 32 - Variation 04"),Object(r.a)("td",{parentName:"tr",align:null},"Word")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",{parentName:"tr",align:null},"Short Float Analog Input Change With Time : Data Object 32 - Variation 07"),Object(r.a)("td",{parentName:"tr",align:null},"Analog")))))}s.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),s=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,O=p["".concat(l,".").concat(u)]||p[u]||b[u]||r;return a?i.a.createElement(O,o(o({ref:t},d),{},{components:a})):i.a.createElement(O,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},612:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dnp3_01-db4c333f7798e60b0a1f488e887df16d.png"},613:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dnp3_02-84ca62b5886707b2e843164912f41805.png"},614:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dnp3_03-3dfb049ce206bed636cb90006784b10e.png"},615:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dnp3_04-da072f9fdd7c6c1a1d8dc6e1fada1b4a.png"},616:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dnp3_05-442d9b17d78cf6c8367b3ad035d039f1.png"},617:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dnp3_06-ca60ca71cb2022c4bed16f64f6a586b7.png"},618:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dnp3_07-26c6fb542588ee93f5864a66bf6add4c.png"}}]);