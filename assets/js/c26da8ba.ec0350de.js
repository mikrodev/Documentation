"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),k=a,u=p["".concat(o,".").concat(k)]||p[k]||g[k]||s;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},82804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={title:"IEC61850 Application Notes"},i=void 0,l={unversionedId:"IEC61850-Application-Notes",id:"IEC61850-Application-Notes",title:"IEC61850 Application Notes",description:"Read Data Object",source:"@site/docs/IEC61850-Application-Notes.md",sourceDirName:".",slug:"/IEC61850-Application-Notes",permalink:"/docs/IEC61850-Application-Notes",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/IEC61850-Application-Notes.md",tags:[],version:"current",frontMatter:{title:"IEC61850 Application Notes"},sidebar:"Documents",previous:{title:"IEC104 Application Notes",permalink:"/docs/IEC104-Application-Notes"},next:{title:"IEC61850 Version 2 Application Note",permalink:"/docs/IEC61850-V2.0-Application-Notes"}},o={},c=[{value:"Read Data Object",id:"read-data-object",level:3},{value:"Read Dataset",id:"read-dataset",level:3},{value:"Read Report",id:"read-report",level:3}],d={toc:c},p="wrapper";function g(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"read-data-object"},"Read Data Object"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click Tools/Mdv61850 Browser on Telediagram. Mdv61850 Browser comes with version of Telediagram\u0131n 16.1.04 beta8 and up.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser1",src:r(45787).Z,width:"351",height:"261"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 1: Tools/Mdv61850 Browser"))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Browse SCL file(xxx.cid) from IED and load it.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser2",src:r(85537).Z,width:"605",height:"326"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 2: Load Configuration File"))))),(0,a.kt)("p",null,"If there is more than one IED you need to choose from the list between buttons 1 and 2."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Find data objects which wanted read and double click to add data objects table at the right side.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser3",src:r(66376).Z,width:"605",height:"137"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 3: Inserting Data Object"))))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Insert result, status and trig blocks into the telediagram project for each data object.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser4",src:r(18221).Z,width:"604",height:"166"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 4: Data Object Table"))))),(0,a.kt)("p",null,"Insert binary register into the telediagram project for status and trig blocks.",(0,a.kt)("br",{parentName:"p"}),"\n","Result blocks needs to right type of register according to Object Type."),(0,a.kt)("p",null,"Object Type variations listed below;",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tBOOLEAN -> binary register.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tINT32 -> long register.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tFLOAT32 -> analog register.            "),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser5",src:r(31786).Z,width:"436",height:"386"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 5: Inserted Telediagram Blocks"))))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click on Projects / Blok Properties / Export selected blocks to CSV button and export linelabels into the csv file.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser6",src:r(74165).Z,width:"605",height:"346"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 6: Block Properties Tab"))))),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Turn back to Mdv61850 Browser and click on \u201cImport Line Labels\u201d button, Select the csv file which exported. You should see to line labels in the info screen.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser7",src:r(10972).Z,width:"440",height:"334"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 7: Import Line Labels Screen"))))),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"In order to assign blocks to data objects, double-click the cell of the relevant block and select the linelabel in the project.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser8",src:r(22501).Z,width:"488",height:"416"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 8: Assigning Line Labels to Data Objects Window"))))),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},'After selecting the block names, click the "Export" button and the directory and name of the file to be imported into Telediagram appear on the warning screen.',(0,a.kt)("br",{parentName:"li"}),"You can find the exported file in the \u201cC:/Users/< username >/MdvExports/\u201d directory.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser9",src:r(65758).Z,width:"604",height:"634"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 9: Configuration Export Screen"))))),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"The configuration file created in Mdv61850 Browser is transferred to Telediagram by clicking Telediagram / Projects / 61850 Tab / Import Tables from Excel.")),(0,a.kt)("p",null,"If there is a previously added relay definition, if you want to add a second IED without deleting it, click the Import Connection from Excel button."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser10",src:r(84536).Z,width:"582",height:"344"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 10: Import Window of Telediagram 61850 Table"))))),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"After the import process is finished, the table will appear as follows. IP and port settings are checked;")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser11",src:r(52601).Z,width:"605",height:"358"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 11: 61850 Table"))))),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"After loading the project to the device, when we trigger the trig block, it is seen that the data is received. Status registers go down to 0 at each trigger and rise to 1 again if the reading is successful, so the reading accuracy can be ensured.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser12",src:r(44411).Z,width:"499",height:"490"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 12: Result of Data Object Reading"))))),(0,a.kt)("h3",{id:"read-dataset"},"Read Dataset"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The dataset we want to read from the Dataset Object list in the middle left is double-clicked and added to the Datasets list on the right.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser13",src:r(59661).Z,width:"605",height:"162"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 13: DataSet Object List"))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The objects to be read in the dataset are added to the Dataset Member Object Indexes table by double-clicking.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser14",src:r(5871).Z,width:"605",height:"167"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 14: DataSet Object Indeks Table"))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Status, Trig Block, RxTime, RxCount, Dataset From Report blocks and result blocks are added for dataset.")),(0,a.kt)("p",null,"Insert binary register into the telediagram project for status, trig and dataset from report blocks.",(0,a.kt)("br",{parentName:"p"}),"\n","Result blocks needs to right type of register according to Object Type."),(0,a.kt)("p",null,"Object Type variations listed below;",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tBOOLEAN -> binary register.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tINT32 -> long register.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tFLOAT32 -> analog register.     "),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser15",src:r(52135).Z,width:"605",height:"195"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 15: DataSet Blocks"))))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click the Projects / Blok Properties / Export selected blocks to CSV button and the line labels of the blocks are exported to the csv file.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser16",src:r(91518).Z,width:"605",height:"346"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 16: Block Properties Tab"))))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Turn back to Mdv61850 Browser and click on \u201cImport Line Labels\u201d button, Select the csv file which exported. You should see to line labels in the info screen.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser17",src:r(5926).Z,width:"423",height:"271"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 17: Insert Line Labels Screen"))))),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"In order to assign blocks to data objects, double-click the cell of the relevant block and select the block name in the project.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser18",src:r(63263).Z,width:"578",height:"289"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 18: Line Label Window"))))),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},'After selecting the block names, click the "Export" button and the directory and name of the file to be imported into Telediagram appear on the warning screen.',(0,a.kt)("br",{parentName:"li"}),"You can find the exported file in the \u201cC:/Users/< username >/MdvExports/\u201d directory.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser19",src:r(15550).Z,width:"556",height:"459"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 19: Configuration Export Screen"))))),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"The configuration file created in Mdv61850 Browser is transferred to Telediagram by clicking Telediagram / Projects / 61850 Tab / Import Tables from Excel.")),(0,a.kt)("p",null,"If there is a previously added relay definition, if you want to add a second IED without deleting it, click the Import Connection from Excel button."),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser20",src:r(53884).Z,width:"604",height:"357"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 20: Import Window of Telediagram 61850 Table"))))),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"After the import process is finished, the table will appear as follows. IP and port settings are checked; ")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser21",src:r(99918).Z,width:"605",height:"311"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 21: 61850 Table"))))),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"After loading the project to the device, when we trigger the trig block, it is seen that the data is received. Status registers go down to 0 at each trigger and rise to 1 again if the reading is successful, so the reading accuracy can be ensured.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser22",src:r(14598).Z,width:"605",height:"238"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 22: Result of DataSet Reading"))))),(0,a.kt)("h3",{id:"read-report"},"Read Report"),(0,a.kt)("p",null,"To read the created dataset without triggering, the following steps are followed;"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Reports created from the Reports section are listed at the bottom left. Double-clicking on the report you want to read is added to the Reports table in the middle.")),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser23",src:r(93460).Z,width:"575",height:"272"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 23: Insert Report"))))),(0,a.kt)("p",null,"The point to be noted here is that the dataset id (Ds ID) of the report added to the Reports table is the same as the dataset above."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"When the Trig Type box is double-clicked, the dialog window that opens is selected when the data will be sent, and the reading period in milliseconds is entered in the Period box. ")),(0,a.kt)("p",null,"\u2022\tTRG_OPT_DATA_CHANGED: Send on data change.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tTRG_OPT_QUALITY_CHANGED: Send on quailty change.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tTRG_OPT_DATA_UPDATE: Send when data is updated.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tTRG_OPT_INTEGRITY: Send periodically as a integrity.",(0,a.kt)("br",{parentName:"p"}),"\n","\u2022\tTRG_OPT_GI: Submit when general general interrogation arrives.           "),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser24",src:r(10544).Z,width:"565",height:"233"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 24: Trig Type Dialog Window"))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The import-export operations made from step 15 in the dataset reading section are repeated and the project is loaded into the device.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'It is seen that the values from the IED are transferred to the blocks and the "Dataset from report flag" block is 1.'))),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"61850-Browser25",src:r(87204).Z,width:"605",height:"243"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("center",null,"Figure 25: Result of Reading Report"))))))}g.isMDXComponent=!0},45787:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser1-4e3dd8bd430a5f3b2d5a9b92ddfc5805.png"},84536:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser10-9d11ccb7f8649307936cfbe03758cf9a.png"},52601:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser11-47a2191db721a65982ca5f22997aaa4d.png"},44411:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser12-b31339bbdb4f6b70681d4d42438938c0.png"},59661:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser13-d4d330529c29274788f1dab307946e3d.png"},5871:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser14-0b1fefb455ae1031c8f956975874fab8.png"},52135:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser15-d812449a635b96655f69cb4ecbfdcfc9.png"},91518:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser16-eef290c17de4689b5e46484d8b692f78.png"},5926:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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SjghjmtZjAPPIWKjEk6I40o4ISaTcEJExM5JOCEiYucknBARsXNu+HDas2cPIiJOoRs2nOTEERFxet2Q4YSIiNikhBMiInZOwgkRETsn4YSIiJ2TcEJExM5JOCEiYudsJJzaQm5fDB0PERHrtsXWrVv5hghVP/jl9l144YWIiFh45MiRSo1soxbz9UWesXB6xStegYg4895111212utvN+HUh9PDDz9sDh48aB588EHzwAMPWOWx9Mlz/vhh4XTgwAFExJnXr73+9jge/sYd5qfn/6r5v1OeZh4JBNBUh9PBgw+ZC6+9y/zh0hfNU9/9efOUd33e/MGufea8vV/KfsB3m/vvv9889NBDlX0IJ0TE4fq1198e5eF77zE/Xlow5pPHmK3Pe3QWQPWFwtSGkwTTGR+707zgg182b/z4Pea0a++3vv6yu81zz/2iecs/3my++tU7zb333lvZj3BCRByuX3v97WEe/s63zE8/eIIx//li8+fP/TnzscsuC46bynCSFyMrphfsusO885oHzV/f/JDZeevDVnn8FysPmGN3rpqz/vnT5s4776zsSzghIg7Xr73+tuvhu79m/ufma8zh+79jDn/3fvO/O19izKf/1Pzl7z3FfDirrbHwmcpwkveT5FJeb+9/m/P2HTIf+tJh809f+Z5VHkvf6y49YF60/Xpz0003VfYlnBARh+vXXn9bPfyRM82hv3m2MQ/8iXnw4mPMfX/1QmM+dZp5x8t+2ZxzzgeGBs9UhpPc8CDvMb3vsw/ZQLrsm983V9zzQ6s8lr6zb3zIPOm0z5qrrrqqsu/IcLphuznuuO3mhvIXdYPZftxxZvsNg18cIuI069ded/t7X99nvn/1h833LzjRHPj9J5vD/3KCMUdOMBef8Thz3UfOMu/54+ebc89dHBk6UxdO8kLkjjy5+WHxtkM2jFbu/ZH51MEfW+Wx9O28+ZB54js+Y6644orK/qNXTl4Y1cIKEXG69Wuvu73v3X9kfvT1F5sf3vdas//EXzLffd+xxtz5InP5ST9rjv+Fx5tfedazslXTOWbHjh019+7dW84zteEkd+W99cpvm0/cc5cNpVsP/8Qqj2UFdfLl3zIveM9VawinA+aG7ceZ47bfkG/v3jx4fGC32Tw3Z+YKN+8e/DIREadFv/a62586/c3Z6umlxnztRHP7C59ovvLKXzTm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"},63263:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser18-b1bd153a312f6673ff8372e5a12e170c.png"},15550:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser19-5f8dd52d76bdc805514fb0028c33ea2d.png"},85537:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser2-214c6bf619f46b54982b3245455c6a78.png"},53884:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser20-cb29018c9dc17e54e8345f2898a53ab9.png"},99918:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser21-e2d0615ca8f9c3d7b78cfcbc0b43940f.png"},14598:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser22-d1a4a53452833bda55f78df85286bfec.png"},93460:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser23-3b02e0b2b4a94421b89773812e01e0d3.png"},10544:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser24-7dd84d9a2b496e0fcda6932569a5a94e.png"},87204:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser25-bfc4209ffaeea19248265bf34752acf7.png"},66376:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser3-3b5283d7ca05ad9c10d5ad22bf8cd5a5.png"},18221:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser4-1d1cbb65e94c31bad51a9fb69323c5fe.png"},31786:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser5-aab54729a7354774aaa39a6643fca741.png"},74165:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser6-eef290c17de4689b5e46484d8b692f78.png"},10972:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser7-5f6969bac0ba0c03f5e9d687aa41f69e.png"},22501:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser8-2e1bc099cf6cd4f4567d55734ebad500.png"},65758:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/61850-Browser9-c29064ea00c9a12083846e6c2e0c0649.png"}}]);