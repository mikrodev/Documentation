---
title: IEC104 Uygulama Notu
---

### Genel Bilgi

IEC 60870-5-104 protokolü yaygın kullanılan bir dağıtık haberleşme protokolüdür. IEC104 protokolünün başlıca üstünlüklerini şunlardır:

•	Zaman etiketli değişken desteği

•	Haberleşmenin olmadığı zamanda oluşan olayları zaman etiketleriyle bağlantı kurulunca tekrar gönderebilme özelliği

•	SCADA’nın sorgulama yapmasına gerek olmadan değişimleri otomatik gönderebilme özelliği

•	Değişkenleri tek tek değil, sınıf olarak çoklu sorgulayabilme özelliği


### IEC 60870-5-104 Slave Sürücü

Mikrodev RTU cihazları, IEC 60870-5-104 SLAVE modunu destekler ve IEC 60870-5-104 destekleyen SCADA sistemlerine TCP/IP üzerinden hizmet verir. Aşağıdaki servisler desteklenir:

1.	General Interrogation sorgusu ile tüm data noktalarının okunması 

2.	Zaman senkronizasyonu

3.	Yüzde ve Seviye olarak anlık ölçüm verilerinde olay denetimi

4.	Tanımlanan Olay verilerinin otomatik gönderimi (Case of Transmission, Spontaneous 0x03)

5.	Data noktalarının periyodik gönderimi (Case of Transmission, Periodic 0x01) 

6.	Olay bilgilerinin hafızaya alınması ve iletişim sağlanınca tekrar gönderilmesi

7.	Komut göndermede, Execution Mode desteği; Execute Only, Select Before Execute, Long Pulse ve Short Pulse Duration, Quality Descriptor bilgileri gönderimini destekler.


<center>

![iec104-an-1](/img/iec104-an-1.png)
***<center>Şekil 1: Mikrodev RTU genel kullanım şeması</center>***

</center>

### IEC 104 Slave Blok Tanımlamaları

#### Bağlantılar

<center>

![iec104-an-2](/img/iec104-an-2.png)

</center>

#### Bağlantı Açıklamaları

Ser: TCP Soket Girişi

IEC104 protokolün çalışacağı TCP server soket bloğu bu girişten bağlantısı yapılır. 

Trg: Tetik Girişi

Periyodik gönderim için tetik girişidir. Yükselen kenar olarak çalışır. 

Asd: Asdu Address Girişi

ASDU adresi girişi olarak kullanılır. 

#I1040: Bağlantı Durum

SCADA ile RTU arasında IEC104 bağlantısı kurulu durumda ise bu çıkış değeri 1 dir aksi durumda 0 dır. 

Out: SCADA Yazma Durumu

SCADA seçme ve yürütme isteğinde bulunursa, bu çıkışta bir darbe üretilir.

#### Blok Özel Ayarları

<center>

![iec104_02](/img/iec104_02.png)

</center>

AsduAddress: IEC104 slave istasyon ASDU adresi tanımlanır.

T0: TCP connection timeout süresidir.

T1: Test APDU timeout süresidir.

T2: Ack için timeout süresidir.

T3: Test frame gönderme süresidir.

K: Alınan paketteki sequence numarası ile gönderme durum değişkenindeki numara arasında izin verilecek maksimum fark

W: w kadar I Formatında APDU alındıktan sonra ACK gönderilir.

#### Blok Açıklaması

IEC104 Slave blok eklenerek, RTU üzerinde IEC 104 aktif hale getirilir. IEC104 blok “Ser” girişine TCP bloğu eklenir.

Birden fazla sunucuya hizmet vermek için her bir sunucu için IEC 104 blok eklenmesi gerekir.

IEC104 Asdu adresi, blok içinden değil de dışardan ayarlanmak istenirse “Asd” girişi kullanılır. IEC104 nesneleri arasında periyodik gönderim aktif seçilen nesnelerin değerleri IEC104 Slave bloğuna gelen yükselen kenar ile sunucuya iletilir (COT). Periyodik ya da tetikleme ile veri gönderimi olmayacaksa tetikleme girişi boş bırakılabilir.


### Örnek Uygulama

RTU lojik projelerinde IEC 104 Slave Block'un eklenmesi ile RTU'da IEC 104 protokolü aktif hale getirilir. RTU lojik projesindeki değişkenler, IEC104 ilişkilendirmesi değişken adres tablosunda sağlanır.

<center>

![iec104_03](/img/iec104_03.png)

</center>

### IEC104 Değişken Tablosu Tanımlamaları

#### Değişken Tablosu

RTU lojik projesine, IEC 104 Slave Blok eklenmesi ile RTU içinde IEC 104 protokol aktif hale gelir. RTU lojik projesindeki değişkenler, IEC104 ilişkilendirilmesi ise değişken adres tablosunda sağlanır.

<center>

![iec104_04](/img/iec104_04.png)

</center>

#### Hat Etiketi Tanımlama

Mikrodiagram üzerinde tanımlanan tüm blokların için Hat etiketi tanımlanabilmektedir. Değişken tablosunda protokol adresleri ile ilişkilendirmeyi yapabilmek için hat etiket tanımlanmış olması gerekmektedir.

<center>

![telediagram-editor-05](/img/telediagram-editor-05.png)

</center>

#### Hat Etiketi İlişkilendirme

<center>

![telediagram-editor-06](/img/telediagram-editor-06.png)

</center>

İsim / Alias: Tanımlanan bu değişkeni tanımlayan özel bir isim verilir.

Başlangıç Adresi / Start Address: SCADA üzerinde bu değişken için ayrılan adres buraya yazılır. (Desimal değer olarak yazılır.)

Hat Etiketi / Line Label: Mikrodiagram üzerindeki ilişkilendirilecek blok hat etiketiyle seçilir.

Nokta Sayısı / Point Count: Otomatik olarak hesaplanır. Tablolarda anlamlıdır.            

Quality Register Block: Quality Register tanımlanacak blok girişi

Send Trig Block: Bloğun tetik girişinden bağımsız bir tetik ile IEC104 verileri gönderilmesi istenirse bu kısımdan tetik bloğu seçilir ve buradaki tetiğe bağımlı veri gönderebilmesi için blok özel ayarlarında yer alan periyodik gönder seçeneğinin tikli olmaması gerekmektedir.

Protokol Tipi / Protocol Type: Modbus, Dnp3, IEC101, IEC104 arasından seçim yapılır. Protokol tipine göre Object Type (Nesne Tipi) değişecektir.

Nesne Sınıfı / Object Type: Değişkenin ait olduğu sınıf bilgisi seçilir

Periyodik Gönderim / Send Periodically: IEC104 Slave blok üzerindeki Tetik girişinden tetik algılanınca periyodik gönderme olarak bu değişkende SCADA’ya gönderilsin mi seçimidir.

####  Gönderim Metodu / Send Method:          
Tanımlanan değişkenin değeri değişince yapılacak işlem seçilir.

Seviye: “Change Value” de tanımlanan miktar değişim olunca gönderim tetiklenir.

Yüzde: “Change Value” de tanımlanan yüzde kadar değişim olunca gönderim tetiklenir.

Hiçbir Değişimde/ None: Değer değişimi gönderimi tetiklenmez.

Change Value: With the "Send method", it adjusts the percentage change in the level.

Değişim Değeri / Change Value: “Send method” ile birlikte yüzde ya da level değişim değerini ayarlar.

### IEC104 Nesne Tipleri

#### IEC104 Okuma Yönünde Nesne Tipleri


|	IEC104 Nesne Tipi	|	Pe	|
| ------ | ------ |
|	1 (single-point)	|	Binary, Word, Analog, Long	|
|	3 (double-point)	|	Word, Analog, Long	|
|	5 (step position)	|	-	|
|	7 (bitstring)	|	-	|
|	9 (measured normalized value)	|	Binary, Word, Analog, Long	|
|	11 (measured scaled value)	|	-	|
|	13 (measured short floating point)	|	Binary, Word, Analog, Long	|
|	15 (integrated totals)	|	-	|
|	20 (packed single-point)	|	-	|
|	21 (normalized value without quality descriptor)	|	-	|
|	30 (single-point information with time tag)	|	Binary, Word, Analog, Long	|
|	31 (double-point information with time tag)	|	Word, Analog, Long	|
|	32 (step position information with time tag)	|	-	|
|	33 (bitstring of 32 bit with time tag)	|	-	|
|	34 (measured normalized value with time tag) |	Binary, Word, Analog, Long	|
|	35 (measured scaled value with time tag)	|	-	|
|	36 (measured short floating point number with time tag) |	Binary, Word, Analog, Long	|
|	37 (integrated totals with time tag)	|	-	|
|	38 (event of protection equipment with time tag)	|	-	|

#### IEC104 Kontrol Yönünde Nesne Tipleri

Okuma tipi ile eşleştirilen her blok için yazma değişkeni de otomatik olarak oluşturulmaktadır. Tanımlanan okuma nesnelerine yazma olarak erişilebilecek değişken tipleri şu şekildedir:

|	Okumak için seçilen - IEC104 Nesne Tipi	|	IEC104 Object Types - Aynı datapointe yazma için erişelebilecek IEC 104 Nesne Tipi	|
| ------ | ------ |
|	1 (single-point)	|	45 (single command), 58 (single command with time tag)	|
|	3 (double-point)	|	46 (double command), 59 (double command with time tag)	|
|	13 (measured short floating point)	|	50 (set point command, short floating point), 63 (set point command, short floating - point number with time tag	|
|	30 (single-point information with time tag)	|	45 (single command), 58 (single command with time tag)	|
|	31 (double-point information with time tag)	|	46 (double command), 59 (double command with time tag)	|
|	36 (measured short floating point number with time tag) |	50 (set point command, short floating point), 63 (set point command, short floating - point number with time tag)	|

### Quality Register Blok Ayarları

Cihazlarımızda Quality Descriptor (QDS) bitleri ve buna bağlı olarak Quality Register Block Ayarları desteklenmektedir. Quality Descriptor bit tanımları; OV, BL, SB, NT, IV, CY, CA, EI’dir. Bilindiği gibi tanımlanan nesne tiplerine göre QDS kullanımı çeşitlilik göstermektedir. Aşağıda Quality Descriptor (QDS) tanımlama tablosu gösterilmiştir.


|	Druum / QDS	|	OV	|	CY	|	CA	|	EI	|	BL	|	SB	|	NT	|	IV	|
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|		|	overflow quality flag	|	carry flag	|	adjusted flag	|	blocked quality flag	|	substituted quality flag	|	topical quality flag	|	invalid quality flag	|
|	1	|	overflow	|	carry	|	counter was adjusted	|	elapsed time not valid	|	blocked	|	substituted	|	not topical	|	invalid	|
|	0	|	no overflow	|	bo carry	|	counter was not adjusted	|	elapsed time valid	|	not blocked	|	not substituted	|	topical	|	valid	|

Kullanılacak QDS değerleri Bit Birleştirme Bloğuyla oluşturulup değişken adresler kısmında IEC 104 ilişkilendirmesi sırasında Quality Register Block ayarıyla tanımlanmış olur.

Örneğin IEC 104 protokolüyle okuma değerini tanımlayacağız. Okuma nesne tipi olarak 36 – measured short floating point number with time tag, seçiyoruz. Quality Register Block tanımlaması için QDS değerleri tanımlayacağız. Bunun için QDS bit tanımlaması şu şekilde; 0.bit OV, 4.bit BL, 5.bit SB, 6.bit NT, 7.bit IV bilgilerini içermelidir. Bit Birleştirme Bloğunu Quality Register Block olarak tanımlayabiliriz.


<center>

![iec104-an-3](/img/iec104-an-3.png)
***<center>Figure 2: QDS Bitlerinin Quality Register Block Oluşturması</center>***

</center>

### Komut Gönderimi Ayarları

IEC 104 protokolünde uygun nesne tiplerinde Single Command, Double Command ve Set Point Command özelliğini desteklemektedir. Nesne tipleri komut türleri eşleşmesi Nesne Tipleri Tablosunda gösterilmiştir. Ayarları ise şu şekildedir; Hat etiketi ilişkilendirme işlemi yapılırken seçilen IEC 104 protokolü ayarlarında nesne tipine bağlı olarak seçenekler otomatik olarak görünmektedir. Örneğin, Nesne tipi 45 (Single Command) Seçildiğinde Şekil 6 da görüldüğü gibi parametre ayarları için seçenekler aktif olmaktadır. Short Pulse Duration ya da Long Pulse Duration değerleri için birer yazmaç seçilir. Girilen değer ms olarak işlem göreceği unutulmamalı. Execution Method da listeden seçilir. Execution Method 2 türdür. İşlemin tek komutla gerçekleşmesi isteniyorsa Execute Only seçilir. Farklı 2 onay durumu isteniyorsa Select Before Execute seçilir. Örneğin 2 farklı komutla onay isteyen işlemlerde Select Before Execute seçeneği kullanılabilir. Bunun için önce Select komutu sonrasında ise Execute komutu gönderilmelidir. 

<center>

![iec104-an-4](/img/iec104-an-4.png)
***<center>Figure 3: Nesne Tipine Uygun Komut Gönderme Ayarları</center>***

</center>

### IEC104 Olay (Event) Mekanizması

Değişken adres tablosunda, IEC 104 nesneleri için değişimde gönder seçimi mevcuttur. Bu menüde tanımlanan değişkenin değeri değişince yapılacak işlem seçilir.

Hiçbir Değişimde: Değer değişimi gönderimi tetiklenmez.

Seviye Değişiminde: “Değişim Değeri” de tanımlanan miktar değişim olunca gönderim tetiklenir.

Yüzde Değişiminde: “Değişim Değeri” de tanımlanan yüzde kadar değişim olunca gönderim tetiklenir.

Değişim yüzdesi ya da seviyesi de	“Değişim Değeri” seçeneği ile ayarlanır. “Gönderim Metodu” ile birlikte yüzde ya da seviye değişim değerini ayarlar.

RTU cihazı, değişimde gönder tanımlı olan ve değişim tespit edilmiş durumları olay olarak etiketler ve olaya zaman etiketi atar. Etiketlenmiş bir olay olması durumunda eğer sunucu ile bağlantı var ise ilgili nesne COT 0x03 Spontaneous olarak anında iletilir. 

Eğer sunucu ile bağlantı yok ise, cihaz olay kayıt hafızasına eklenir ve tekrar sunucu bağlantısı kurulunca göndermek üzere saklanır. Saklama işlemi için IEC104 Slave bloğu içerisinde log-kayıt belleğine ekle seçeneği seçili olmalıdır.

Not: Bağlantı kurulduğunda tüm etiketlerin sunucuya gönderilmesi isteniyorsa IEC104 Slave bloğu içerisinde DevNET ile senkronla seçeneği seçili olmalıdır.

Not: IEC104 nesneleri arasında periyodik gönderim aktif seçilen nesnelerin değerleri olay (event) olarak algılanmaz. Yani periyodik gönderimler bağlantı yokken log kayıt belleğine eklenmez.

### IEC104 Redundancy Grup Özelliği

Mikrodev RTU IEC104 Slave olarak IEC104 Master ile bağlantı kurabilir. Bu bağlanacak Master IP’lerin sayısının AT komutu ile cihaza tanımlanması gerekir. Mikroterminal uygulaması açılır, özel komut girişi kısmından 

AT+OPTIONS=7,< BAGLANACAK MASTER IP SAYISI > komutu gönderilir.

Örneğin Edaşta iki farklı sunucu IP’ si varsa bu komut şu şekilde olur, 

AT+OPTIONS=7,2


>>  AT+OPTIONS=7,2   Write Commad
OPTIONS=OK


>>  AT+OPTIONS=7,?   Read Command
OPTIONS=2

Bu parametre girildikten sonra cihaza reset atılmalıdır. AT+RESET=1

 
###	Log Kayıt Belleğinde Tutulan Analog Eşik Değerini Düzenleme Özelliği

Bağlantı yok iken log kayıt belleğinde tutulan analog değerlerinin eşik değerleri üzerinde değişiklik yapılabilmektedir.

Mikroterminal uygulaması açılır, özel komut satırından gönderilecek
AT+OPTION=8,< ANALOG EVENT ÇARPANI > 
komut satırında yer alan analog event çarpanı, bağlantı yok iken log kayıt tutulan analog değerlerin eşik değerleri üzerinde işlem yapmayı sağlar. Buraya yazılan değerler 0’dan farklı set edilirse, bağlantı yokken, event eşiği buradaki katsayı ile çarpılır.

Örneğin;
AT+OPTION=8,0 ise bağlantı yoksa, analog olaylar log kayıt belleğine eklenmez.          
AT+OPTION=8,1 ise değişken tablosunda girilen değer kadar değişimde log kayıt belleğine kaydeder.             
AT+OPTION=8,10 ise değişken tablosunda girilen değerin 10 kat daha büyük değişim de log kayıt belleğine kaydeder.

>>  AT+OPTIONS=8,10   Write Command
OPTIONS=OK


>>  AT+OPTIONS=8,?   Read Command
OPTIONS=10

Bu parametre girildikten sonra cihaza reset atılmalıdır. AT+RESET=1

### IEC104 Bağlantı Bilgisi Öğrenme Komutu

AT komutu ile IEC104 bağlantı bilgisi öğrenilebilir.

Mikroterminal uygulaması açılır, özel komut girişinden            
AT+COMSTATUS=iec104 komutu gönderilir.

IEC104 redundancy grup sayısı =2 seçili bağlantı yok iken komut sorgusu örneği;

>>  AT+COMSTATUS=iec104                 
IEC104 CLIENT GROUP[0]:00000000        
	isDataTransStarted:0          
	NumofActiveConnections:0             
	MaxNumberOfEvents:256            
	RefInstance:200111b8             
	EventItems:1000c800             
	ObjMap:10005ab0           
		connection[0]:00000000             
		connection[1]:00000000           
		connection[2]:00000000           
		connection[3]:00000000       
		connection[4]:00000000         
IEC104 CLIENT GROUP[1]:00000000             
	isDataTransStarted:0             
	NumofActiveConnections:0            
	MaxNumberOfEvents:256            
	RefInstance:200115f8             
	EventItems:1000dc00            
	ObjMap:100064f4            
		connection[0]:00000000         
		connection[1]:00000000         
		connection[2]:00000000           
		connection[3]:00000000           
		connection[4]:00000000               
COMSTATUS=

IEC104 redundancy grup sayısı =2 seçili, tek bağlantı var iken komut sorgusu örneği;

>>  AT+COMSTATUS=iec104     
IEC104 CLIENT GROUP[0]:4d0aa8c0     
	isDataTransStarted:1       
	NumofActiveConnections:1        
	MaxNumberOfEvents:256         
	RefInstance:2000f4c8         
	EventItems:1000c800          
	ObjMap:1000518c        
		connection[0]:20010b30           
		DataTransStarted: 1        
		connection[1]:00000000            
		connection[2]:00000000           
		connection[3]:00000000        
		connection[4]:00000000            
IEC104 CLIENT GROUP[1]:00000000              
	isDataTransStarted:0           
	NumofActiveConnections:0         
	MaxNumberOfEvents:256           
	RefInstance:2000f908          
	EventItems:1000dc00               
	ObjMap:100052ac           
		connection[0]:00000000        
		connection[1]:00000000             
		connection[2]:00000000     
		connection[3]:00000000            
		connection[4]:00000000              
COMSTATUS=      

### TCP Soket Bloğuna Bağlı IEC104 Master IP’lerini Öğrenme Komutu

AT komutu ile TCP Soket bloğuna bağlı olan IEC104 Master IP’leri öğrenilebilir.

Mikroterminal uygulaması açılır, özel komut girişinden veya Socket Status kısmında yer alan AT+STATUS= yazan komut satırından          
AT+SOCKET=< TCP Soket Blok Numarası > komutu gönderilir

<center>

![iec104-an-5](/img/iec104-an-5.png)

</center>

4 blok numarası olan TCP Soket bloğuna bağlı IEC104 Master IP Sorgu Örneği;

>>  AT+SOCKET=4

Ip: 172.21.1.1, Port: 65063, Status: 2        
Ip: 172.21.1.1, Port: 65514, Status: 3          
Ip: 172.21.1.2, Port: 46076, Status: 2            
Ip: 172.21.1.2, Port: 45799, Status: 2         
 
>>  AT+COMSTATUS=iec104

IEC104 CLIENT GROUP[0]:020115ac       
	isDataTransStarted:1         
	NumofActiveConnections:2        
	MaxNumberOfEvents:256          
	RefInstance:200110b0        
	EventItems:1000c800          
	ObjMap:10005ab0             
		connection[0]:20014b78      
			DataTransStarted: 1         
		connection[1]:00000000              
		connection[2]:20013430        
			DataTransStarted: 0            
		connection[3]:00000000           
		connection[4]:00000000    

IEC104 CLIENT GROUP[1]:010115ac         
	isDataTransStarted:1         
	NumofActiveConnections:2         
	MaxNumberOfEvents:256       
	RefInstance:200114f0        
	EventItems:1000c900         
	ObjMap:100064f4       
		connection[0]:20013838      
			DataTransStarted: 0     
		connection[1]:00000000       
		connection[2]:20014770        
			DataTransStarted: 1       
		connection[3]:00000000     
		connection[4]:00000000        
COMSTATUS=  




