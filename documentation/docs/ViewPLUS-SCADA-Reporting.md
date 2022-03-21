---
title: Reporting
--- 

## Overview
You can use the Reporter to view and analyze trend data that is logged by the SCADA software. Reporting is done on 3 basic record types. These are tag logs, alarm logs and event logs.


<center>

![report1](/img/report1.png)

</center>


## Tag Logs
Tag log is the data that has been recorded, depending on the logging configuration of the tag. Output can be generated in different formats by filtering according to location, time and other parameters of the tag.

### Selection of Tags to Log
On the tags selection screen, tags under a station can be grouped or all can be selected. If you use the tags option under the station, a list of all the stations appears.


<center>

![report2](/img/report2.png)

</center>


Tags under the station can be listed by clicking on the station name.


<center>

![report3](/img/report3.png)

</center>


"All Tags" option is selected to make selection through all tags.


<center>

![report4](/img/report4.png)

</center>


Filters can be made on the tag list in different ways according to the tag properties. Tags to be reported from the list in the left panel are selected by double clicking. The selected tags are displayed in the panel on the right. To delete a specific tag from the right panel, select the tag and press the "Delete" key on the keyboard. To delete all of the tags, select "Clear List".

### Viewing Tag Log
When the report sheet is first opened, the values of the selected tags are displayed graphically for a specific time interval. "Table View" can be selected to display the data on table form . Different choices can be made regarding the time range and type of data shown.


<center>

![report5](/img/report5.png)

</center>



<center>

![report6](/img/report6.png)

</center>



#### Selecting a Time Interval
The time range of the displayed data can be selected in 3 different ways.

A) Interval : 2 dates are selected
B) Within the last:  Hour, day, week, etc. are selected and the backward time from current date/time is calculated.
C) On Time/Date: An exact date can be selected , or a time value could be added forwards or backwards to this date. For example, "This Day - 5", means "5 days ago". If the date is selected and time unit is "Month"; the month of that date is selected as the time interval.

#### Selecting Data Type
The type of data to be displayed can be statistical value as well as the value of the data itself.

A) All Data: Shown  the actual value of the data that has been logged
B) Statistics: Displays the mean, total, maximum, minimum, change and median values of the data for the selected time periods. For example, if the hourly maximums in a daily time interval are selected, the time interval is divided into hourly slices to produce an output consisting of 24 points.


<center>

![report7](/img/report7.png)

</center>


#### Managing Charts
Show/hide Legend button: Shows or shows the name of the plotted tag and descriptions that show line color in the upper right corner of the chart Add a New Chart: Adds a new chart object that you can compare the data in the main chart with the previous time periods. The added chart is displayed synchronously with the main chart according to the determined time interval.


<center>

![report8](/img/report8.png)

</center>


If the data belonging to the selected item in the range defined on the chart is present, this data is indicated by a point. The points shown can be connected to each other in different ways. Underneath the chart is the charting properties menu for each individual chart. Through this menu, the following operations can be performed

A) Show / hide chart: This line can be hidden and shown with this button
B) Charged / unloaded: Below of the line related to the tag is filled in integral. It may be easier to compare with other tags in this way.
C) Merge Points: The points indicated by the item data can be merged into different ways.


<center>

![report9](/img/report9.png)

</center>


#### Saving Charts
According to the selected parameters, the chart can be saved in an image file in "png" format. Use the "Save Chart " button in the left panel.

### Exporting Data
The data according to the selected parameters can be exported in various formats. For this, firstly the table view button is pressed to create a data table. By using the buttons "html, xml, xslx, csv" located at the top of the table view screen, the data in the table is converted to these formats and stored.


### Saving Filters
The parameters selected to create the data can be saved, and then the same filter can be applied again when needed. The parameters created for this should be applied at least once (Apply Button). After doing this, select "Save this filter" and a name will be given to the filter.The filters are saved for user account. The user can reach these filters from any location. The saved filter can be applied from the saved filters menu on the right side of the screen.

#### Calling Saved Filter Queries
When the filters in this menu are copied by right clicking with the mouse, the content of the filter is copied to the clipboard. This copied content can be linked to objects on the SCADA Editor screen. When clicked on the related object on this screen, the report screen opens and the predefined filter is run.

## Creating Reporting Command
It is possible to create the report output in the desired format by calling the created filters through the reporting command line. For this, it is enough to give the command parameters required for the reporting application. Using this feature, it is possible to create automatic reports at certain time intervals via the "Task Scheduler" of the Windows operating system.

ScadaReporter.exe -database modpollread -user postgres -password pwd123 -server localhost -port 5432 -query twohours -format csv -output "C:\Users\yg\Documents\Reports\Last2Hours" 
-database   Name of the project database (same name as project)
-user      Database user name
-password  Database user password
-server    Database ip address
-port      Database connection port
-tnsname   tns name for Oracle databases
-format    Report output form. Possible values are html, csv, xlsx, xml dir
-query     The name of the filter saved in the report. This parameter is required for the report command. If not given, we do not produce a report; The reporting interface opens
-output    The path and name of the file to be exported.
