---
title: Change Map Icons
---

## Introduction

ViewPLUS Scada has change icons feature according to tag value on the map, this article provide you how to do it.

Download ViewPLUS SCADA Map Icons Example from the following link:

[Map Icons Example](http://www.mikrodev.com/downloads/documentation/MapIcon_Example.zip)
### Create Category

You need create category to add icon images into the map.

<center>

![mapicon1](/img/mapicon1.png)

</center>

Click edit button to add category.

<center>

![mapicon2](/img/mapicon2.png)

</center>

Click add new category button. Type category name and load image.
In this way, map icons using as alarm or other states indicator with different color and shapes.


### Add Marker Into The Map

<center>

![mapicon3](/img/mapicon3.png)

</center>

 

Add run function code like below for each marker in selected marker properties.

```
function onCheckMarkerIcon(){
var $Category ="WHITE";			
if (${1} == 3 )
   $Category="YELLOW"; 			
else if(${1} == 2)
   $Category="BLACK";
else if(${1} == 1)
   $Category="RED1";

return $Category;
}
```


${1} meaning the tag which tag id is 1

```
   var $Category ="WHITE";
```
Default image setted as above.

```
if (${1} == 3 )
   $Category="YELLOW"; 
```
If tag value equals to 3 then icon will shows image  which  name "YELLOW"

```
else if(${1} == 2)
   $Category="BLACK";
```
If tag value equals to 2 then icon will shows image  which  name "BLACK"

You can insert more else if lines into the run function code for add more image.


### Results
<center>

![mapicon4](/img/mapicon4.png)

</center>
<center>

![mapicon5](/img/mapicon5.png)

</center>

