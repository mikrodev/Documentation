"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8999],{11390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const o={title:"ViewPLUS SCADA Template Page"},s=void 0,i={unversionedId:"ViewPLUS-SCADA-Template-Page",id:"ViewPLUS-SCADA-Template-Page",title:"ViewPLUS SCADA Template Page",description:"In ViewPLUS Scada application, data of more than one point of the same type can be displayed with a page design.",source:"@site/docs/ViewPLUS-SCADA-Template-Page.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Template-Page",permalink:"/docs/ViewPLUS-SCADA-Template-Page",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Template-Page.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Template Page"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Change Map Icons",permalink:"/docs/ViewPLUS-SCADA-Change-Map-Icons"},next:{title:"ViewPLUS SCADA Example Projects",permalink:"/docs/ViewPLUS-SCADA-Example-Projects"}},l={},c=[{value:"Run Function",id:"run-function",level:3},{value:"Label Creation",id:"label-creation",level:3},{value:"Using Run Function",id:"using-run-function",level:3},{value:"Associating Scada Component with Reference Page",id:"associating-scada-component-with-reference-page",level:3},{value:"Generating a Report on the Reference Page",id:"generating-a-report-on-the-reference-page",level:3},{value:"Naming Scada Components on the Reference Page",id:"naming-scada-components-on-the-reference-page",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In ViewPLUS Scada application, data of more than one point of the same type can be displayed with a page design."),(0,r.kt)("p",null,"For example, if a relay with the same features is used with different labels in more than one place in your scada project; just create a single relay reference page. To use the reference page you created on relays with different labels; You need to redirect to the reference page through the relay scada component in the project and use the run function to assign the labels of the relays."),(0,r.kt)("h3",{id:"run-function"},"Run Function"),(0,r.kt)("p",null,"Run Function definition; in the bottom right of the ViewPLUS editor."),(0,r.kt)("p",null,"Object Properties -> Events -> Run Function section is defined."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template1",src:n(78853).Z,width:"298",height:"293"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 1: Run Function Description"))))),(0,r.kt)("h3",{id:"label-creation"},"Label Creation"),(0,r.kt)("p",null,"The Run Function runs on tags defined in the same type. Therefore, in the creation of labels, attention should be paid to the fact that the first parts are variable and the last parts are the same."),(0,r.kt)("p",null,"For example, the labels of the A Relay on the ADP1 panel;"),(0,r.kt)("p",null,"ADP1_A_REF615_ActivePower",(0,r.kt)("br",{parentName:"p"}),"\n","ADP1_A_REF615_PhaseL12Voltage",(0,r.kt)("br",{parentName:"p"}),"\n","ADP1_A_REF615_PhaseL1Current",(0,r.kt)("br",{parentName:"p"}),"\n","ADP1_A_REF615_PhaseL1Voltage if defined as,"),(0,r.kt)("p",null,"Tags to Relay B on ADP2 panel;"),(0,r.kt)("p",null,"ADP2_B_REF615_ActivePower",(0,r.kt)("br",{parentName:"p"}),"\n","ADP2_B_REF615_PhaseL12Voltage",(0,r.kt)("br",{parentName:"p"}),"\n","ADP2_B_REF615_PhaseL1Current",(0,r.kt)("br",{parentName:"p"}),"\n","ADP2_B_REF615_PhaseL1Voltage should be defined as.   "),(0,r.kt)("h3",{id:"using-run-function"},"Using Run Function"),(0,r.kt)("p",null,"For the Run Function, first the sample reference page is created and label assignments are made."),(0,r.kt)("p",null,"(This page should only contain scada components that will be called on other pages.)"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template2",src:n(66438).Z,width:"549",height:"562"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 2: Sample Template Page"))))),(0,r.kt)("h3",{id:"associating-scada-component-with-reference-page"},"Associating Scada Component with Reference Page"),(0,r.kt)("p",null,"Via the scada component to be associated with the reference page"),(0,r.kt)("p",null,"Object Properties -> Events -> Event Action (Go to Page) -> Go to Page (Created reference page is selected.) -> Run Function (data1 = data2)* "),(0,r.kt)("p",null,"(*replaces tag names starting with data 1 on the redirected page with a tag named data2.)"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template3",src:n(71314).Z,width:"505",height:"279"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 3: Run Function Example"))))),(0,r.kt)("p",null,"In the example in Figure 3, scada components labeled B500KOSK_REF615_TSKB_H01 on the B500_REF615_Reference page are used with the label B500KAZAN_REF615_IST2_H03 on a different page."),(0,r.kt)("h3",{id:"generating-a-report-on-the-reference-page"},"Generating a Report on the Reference Page"),(0,r.kt)("p",null,"The report created about the scada components on the reference page can be used on different tags without defining it through the Scada Reporter."),(0,r.kt)("p",null,"First, a report is created on the reference page."),(0,r.kt)("p",null,"Select ViewPLUS Editor -> Tools -> Start SCADA Reporter."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template4",src:n(85859).Z,width:"296",height:"416"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 4: Scada Starting the Reporter"))))),(0,r.kt)("p",null,"Labels to be reported defined on the reference page are selected."),(0,r.kt)("p",null,"Scada Reporter -> Tag Logs -> All Tags -> (Tag is selected.) -> Start Reporting"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template5",src:n(27856).Z,width:"1277",height:"794"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 5: Scada Reporter Creating Report"))))),(0,r.kt)("p",null,"According to the reporting properties, the reports of the tags are saved. The report created from the saved filters section is selected on the right, and the link is copied with a right click."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template6",src:n(89400).Z,width:"1600",height:"860"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 6: Copying the Link of the Generated Report"))))),(0,r.kt)("p",null,"Scada component is created for reports on the reference page so that the generated report can be redirected to the link. The copied link is pasted into the created Scada component."),(0,r.kt)("p",null,"For automatic report generation in different tag types, ${parent:} must be written in the Run Function section."),(0,r.kt)("p",null,"Object Properties -> Events -> Event Action (Go to Link) -> Run Function ( ${parent:} ) -> Add Link (checked) -> Web Link (the copied report link is pasted in this section.)"),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template7",src:n(74457).Z,width:"292",height:"280"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 7: Associating the Reporting Link with the Scada Component"))))),(0,r.kt)("h3",{id:"naming-scada-components-on-the-reference-page"},"Naming Scada Components on the Reference Page"),(0,r.kt)("p",null,"All scada components can be specifically named by simply naming them on the reference page."),(0,r.kt)("p",null,"The scada component you will use to add text"),(0,r.kt)("p",null,"In the Object Properties -> Constants -> Text Content section, the expression \u201c:TAGDESC\u201d should be written."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template8",src:n(40813).Z,width:"928",height:"597"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 8: Scada Component Naming"))))),(0,r.kt)("p",null,"To assign a text tag to a scada component"),(0,r.kt)("p",null,"You need to choose any of the tags on the reference page from the Tags -> Text Tag section."),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template9",src:n(55750).Z,width:"1005",height:"628"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 9: Assigning a Text Label"))))),(0,r.kt)("p",null,"To write the description of the tag that we are assigning."),(0,r.kt)("p",null,'Tag Channel Editor -> Tag Name (The tag you use in the Text Tag should be written) -> The name of the scada component should be written in the Tag section -> General -> Description section. This definition should be made within the different tag definitions called with the reference page. After the definition is made, the name assignment is made for all scada components created with the reference page of the scada component that says ":TAGDESC".'),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template10",src:n(7873).Z,width:"1458",height:"443"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("center",null,"Figure 10: Label Identification"))))),(0,r.kt)("p",null,"For example, to define a tag on the reference page If B500KOSK_REF615_TSKB_H01_PhaseL1Current_104 tag is used;"),(0,r.kt)("p",null,"A definition should be added to the PhaseL1Current_104 section of the other tags called with the reference page."),(0,r.kt)("p",null,"(B500KOSK_REF615_TSKB_H02_PhaseL1Current_104, B500KOSK_REF615_TSKB_H03_PhaseL1Current_104, ... vb. tags should be added to the description.)"))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,g=f["".concat(l,".").concat(h)]||f[h]||u[h]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78853:function(e,t){t.Z="data:image/png;base64,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"},7873:function(e,t,n){t.Z=n.p+"assets/images/template10-35e35ff2c37742c2db8e8e8bbda5f34c.png"},66438:function(e,t,n){t.Z=n.p+"assets/images/template2-cc5c96bf3aeb7ad9d63b8ccf47b0cb00.png"},71314:function(e,t,n){t.Z=n.p+"assets/images/template3-bef9a5eec2747dee0f3a369b77565fe0.png"},85859:function(e,t,n){t.Z=n.p+"assets/images/template4-1bd6562927d69c6c18e0500d91c45691.png"},27856:function(e,t,n){t.Z=n.p+"assets/images/template5-a15e5ad879c05bba756d28c731fef74b.png"},89400:function(e,t,n){t.Z=n.p+"assets/images/template6-8855fb243fbe148c994fec3a302b0eaa.png"},74457:function(e,t){t.Z="data:image/png;base64,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"},40813:function(e,t,n){t.Z=n.p+"assets/images/template8-a37b2691585a57d3f1116f63672844e0.png"},55750:function(e,t,n){t.Z=n.p+"assets/images/template9-d21a4007fe3ae4eafb87518288551d2f.png"}}]);