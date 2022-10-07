"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2891],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,u=p["".concat(l,".").concat(g)]||p[g]||h[g]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},22289:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"ViewPLUS SCADA Reporting"},l=void 0,c={unversionedId:"ViewPLUS-SCADA-Reporting",id:"ViewPLUS-SCADA-Reporting",title:"ViewPLUS SCADA Reporting",description:"Overview",source:"@site/docs/ViewPLUS-SCADA-Reporting.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Reporting",permalink:"/docs/ViewPLUS-SCADA-Reporting",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Reporting.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Reporting"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Web API",permalink:"/docs/ViewPLUS-SCADA-WebApi"},next:{title:"ViewPLUS SCADA Map Page",permalink:"/docs/ViewPLUS-SCADA-Map-Page"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Tag Logs",id:"tag-logs",level:2},{value:"Selection of Tags to Log",id:"selection-of-tags-to-log",level:3},{value:"Viewing Tag Log",id:"viewing-tag-log",level:3},{value:"Selecting a Time Interval",id:"selecting-a-time-interval",level:4},{value:"Selecting Data Type",id:"selecting-data-type",level:4},{value:"Managing Charts",id:"managing-charts",level:4},{value:"Saving Charts",id:"saving-charts",level:4},{value:"Exporting Data",id:"exporting-data",level:3},{value:"Saving Filters",id:"saving-filters",level:3},{value:"Calling Saved Filter Queries",id:"calling-saved-filter-queries",level:4},{value:"Creating Reporting Command",id:"creating-reporting-command",level:2}],p={toc:h};function g(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can use the Reporter to view and analyze trend data that is logged by the SCADA software. Reporting is done on 3 basic record types. These are tag logs, alarm logs and event logs."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report1",src:a(75882).Z,width:"1352",height:"721"}))),(0,i.kt)("h2",{id:"tag-logs"},"Tag Logs"),(0,i.kt)("p",null,"Tag log is the data that has been recorded, depending on the logging configuration of the tag. Output can be generated in different formats by filtering according to location, time and other parameters of the tag."),(0,i.kt)("h3",{id:"selection-of-tags-to-log"},"Selection of Tags to Log"),(0,i.kt)("p",null,"On the tags selection screen, tags under a station can be grouped or all can be selected. If you use the tags option under the station, a list of all the stations appears."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report2",src:a(20777).Z,width:"1366",height:"727"}))),(0,i.kt)("p",null,"Tags under the station can be listed by clicking on the station name."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report3",src:a(21603).Z,width:"675",height:"388"}))),(0,i.kt)("p",null,'"All Tags" option is selected to make selection through all tags.'),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report4",src:a(55289).Z,width:"661",height:"422"}))),(0,i.kt)("p",null,'Filters can be made on the tag list in different ways according to the tag properties. Tags to be reported from the list in the left panel are selected by double clicking. The selected tags are displayed in the panel on the right. To delete a specific tag from the right panel, select the tag and press the "Delete" key on the keyboard. To delete all of the tags, select "Clear List".'),(0,i.kt)("h3",{id:"viewing-tag-log"},"Viewing Tag Log"),(0,i.kt)("p",null,'When the report sheet is first opened, the values of the selected tags are displayed graphically for a specific time interval. "Table View" can be selected to display the data on table form . Different choices can be made regarding the time range and type of data shown.'),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report5",src:a(61296).Z,width:"605",height:"340"}))),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report6",src:a(34017).Z,width:"605",height:"340"}))),(0,i.kt)("h4",{id:"selecting-a-time-interval"},"Selecting a Time Interval"),(0,i.kt)("p",null,"The time range of the displayed data can be selected in 3 different ways."),(0,i.kt)("p",null,'A) Interval : 2 dates are selected\nB) Within the last:  Hour, day, week, etc. are selected and the backward time from current date/time is calculated.\nC) On Time/Date: An exact date can be selected , or a time value could be added forwards or backwards to this date. For example, "This Day - 5", means "5 days ago". If the date is selected and time unit is "Month"; the month of that date is selected as the time interval.'),(0,i.kt)("h4",{id:"selecting-data-type"},"Selecting Data Type"),(0,i.kt)("p",null,"The type of data to be displayed can be statistical value as well as the value of the data itself."),(0,i.kt)("p",null,"A) All Data: Shown  the actual value of the data that has been logged\nB) Statistics: Displays the mean, total, maximum, minimum, change and median values of the data for the selected time periods. For example, if the hourly maximums in a daily time interval are selected, the time interval is divided into hourly slices to produce an output consisting of 24 points."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report7",src:a(28108).Z,width:"605",height:"340"}))),(0,i.kt)("h4",{id:"managing-charts"},"Managing Charts"),(0,i.kt)("p",null,"Show/hide Legend button: Shows or shows the name of the plotted tag and descriptions that show line color in the upper right corner of the chart Add a New Chart: Adds a new chart object that you can compare the data in the main chart with the previous time periods. The added chart is displayed synchronously with the main chart according to the determined time interval."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report8",src:a(89557).Z,width:"605",height:"340"}))),(0,i.kt)("p",null,"If the data belonging to the selected item in the range defined on the chart is present, this data is indicated by a point. The points shown can be connected to each other in different ways. Underneath the chart is the charting properties menu for each individual chart. Through this menu, the following operations can be performed"),(0,i.kt)("p",null,"A) Show / hide chart: This line can be hidden and shown with this button\nB) Charged / unloaded: Below of the line related to the tag is filled in integral. It may be easier to compare with other tags in this way.\nC) Merge Points: The points indicated by the item data can be merged into different ways."),(0,i.kt)("center",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report9",src:a(49799).Z,width:"651",height:"310"}))),(0,i.kt)("h4",{id:"saving-charts"},"Saving Charts"),(0,i.kt)("p",null,'According to the selected parameters, the chart can be saved in an image file in "png" format. Use the "Save Chart " button in the left panel.'),(0,i.kt)("h3",{id:"exporting-data"},"Exporting Data"),(0,i.kt)("p",null,'The data according to the selected parameters can be exported in various formats. For this, firstly the table view button is pressed to create a data table. By using the buttons "html, xml, xslx, csv" located at the top of the table view screen, the data in the table is converted to these formats and stored.'),(0,i.kt)("h3",{id:"saving-filters"},"Saving Filters"),(0,i.kt)("p",null,'The parameters selected to create the data can be saved, and then the same filter can be applied again when needed. The parameters created for this should be applied at least once (Apply Button). After doing this, select "Save this filter" and a name will be given to the filter.The filters are saved for user account. The user can reach these filters from any location. The saved filter can be applied from the saved filters menu on the right side of the screen.'),(0,i.kt)("h4",{id:"calling-saved-filter-queries"},"Calling Saved Filter Queries"),(0,i.kt)("p",null,"When the filters in this menu are copied by right clicking with the mouse, the content of the filter is copied to the clipboard. This copied content can be linked to objects on the SCADA Editor screen. When clicked on the related object on this screen, the report screen opens and the predefined filter is run."),(0,i.kt)("h2",{id:"creating-reporting-command"},"Creating Reporting Command"),(0,i.kt)("p",null,'It is possible to create the report output in the desired format by calling the created filters through the reporting command line. For this, it is enough to give the command parameters required for the reporting application. Using this feature, it is possible to create automatic reports at certain time intervals via the "Task Scheduler" of the Windows operating system.'),(0,i.kt)("p",null,'ScadaReporter.exe -database modpollread -user postgres -password pwd123 -server localhost -port 5432 -query twohours -format csv -output "C:\\Users\\yg\\Documents\\Reports\\Last2Hours"\n-database   Name of the project database (same name as project)\n-user      Database user name\n-password  Database user password\n-server    Database ip address\n-port      Database connection port\n-tnsname   tns name for Oracle databases\n-format    Report output form. Possible values are html, csv, xlsx, xml dir\n-query     The name of the filter saved in the report. This parameter is required for the report command. If not given, we do not produce a report; The reporting interface opens\n-output    The path and name of the file to be exported.'))}g.isMDXComponent=!0},75882:function(e,t,a){t.Z=a.p+"assets/images/report1-3708198841acc448b80b9067975084db.png"},20777:function(e,t,a){t.Z=a.p+"assets/images/report2-748124932abb0561eaaf5b1614de5dfa.png"},21603:function(e,t,a){t.Z=a.p+"assets/images/report3-b773a1fb30c9014dba846921d24976d2.png"},55289:function(e,t,a){t.Z=a.p+"assets/images/report4-5302a94ff80d99b7f8b6c779f4e46d44.png"},61296:function(e,t,a){t.Z=a.p+"assets/images/report5-1eb3e7cc907ac46f50c940fd809969a7.png"},34017:function(e,t,a){t.Z=a.p+"assets/images/report6-983d530c270e2ad3841e344e47f752d4.png"},28108:function(e,t,a){t.Z=a.p+"assets/images/report7-9e09ff98dab07697e9891d1cd1192c2c.png"},89557:function(e,t,a){t.Z=a.p+"assets/images/report8-a2614f673dd113870a2f66ac203b26c5.png"},49799:function(e,t,a){t.Z=a.p+"assets/images/report9-a0caff614d2a7df3ada2b8c31d85becb.png"}}]);