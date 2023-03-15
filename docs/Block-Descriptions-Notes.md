---
title: "Block Descriptions Notes"
---



### Physical I/O Blocks

(T/M) Digital Input: It is used to read the physical digital input on the device.

(T/M) Digital Output: It is used to write values to the physical digital outputs on the device.

(T/M) Analog Input: It is used to read physical analog input on the device.

(T/M) Analog Output: It is used to write values to the physical analog outputs on the device.

(T/M) Relay Output: It is used to write values to the physical relay outputs on the device.

(T/M) RTD Temperature Input: It is used to read physical RTD inputs on the device.

(T/M) Locked Digital Input: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks.

(T/M) Locked  Analog Input: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks.

(T/M) Locked RTD Temperature Input: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks.

(T/M) Locked Digital Output: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks.

(T/M) Locked Analog Output: Locked Input/Output blocks are used to assign values, which are different from the real physical values to the physical input/output blocks.

(T/M) Locked Relay Output: Locked Input/Output blocks are used to assign values which are different from the real physical values to the physical input/output blocks.



### Logic Blocks

(T/M) Edge Gate: Edge Gate is used for edge triggering purposes.

(T/M) Not Gate: Not Gate is used for inverting the input signals.

(T/M) Or Gate: Performs the logic OR operation to the input signals.

(T/M) Nor Gate: Performs the logic NOR operation to the input signals.

(T/M) Nand Gate: Performs the logic NAND operation to the input signals.

(T/M) And Gate: Performs the logic AND operation to the input signals.

(T/M) XOR Gate: Performs the logic XOR operation to the input signals.

(T/M) High Gate: The block output is always (1) High.

(T/M) Low Gate: The block output is always (0) Low.

(T/M) Impulse Relay: It is used for operations such as on-off, set and reset.

(T/M) Shift Block: It is used when a value is shifted to the right or left.

(T/M) Bit Merge Block: It is used to combine a maximum of 8 bits in binary and transfer them to the block output as 1 byte.

(T/M) Custom Gate: It allows the user to design a desired type of logic gate with the selections made from the Block Object Properties.



### Calibrator  Blocks

(T/M) Slope Calibrator: The slope calibrator block means that an analogue value is processed as "Y = mX + c". The m and c values are coefficient values set from the block options. The X value is the input (I1) of the block and the value of Y is the output (Q1) of the operation

(T/M) Point Calibrator: Instead of defining the slope and offset of the correct equation, the transformation is defined over two sample points.



### Delay/Pulse Timers

(T/M) On-Delay: If TRG input change its state to logic(1) and stay in this state during the determined delay time interval, Q1 output signal change its state from logic(0) to logic(1) after end of the delay time period

(T/M) Off-Delay: If TRG input change its state to logic(0) and stay in this state during the determined off delay time interval, Q1 output signal change its state from logic(1) to logic(0) after end of the delay time period.

(T/M) On/Off Delay: If TRG input change its state to logic(1) and stay in this state during the determined ON delay time interval, Q1 output signal change its state from logic(0) to logic(1) after end of the ON delay time period.            
If TRG input change its state to logic(0) and stay in this state during the determined off delay time interval, Q1 output signal change its state from logic(1) to logic(0) after end of the delay time period.

(T/M) Retentive On-Delay: If TRG input change its state to logic(1) and stay in this state during the determined delay time interval, Q1 output signal change its state from logic(0) to logic(1) after end of the delay time period. Different from the On Delay block, In order for the output to be logic(0) a trigger must be sent to the Rst input of the block.

(T/M) Timer Output Relay:  When the Trg input change its state from logic(0) to logic(1), Q1 output changes its state immediately to Logic(1). If TRG signal stays in this state during the determined off delay time interval, Q1 output signal change its state from logic(1) to logic(0) after end of the delay time period.

(T/M) Symetric Pulse Generator: As long as Enb input is logic(1), block output O1 generates periodic symmetrical pulse as T time logic(0), T time logic(1).

(T/M) Real Time Pulse Generator: It periodically generates pulses at the times specified in synchronous with the device's real time clock.



### Math Operations Blocks

(T/M) Word Comparator: It is used for comparing 16-bit WORD numbers.(0-65535)

(T/M) Analog Comparator: It is used for comparing 32-bit floating point numbers.

(T/M) Long Comparator: It is used for comparing 32-bit signed numbers.

(T/M) Analog Math: It is used for IEE754 floating point number mathematical operations.

(T/M) Word Math: It is used for mathematical operations which result in range 0-65535(16-bit).

(T/M) Long Math: It is used for mathematical operations which result in 32-bit signed integers.



### Counter Blocks

(T/M) Up/Down Counter 1: It is used to increment the counting process from any value in positive (+) direction one by one, or to reduce a value in negative (-) direction one by one

(T/M) Run Time: Run Time block is used to save the runtime. When the "Act" input is logic(1), it counts the time in selected time scale (seconds, minutes, hours and writes to the output.)

(T/M) Up/Down Counter 2: It is used when positive (+) direction and negative (-) direction counting is done from two different inputs on the block.



### GSM Blocks

(T/M) SMS Receiver: SMS receiver block is used in applications requiring SMS control. String reference blocks are connected to the No and Msg inputs.

(T/M) SMS Send: It is used in applications that want to send SMS from the device to another number. When triggered, the specified SMS is sent to the specified number.

(T/M) DTMF Incoming Call: Thanks to the DTMF blocks, Remote control projects via Phone DTMF codes can be  done.

(T/M) DTMF Originate Call: Applying the logic(1) signal to the input of the DTMF Originate Call block makes a call to the defined number.

(T/M) GSM Signal Quality: It is a block that can be added to measure GSM signal quality. Values between 1 and 31 indicate the signal quality of the device.



### Data/Event Recording Blocks

(T/M) Logger: In control devices to do LOG record operation is used. LOG record operation on the devices which support the SD card is made on SD card, if there is no SD card in the device it is done on the flash
memory.



### Register/Variable Blocks

Register blocks correspond to variables in the IEC 61131-3 programming language.Variables keep their values somewhere to be used in the program. The definition of the variable differs according to the data entered or the program will bring.

(T/M) Word Register: Word Register Block is used as a 16 bit unsigned integer type value holder. It is used as variable in PLC projects.

(T/M) Analog Register: Analog Register Block is used as a 32 bit Floating Point type value holder. It is used as variable in PLC projects.

(T/M) Long Register: Word Register Block is used as a 32 bit signed integer type value holder. It is used as variable in PLC projects.

(T/M) Binary Register: Binary Register Block is used as a 1 bit Boolean type value holder. It is used as variable in PLC projects.

(T/M) Word Flag: The value in input signal is transmitted to the block output with one PLC cycle delay.

(T/M) Analog Flag: The value in input signal is transmitted to the block output with one PLC cycle delay.

(T/M) Long Flag: The value in input signal is transmitted to the block output with one PLC cycle delay.

(T/M) Binary Flag: The value in input signal is transmitted to the block output with one PLC cycle delay.



### Modbus Blocks

(T/M) Modbus RTU Master: Modbus RTU Master block activates the Modbus RTU Master protocol on physical interface connected over communication port input.

(T/M) Modbus TCP Master: The Modbus TCP Master block activates the Modbus TCP Master protocol on physical interface connected over communication port input.

(T/M) Modbus TCP Slave: The Modbus TCP Slave block activates the Modbus TCP Slave protocol on physical interface connected over communication port input

(T/M) Modbus RTU Slave: The Modbus RTU Slave block activates the Modbus RTU Slave protocol on physical interface connected over communication port input.

(T/M) Modbus Word Reader: It is used to read a single 16-bit length Modbus register adress.

(T/M) Modbus Float Reader: It is used for reading from 2 Modbus registers which is storing 32 bits long IEEE 754 float number.

(T/M) Modbus Long Reader: The long of 32 byte which keep two numbers from long type fort to read the register adress.

(T/M) Modbus Word Writer: It is used for writing on a single 16 bits long Modbus register adress.

(T/M) Modbus Float Writer: It is used for writing into 2 Modbus registers which is storing 32 bits long IEEE 754 float number.

(T/M) Modbus Long Writer: It is used to write into 2 Modbus registers that hold a 32 bits length long number.

(T/M) Modbus Write/Read Table: It is used for reading/writing one or more registers starting from a specific register address.

(T/M) Modbus Gateway: Modbus Gateway devices are used to create a gateway for master units in the Modbus TCP network to access slave units in the Modbus RTU network.

(T/M) Modbus Status: Status information of slave devices that read and write over Modbus Master block is read with this block. Modbus Status block reads the status information from the master block to which it is connected.



### IEC/DNP3 Protocols

(T) IEC101 Slave: By adding IEC101 block, The IEC 60870-5-101 slave is activated on the RTU. TCP or Serial Port block is added to IEC101block Ser input.

(T) DNP3 Slave: By adding the DNP3 slave block, DNP3 is activated on the RTU. TCP or Serial Port block is added to DNP3 block Ser input.

(T) IEC104 Slave: By adding IEC104 slave block , IEC 104 will be activated on the RTU. TCP or Serial Port block is added to IEC104 block Ser input.



### MQTT Blocks

(T/M) MQTT Config: It is used to connect to a remote broker via the host or IP address set from the TCP Socket block and to provide communication between devices or interfaces using the internet or local network.



### Communications Blocks

(T/M) Serial Port Block: Any protocol supported by Mikrodev PLC can be configured to communicate over serial port.

(T/M) TCP Socket Block: TCP Socket Block is used to provide the communications with Ethernet, GSM or Wi-Fi with supported protocols.

(T/M) DNS Blok: Converts web address to IP address.



### Table Blocks

(T/M) Word Table: Keeps the added word value in the table. The table size should be selected 2 times the number of word values entered.

(T/M) Analog Table: Keeps the added analog value in the table. The table size should be selected 4 times the number of analog values entered.

(T/M) Long Table: Keeps the added long value in the table. The table size should be selected 4 times the number of long values entered.

(T/M) Bit Table: Keeps the Word value added in the table. The table size must be the same as the number of bit values entered.

(T/M) Word Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block.

(T/M) Analog Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block.

(T/M) Long Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block.

(T/M) Bit Table Operations: It executes the operation which is defined on the table data and writes the result to output of the block.



### Controller Blocks

(T/M) Hysteresis: It is used to create the switching range by switching on and off at the end points of the "bottom threshold and upper threshold" determined in on/off controlled systems.

(T/M) PID Controller: A PID controller is a controller that is designed to stabilize a mechanism at a constant value in the most optimal time and to keep the value constant in the ideal values

(T/M) Analog Ramp: The analog ramp block is used in applications where it is necessary to reach a fixed value from a specified value with a constant acceleration within a certain time period.

(T/M) On/Off Controller: If the input value of the process meets the defined conditions, output status is ON, otherwise output status is OFF.

(T/M) Change Detector: The Change Detector block is used when changes to any block value need to be monitored.



### HVAC Blocks

(T/M) Floating Motor: Equipment connected to the output will be turned on as long as the logic(1) signal sent from the "Ope" output. The equipment connected to the output will shut down as long as the logic(1) signal sent from the "Clo" output.

(T/M) Aging Manager: As long as the logic(1) signal is input to "Enb", the block becomes active and activates the connected aging members.

(T/M) Aging Member: It is used in applications where several equipment must be started and stopped in sequence for a certain period of time.

(T/M) DevNET Main: DevNET is a system that reads and writes data from one device selected via ethernet and transfers the data to the DevNET register.

(T/M) DevNET Register: The data of the registers in the device connected via the Ethernet network is transferred into this block.



### System Blocks

(T/M) First Scan Bit: When the PLC is started, it gives logic(1) output.

(T/M) Reset Counter: The reset count of the device is written to the output.

(T/M) System Reset: In case of rising edge trigger signal is applied to Trg input, the device performs a soft RESET.



### Multiplexer Blocks

(T/M) Analog Quart Multiplexer: One of the inputs is selected among the four inputs and transferred to the block output.

(T/M) Word Dual Multiplexer: One of the inputs is selected among the two inputs and transferred to the block output.

(T/M) Long Dual Multiplexer:  One of the inputs is selected among the two inputs and transferred to the block output.

(T/M) Analog Dual Multiplexer:  One of the inputs is selected among the two inputs and transferred to the block output.



### Motion Control Blocks

(T/M) Fast Counter Input: Fast counter blocks are used to count digital pulse input signals.

(T/M) Pulse Width Modulation: PWM block is used to control the PWM outputs of the device.

(T/M) Pulse Train Output: It is used to make a controlled step input motion by sending a certain number of pulses.

(T/M) Axis Definitions: This block is used to control the position of the system on the axis.

(T/M) Axis Control: It is used to stabilise the position of the servo motor.



### Serial Communications Blocks

(T/M) RX Package: Rx Package block is used to define the incoming data.

(T/M) Package Parser: It is used to parse the incoming data.

(T/M) TX Package: Tx Package Block Converts the data to be sent from the Value input into a packet and sends it as a data packet from the Q1 output.

(T/M) Serial Gateway: It is the block used to provide transparent data transmission. It provides data transmission between the serial port and the remotely connected device, independent of any protocol.



### String Blocks

(T/M) String Refence: It is used to select and use the desired index in the Text. Table for blocks that operate on texts or use as inputs.

(T/M) String Manipulation: As do operation on the string referance result of operation new string is written to string offset.

(T/M) String Operations: As doing operation on the string referance ,result of opearation composed the integer value is written blocks output.



### Calendar Blocks

(T/M) Weekly Timer: O1 output becomes logic(1) for the selected day and time intervals.

(T/M) Yearly Timer: It is used to generate a logic(1) output between two selected time intervals of the year.

(T/M) Astronomical Timer: Sunset and sunrise time is calculated by using the latitude and longitude values.

(T/M) System Seconds: The system second block shows the PLC's real time clock's second value.

(T/M) System Miliseconds: System Milliseconds block reads the millisecond value from the moment the PLC starts to operate.

(T/M) System HHMM: System HHMM block shows the PLC's real time clock's hours and minutes value.

(T/M) System DayOfWeek: System day of week shows PLC's real time clock's week of day.

(T/M) System DayOfMonth: The system day of month block shows PLC's real time clock's day of month.

(T/M) System DayOfYear: The system day of year block shows PLC's real time clock's day of year value.

(T/M) System Month: System Month block shows PLC's real time clock's month of year value.

(T/M) System Year: System Year Block shows PLC's real time clock's year value.

(T/M) Save Time: It is used to set the PLC's time and date within the logic project.

(T/M) NTP Syncronise Block: It is used to synchronize the PLC clock.

(T/M) Time Plan Picker: It can be used in conjunction with Mikrodev ViewPLUS SCADA. It can not be used alone.



### Macro Blocks

(T/M) Macro: Custom blocks can be designed by inserting special command definitions in the macro field of the block.



### SNMP Blocks

(T/M) SNMP Agent: The SNMP Agent block is added to the project to be able to define the device as an agent.

(T/M) SNMP Trap: The SNMP Trap block is used to send data in certain exchange values from the device to the manager. 



### DALI Blocks

(T) DALI Manager Block: The DALI Manager block provides remote access to luminaires or groups.


