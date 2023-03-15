---
title: "SNMP Application Notes"
---

## SNMP PROTOCOL

### General Information

<center>

![snmp_01](/img/snmp_01.png)
***<center>Figure 1: SNMP Protocol</center>***

</center>

This technology, called Simple Network Management Protocol, is designed to control units on computer networks as they grow. Various information from the temperature on the device to the users connected to the device, from the internet connection speed to the system operating time are kept in the tree structure defined in SNMP.

The components that make up SNMP are;

•	Agent application: The name given to the application that runs the SNMP service on the device and saves the necessary information and transfers it to the administrator unit or applies the change from the administrator unit to the device.

•	Admin application: The application that receives the information needed from the agent application and displays it to the user and sends the values that the user wants to change to the device.

•	Network Management System (NMS): It is the name given to the application that runs in the administrative unit and provides monitoring and management of all devices connected to a network.

Mikrodev products work as SNMP Agent application.

SNMP Management Information Units (MIBs): MIBs are collections of information stored in a hierarchical structure. To reach the value of a particular variable in SNMP, the relevant unit of this universally determined collection is used. For example, for the device description assigned by the manufacturer of a device, it is necessary to access the information in the 1.3.6.1.2.1.2 unit.

### Block Definitions

#### SNMP Agent Block 

The SNMP Agent block is added to the project to be able to define the device as an agent.

<center>

![snmp_02](/img/snmp_02.png)
***<center>Figure 2: SNMP Agent Block</center>***

</center>

Pin definitions;

  •	Lis: Listen port
  
  •	SNAg0: Block output
  
  • Err: Error Output  

Block custom settings;

<center>

![snmp_03](/img/snmp_03.png)
***<center>Figure 3: SNMP Agent Block Custom Settings</center>***

</center>

Definitions;

•	UDP Listen Port: Number of listen port, SNMP default is 161.

•	Read Community, Write Community: It works like username and password. Should be same on the manager.

#### SNMP Trap Block

<center>

![snmp_04](/img/snmp_04.png)
***<center>Figure 4: SNMP Trap Block</center>***

</center>

The SNMP Trap block is used to send data in certain exchange values from the device to the manager. As in the figure, it sends the value of the register connected to its input to the manager according to the conditions in its special settings.

Block custom settings;

<center>

![snmp_05](/img/snmp_05.png)
***<center>Figure 5: SNMP Trap Block Custom Settings</center>***

</center>

Definitions;

•	SNMP Manager IP Address: The manager’s IP address.

•	SNMP Manager Port: Port number of manager

•	Alarm Control: Conditions of send data;

   o	Greater Than: If the input value is greater than the threshold value, data is sent.
   
   o	Smaller Than: If the input value is smaller than the threshold value, data is sent.
   
   o	Level Change: If the input value changes by the threshold value, data is sent.
   
   o	Percent Change: If the input value changes by the %threshold, data is sent.
   
•   Threshold Value: Input threshold value.

## OID CALCULATION and EXAMPLE 

### OID Calculation

The query to be sent to the agent device by the manager in the SNMP protocol should be in the following structure;

                        .1.3.6.1.2.1.BlockType.BlockNumber 


The block type can be the following values;
•	1: Bool
•	2: Word
•	3: Float
•	4: Long

The block number should not be written as in the Microdiagram, but should be converted to the following format;

Block No: 3004 >> 30*100+4 = 30.4 

Block No: 3000 >> 30*100+0 = 30.0
 
Block No: 6000 >> 60*100+0 = 60.0

### Example Application

An SNMP Agent block and word, binary, long, analog registers are added to the project as in the Figure.

<center>

![snmp_06](/img/snmp_06.png)
***<center>Figure 6: SNMP Example Application</center>***

</center>

<center>

![snmp_07](/img/snmp_07.png)
***<center>Figure 7: SNMP Example Application Settings</center>***

</center>

In Figure 6, the OID query that the manager will send to get the values of the registers in the project should be as follows;

Binary register with Block Number 2: .1.3.6.1.2.1.1.0.2 

Word register with Block Number 3000: .1.3.6.1.2.1.2.30.0
 
Analog register with Block Number 5000: .1.3.6.1.2.1.3.50.0
 
Long register with Block Number 6000: .1.3.6.1.2.1.4.60.0

MIB Browser program can be used as manager. After the IP and port settings are made, if the above queries are sent from the OID section, the values of the registers will appear as in the Figure.

<center>

![snmp_08](/img/snmp_08.png)
***<center>Figure 8: MIB Browser SNMP Application</center>***

</center>

#### SNMP Trap Application

The way the agent sends data to the manager without sending a query is the Trap method. In this method, the register connected to the input of the Trap block is sent according to the conditions in the Trap block.

<center>

![snmp_09](/img/snmp_09.png)
***<center>Figure 9: SNMP Trap Application</center>***

</center>

Trap settings are entered as follows.

<center>

![snmp_10](/img/snmp_10.png)
***<center>Figure 10: SNMP Trap Block Custom Settings</center>***

</center>

MIB Browser Trap settings are also made as follows.

<center>

![snmp_11](/img/snmp_11.png)
***<center>Figure 11: MIB Browser Trap Receiver Settings</center>***

</center>

If the register value at the input of the trap block is changed and the condition specified in the block settings is met, it will appear on the trap receiver as follows.

<center>

![snmp_12](/img/snmp_12.png)
***<center>Figure 12: MIB Browser Trap Receiver</center>***

</center>






