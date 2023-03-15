---
title: IEC61850 Application Notes
---

### Read Data Object

1.	Click Tools/Mdv61850 Browser on Telediagram. Mdv61850 Browser comes with version of Telediagramın 16.1.04 beta8 and up.

<center>

![61850-Browser1](/img/61850-Browser1.png)
***<center>Figure 1: Tools/Mdv61850 Browser</center>***

</center>

2.	Browse SCL file(xxx.cid) from IED and load it.

<center>

![61850-Browser2](/img/61850-Browser2.png)
***<center>Figure 2: Load Configuration File</center>***

</center>

If there is more than one IED you need to choose from the list between buttons 1 and 2.

3.	Find data objects which wanted read and double click to add data objects table at the right side.

<center>

![61850-Browser3](/img/61850-Browser3.png)
***<center>Figure 3: Inserting Data Object</center>***

</center>

4.	Insert result, status and trig blocks into the telediagram project for each data object.

<center>

![61850-Browser4](/img/61850-Browser4.png)
***<center>Figure 4: Data Object Table</center>***

</center>

Insert binary register into the telediagram project for status and trig blocks.                         
Result blocks needs to right type of register according to Object Type.

Object Type variations listed below;         
•	BOOLEAN -> binary register.          
•	INT32 -> long register.         
•	FLOAT32 -> analog register.            
          
<center>

![61850-Browser5](/img/61850-Browser5.png)
***<center>Figure 5: Inserted Telediagram Blocks</center>***

</center>

5. Click on Projects / Blok Properties / Export selected blocks to CSV button and export linelabels into the csv file.

<center>

![61850-Browser6](/img/61850-Browser6.png)
***<center>Figure 6: Block Properties Tab</center>***

</center>

6. Turn back to Mdv61850 Browser and click on “Import Line Labels” button, Select the csv file which exported. You should see to line labels in the info screen.

<center>

![61850-Browser7](/img/61850-Browser7.png)
***<center>Figure 7: Import Line Labels Screen</center>***

</center>

7.	In order to assign blocks to data objects, double-click the cell of the relevant block and select the linelabel in the project.

<center>

![61850-Browser8](/img/61850-Browser8.png)
***<center>Figure 8: Assigning Line Labels to Data Objects Window</center>***

</center>

8.	After selecting the block names, click the "Export" button and the directory and name of the file to be imported into Telediagram appear on the warning screen.                 
You can find the exported file in the “C:/Users/< username >/MdvExports/” directory.

<center>

![61850-Browser9](/img/61850-Browser9.png)
***<center>Figure 9: Configuration Export Screen</center>***

</center>

9.	The configuration file created in Mdv61850 Browser is transferred to Telediagram by clicking Telediagram / Projects / 61850 Tab / Import Tables from Excel.

If there is a previously added relay definition, if you want to add a second IED without deleting it, click the Import Connection from Excel button.

<center>

![61850-Browser10](/img/61850-Browser10.png)
***<center>Figure 10: Import Window of Telediagram 61850 Table</center>***

</center>

10.	After the import process is finished, the table will appear as follows. IP and port settings are checked;

<center>

![61850-Browser11](/img/61850-Browser11.png)
***<center>Figure 11: 61850 Table</center>***

</center>

11.	After loading the project to the device, when we trigger the trig block, it is seen that the data is received. Status registers go down to 0 at each trigger and rise to 1 again if the reading is successful, so the reading accuracy can be ensured.

<center>

![61850-Browser12](/img/61850-Browser12.png)
***<center>Figure 12: Result of Data Object Reading</center>***

</center>

### Read Dataset


1.	The dataset we want to read from the Dataset Object list in the middle left is double-clicked and added to the Datasets list on the right.

<center>

![61850-Browser13](/img/61850-Browser13.png)
***<center>Figure 13: DataSet Object List</center>***

</center>

2.	The objects to be read in the dataset are added to the Dataset Member Object Indexes table by double-clicking.

<center>

![61850-Browser14](/img/61850-Browser14.png)
***<center>Figure 14: DataSet Object Indeks Table</center>***

</center>

3.	Status, Trig Block, RxTime, RxCount, Dataset From Report blocks and result blocks are added for dataset.

Insert binary register into the telediagram project for status, trig and dataset from report blocks.              
Result blocks needs to right type of register according to Object Type.
     
Object Type variations listed below;         
•	BOOLEAN -> binary register.          
•	INT32 -> long register.           
•	FLOAT32 -> analog register.     

<center>

![61850-Browser15](/img/61850-Browser15.png)
***<center>Figure 15: DataSet Blocks</center>***

</center>

4.	Click the Projects / Blok Properties / Export selected blocks to CSV button and the line labels of the blocks are exported to the csv file.

<center>

![61850-Browser16](/img/61850-Browser16.png)
***<center>Figure 16: Block Properties Tab</center>***

</center>

5.	Turn back to Mdv61850 Browser and click on “Import Line Labels” button, Select the csv file which exported. You should see to line labels in the info screen.

<center>

![61850-Browser17](/img/61850-Browser17.png)
***<center>Figure 17: Insert Line Labels Screen</center>***

</center>

6.	In order to assign blocks to data objects, double-click the cell of the relevant block and select the block name in the project.

<center>

![61850-Browser18](/img/61850-Browser18.png)
***<center>Figure 18: Line Label Window</center>***

</center>

7.	After selecting the block names, click the "Export" button and the directory and name of the file to be imported into Telediagram appear on the warning screen.               
You can find the exported file in the “C:/Users/< username >/MdvExports/” directory.

<center>

![61850-Browser19](/img/61850-Browser19.png)
***<center>Figure 19: Configuration Export Screen</center>***

</center>

8.	The configuration file created in Mdv61850 Browser is transferred to Telediagram by clicking Telediagram / Projects / 61850 Tab / Import Tables from Excel.

If there is a previously added relay definition, if you want to add a second IED without deleting it, click the Import Connection from Excel button.


<center>

![61850-Browser20](/img/61850-Browser20.png)
***<center>Figure 20: Import Window of Telediagram 61850 Table</center>***

</center>

9.	After the import process is finished, the table will appear as follows. IP and port settings are checked; 

<center>

![61850-Browser21](/img/61850-Browser21.png)
***<center>Figure 21: 61850 Table</center>***

</center>

10.	After loading the project to the device, when we trigger the trig block, it is seen that the data is received. Status registers go down to 0 at each trigger and rise to 1 again if the reading is successful, so the reading accuracy can be ensured.

<center>

![61850-Browser22](/img/61850-Browser22.png)
***<center>Figure 22: Result of DataSet Reading</center>***

</center>

### Read Report

To read the created dataset without triggering, the following steps are followed;

1.	Reports created from the Reports section are listed at the bottom left. Double-clicking on the report you want to read is added to the Reports table in the middle.


<center>

![61850-Browser23](/img/61850-Browser23.png)
***<center>Figure 23: Insert Report</center>***

</center>

The point to be noted here is that the dataset id (Ds ID) of the report added to the Reports table is the same as the dataset above.

2.	When the Trig Type box is double-clicked, the dialog window that opens is selected when the data will be sent, and the reading period in milliseconds is entered in the Period box. 

•	TRG_OPT_DATA_CHANGED: Send on data change.      
•	TRG_OPT_QUALITY_CHANGED: Send on quailty change.         
•	TRG_OPT_DATA_UPDATE: Send when data is updated.        
•	TRG_OPT_INTEGRITY: Send periodically as a integrity.         
•	TRG_OPT_GI: Submit when general general interrogation arrives.           

<center>

![61850-Browser24](/img/61850-Browser24.png)
***<center>Figure 24: Trig Type Dialog Window</center>***

</center>

3.	The import-export operations made from step 15 in the dataset reading section are repeated and the project is loaded into the device.

4.	It is seen that the values from the IED are transferred to the blocks and the "Dataset from report flag" block is 1.

<center>

![61850-Browser25](/img/61850-Browser25.png)
***<center>Figure 25: Result of Reading Report</center>***

</center>