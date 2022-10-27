---
title: Updating Firmware
---

### Considerations While Uploading Firmware

**Warning:** Contact Mikrodev technical support for the appropriate firmware for your device.

1. Firmware to be uploaded must match the model number of the device. AT+VERSION=? or telediagram device configuration can be read from advanced parameters. If it is MP211EG, then MP211EG must be installed.

2. PCB version of device, AT+VERSION=? At the end of the answer, the version number that starts with the letter p must be the same as the version number that starts with the letter p in the firmware you will upload.        
Sample,            
AT+VERSION=?         
VERSION=MP211_E_s16.11p71              
Firmware to be loaded: MP211_E_s17.03p71(xionew+internalADC) must be.

3. AT+INCLUDE=? With the device, the features of the device should be read and, if any, GSM features and analog input type should be checked.

* For GSM AT+INCLUDE=? in your answer,          
If GPRS_MODULE_SIM800 device with 2G,      
If GPRS_MODULE_UC20 device with 3G,          
If GPRS_MODULE_SIM7600 device with 4G,        
Firmware to be loaded MP211_EG_s17.08p75(xionew+4G+EXTERNALADC) GSM module is indicated in brackets.

* For Analog Input AT+INCLUDE=? in your answer,         
If there is CONFIG_EXTERNAL_ADC, Firmware with EXTERNALADC must be installed, otherwise Firmware with internalADC must be loaded.          
Example firmware names,       
MP211_EG_s17.08p75(xionew+4G+EXTERNALADC)         
MP211_E_s17.03p71(xionew+internalADC)          

### Uploading Firmware Using Serial Loader Application

You can update the firmware of Mikrodev PLC, RTU, Remote IO and Gateway product families via USB connection.

* Before starting, make sure that all USB connections to device are closed and the device is powered.

* Connect the USB cable between the computer and the device.

* In order to update the firmware file on the device, the Serial Loader application is first opened.   
Right click on Telediagram or Mikrodiagram application, the file location of the application opens. Serial Loader application is found in this opened file and run.

* Select the correct port, click "Open". Then click on "Auto Switch to Boot Prompt" and wait for the device to be rebooted and start in Boot mode.   
The device enters the automatic boot mode, BootCmd> is read on the screen.

<center>

![mikrodiagram-firmware-update-02](/img/mikrodiagram-firmware-update-02.png)

</center>

If BootCmd> is not read on the screen, that is, if the device has not switched to automatic boot mode, a different path is followed.

* Power ON device, connect the DC supply.

<center>

![](https://www.mikrodev.com/images/wiki/en/connect.gif)

</center>

* Connect the USB cable between the computer and the device.

* When the device is connected to the computer via USB, its power is cut off. 

<center>

![](https://www.mikrodev.com/images/wiki/en/disconnect.gif)

</center>

* As soon as it is energized, "OPEN PORT" is clicked on the Serial Loader application.

* When the port is opened, it is observed that the device is running in BOOT mode (boot mode) and by clicking on the "STOP BOOT" text, the device is kept in boot mode.

<center>

![mikrodiagram-firmware-update-07](/img/mikrodiagram-firmware-update-07.png)

</center>

* The Firmware file with the .mx3 extension that you want to load is selected from the three points above the Start Loading Firmware text.

<center>

![mikrodiagram-firmware-update-08](/img/mikrodiagram-firmware-update-08.png)

</center>

* After the device starts in boot mode, click on the "Start Loading Firmware" button.
 
<center>

![mikrodiagram-firmware-update-03](/img/mikrodiagram-firmware-update-03.png)

</center>

* Wait for the firmware uploading to finish.

<center>

![mikrodiagram-firmware-update-04](/img/mikrodiagram-firmware-update-04.png)

</center>

* After the process is completed, the USB connection will be closed automatically and the device will reboot once after verifying the flash file system.

<center>

![mikrodiagram-firmware-update-05](/img/mikrodiagram-firmware-update-05.png)

</center>

* Wait for a few minutes for the device to finalise the firmware upgrade and click "Open Port" to connect the device again. And check version information to confirm if the update operation is succesful by clicking on the "SEND" button with "AT+VERSION=?" parameter.

<center>

![mikrodiagram-firmware-update-06](/img/mikrodiagram-firmware-update-06.png)

</center>

Download Serial Loader application from the link below :

[MikrodevSerialLoader](https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip)

### Firmware Update Using Telediagram/Mikrodiagram Application

Firmware can be uploaded to the device using the Telediagram/Mikrodiagram application. When the device is powered and has a connection with the computer via TCP or USB, the Mikrodiagram/Telediagram program is opened. 

The following instruction is followed.

* Projects -> Device Configuration -> Firmware Update

<center>

![mikrodiagram-firmware-update-09](/img/mikrodiagram-firmware-update-09.png)

</center>

* The Firmware file with the .mx3 extension that you want to be loaded is selected from three dots and the "Upload" text is clicked.

* The firmware file will be successfully uploaded to the device.
