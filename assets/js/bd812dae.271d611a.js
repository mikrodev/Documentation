"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4273],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94418:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],s={title:"ViewPLUS SCADA Server"},l=void 0,c={unversionedId:"ViewPLUS-SCADA-Server",id:"ViewPLUS-SCADA-Server",title:"ViewPLUS SCADA Server",description:"Overview",source:"@site/docs/ViewPLUS-SCADA-Server.md",sourceDirName:".",slug:"/ViewPLUS-SCADA-Server",permalink:"/docs/ViewPLUS-SCADA-Server",editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/ViewPLUS-SCADA-Server.md",tags:[],version:"current",frontMatter:{title:"ViewPLUS SCADA Server"},sidebar:"Documents",previous:{title:"ViewPLUS SCADA Editor",permalink:"/docs/ViewPLUS-SCADA-Editor"},next:{title:"ViewPLUS SCADA Client",permalink:"/docs/ViewPLUS-SCADA-Client"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Server Home Screen",id:"server-home-screen",level:4},{value:"Server Tag Monitor Screen",id:"server-tag-monitor-screen",level:4},{value:"Server Auto Start",id:"server-auto-start",level:2},{value:"Windows Platform",id:"windows-platform",level:3},{value:"Email Server Settings",id:"email-server-settings",level:2},{value:"Create Server Runtime",id:"create-server-runtime",level:2},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"Active Sessions",id:"active-sessions",level:2},{value:"White List",id:"white-list",level:2},{value:"Black List",id:"black-list",level:2},{value:"Client Settings",id:"client-settings",level:2},{value:"Enable Client Auto Loggoff",id:"enable-client-auto-loggoff",level:4},{value:"Don\u2019t allow multiple connection for same user",id:"dont-allow-multiple-connection-for-same-user",level:4},{value:"Enable user blacklist after 3 failed login attempts",id:"enable-user-blacklist-after-3-failed-login-attempts",level:4},{value:"Parallel Redundant Operating Mode",id:"parallel-redundant-operating-mode",level:2},{value:"Installation Steps",id:"installation-steps",level:3},{value:"Synchronization of the Project on the Backup Server",id:"synchronization-of-the-project-on-the-backup-server",level:3},{value:"Information",id:"information",level:2}],u={toc:h};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,'The server software must be associated with a project in order to be able to run. When run from the Editor menu, the currently open project is used by the server. To run the server independently from the editor, select "Editor > Select Tools > Create Server Files to specify a folder and copy the server files to this folder. The "ServerEngine" script is used to launch the server. The "ServerEngine" script looks for a folder named "Project" in the same folder as the default behavior.'),(0,o.kt)("p",null,'The "Project" folder contains special files created by the editor. The main ones are; "MicrodevScada.ini", "Project.zip", "project pages with .sca extension", and component files. The server reads the information in the "MikrodevScada.ini" file, such as where to connect to the database and where to keep the records.'),(0,o.kt)("p",null,"When the SCADA server is started for the first time, the user may be prompted to enter the database connection information. The server can open a project in a different folder by using command line parameters below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u201cServerEngine \u2013dir \u201cC:\\Users\\yg\\Desktop\\server\\projectname\u201c \u201d\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-dir : Project folder\n")),(0,o.kt)("h4",{id:"server-home-screen"},"Server Home Screen"),(0,o.kt)("p",null,'The main screen of the server has a console on which general system logs can be viewed. This console shows important server changes. More detailed server logs are saved in a separate file. When the "Start" button is pressed, the server tries to connect to the field devices. After the connection is established, the server opens a port to which clients can connect and waits for incoming connections. When the server starts reading data from the field, it records them on the database server as specified in the project settings. Instantaneous readings of field-readable data can be viewed on the tag monitoring screen.'),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-09",src:r(65065).Z,width:"871",height:"660"}))),(0,o.kt)("h4",{id:"server-tag-monitor-screen"},"Server Tag Monitor Screen"),(0,o.kt)("p",null,"The instantaneous values \u200b\u200bon the tag monitoring screen can be filtered according to parameters such as tagID, tag name, channel name, device address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'If there is a text "dced" next to the numeric data shown in the "Value" field, this indicates a connection problem between the device and the SCADA server\n')),(0,o.kt)("p",null,"Information about the protocol drivers running on the drive monitoring screen is given. Information about connection problems can be obtained from this console."),(0,o.kt)("p",null,"The alarm screen allows you to observe the history of alarms generated in the system and the current alarms."),(0,o.kt)("h2",{id:"server-auto-start"},"Server Auto Start"),(0,o.kt)("h3",{id:"windows-platform"},"Windows Platform"),(0,o.kt)("p",null,'Follow these steps to start the server automatically (for a sample project named "TestProject"):'),(0,o.kt)("p",null,'Create a shortcut on the desktop for the "ServerEngine.exe" program in the installation folder of ViewPLUS.\nShortcut Creation'),(0,o.kt)("p",null,'Right-click the created shortcut and select "Properties".\nChange the field marked "Target" to the following (Change the file path according to your system):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'C:\\Users\\<User Name>\\TestProject" -start C:\\Program Files (x86)\\ViewPLUS\\bin\\ServerEngine.exe"\n')),(0,o.kt)("p",null,"Then copy this shortcut to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"C:\\Users\\<User Name>\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"\n')),(0,o.kt)("p",null,"The server will now start automatically when the user logs in to the system."),(0,o.kt)("p",null,"Auto startup can be accomplished by copying the OperatorClient shortcut to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"C:\\Users\\<User Name>\\AppData\\ Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"\n')),(0,o.kt)("h2",{id:"email-server-settings"},"Email Server Settings"),(0,o.kt)("p",null,'E-mail can be sent in case of an alarm to the user whose "e-mail send option" is marked as active from the user manager. For this, e-mail configuration settings must be made on the server. In addition, the smtp server to be used should allow ',(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/6010255?hl=en"},'"less secure application access"'),'. The configuration file "ServerEngine.ini" where the e-mail server settings can be found in the following folder:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\Users\\<user name>\\AppData\\Roaming\\Mikrodev\\ScadaServer\\<project name>\\ServerEngine.ini \n")),(0,o.kt)("p",null,"In this file, the following variables must be set correctly under ","[SMTP]",":"),(0,o.kt)("p",null,"[SMTP]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SMTP_user =<email username>\nSMTP_pwd=<e-mail password>\nSMTP_host=<smtp server address>\nSMTP_port=<smtp server port>\nSMTP_mailDelay=<The time (in seconds) to wait for an e-mail to be sent after an alarm condition(in seconds)>\n")),(0,o.kt)("h2",{id:"create-server-runtime"},"Create Server Runtime"),(0,o.kt)("p",null,'You can also run the developed SCADA project without installing ViewPLUS on a different computer. By selecting "Create Server Files" from the "Tools" menu for this, you can collect the files in a folder for project and server work. By moving this folder, it is possible to run your project on different server machines.'),(0,o.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,o.kt)("p",null,"log_server.txt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"On Windows systems, it is located in the following folder:   C:\\Users\\<username>\\AppData\\Roaming\\Mikrodev\\ScadaServer\\<project name>  \nIt is the file where the detailed server logs are found\n")),(0,o.kt)("p",null,"log_serverstarter.txt :"),(0,o.kt)("p",null,"The file that contains logs of the server monitor software"),(0,o.kt)("p",null,"OperatorClient.ini :"),(0,o.kt)("p",null,"ServerEngine.ini:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"On Windows systems, it is located in the following folder:  \nC:\\Users\\<user name>\\AppData\\Mikrodev\\ScadaServer\\<project name>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Login]> ServerAdr              : Database address\n\n[Login]> DbName                 : Database name\n\n[Login]> DbUserName             : Database user name\n\n[Login]> DbPassword             : Database password\n\n[Connection] > Port             : The default server port is 560. A different port can be selected by changing this parameter.\n\n[Logging] > IsLogging           : Data logging can be enabled / disabled(true/false)\n\n[Logging] > IsLoggingD\u0131sconnections: You can choose whether to log connection failures\n\n[REDUNDANCY]> ServerMode        : Determines the mode of operation. This value can be PRIMARY or BACKUP. When this mode is set to BACKUP, the server communicates with the PRIMARY server to form a redundant structure.\n\n[REDUNDANCY]> PrimaryIP         : The PRIMARY server IP address to which the server in BACKUP mode will connect is written in this field.\n\n[REDUNDANCY]> PrimaryPORT       : The port number of the PRIMARY server to which the server in BACKUP mode will connect is written in this field.\n\n[REDUNDANCY]> Timeout           : PRIMARY is the value in seconds that specifies how long the server will remain active if the BACKUP server is down.\n")),(0,o.kt)("h2",{id:"active-sessions"},"Active Sessions"),(0,o.kt)("p",null,"It shows the information of the people who log on in the server and client environment. Contains remote IP, user, session key, last msg time informations."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-01",src:r(6692).Z,width:"516",height:"487"}))),(0,o.kt)("h2",{id:"white-list"},"White List"),(0,o.kt)("p",null,"This will allow connections only from the specifed IP adresses."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-02",src:r(30463).Z,width:"446",height:"434"}))),(0,o.kt)("p",null,"Enable white list filtering. By clicking add an IP address, IP address is entered into the window displayed."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-03",src:r(61335).Z,width:"599",height:"499"}))),(0,o.kt)("h2",{id:"black-list"},"Black List"),(0,o.kt)("p",null,"By clicking add an IP address, IP address is entered into the window displayed. The IP addresses entered are blocked and access to the server is prohibited."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-04",src:r(90433).Z,width:"369",height:"495"}))),(0,o.kt)("h2",{id:"client-settings"},"Client Settings"),(0,o.kt)("h4",{id:"enable-client-auto-loggoff"},"Enable Client Auto Loggoff"),(0,o.kt)("p",null,"If no operations are performed on the client screen for the specified time in minutes when enable\nclient auto loggoff is marked, the session is closed automatically."),(0,o.kt)("h4",{id:"dont-allow-multiple-connection-for-same-user"},"Don\u2019t allow multiple connection for same user"),(0,o.kt)("p",null,"When don\u2019t allow multiple connection for same user is marked, multiple logins are prohibited on the\nclient screen with the same user."),(0,o.kt)("h4",{id:"enable-user-blacklist-after-3-failed-login-attempts"},"Enable user blacklist after 3 failed login attempts"),(0,o.kt)("p",null,"If the user information is entered incorrectly 3 times on the client screen when enable user blacklist\nafter 3 failed login attempts is marked, the IP address is automatically black list."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-05",src:r(40895).Z,width:"528",height:"466"}))),(0,o.kt)("h2",{id:"parallel-redundant-operating-mode"},"Parallel Redundant Operating Mode"),(0,o.kt)("p",null,'ViewPLUS SCADA software can run in "Parallel Redundant Mode" on a server cluster consisting of several computers. In this case, the server downtime can be reduced to the minimum. Redundant mode servers must be on the same local area network.'),(0,o.kt)("h3",{id:"installation-steps"},"Installation Steps"),(0,o.kt)("p",null,"While ViewPLUS is running in this mode, both 2 servers (PRIMARY, BACKUP) must be able to access the project database over the network.\nAt the same time, project files must be present on the server computers and they must be up to date (same as each other). To ensure this synchronization, a version control tool such as SVN can be used or the files can be moved manually.\nIn order for the backup and main server to communicate, the main server must have port 51313 open on the computer. Make sure that this port is allowed in the firewall settings.\nIn the next step, the following configuration settings must be made in the ScadaServer.ini files on the primary server (PRIMARY) and the backup server (BACKUP):\nPrimary server(PRIMARY):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[REDUNDANCY]\nServerMode=PRIMARY\nPrimaryIP=192.168.2.201\nPrimaryPORT=51314\nTimeout=60\nsize=0\n")),(0,o.kt)("p",null,"Backup server(BACKUP):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[REDUNDANCY]\nServerMode=BACKUP\nPrimaryIP=192.168.2.201\nPrimaryPORT=51314\nTimeout=60\nsize=0\n")),(0,o.kt)("p",null,"ServerMode: Specifies the backup operation mode. This value can be PRIMARY or BACKUP. When this mode is set to BACKUP, the server communicates with the PRIMARY server to create a redundant structure. PrimaryIP: The PRIMARY server IP address to which the server in BACKUP mode will connect is written in this field. PrimaryPORT: The port number of the PRIMARY server to which the server in BACKUP mode will connect is written in this field. Timeout: Is the value in seconds that specifies the time PRIMARY server is out of service before the BACKUP server become active."),(0,o.kt)("p",null,'In the example, the IP address of the primary server (PRIMARY) is a fixed IP of "192.168.2.201". The IP address of the primary server in the system to be installed must be a static IP in this way, variable IP from a DHCP server should not be used. The port number set in PrimaryPORT can be set differently according to security requirements. In this case, the correct port number should be entered by modifying every 2 configuration files.'),(0,o.kt)("p",null,"After the configuration process is completed, first the primary and then the backup servers are started . From this moment on, the backup server will switch on and off in case of a shutdown, watching the primary server. When the primary server becomes active again, the backup server will stop itself by switching to the watching mode."),(0,o.kt)("h3",{id:"synchronization-of-the-project-on-the-backup-server"},"Synchronization of the Project on the Backup Server"),(0,o.kt)("p",null,"When the backup server starts running, the server will use the files in the project folder. Therefore, if these files are not synchronized with the files on the main server, an older version of the project will be sent to the clients. A synchronization mechanism must be established to prevent this from happening."),(0,o.kt)("p",null,"Assuming that the project files are on the SVN version control server as described earlier, you can provide automatic synchronization as follows"),(0,o.kt)("p",null,"We create a batch script that will trigger SVN synchronization. In this example, the file name is updateSvn.bat. Modify the contents of the file according to the file paths in your system to make it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CD D:\\MIKRODEV\\Projects\\DepoProject\n"C:\\Program Files\\TortoiseSVN\\bin\\svn.exe" update\n')),(0,o.kt)("p",null,"Every time we run this script, it will synchronize the project folder with that of the SVN server."),(0,o.kt)("p",null,'In the next step, this script will be configured to run at specific intervals. For this we will use the Windows "Schedule Tasks" tool.\nBy following the steps below, the synchronization procedure will be run every 10 minutes. You can configure this time interval as you like.'),(0,o.kt)("p",null,"Task Scheduler"),(0,o.kt)("p",null,"Create a new task"),(0,o.kt)("p",null,"Timing Programming"),(0,o.kt)("p",null,"Set timing settings. In this example we choose to work once every 10 minutes."),(0,o.kt)("p",null,"Script Selection"),(0,o.kt)("p",null,"Finally, associate the .bat file you created with the timer."),(0,o.kt)("p",null,"If you confirm the timer, the backup server will synchronize itself every 10 minutes with the project on the main server."),(0,o.kt)("p",null,"In case of failure, downtime or excessive traffic at the primary server, a redundant server can be implemented to take the primary server's place. When backup server is selected in redundancy mode, primary server IP and redundant server activation timeout are entered."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-06",src:r(42321).Z,width:"495",height:"432"}))),(0,o.kt)("h2",{id:"information"},"Information"),(0,o.kt)("p",null,"The Information tab shows the capacity information that the project occupies in the database."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-07",src:r(87877).Z,width:"493",height:"430"}))),(0,o.kt)("p",null,"The size of the project in the PostgreSQL database is shown below."),(0,o.kt)("center",null,(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"server-08",src:r(16164).Z,width:"718",height:"351"}))))}p.isMDXComponent=!0},6692:function(e,t,r){t.Z=r.p+"assets/images/server-01-21082a6e40be8e65f164e12d2ae71acc.png"},30463:function(e,t,r){t.Z=r.p+"assets/images/server-02-cfcc15b50d3bcffaba260708389f125b.png"},61335:function(e,t,r){t.Z=r.p+"assets/images/server-03-f08216b05c54db1a04e3f65d3cc22640.png"},90433:function(e,t,r){t.Z=r.p+"assets/images/server-04-8a7701f292dc2bdc3003dff703531705.png"},40895:function(e,t,r){t.Z=r.p+"assets/images/server-05-db41f05cc88e52e1a58ad85c3a8dac94.png"},42321:function(e,t,r){t.Z=r.p+"assets/images/server-06-0bb7eabc9d1654d47f80808259f79d84.png"},87877:function(e,t,r){t.Z=r.p+"assets/images/server-07-7c66956649b53981109743e6e8a3f4fa.png"},16164:function(e,t,r){t.Z=r.p+"assets/images/server-08-23712bbbc82e6c986a60c5a256a03a0f.png"},65065:function(e,t,r){t.Z=r.p+"assets/images/server-09-7700e855dafa52870548de7458f2c27e.png"}}]);