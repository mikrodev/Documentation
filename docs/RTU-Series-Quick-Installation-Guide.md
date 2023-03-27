---
title: "RTU300 Series Quick Installation Guide"
---

## Introduction

### About The Telediagram

Telediagram; It is an editor software developed by Mikrodev and used for programming Mikrodev PLC family devices. With Mikrodev PLC programming editor Telediagram, very complex projects can be realized quickly thanks to its visual and easy-to-understand interface.

In addition to basic logic blocks such as "AND, OR, XOR" in the Telediagram library, there are also advanced blocks that will facilitate complex applications such as "PID, astronomical timer".

By connecting to devices via different interfaces (USB/TCP), tools such as program upload/update, online monitoring and firmware update are also offered with Telediagram.

#### Telediagram Setup

Telediagram software is prepared to run on current Windows versions. The installation file can be downloaded free of charge from the following internet address:

https://www.mikrodev.com/downloads/telediagram/TelediagramSetup_latest.zip

Telediagram setup is completed by following the instructions on the screen.

#### Telediagram Licensing

Telediagram program is software that works under license. You can create a license request by contacting the Mikrodev sales unit free of charge. In order to create the license, you will be asked for the hardware id of the device on which you installed the telediagram software.

In order to learn the hardware id of the device, the following steps are followed.

Right click on Telediagram shortcut, click open file location.

<center>

![rtu-quick-inst-01](/img/rtu-quick-inst-01.png)

</center>

The bin folder of the Telediagram software opens.

Double-click the license_user.exe application located in the bin folder. The numbers on the pop-up page that appear on the screen form the hardware id of your device. This hardware id must be reported to the sales team for licensing.

<center>

![rtu-quick-inst-02](/img/rtu-quick-inst-02.png)

</center>

**Note:** If the hardware id of the device is to be learned, it should be noted that the dongle is not attached to the device.

The license file obtained from the sales unit must be copied to the bin folder of the telediagram software.

For this, right click on Telediagram shortcut, click open file location. The tlicense.dat file is copied to the opened bin folder. Thus, the telediagram software is licensed.

<center>

![rtu-quick-inst-03](/img/rtu-quick-inst-03.png)

</center>

## Creating A Project

The following steps are followed to create a new project in Telediagram.

### Creating A New Project

<center>

![rtu-quick-inst-04](/img/rtu-quick-inst-04.png)

</center>

To create a new project in Telediagram, choose "new file or project" from the "File Menu".

#### Step 1

<center>

![rtu-quick-inst-05](/img/rtu-quick-inst-05.png)

</center>

#### Step 2

<center>

![rtu-quick-inst-06](/img/rtu-quick-inst-06.png)

</center>

The newly created project name and project creation location are selected.

When "Use as default project location" is selected, the project creation location is fixed for projects that will be created later.

#### Step 3

<center>

![rtu-quick-inst-07](/img/rtu-quick-inst-07.png)

</center>

The programming method is selected.

#### Step 4

<center>

![rtu-quick-inst-08](/img/rtu-quick-inst-08.png)

</center>

The device to be programmed and the expansion unit  \(if it needs to be added\) are selected.

#### Step 5

<center>

![rtu-quick-inst-09](/img/rtu-quick-inst-09.png)

</center>

Project configuration settings can be changed.

### Step 6

<center>

![rtu-quick-inst-10](/img/rtu-quick-inst-10.png)

</center>

A new project has been created.

In the projects section on the left side tab, double-click the Mdv text or click the plus icon next to the Mdv text. In the bottom tab that opens, there is the file "main.mdv". Double-clicking on this file opens the page and the project design can be started on this page.

## Connecting To The Device

![rtu-quick-inst-11](/img/rtu-quick-inst-11.png)

The projects prepared in the Telediagram must be sent to the device and a connection must be established to the device for online monitoring.

The device can be connected to the device via USB or TCP port in Telediagram.

In Telediagram, connection cannot be established from USB and TCP port at the same time.

### Setting A USB Connection

In order for the USB connection to be established, the USB driver installation must be completed on the computer with the Telediagram installed.

There is no need for USB driver installation on computers with Windows 10 and above operating systems.

After the USB Driver installation is completed, a USB cable connection is made between the computer and the device.

"USB A and USB B" \(printer cable\) should be preferred for USB cable selection. The USB B side is connected to the device and the USB A side is connected to the computer.

The COM port where the USB cable connected from the device manager is defined is determined.

<center>

![rtu-quick-inst-12](/img/rtu-quick-inst-12.png)

</center>

The connection 
![rtu-quick-inst-11](/img/rtu-quick-inst-11.png)
interface is accessed by clicking the tab from the Build Mod options.

<center>

![rtu-quick-inst-13](/img/rtu-quick-inst-13.png)

</center>

"Connect using SERIAL USB" is selected, COM port is selected. With the "OK" button, the connection establishment process is started.

<center>

![rtu-quick-inst-14](/img/rtu-quick-inst-14.png)

</center>

When the message "USB connection has been established between the device and the computer via serial port" is received and the connection button is turned to the "connected"
![rtu-quick-inst-15](/img/rtu-quick-inst-15.png)
position, the connection via USB is completed.

### Setting A TCP Connection

In order to establish a TCP connection between the computer and the device;

At least one of the "ethernet, Wi-Fi or GSM" ports must be present on the device to which a TCP connection will be established.

#### Establishing A TCP Connection with Ethernet 

In order to establish an Ethernet connection;

- The device must have an ethernet port.

- Ethernet cable \(CAT5, CAT6\) connection must be established between the device and the computer.

- If the device and the computer are in the same local network, the defined IPs should be selected accordingly.

#### Identifying IP To The Device

"Mikroterminal" program should be used to make device IP settings via USB connection. \(See "Using the Mikroterminal" section.\)

<center>

![rtu-quick-inst-16](/img/rtu-quick-inst-16.png)

</center>

The Mikroterminal program can be accessed from the Telediagram "Tools" menu.

<center>

![rtu-quick-inst-17](/img/rtu-quick-inst-17.png)

</center>

<center>

![rtu-quick-inst-18](/img/rtu-quick-inst-18.png)

</center>

After the device and computer IP settings are complete, "ping" must be done from the computer to the device for the "ethernet cable connection test" between the device and the computer.

<center>

![rtu-quick-inst-19](/img/rtu-quick-inst-19.png)

</center>

For the "ping" operation, the device IP is typed into the computer "command window" as in the picture and "ENTER" is clicked.

If the result output in the upper picture occurs, it means that the ping operation "failed". IP settings and ethernet cable connections should be checked again.

If the result is output as in the picture below, the pinging process is "successful".

<center>

![rtu-quick-inst-20](/img/rtu-quick-inst-20.png)

</center>

It means that an ethernet TCP connection can be established from the Telediagram to the device.

#### Defining A Listening Port To The Device 

In Mikrodev products, the standard listening port is defined as 502.      
To change the listening port, which is the standard 502;       
TCP socket block should be added to the project prepared in Telediagram.

<center>

![rtu-quick-inst-21](/img/rtu-quick-inst-21.png)

</center>

Socket type "TCP server" is selected.      
The listening port is defined.          
As the "Media type", one of the Ethernet, GSM or Wi-Fi options is selected.         

**Note:** In the Telediagram project, listening ports can be defined as many as the number of TCP socket blocks added as a server.

#### Ethernet Connection Test

After making the necessary settings for the Ethernet connection, for the TCP connection;

Click the link
![rtu-quick-inst-11](/img/rtu-quick-inst-11.png)
tab in the Build mod options.

<center>

![rtu-quick-inst-22](/img/rtu-quick-inst-22.png)

</center>

Click "Settings" in the window that opens.

<center>

![rtu-quick-inst-23](/img/rtu-quick-inst-23.png)

</center>

In the window that opens, the device IP is written in the "Device IP" section and the device listening port is written in the "port" section.

Select "Connect using TCP" and click "OK" to wait for the TCP connection to be established.

<center>

![rtu-quick-inst-24](/img/rtu-quick-inst-24.png)

</center>

When TCP connection is established, "TCP connection established between device and computer" warning is displayed on the screen.

The connection icon 
![rtu-quick-inst-25](/img/rtu-quick-inst-25.png) 
is also displayed as "Connected".

#### Establishing TCP Connection with GSM

In order to establish a GSM and TCP connection to the device in Telediagram;

- The device must be GSM-enabled.

- The GSM antenna of the device must be installed.

- Device signal quality \(CSQ\) should be between 1-31.

- A SIM card with data package (internet package) must be inserted into the device. \(SIM card must have fixed IP.\)

- APN definition of the inserted SIM card must be made to the device.

- The computer with the Telediagram must be connected to the "wide area network" \(WAN\) \(internet network\).

#### Identifying IP To The Device

In order to establish a TCP connection from the Telediagram to the GSM-enabled device, the GSM IP is written in the "device IP" section.

<center>

![rtu-quick-inst-26](/img/rtu-quick-inst-26.png)

</center>

Other than GSM IP identification, other operations are the same as Ethernet TCP connection.

## Loading A Telediagram Project To The Device 

There are 2 methods to load the project prepared in Telediagram to the device.

The project can be sent to the device via USB or TCP connection.

### Upload Project Via USB Connection 

After the USB connection
![rtu-quick-inst-27](/img/rtu-quick-inst-27.png)
is established between the device and the computer, the "send to device" button is clicked. 
![rtu-quick-inst-28](/img/rtu-quick-inst-28.png)
The project file is compiled and the bin file is loaded on the device.

The confirmation screen opens for the project file backup to be uploaded to the device. If "Yes" is clicked, then the project file will be extracted from the device.

<center>

![rtu-quick-inst-29](/img/rtu-quick-inst-29.png)

</center>

The device must be restarted in order for the changes to be applied. A confirmation screen appears for device restart. Click on "Yes".

<center>

![rtu-quick-inst-30](/img/rtu-quick-inst-30.png)

</center>

If the following output occurs in the "incoming messages" section of the Telediagram, it means that the Telediagram project has been successfully loaded to the device.

It should be noted that the file upload process is 100% complete. The device restarts automatically when the project upload process is 100% completed with the USB connection. \(it is reset.\)

<center>

![rtu-quick-inst-31](/img/rtu-quick-inst-31.png)

</center>

### Upload Project With TCP Connection 

After the USB connection
![rtu-quick-inst-32](/img/rtu-quick-inst-32.png)
is established between the device and the computer, the "send to device" button is clicked.
![rtu-quick-inst-28](/img/rtu-quick-inst-28.png)
The project file is compiled and the bin file is loaded on the device.

The confirmation screen opens for the project file backup to be uploaded to the device. If "Yes" is clicked, then the project file will be extracted from the device.

<center>

![rtu-quick-inst-33](/img/rtu-quick-inst-33.png)

</center>

The device must be restarted in order for the changes to be applied. A confirmation screen appears for device restart. Click on "Yes".

<center>

![rtu-quick-inst-34](/img/rtu-quick-inst-34.png)

</center>

If the following output occurs in the "incoming messages" section of the Telediagram, it means that the Telediagram project has been successfully loaded to the device.

It should be noted that the file upload process is 100% complete. The device restarts automatically when the project upload process is 100% completed with the TCP connection. \(it is reset.\)

<center>

![rtu-quick-inst-35](/img/rtu-quick-inst-35.png)

</center>

## Drawing A Project File From The Device 

The existing project in the device can be downloaded to the computer via the Telediagram program. For this, the following steps should be followed.

When the device is powered and connected to the computer via TCP or USB;

Click on the "dowload project from device" option in the tools section of the Telediagram.

<center>

![rtu-quick-inst-36](/img/rtu-quick-inst-36.png)

</center>

When the download status monitoring is at 99%, the file location where the project is to be saved is selected.

<center>

![rtu-quick-inst-37](/img/rtu-quick-inst-37.png)

</center>

From here, the location where the file should be saved is selected. Thus, the bin file in the device is downloaded to the computer.
