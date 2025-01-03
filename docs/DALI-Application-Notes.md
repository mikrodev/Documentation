---
title: "DALI Application Notes"
---

## DALI PROTOCOL

### DALI DALI2 Protocol General Information

<center>

![dali_logo](/img/dali_logo.png)
***<center>Figure 1: DALI Protocol</center>***

</center>

The international standard of DALI (Digital Addressable Lighting Interface) technology is IEC 62386.           
DALI provides bidirectional data communication for lighting systems. It is a widely used automation system especially in commercial buildings. Thanks to the DALI protocol; systems such as ballasts, drivers, control units, lighting fixtures and emergency lighting fixtures become controllable from a single point.           
DALI-2 has been developed by adding numerous new commands and features to the original DALI standard.

### DALI Expansion Module Wiring Diagram

<center>

![dali-sema](/img/dali-sema.png)
***<center>Figure 2: DALI Expansion Module Wiring Diagram</center>***

</center>

**Note:** The DALI line expansion module must be powered with a 15V 300mA output; otherwise, communication will not be established.                       
In order to use the DALI power supply in our product, a bridge connection must be made in the terminal connections as seen in the diagram.

**IMPORTANT!**
Before starting the process with the Mikrodev DALI Expansion Module, a USB-DALI Converter must be configured. Configuration; addressing, grouping, power-on, min, max level selections and scene selections. PLC program is written according to these addresses. You can refer to the **DALI Configurator document** for configuration details.

### GDA Board Type (1 DALI Port) Physical Interfaces

<center>

![dali-sema16](/img/dali-sema16.png)
***<center>Figure 3: DALI GDA Board Type Physical Interfaces</center>***

</center>

<center>

![dali-sema4](/img/dali-sema4.png)

</center>

### DALI Block

#### Block Connection

<center>

![dali-sema5](/img/dali-sema5.png)

</center>

#### Block Connection Explanation

It is used to send data packets to the DALI line that cannot be sent from the DALI manager block.

**Inputs:**

1.  Dali Bus: It is the input for the Expansion Switch ID.           
2.	Address Byte: It is the input for the armature address.                   
3.	Data Byte 1: It represents the 1st byte of the data packet to be sent to the DALI line. (The value is sent in decimal format.)                
4.	Data Byte 2: It represents the 2nd byte of the data packet to be sent to the DALI line. (The value is sent in decimal format.)                 
5.	Trig: This is the trigger input of the block. When a trigger is applied here, the data packet intended to be sent through the block is transmitted to the DALI line.                 

**Outputs:** 

1.	DALI0: It provides the light level of the armature.              
2.	Rx: It is number of messages from the armature                  
3.	Tx: It is the number of messages sent to the armature.                   

#### Custom Settings

<center>

![dali-sema6](/img/dali-sema6.png)

</center>

#### Block Explanation

The DALI block allows you to send data packets directly to armatures. Data packets that cannot be sent from the DALI Manager block can be parsed into bytes and transmitted to the DALI line through this block, enabling remote control of armatures. You need to enter the decimal equivalents of the data packet you want to send into the data byte sections.  

Before starting operations with the Mikrodev DALI Expansion Module, configuration must be performed using a USB-DALI Converter. The configuration should include addressing, grouping, power-on, minimum and maximum level selections, and scene selections. The PLC program is written based on these addresses.

**Note:** Data packets sent from DALI switching elements with DALI-2 support can be read via RTU. For this purpose, the DALI block is used.                 
Example: Suppose a DALI switching element is connected at address 0 on DALI bus number 0. To read the data packet from this element, the special settings of the DALI block should be configured as follows:  

<center>

![dali-sema7](/img/dali-sema7.png)
***<center>Figure 4: DALI Block Custom Settings</center>***

</center>

Dalibus No: 0 (The switch ID of the DALI expansion module to which the relevant switching element is connected should be entered.)                                 
Address Byte: 0 (The address number to which the switching element is connected should be entered.)                                       
Data Byte1: 255 (To read the data packet sent from the switching element, the value 255 should be entered here.)                                            
Data Byte2: 255 (To read the data packet sent from the switching element, enter the value 255 here.)                                                            

#### Sample Application

<center>

![dali-sema8](/img/dali-sema8.png)

</center>
<center>

![dali-sema9](/img/dali-sema9.png)

</center>

<center>
![dali-sema10](/img/dali-sema10.png)

</center>

In the example application, a DALI switching element is connected to DALI bus number 0 at address 0. When the switch is in the open position, a value of 0 is read from the Rx output of the DALI block, and when it is in the closed position, a value of 255 is read. Based on these values read from the switching element, the DALI armatures in the field are controlled.

### DALI Manager Block

#### Block Connection

<center>

![dali-sema11](/img/dali-sema11.png)

</center>

#### Block Connection Explanation

**Inputs:**

1.	Bus Id: Expansion Switch ID entry.                
2.	Address: It is the armature address input.             
3.	Address Type: If this input is 0, it is treated as a armature, and if it is 1, as a group address.                 
4.	Max Level: When a trigger is applied to this input, the armature /group gives maximum level illumination.              
5.	Min Level: When a trigger is applied to this input, the armature /group gives a minimum level of illumination.              
6.	Off: When this input is triggered, armature/group closes.               
7.	Dim Value: Brightness value between 85-254 is input to the armature.                 
8.	Dim Trig: When this input is triggered, it applies the value applied to the "Dim Value" input to the armature.                
9.	Scene No: Scene number entry. A value between 0-15 is entered.              
10.	Scene Trig: When this input is triggered, it sends the value applied to the “Scene No” input to the DALI line and the scene application is started.                
11.	Read Trig: From the armature; Trigger is given to read dim level, status and alarm bytes. (ADDRESS TYPE MUST BE 0!)

**Outputs:** 

1.	Actual Level: Returns the luminous level of the armature.            
2.	Status Byte: It contains the status information of the armature. By doing bit parsing, we can obtain the following information;         
•	Bit 0: General alarm. 0 = No Error, 1 = Error             
•	Bit 1: Lamp Fault. 0 = No Error, 1 = Error                
•	Bit 2: Lamp Status. 0 = Off, 1 = On             
•	Bit 3: Limit Error. 0 = No Error, 1 = If value other than Min/Max level is entered, it will be 1.                   
•	Bit 4: Fade Operation. 0 = No Fade operation 1 = Fade operation on.*                  
•	Bit 5: Reset status. 0 = Not in reset state, 1 = All variables (dim, fade, ..etc) are in initial state.        
•	Bit 6: Address Error. 0 = Addressing done, 1 = Addressing not done.           
•	Bit 7: Energy Cycle. 0 = Normal operation, 1 = 1 when first energized, decreases to 0 at next dim level changes etc.          
*fade: It makes the armature flash slowly like an analog ramp, for example, it is the process of going from dim level 0 to 100 in 10 seconds. This 10 sec should be specified in the configuration, we do not do any extra operations on the plc.            
3.	Fail Status Byte: It contains the alarm information of the armature. By doing bit parsing, we can obtain the following information;           
•	0. Bit: Led short circuit        
•	1. Bit: Led open circuit          
•	2. Bit: Load reduction         
•	3. Bit: Load increase         
•	4. Bit: Overcurrent protection           
•	5. Bit: Thermal shutdown            
•	6. Bit: Thermal overload               
•	7. Bit: Reference Error                  
4.	Device Status: It will be 0 when the read trigger comes, if there is a response from the armature, it will be 1, this timeout value can be adjusted with the off delay block and it can be monitored whether the armature is active or not.              
5.	Tx: Number of messages sent to the armature        
6.	Rx: Number of messages from the armature          
7.	Rx Complete: It becomes 0 during the read operation and 1 when the read operation is finished.                 

#### Custom Settings

<center>

![dali-sema12](/img/dali-sema12.png)

</center>

#### Block Explanation

DALI Manager block provides remote access to armatures or groups. Thanks to the DALI Manager block, we can adjust the armature brightness, read the light level of the armetures in the field, armature status information and armature error information from the block outputs.           
Before starting the process with the Mikrodev DALI Expansion Module, a USB-DALI Converter must be configured. Configuration; addressing, grouping, power-on, min, max level selections and scene selections. PLC program is written according to these addresses.           
You can refer to the **DALI Configurator document** for configuration details.    

#### Sample Application 

<center>

![dali-sema13](/img/dali-sema13.png)

</center>

In the example application, a dim value of 90 was sent to the armature at address 0, connected to the Switch ID 0 input of the DALI expansion module, using the DALI manager block.                  
When the Read trig input was triggered, the DALI manager block's output read the dim value of 90.

### DALI Manager Block 2

#### Block Connection

<center>

![dali-sema14](/img/dali-sema14.png)

</center>

#### Block Connection Explanation

**Inputs:**

1.	Bus Id: Expansion Switch ID entry.                
2.	Address: It is the armature address input.             
3.	Address Type: If this input is 0, it is treated as a armature, and if it is 1, as a group address.                
4.	Max Level: When a trigger is applied to this input, the armature /group gives maximum level illumination.              
5.	Min Level: When a trigger is applied to this input, the armature /group gives a minimum level of illumination.            
6.	Off: When this input is triggered, armature/group closes.               
7.	Dim Value: Brightness value between 85-254 is input to the armature.             
8.	Dim Trig: When this input is triggered, it applies the value applied to the "Dim Value" input to the armature.               
9.	Scene No: Scene number entry. A value between 0-15 is entered.                 
10.	Scene Trig: When this input is triggered, it sends the value applied to the “Scene No” input to the DALI line and the scene application is started.             
11.	Read Trig: From the armature; Trigger is given to read dim level, status and alarm bytes. (ADDRESS TYPE MUST BE 0!)                

**Outputs:** Updates when read trig is applied.

1.	Actual Level: Returns the luminous level of the armature.           
2.	Status Byte: It contains the status information of the armature. By doing bit parsing, we can obtain the following information;           
•	Bit 0: General alarm. 0 = No Error, 1 = Error              
•	Bit 1: Lamp Fault. 0 = No Error, 1 = Error               
•	Bit 2: Lamp Status. 0 = Off, 1 = On            
•	Bit 3: Limit Error. 0 = No Error, 1 = If value other than Min/Max level is entered, it will be 1.             
•	Bit 4: Fade Operation. 0 = No Fade operation 1 = Fade operation on.*             
•	Bit 5: Reset status. 0 = Not in reset state, 1 = All variables (dim, fade, ..etc) are in initial state.             
•	Bit 6: Address Error. 0 = Addressing done, 1 = Addressing not done.               
•	Bit 7: Energy Cycle. 0 = Normal operation, 1 = 1 when first energized, decreases to 0 at next dim level changes etc.               
*fade: It makes the luminaire flash slowly like an analog ramp, for example, it is the process of going from dim level 0 to 100 in 10 seconds. This 10 sec should be specified in the configuration, we do not do any extra operations on the plc.                
3.	Fail Status Byte: It contains the alarm information of the armature. By doing bit parsing, we can obtain the following information;            
•	0. Bit: Led short circuit           
•	1. Bit: Led open circuit          
•	2. Bit: Load reduction            
•	3. Bit: Load increase            
•	4. Bit: Overcurrent protection            
•	5. Bit: Thermal shutdown          
•	6. Bit: Thermal overload          
•	7. Bit: Reference Error            
4.	Device Status: It will be 0 when the read trigger comes, if there is a response from the armature, it will be 1, this timeout value can be adjusted with the off delay block and it can be monitored whether the armature is active or not.

#### Custom Settings

<center>

![dali-sema15](/img/dali-sema15.png)

</center>

#### Block Explanation

DALI Manager block provides remote access to armatures or groups. Thanks to the DALI Manager block, we can adjust the armature brightness, read the light level of the armatures in the field, armature status information and luminaire error information from the block outputs.           
Before starting the process with the Mikrodev DALI Expansion Module, a USB-DALI Converter must be configured. Configuration; addressing, grouping, power-on, min, max level selections and scene selections. PLC program is written according to these addresses.            
You can refer to the **DALI Configurator document** for configuration details.






















Pin Definitions;

•	Soc: It is used for TCP socket block connection. Mqtt Config block cannot be used without TCP socket block.

•	Trg: When periodic data transfer is desired, a trigger should be given to the mqtt config block from this input. If this entry is left blank, data is transmitted according to other specified conditions.

•	Mqtt0: Output showing the connection status. The information from this output is as follows;

           
          - 0: TCP Disconnected
          - 1: TCP Connecting
          - 2: MQTT Connecting
          - 3: MQTT Connected
           
•   Sta: Output showing the communication status. The information from this output means: 
	      - 0: MQTT Send Conn Pack
	      - 1: MQTT Idle Status
          - 2: MQTT Subscribe Status
	      - 3: MQTT Publish Status
		  
•	Pub: Output showing Publish timeout.


Mqtt Config Block Custom Settings;

<center>

![mqtt_03](/img/mqtt_03.png)
***<center>Figure 3: Mqtt Config Block Custom Settings</center>***

</center>		  

Definitions;

•	Client Id: The field where the device is manually given an ID for the broker connection.

•	User Name: The field where the device is named for the broker connection.

•	Password: Password field entered in the device for the broker connection.

•	Keep Alive: If the connection between the broker and the Publisher is lost, the waiting time before reconnecting.

•	Clean Session: If selected, messages will be broadcast if there is communication between the device and the broker, otherwise the information recorded in communication interruptions will not be sent.

•	Use Device Serial as User Name: If selected, the serial number of the device is used as the device username.

•	SSL Enabled: It is marked to make the connection with SSL. (Only active in DM Series.)

#### TCP Socket Block Connection

The output of the TCP Socket block is connected to the Soc input of the Mqtt Config block.

<center>

![mqtt_04](/img/mqtt_04.png)
***<center>Figure 4: TCP Socket Block and Mqtt Block Connection</center>***

</center>


The special settings of the TCP Socket block should be made for mqtt connection as follows;

•	TCP Client should be selected as the socket type,

•	The mqtt server IP to be connected to the Server IP section must be entered,

•	Mqtt server port information should be entered in the Server Port Section,

•	As for the media type, Ethernet, GSM or WI-FI can be selected according to the characteristics of the microdev device used.

<center>

![mqtt_05](/img/mqtt_05.png)
***<center>Figure 5: TCP Block Custom Settings</center>***

</center>

## MQTT Table

The table where all MQTT-related adjustments are made can be accessed from the Projects/MQTT Table tab.

<center>

![mqtt_06](/img/mqtt_06.png)
***<center>Figure 6: Mqtt Table</center>***

</center>

### Topics The Publish

In this table, the Publish topic is entered to publish the data to the broker. The topic name is entered on the screen that appears by pressing the Add Topic button in the table. Block definitions where you can enable/disable Qos, Retain, Last Will, Payload settings, send on exchange and periodically send options are also made on this page.

<center>

![mqtt_07](/img/mqtt_07.png)
***<center>Figure 7: Topic Definition</center>***

</center>

Definitions;

• Topic Name: The field where the topics you will send the messages are determined.

• QoS: Quality of Service refers to the agreement between the sender of a message and the receiver of the message. The QoS levels are as follows;

   o QoS 0: Minimum data transfer is ensured. At this level, each message is forwarded to a subscriber and no confirmation is received that the message has arrived.
   
   o QoS 1: The broker tries to transmit the message and waits for an acknowledgment response from the subscriber, if no confirmation is received within a specified time frame, the message is sent again.
   
   o QoS 2: The broker receives two acknowledgments to ensure that the subscriber receives the message and only once.
   
• Retain: If this option is checked, if the connection between the broker and the subscriber is broken, the last value will be saved in memory.

• Is Last Will Topic: Last will topic. If a topic is created and this option is checked, the message under this topic will be forwarded to the subscribers when the device is disconnected from the broker.

• Payload Type: It is determined in which format the message content will be sent. Subscriber interprets incoming messages with this information. “MJson v1” can be selected if a time stamp is desired to be added to the sent messages.

• On Change Send Enable Block: Block selection added in the diagram to enable or disable the sending feature of the created topic on change.

• Periodic Send Enable Block: Block selection added in the diagram to enable or disable the periodic sending feature of the created topic.

#### Publish Blocks for Topic

In this table, the blocks to be published for the relevant Topic are selected. After clicking the topic in the Publish to topic table, the Add Entry button becomes active and by pressing this button, the block to be published in the project is selected. How to transmit the data can also be selected from the screen.

<center>

![mqtt_08](/img/mqtt_08.png)
***<center>Figure 8: Add Block for Message</center>***

</center>

Definitions;

• Select Block for Subscribe on Topic: The area where the block that you want to send as a message in your project is selected.

• Send On Change: Send selection field on exchange

    o On Level Change: Send when there is a change in the value specified in Change Value, if 0 is written, it will be sent in every change.
	
    o On Percent Change: Send when there is a percentage change of value specified in Change Value, for example 10%.
	
• Change Value: Change amount input field.

• Send Periodcally: If checked, a message is sent every time a trigger comes to the trg input of the mqtt config block.

• Select Block for Quality Value: The block in which the Quality value included in the message content is selected in MJson v1 payload type.

• Select Trigger Block: Apart from change or periodicity, we can send the message by triggering the block we will specify here.

<center>

![mqtt_09](/img/mqtt_09.png)
***<center>Figure 9: Message Formats</center>***

</center>


Note: Blocks used in messages; It can be sent and received with the block number (B:3006) under the block, or it can be added to the messages with line tags (word_publish_ch). This selection is made under the Mqtt Format tab in the block properties.

•	Message that will appear if View and Set is selected;

<center>

![mqtt_10](/img/mqtt_10.png)
***<center>Figure 10: View And Set Select</center>***

</center>

•	The message that will appear if No View is selected;

<center>

![mqtt_11](/img/mqtt_11.png)
***<center>Figure 11: No View Select</center>***

</center>

### Subscribe to Topic

In this table, the relevant subscribe topic is entered to send data from the broker to the device.

<center>

![mqtt_12](/img/mqtt_12.png)
***<center>Figure 12: Topic to Subscribe Screen</center>***

</center>

Definitions;

• Subscribe Topic Name: Enter the name of the topic to be subscribed to.

• QoS: Service quality level is selected.

• Parse Format: Select the format in which the messages will be parsed.

#### Subscribed Block Values for Topic

From this screen, the blocks to be associated for the subscribe topic are added. To use line tags, mqtt format should be selected as view and set from the special settings of the relevant block.

<center>

![mqtt_13](/img/mqtt_13.png)
***<center>Figure 13: Subscribed Block Values for Topic Screen</center>***

</center>

## Special Applications

### Ubidots

When you want to use Mikrodev PLC with ubidots mqtt, the following steps should be followed in addition to the settings described above;

1. From the Mqtt Config block custom settings, Ubidots ID should be entered in the Client Id section and the Token Key of the device created in Ubidots should be entered in the Username section.

2. Publish Topic: Enter as /v1.6/devices/< Device Name >. There is no need to define variables in the ubidots calculation for the blocks to be associated. With the first sent data, the variables are created automatically by Ubidots. The data is read on the Ubidots server with the block number or line tag.

3. Subscribe Topic: Entered as /v1.6/devices/< Device Name >/< Value Name >. A separate connection must be defined for each data to be subscribed. Data must be defined in the Ubidots environment. If the line tag is to be used, the variable created in Ubidots should have the same name as the line tag, if the line tag is to be transmitted only with the block number, the variable with the same name as the block number should be defined in the ubidots environment.

## Example Applications

### Topic Publish

General Configuration;
After the project is created, the diagram is designed as in the figure, the mqtt formats of word and analog registers are selected as view and set.

<center>

![mqtt_14](/img/mqtt_14.png)
***<center>Figure 14: Example Project Configuration</center>***

</center>

Send On Change;

Follow Projects > MQTT Table >Topics to Publish > Add Topic.

<center>

![mqtt_15](/img/mqtt_15.png)
***<center>Figure 15: Add Topic Screen</center>***

</center>

Select the Topic name, enter the High gate we have prepared in the diagram for the OnChange Send Enable Block, and click add.

Then, from the Publish Blocks for Topic section in a subtable, click to the Add Entry.

<center>

![mqtt_16](/img/mqtt_16.png)
***<center>Figure 16: Add Block Into The Topic Screen</center>***

</center>

Select the block in the diagram that you want to broadcast as a message to the Select Block for Subscribe on Topic section.
In the SendOn Change section, On Level Change is selected and Change Value is set to 0 so that it can send a message every time the value changes. Click on Add and continue.

The project is loaded on the device and online monitoring is opened.

Subscribe to the topic opened with a program such as MQTTBox. After watching the mqtt config block value of 3 in online monitoring in the Mikrodiagram, when the value of the register is changed, it is seen that the value is published.

<center>

![mqtt_17](/img/mqtt_17.png)
***<center>Figure 17: Messages of Send on Change</center>***

</center>

Periodic Send;
In addition to the configuration sent in the change, a real time pulse generator is added to the trg input of the mqtt config block,

<center>

![mqtt_18](/img/mqtt_18.png)
***<center>Figure 18: Sample Project with Periodic Sending Attached</center>***

</center>

Real time pulse generator is set for 5 seconds to broadcast a message periodically every 5 seconds and the created topic is changed as follows. OnChange Enable Block= NULL and Set the High gate in the Periodic Send Enable Block diagram, In the Select Block for Subscribe on Topic section, select SendOn Change= None and click Send Periodically.

<center>

![mqtt_19](/img/mqtt_19.png)
***<center>Figure 19: Changes Made for Periodic Sending</center>***

</center>

The project is loaded back to the device and incoming messages are observed.

<center>

![mqtt_20](/img/mqtt_20.png)
***<center>Figure 20: Periodically Send Messages</center>***

</center>

### Subscribe Topic

General Configuration;

After the project is created, the diagram is designed as in the figure, the mqtt formats of the word and analog registers and the relay output are selected as view and set.

<center>

![mqtt_21](/img/mqtt_21.png)
***<center>Figure 21: Sample Project Configuration with Added Blocks to Subscribe</center>***

</center>

Follow Projects > MQTT Table >Topics to Subscribe > Add Topic.

<center>

![mqtt_22](/img/mqtt_22.png)
***<center>Figure 22: Name of Topic to Subscribe</center>***

</center>

Enter the topic name and click Add. Then, the add entry is clicked from the Publish Blocks for Topic section in a subtable.

<center>

![mqtt_23](/img/mqtt_23.png)
***<center>Figure 23: Selection Block of Subscribtion</center>***

</center>

Here, the block to which the subscribed value will be transferred is selected.

<center>

![mqtt_24](/img/mqtt_24.png)
***<center>Figure 24: Subscriber Blocks</center>***

</center>

After all blocks to be subscribed are determined, the project is loaded into the device.

<center>

![mqtt_25](/img/mqtt_25.png)

</center>

When the message is published to the test2 topic with the above format, the final state of the variables is as follows;

<center>

![mqtt_26](/img/mqtt_26.png)
***<center>Figure 25: Values of Subscribed</center>***

</center>

## SETTING UP MQTT CONNECTION WITH SSL

Secure Sockets Layer (SSL) and Transport Layer security (TLS) are protocols that provide secure communications over a computer network or link. SSL/TLS provides data encryption, data integrity and authentication.

“SSL Enabled” option in block special settings of Mqtt Config Block; It provides secure MQTT connection with SSL Certificate. This option only active in DM Series.

In order to use this feature, an SSL Certificate must be uploaded on the device and the "SSL Enabled" option of the Mqtt Config block must be checked.

<center>

![mqtt_27](/img/mqtt_27.png)
***<center>Figure 26: Config Block SSL Enabled Checked</center>***

</center>