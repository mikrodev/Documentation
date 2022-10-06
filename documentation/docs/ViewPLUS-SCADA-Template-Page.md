---
title: "ViewPLUS SCADA Template Page"
---

## ViewPLUS TEMPLATE PAGE/RUN FUNCTION

In ViewPLUS Scada application, data of more than one point of the same type can be displayed with a page design.

For example, if a relay with the same features is used with different labels in more than one place in your scada project; just create a single relay reference page. To use the reference page you created on relays with different labels; You need to redirect to the reference page through the relay scada component in the project and use the run function to assign the labels of the relays.

### Run Function

Run Function definition; in the bottom right of the ViewPLUS editor.

Object Properties -> Events -> Run Function section is defined.

<center>

![template1](/img/template1.png)
***<center>Figure 1: Run Function Description</center>***

</center>

### Label Creation

The Run Function runs on tags defined in the same type. Therefore, in the creation of labels, attention should be paid to the fact that the first parts are variable and the last parts are the same.

For example, the labels of the A Relay on the ADP1 panel;

ADP1_A_REF615_ActivePower  
ADP1_A_REF615_PhaseL12Voltage   
ADP1_A_REF615_PhaseL1Current   
ADP1_A_REF615_PhaseL1Voltage if defined as,

Tags to Relay B on ADP2 panel;

ADP2_B_REF615_ActivePower   
ADP2_B_REF615_PhaseL12Voltage  
ADP2_B_REF615_PhaseL1Current   
ADP2_B_REF615_PhaseL1Voltage should be defined as.   

### Using Run Function

For the Run Function, first the sample reference page is created and label assignments are made.

(This page should only contain scada components that will be called on other pages.)

<center>

![template2](/img/template2.png)
***<center>Figure 2: Sample Template Page</center>***

</center>

### Associating Scada Component with Reference Page

Via the scada component to be associated with the reference page

Object Properties -> Events -> Event Action (Go to Page) -> Go to Page (Created reference page is selected.) -> Run Function (data1 = data2)* 

(*replaces tag names starting with data 1 on the redirected page with a tag named data2.)

<center>

![template3](/img/template3.png)
***<center>Figure 3: Run Function Example</center>***

</center>

In the example in Figure 3, scada components labeled B500KOSK_REF615_TSKB_H01 on the B500_REF615_Reference page are used with the label B500KAZAN_REF615_IST2_H03 on a different page.

### Generating a Report on the Reference Page

The report created about the scada components on the reference page can be used on different tags without defining it through the Scada Reporter.

First, a report is created on the reference page.

Select ViewPLUS Editor -> Tools -> Start SCADA Reporter.

<center>

![template4](/img/template4.png)
***<center>Figure 4: Scada Starting the Reporter</center>***

</center>

Labels to be reported defined on the reference page are selected.

Scada Reporter -> Tag Logs -> All Tags -> (Tag is selected.) -> Start Reporting

<center>

![template5](/img/template5.png)
***<center>Figure 5: Scada Reporter Creating Report</center>***

</center>

According to the reporting properties, the reports of the tags are saved. The report created from the saved filters section is selected on the right, and the link is copied with a right click.

<center>

![template6](/img/template6.png)
***<center>Figure 6: Copying the Link of the Generated Report</center>***

</center>

Scada component is created for reports on the reference page so that the generated report can be redirected to the link. The copied link is pasted into the created Scada component.

For automatic report generation in different tag types, ${parent:} must be written in the Run Function section.

Object Properties -> Events -> Event Action (Go to Link) -> Run Function ( ${parent:} ) -> Add Link (checked) -> Web Link (the copied report link is pasted in this section.)

<center>

![template7](/img/template7.png)
***<center>Figure 7: Associating the Reporting Link with the Scada Component</center>***

</center>

### Naming Scada Components on the Reference Page

All scada components can be specifically named by simply naming them on the reference page.

The scada component you will use to add text

In the Object Properties -> Constants -> Text Content section, the expression “:TAGDESC” should be written.

<center>

![template8](/img/template8.png)
***<center>Figure 8: Scada Component Naming</center>***

</center>

To assign a text tag to a scada component

You need to choose any of the tags on the reference page from the Tags -> Text Tag section.

<center>

![template9](/img/template9.png)
***<center>Figure 9: Assigning a Text Label</center>***

</center>

To write the description of the tag that we are assigning.

Tag Channel Editor -> Tag Name (The tag you use in the Text Tag should be written) -> The name of the scada component should be written in the Tag section -> General -> Description section. This definition should be made within the different tag definitions called with the reference page. After the definition is made, the name assignment is made for all scada components created with the reference page of the scada component that says ":TAGDESC".

<center>

![template10](/img/template10.png)
***<center>Figure 10: Label Identification</center>***

</center>

For example, to define a tag on the reference page If B500KOSK_REF615_TSKB_H01_PhaseL1Current_104 tag is used;

A definition should be added to the PhaseL1Current_104 section of the other tags called with the reference page.

(B500KOSK_REF615_TSKB_H02_PhaseL1Current_104, B500KOSK_REF615_TSKB_H03_PhaseL1Current_104, ... vb. tags should be added to the description.)