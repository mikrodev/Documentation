---
title: ViewPLUS SCADA Data Manager
---

Archives are used to reduce the size in high-dimensional databases and to make a more detailed search between logs. To get to the archive screen, data manager is started from the tools tab.

<center>

![datamanager1](/img/datamanager1.png)

</center>

Archiving is selected in the window that opens.

<center>

![datamanager2](/img/datamanager2.png)

</center>

Date is entered in Archieve Data Older Than section. All logs saved in the database before the date entered will be transferred to the archive database. Archiving is started by clicking Start Archiving.

<center>

![datamanager3](/img/datamanager3.png)

</center>

When OK is selected for the warning displayed after archiving, archived logs in the main database are deleted. Since these logs are deleted, they will not be displayed in reporting in the main project. It can only be accessed from the Archive database. If Cancel is selected, logs are kept in the main database and logs are saved in the archive database.

<center>

![datamanager4](/img/datamanager4.png)

</center>

After seeing the text Archive process completed in the data manager, archiving process is completed.

<center>

![datamanager5](/img/datamanager5.png)

</center>

It is seen that a new database named main database archive has been created.

<center>

![datamanager6](/img/datamanager6.png)

</center>

Logs before the archiving date determined in the data manager are displayed in the archivetestlog_archive database.

<center>

![datamanager7](/img/datamanager7.png)

</center>