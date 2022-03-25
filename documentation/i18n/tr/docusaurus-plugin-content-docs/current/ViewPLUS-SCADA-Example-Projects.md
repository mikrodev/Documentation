---
title: ViewPLUS SCADA Örnek Projeler
---

## Alarm Projeleri

### Aktif Alarmlara ve Kayıtlara Filtre Uygulama

Filtre oluşturularak, sayfaların içinden yapılabilecek loglara ve aktif alarm sayfasına yönlendirmeler yapılır.

Scada raportör ekranından istenilen alarm veya etiket kayıtları seçilerek filtrelenebilir. Seçim ekranının ardından gelen pencerede tarih süresi seçilir ve “Bu Filtreyi Kaydet” tıklanarak filtre eklenir. Eklenen filtreler, sayfanın sağ tarafında "Kayıtlı Filtreler" bölümünde görünür.

Kaydedilen filtreye sağ tıklandığında link bilgisi alınır. Alınan bağlantı bilgileri, bileşene (Web) Bağlantısı olarak eklenir.

![active-alarm-01](/img/active-alarm-01.png)
***<center>Figure 1: Alarm Logs</center>***

```
{
    "alarmfilter": {
        "alarmclass": "",
        "itemIdList": [
            7,
            6,
            5,
            4,
            3,
            2,
            11,
            10,
            1,
            8,
            9
        ]
    },
    "contentType": 1,
    "datarange": {
        "ftip": 0,
        "higherBound": 0,
        "limitVal": 0,
        "lowerBound": 0
    },
    "limitRowCount": 500,
    "queryname": "AlarmLog",
    "reptypedef": {
        "periodTip": 0,
        "repTip": 0,
        "targetDatetime": "0",
        "timeFactor": 0
    },
    "reservedVal": -1,
    "tagfilter": {
        "ftip": 1740730552,
        "itemIdList": [
        ],
        "keywords": "",
        "parentChannel": "",
        "parentStation": ""
    },
    "timeinterval": {
        "endTime": "1617262500000",
        "intervaltip": 2,
        "startTime": "1617172500000",
        "timePeriod": "0",
        "timeValue": "0"
    },
    "viewMethod": 0,
    "vtype": 0
}
```

![active-alarm-02](/img/active-alarm-02.png)
***<center>Figure 2: Applied Filter on Alarm Log</center>***

Alarm loglarını filtrelerle yönlendirmek için linkin sonunda “||| 1: AlarmName ”parametre ifadesi eklendi.
örneğin Alarm_5 için; “ ||| 1: Alarm_5 ”.

"1" olan ifade, "Scada Reporter" ekranındaki "alarm_id" sütununu gösterir. Her sütun, 0'dan başlayarak soldan sağa sayılarla ifade edilir.

"alarm_5" ile belirtilen ifade, "alarm_id" sütunu altındaki alarm kimliklerine göre filtrelenir.

![active-alarm-03](/img/active-alarm-03.png)
***<center>Figure 3: Adding Filter on Component by Web Link</center>***

```
{
    "alarmfilter": {
        "alarmclass": "",
        "itemIdList": [
            7,
            6,
            5,
            4,
            3,
            2,
            11,
            10,
            1,
            8,
            9
        ]
    },
    "contentType": 1,
    "datarange": {
        "ftip": 0,
        "higherBound": 0,
        "limitVal": 0,
        "lowerBound": 0
    },
    "limitRowCount": 500,
    "queryname": "AlarmLog",
    "reptypedef": {
        "periodTip": 0,
        "repTip": 0,
        "targetDatetime": "0",
        "timeFactor": 0
    },
    "reservedVal": -1,
    "tagfilter": {
        "ftip": 1740730552,
        "itemIdList": [
        ],
        "keywords": "",
        "parentChannel": "",
        "parentStation": ""
    },
    "timeinterval": {
        "endTime": "1617262500000",
        "intervaltip": 2,
        "startTime": "1617172500000",
        "timePeriod": "0",
        "timeValue": "0"
    },
    "viewMethod": 0,
    "vtype": 0
}
||| 1:Alarm_5
```

![active-alarm-04](/img/active-alarm-04.png)
***<center>Figure 4: Weblink Result for Filtered Alarm: Alarm_5</center>***

“: Alarmlar” ile gösterilen ifade aktif alarmlar sayfasına yönlendirmek için kullanılır.

![active-alarm-05](/img/active-alarm-05.png)
***<center>Figure 5: Adding “:Alarms” expression to WebLink Line for Showing Activated Alarms</center>***

![active-alarm-06](/img/active-alarm-06.png)
***<center>Figure 6: Weblink Result for “:Alarms” Expression</center>***

": Alarmlar ||| 7: Alarm_5" ifadesi yedinci sütuna göre filtreleme yapar ve aktif alarm sayfasına yönlendirir.

![active-alarm-07](/img/active-alarm-07.png)
***<center>Figure 7: Adding WebLink for Actived & Filtered Alarms</center>***

![active-alarm-08](/img/active-alarm-08.png)
***<center>Figure 8: Result of Weblink for Activated and Filtered Alarms</center>***

## Sürekli Artan Sayaç Etiketi Oluşturma

Bazı durumlarda, alandan okunan etiket değerinin eğiliminin sürekli artması (bir sayaç okuma gibi) istenebilir. Bu gibi durumlarda sahadan okunan veriler cihaz değişimi, proje güncelleme vb. nedenlerle kirlendiğinde; eğilimler ve karşı toplam değerler de kirlenebilir. Bunu önlemek için SCADA üzerinde aşağıdaki şekilde bir mekanizma yapılandırılabilir.

Problemi çözmek için 3 ayrı etikete ihtiyacımız var. Örnek olarak bir "CounterTag" etiketi oluşturacağız. Paralel olarak, "Veritabanı Kanalı" altında bir "CounterTag_latest" etiketi ve alan tabanlı bozulmaları düzeltmek için Makro kanalı altında bir "CounterTag_controller" etiketi oluşturacağız, böylece bu etiket veritabanında kaydedilen en son değeri okuyabilir.

<center>

![CreatingConstantlyIncreasingCounterTag-01](/img/CreatingConstantlyIncreasingCounterTag-01.png)

</center>

"CounterTag_latest" etiketine giriş yaptığımız en son değeri almak için etiket ayarlarında aşağıdaki sorguyu kullanacağız:

```
select dataval from logs.lct_table where tag_id=2 
```

Bu sorgu, "2" etiket kimliğine sahip "CounterTag" etiketinin son kaydedilen değerini okuyacaktır.

Son olarak "CounterTag_controller" etiketine kontrol makrosunu ekleyeceğiz. Makro şöyle olacaktır:

<center>

![CreatingConstantlyIncreasingCounterTag-02](/img/CreatingConstantlyIncreasingCounterTag-02.png)

</center>

```
[v1=$4e0]
[IF,v1,3]
[$4=$6+0]
[E]
[v0=$4>$2]
[IF,v0,3]
[$2=$4+0]
[E]
[$4=$2+0]
[E]
```

Bu makro 3 ana bölümden oluşur:

"1" olarak numaralandırılmış satırlar; sunucu ilk kez çalışırken veritabanından son günlüğe kaydedilen değeri okur.

"2" olarak numaralandırılmış satırlar; herhangi bir nedenle son log değerinden küçükse saha cihazındaki değeri ayarlar.

"3" olarak numaralandırılmış satırlar; makronun kontrol etiketini sürekli güncellediği kısımdır.

Yukarıda oluşturulan yapıya ek olarak hatalı logların oluşmasını önlemek için etiket loglama ayarlarında "sadece artarken log" seçeneği aktif edilmelidir.

## Kullanıcı Yöneticisi Uygulamaları

### Dinamik Sayfalarda Kullanıcı Yetkilendirmesi

Kısıtlı erişime ihtiyaç duyulan dinamik sayfa için ilgili nesnede "Run Function" parametresi tanımlanır.

"data1 = data2" bilgisi, yönlendirilen sayfada data 1 ile başlayan tag isimlerini data2 isimli tag ile değiştirir.
Noktalı virgülden sonra kullanılan bilgiler, yönlendirilecek sayfanın erişim numaralarını gösterir.

![function-parameters-01](/img/function-parameters-01.png)
***<center>Figure 1: Assigning Rights by Run Function Parameters</center>***

"requireReadAccess = {1,2,4}" ile belirtilen sayfa içeriğine erişmek için bu numaraların Kullanıcı Erişim Hakları altında işaretlenmesi gerekmektedir.
Kullanıcı Erişim Hakları penceresinde bu numaralar işaretlenmemiş ise ilgili sayfaya ulaşamazlar.

![useraccessrights-02](/img/useraccessrights-02.png)
***<center>Figure 2: Selecting Rights for User</center>***

Kullanıcı erişim hakkı içerisinde "requireReadAccess" içeriğindeki sayılar seçilmemiş ise sayfaya yönlendirilmek istediğinizde aşağıdaki uyarı ekranı gelmektedir.

![useraccessrights-03](/img/useraccessrights-03.png)
***<center>Figure 3: Example For Unauthorized Access Try</center>***

## ViewPLUS SCADA Protokol Uygulamaları

### Kanal: Veritabanı

SCADA'nın kendi veri tabanından özel sorgular yapmak için kullanılan kanal tipi.

#### Kanallar ve Etiketler Oluşturun

Etiket kanalı düzenleyici seçeneğinde protokol tipi veritabanı seçilerek kanal oluşturulur.

<center>

![database-channel-01](/img/database-channel-01.png)
***<center>Figure 1: Create Database Channel Screen</center>***

</center>

Veritabanı kanalının altında bir etiket oluşturulur.

<center>

![database-channel-02](/img/database-channel-02.png)
***<center>Figure 2: Create Database Tag Screen</center>***

</center>

#### Kanal ve Etiket Yapılandırması

Yanıt Zaman Aşımı: Veritabanı sorgusunun yürütülme sıklığını temsil eden milisaniye cinsinden süre.
Sorgular etiketin «Sorgu» seçeneğine yazılır

Veritabanına etiket kimliği 2 olan bir etiket eklenir ve bu etiket üzerindeki veritabanı üzerinden işlemler yapılır. 1'den 100'e kadar olan değerler gönderilir ve log veritabanında tutulur.

<center>

![database-channel-04](/img/database-channel-04.png)
***<center>Figure 3: Real Tag ID</center>***

</center>

#### Bağlantı

Bu sorgu ile veri tabanından son gönderilen değeri getirir.

<center>

![database-channel-05](/img/database-channel-05.png)
***<center>Figure 4: Database Tag Value and Real Tag Value</center>***

</center>

### Kanal: Küresel Veritabanı

Farklı veri tabanlarına bağlanarak özel sorgular oluşturmak ve bu sorgu sonuçlarını proje etiketlerine aktarmak için kullanılan kanal türüdür.

#### PostgreSQL Veritabanı

#### Kanallar ve Etiketler Oluşturun

Etiket kanalı düzenleyici seçeneğinde protokol türü global veritabanı seçilerek bir kanal oluşturulur.


<center>

![globaldatabase-channel-01](/img/globaldatabase-channel-01.png)
***<center>Figure 1: Create Global Database Channel Screen</center>***

</center>

Globaldatabase kanalının altında bir etiket oluşturulur.

<center>

![globaldatabase-channel-02](/img/globaldatabase-channel-02.png)
***<center>Figure 2: Create Global Database Tag Screen</center>***

</center>

#### Kanal ve Etiket Yapılandırması

Kanal ekranında PostgreSQL veri tabanı tipi ile ilgili bilgiler girilir.
Yanıt Zaman Aşımı: Veritabanı sorgusunun yürütülme sıklığını temsil eden milisaniye cinsinden süre.

<center>

![globaldatabase-channel-03](/img/globaldatabase-channel-03.png)
***<center>Figure 3: PostgreSQL Database Configuration</center>***

</center>

Sorgular, etiketin «Sorgu» seçeneğine yazılır.

<center>

![globaldatabase-channel-04](/img/globaldatabase-channel-04.png)
***<center>Figure 4: Query Option of The Tag</center>***

</center>

Veritabanına etiket kimliği 2 olan bir etiket eklenir ve bu etiket üzerindeki veritabanı üzerinden işlemler yapılır. 1'den 100'e kadar olan değerler gönderilir ve log veritabanında tutulur.

<center>

![globaldatabase-channel-05](/img/globaldatabase-channel-05.png)
***<center>Figure 5: Real Tag ID</center>***

</center>

#### Bağlantı

Sorguda 2 numaralı etiketin cihaz adres bilgisi yazıldı. Cihaz adres bilgisi sunucu ekranında görüntülenir.

```
select deviceaddress from public.tags where tag_id=2;
:{${1}}:
```

<center>

![globaldatabase-channel-06](/img/globaldatabase-channel-06.png)
***<center>Figure 6: Query Answer-1</center>***

</center>

Bu sorgu ile veritabanından gönderilen son değer 1 numaralı etikete ayarlanır.

```
select data_value from logs.tag_log where tag_id=2 order by logtime desc limit 1
:{${1}}:
```

<center>

![globaldatabase-channel-07](/img/globaldatabase-channel-07.png)
***<center>Figure 7: Query Answer-2</center>***

</center>

Postgresql veritabanı sorgusunda 2, 3, 4 ve 5 numaralı etiketlerin veritabanına kaydedilen en son değerleri sırasıyla 1, 6, 7 ve 8 numaralı etiketlere yazılmıştır.

```
 WITH
 t1 AS (
  SELECT  data_value from logs.tag_log where tag_id=2 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1 ),
 t2 AS (
  SELECT  data_value from logs.tag_log where tag_id=3 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1),
 t3 AS (
  SELECT  data_value from logs.tag_log where tag_id=4 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1),
 t4 AS (
  SELECT  data_value from logs.tag_log where tag_id=5 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1)
 
 SELECT t1.data_value data1, t2.data_value  data2, t3.data_value  data3, t4.data_value  data4
 FROM t1, t2 ,t3,t4;
 
 :{${1}, ${6} , ${7}, ${8}}:
```

<center>

![globaldatabase-channel-08](/img/globaldatabase-channel-08.png)
***<center>Figure 8: Query Answer-3</center>***

</center>

#### Oracle Veritabanı

Bu kanal oracle veri tabanına bağlanıp istenilen veriyi çekmek için kullanılır.

#### Kanal ve Etiket Yapılandırması

Kanal ekranına Oracle veri tabanı tipi ile ilgili bilgiler girilir. Konfigürasyon ekranında projenin veritabanı bilgileri girilir.

#### Bağlantı

Oracle veri tabanına kaydedilen ilk veriler sorgulanarak ele geçirilmiştir. Oracle veritabanındaki veriler, ID 2 ile etikete yazdırılır.

```
select data_value UNTITLED127.tag_log order by logdate fetch first 1 rows only
:{${2}}:
```

<center>

![globaldatabase-channel-09](/img/globaldatabase-channel-09.png)
***<center>Figure 9: Oracle Database Configuration</center>***

</center>

Oracle veri tabanına kaydedilen son veriler sorgulanarak alınmıştır.

```
select data_value UNTITLED127.tag_log order by logdate desc fetch first 1 rows only
:{${2}}:
```

<center>

![globaldatabase-channel-09](/img/globaldatabase-channel-10.png)
***<center>Figure 10: Query Answer</center>***

</center>

### Kanal: JavaScript

JavaScript fonksiyonları JavaScript kanalı tanımlanabilir. Komut dosyanızda çeşitli Matematik işlevlerini çağırabilirsiniz. Sistem etiketlerinin değerlerini "${123}" biçiminde de kullanabilirsiniz. İşlev sonucunun "JavaScript Etiketi" üzerine yazılması için sayısal bir değer "döndürmeniz" gerekir.
*Kanal Parametreleri
- Kare Zaman Aşımı = Çerçevenin hangi frekansta olduğunu temsil eden milisaniye sayısı.
JavaScript işlevi çağrılır.
*Etiket Parametreleri
- Sorgu = Çağrılacak JavaScript ifadesi.

#### Kanallar ve Etiketler Oluşturun

Etiket kanalı düzenleyici seçeneğinde protokol tipi javascript seçilerek kanal oluşturulur.

<center>

![javascript-channel-01](/img/javascript-channel-01.png)
***<center>Figure 1: Create JavaScript Channel Screen</center>***

</center>

Veritabanı kanalının altında bir etiket oluşturulur.

<center>

![javascript-channel-02](/img/javascript-channel-02.png)
***<center>Figure 2: Create JavaScript Tag Screen</center>***

</center>

#### Kanal ve Etiket Yapılandırması

Sorgular, etiketin «Sorgu» seçeneğine yazılır.

<center>

![javascript-channel-03](/img/javascript-channel-03.png)
***<center>Figure 3: Query Option of The Tag</center>***

</center>

Modbus kanalından 2 farklı etiket seçilerek örnek javascript kodları yazılmıştır.

<center>

![javascript-channel-04](/img/javascript-channel-04.png)
***<center>Figure 4: Modbus Real Tags</center>***

</center>

#### Bağlantı

Örnek 1: İki etiketin toplamı gösteriliyor.

```
var3 = ${2}+${3};
return var3;
```

<center>

![javascript-channel-05](/img/javascript-channel-05.png)
***<center>Figure 5: Query Answer-1</center>***

</center>

Örnek 2:
İlk satırda: bir "var1" değişkeni tanımlayın ve "id 2 ile etiketin değeri" artı "5" atayın
İkinci satırda: bir "var2" değişkeni tanımlayın ve "3 kimliğine sahip etiketin değeri" artı "3" atayın
Üçüncü satırda: bir "ara toplam" değişkeni tanımlayın ve buna "var1 ve var2 toplamı" atayın
Son satırda : ara toplamın karekökünü değerlendirin ve bu değere geri dönün. Geri dönüş
değer, geçerli JavaScript Etiketinin değeri olarak da yazılacaktır.

```
var1 = 5+${2};
var2 = 3+${3};
subtotal=(var1+var2);
return Math.sqrt(subtotal);
```

<center>

![javascript-channel-06](/img/javascript-channel-06.png)
***<center>Figure 6: Query Answer-2</center>***

</center>

Önemli Not = JavaScript etiketinde diğer sistem etiketlerinin değerlerini ayarlayamazsınız. Sen
Bunu başarmak için Makroları kullanmanız gerekir. Böylece aşağıdaki komut dosyası çalışmayacaktır:
${3}= 3 + var1;
Örnek 3: Değişkenlere etiket değerleri atanır. Değişkenler eşitse 1 döndürün. Değişkenler eşit değilse 0 döndürün.

```
var1 = ${2};
var2 = ${3};
var3 = var1===var2 ? 1:0;
return var3;
```

<center>

![javascript-channel-07](/img/javascript-channel-07.png)
***<center>Figure 7: Query Answer-3</center>***

</center>

<center>

![javascript-channel-08](/img/javascript-channel-08.png)
***<center>Figure 8: Query Answer-4</center>***

</center>

### Kanal: Sunucu Bilgisi

Bu kanalı kullanarak aktif alarm sayısı, sistem saati gibi gerçek zamanlı bilgilere ulaşabilirsiniz.
Sistem bilgilerini almak için örnek bir "JavaScript" ifadesi:

```
var1 = :ALARMCOUNT(Panel1); 
var2 = :ALARMCOUNT(Panel2); 
totalalarms_defined= (var1 +var2 );  
totalalarms_defined döndür; // "Panel1" ve "Panel2" alarm sınıfları için tanımlanan toplam alarm sayısını döndürür.
```
```
Aşağıdaki anahtar kelimeler JavaScript'te desteklenir.
:ALARMCOUNT()
sistemde tanımlanan alarm sayısını döndürür.
:ALARMCOUNT(SınıfAdı)
"ClassName" alarm sınıfı için alarm numarasını döndürür.
:ACTALARMCOUNT()
sistemde tanımlanan aktif alarmların sayısını döndürür.
:ACTALARMCOUNT(SınıfAdı)
"ClassName" alarm sınıfı için aktif alarmların sayısını verir.
:ACKEDALARMCOUNT()
sistemde tanımlanan onaylanmış aktif alarmların sayısını döndürür.
:ACKEDALARMCOUNT(SınıfAdı)
"ClassName" alarm sınıfı için onaylanmış aktif alarmların sayısını döndürür.
:SİSTEM ZAMANI()
epoch'tan bu yana SCADA sunucusunun sistem saatini milisaniye cinsinden döndürür.
:BAĞLANTILI KANALLAR(KanalAdı)
etkin bir bağlantıya sahip kanalların sayısını ve "KanalAdı" anahtar sözcüğünü içeren bir adı döndürür.
:BAĞLANMAYAN KANALLAR(KanalAdı)
bağlı olmayan ve "KanalAdı" anahtar sözcüğünü içeren bir ada sahip kanalların sayısını döndürür
```
Kanal, Tag Channel Editor'da "SERVERINFO" protokol tipi seçilerek oluşturulur.

![serverinfo-01](/img/serverinfo-01.png)
***<center>Figure 1: Adding Serverinfo Type Channel</center>***

"SERVERINFO" kanalı altında oluşturulan etiketler içerisine sorgular yazılarak kanallar ve alarmlar ile ilgili bilgiler alınabilir.
Aşağıda tanımlanan sorguya göre projedeki toplam aktif alarm sayısı etiket üzerinde okunabilir.

<center>

![serverinfo-02](/img/serverinfo-02.png)
***<center>Figure 2: Adding ActiveAlarmCount Tag by Defining Code</center>***

</center>

Aktif alarmların toplam sayısı, tanımlanmış “SERVERINFO” kanalının altındaki etikette görüntülenir.

![serverinfo-03](/img/serverinfo-03.png)
***<center>Figure 3: Displaying Active Alarms on ViewPLUS Client</center>***

![serverinfo-04](/img/serverinfo-04.png)
***<center>Figure 4: Displaying Active Alarm Information by Tag Monitor on Server Engine</center>***

## Harita Görünümleri İçin Süslü Tablolar Tasarlama

Harita Görünümlerinizde verileri görüntülemek için kullanılacak tabloları tasarlamak için bazı üçüncü taraf uygulamalarını kullanabilirsiniz. Bu hizmetlerden biri bu [link](https://divtable.com/table-styler/) bulunabilir.

Bu hizmeti kullanarak tablonuzu stilize edebilir ve otomatik olarak bir CSS ve HTML kodu oluşturabilirsiniz.

<center>

![ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-01](/img/ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-01.png)

</center>

Oluşturulan kodu Harita Görünümünde kullanabilmek için bu iki kodu da InfoWindowContent'e koymanız gerekir. Ancak kodu InfoWindowContent'e yapıştırmadan önce; CSS kodunu "<style> </style> etiketlerine koymanız gerekir.

Kodun yapısı aşağıdaki gibi olmalıdır:

```
<style> ...CSS Code Here...</style>
        ... HTML Code Here ...
```

Örneğin, oluşturulan CSS kodunuz şöyleyse:

```
table.blueTable {
  border: 1px solid #1C6EA4;
  background-color: #EEEEEE;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
table.blueTable td, table.blueTable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}
table.blueTable tbody td {
  font-size: 13px;
}
table.blueTable tr:nth-child(even) {
  background: #D0E4F5;
}
table.blueTable thead {
  background: #1C6EA4;
  background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  border-bottom: 2px solid #444444;
}
table.blueTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  border-left: 2px solid #D0E4F5;
}
table.blueTable thead th:first-child {
  border-left: none;
}

table.blueTable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  background: #D0E4F5;
  background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  border-top: 2px solid #444444;
}
table.blueTable tfoot td {
  font-size: 14px;
}
table.blueTable tfoot .links {
  text-align: right;
}
table.blueTable tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
```

Ve tablo HTML'niz şöyle:

```
<table class="blueTable">
 <thead>
 <tr>
 <th>head1</th>
 <th>head2</th>
 <th>head3</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>cell1_1</td>
 <td>cell2_1</td>
 <td>cell3_1</td>
 </tr>
 <tr>
 <td>cell1_2</td>
 <td>cell2_2</td>
 <td>cell3_2</td>
 </tr>
 <tr>
 <td>cell1_3</td>
 <td>cell2_3</td>
 <td>cell3_3</td>
 </tr>
 </tbody>
 </table>
```

Ardından, InfoWindofContent'e yapıştırılacak olan kodunuz şöyle olmalıdır:

```
<style>
 table.blueTable {
   border: 1px solid #1C6EA4;
   background-color: #EEEEEE;
   width: 100%;
   text-align: left;
   border-collapse: collapse;
 }
 table.blueTable td, table.blueTable th {
   border: 1px solid #AAAAAA;
   padding: 3px 2px;
 }
 table.blueTable tbody td {
   font-size: 13px;
 }
 table.blueTable tr:nth-child(even) {
   background: #D0E4F5;
 }
 table.blueTable thead {
   background: #1C6EA4;
   background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
   background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
   background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
   border-bottom: 2px solid #444444;
 }
 table.blueTable thead th {
   font-size: 15px;
   font-weight: bold;
   color: #FFFFFF;
   border-left: 2px solid #D0E4F5;
 }
 table.blueTable thead th:first-child {
   border-left: none;
 }
 
 table.blueTable tfoot {
   font-size: 14px;
   font-weight: bold;
   color: #FFFFFF;
   background: #D0E4F5;
   background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
   background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
   background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
   border-top: 2px solid #444444;
 }
 table.blueTable tfoot td {
   font-size: 14px;
 }
 table.blueTable tfoot .links {
   text-align: right;
 }
 table.blueTable tfoot .links a{
   display: inline-block;
   background: #1C6EA4;
   color: #FFFFFF;
   padding: 2px 8px;
   border-radius: 5px;
 }
 </style>

 <table class="blueTable">
 <thead>
 <tr>
 <th>head1</th>
 <th>head2</th>
 <th>head3</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>cell1_1</td>
 <td>cell2_1</td>
 <td>cell3_1</td>
 </tr>
 <tr>
 <td>cell1_2</td>
 <td>cell2_2</td>
 <td>cell3_2</td>
 </tr>
 <tr>
 <td>cell1_3</td>
 <td>cell2_3</td>
 <td>cell3_3</td>
 </tr>
 </tbody>
 </table>
```

Harita Görünümünde tablo şöyle görünecektir:

<center>

![ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-02](/img/ViewPLUS-SCADA-Designing-Fancy-Tables-For-Map-Views-02.png)

</center>