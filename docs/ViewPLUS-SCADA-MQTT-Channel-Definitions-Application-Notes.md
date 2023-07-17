---
title: "ViewPLUS SCADA MQTT Channel Definitions Application Notes"
---

### Mosquitto Installation

In order for the ViewPLUS SCADA software to communicate via MQTT, both the MQTT broker and the SCADA server should be started on the same computer. 

Therefore, it is necessary to first install the Mosquitto program, which is the MQTT broker, on the computer where the SCADA server will run.

[Click here](https://mosquitto.org/download/) to download the Mosquitto broker.

Click on the appropriate link in the download link and run the downloaded exe application on your computer.

Click on the "Next" option in the Mosquitto installation wizard.

<center>

![mosquitto_image1](/img/mosquitto_image1.png)

</center>

Select the components you want to download in the Mosquitto program and click on the "Next" option.

<center>

![mosquitto_image2](/img/mosquitto_image2.png)

</center>

Choose the file path where the program will be installed and click on the "Install" option.

<center>

![mosquitto_image3](/img/mosquitto_image3.png)

</center>

Click on the "Finish" option in the installation completed window and exit the screen.

<center>

![mosquitto_image4](/img/mosquitto_image4.png)

</center>

After the installation is complete, the configuration settings of the Mosquitto broker need to be done before running the program.

#### Mosquitto Configuration Settings

Navigate to the installation directory of the program.

If you did not change the file path during the installation, it is located inside Local Disk (C:) under Program Files.

<center>

![mosquitto_image76](/img/mosquitto_image76.png)

</center>

Open the folder named "mosquitto" and click on the "Edit with Notepad++" option for the file named "mosquitto.conf" located inside the folder. (Please make sure that Notepad++ application is installed on your computer.)

<center>

![mosquitto_image77](/img/mosquitto_image77.png)

</center>

To find the "Security" heading in the opened file and remove the statement 

*#allow_anonymous false* under this heading.

Add a new line containing 

*allow_anonymous true*             
*listener 1883*

add the statement

<center>

![mosquitto_image7](/img/mosquitto_image7.png)

</center>

By doing this, we have now defined the default port 1883 for MQTT in the broker's settings.

Save the edited file and close it.

#### Running Mosquitto Broker

After making the configuration settings, run the command prompt as an administrator.

Start menu -> Type "cmd" in the search bar. -> Hover over the Command Prompt application that appears at the top. -> Right-click on the Command Prompt application. -> Click on the "Run as administrator" option.

<center>

![mosquitto_image8](/img/mosquitto_image8.png)

</center>

In the opened window, click "Yes" to proceed.

In the command prompt that appears, type the following command and press Enter:

*net start mosquitto*

*The Mosquitto Broker service is starting.*         
*The Mosquitto Broker service was started successfully should appear on the screen.* 

<center>

![mosquitto_image9](/img/mosquitto_image9.png)

</center>

Open the Task Manager and locate the Mosquitto application from the "Background processes" section. Make sure that the Mosquitto Broker is running on your computer.

<center>

![mosquitto_image10](/img/mosquitto_image10.png)

</center>

#### Closing a Running Mosquitto Broker

There are two ways to close the running Mosquitto Broker on your computer. 

**First method:** You can close the Mosquitto Broker application through the Task Manager. Follow the steps below:

Open the Task Manager. From the "Background processes" section, locate the "mosquitto.exe" application. 

<center>

![mosquitto_image11](/img/mosquitto_image11.png)

</center>

Hover over the "mosquitto.exe" application, right-click on it, and select the "End task" option.

**Second method:** You can close the Mosquitto Broker application through the command line. Follow the steps below:

Start menu -> Type "cmd" in the search bar. -> Hover over the Command Prompt application that appears at the top. -> Right-click on the Command Prompt application. -> Click on the "Run as administrator" option.

<center>

![mosquitto_image12](/img/mosquitto_image12.png)

</center>

In the opened window, click "Yes" to proceed.

In the command prompt that appears, type the following command and press Enter:

*net stop mosquitto*

*The Mosquitto Broker service is stopping.*              
*The Mosquitto Broker service was stopped successfully appear on the screen.*

<center>

![mosquitto_image13](/img/mosquitto_image13.png)

</center>

### ViewPLUS Scada Tag Channel Editor 

#### MQTT Client Channel Definitions

Mikrodev Client receives messages from publisher units and forwards them to subscribed units. When sending a message, it uses topics to filter the customer units that will receive the message.

The working structure of Mikrodev Client is explained in the following diagram.

<center>

![mosquitto_image14](/img/mosquitto_image14.png)
***<center>Figure 1: Mikrodev Client General Structure</center>***

</center>

The Mikrodev MQTT Client supports the following data types.

![mosquitto_image15](/img/mosquitto_image15.png)

<center>

![mosquitto_image16](/img/mosquitto_image16.png)
***<center>Figure 2: MQTT Channel Definitions</center>***

</center>

The following settings need to be configured in the MQTT channel.

*Payload Format: 1*            
*ServerIP: 127.0.0.1*            
*ServerPort: 1883*          
*Listen Port: 1081*             
*Clean Session: 115200*              
*Socket Type: Unencrypted*             
*KeepAlive: 6000*              

#### Publishing a Value via SCADA 

Equipment: Device ID information is entered here. (This field can be left blank.)

Topic: The topic for publishing is entered in this field.

Sub/Pub: The selection for Publish, Subscribe, or both is made here. Since we are discussing value publishing under this topic, the Publish option should be selected.

Variable Name: The variable name is written here. The variable name mentioned here refers to the tag name of the label in the PLC project.

Variable Type: The variable type is selected here. ViewPLUS SCADA only supports BOOL and DBL variable types.

VarSize: The SCADA program automatically assigns the variable size based on the variable type.

**Note:** The ViewPLUS SCADA editor supports two different variable types as tag types. These are Boolean and Double data types.

<center>

![mosquitto_image17](/img/mosquitto_image17.png)
***<center>Figure 3: Publishing Tag Definitions</center>***

</center>

#### Example of Publishing a Value via SCADA

**Note:** In this example, simulation will be done using the MQTT Box program.

[Click here](https://apps.microsoft.com/store/detail/mqttbox/9NBLGGH55JZG?hl=en-us&gl=us) to download the MQTT Box program for Windows.

Open the ViewPLUS SCADA editor. Click on File -> New File or Project. Create a new project.

<center>

![mosquitto_image18](/img/mosquitto_image18.png)

</center>

From the opened screen, select Projects -> Applications and click on the "Select" text located at the bottom right corner.

<center>

![mosquitto_image19](/img/mosquitto_image19.png)

</center>

From the opened screen, select the project name and choose the file location where the project file will be saved. Click on "Next."

<center>

![mosquitto_image20](/img/mosquitto_image20.png)

</center>

Enter the password you set during the PostgreSQL installation in the "Database User Password" section of the database settings, and click on "Test Connection." If you entered the password correctly, the screen will display "Ok." Once you see "Ok," click on "Next."

<center>

![mosquitto_image21](/img/mosquitto_image21.png)

</center>

You can adjust the SCADA design page settings from the View Settings page. This can also be done after creating the project. After making the adjustments, click on "Next."

<center>

![mosquitto_image22](/img/mosquitto_image22.png)

</center>

The Summary screen displays general information about the project. After clicking on "Finish," a new project will be created.

<center>

![mosquitto_image23](/img/mosquitto_image23.png)

</center>

The connection between the newly created project and the database is checked from the information screen that appears on the screen.

<center>

![mosquitto_image24](/img/mosquitto_image24.png)

</center>

The newly created project name will appear under the Projects section.

<center>

![mosquitto_image25](/img/mosquitto_image25.png)

</center>

To publish a value using the MQTT Client channel via SCADA, first open the tag channel editor.

<center>

![mosquitto_image26](/img/mosquitto_image26.png)

</center>

Right-click on the "None" expression and select the "New Channel" option.

<center>

![mosquitto_image27](/img/mosquitto_image27.png)

</center>

Enter the channel name in the popup screen, and select the "MQTT_CLIENT" option from the protocol type section. Click on "Ok."

<center>

![mosquitto_image28](/img/mosquitto_image28.png)

</center>

Configure the channel settings as described in Figure 2.

<center>

![mosquitto_image29](/img/mosquitto_image29.png)

</center>

To add a new tag under this created channel, hover over the prepared MQTT channel and right-click. Click on the "New Tag" option.

<center>

![mosquitto_image30](/img/mosquitto_image30.png)

</center>

In the popup screen, enter a new tag name and click on "Ok."

<center>

![mosquitto_image31](/img/mosquitto_image31.png)

</center>

To view the created tag under the channel, click on the arrow button located on the left side of the channel name. Here, you will find the tags under the channel. Click on the prepared tag.

According to Section 2.1.1, make the tag definitions. Press CTRL + S to save the changes or click on the "Save Tag Data" text located at the bottom of the tag screen. When the changes are saved, the exclamation mark symbol that appears on the left side of the tag name will disappear.

<center>

![mosquitto_image32](/img/mosquitto_image32.png)

</center>

To publish a value via the SCADA program, a display component should be added to the SCADA page. 

Click on the "SCADA Editor" text located on the left side.

<center>

![mosquitto_image33](/img/mosquitto_image33.png)

</center>

Click on the arrow next to the "Sca" text under the project name. Here, you will find the "intro.sca" expression. This file is the default SCADA page that comes with every project where we design SCADA screens. Hover over the "intro.sca" expression and double-click it. After this process, a letterhead paper will open on the right side.

<center>

![mosquitto_image34](/img/mosquitto_image34.png)

</center>

Click on the split panel icon next to the "Projects" text in order to split the panel and be able to add the SCADA component to the page.

<center>

![mosquitto_image35](/img/mosquitto_image35.png)

</center>

A second "Projects" text will appear on the left side. Click on the "Projects" text and select the "SCADA Components" option.

<center>

![mosquitto_image36](/img/mosquitto_image36.png)

</center>

Find the "Display" category within the SCADA components and click on any display component.

<center>

![mosquitto_image37](/img/mosquitto_image37.png)

</center>

Drag and drop the selected display component onto any point of the letterhead paper located on the right side.

<center>

![mosquitto_image38](/img/mosquitto_image38.png)

</center>

Find the "Events" expression in the object properties section on the right side.

Event Type: Select "Key Pressed" to be able to enter a value from the keyboard.

Event Action: Choose "Set Value" here.

Event Target Tag: Select the tag we prepared in the MQTT channel in this section. To select a tag, click on the magnifying glass icon next to the "Target Event Tag" text.

<center>

![mosquitto_image39](/img/mosquitto_image39.png)

</center>

To be able to see the entered value on the display, the same tag should be entered in the "Tags" section of the Labels section.

<center>

![mosquitto_image40](/img/mosquitto_image40.png)

</center>

Before starting the server, save and close all the edited screens, and make sure that the MQTT broker is running on your computer (Mosquitto.exe should be running).

Go to "Tools" -> "Start Server" to start the server.

<center>

![mosquitto_image41](/img/mosquitto_image41.png)

</center>

When selecting the "Start Server" option for the first time in the project, the Database Settings screen will appear. Enter the password you created during the PostgreSQL installation in the "Database User Password" field and click on the "Test Connection" button. 

You will see that the server program is running.

<center>

![mosquitto_image42](/img/mosquitto_image42.png)

</center>

Click on "Tools -> Start ViewPLUS Client" option. The default login credentials for the client are as follows:

Username: admin         
Password: mikrodev         
Server Address: 127.0.0.1:3344           

<center>

![mosquitto_image43](/img/mosquitto_image43.png)

</center>

Once you have entered the above information and clicked on the "Login" button, you will see the designed page appear on the screen. To send a value via the display, hover over the display and right-click. Click on the "Set Value" option.

<center>

![mosquitto_image44](/img/mosquitto_image44.png)

</center>

Enter the desired value in the opened window and click "OK".

<center>

![mosquitto_image45](/img/mosquitto_image45.png)

</center>

To view the published values, you can use the MQTT Box program.

Open the MQTT Box application. Click on "Create MQTT Client".

<center>

![mosquitto_image46](/img/mosquitto_image46.png)

</center>

MQTT Client Name: Provide a name for your client.

Protocol: Select "mqtt/tcp."

Host: Since the broker is running on your local computer, enter "127.0.0.1:1883."

Click on "Save." 

<center>

![mosquitto_image47](/img/mosquitto_image47.png)

</center>

You can verify that the connection to the broker is established by checking the "connected" message on the screen.

<center>

![mosquitto_image48](/img/mosquitto_image48.png)

</center>

To view the values published by the SCADA, you can use the "Topic to subscribe" field or the "Add Subscriber" option located at the top.

<center>

![mosquitto_image49](/img/mosquitto_image49.png)

</center>

Enter the topic name that was created in the SCADA editor for publishing, and click on the "Subscribe" button. Make sure that QoS 0 is selected.

<center>

![mosquitto_image50](/img/mosquitto_image50.png)

</center>

Monitor the values sent from the client in the MQTT Box application.

<center>

![mosquitto_image51](/img/mosquitto_image51.png)

</center>

The payload structure for the value published by the SCADA system is: 

{"14245": { "variable": {"V": 3640.0000 }}}

In this structure, the value "14245" represents the equipment number entered in the tag definitions.

**Note:** If the equipment number field is left empty in the tag definitions, the payload structure of the value will be: {"": { "variable": {"V": 3640.0000 }}}

In this structure, the "variable" expression represents the variable name entered in the tag definitions, 

"V: 3640.0000" represents the published value.

#### Subscribing to a Value in Scada

Equipment: Device ID information is entered here. (This field can be left blank.)

Topic: The topic for publishing is entered in this field.

Sub/Pub: The selection for Publish, Subscribe, or both is made here. Since we are discussing value subscribing under this topic, the Subscribe option should be selected.

Variable Name: The variable name is written here. The variable name mentioned here refers to the tag name of the label in the PLC project.

Variable Type: The variable type is selected here. ViewPLUS SCADA only supports BOOL and DBL variable types.

VarSize: The SCADA program automatically assigns the variable size based on the variable type.

**Note:** The ViewPLUS SCADA editor supports two different variable types as tag types. These are Boolean and Double data types.

<center>

![mosquitto_image52](/img/mosquitto_image52.png)
***<center>Figure 4: Subscription Tag Definitions</center>***

</center>

#### Example of Subscribing to a Value from Scada

**Note:** In this example, simulation will be done using the MQTT Box program.

[Click here](https://apps.microsoft.com/store/detail/mqttbox/9NBLGGH55JZG?hl=en-us&gl=us) to download the MQTT Box program for Windows.

Open the ViewPLUS SCADA editor. Click on File -> New File or Project. Create a new project.

<center>

![mosquitto_image18](/img/mosquitto_image18.png)

</center>

From the opened screen, select Projects -> Applications and click on the "Select" text located at the bottom right corner.

<center>

![mosquitto_image19](/img/mosquitto_image19.png)

</center>

From the opened screen, select the project name and choose the file location where the project file will be saved. Click on "Next."

<center>

![mosquitto_image20](/img/mosquitto_image20.png)

</center>

Enter the password you set during the PostgreSQL installation in the "Database User Password" section of the database settings, and click on "Test Connection." If you entered the password correctly, the screen will display "Ok." Once you see "Ok," click on "Next."

<center>

![mosquitto_image21](/img/mosquitto_image21.png)

</center>

You can adjust the SCADA design page settings from the View Settings page. This can also be done after creating the project. After making the adjustments, click on "Next."

<center>

![mosquitto_image22](/img/mosquitto_image22.png)

</center>

The Summary screen displays general information about the project. After clicking on "Finish," a new project will be created.

<center>

![mosquitto_image23](/img/mosquitto_image23.png)

</center>

The connection between the newly created project and the database is checked from the information screen that appears on the screen.

<center>

![mosquitto_image24](/img/mosquitto_image24.png)

</center>

The newly created project name will appear under the Projects section.

<center>

![mosquitto_image25](/img/mosquitto_image25.png)

</center>

To subscribe to a value published using the MQTT Client channel in Scada, first open the Tag Channel Editor.

<center>

![mosquitto_image26](/img/mosquitto_image26.png)

</center>

Right-click on the "None" expression and select the "New Channel" option.

<center>

![mosquitto_image27](/img/mosquitto_image27.png)

</center>

Enter the channel name in the popup screen, and select the "MQTT_CLIENT" option from the protocol type section. Click on "Ok."

<center>

![mosquitto_imag53](/img/mosquitto_image53.png)

</center>

Configure the channel settings as described in Figure 2.

<center>

![mosquitto_imag54](/img/mosquitto_image54.png)

</center>

To add a new tag under this created channel, hover over the prepared MQTT channel and right-click. Click on the "New Tag" option.

<center>

![mosquitto_imag55](/img/mosquitto_image55.png)

</center>

In the popup screen, enter a new tag name and click on "Ok."

<center>

![mosquitto_imag56](/img/mosquitto_image56.png)

</center>

To view the created tag under the channel, click on the arrow button located on the left side of the channel name. Here, you will find the tags under the channel. Click on the prepared tag.

According to Section 2.1.1, make the tag definitions. Press CTRL + S to save the changes or click on the "Save Tag Data" text located at the bottom of the tag screen. When the changes are saved, the exclamation mark symbol that appears on the left side of the tag name will disappear.

<center>

![mosquitto_imag57](/img/mosquitto_image57.png)

</center>

To monitor the subscribed value through the Scada program, a display component needs to be added to the Scada page.

To add a display component to the Scada page, click on the "Scada Editor" on the left side.

<center>

![mosquitto_imag58](/img/mosquitto_image58.png)

</center>

Click on the arrow next to the "Sca" text under the project name. Here, you will find the "intro.sca" expression. This file is the default SCADA page that comes with every project where we design SCADA screens. Hover over the "intro.sca" expression and double-click it. After this process, a letterhead paper will open on the right side.

<center>

![mosquitto_imag59](/img/mosquitto_image59.png)

</center>

Click on the split panel icon next to the "Projects" text in order to split the panel and be able to add the SCADA component to the page.

<center>

![mosquitto_imag60](/img/mosquitto_image60.png)

</center>

A second "Projects" text will appear on the left side. Click on the "Projects" text and select the "SCADA Components" option.

<center>

![mosquitto_imag61](/img/mosquitto_image61.png)

</center>

Find the "Display" category within the SCADA components and click on any display component.

<center>

![mosquitto_imag62](/img/mosquitto_image62.png)

</center>

Drag and drop the selected display component onto any point of the letterhead paper located on the right side.

<center>

![mosquitto_imag63](/img/mosquitto_image63.png)

</center>

To track the subscribed value through this display, enter the prepared tag in the "Label Tag" field in the Labels section of the display.

<center>

![mosquitto_imag64](/img/mosquitto_image64.png)

</center>

Before starting the server, save and close all the edited screens, and make sure that the MQTT broker is running on your computer (Mosquitto.exe should be running).

Go to "Tools" -> "Start Server" to start the server.

<center>

![mosquitto_imag65](/img/mosquitto_image65.png)

</center>

When selecting the "Start Server" option for the first time in the project, the Database Settings screen will appear. Enter the password you created during the PostgreSQL installation in the "Database User Password" field and click on the "Test Connection" button. 

You will see that the server program is running.

<center>

![mosquitto_imag66](/img/mosquitto_image66.png)

</center>

Click on "Tools -> Start ViewPLUS Client" option. The default login credentials for the client are as follows:

Username: admin       
Password: mikrodev       
Server Address: 127.0.0.1:3344

<center>

![mosquitto_imag67](/img/mosquitto_image67.png)

</center>

When you click on the "Log In" button after entering the above information, you will see that the page we designed is displayed on the screen.

<center>

![mosquitto_imag68](/img/mosquitto_image68.png)

</center>

In this application, the subscribed values can be published using the MQTT Box program.

Open the MQTT Box application. Click on "Create MQTT Client".

<center>

![mosquitto_imag69](/img/mosquitto_image69.png)

</center>

MQTT Client Name: Provide a name for your client.

Protocol: Select "mqtt/tcp."

Host: Since the broker is running on your local computer, enter "127.0.0.1:1883."

Click on "Save." 

<center>

![mosquitto_imag70](/img/mosquitto_image70.png)

</center>

You can verify that the connection to the broker is established by checking the "connected" message on the screen.

<center>

![mosquitto_imag71](/img/mosquitto_image71.png)

</center>

To publish values to the SCADA system, you can use the "Topic to publish" field or the "Add Publisher" option located at the top.

<center>

![mosquitto_imag72](/img/mosquitto_image72.png)

</center>

To publish values to the SCADA system, follow these steps:

In the "Topic to publish" field, enter the subscribed topic from the SCADA editor.

Set the QoS value to 0.

Select the "Strings / JSON / XML / Characters" option for the Payload Type.

The payload structure should be in the format: {"1245": { "variable2": {"V": 23.0000 }} }.

The value "1245" represents the equipment number entered in the SCADA editor.

The value "variable2" represents the variable name entered in the SCADA editor.

The value "V: 23.0000" represents the value being published to the tag.

<center>

![mosquitto_imag73](/img/mosquitto_image73.png)

</center>

Once you have entered the values as described and clicked on the "Publish" button, you will be able to see the published values on the display in the ViewPLUS Client screen.

<center>

![mosquitto_imag74](/img/mosquitto_image74.png)

</center>

**Note:** If you want to subscribe to a value in the SCADA without entering an equipment number, the example payload structure should be: {"": { "termometre1": {"V": 23.0000 }} }.

<center>

![mosquitto_imag75](/img/mosquitto_image75.png)

</center>
