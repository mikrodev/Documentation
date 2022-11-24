---
title: IEC104 Application Notes
---

### General Information

The IEC 60870-5-104 protocol is a widely used distributed communication protocol. The main advantages of the IEC104 protocol are:

•	Time stamped variable support

•	Ability to resend events that occur when there is no communication, when a connection is established with time stamps.

•	Ability to send changes automatically without the need for SCADA to query.

•	Ability to query variables not individually, but multiple as a class.

### IEC 60870-5-104 Slave Driver

Mikrodev RTU devices support IEC 60870-5-104 SLAVE mode and serve SCADA systems supporting IEC 60870-5-104 over TCP/IP. The following services are supported:

1.	Reading all data points with General Interrogation query

2.	Time synchronization

3.	Event control on instant measurement data as percentage and level

4.	Automatic sending of defined Event data (Case of Transmission, Spontaneous 0x03)

5.	Periodic sending of data points (Case of Transmission, Periodic 0x01)

6.	Storing the event information and sending it again when communication is established

7.	Execution Mode support in sending commands; Execute Only, Select Before Execute, Long Pulse, and Short Pulse Duration support sending Quality Descriptor information.

<center>

![iec104-an-1](/img/iec104-an-1.png)
***<center>Figure 1: Mikrodev RTU General Usage Diagram</center>***

</center>

### IEC 104 Slave Block Definitions

#### Connections 

<center>

![iec104-an-2](/img/iec104-an-2.png)

</center>

#### Connection Explanations

Ser: TCP Socket Input. 

The TCP server socket block from which the IEC104 protocol will work is connected from this input

Trg: Trigger Input 

Trigger input for periodic sending. It works as a rising edge.

Asd: Asdu Address Input 

The ASDU address is used as input.

#I104: Link Status 

If the IEC104 connection between SCADA and RTU is installed, this output value is 1, otherwise 0.

Out: SCADA Write Status

If SCADA requests select and execute, a pulse is generated at this output.

#### Block Settings 

<center>

![iec104_02](/img/iec104_02.png)

</center>

AsduAddress: IEC104 slave station ASDU address is defined.

T0: TCP IEC104 slave station ASDU address is defined.

T1: Test APDU timeout period.

T2: Timeout period for Ack.

T3: Test frame sending time

K: The maximum allowable difference between the sequence number in the received packet and the number in the send status variable.

W: ACK is sent after receiving W up to I Format APDU.

#### Block Information 

By adding IEC104 slave block ,  IEC 104  will be activated on the RTU. 

TCP or Serialport block is added to IEC104 block ser input.

EC 104 blocks must be added for each server to serve multiple servers.

Asd input is used if IEC104 Asdu address is set from outside but not inside block.

On the rising edge of the trigger, periodic transmission between IEC104 objects is activated and the selected objects are transmitted to the server periodically. Trigger input can be left blank.

### Sample Application

* In RTU logic projects , with the addition of IEC 104 Slave Block, the IEC 104 protocol is activated in the RTU. Variables in the RTU logic project, IEC104 association is provided in the variable address table.

<center>

![iec104_03](/img/iec104_03.png)

</center>

### Variable Mapping with Protocol

#### Variable Address Table

* The relevant protocol is activated in the RTU logic project by adding the protocol block. Variables in the RTU logic Project, association between protocol.is provided in te variable address table

<center>

![iec104_04](/img/iec104_04.png)

</center>

#### Defining Line Labels

*Line label can be defined for all blocks defined on the Mikrodiagram. In the variable table, the line label must be defined in order to be able to associate with the protocol addresses.

<center>

![telediagram-editor-05](/img/telediagram-editor-05.png)

</center>

#### Attaching a Line Label

<center>

![telediagram-editor-06](/img/telediagram-editor-06.png)

</center>

Alias: A special name is given that defines this defined variable.

Start Address: The address allocated for this variable on SCADA is written here. It is written as a decimal value

Line Label: The block to be associated on the Mikrodiagram is selected with the line label.

Point Count: Calculated automatically. It makes sense on tables.             

Quality Register Block:  Block entry to define Quality Register.

Send Trig Block:  If you want to send IEC104 data with an independent trigger from the trigger input of the block, the trigger block is selected from this section and the periodic send option in the block special settings must not be ticked in order to send trigger-dependent data here.

Protocol Type: Modbus, Dnp3, IEC101, IEC104 are selected. Object type will change according to protocol type.

Object Type: IEC104 object type information selected. look the protocol type information for detailed information.

Object Class: The class information to which the variable belongs is selected.

Send On Trigger: IEC104 Slave block is the selection to send to this SCADA as a periodic send when the test is detected from the trigger input.

####  Send Method:
If the value of the defined variable is changed, the operation to be performed is selected.

Level: When the quantity defined in "Change Value" is changed, the transmission is triggered.

Percentage: The transmission is triggered when there is a change in the percentage defined in "Change Value".

None: Value exchange does not trigger posting

Change Value: With the "Send method", it adjusts the percentage change in the level.

### IEC104 Object Types

#### IEC104 Read Direction Object Types


|	IEC104 Object	|	Pe	|
| ------ | ------ |
|	1 (single-point)	|	Binary, Word, Analog, Long	|
|	3 (double-point)	|	Word, Analog, Long	|
|	5 (step position)	|	-	|
|	7 (bitstring)	|	-	|
|	9 (measured normalized value)	|	Binary, Word, Analog, Long	|
|	11 (measured scaled value)	|	-	|
|	13 (measured short floating point)	|	Binary, Word, Analog, Long	|
|	15 (integrated totals)	|	-	|
|	20 (packed single-point)	|	-	|
|	21 (normalized value without quality descriptor)	|	-	|
|	30 (single-point information with time tag)	|	Binary, Word, Analog, Long	|
|	31 (double-point information with time tag)	|	Word, Analog, Long	|
|	32 (step position information with time tag)	|	-	|
|	33 (bitstring of 32 bit with time tag)	|	-	|
|	34 (measured normalized value with time tag) |	Binary, Word, Analog, Long	|
|	35 (measured scaled value with time tag)	|	-	|
|	36 (measured short floating point number with time tag) |	Binary, Word, Analog, Long	|
|	37 (integrated totals with time tag)	|	-	|
|	38 (event of protection equipment with time tag)	|	-	|

#### IEC104 Object Types in Control Direction

The write variable is also automatically created for each block matched with the read type. Variable types that can be accessed as writing to defined read objects are as follows:

|	Selected for a reading - IEC104 Object Types	|	IEC104 Object Types - That can be accessed for writing to the same data point	|
| ------ | ------ |
|	1 (single-point)	|	45 (single command), 58 (single command with time tag)	|
|	3 (double-point)	|	46 (double command), 59 (double command with time tag)	|
|	13 (measured short floating point)	|	50 (set point command, short floating point), 63 (set point command, short floating - point number with time tag	|
|	30 (single-point information with time tag)	|	45 (single command), 58 (single command with time tag)	|
|	31 (double-point information with time tag)	|	46 (double command), 59 (double command with time tag)	|
|	36 (measured short floating point number with time tag) |	50 (set point command, short floating point), 63 (set point command, short floating - point number with time tag)	|

### Quality Register Block Settings 

Quality Descriptor (QDS) bits and accordingly Quality Register Block Settings are supported in our devices. Quality Descriptor bit definitions; OV, BL, SB, NT, IV, CY, CA, EI. As it is known, the use of QDS varies according to the defined object types. The Quality Descriptor (QDS) identification table is shown below.

|	Status / QDS	|	OV	|	CY	|	CA	|	EI	|	BL	|	SB	|	NT	|	IV	|
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|		|	overflow quality flag	|	carry flag	|	adjusted flag	|	blocked quality flag	|	substituted quality flag	|	topical quality flag	|	invalid quality flag	|
|	1	|	overflow	|	carry	|	counter was adjusted	|	elapsed time not valid	|	blocked	|	substituted	|	not topical	|	invalid	|
|	0	|	no overflow	|	bo carry	|	counter was not adjusted	|	elapsed time valid	|	not blocked	|	not substituted	|	topical	|	valid	|

The QDS values to be used are created with the Bit Combination Block and defined by the Quality Register Block setting during the IEC 104 association in the variable addresses section.

For example, we will define the reading value with the IEC 104 protocol. We select 36 – measured short floating point number with time tag, as the reading object type. We will define QDS values for Quality Register Block definition. For this, the QDS bit definition is as follows; It should contain 0.bit OV, 4.bit BL, 5.bit SB, 6.bit NT, 7.bit IV. We can define Bit Combining Block as Quality Register Block.

<center>

![iec104-an-3](/img/iec104-an-3.png)
***<center>Figure 2: QDS Bits Create Quality Register Block</center>***

</center>

### Command Send Settings

It supports Single Command, Double Command and Set Point Command for appropriate object types in IEC 104 protocol. Object types command types mapping is shown in the Object Types Table. The settings are as follows; Depending on the object type, the options appear automatically in the selected IEC 104 protocol settings during line label association. For example, when Object type 45 (Single Command) is selected, options for parameter settings become active as seen in Figure 2. A register is selected for either Short Pulse Duration or Long Pulse Duration values. It should be noted that the entered value will be treated as ms. The Execution Method is also selected from the list. The Execution Method is of 2 types. Execute Only is selected if the operation is desired to be performed with a single command. If 2 different confirmation states are desired, Select Before Execute is selected. For example, the Select Before Execute option can be used for transactions that require confirmation with 2 different commands. For this, the Select command must be sent first and then the Execute command. 

<center>

![iec104-an-4](/img/iec104-an-4.png)
***<center>Figure 3: Object Type-Appropriate Command Sending Settings</center>***

</center>

### IEC 104 Event Mechanism

The variable address table has a send on exchange selection for IEC 104 objects. When the value of the variable defined in this menu changes, the action to be taken is selected.

On No Exchange: The spin submission is not triggered.

In Level Change: When the amount defined in “Change Value” changes, the sending is triggered.

In Percentage Change: Sending is triggered when there is a change in the percentage defined in “Change Value”.

The percentage or level of change is also set with the "Change Value" option. Sets the percentage or level change value along with the “Submission Method”.

The RTU device tags the statuses that are send on change and change detected as events and assigns a time tag to the event. In case of a tagged event, if there is a connection with the server, the relevant object is transmitted immediately as COT 0x03 Spontaneous.

If there is no connection with the server, the device is added to the event log memory and stored for sending when the server connection is established again. For storage, the option "Add to log-record memory" must be selected in the IEC104 Slave block.

Note: If all tags are to be sent to the server when the connection is established, the Sync with DevNET option must be selected in the IEC104 Slave block.

Note: The values of selected objects with periodic sending between IEC104 objects are not detected as events. That is, periodic submissions are not added to the log memory when there is no connection.

### IEC104 Redundancy Group Specification

Mikrodev RTU can connect with IEC 104 Master as IEC 104 Slave. The number of Master IPs to be connected to this must be defined to the device with the AT command. The Mikroterminal application opens, from the special command entry section.

The command AT+OPTIONS=7,< NUMBER OF MASTER IP TO CONNECT > is sent.
For example, if Edaş has two different server IPs, this command would be as follows:
AT+OPTIONS=7,2


>>  AT+OPTIONS=7,2   Write Commad
OPTIONS=OK


>>  AT+OPTIONS=7,?   Read Command
OPTIONS=2

After entering this parameter, the device must be reset. AT+RESET=1
 
###	Ability to Edit the Analog Threshold Value Retained in the Log Recording Memory

While there is no connection, changes can be made on the threshold values of the analog values kept in the log memory.

The Mikroterminal application opens, will be sent from the custom command line

AT+OPTION=8,< ANALOG EVENT MULTIPLIER >

analog event multiplier on the command line, analog log recorded when there is no connection, it allows to operate on the threshold values of the values. Values written here are from 0 if set differently, when there is no connection, the event threshold is multiplied by the coefficient here.

For example;

If AT+OPTION=8.0, analog events are not added to the log memory if there is no connection.

If AT+OPTION=8.1, it records the change in the log memory as much as the value entered in the variable table.

If AT+OPTION=8.10, a change that is 10 times larger than the value entered in the variable table will also be recorded in the log memory.

>>  AT+OPTIONS=8,10   Write Command           
OPTIONS=OK

>>  AT+OPTIONS=8,?   Read Command      
OPTIONS=10

After entering this parameter, the device must be reset. AT+RESET=1

### IEC104 Connection Information Learning Command

IEC104 connection information can be learned with AT command.

The Mikroterminal application opens, from the custom command input 

The command AT+COMSTATUS=iec104 is sent.


IEC104 redundancy group number =2 command query example when there is no selected connection;

>>  AT+COMSTATUS=iec104                 
IEC104 CLIENT GROUP[0]:00000000        
	isDataTransStarted:0          
	NumofActiveConnections:0             
	MaxNumberOfEvents:256            
	RefInstance:200111b8             
	EventItems:1000c800             
	ObjMap:10005ab0           
		connection[0]:00000000             
		connection[1]:00000000           
		connection[2]:00000000           
		connection[3]:00000000       
		connection[4]:00000000         
IEC104 CLIENT GROUP[1]:00000000             
	isDataTransStarted:0             
	NumofActiveConnections:0            
	MaxNumberOfEvents:256            
	RefInstance:200115f8             
	EventItems:1000dc00            
	ObjMap:100064f4            
		connection[0]:00000000         
		connection[1]:00000000         
		connection[2]:00000000           
		connection[3]:00000000           
		connection[4]:00000000               
COMSTATUS=

IEC104 redundancy group number =2 selected, command query example when there is only one connection;

>>  AT+COMSTATUS=iec104     
IEC104 CLIENT GROUP[0]:4d0aa8c0     
	isDataTransStarted:1       
	NumofActiveConnections:1        
	MaxNumberOfEvents:256         
	RefInstance:2000f4c8         
	EventItems:1000c800          
	ObjMap:1000518c        
		connection[0]:20010b30           
		DataTransStarted: 1        
		connection[1]:00000000            
		connection[2]:00000000           
		connection[3]:00000000        
		connection[4]:00000000            
IEC104 CLIENT GROUP[1]:00000000              
	isDataTransStarted:0           
	NumofActiveConnections:0         
	MaxNumberOfEvents:256           
	RefInstance:2000f908          
	EventItems:1000dc00               
	ObjMap:100052ac           
		connection[0]:00000000        
		connection[1]:00000000             
		connection[2]:00000000     
		connection[3]:00000000            
		connection[4]:00000000              
COMSTATUS=      

### Command to Learn IEC104 Master IPs Connected to TCP Socket Block

With AT command, IEC104 Master IPs connected to TCP Socket block can be learned.

The Mikroterminal application is opened, from the special command entry or from the command line that says AT+STATUS= in the Socket Status section.

The AT+SOCKET=< TCP Socket Block Number > command is sent.

<center>

![iec104-an-5](/img/iec104-an-5.png)

</center>

Example of IEC104 Master IP Query connected to TCP Socket block with 4 block numbers;

>>  AT+SOCKET=4

Ip: 172.21.1.1, Port: 65063, Status: 2        
Ip: 172.21.1.1, Port: 65514, Status: 3          
Ip: 172.21.1.2, Port: 46076, Status: 2            
Ip: 172.21.1.2, Port: 45799, Status: 2         
 
>>  AT+COMSTATUS=iec104

IEC104 CLIENT GROUP[0]:020115ac       
	isDataTransStarted:1         
	NumofActiveConnections:2        
	MaxNumberOfEvents:256          
	RefInstance:200110b0        
	EventItems:1000c800          
	ObjMap:10005ab0             
		connection[0]:20014b78      
			DataTransStarted: 1         
		connection[1]:00000000              
		connection[2]:20013430        
			DataTransStarted: 0            
		connection[3]:00000000           
		connection[4]:00000000    

IEC104 CLIENT GROUP[1]:010115ac         
	isDataTransStarted:1         
	NumofActiveConnections:2         
	MaxNumberOfEvents:256       
	RefInstance:200114f0        
	EventItems:1000c900         
	ObjMap:100064f4       
		connection[0]:20013838      
			DataTransStarted: 0     
		connection[1]:00000000       
		connection[2]:20014770        
			DataTransStarted: 1       
		connection[3]:00000000     
		connection[4]:00000000        
COMSTATUS=  




