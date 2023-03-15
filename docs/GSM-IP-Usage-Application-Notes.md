---
title: "GSM IP Usage Application Notes"
---

## Overview

Sim cards provided by GSM operators can be used by receiving IP over Mikrodev PLC/RTU products.  

If Modbus Slave, IEC 104 Slave, DNP3 Slave will be used, sim card must have Static IP feature.  

Dynamic IP enabled sim card is sufficient for Mqtt, DNP3 Master applications.

**Note:** Dynamic IP enabled sim cards cannot be connected via GSM with Mikrodiagram/Telediagram program, If you want to connect with Mikrodiagram/Telediagram program via GSM; Static IP capable sim card should be used.

### Required Connections

To establish a connection to the PLC/RTU device via GSM, the antenna and USB/Ethernet connection of the devices must be made first and the sim card must be inserted into the device.

If USB connection is to be made, GSM IP settings are made with AT commands via Mikroterminal. Whether the device receives an IP can be checked from AT commands.

If Ethernet connection is to be made, GSM IP settings are made by entering GSM APN, Username and Password information via Mikrodiagram/Telediagram program or If the GSM IP is known, the connection is established by entering the GSM IP and port information in the device configuration section via the Mikrodiagram / Telediagram application.

**Note:** However, in connections made by establishing an Ethernet connection, the IP received by the device through the Mikrodiagram / Telediagram program cannot be seen.

<center>

![gsm_ip1](/img/gsm_ip1.png)   
***<center>Figure 1: Mikrodiagram GSM Settings</center>***

</center>

<center>

![gsm_ip2](/img/gsm_ip2.png)   
***<center>Figure 2: Entering Mikrodiagram GSM IP and Port Information</center>***

</center>

**Note:** If Mikrodev PLC/RTU products want to receive IP over GSM, TCP Socket block should be included in the Mikrodiagram/Telediagram project installed on the device and GSM should be selected as the media type.

TCP Socket block is not needed for DM series.

### GSM APN Settings

After the necessary hardware connections are made, Mikroterminal application is opened to get IP for Sim cards with Static IP feature. The port to which the device is connected is selected.

Command -> GSM -> AT+GPRSAPN=\* -> W(Write)

\*For Vodafone AT+GPRSAPN=internetstatik

For Turkcell AT+GPRSAPN=mgbs

For Turk Telekom AT+GPRSAPN=statikip must be written.

<center>

![gsm_ip3](/img/gsm_ip3.png)   
***<center>Figure 3: Mikroterminal AT+GPRSAPN Command</center>***

</center>

If Username and Password information is provided to the user by the GSM operators, the user information obtained must be written in the appropriate places in the Mikroterminal application.

If user information is not provided by the operator, the username and password sections in Mikroterminal application should be left as default.

<center>

![gsm_ip4](/img/gsm_ip4.png)   
***<center>Figure 4: Mikroterminal Username and Password Definition Command</center>***

</center>

In order for the GPRSAPN settings to be applied on the device, the device must be reset.

Commands -> Internal FS -> AT+RESET=1 -> W(Write) should be typed and waited for the device to stand up again.

<center>

![gsm_ip5](/img/gsm_ip5.png)   
***<center>Figure 5: Mikroterminal Device Reset Command</center>***

</center>

When the “Err (Error) LED” of the device turns off, when the “SYS (System) LED” starts to flash, the device is reconnected via the Mikroterminal application.

In order to learn the GSM signal quality of the device, the GSM part of the Mikroterminal application is opened.

Commands -> GSM -> AT+CSQ=? -> R(Read) query is made.

<center>

![gsm_ip6](/img/gsm_ip6.png)   
***<center>Figure 6: Mikroterminal AT+CSQ Command</center>***

</center>

The query can take values between 1 and 31.

1 means the lowest signal quality, 31 means the highest.

<center>

![gsm_ip7](/img/gsm_ip7.png)   
***<center>Figure 7: CSQ Tables</center>***

</center>

**Note:** If the signal quality is insufficient, the position or gain of the antenna is checked. If the antenna is in the panel, the signal quality can be increased by taking the antenna out or replacing the antenna with a more gain antenna.

IP status of the device can be monitored from the Socket Status section of Mikroterminal application.

Commands -> Socket Status -> AT+Connection=? -> R (Read) query is made.

<center>

![gsm_ip8](/img/gsm_ip8.png)   
***<center>Figure 8: Mikroterminal AT+CONNECTION Commands</center>***

</center>

AT+CONNECTION answer to your query

If 0; The module is de-energized,

If 2; The module is energized, (can make calls, send sms.)

If 4; Module trying to get IP,

If 6; Module got IP,

If 8; It means that the module has both received IP and its connection has been made..

If the answer to the AT+CONNECTION query is 8, it means that our device received IP and established a connection via GSM.

In order to learn the IP received by the device, the GSM section of the Mikroterminal application is opened.

Commands -> GSM -> AT+GPRSIP=? -> R(Read) query is made.

<center>

![gsm_ip9](/img/gsm_ip9.png)   
***<center>Figure 9: Mikroterminal AT+GPRSIP Command</center>***

</center>

**Note:** If the answer to this query comes as TIMEOUT, it means that the device has not received an IP.

**Note:** GSM part of Mikroterminal application is opened in order to understand whether the sim card is inserted correctly.

Commands -> GSM -> AT+SIM=? -> R(Read) query is made.

<center>

![gsm_ip10](/img/gsm_ip10.png)   
***<center>Figure 10: Mikroterminal AT+SIM Command</center>***

</center>

AT\+SIM=? The answer to your query;

0 indicates that the SIM card is not inserted, incorrectly inserted, or defective.

1 indicates that the SIM card is inserted correctly and is error-free.

In order to prevent short-term breaks in the GSM connection, the connection waiting time can be defined by specifying a time. The unit of time written to the command is seconds.

Commands -> Custom Command Entry -> AT+GSMRESET=<Time\> -> Send

From the moment a connection request is received from the GSM part, the device checks the GSM connection for the defined period of time, if the connection is not established after the specified period, the device resets itself.

Commands -> Custom Command Entry -> AT+GSMRESET=0 -> Send

Turns off the GSM reset feature.

<center>

![gsm_ip11](/img/gsm_ip11.png)   
***<center>Figure 11: Mikroterminal AT+GSMRESET Command</center>***

</center>

Command can be sent to GSM modem via Mikroterminal.

Commad -> GSM -> AT+MODEM= -> AT+<Command\> -> W query is made.

<center>

![gsm_ip12](/img/gsm_ip12.png)   
***<center>Figure 12: Mikroterminal AT+MODEM Command</center>***

</center>