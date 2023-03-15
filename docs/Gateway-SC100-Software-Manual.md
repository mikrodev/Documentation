---
title: SC100 Software Manual
---

## SERIAL GATEWAY CONFIGURATION SOFTWARE


### General Information

The Assistant software is used to make all necessary settings for the Mikrodev Gateway devices. Thanks to the software, device settings can be made online and/or offline. The settings that are loaded on the device can easily be downloaded and the previously saved settings can easilly be uploaded into the device by the program.
The connection between the program and the device can be established in various ways such as USB, Ethernet, GSM, Wi-Fi. For Ethernet supported devices; there is also the ability to search the network and list details with connection information.

### Device Connection

#### USB Serial Connection

One of the methods for establishing communication between PC and Mikrodev device in device configuration is USB serial connection. In order to perform USB connection between PC and device, you need to install USB driver for PCs with Windows 7/8 / 8.1 operating systems. There is no need to install the USB driver for Windows 10 operating systems. For serial connection over USB, “Connect over USB" box in the Connect and Configure Your Device section of the Assistant software is selected. In the USB Port Selection section, you should select the port and click "Connect". USB connection will be established after that. (Figure 1)
.
<center>

![sc100_01](/img/sc100_01.png)

</center>

#### TCP Connection – Device Discovery Mode

"Network Discovery" option is used to detect and connect IP addresses of Mikrodev devices which are active in the local network. The "Network Discovery " box will be highlighted after the "Connect via TCP" box is checked in the Connect and Configure to Device section of the Assistant software. After clicking "Scan Network for Mikrodev Devices", the serial number, IP address, listening port and software versions of all Mikrodev devices which are active in the network are listed on the screen. (Fig. 2) You can connect the device on the list by double clicking on the device name on the screen.

<center>

![sc100_02](/img/sc100_02.png)

</center>

#### TCP Connection – Manual

When manually entering the ip address and port number of the device that is active in the local network, "Manual" option is used. The "Manual" box is checked after the "Connect over TCP" checkbox is checked in the Connect and Configure Device section from the Assistant software. The IP address of the device to be connected is entered into the "Device IP" section, the port number is entered into the "Port" section and "Connect" is clicked. (Figure 3) Assistan software connects to the Mikrodev device with specified ip address and port number.

<center>

![sc100_03](/img/sc100_03.png)

</center>

### Offline Settings

Offline mode is used when parameter settings are made and saved without connecting to the device. Click on "Click here for offline configuration" on the Assistant main screen when you want to make the offline parameter settings. The device is selected in the screen that appears, and then "Select this device" is clicked. (Fig. 4) Offline parameter settings of the selected device can be made. In addition, using the "Load from configuration file" option on the same page, previously saved configuration values can also be loaded to the program.

<center>

![sc100_04](/img/sc100_04.png)

</center>

## SERIAL GATEWAY Settings

### Status Screen

It is the status information screen which shows related information to the connected Mikrodev device. This screen contains the device's manufacturing information, Ip settings and serial connection settings (RS-485, RS-232). (Fig. 5) You can access the web interface of the device from this screen as well. 

<center>

![sc100_05](/img/sc100_05.png)

</center>

### Basic Settings

In the basic settings section, parameter set values are entered according to communication types. For Ethernet connection enter the local ip, gateway ip, subnet and for GSM connection enter the APN, user name, user password. SSID (Modem user name) and password are entered when wifi connection is requested. In addition; the password definition for access control to the Mikrodev device is performed on this page. In addition, device connection follow-up duration, auto reset duration, and configuration port can be entered. You can send ID after connection by checking the "Send ID after connection" checkbox. (Figure 6)

<center>

![sc100_06](/img/sc100_06.png)

</center>

### Serial Gateway Settings

The device has 2 separate routes for RS232 - Ethernet and RS485 - ethernet connections. In route 1, RS232 - Ethernet settings are made and in route 2, rs485 - Ethernet connection settings are made.

On the TCP socket settings side, the TCP socket server is selected, the port is defined. The defined port should not be the same for RS232 and RS485, it should be different. In the IP filter section, you can define the TCP client IP that you want to connect to the device. Only the IP address can be connected to the device. If you do not want to filter, this section should be 0.0.0.0 as shown in the figure (Figure 7). Buffer settings are set here. The buffer size is used to define the packet size to be sent, and the buffer timeout, if the incoming data does not reach the specified buffer size, the time to wait for sending.

In the Serial Settings section, baud rate, parity, stop bit and databit settings are made for RS232 and RS485. these settings must be made in accordance with the serial device to be connected to the Mikrodev device.	


<center>

![sc100_07](/img/sc100_07.png)

</center>


### Loading Settings to Device

Click "Device Management" on the Assistant software to send the configuration settings to the device. Then click "Send Configuration" option. (Figure 8)

<center>

![sc100_08](/img/sc100_08.png)

</center>

After completing the configuration, the device must be rebooted in order to register the settings. (Figure 9)

<center>

![sc100_09](/img/sc100_09.png)

</center>

Restart the device by clicking "Restart Device" under "Device Management" on the main screen of the Assistant program. When the device is rebooted, you may need to remove and reinsert the USB cable to reconnect with the serial port. (Figure 10)

<center>

![sc100_10](/img/sc100_10.png)

</center>

The TCP connection between the device and the PC will be established automatically after the device is rebooted, after waiting approximately 20 seconds to reconnect to the device through the TCP connection. (Figure 11)

<center>

![sc100_11](/img/sc100_11.png)

</center>

### Terminal

<center>

![sc100_12](/img/sc100_12.png)

</center>