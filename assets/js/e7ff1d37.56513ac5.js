"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6569],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),g=l,p=u["".concat(s,".").concat(g)]||u[g]||h[g]||i;return a?n.createElement(p,r(r({ref:t},c),{},{components:a})):n.createElement(p,r({ref:t},c))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98019:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return h}});var n=a(83117),l=a(80102),i=(a(67294),a(3905)),r=["components"],o={title:"ViewPLUS SCADA Example Projects"},s=void 0,d={unversionedId:"ViewPLUS-SCADA-Example-Projects",id:"ViewPLUS-SCADA-Example-Projects",title:"ViewPLUS SCADA Example Projects",description:"Alarm Projects",source:"@site/docs/ViewPLUS-SCADA-Example-Projects.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Example-Projects",permalink:"/docs/ViewPLUS-SCADA-Example-Projects",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Example-Projects.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Example Projects"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Change Map Icons",permalink:"/docs/ViewPLUS-SCADA-Change-Map-Icons"},next:{title:"Mikrodiagram Editor",permalink:"/docs/Mikrodiagram-Editor"}},c={},h=[{value:"Alarm Projects",id:"alarm-projects",level:2},{value:"Applying Filter to Active Alarms and Records",id:"applying-filter-to-active-alarms-and-records",level:3},{value:"Creating Constantly Increasing Counter Tag",id:"creating-constantly-increasing-counter-tag",level:2},{value:"User Manager Applications",id:"user-manager-applications",level:2},{value:"User Authorization in Dynamic Pages",id:"user-authorization-in-dynamic-pages",level:3},{value:"ViewPLUS SCADA Protocol Applications",id:"viewplus-scada-protocol-applications",level:2},{value:"Channel: Database",id:"channel-database",level:3},{value:"Create Channels And Tags",id:"create-channels-and-tags",level:4},{value:"Channel And Tag Configuration",id:"channel-and-tag-configuration",level:4},{value:"Connection",id:"connection",level:4},{value:"Channel: Global Database",id:"channel-global-database",level:3},{value:"PostgreSQL Database",id:"postgresql-database",level:4},{value:"Create Channels And Tags",id:"create-channels-and-tags-1",level:4},{value:"Channel And Tag Configuration",id:"channel-and-tag-configuration-1",level:4},{value:"Connection",id:"connection-1",level:4},{value:"Oracle Database",id:"oracle-database",level:4},{value:"Channel And Tag Configuration",id:"channel-and-tag-configuration-2",level:4},{value:"Connection",id:"connection-2",level:4},{value:"Channel: JavaScript",id:"channel-javascript",level:3},{value:"Create Channels And Tags",id:"create-channels-and-tags-2",level:4},{value:"Channel And Tag Configuration",id:"channel-and-tag-configuration-3",level:4},{value:"Connection",id:"connection-3",level:4},{value:"Channel: Server Info",id:"channel-server-info",level:3},{value:"Designing Fancy Tables For Map Views",id:"designing-fancy-tables-for-map-views",level:2}],u={toc:h};function g(e){var t=e.components,o=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"alarm-projects"},"Alarm Projects"),(0,i.kt)("h3",{id:"applying-filter-to-active-alarms-and-records"},"Applying Filter to Active Alarms and Records"),(0,i.kt)("p",null,"By creating a filter, redirects to logs and active alarm page that can be made from within the pages."),(0,i.kt)("p",null,'From the Scada reporter screen, requested alarm or tag records could be filtered by selecting. In the window that appears after the selection screen, the date duration is selected, and the filter is added by clicking on \u201cSave This Filter\u201d. The added filters appear in "Saved Filters" on the right side of the page.'),(0,i.kt)("p",null,"By right click on the saved filter and the link information is received. The received link information is added as a (Web) Link on the component."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-01",src:a(93849).Z,width:"1597",height:"631"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "alarmfilter": {\n        "alarmclass": "",\n        "itemIdList": [\n            7,\n            6,\n            5,\n            4,\n            3,\n            2,\n            11,\n            10,\n            1,\n            8,\n            9\n        ]\n    },\n    "contentType": 1,\n    "datarange": {\n        "ftip": 0,\n        "higherBound": 0,\n        "limitVal": 0,\n        "lowerBound": 0\n    },\n    "limitRowCount": 500,\n    "queryname": "AlarmLog",\n    "reptypedef": {\n        "periodTip": 0,\n        "repTip": 0,\n        "targetDatetime": "0",\n        "timeFactor": 0\n    },\n    "reservedVal": -1,\n    "tagfilter": {\n        "ftip": 1740730552,\n        "itemIdList": [\n        ],\n        "keywords": "",\n        "parentChannel": "",\n        "parentStation": ""\n    },\n    "timeinterval": {\n        "endTime": "1617262500000",\n        "intervaltip": 2,\n        "startTime": "1617172500000",\n        "timePeriod": "0",\n        "timeValue": "0"\n    },\n    "viewMethod": 0,\n    "vtype": 0\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-02",src:a(84211).Z,width:"1599",height:"861"})),(0,i.kt)("p",null,"In order to redirect the alarm logs with filters, at the end of the link, \u201c||| 1: AlarmName \u201dparameter expression is added.\ne.g for Alarm_5; \u201c ||| 1: Alarm_5 \u201d."),(0,i.kt)("p",null,'The expression with "1" indicates the "alarm_id" column on the "Scada Reporter" screen. Each column is expressed in numbers starting from 0 from left to right.'),(0,i.kt)("p",null,'The expression specified with "alarm_5" filters according to the alarm ids under the "alarm_id" column. '),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-03",src:a(16483).Z,width:"903",height:"404"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "alarmfilter": {\n        "alarmclass": "",\n        "itemIdList": [\n            7,\n            6,\n            5,\n            4,\n            3,\n            2,\n            11,\n            10,\n            1,\n            8,\n            9\n        ]\n    },\n    "contentType": 1,\n    "datarange": {\n        "ftip": 0,\n        "higherBound": 0,\n        "limitVal": 0,\n        "lowerBound": 0\n    },\n    "limitRowCount": 500,\n    "queryname": "AlarmLog",\n    "reptypedef": {\n        "periodTip": 0,\n        "repTip": 0,\n        "targetDatetime": "0",\n        "timeFactor": 0\n    },\n    "reservedVal": -1,\n    "tagfilter": {\n        "ftip": 1740730552,\n        "itemIdList": [\n        ],\n        "keywords": "",\n        "parentChannel": "",\n        "parentStation": ""\n    },\n    "timeinterval": {\n        "endTime": "1617262500000",\n        "intervaltip": 2,\n        "startTime": "1617172500000",\n        "timePeriod": "0",\n        "timeValue": "0"\n    },\n    "viewMethod": 0,\n    "vtype": 0\n}\n||| 1:Alarm_5\n')),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-04",src:a(33122).Z,width:"1184",height:"340"})),(0,i.kt)("p",null,"The expression indicated with \u201c: Alarms\u201d is used to redirect to active alarms page."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-05",src:a(31392).Z,width:"882",height:"409"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-06",src:a(17534).Z,width:"934",height:"293"})),(0,i.kt)("p",null,'The expression ": Alarms ||| 7: Alarm_5" filters according to the seventh column and redirects it to the active alarm page.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-07",src:a(40439).Z,width:"862",height:"402"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"active-alarm-08",src:a(77878).Z,width:"974",height:"402"})),(0,i.kt)("h2",{id:"creating-constantly-increasing-counter-tag"},"Creating Constantly Increasing Counter Tag"),(0,i.kt)("p",null,"In some cases, it may be desirable that the trend of the tag value read from the field is continuously increasing (such as reading a counter). In such cases, when the data read from the field is contaminated because of device replacement, project update, and etc.; trends and counter total values may also get contaminated. To prevent this, a mechanism on SCADA can be configured in the following way."),(0,i.kt)("p",null,'We need 3 seperate tags to solve the problem. As an example we will create a "CounterTag" tag. In parallel we will create a "CounterTag_latest" tag under "Database Channel" and a "CounterTag_controller" tag under Macro channel to fix field-based distortions so that this tag can read the latest value logged in the database.'),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"CreatingConstantlyIncreasingCounterTag-01",src:a(84845).Z,width:"664",height:"385"}))),(0,i.kt)("p",null,'We will use the following query in the tag settings to get the most recent value we have logged into the "CounterTag_latest" tag:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select dataval from logs.lct_table where tag_id=2 \n")),(0,i.kt)("p",null,'This query will read the last logged value of the "CounterTag" tag with tag ID "2"'),(0,i.kt)("p",null,'Finally, we will add the control macro to the "CounterTag_controller" tag. The macro will be:'),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"CreatingConstantlyIncreasingCounterTag-02",src:a(27111).Z,width:"955",height:"357"}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[v1=$4e0]\n[IF,v1,3]\n[$4=$6+0]\n[E]\n[v0=$4>$2]\n[IF,v0,3]\n[$2=$4+0]\n[E]\n[$4=$2+0]\n[E]\n")),(0,i.kt)("p",null,"This macro consists of 3 main sections:"),(0,i.kt)("p",null,'Lines numbered as "1"; reads the last logged value from the database when the server is running for the first time.'),(0,i.kt)("p",null,'Lines numbered as "2"; sets the value to be the value on the field device if it is less than the last log value for any reason.'),(0,i.kt)("p",null,'Lines numbered as "3"; is the part where macro continuously updates the control tag.'),(0,i.kt)("p",null,'In order to prevent erroneous logs in addition to the structure created above, the "log only while increasing" option should be enabled in the tag logging settings.'),(0,i.kt)("h2",{id:"user-manager-applications"},"User Manager Applications"),(0,i.kt)("h3",{id:"user-authorization-in-dynamic-pages"},"User Authorization in Dynamic Pages"),(0,i.kt)("p",null,'The "Run Function" parameter is defined in the relevant object for the dynamic page which is needed restricted access.'),(0,i.kt)("p",null,'The "data1 = data2" information changes the tag names starting with data 1 in the directed page to the tag named data2.\nThe information used after the semicolon indicates the access numbers for the page to be redirected.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"function-parameters-01",src:a(70732).Z,width:"758",height:"753"})),(0,i.kt)("p",null,'In order to access the page content specified with "requireReadAccess = {1,2,4}", these numbers must be marked under the User Access Rights.\nIf these numbers are not checked in the User Access Rights window, they cannot access the relevant page.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"useraccessrights-02",src:a(33333).Z,width:"801",height:"631"})),(0,i.kt)("p",null,'If the numbers in the "requireReadAccess" content are not selected in the user access right, the following warning screen is displayed when you want to be directed to the page.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"useraccessrights-03",src:a(69099).Z,width:"977",height:"665"})),(0,i.kt)("h2",{id:"viewplus-scada-protocol-applications"},"ViewPLUS SCADA Protocol Applications"),(0,i.kt)("h3",{id:"channel-database"},"Channel: Database"),(0,i.kt)("p",null,"Channel type used to make special queries from SCADA's own database."),(0,i.kt)("h4",{id:"create-channels-and-tags"},"Create Channels And Tags"),(0,i.kt)("p",null,"A channel is created by selecting the protocol type database in tag channel editor option."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"database-channel-01",src:a(76548).Z,width:"591",height:"347"}))),(0,i.kt)("p",null,"A label is created under the database channel."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"database-channel-02",src:a(25489).Z,width:"484",height:"546"}))),(0,i.kt)("h4",{id:"channel-and-tag-configuration"},"Channel And Tag Configuration"),(0,i.kt)("p",null,"Response Timeout: The time in milliseconds that represents the frequency with which the database query is executed.\nQueries are written in the \xabQuery\xbb option of the tag"),(0,i.kt)("p",null,"A tag with tag ID 2 is attached to the database and transactions are performed over the database on this tag. Values from 1 to 100 are sent and the log is kept in the database."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"database-channel-04",src:a(69114).Z,width:"953",height:"385"}))),(0,i.kt)("h4",{id:"connection"},"Connection"),(0,i.kt)("p",null,"With this query, it brings the last sent value from the database."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"database-channel-05",src:a(80272).Z,width:"851",height:"410"}))),(0,i.kt)("h3",{id:"channel-global-database"},"Channel: Global Database"),(0,i.kt)("p",null,"It is the channel type used to create special queries by connecting to different databases and to transfer these query results to project tags."),(0,i.kt)("h4",{id:"postgresql-database"},"PostgreSQL Database"),(0,i.kt)("h4",{id:"create-channels-and-tags-1"},"Create Channels And Tags"),(0,i.kt)("p",null,"A channel is created by selecting the protocol type globaldatabase in tag channel editor option."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-01",src:a(9547).Z,width:"708",height:"430"}))),(0,i.kt)("p",null,"A label is created under the globaldatabase channel."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-02",src:a(88437).Z,width:"668",height:"534"}))),(0,i.kt)("h4",{id:"channel-and-tag-configuration-1"},"Channel And Tag Configuration"),(0,i.kt)("p",null,"Information about PostgreSQL database type is entered on the channel screen.\nResponse Timeout: The time in milliseconds that represents the frequency with which the database query is executed."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-03",src:a(13644).Z,width:"789",height:"388"}))),(0,i.kt)("p",null,"Queries are written in the \xabQuery\xbb option of the tag."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-04",src:a(65445).Z,width:"874",height:"248"}))),(0,i.kt)("p",null,"A tag with tag ID 2 is attached to the database and transactions are performed over the database on this tag. Values from 1 to 100 are sent and the log is kept in the database."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-05",src:a(14013).Z,width:"879",height:"282"}))),(0,i.kt)("h4",{id:"connection-1"},"Connection"),(0,i.kt)("p",null,"The device address information of the label number 2 was written in the query. Device address information is displayed on the server screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select deviceaddress from public.tags where tag_id=2;\n:{${1}}:\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-06",src:a(83629).Z,width:"966",height:"295"}))),(0,i.kt)("p",null,"With this query, the last value sent from the database is set to the number 1 tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select data_value from logs.tag_log where tag_id=2 order by logtime desc limit 1\n:{${1}}:\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-07",src:a(68892).Z,width:"984",height:"353"}))),(0,i.kt)("p",null,"In the postgresql database query, the most recent values recorded in the database of the tags with id 2, 3, 4 and 5 were written in tags with ids 1, 6, 7, and 8, respectively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," WITH\n t1 AS (\n  SELECT  data_value from logs.tag_log where tag_id=2 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1 ),\n t2 AS (\n  SELECT  data_value from logs.tag_log where tag_id=3 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1),\n t3 AS (\n  SELECT  data_value from logs.tag_log where tag_id=4 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1),\n t4 AS (\n  SELECT  data_value from logs.tag_log where tag_id=5 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1)\n \n SELECT t1.data_value data1, t2.data_value  data2, t3.data_value  data3, t4.data_value  data4\n FROM t1, t2 ,t3,t4;\n \n :{${1}, ${6} , ${7}, ${8}}:\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-08",src:a(15645).Z,width:"950",height:"381"}))),(0,i.kt)("h4",{id:"oracle-database"},"Oracle Database"),(0,i.kt)("p",null,"This channel is used to connect to the oracle database and pull the desired data."),(0,i.kt)("h4",{id:"channel-and-tag-configuration-2"},"Channel And Tag Configuration"),(0,i.kt)("p",null,"Information about Oracle database type is entered on the channel screen. The database information of the project is entered on the configuration screen."),(0,i.kt)("h4",{id:"connection-2"},"Connection"),(0,i.kt)("p",null,"The first data recorded in the oracle database was captured by query. The data in the Oracle database is printed on the label with ID 2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select data_value UNTITLED127.tag_log order by logdate fetch first 1 rows only\n:{${2}}:\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-09",src:a(5971).Z,width:"581",height:"404"}))),(0,i.kt)("p",null,"The last data recorded in the oracle database was captured by query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"select data_value UNTITLED127.tag_log order by logdate desc fetch first 1 rows only\n:{${2}}:\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"globaldatabase-channel-09",src:a(82138).Z,width:"1014",height:"353"}))),(0,i.kt)("h3",{id:"channel-javascript"},"Channel: JavaScript"),(0,i.kt)("p",null,'JavaScript functions could be defined JavaScript channel. You can call various Math functions in your script. You can also use the values of system tags in the form of "${123}". You need to "return" a numeric value for the function result to be written on the "JavaScript Tag".\n*Channel Parameters'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Frame Timeout = The number of milliseconds that represents the frequency at which the\nJavaScript function is called.\n*Tag Parameters"),(0,i.kt)("li",{parentName:"ul"},"Query = The JavaScript expression to be called.")),(0,i.kt)("h4",{id:"create-channels-and-tags-2"},"Create Channels And Tags"),(0,i.kt)("p",null,"A channel is created by selecting the protocol type javascript in tag channel editor option."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-01",src:a(78824).Z,width:"592",height:"412"}))),(0,i.kt)("p",null,"A label is created under the database channel."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-02",src:a(16404).Z,width:"635",height:"546"}))),(0,i.kt)("h4",{id:"channel-and-tag-configuration-3"},"Channel And Tag Configuration"),(0,i.kt)("p",null,"Queries are written in the \xabQuery\xbb option of the tag."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-03",src:a(10173).Z,width:"817",height:"279"}))),(0,i.kt)("p",null,"Sample javascript codes were written by choosing 2 different tags from the modbus channel."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-04",src:a(42863).Z,width:"741",height:"410"}))),(0,i.kt)("h4",{id:"connection-3"},"Connection"),(0,i.kt)("p",null,"Example 1: The sum of the two labels is shown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var3 = ${2}+${3};\nreturn var3;\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-05",src:a(4214).Z,width:"798",height:"382"}))),(0,i.kt)("p",null,'Example 2:\nIn the first line : define a variable "var1" and assign "the value of tag with id 2" plus "5"\nIn the second line : define a variable "var2" and assign "the value of tag with id 3" plus "3"\nIn the third line : define a variable "subtotal" and assign "the sum of var1 and var2" to it\nIn the last line : evaluate the square root of subtotal and return to that value. The return\nvalue will also be written as the value of the current JavaScript Tag.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var1 = 5+${2};\nvar2 = 3+${3};\nsubtotal=(var1+var2);\nreturn Math.sqrt(subtotal);\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-06",src:a(39341).Z,width:"733",height:"360"}))),(0,i.kt)("p",null,"Important Note = You cannot set the values of other system tags in JavaScript tag. You\nneed to use Macros to achieve this. Thus the following script will not work:\n${3}= 3 + var1;\nExample 3: Tag values are assigned to variables. Return 1 if the variables are equal.Return 0 if variables are not equal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var1 = ${2};\nvar2 = ${3};\nvar3 = var1===var2 ? 1:0;\nreturn var3;\n")),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-07",src:a(19005).Z,width:"767",height:"376"}))),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"javascript-channel-08",src:a(12212).Z,width:"759",height:"381"}))),(0,i.kt)("h3",{id:"channel-server-info"},"Channel: Server Info"),(0,i.kt)("p",null,"By using this channel, you can get real-time information such as the num-ber of active alarms, system time, etc."),(0,i.kt)("p",null,'Here is a sample "JavaScript" statement to get system information:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var1 = :ALARMCOUNT(Panel1); \nvar2 = :ALARMCOUNT(Panel2); \ntotalalarms_defined= (var1 +var2 );  \nreturn totalalarms_defined; // It will return the total number of alarms defined for the "Panel1" and "Panel2" alarm classes.\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'The following keywords are supported in JavaScript.\n:ALARMCOUNT()              \nreturns the number of alarms defined in the system.\n:ALARMCOUNT(ClassName)     \nreturns the alarm number for the "ClassName" alarm class.\n:ACTALARMCOUNT()           \nreturns the number of active alarms defined in the system.\n:ACTALARMCOUNT(ClassName)  \nreturns the number of active alarms for the "ClassName" alarm class.\n:ACKEDALARMCOUNT()         \nreturns the number of confirmed active alarms defined in the system.\n:ACKEDALARMCOUNT(ClassName) \nreturns the number of confirmed active alarms for the "ClassName" alarm class.\n:SYSTEMTIME()              \nreturns the system time of the SCADA server in milliseconds since epoch.\n:CONNECTEDCHANNELS(ChannelName) \nreturns the number of channels with an active connection and a name containing the keyword "ChannelName".\n:UNCONNECTEDCHANNELS(ChannelName) \nreturns the number of channels that are not connected and have a name containing the keyword "ChannelName"\n')),(0,i.kt)("p",null,'The channel is created by selecting the protocol type "SERVERINFO" in the Tag Channel Editor.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"serverinfo-01",src:a(57760).Z,width:"1132",height:"644"})),(0,i.kt)("p",null,'By writing queries within the labels created under the "SERVERINFO" channel, information related to channels and alarms can be obtained.\nAccording to the query defined below, the total number of active alarms in the project can be read on the tag.'),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"serverinfo-02",src:a(56332).Z,width:"449",height:"254"}))),(0,i.kt)("p",null,"The total number of active alarms is displayed on the label under the de-fined \u201cSERVERINFO\u201d channel."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"serverinfo-03",src:a(43989).Z,width:"1009",height:"431"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"serverinfo-04",src:a(19501).Z,width:"1077",height:"600"})),(0,i.kt)("h2",{id:"designing-fancy-tables-for-map-views"},"Designing Fancy Tables For Map Views"),(0,i.kt)("p",null,"You can use some third party applications for designing tables to be used to display data in your Map Views. One of these services could be found on this ",(0,i.kt)("a",{parentName:"p",href:"https://divtable.com/table-styler/"},"link")),(0,i.kt)("p",null,"By using this service you can stylise you table and auto generate a CSS and HTML code."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-01",src:a(23098).Z,width:"1092",height:"580"}))),(0,i.kt)("p",null,'To be able to use the generated code on Map View, you need to put both these code into InfoWindowContent. But before pasting the code into InfoWindowContent; you need to put the CSS code into "',(0,i.kt)("style",null," ")," tags."),(0,i.kt)("p",null,"The structure of the code should be as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<style> ...CSS Code Here...</style>\n        ... HTML Code Here ...\n")),(0,i.kt)("p",null,"For example if your generated CSS code is like :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table.blueTable {\n  border: 1px solid #1C6EA4;\n  background-color: #EEEEEE;\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\ntable.blueTable td, table.blueTable th {\n  border: 1px solid #AAAAAA;\n  padding: 3px 2px;\n}\ntable.blueTable tbody td {\n  font-size: 13px;\n}\ntable.blueTable tr:nth-child(even) {\n  background: #D0E4F5;\n}\ntable.blueTable thead {\n  background: #1C6EA4;\n  background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\n  background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\n  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\n  border-bottom: 2px solid #444444;\n}\ntable.blueTable thead th {\n  font-size: 15px;\n  font-weight: bold;\n  color: #FFFFFF;\n  border-left: 2px solid #D0E4F5;\n}\ntable.blueTable thead th:first-child {\n  border-left: none;\n}\n\ntable.blueTable tfoot {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FFFFFF;\n  background: #D0E4F5;\n  background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\n  background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\n  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\n  border-top: 2px solid #444444;\n}\ntable.blueTable tfoot td {\n  font-size: 14px;\n}\ntable.blueTable tfoot .links {\n  text-align: right;\n}\ntable.blueTable tfoot .links a{\n  display: inline-block;\n  background: #1C6EA4;\n  color: #FFFFFF;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n")),(0,i.kt)("p",null,"And your table HTML is like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<table class="blueTable">\n <thead>\n <tr>\n <th>head1</th>\n <th>head2</th>\n <th>head3</th>\n </tr>\n </thead>\n <tbody>\n <tr>\n <td>cell1_1</td>\n <td>cell2_1</td>\n <td>cell3_1</td>\n </tr>\n <tr>\n <td>cell1_2</td>\n <td>cell2_2</td>\n <td>cell3_2</td>\n </tr>\n <tr>\n <td>cell1_3</td>\n <td>cell2_3</td>\n <td>cell3_3</td>\n </tr>\n </tbody>\n </table>\n')),(0,i.kt)("p",null,"Then your resulting code to be pasted into the InfoWindofContent should be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<style>\n table.blueTable {\n   border: 1px solid #1C6EA4;\n   background-color: #EEEEEE;\n   width: 100%;\n   text-align: left;\n   border-collapse: collapse;\n }\n table.blueTable td, table.blueTable th {\n   border: 1px solid #AAAAAA;\n   padding: 3px 2px;\n }\n table.blueTable tbody td {\n   font-size: 13px;\n }\n table.blueTable tr:nth-child(even) {\n   background: #D0E4F5;\n }\n table.blueTable thead {\n   background: #1C6EA4;\n   background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\n   background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\n   background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);\n   border-bottom: 2px solid #444444;\n }\n table.blueTable thead th {\n   font-size: 15px;\n   font-weight: bold;\n   color: #FFFFFF;\n   border-left: 2px solid #D0E4F5;\n }\n table.blueTable thead th:first-child {\n   border-left: none;\n }\n \n table.blueTable tfoot {\n   font-size: 14px;\n   font-weight: bold;\n   color: #FFFFFF;\n   background: #D0E4F5;\n   background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\n   background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\n   background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);\n   border-top: 2px solid #444444;\n }\n table.blueTable tfoot td {\n   font-size: 14px;\n }\n table.blueTable tfoot .links {\n   text-align: right;\n }\n table.blueTable tfoot .links a{\n   display: inline-block;\n   background: #1C6EA4;\n   color: #FFFFFF;\n   padding: 2px 8px;\n   border-radius: 5px;\n }\n </style>\n\n <table class="blueTable">\n <thead>\n <tr>\n <th>head1</th>\n <th>head2</th>\n <th>head3</th>\n </tr>\n </thead>\n <tbody>\n <tr>\n <td>cell1_1</td>\n <td>cell2_1</td>\n <td>cell3_1</td>\n </tr>\n <tr>\n <td>cell1_2</td>\n <td>cell2_2</td>\n <td>cell3_2</td>\n </tr>\n <tr>\n <td>cell1_3</td>\n <td>cell2_3</td>\n <td>cell3_3</td>\n </tr>\n </tbody>\n </table>\n')),(0,i.kt)("p",null,"On the Map View the table will look like:"),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-02",src:a(66249).Z,width:"644",height:"286"}))))}g.isMDXComponent=!0},84845:function(e,t,a){t.Z=a.p+"assets/images/CreatingConstantlyIncreasingCounterTag-01-ab8c9beb4054668e683513af836deac2.png"},27111:function(e,t,a){t.Z=a.p+"assets/images/CreatingConstantlyIncreasingCounterTag-02-2f8a5af76af0b5c41e85df495bfb5a35.png"},23098:function(e,t,a){t.Z=a.p+"assets/images/ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-01-6d8907ec9bbc456adaf7d199e851c3fc.png"},66249:function(e,t,a){t.Z=a.p+"assets/images/ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-02-501c1fc7112ce44e236c00db396d7b6e.png"},93849:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-01-9d1606dafc1bba8379f857cb086f7012.png"},84211:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-02-44a95e04d6ca5653b041fa433b3a0772.png"},16483:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-03-8c3cb15a55c212f801949102e3e9141b.png"},33122:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-04-224737a5c1a30a1226e25d849369d16f.png"},31392:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-05-ed884d0c855330c4e6a9cd9ad5c0232f.png"},17534:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-06-a2bd27268a57ba423e92c5b0c9a859b9.png"},40439:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-07-a6cc19f4c3252c835c7567d49078aad7.png"},77878:function(e,t,a){t.Z=a.p+"assets/images/active-alarm-08-39d84d81e9d00bbffdde02bab27c4e05.png"},76548:function(e,t,a){t.Z=a.p+"assets/images/database-channel-01-397243c622358a12b8bdf0f511ac7d53.png"},25489:function(e,t,a){t.Z=a.p+"assets/images/database-channel-02-704e8fe8893355c14f73d7a5741315e8.png"},69114:function(e,t,a){t.Z=a.p+"assets/images/database-channel-04-3cbc09a3e4bacc6ec93b038aec085a76.png"},80272:function(e,t,a){t.Z=a.p+"assets/images/database-channel-05-9a7ddc679882c2328f9ac8230ded500a.png"},70732:function(e,t,a){t.Z=a.p+"assets/images/function-parameters-01-c58f950b46df3e90b1352b3d64daf123.png"},9547:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-01-fee71999606e51ff44faa679332a8d1c.png"},88437:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-02-6e47a3fdd22d23eb6a8f85def432d222.png"},13644:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-03-28f26c7f585f38752d80fdd64fc5e0bc.png"},65445:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-04-20eafd7e83da7448ffb2518369a2b676.png"},14013:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-05-826068ef5ef0ae73acdba8a21590d4a7.png"},83629:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-06-7126a184fa04e62c4988fd374c89f5c7.png"},68892:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-07-33493abcaa904ac1f982e9b346fbbb97.png"},15645:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-08-92fb3394af2fa6cc58dd91c9544a8e67.png"},5971:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-09-bf139fee1ab5934ab7f3917123a585fd.png"},82138:function(e,t,a){t.Z=a.p+"assets/images/globaldatabase-channel-10-3f3b2fdd1b460abc86881ad9e7410325.png"},78824:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-01-bf59c8e4adcc0f7920b10678178ddf6e.png"},16404:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-02-5fc110a43fa0088811bff2ffd47ad817.png"},10173:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-03-63d06a566e5fa0e8416ca7002e411a53.png"},42863:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-04-1610c577da629e50830219a636b2438e.png"},4214:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-05-5bea0da0a4b8a7409ae8d39dba3bdb05.png"},39341:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-06-9a7ffd1c31bd73d0fecf631ad011f4d7.png"},19005:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-07-c86f8ca4602a38751d5fc0e85b692e82.png"},12212:function(e,t,a){t.Z=a.p+"assets/images/javascript-channel-08-d6b7528dfcb0be94cfde933eed2b2b54.png"},57760:function(e,t,a){t.Z=a.p+"assets/images/serverinfo-01-4ed0d714e2a29c1936b726649d199eff.png"},56332:function(e,t,a){t.Z=a.p+"assets/images/serverinfo-02-9a1ffa403e8ceb280c2fd8178424ed9a.png"},43989:function(e,t,a){t.Z=a.p+"assets/images/serverinfo-03-2b7bc09cf20e8b3dedd7a23efef04e84.png"},19501:function(e,t,a){t.Z=a.p+"assets/images/serverinfo-04-efa3cd2528ea365b977f93e51061cd36.png"},33333:function(e,t,a){t.Z=a.p+"assets/images/useraccessrights-02-3b51f16f0ad7775986a1630e563b85c7.png"},69099:function(e,t,a){t.Z=a.p+"assets/images/useraccessrights-03-f2fdef795c56ed66d316a68ed26dad7b.png"}}]);