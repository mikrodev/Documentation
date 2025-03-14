---
title: MDV61850 Browser Application Notes
---

**Note:** This document covers DM series Mikrodev devices with version 19 and above. For DM and RTU series devices with versions prior to 19, please refer to the IEC 61850 Application Note Version 1.0 document.

## IEC61850 Protocol

IEC 61850 is a communication protocol used especially in electrical distribution systems. It was developed to standardize and facilitate data exchange between components in the electrical power infrastructure. This standard ensures that components such as transformers, circuit breakers, protection relays, and other power grid elements can communicate securely and quickly with each other.

Mikrodev supports the IEC 61850 protocol in many of its RTU (Remote Terminal Unit) products. The necessary configuration can be easily done thanks to the IEC 61850 Browser tool in the Telediagram programming editor. The Mikrodev RTU device operates as a Client and uses files with the ".scl" extension to configure IEDs (Intelligent Electronic Devices).                

There are three different data reading methods via the IEC 61850 Browser:     

*  **Data Object Reading**         
*  **Dataset Reading**           
*  **Report Reading**   

These options determine which data will be retrieved and how, and ensure their association with the relevant blocks in the editor**. The settings made are exported and must be imported into the IEC 61850 Table Panel located in the Telediagram programming editor. Communication is completed by defining the IP address, port information, and connection commands of the IEDs via this panel.

<center>

![mdv61850_figure1](/img/mdv61850_figure1.png)
***<center>Figure 1: IEC61850 – Mikrodev Devices</center>***

</center>

## MDV61850 Browser

MDV61850 Browser allows you to open and view/configure the data in 61850 configuration files (.cid, .icd, .scl) retrieved from relays. The browser includes the following sections:   

*  **Data Object Reading**       
*  **Dataset Reading**         
*  **Report Reading**         

These sections categorize the information received from the IED, allowing users to easily select the data they need. Correct configuration via the MDV61850 Browser is essential for enabling communication between the Mikrodev RTU and the IED.

### Creating a New Project with MDV61850 Browser

To open the MDV61850 Browser, go to the Tools menu in the Telediagram program and click on the MDV61850 Browser option.

<center>

![iec61850_figure1](/img/iec61850_figure1.png)
***<center>Figure 2: Opening MDV61850 Browser</center>***

</center>

After the MDV61850 Browser opens, click on the New Project option in the File menu.

<center>

![iec61850_figure2](/img/iec61850_figure2.png)
***<center>Figure 3: Creating a New Project in the Browser</center>***

</center>

In the window that opens, select the 61850 configuration file (.cid, .icd, .scl) retrieved from the relay.

<center>

![iec61850_figure3](/img/iec61850_figure3.png)
***<center>Figure 4: IEC61850 Configuration File Selection Screen</center>***

</center>

Enter a name for the project and select the file path where it will be saved. Create a new project by clicking the Create Project button.

<center>

![iec61850_figure4](/img/iec61850_figure4.png)
***<center>Figure 5: Project Creation Screen</center>***

</center>

When the new project is successfully created, information about the 61850 configuration file retrieved from the relay is displayed on the Info screen. If the message "Project created" appears on the screen, the process has been completed successfully.

<center>

![iec61850_figure5](/img/iec61850_figure5.png)
***<center>Figure 6: Info Screen</center>***

</center>

The new project is saved with the specified name and the ".sclpro" extension. This file can be opened and edited again via the MDV61850 Browser, or existing configurations can be viewed.


### Opening a Project File with MDV61850 Browser

To open a previously created project file with the ".sclpro" extension, follow these steps:        
In the MDV61850 Browser, click on the Open File option in the File menu.      
Alternatively, a project can be selected from the Last Projects tab to be opened.

<center>

![mdv61850_figure2](/img/mdv61850_figure2.png)
***<center>Figure 7: Opening a Saved Project File</center>***

</center>

### MDV61850 Browser Interface Options

After the ".sclpro" file is opened in the browser, the screen shown in Figure 8 appears.

<center>

![mdv61850_figure3](/img/mdv61850_figure3.png)
***<center>Figure 8: MDV61850 Browser Interface</center>***

</center>

#### File Menu

The File menu of the MDV61850 Browser includes the following options:

*   **New Project:** Used to create a new ".sclpro" file.    
*   **Open Project:** Used to open previously created ".sclpro" files.      
*   **Recent Projects:** Displays a list of recently opened projects, from which a selection can be made.     
*   **Close Project:** Closes the currently open project.        
*   **Save Project:** Used to save the changes made.         
*   **Export to Excel:** Allows exporting the configurations made in the MDV61850 Browser to an Excel format so that they can be imported into the IEC 61850 Table section in Telediagram.                        
*   **Import from Excel:** Used to import an Excel file taken from the IEC 61850 Table section configured in Telediagram into the MDV61850 Browser.           
*   **Recent Excel Imports:** Displays a list of recently imported Excel files, from which a selection can be made.

<center>

![mdv61850_figure4](/img/mdv61850_figure4.png)
***<center>Figure 9: File Menu</center>***

</center>

#### Help Menu

The "About" option in the Help menu is used to view the version information of the MDV61850 Browser.

<center>

![mdv61850_figure5](/img/mdv61850_figure5.png)
***<center>Figure 10: About Option</center>***

</center>

#### File Shortcuts

Below the File and Help menus, there are file shortcuts that provide quick access to frequently used operations. These shortcuts allow for quick execution of the following operations: 

*   **Create New Project:** Creates a new ".sclpro" file.        
*   **Open Project:** Opens previously created projects with the ".sclpro" extension.         
*   **Save Project:** Saves the changes on the currently open project.          
*   **Close Project:** Closes the currently open project.          
*   **Export Configuration to Excel:** Used to export the current project configurations to Excel format.

<center>

![mdv61850_figure6](/img/mdv61850_figure6.png)
***<center>Figure 11: File Shortcuts</center>***

</center>

#### Hide Top Panel – Show Top Panel Option

The Hide Top Panel – Show Top Panel option has the function of hiding or showing the top panel in the MDV61850 Browser interface. 

The relay's IP and port information are entered via this panel to establish a connection with the relay. The data objects, data sets, and reports within the relay are displayed instantaneously.

You can expand the workspace by hiding the panel or access device connection settings by showing it again.

<center>

![mdv61850_figure7](/img/mdv61850_figure7.png)
***<center>Figure 12: Hide Top Panel-Show Top Panel Option</center>***

</center>

### MDV61850 Browser Interface Sections

After the selected ".sclpro" file is loaded, the Browser interface is divided into two main sections: Variable Engineering and RTU/PLC Integration.

These two sections enable effective configuration of the communication between IEC 61850 protocol compliant IEDs and Mikrodev RTU devices.

### Variable Engineering

This section contains information from the 61850 configuration file of the relay used in the project.

Relay communication information, data objects, data sets, and reports can be viewed.        
The user can specify which data will be read and how it will be configured in this section.     

The Con, DO, DS, and RP buttons next to the SCL Model text allow users to quickly access the relay communication and data management menus:

*   **Con (Connection):** Provides quick access to the relay's communication settings.         
*   **DO (Data Objects):** Directs to the data objects menu.        
*   **DS (Data Sets):** Provides access to the data sets viewing and configuration menu.           
*   **RP (Reports):** Allows switching to the data reports section.             
These buttons allow users to quickly access relay communication settings and data configuration screens.

The Data Object Table, Data Sets, and Reports sections on the right side of the screen can be hidden or displayed using the buttons on the top panel:  

*   **Data Objects:** Opens or hides the data objects table.         
*   **Data Sets:** Opens or hides the data sets table.        
*   **Reports:** Opens or hides the data reports table.           

<center>

![mdv61850_figure8](/img/mdv61850_figure8.png)
***<center>Figure 13: Variable Engineering Section</center>***

</center>

### Connection Section

The connection section displays the connection information related to the relay, which is found in the relay's 61850 configuration file.

<center>

![mdv61850_figure9](/img/mdv61850_figure9.png)
***<center>Figure 14: Relay Connection Settings</center>***

</center>

In the MDV61850 Browser, relay connection and configuration settings are managed through the following parameters:

*   **Id:** Relay ID         
*   **IED Name:** The name of the relay; this part can be changed if desired.         
*   **IP Adresi:** The IP address of the relay; this part can be changed if desired.        
*   **Port:** The communication port number of the relay; this part can be changed if desired.        
*   **Interface:** Ethernet port information of the Mikrodev RTU           
*   **Connection Enable Signal:** This signal is used to control the connection between the relay and the RTU. A block to be associated from Telediagram is selected.            
    When a trigger signal (value 1) is applied to this label in Telediagram, the RTU connects to the relay and communication is initiated.           
    To disconnect, this signal must be set to 0.
*   **Dev Status Signal:** This is a signal indicating the connection status and must be assigned with an appropriate block to be associated from Telediagram.         
    The possible values and their descriptions for this signal are as follows:

    *   0 CLOSED: Connection is closed.          
    *   1 CONNECTING: Connecting.          
    *   2 CONNECTED: Connected.              
    *   3 CLOSING: Connection is being closed.           
    *   15 NAMEPLATE_SEND: Nameplate information is being sent.          
    *   16 NAMEPLATE_WAIT: Waiting for nameplate information.             
    *   17 NAMEPLATE_FAILED: Nameplate information could not be retrieved (error occurred).              

    **Note:** When the CONNECTED (2) value is received, the connection between the RTU and the relay has been successfully established.             
    When CLOSED (0) or CLOSING (3) values are received, it indicates that the connection is closed or in the process of closing.           
    The values related to NAMEPLATE (15-17) are used during the connection process while retrieving device information from the relay.

*   **NamPlt.configRev:** Provides information about the configuration version of the relay's 61850 configuration file.       
*   **Nam.Plt.check:** Activates the configuration version control. A value of 1 is entered in this section if control is desired. If nameplate control is enabled, nameplate incompatibility causes the ilgili server to be put into an initialization error state, and no service is run for this server.           
*   **ReportSets:** Allows certain data to be reported periodically or based on triggered events. In MDV61850 Browser, report sets are managed via Telediagram and associated with specific data objects.               
*   **CltTestFlag Signal:** Used to determine if the Client (RTU) is in test mode. Test mode is generally used to test if the system is working correctly before applying control commands.                
*   **CltSyncCheck Signal:** Used to perform verifications related to time synchronization (Time Sync). If synchronization fails, a ClockNotSynchronized status can be created. Time verification is done using NTP or other synchronization mechanisms.               
*   **CltInterlockCheck Signal:** Used to perform interlocking check on the Client side. Before sending a control command from an RTU or SCADA system, it checks whether the relevant interlocking conditions are met. If interlocking is active, the command is not executed, and an error code is returned.             
*   **Control Orginator Category:** The authorization level of the controlling entity. Each category has a specific control authority, and which level will be used depends on system requirements. The authorization levels and their descriptions are as follows:

    *   1: Bay Control level          
    *   2: Station Control level          
    *   3: Remote Control         
    *   4: Automatic Bay control           
    *   5: Automatic Station control       
    *   6: Automatic Remote control         
    *   7: Used for maintenance operations           
    *   8: Process control

*   **Control Orginator Identification:** Identification information of the controlling entity.          
*   **Time Sync Indication Signal:** This signal indicates the time synchronization status. If synchronization fails, the ClockNotSynchronized signal is raised (1). The MDV61850 Browser performs synchronization using methods like NTP. When synchronization is successful, this signal is reset.

### Data Object Section

The data objects contained within the 61850 configuration file of the relay opened in the browser are displayed in this section

<center>

![mdv61850_figure10](/img/mdv61850_figure10.png)
***<center>Figure 15: Data Object Section</center>***

</center>

The desired file is opened by double-clicking, and the data objects located on the right side are displayed in the data object table.

<center>

![mdv61850_figure11](/img/mdv61850_figure11.png)
***<center>Figure 16: Selecting Data Object</center>***

</center>

### Data Object Table

The selected data objects are displayed in the Data Object Table in the MDV61850 Browser. The user can select the blocks to be associated in the Telediagram project through the columns where input is allowed.

*   **Name:** The name of the data object in the relay's 61850 configuration file. It is automatically populated based on the selection.                     
*   **Function:** Specifies the function of the data object defined in the relay's IEC 61850 configuration file (CID/SCL). This field is automatically populated by the MDV61850 Browser and can be one of the following function types:         

    * ST (Status): Data objects containing status information. Represents instantaneous status  data provided by the relay.         
    * CF (Configuration): Data objects containing configuration variables. Represents configuration settings in the relay.                
    * DC (Direct Control): Data objects containing direct control commands. Used to trigger direct actions in the relay.         
    * CO (Command): Data objects used for sending commands. These objects are used by RTU or SCADA systems to send control commands to the relay.          
    * MX (Measured Value): Data objects containing measured values. Includes analog measurements such as current, voltage, power.        

    **Note:** While ST and MX objects usually contain read-only data, DC and CO objects can be writable or contain commands.

*   **MMS_Type:** Variable type. This section is automatically updated according to the data object selected in the project. The variable type of the blocks to be associated in Telediagram is assigned according to the MMS type determined here.   

<center>

![mdv61850_figure12](/img/mdv61850_figure12.png)

</center>
<center>

![mdv61850_figure13](/img/mdv61850_figure13.png)

</center>

*   **Read Trig Signal:** The trigger block to be associated in Telediagram to read the data object is selected.            
*   **Write Trig Signal:** The trigger block to be associated in Telediagram to send a command to the data object is selected.            
*   **Status Signal:** Used to track the status of read or write operations. The block to be associated from Telediagram is selected. The possible values and their descriptions for this signal are as follows:

    * 0: WAITING/FAIL: Request response is awaited or the operation failed.              
    * 1: OK: The request was completed successfully.       
    * 2: MISMATCH: Operation failed due to incompatibility.           
    * 3: TIMEOUT: Operation failed due to timeout.           
    * 4: FAILED: Operation failed due to internal error.      
    * 100 and above: Operation failed due to library error. (Error code: can be calculated as status value + 100). 

    **Note:** When the Status Signal value is "1" (OK), the read or write operation has been completed successfully. When the value is "0" (WAITING/FAIL), the operation has failed or a response is being awaited.

    **Note:** When the Status Signal is 100 or above, the value written in CtrlErrCode Signal should be checked for the error code. The Library Errors and their descriptions written in CtrlErrCode are as follows.The value read should be the error code written here + 100. For example, the value to read for the IED_ERROR_NOT_CONNECTED code is 100+1 = 101.

    * 0  IED_ERROR_OK: No error, service request completed successfully.       
    * 1  IED_ERROR_NOT_CONNECTED: Client is not connected, service request cannot be performed.         
    * 2  IED_ERROR_ALREADY_CONNECTED: Connection request failed because the client is already connected.            
    * 3  IED_ERROR_CONNECTION_LOST: Connection lost, service request cannot be performed.            
    * 4  IED_ERROR_SERVICE_NOT_SUPPORTED: Service or parameter not supported by client or server is being used.           
    * 5  IED_ERROR_CONNECTION_REJECTED: Server rejected the connection request.            
    * 6  IED_ERROR_OUTSTANDING_CALL_LIMIT_REACHED: Maximum concurrent call limit exceeded, new request cannot be sent.                  
    * 10  IED_ERROR_USER_PROVIDED_INVALID_ARGUMENT: API function called with an invalid argument provided by the user.         
    * 11  IED_ERROR_ENABLE_REPORT_FAILED_DATASET_MISMATCH: Report activation failed, dataset mismatch.          
    * 12  IED_ERROR_OBJECT_REFERENCE_INVALID: Object reference is invalid.           
    * 13  IED_ERROR_UNEXPECTED_VALUE_RECEIVED: Unexpected type of object received.           
    * 20  IED_ERROR_TIMEOUT: Communication with the server failed, timeout occurred.       
    * 21  IED_ERROR_ACCESS_DENIED: Server denied access to the object or service.                
    * 22  IED_ERROR_OBJECT_DOES_NOT_EXIST: Server reported that the requested object does not exist.               
    * 23  IED_ERROR_OBJECT_EXISTS: Server reported that the requested object already exists.              
    * 24  IED_ERROR_OBJECT_ACCESS_UNSUPPORTED: Server does not support the requested access method.           
    * 25  IED_ERROR_TYPE_INCONSISTENT: Server reported that the requested object is not of the expected type.      
    * 26  IED_ERROR_TEMPORARILY_UNAVAILABLE: Object or service temporarily unavailable.         
    * 27  IED_ERROR_OBJECT_UNDEFINED: Requested object is not defined on the server.            
    * 28  IED_ERROR_INVALID_ADDRESS: Invalid address error.           
    * 29  IED_ERROR_HARDWARE_FAULT: Service failed due to hardware fault.                
    * 30  IED_ERROR_TYPE_UNSUPPORTED: Server does not support the requested data type.           
    * 31  IED_ERROR_OBJECT_ATTRIBUTE_INCONSISTENT: Server reported that the provided object attributes are inconsistent.         
    * 32  IED_ERROR_OBJECT_VALUE_INVALID: Server reported that the provided object value is invalid.             
    * 33  IED_ERROR_OBJECT_INVALIDATED: Object invalidated.         
    * 34  IED_ERROR_MALFORMED_MESSAGE: Message received from the server is in invalid format.         
    * 98  IED_ERROR_SERVICE_NOT_IMPLEMENTED: Service not implemented by the server.         
    * 99  IED_ERROR_UNKNOWN: Unknown error occurred.          

*   **CtlModel:** Parameter determining the control mode, and one of the following control modes can be selected:

    * DO (Direct-Operate): Provides direct control with normal safety precautions.          
    * SBO (Select-Before-Operate): Provides control with select & operate logic with normal safety precautions.           
    * DOes (Direct-Operate with Enhanced Security): Provides direct control with enhanced security precautions.         
    * SBOes (Select-Before-Operate with Enhanced Security): Provides control with select & operate logic with enhanced security precautions.       

*   **Data Signal:** The value of the relevant data object on the relay is read via this block. The block to be associated from Telediagram is selected.        
*   **Time Activated Ctrl:** Enables control commands to be executed with a specific timing.         
    For example, scheduled operations such as opening or closing a circuit breaker at a specific time are performed.         
*   **Enh CtrlCmdTerm Signal:** Used to ensure the termination of enhanced control commands. When the command operation is completed, this signal is activated. If the control command fails, error codes can be tracked via the CtrlErrCode Signal.        
* **CtrlErrCode Signal:** Explains the error reasons returned in case of failure of control commands. The block to be associated from Telediagram is selected. The possible values and their descriptions for this signal are as follows:

    * 0  ADD_CAUSE_UNKNOWN  Unknown error.       
    * 1  ADD_CAUSE_NOT_SUPPORTED  Unsupported operation.          
    * 2  ADD_CAUSE_BLOCKED_BY_SWITCHING_HIERARCHY Blocked by switching hierarchy.          
    * 3  ADD_CAUSE_SELECT_FAILED  Selection failed.          
    * 4  ADD_CAUSE_INVALID_POSITION  Invalid position.         
    * 5  ADD_CAUSE_POSITION_REACHED  Position already reached.           
    * 6  ADD_CAUSE_PARAMETER_CHANGE_IN_EXECUTION  Parameter change occurred during execution.           
    * 7  ADD_CAUSE_STEP_LIMIT  Step limit reached.        
    * 8  ADD_CAUSE_BLOCKED_BY_MODE  Blocked by mode.        
    * 9  ADD_CAUSE_BLOCKED_BY_PROCESS  Blocked by process.         
    * 10 ADD_CAUSE_BLOCKED_BY_INTERLOCKING  Blocked by interlocking mechanism.           
    * 11 ADD_CAUSE_BLOCKED_BY_SYNCHROCHECK  Blocked by synchronization check.             
    * 12 ADD_CAUSE_COMMAND_ALREADY_IN_EXECUTION  Command is already being executed.             
    * 13 ADD_CAUSE_BLOCKED_BY_HEALTH  Blocked due to health status.           
    * 14 ADD_CAUSE_1_OF_N_CONTROL  Blocked due to 1/N control mechanism.               
    * 15 ADD_CAUSE_ABORTION_BY_CANCEL  Operation canceled.             
    * 16 ADD_CAUSE_TIME_LIMIT_OVER  Time limit exceeded.                 
    * 17 ADD_CAUSE_ABORTION_BY_TRIP  Operation canceled due to trip.            
    * 18 ADD_CAUSE_OBJECT_NOT_SELECTED  Object not selected.             
    * 19 ADD_CAUSE_OBJECT_ALREADY_SELECTED  Object is already selected.             
    * 20 ADD_CAUSE_NO_ACCESS_AUTHORITY  Unauthorized access.               
    * 21 ADD_CAUSE_ENDED_WITH_OVERSHOOT  Operation completed due to overshoot.         
    * 22 ADD_CAUSE_ABORTION_DUE_TO_DEVIATION  Operation canceled due to deviation.              
    * 23 ADD_CAUSE_ABORTION_BY_COMMUNICATION_LOSS  Operation canceled due to communication loss.              
    * 24 ADD_CAUSE_ABORTION_BY_COMMAND  Operation canceled by command.            
    * 25 ADD_CAUSE_NONE  No error.          
    * 26 ADD_CAUSE_INCONSISTENT_PARAMETERS  Operation failed due to inconsistent parameters.             
    * 27 ADD_CAUSE_LOCKED_BY_OTHER_CLIENT  Locked by another client.                

    Special 61850 Error Codes:    
    * 100  E_61850CONTROL_ERROR_MODELMISMATCH  Model mismatch error.       
    * 101  E_61850CONTROL_ERROR_INITIALIZATION  Initialization error.         
    * 102  E_61850CONTROL_ERROR_TIMEOUT  Timeout error.        

* **Selection Type:** Specifies the selection method to be used in control operations.     
    * With Value: The selection operation is performed by assigning a value to the target object during the selection process.        
    * Without Value: The selection operation is done by only specifying the object; value specification is done in the next step.   
Defines how the Select-Before-Operate (SBO) mechanism will be implemented.       

* **Command Type Signal:** A signal used to determine the type of IEC 61850 control commands. This signal allows the RTU or SCADA system to determine how to send a control command.

### Data Set Section

The data sets contained within the 61850 configuration file of the relay opened in the browser are displayed in this section.  

<center>

![mdv61850_figure14](/img/mdv61850_figure14.png)
***<center>Figure 17: Selecting Data Set</center>***

</center>

The desired data set file can be opened by double-clicking.      
The opened data sets are listed in the Data Sets Table on the right side.          

<center>

![mdv61850_figure15](/img/mdv61850_figure15.png)
***<center>Figure 18: Data Set Section</center>***

</center>

**Note:** The difference between data set reading and data object reading is that there is no need to define separate status signal, trig signal, rx time signal, rx count signal, and data set from report flag signal for each data attribute.

### Data Sets Table

The selected data sets in the MDV61850 Browser are displayed in the Data Sets Table.          
The user can select the blocks to be associated in the Telediagram project through the input-allowed columns.   

* **Name:** The name of the data object in the 61850 configuration file of the relay. It is automatically populated based on the selection.              
* **Status Signal:** Used to monitor the status of the reading operation. The block to be associated via Telediagram is selected. The possible values and their descriptions for this signal are as follows:

    * 0: WAITING/FAIL, Waiting for request response or operation failed.      
    * 1: OK, Request completed successfully.          
    * 2: MISMATCH, Operation failed due to incompatibility.       
    * 3: TIMEOUT, Operation failed due to timeout.       
    * 4: FAILED, Operation failed due to internal error.        
    * 100 and above: Operation failed due to library error. (Error code: status value - 100 can be calculated.)

* **Trig Signal:** The trigger block to be associated in Telediagram for reading data sets is selected.         
* **Rx Time Signal:** Used to show the data reception time.          
* **Rx Count Signal:** Used to track the number of data set receptions.        
* **Result Signal:** The value of the relevant data sets on the relay is read through this block. The block to be associated via Telediagram is selected.        
* **MMS Type:** Variable type. This section is automatically updated according to the data object selected in the project. For more detailed explanations and examples, please refer to the MMS Type section under heading 2.4.1.2.1 of the document.           
**DatasetFromReportFlag Signal:** Indicates whether the data set is received via the reporting mechanism.  

### Reports Section

In the IEC 61850 protocol, reports are used to read data sets without triggering.       
To successfully read reports, both the data set and the relevant reports must be selected in the MDV61850 Browser.       
The reports within the 61850 configuration file of the relay opened in the browser are displayed in this section.         

<center>

![mdv61850_figure16](/img/mdv61850_figure16.png)
***<center>Figure 19: Reports Section</center>***

</center>

As shown in Figure 19, the reports are listed, and the desired report file can be opened by double-clicking it.            
Opened reports are listed in the Reports Table on the right side (Figure 20).

<center>

![mdv61850_figure17](/img/mdv61850_figure17.png)
***<center>Figure 20: Reports Table</center>***

</center>

**Note:** Reports ending with the ".br" extension are buffered reports, which temporarily store events (changes) in a memory and transmit them when the receiver establishes a connection.         
Reports ending with the ".ur" extension are unbuffered reports, which transmit events on the relay instantly and in a single instance.             
The selected reports in the MDV61850 Browser are displayed in the Reports Table. The user can select the blocks to be associated in the Telediagram project through the input-allowed columns.             

* **Report Ref Path:** The file extension of the selected report.           
* **Data Set Ref Path:** The file extension of the data set to which the relevant report is linked.       
* **Trigger Type:** Determines under which trigger conditions the report will operate. When the Trigger Type column is double-clicked, the pop-up screen shown in Figure 21 opens.      

    * TRG_OPT_DATA_CHANGED: Send on data change.        
    * TRG_OPT_QUALITY_CHANGED: Send on quality change.   
    * TRG_OPT_DATA_UPDATE: Send when data is updated .       
    * TRG_OPT_INTEGRITY: Send periodically.           
    * TRG_OPT_GI: Send when a general interrogation request arrives.

<center>

![mdv61850_figure18](/img/mdv61850_figure18.png)
***<center>Figure 21: Trigger Type Selection Screen</center>***

</center>

**Note:** The following table shows how the Quality values in the IEC 61850 protocol are mapped to the RTU (Client) system within the MDV61850 Browser. In the RTU system, each quality status is expressed by a specific integer value.

<center>

![mdv61850_figure19](/img/mdv61850_figure19.png)

</center>

* **IsIndexed:** Determines whether the reports are indexed.   
Indexed reports (Buffered Reports – BRCB) store past events and process them in a specific order.      
Unindexed reports (Unbuffered Reports – URCB) transmit events only instantaneously.           
If the IsIndexed value is 1, a Buffered Report is used.           
* **MaxIndex:** Determines the maximum index number for indexed reports. Determines the maximum number of events held when Buffered Reports (BRCB) are used. If the index value reaches the maximum, old records are deleted. For example, if there is a buffer memory for 1000 events, the oldest event is deleted, and the newly arrived event is recorded.           
* **Conf Rev Check:** Enables configuration revision control.             
* **Conf Rev Number:** Specifies the configuration revision number.         
* **IntPeriod:** Determines the reporting period of the report. If data will be sent periodically (if trigger type TRG\_OPT\_INTEGRITY is selected), the periodic sending time (in ms) should be entered in the Int Period column.       
* **Buffering Time:** This parameter determines how long buffered reports will store data. If BRCB is used, events are held in memory for a certain period. If Buffering Time is increased, it stores older events for a longer duration. If the buffer overflows, it can be manually cleared with the Purge Buffer Signal.       
* **Opt Fields:** Determines which additional fields the IEC 61850 reports will include. Report Time Stamp, ConfRev.                 
* **Enable Signal:** The block to be associated via Telediagram to determine whether the report is enabled is selected.           
* **Status Signal:** The block to be associated via Telediagram to monitor the status of the report is selected. The possible values and their descriptions for this signal are as follows:

    * INIT=0: Waiting for Enable Signal.     
    * REGISTER=1: Report activation is starting.
    * WAITRCBVALUES=2: Report RCB read request sent, waiting for response.
    * HASRCBVALUES=3: Report RCB read, activation process continues.
    * WAITSETRCBVALUES=4: Report RCB updated, waiting for result.
    * INSTALLED=5: Report installed, ready for report reception.
    * ACTIVE=6: Report installed and at least one report received.
    * FAILEDINIT=7: Report activation failed. The device will retry after 60 seconds.
    * FORCETOCLOSE=8: Report deactivation request received, deactivation started.
    * FORCETOCLOSE\_WAITDISABLE=9: Deactivation process continues.
    * FORCETOCLOSE\_UNRESERVE=10: Reservation for deactivation is being removed.
    * FORCETOCLOSE\_WAITUNRESERVE=11: Deactivation process is completing.

**Note:** The ACTIVE (6) value indicates that the report is running successfully and at least one report has been received.        
The FAILEDINIT (7) value indicates that the report activation process failed and the device will try again after 60 seconds.     
The FORCETOCLOSE (8-11) values indicate that the report is in the deactivation process.  

**Send GI Signal:** If GI is selected as the Trigger Type of the report, a trigger signal must be assigned to the Send GI Signal input. When a rising signal (1) is applied to this input, a General Interrogation (GI) request is triggered, and the report is sent.        
**Purge Buffer Signal:** Used to clear the buffer memory in the report section in case of buffer overflow. If a buffer overflow occurs, the user can manually clear the buffer memory by applying a rising signal (1) to the input of the Telediagram block associated with the Purge Buffer Signal.       
**Ignored Report:** Determines how the client handles report control block configuration revision mismatches. If the report control block configuration revision is incompatible, the report is not processed and is ignored. The number of reports ignored for this reason can be tracked via the IgnoredReportCount signal.
 
**Note:** When only a report is selected, an exclamation mark (!) appears in the Data Set Path section. For the report to work correctly, the relevant Data Set must also be added to the browser.

*Data Set Not Selected;*
<center>

![mdv61850_figure20](/img/mdv61850_figure20.png)

</center>

*Data Set Selected;*
<center>

![mdv61850_figure21](/img/mdv61850_figure21.png)

</center>

**Note:** Make sure that the DatasetRefPath value of the report added to the Reports table is the same as the dataset added to the Data Set Table.

### RTU/PLC Integration

Used to configure read operations from IEDs via Telediagram.        
Data received from IEDs is mapped to the relevant blocks within the RTU or PLC. Thus, it becomes possible to associate data coming via the IEC 61850 protocol with function blocks in Telediagram.

<center>

![mdv61850_figure22](/img/mdv61850_figure22.png)
***<center>Figure 22: RTC/PLC Integration Section</center>***

</center>

As shown in Figure 22 in the RTC/PLC Integration Section, the Excel table received from Telediagram can be imported into the MDV61850 Browser using the Import Line Labels option.

#### Import Process:

The Excel file received from Telediagram is imported with the Import Line Labels option.        
The relevant line labels can be searched from the search box and edited.       
When the Excel table received from Telediagram is imported, the Info screen is cleared of block-related information with the Clear option.       
When the import is complete, the imported labels are listed on the right side of the page.         

#### RTU/PLC Integration Table Fields

* **Signal Number:** The block number corresponding to this line label in Telediagram is located here.     
* **Address:** The Modbus address corresponding to this line label in Telediagram is located here.       
* **Label:** The line label of the relevant block in Telediagram.     
* **Type:** The variable type of the block is shown here.      

Thanks to this structure, the data of IEDs communicating with the IEC 61850 protocol is correctly mapped with the blocks in Telediagram for use in RTU or PLC.
