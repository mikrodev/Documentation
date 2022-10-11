"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[184],{76720:function(e,t,o){o.r(t),o.d(t,{assets:function(){return r},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var l=o(83117),n=(o(67294),o(3905));const i={},s=void 0,a={unversionedId:"Block-Descriptions-Notes",id:"Block-Descriptions-Notes",title:"Block-Descriptions-Notes",description:"Physical I/O Blocks",source:"@site/docs/Block-Descriptions-Notes.md",sourceDirName:".",slug:"/Block-Descriptions-Notes",permalink:"/tr/docs/Block-Descriptions-Notes",draft:!1,editUrl:"https://github.com/mikrodev/Documentation/edit/master/documentation/docs/Block-Descriptions-Notes.md",tags:[],version:"current",frontMatter:{},sidebar:"Documents",previous:{title:"GSM IP Kullan\u0131m\u0131",permalink:"/tr/docs/GSM-IP-Usage-Application-Notes"}},r={},u=[{value:"Physical I/O Blocks",id:"physical-io-blocks",level:3},{value:"Logic Blocks",id:"logic-blocks",level:3},{value:"Calibrator  Blocks",id:"calibrator--blocks",level:3},{value:"Delay/Pulse Timers",id:"delaypulse-timers",level:3},{value:"Math Operations Blocks",id:"math-operations-blocks",level:3},{value:"Counter Blocks",id:"counter-blocks",level:3},{value:"GSM Blocks",id:"gsm-blocks",level:3},{value:"Data/Event Recording Blocks",id:"dataevent-recording-blocks",level:3},{value:"Register/Variable Blocks",id:"registervariable-blocks",level:3},{value:"MODBUS Blocks",id:"modbus-blocks",level:3},{value:"IEC/DNP3 Protocols",id:"iecdnp3-protocols",level:3},{value:"MQTT Blocks",id:"mqtt-blocks",level:3},{value:"Communications Blocks",id:"communications-blocks",level:3},{value:"Table Blocks",id:"table-blocks",level:3},{value:"Controller Blocks",id:"controller-blocks",level:3},{value:"HVAC Blocks",id:"hvac-blocks",level:3},{value:"System Blocks",id:"system-blocks",level:3},{value:"Multiplexer Blocks",id:"multiplexer-blocks",level:3},{value:"Motion Control Blocks",id:"motion-control-blocks",level:3},{value:"Serial Communications Blocks",id:"serial-communications-blocks",level:3},{value:"String Blocks",id:"string-blocks",level:3},{value:"Calendar Blocks",id:"calendar-blocks",level:3},{value:"Macro Blocks",id:"macro-blocks",level:3},{value:"SNMP Blocks",id:"snmp-blocks",level:3}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"physical-io-blocks"},"Physical I/O Blocks"),(0,n.kt)("p",null,"(T/M) Digital Input: It is used to read the physical digital input on the device."),(0,n.kt)("p",null,"(T/M) Digital Output: It is used to write values to the physical digital outputs on the device."),(0,n.kt)("p",null,"(T/M) Analog Input: It is used to read physical analog input on the device."),(0,n.kt)("p",null,"(T/M) Analog Output: It is used to write values to the physical analog outputs on the device."),(0,n.kt)("p",null,"(T/M) Relay Output: It is used to write values to the physical relay outputs on the device."),(0,n.kt)("p",null,"(T/M) RTD Temperature Input: It is used to read physical RTD inputs on the device."),(0,n.kt)("p",null,"(T/M) Locked Digital Input: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks."),(0,n.kt)("p",null,"(T/M) Locked  Analog Input: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks."),(0,n.kt)("p",null,"(T/M) Locked RTD Temperature Input: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks."),(0,n.kt)("p",null,"(T/M) Locked Digital Output: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks."),(0,n.kt)("p",null,"(T/M) Locked Analog Output: Locked Input/Output blocks are used to assign values, which are different from the real physical values to the physical input/output blocks."),(0,n.kt)("p",null,"(T/M) Locked Relay Output: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks."),(0,n.kt)("h3",{id:"logic-blocks"},"Logic Blocks"),(0,n.kt)("p",null,"(T/M) Edge Gate: Edge Gate is used for edge triggering purposes."),(0,n.kt)("p",null,"(T/M) Not Gate: Not Gate is used for inverting the input signals."),(0,n.kt)("p",null,"(T/M) Or Gate: Performs the logic OR operation to the input signals."),(0,n.kt)("p",null,"(T/M) Nor Gate: Performs the logic NOR operation to the input signals."),(0,n.kt)("p",null,"(T/M) Nand Gate: Performs the logic NAND operation to the input signals."),(0,n.kt)("p",null,"(T/M) And Gate: Performs the logic AND operation to the input signals."),(0,n.kt)("p",null,"(T/M) XOR Gate: Performs the logic XOR operation to the input signals."),(0,n.kt)("p",null,"(T/M) High Gate: The block output is always (1) High."),(0,n.kt)("p",null,"(T/M) Low Gate: The block output is always (0) Low."),(0,n.kt)("p",null,"(T/M) Impulse Relay: It is used for operations such as on-off, set and reset."),(0,n.kt)("p",null,"(T/M) Shift Block: It is used when a value is shifted to the right or left."),(0,n.kt)("p",null,"(T/M) Bit Merge Block: It is used to combine a maximum of 8 bits in binary and transfer them to the block output as 1 byte."),(0,n.kt)("p",null,"(T/M) Custom Gate: It allows the user to design a desired type of logic gate with the selections made from the Block Object Properties."),(0,n.kt)("h3",{id:"calibrator--blocks"},"Calibrator  Blocks"),(0,n.kt)("p",null,'(T/M) Slope Calibrator: The slope calibrator block means that an analogue value is processed as     "Y = mX + c". The m and c values are coefficient values set from the block options.\nThe \u201cX\u201c value is the input (I1) of the block and the value of Y is the output (Q1) of the operation'),(0,n.kt)("p",null,"(T/M) Point Calibrator: Instead of defining the slope and offset of the correct equation, the\ntransformation is defined over two sample points."),(0,n.kt)("h3",{id:"delaypulse-timers"},"Delay/Pulse Timers"),(0,n.kt)("p",null,"(T/M) On-Delay: If TRG input change its state to Logic(1) and stay in this state during the determined delay time interval, Q1 output signal change its state from logic(0) to logic(1) after end of the delay time period"),(0,n.kt)("p",null,"(T/M) Off-Delay: f TRG input change its state to Logic(0) and stay in this state during the determined off delay time interval, Q1 output signal change its state from logic(1) to logic(0) after end of the delay time period."),(0,n.kt)("p",null,"(T/M) On/Off Delay: If TRG input change its state to Logic(1) and stay in this state during the determined ON delay time interval, Q1 output signal change its state from logic(0) to logic(1) after end of the ON delay time period."),(0,n.kt)("p",null,"(T/M) Retentive On-Delay: If TRG input change its state to Logic(1) and stay in this state during the determined delay time interval, Q1 output signal change its state from logic(0) to logic(1) after end of the delay time period."),(0,n.kt)("p",null,"(T/M) Timer Output Relay:  When the Trg input change its state from Logic(0) to Logic(1), Q1 output changes its state immediately to Logic(1)."),(0,n.kt)("p",null,"(T/M) Symetric Pulse Generator: As long as Enb input is logic(1), block output O1 generates periodic symmetrical pulse as T time logic(0), T time logic(1)."),(0,n.kt)("p",null,"(T/M) Real Time Pulse Generator: It periodically generates pulses at the times specified in synchronous with the device's real time clock."),(0,n.kt)("h3",{id:"math-operations-blocks"},"Math Operations Blocks"),(0,n.kt)("p",null,"(T/M) Word Comparator: It is used for comparing 16-bit WORD numbers.(0-65535)"),(0,n.kt)("p",null,"(T/M) Analog Comparator: It is used for comparing 32-bit floating point numbers."),(0,n.kt)("p",null,"(T/M) Long Comparator: It is used for comparing 32-bit signed numbers."),(0,n.kt)("p",null,"(T/M) Analog Math: It is used for IEE754 floating point number mathematical operations."),(0,n.kt)("p",null,"(T/M) Word Math: It is used for mathematical operations which result in range 0-65535(16-bit)."),(0,n.kt)("p",null,"(T/M) Long Math: It is used for mathematical operations which result in 32-bit signed integers."),(0,n.kt)("h3",{id:"counter-blocks"},"Counter Blocks"),(0,n.kt)("p",null,"(T/M) Up/Down Counter 1: It is used to increment the counting process from any value in positive (+) direction one by one, or to reduce a value in negative (-) direction one by one"),(0,n.kt)("p",null,'(T/M) Run Time: Run Time block is used to save the runtime. When the "Act" input is logic(1), it counts the time in selected time scale (seconds, minutes, hours and writes to the output.'),(0,n.kt)("p",null,"(T/M) Up/Down Counter 2: It is used when positive (+) direction and negative (-) direction counting is done from two different inputs on the block."),(0,n.kt)("h3",{id:"gsm-blocks"},"GSM Blocks"),(0,n.kt)("p",null,"(T/M) SMS Receiver: SMS receiver block is used in applications requiring SMS control. String reference blocks are connected to the No and Msg inputs."),(0,n.kt)("p",null,"(T/M) SMS Send: It is used in applications that want to send SMS from the device to another number. When triggered, the specified SMS is sent to the specified number."),(0,n.kt)("p",null,"(T/M) DTMF Incoming Call: Thanks to the DTMF blocks, Remote control projects via Phone DTMF codes can be  done."),(0,n.kt)("p",null,"(T/M) DTMF Originate Call: Applying the logical high (1) signal to the input of the DTMF Originate Call block makes a call to the defined number."),(0,n.kt)("p",null,"(T/M) GSM Signal Quality: It is a block that can be added to measure GSM signal quality. Values between 1 and 31 indicate the signal quality of the device."),(0,n.kt)("h3",{id:"dataevent-recording-blocks"},"Data/Event Recording Blocks"),(0,n.kt)("p",null,"(T/M) Logger: In control devices to do LOG record operation is used. LOG record operation on the devices which support the SD card is made on SD card, if there is no SD card in the device it is done on the flash\nmemory."),(0,n.kt)("h3",{id:"registervariable-blocks"},"Register/Variable Blocks"),(0,n.kt)("p",null,"(T/M) Word Register: Word Register Block is used as a 16 bit unsigned integer type value holder. It is used as variable in PLC projects."),(0,n.kt)("p",null,"(T/M) Analog Register: Analog Register Block is used as a 32 bit Floating Point type value holder. It is used as variable in PLC projects."),(0,n.kt)("p",null,"(T/M) Long Register: Word Register Block is used as a 32 bit signed integer type value holder. It is used as variable in PLC projects."),(0,n.kt)("p",null,"(T/M) Binary Register: Binary Register Block is used as a 1 bit Boolean type value holder. It is used as variable in PLC projects."),(0,n.kt)("p",null,"(T/M) Binary Flag: The value in input signal is transmitted to the block output with one PLC cycle delay."),(0,n.kt)("p",null,"(T/M) Word Flag: The value in input signal is transmitted to the block output with one PLC cycle delay."),(0,n.kt)("p",null,"(T/M) Analog Flag: The value in input signal is transmitted to the block output with one PLC cycle delay."),(0,n.kt)("p",null,"(T/M) Long Flag: The value in input signal is transmitted to the block output with one PLC cycle delay."),(0,n.kt)("h3",{id:"modbus-blocks"},"MODBUS Blocks"),(0,n.kt)("p",null,"(T/M) Modbus RTU Master: MODBUS RTU Master block activates the MODBUS RTU Master protocol on physical interface connected over communication port input."),(0,n.kt)("p",null,"(T/M) Modbus Word Reader: It is used to read a single 16-bit length MODBUS register adress."),(0,n.kt)("p",null,"(T/M) Modbus Float Reader: t is used for reading from 2 MODBUS registers which is storing 32 bits long IEEE 754 float number."),(0,n.kt)("p",null,"(T/M) Modbus Word Writer: It is used for writing on a single 16 bits long MODBUS register adress."),(0,n.kt)("p",null,"(T/M) Modbus Float Writer: It is used for writing into 2 MODBUS registers which is storing 32 bits long IEEE 754 float number."),(0,n.kt)("p",null,"(T/M) Modbus TCP Master: The MODBUS TCP Master block activates the MODBUS TCP Master protocol on physical interface connected over communication port input."),(0,n.kt)("p",null,"(T/M) Modbus TCP Slave: The MODBUS TCP Slave block activates the MODBUS TCP Slave protocol on physical interface connected over communication port input"),(0,n.kt)("p",null,"(T/M) Modbus RTU Slave: The MODBUS RTU Slave block activates the MODBUS RTU Slave protocol on physical interface connected over communication port input."),(0,n.kt)("p",null,"(T/M) Modbus Write/Read Table: It is used for reading/writing one or more registers starting from a specific register address."),(0,n.kt)("p",null,"(T/M) Modbus Long Reader: The long of 32 byte which keep two numbers from long type fort to read the register adress."),(0,n.kt)("p",null,"(T/M) Modbus Long Writer: It is used to write into 2 MODBUS registers that hold a 32 bits length long number."),(0,n.kt)("p",null,"(T/M) Modbus Gateway: MODBUS Gateway devices are used to create a gateway for master units in the MODBUS TCP network to access slave units in the MODBUS RTU network."),(0,n.kt)("p",null,"(T/M) Modbus Status: Status information of slave devices that read and write over Modbus Master block is read with this block. Modbus Status block reads the status information from the master block to which it is connected."),(0,n.kt)("h3",{id:"iecdnp3-protocols"},"IEC/DNP3 Protocols"),(0,n.kt)("p",null,"(T) IEC101 Slave: By adding IEC101 block, The IEC 60870-5-101 slave is activated on the RTU. TCP or Serialport block is added to IEC101block \u201cser\u201d input."),(0,n.kt)("p",null,"(T) DNP3 Slave: By adding the DNP3 slave block, DNP3 is activated on the RTU. TCP or Seriport block is added to DNP3 block ser input."),(0,n.kt)("p",null,"(T) IEC104 Slave: By adding IEC104 slave block , IEC 104 will be activated on the RTU. TCP or Serialport block is added to IEC104 block ser input."),(0,n.kt)("h3",{id:"mqtt-blocks"},"MQTT Blocks"),(0,n.kt)("p",null,"(T/M) MQTT Config: It is used to connect to a remote broker via the host or IP address set from the TCP socket block and to provide communication between devices or interfaces using the internet or local network."),(0,n.kt)("h3",{id:"communications-blocks"},"Communications Blocks"),(0,n.kt)("p",null,"(T/M) Serial Port Block: Any protocol supported by Mikrodev PLC can be configured to communicate over serial port."),(0,n.kt)("p",null,"(T/M) DNS Blok: Converts web address to IP address."),(0,n.kt)("p",null,"(T/M) TCP Socket Block: TCP Socket Block is used to provide the communications with Ethernet,GSM or Wi-Fi, with supported protocols."),(0,n.kt)("h3",{id:"table-blocks"},"Table Blocks"),(0,n.kt)("p",null,"(T/M) Word Table: Keeps the added word value in the table. The table size should be selected 2 times the number of word values entered."),(0,n.kt)("p",null,"(T/M) Analog Table: Keeps the added analog value in the table. The table size should be selected 4 times the number of analog values entered."),(0,n.kt)("p",null,"(T/M) Word Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block."),(0,n.kt)("p",null,"(T/M) Analog Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block."),(0,n.kt)("p",null,"(T/M) Long Table: Keeps the added long value in the table. The table size should be selected 4 times the number of long values entered."),(0,n.kt)("p",null,"(T/M) Long Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block."),(0,n.kt)("p",null,"(T/M) Bit Table: Keeps the Word value added in the table. The table size must be the same as the number of bit values entered."),(0,n.kt)("p",null,"(T/M) Bit Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block."),(0,n.kt)("h3",{id:"controller-blocks"},"Controller Blocks"),(0,n.kt)("p",null,'(T/M) Hysteresis: It is used to create the switching range by switching on and off at the end points of the "bottom threshold and upper threshold" determined in on/off controlled systems.'),(0,n.kt)("p",null,"(T/M) PID Controller: A PID controller is a controller that is designed to stabilize a mechanism at a constant value in the most optimal time and to keep the value constant in the ideal values"),(0,n.kt)("p",null,"(T/M) Analog Ramp: The analog ramp block is used in applications where it is necessary to reach a fixed value from a specified value with a constant acceleration within a certain time period."),(0,n.kt)("p",null,"(T/M) On/Off Controller: If the input value of the process meets the defined conditions, output\nstatus is ON, otherwise output status is OFF."),(0,n.kt)("p",null,"(T/M) Change Detector: The Change Detector block is used when changes to any block value need to be monitored."),(0,n.kt)("h3",{id:"hvac-blocks"},"HVAC Blocks"),(0,n.kt)("p",null,"(T/M) Floating Motor: Equipment connected to the output will be turned on as long as the logic (1) signal sent from the \u201cOpe\u201d output. The equipment connected to the output will shut down as long as the logic (1) signal sent from the \u201cClo\u201d output."),(0,n.kt)("p",null,"(T/M) Aging Manager: As long as the logic high(1) signal is input to \u201cEnb\u201d, the block becomes active and activates the connected aging members."),(0,n.kt)("p",null,"(T/M) Aging Member: It is used in applications where several equipment must be started and stopped in sequence for a certain period of time."),(0,n.kt)("p",null,"(T/M) DevNET Main: DevNET is a system that reads and writes data from one device selected via ethernet and transfers the data to the DevNET register."),(0,n.kt)("p",null,"(T/M) DevNET Register: The data of the registers in the device connected via the Ethernet network is transferred into this block."),(0,n.kt)("h3",{id:"system-blocks"},"System Blocks"),(0,n.kt)("p",null,"(T/M) First Scan Bit: When the PLC is started, it gives logic 1 output."),(0,n.kt)("p",null,"(T/M) Reset Counter: The reset count of the device is written to the output."),(0,n.kt)("p",null,"(T/M) System Reset: In case of rising edge trigger signal is applied to Trg input, the device performs a soft RESET."),(0,n.kt)("h3",{id:"multiplexer-blocks"},"Multiplexer Blocks"),(0,n.kt)("p",null,"(T/M)  Analog Quart Multiplexer: One of the inputs is selected among the four inputs and transferred to the block output."),(0,n.kt)("p",null,"(T/M) Word Dual Multiplexer: One of the inputs is selected among the two inputs and transferred to the block output."),(0,n.kt)("p",null,"(T/M) Long Dual Multiplexer:  One of the inputs is selected among the two inputs and transferred to the block output."),(0,n.kt)("p",null,"(T/M) Analog Dual Multiplexer:  One of the inputs is selected among the two inputs and transferred to the block output."),(0,n.kt)("h3",{id:"motion-control-blocks"},"Motion Control Blocks"),(0,n.kt)("p",null,"(T/M) Fast Counter Input: Fast counter blocks are used to count digital pulse input signals."),(0,n.kt)("p",null,"(T/M) Pulse Width Modulation: PWM block is used to control the PWM outputs of the device."),(0,n.kt)("p",null,"(T/M) Pulse Train Output: It is used to make a controlled step input motion by sending a certain number of pulses."),(0,n.kt)("p",null,"(T/M) Axis Definitions: This block is used to control the position of the system on the axis."),(0,n.kt)("p",null,"(T/M) Axis Control: t is used to stabilise the position of the servo motor."),(0,n.kt)("h3",{id:"serial-communications-blocks"},"Serial Communications Blocks"),(0,n.kt)("p",null,"(T/M) RX Package: Rx Package block is used to define the incoming data."),(0,n.kt)("p",null,"(T/M) Package Parser: It is used to parse the incoming data."),(0,n.kt)("p",null,"(T/M) TX Package: Tx Package Block Converts the data to be sent from the Value input into a packet and sends it as a data packet from the Q1 output."),(0,n.kt)("p",null,"(T/M) Serial Gateway: It is the block used to provide transparent data transmission. It provides data transmission between the serial port and the remotely connected device, independent of any protocol."),(0,n.kt)("h3",{id:"string-blocks"},"String Blocks"),(0,n.kt)("p",null,"(T/M) String Refence: It is used to select and use the desired index in the Text. Table for blocks that operate on texts or use as inputs."),(0,n.kt)("p",null,"(T/M) String Manipulation: As do operation on the string referance result of operation new string is written to string offset."),(0,n.kt)("p",null,"(T/M) String Operations: As doing operation on the string referance ,result of opearation composed the integer value is written blocks output."),(0,n.kt)("h3",{id:"calendar-blocks"},"Calendar Blocks"),(0,n.kt)("p",null,"(T/M) Weekly Timer: O1 output becomes logic(1) for the selected day and time intervals."),(0,n.kt)("p",null,"(T/M) Yearly Timer: It is used to generate a logical (1) output between two selected time intervals of the year."),(0,n.kt)("p",null,"(T/M) Astronomical Timer: Sunset and sunrise time is calculated by using the latitude and longitude values."),(0,n.kt)("p",null,"(T/M) System Seconds: The system second block shows the PLC\u2019s real time clock\u2019s second value."),(0,n.kt)("p",null,'(T/M) System Miliseconds: System Milliseconds" block reads the millisecond value from the moment the PLC starts to operate.'),(0,n.kt)("p",null,"(T/M) System HHMM: System HHMM block shows the PLC\u2019s real time clock\u2019s hours and minutes value."),(0,n.kt)("p",null,"(T/M) System DayOfWeek: System day of week shows PLC\u2019s real time clock\u2019s week of day."),(0,n.kt)("p",null,"(T/M) System DayOfMonth: The system day of month block shows PLC\u2019s real time clock\u2019s day of month."),(0,n.kt)("p",null,"(T/M) System DayOfYear: The system day of year block shows PLC\u2019s real time clock\u2019s day of year value."),(0,n.kt)("p",null,"(T/M) System Month: System Month block shows PLC's real time clock\u2019s month of year value."),(0,n.kt)("p",null,"(T/M) System Year: System Year Block shows PLC's real time clock\u2019s year value."),(0,n.kt)("p",null,"(T/M) Save Time: It is used to set the PLC\u2019s time and date within the logic project."),(0,n.kt)("p",null,"(T/M) NTP Syncronise Block: It is used to synchronize the PLC clock."),(0,n.kt)("p",null,"(T/M) Time Plan Picker: It can be used in conjunction with Mikrodev ViewPLUS SCADA. It can not be used alone."),(0,n.kt)("h3",{id:"macro-blocks"},"Macro Blocks"),(0,n.kt)("p",null,"(T/M) Macro: Custom blocks can be designed by inserting special command definitions in the macro field of the block."),(0,n.kt)("h3",{id:"snmp-blocks"},"SNMP Blocks"),(0,n.kt)("p",null,"(T/M) SNMP Agent: The SNMP Agent block is added to the project to be able to define the device as an agent."),(0,n.kt)("p",null,"(T/M) SNMP Trap: The SNMP Trap block is used to send data in certain exchange values from the device to the manager."))}d.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var l=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var r=l.createContext({}),u=function(e){var t=l.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return l.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(o),h=n,k=p["".concat(r,".").concat(h)]||p[h]||d[h]||i;return o?l.createElement(k,s(s({ref:t},c),{},{components:o})):l.createElement(k,s({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=p;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);