"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9537],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"ViewPLUS SCADA Change Map Icons"},l=void 0,p={unversionedId:"ViewPLUS-SCADA-Change-Map-Icons",id:"ViewPLUS-SCADA-Change-Map-Icons",title:"ViewPLUS SCADA Change Map Icons",description:"Introduction",source:"@site/docs/ViewPLUS-SCADA-Change-Map-Icons.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Change-Map-Icons",permalink:"/tr/docs/ViewPLUS-SCADA-Change-Map-Icons",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Change-Map-Icons.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Change Map Icons"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Map Page",permalink:"/tr/docs/ViewPLUS-SCADA-Map-Page"},next:{title:"ViewPLUS SCADA Template Page",permalink:"/tr/docs/ViewPLUS-SCADA-Template-Page"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Create Category",id:"create-category",level:3},{value:"Add Marker Into The Map",id:"add-marker-into-the-map",level:3},{value:"Results",id:"results",level:3}],d={toc:s};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"ViewPLUS Scada has change icons feature according to tag value on the map, this article provide you how to do it."),(0,o.kt)("p",null,"Download ViewPLUS SCADA Map Icons Example from the following link:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.mikrodev.com/downloads/documentation/MapIcon_Example.zip"},"Map Icons Example")),(0,o.kt)("h3",{id:"create-category"},"Create Category"),(0,o.kt)("p",null,"You need create category to add icon images into the map."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mapicon1",src:n(14021).Z,width:"582",height:"416"}))),(0,o.kt)("p",null,"Click edit button to add category."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mapicon2",src:n(58290).Z,width:"605",height:"371"}))),(0,o.kt)("p",null,"Click add new category button. Type category name and load image.\nIn this way, map icons using as alarm or other states indicator with different color and shapes."),(0,o.kt)("h3",{id:"add-marker-into-the-map"},"Add Marker Into The Map"),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mapicon3",src:n(97398).Z,width:"1128",height:"605"}))),(0,o.kt)("p",null,"Add run function code like below for each marker in selected marker properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function onCheckMarkerIcon(){\nvar $Category ="WHITE";         \nif (${1} == 3 )\n   $Category="YELLOW";          \nelse if(${1} == 2)\n   $Category="BLACK";\nelse if(${1} == 1)\n   $Category="RED1";\n\nreturn $Category;\n}\n')),(0,o.kt)("p",null,"${1} meaning the tag which tag id is 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'   var $Category ="WHITE";\n')),(0,o.kt)("p",null,"Default image setted as above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'if (${1} == 3 )\n   $Category="YELLOW"; \n')),(0,o.kt)("p",null,'If tag value equals to 3 then icon will shows image  which  name "YELLOW"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'else if(${1} == 2)\n   $Category="BLACK";\n')),(0,o.kt)("p",null,'If tag value equals to 2 then icon will shows image  which  name "BLACK"'),(0,o.kt)("p",null,"You can insert more else if lines into the run function code for add more image."),(0,o.kt)("h3",{id:"results"},"Results"),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mapicon4",src:n(88307).Z,width:"1506",height:"753"}))),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mapicon5",src:n(38362).Z,width:"1512",height:"752"}))))}m.isMDXComponent=!0},14021:function(e,t,n){t.Z=n.p+"assets/images/mapicon1-7b1b274eb2f379df4b414c538223e5ff.png"},58290:function(e,t,n){t.Z=n.p+"assets/images/mapicon2-c32b5669d55b39b2da7e17e41e44bbfb.png"},97398:function(e,t,n){t.Z=n.p+"assets/images/mapicon3-e17f375e6ce4324a25517edd0fcb223f.png"},88307:function(e,t,n){t.Z=n.p+"assets/images/mapicon4-22c51d519fa812d32440881b3e952cd7.png"},38362:function(e,t,n){t.Z=n.p+"assets/images/mapicon5-bf567e8e33c00ba0e287243af4b75376.png"}}]);