---
title: "ViewPLUS SCADA Mail Server Service Application Notes"
---

By entering the e-mail addresses of the users defined in the Scada project, e-mails can be sent to the e-mail addresses listed here in case of alarms.

First of all, mail server settings must be defined in the ServerEngine.ini file in the scada project. The e-mail that will be included here is the address that will send e-mail in case of alarms.

### Scada Mail Server Settings

**Note:** While configuring Scada Mail Server, if active, scada server and client application should be closed.

Until ViewPLUS version 0.9.154 beta build 15 - > C:\Users\< User Name >\AppData\Roaming\Mikrodev\ScadaServer\< Scada Project >

After ViewPLUS version 0.9.154 beta build 15 - > C:\ProgramData\Mikrodev\ScadaServer\< Scada Project >

The serverEngine.ini file of the scada project to be defined as the mail server is found by following the file path. Notepad++ etc. opens with an option to edit with an application.

<center>

![mailserver](/img/mailserver.png)
***<center>Figure 1: Editing the ServerEngine.ini file</center>***

</center>

This file contains the SMTP part.

<center>

![mailserver1](/img/mailserver1.png)
***<center>Figure 2: The SMTP part in the ServerEngine.ini file</center>***

</center>

SMTP_user = < E-mail Address > // Enter the e-mail address that will send the mail.

SMTP_pwd = < Application Password > // A password must be obtained for the scada application from the account that will send the mail. (This section is explained under the heading Getting Gmail Application Password.)

SMTP_host = < SMTP Server Address > // SMTP Server Address of the e-mail address is entered. (For Gmail, smtp.gmail.com should be written.)    

SMTP_port = < SMTP Server Port > // Enter the SMTP Server Port of the e-mail address. (For Gmail, 465 should be written.)

SMTP_mailDelay = < Time > // Enter the time to wait for an e-mail to be sent after an alarm condition. (in seconds)  

#### Getting Gmail App Password

If the e-mail address that will send the mail is gmail, the application password is obtained by following the steps below.

- Sign into Gmail.    
- Click "Manage your Google account"      
- Turn on 2-step verification from the Login Options in the Security section.    

<center>

![mailserver2](/img/mailserver2.png)
***<center>Figure 3: Google Sign-in Options</center>***

</center>

- Define a new password for the scada application from the application passwords section. Select the Other (Custom name) option from the Select application section and make the desired naming, click create.     

<center>

![mailserver3](/img/mailserver3.png)
***<center>Figure 4: Creating an Application Password</center>***

</center>

- Save the password on the screen. The password on the screen will be the password of the mail server. (The password here must be entered in the SMTP Pwd: section.)

<center>

![mailserver4](/img/mailserver4.png)
***<center>Figure 5: Sample Application Password</center>***

</center>


### ViewPLUS Editor Settings

If the alarms in the Scada project are to be sent to the e-mail address of the defined user, the User Manager is started via ViewPLUS Editor.

<center>

![mailserver5](/img/mailserver5.png)
***<center>Figure 6: Starting User Manager</center>***

</center>

- The user whose e-mail address will be defined is selected.    
- User Data -> Other -> E-mail section, the e-mail address to which the e-mail is to be sent is entered.    
- User Data -> Other -> In the Subscriptions section, the alarm conditions that you want to send an e-mail to are selected. (This part can also be done by assigning users from the subscriber users section of the ViewPLUS editor.)          
-  User Data -> Other -> The " Send Alarm Alerts by e-mail " option in the Subscriptions section must be checked.         

<center>

![mailserver6](/img/mailserver6.png)
***<center>Figure 7: User Settings</center>***

</center>

When the above steps are followed, an e-mail will be sent to the e-mail address defined in alarm situations.


