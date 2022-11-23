---
title: Telediagram Editor
---

## IEC 104'ü Kullanma

IEC 60870-5-104, güç sistemi izleme ve kontrolü için bir protokoldür. Çoğunlukla Ethernet üzerinden trafo merkezleri ve kontrol merkezleri arasında iletişim kurmak için kullanılır (Fiber optik, 2/3/4G, ...). IEC 60870-5-104 protokolü, tam ağ erişimine uyacak şekilde taşıma, ağ, bağlantı ve fiziksel katman hizmetlerindeki değişikliklerle birlikte IEC 60870-5-101 protokolünün bir uzantısıdır.

Burada protokol parametreleri hakkında temel bilgileri bulacaksınız:

* APCI - Uygulama Protokolü Kontrol Bilgileri
* APDU - Uygulama Protokolü Veri Birimi
* ASDU - Uygulama Hizmet Veri Birimi

### Adres

* IP adresi - Ethernet'teki her cihazın fiziksel adresi vardır
* ASDU adresi - her bağımlı (istemci) aygıtın mantıksal bir adresi vardır, ayrıca bir aygıtın birden fazla ASDU adresi olabilir
* IOA adresi - bilgi nesnesi adresi

| 	Aralık	 | 	Tip	 | 	Açıklama	 | 	Yön	 | 	Yön	 | 	Destek	 |	
| ------ | ------ | ------ | ------ |
|	1	|	M_SP_NA_1	|	Single-point information		|	Monitor	|	Yes	|
|	2	|	M_SP_TA_1	|	Single-point information with time tag		|	Monitor	|	Yes	|
|	3	|	M_DP_NA_1	|	Double-point information		|	Monitor	|	Yes	|
|	4	|	M_DP_TA_1	|	Double-point information with time tag		|	Monitor	|	Yes	|
|	5	|	M_ST_NA_1	|	Step position information		|	Monitor	|	No	|
|	6	|	M_ST_TA_1	|	Step position information with time tag		|	Monitor	|	No	|
|	7	|	M_BO_NA_1	|	Bit string of 32 bit		|	Monitor	|	No	|
|	8	|	M_BO_TA_1	|	Bit string of 32 bit with time tag		|	Monitor	|	No	|
|	9	|	M_ME_NA_1	|	Measured value, normalized value		|	Monitor	|	Yes	|
|	10	|	M_ME_TA_1	|	Measured value, normalized value with time tag		|	Monitor	|	Yes	|
|	11	|	M_ME_NB_1	|	Measured value, scaled value		|	Monitor	|	Yes	|
|	12	|	M_ME_TB_1	|	Measured value, scaled value wit time tag		|	Monitor	|	Yes	|
|	13	|	M_ME_NC_1	|	Measured value, short floating point number		|	Monitor	|	Yes	|
|	14	|	M_ME_TC_1	|	Measured value, short floating point number with time tag		|	Monitor	|	Yes	|
|	15	|	M_IT_NA_1	|	Integrated totals		|	Monitor	|	No	|
|	16	|	M_IT_TA_1	|	Integrated totals with time tag		|	Monitor	|	No	|
|	17	|	M_EP_TA_1	|	Event of protection equipment with time tag      		|	Monitor	|	No	|
|	18	|	M_EP_TB_1	|	Packed start events of protection equipment with time tag		|	Monitor	|	No	|
|	19	|	M_EP_TC_1	|	Packed output circuit information of protection equipment with time tag		|	Monitor	|	No	|
|	20	|	M_PS_NA_1	|	Packed single point information with status change detection		|	Monitor	|	No	|
|	21	|	M_ME_ND_1	|	Measured value, normalized value without quality descriptor		|	Monitor	|	No	|
|	30	|	M_SP_TB_1	|	Single-point information with time tag CP56Time2a		|	Monitor	|	Yes	|
|	31	|	M_DP_TB_1	|	Double-point information with time tag CP56Time2a		|	Monitor	|	Yes	|
|	32	|	M_ST_TB_1	|	Step position information with time tag CP56Time2a		|	Monitor	|	Yes	|
|	33	|	M_BO_TB_1	|	Bit string of 32 bit with time tag CP56Time2a		|	Monitor	|	No	|
|	34	|	M_ME_TD_1	|	Measured value, normalized value with time tag CP56Time2a		|	Monitor	|	Yes	|
|	35	|	M_ME_TE_1	|	Measured value, scaled value with time tag CP56Time2a		|	Monitor	|	Yes	|
|	36	|	M_ME_TF_1	|	Measured value, short floating point number with time tag CP56Time2a		|	Monitor	|	Yes	|
|	37	|	M_IT_TB_1	|	Integrated totals with time tag CP56Time2a		|	Monitor	|	No	|
|	38	|	M_EP_TD_1	|	Event of protection equipment with time tag CP56Time2a		|	Monitor	|	No	|
|	39	|	M_EP_TE_1	|	Packed start events of protection equipment with time tag CP56Time2a		|	Monitor	|	No	|
|	40	|	M_EP_TF_1	|	Packed output circuit information of protection equipment with time tag CP56Time2a		|	Monitor	|	No	|
|	45	|	C_SC_NA_1	|	Single command		|	Control	|	Yes	|
|	46	|	C_DC_NA_1	|	Double command		|	Control	|	Yes	|
|	47	|	C_RC_NA_1	|	Regulating step command		|	Control	|	No	|
|	48	|	C_SE_NA_1	|	Set-point Command, normalized value		|	Control	|	Yes	|
|	49	|	C_SE_NB_1	|	Set-point Command, scaled value		|	Control	|	Yes	|
|	50	|	C_SE_NC_1	|	Set-point Command, short floating point number		|	Control	|	Yes	|
|	51	|	C_BO_NA_1	|	Bit string 32 bit command		|	Control	|	No	|
|	58	|	C_SC_TA_1	|	Single command with time tag CP56Time2a		|	Control	|	Yes	|
|	59	|	C_DC_TA_1	|	Double command with time tag CP56Time2a		|	Control	|	Yes	|
|	60	|	C_RC_TA_1	|	Regulating step command with time tag CP56Time2a		|	Control	|	No	|
|	61	|	C_SE_TA_1	|	Measured value, normalized value command with time tag CP56Time2a		|	Control	|	Yes	|
|	62	|	C_SE_TB_1	|	Measured value, scaled value command with time tag CP56Time2a		|	Control	|	Yes	|
|	63	|	C_SE_TC_1	|	Measured value, short floating point number command with time tag CP56Time2a		|	Control	|	Yes	|
|	64	|	C_BO_TA_1	|	Bit string of 32 bit command with time tag CP56Time2a		|	Control	|	No	|
|	70	|	M_EI_NA_1	|	End of Initialization	|	Monitor	|	Yes	|
|	100	|	C_IC_NA_1	|	Interrogation command	|	Control	|	Yes	|
|	101	|	C_CI_NA_1	|	Counter interrogation command	|	Control	|	No	|
|	102	|	C_RD_NA_1	|	Read command	|	Control	|	Yes	|
|	103	|	C_CS_NA_1	|	Clock synchronization command	|	Control	|	Yes	|
|	104	|	C_TS_NA_1	|	Test command	|	Control	|	No	|
|	105	|	C_RP_NA_1	|	Reset process command	|	Control	|	No	|
|	106	|	C_CD_NA_1	|	Delay acquisition command	|	Control	|	No	|
|	107	|	C_TS_TA_1	|	Test command with time tag CP56Time2a	|	Control	|	No	|
|	110	|	P_ME_NA_1	|	Parameter of measured values, normalized value		Control	|	No	|
|	111	|	P_ME_NB_1	|	Parameter of measured values, scaled value		Control	|	No	|
|	112	|	P_ME_NC_1	|	Parameter of measured values, short floating point number		Control	|	No	|
|	113	|	P_AC_NA_1	|	Parameter activation		Control	|	No	|
|	120	|	F_FR_NA_1	|	File ready	|	File transfer	|	No	|
|	121	|	F_SR_NA_1	|	Section ready	|	File transfer	|	No	|
|	122	|	F_SC_NA_1	|	Call directory, select file, call file, call section	|	File transfer	|	No	|
|	123	|	F_LS_NA_1	|	Last section, last segment	|	File transfer	|	No	|
|	124	|	F_FA_NA_1	|	ACK file, ACK section	|	File transfer	|	No	|
|	125	|	F_SG_NA_1	|	Segment	|	File transfer	|	No	|
|	126	|	F_DR_TA_1	|	Directory	|	File transfer	|	No	|
|	127	|	F_SC_NB_1	|	Request archive file	|	File transfer	|	No	|

* Cause of transmission

|	Dec	|	Description	|
| ------ | ------ |
|	1	|	Periodic, cyclic	|
|	2	|	Background interrogation	|
|	3	|	Spontaneous	|
|	4	|	Initialized	|
|	5	|	Interrogation or interrogated	|
|	6	|	Activation	|
|	7	|	Confirmation activation	|
|	8	|	Deactivation	|
|	9	|	Confirmation deactivation	|
|	10	|	Termination activation	|
|	11	|	Return information caused by a remote command	|
|	12	|	Return information caused by a local command	|
|	13	|	File transfer	|
|	20	|	Interrogated by general interrogation	|
|	21	|	Interrogated by interrogation group 1	|
|	22	|	Interrogated by interrogation group 2	|
|	23	|	Interrogated by interrogation group 3	|
|	24	|	Interrogated by interrogation group 4	|
|	25	|	Interrogated by interrogation group 5	|
|	26	|	Interrogated by interrogation group 6	|
|	27	|	Interrogated by interrogation group 7	|
|	28	|	Interrogated by interrogation group 8	|
|	29	|	Interrogated by interrogation group 9	|
|	30	|	Interrogated by interrogation group 10	|
|	31	|	Interrogated by interrogation group 11	|
|	32	|	Interrogated by interrogation group 12	|
|	33	|	Interrogated by interrogation group 13	|
|	34	|	Interrogated by interrogation group 14	|
|	35	|	Interrogated by interrogation group 15	|
|	36	|	Interrogated by interrogation group 16	|
|	37	|	Interrogated by counter general interrogation	|
|	38	|	Interrogated by interrogation counter group 1	|
|	39	|	Interrogated by interrogation counter group 2	|
|	40	|	Interrogated by interrogation counter group 3	|
|	41	|	Interrogated by interrogation counter group 4	|
|	44	|	Type Identification unknown	|
|	45	|	Cause unknown	|
|	46	|	ASDU address unknown	|
|	47	|	Information object address unknown	|

### Blok Bilgileri

* IEC104 slave bloğu eklendiğinde, RTU üzerinde IEC 104 aktif hale gelecektir.
* TCP veya Serialport bloğu IEC104 blok ser girişine bağlanır.
* Her sunucunun birden fazla sunucuya hizmet vermesi için IEC 104 blokları eklenmelidir.
* IEC104 Asdu adresi blok içinden değil de dışarıdan ayarlanmışsa Asd girişi kullanılır.
* Tetikleyicinin yükselen ucunda, IEC104 nesneleri arasında periyodik iletim etkinleştirilir ve seçilen nesneler periyodik olarak sunucuya iletilir. Tetik girişi boş bırakılabilir.

<center>

![iec104_01](/img/iec104_01.png)

</center>

Ser: TCP Soket Girişi. IEC104 protokolünün çalışacağı TCP server soket bloğu bu girişten bağlanır.

Trg: Trigger Girişi Periyodik gönderim için tetik girişi. Yükselen bir kenar olarak çalışır.

Asd: Asdu Adres Girişi ASDU adresi giriş olarak kullanılır.

Q1: Link Status SCADA ve RTU arasındaki IEC104 bağlantısı kurulu ise bu çıkış değeri 1, değilse 0'dır.

Q2: SCADA yazma durumu, SCADA istekleri seçip yürütürse bu çıkışta bir darbe üretilir.

### Özel ayarlar

* AsduAddress: IEC104 slave istasyon ASDU adresi tanımlıdır

<center>

![iec104_02](/img/iec104_02.png)

</center>

AsduAddress: IEC104 slave istasyonu ASDU adresi tanımlandı

T0: Sunucu ile bağlantı kurulması için zaman aşımı. (Kullanılmayan Köle)

T1: Bu parametre, master'dan bir onay için slave'in maksimum beklediği süreyi saniye cinsinden tanımlar.

T2: Ack için zaman aşımı süresi (Master'dan alınan son telgraftan başlayarak en geç bu süreden sonra S-formatlı bir çerçeve gönderilir)

T3: Test çerçevesi gönderme süresi (Master'dan alınan son telgraftan başlayarak en geç bu süreden sonra bir Test çerçevesi gönderilir)

K: Alınan paketteki sıra numarası ile gönderme durumu değişkenindeki sayı arasındaki izin verilen maksimum fark.

W: ACK(onay mesajı) gönderme sıklığı(W paketlerinden sonra ACK gönderir)

### Örnek Uygulama

* RTU mantık projelerinde IEC 104 Slave Blok eklenmesi ile RTU'da IEC 104 protokolü aktif hale getirilir. RTU mantık projesinde değişkenler, IEC104 ilişkilendirmesi değişken adres tablosunda verilmektedir.

<center>

![iec104_03](/img/iec104_03.png)

</center>

### Protokollü Değişken Eşleme

#### Değişken Adres Tablosu

* RTU mantık projesinde protokol bloğu eklenerek ilgili protokol etkinleştirilir. RTU mantık Projesindeki değişkenler, protokol arasındaki ilişki değişken adres tablosunda sağlanır.

<center>

![iec104_04](/img/iec104_04.png)

</center>

#### Satır Etiketlerini Tanımlama

*Mikrodiyagram üzerinde tanımlanan tüm bloklar için satır etiketi tanımlanabilir. Değişken tablosunda, protokol adresleri ile ilişkilendirilebilmek için hat etiketi tanımlanmalıdır.

<center>

![telediagram-editor-05](/img/telediagram-editor-05.png)

</center>

#### Satır Etiketi Ekleme

<center>

![telediagram-editor-06](/img/telediagram-editor-06.png)

</center>

Alias: Tanımlanan bu değişkeni tanımlayan özel bir isim verilir.

Başlangıç ​​Adresi: SCADA üzerinde bu değişken için ayrılan adres buraya yazılır. Ondalık değer olarak yazılır

Line Label:Mikrodiyagram üzerinde ilişkilendirilecek blok, line etiketi ile seçilir.

Puan Sayısı: Otomatik olarak hesaplanır. Masalarda mantıklı.

Protokol Tipi: Modbus, Dnp3, IEC101, IEC104 seçilir. Nesne tipi, protokol tipine göre değişecektir.

Nesne Türü:IEC104 nesne türü bilgisi seçildi. ayrıntılı bilgi için protokol türü bilgilerine bakın.

Object Class: Değişkenin ait olduğu sınıf bilgisi seçilir.

Send On Trigger:IEC104 Slave bloğu, tetik girişinden test algılandığında bu SCADA'ya periyodik gönderim olarak gönderilecek seçimdir.

#### Gönderme Yöntemi:

Tanımlanan değişkenin değeri değiştirilirse yapılacak işlem seçilir.

Seviye: "Değeri Değiştir" bölümünde tanımlanan miktar değiştirildiğinde iletim tetiklenir.

Yüzde: "Değeri Değiştir" bölümünde tanımlanan yüzde oranında bir değişiklik olduğunda iletim tetiklenir.

Yok: Değer değişimi kaydı tetiklemez

Değeri Değiştir: "Gönderme yöntemi" ile seviyedeki yüzde değişimini ayarlar.


## DNP3 Slave Kullanma

### Genel Bilgi

DNP3 protokolü, dağıtılmış bir iletişim protokolüdür. Birincil avantaj şunlardır:

•	Zaman etiketli değişken desteği

•	Haberleşmenin olmadığı zamanda oluşan olayları zaman etiketleriyle bağlantı kurulunca tekrar gönderebilme özelliği

•	SCADA nın sorgulama yapmasına gerek olmadan değişimleri otomatik gönderebilme özelliği

•	Değişkenleri tek tek değil, sınıf olarak çoklu sorgulayabilme özelliği

•	Zaman senkronizasyon

### DNP3 Slave Sürücüsü

Mikrodev RTU cihazları, DNP3 SLAVE modunu destekler ve DNP3 destekleyen Ünitelere sistemlerine TCP/IP ve/veya Seriport üzerinden hizmet verir. Aşağıdaki servisler desteklenir:

1-	Class nesne sorgusu ile toplu nesne okunması  

2-	Zaman senkronizasyonu     

3-	Yüzde ve Seviye olarak anlık ölçüm verilerinde olay denetimi

4-	Olay verilerinin otomatik gönderimi

5-	Data noktalarının periyodik gönderimi

###	DNP3 Slave Blok Tanımlamaları

#### Bağlantılar

<center>

![dnp3_01](/img/dnp3_01.png)

</center>

#### Bağlantı Açıklamaları

Ser: TCP Soket Girişi 

DNP3 protokolün çalışacağı TCP server soket bloğu bu girişten bağlantısı yapılır.

Trg: Tetik Girişi

Periyodik gönderim için tetik girişidir. Yükselen kenar olarak çalışır.

Asd: Asdu Address Girişi

ASDU adresi girişi olarak kullanılır.

<center>

![dnp3_02](/img/dnp3_02.png)

</center>

#### Blok Açıklaması

DNP3 slave blok eklenerek, RTU üzerinde DNP3 aktif hale getirilir.           
DNP3 blok ser girişine TCP veya Seriport bloğu eklenir.           
Birden fazla sunucuya hizmet vermek için her bir sunucu için DNP3 blok eklenmesi gerekir.           
DNP3 Asdu adresi, blok içinden değilde dışardan ayarlanmak istenirse Asd girişi kullanılır.            
Tetik yükselen kenarında, DNP3 nesneleri arasında periyodik gönderim aktif seçilen nesneler, Periodik COT ile sunucuya iletilir. Tetikleme girişidir boş bırakılabilir.     

<center>

![dnp3_03](/img/dnp3_03.png)

</center>

### DNP3 Değişken Tablosu Tanımlamaları

#### Değişken Tablosu

RTU lojik projesine, DNP3 Slave Blok eklenmesi ile RTU içinde DNP3 protokol aktif hale gelir. RTU lojik projesindeki değişkenler, DNP3 ilişkilendirilmesi ise değişken adres tablosunda sağlanır.

<center>

![dnp3_04](/img/dnp3_04.png)

</center>

#### Hat Etiketi Tanımlama

Mikrodiagram üzerinde tanımlanan tüm blokların için Hat etiketi tanımlanabilmektedir. Değişken tablosunda protokol adresleri ile ilişkilendirmeyi yapabilmek için hat etiket tanımlanmış olması gerekmektedir.

<center>

![dnp3_05](/img/dnp3_05.png)

</center>

#### Hat Etiketi İlişkilendirme

Hat etiketleri ile protokol adreslerinin ilişkilendirilmesi, Değişken address tablosundaki “Add” butonuna basılarak çıkan menüden sağlanır.

<center>

![dnp3_06](/img/dnp3_06.png)

</center>

● Alias:  

Tanımlanan bu değişkeni tanımlayan özel bir isim verilir.

● Start Address:

SCADA üzerinde bu değişken için ayrılan adres buraya yazılır. Decimal değer olarak yazılır.

● LineLabel:

Mikrodiagram üzerindeki ilişkilendirilecek blok hat etiketiyle seçilir.

● Point Coint:

Otomatik olarak hesaplanır. Tablolarda anlamlıdır.

● Send Trig Block:

Bloğun tetik girişinden bağımsız bir tetik ile DNP3 verileri gönderilmesi istenirse bu kısımdan tetik bloğu seçilir ve buradaki tetiğe bağımlı veri gönderebilmesi için blok özel ayarlarında yer alan periyodik gönder seçeneğinin tikli olmaması gerekmektedir.

● Protocol Type:

Modbus, DNP3, IEC101, IEC104 arasından seçim yapılır. Protokol tipine göre Object Type değişecektir.

● Object Type:

DNP3 object type bilgisi seçilir. Detaylı bilgi için protokol tip bilgilerine bakınız.

● Object Class:

Değişkenin ait olduğu sınıf bilgisi seçilir.

● Send On Trigger:

DNP3 Slave blok üzerindeki Tetik girişinden tetkik algılanınca periyodik gönderme olarak bu değişkende SCADA ya gönderilsin mi seçimidir.

● Send Method:

Tanımlanan değişkenin değeri değişince yapılacak işlem seçilir.

- None: Değer değişimi gönderimi tetikletmez.

- Level: “Change Value” de tanımlanan miktar değişim olunca gönderim tetiklenir.

- Percentage: “Change Value” de tanımlanan yüzde kadar değişim olunca gönderim tetiklenir.

● Change Value:

“Send method” ile birlikte yüzde yada level değişim değerini ayarlar.

###	DNP3 Nesne Tipleri

#### DNP3 Okuma Yönünde Nesne Tipleri

| DNP3 Nesne Tipi     | Register Data Tipi |
| ----------- | ----------- |
| Single Bit Binary Input : Data Object 01 - Variation 01 | Binary, Word, Analog, Long |
| Binary Input With Status :Data Object 01 - Variation 02| Binary, Word, Analog, Long |
| Binary Input Change Without Time : Data Object 02 - Variation 01 | Binary, Word, Analog, Long |
| Binary Output : Data object 10 - Variation 01 | Binary, Word, Analog, Long |
| Binary Output Status : Data object 10 - Variation 02 | Binary, Word, Analog, Long |
| 32 BIT Analog Input : Data Object 30 - Variation 01 | Long |
| 16 BIT Analog Input : Data Object 30 - Variation 02 | Binary, Word |
| 32 BIT Analog Input Without Flag : Data Object 30 - Variation 03| Long |
| 16 BIT Analog Input Without Flag : Data Object 30 - Variation 04| Binary, Word |
| Short Float Analog Input Without Flag : Data Object 30 - Variation 05| Analog |

NOT 1: Class 0, Class 1 ve Class 2 verisi çekmek için Değişken Adress tablosundan DNP_OBJTYPE_CLASSOBJ tipinden bir değişken eklenmesi gerekmektedir. Bu değişkenin adresi, hat etiketi gibi diğer ayarları rastgele seçilebilebilir.

<center>

![dnp3_07](/img/dnp3_07.png)

</center>

#### DNP3 Kontrol Yönünde Nesne Tipleri

Okuma tipi ile eşleştirilen her blok için yazma değişkeni de otomatik olarak oluşturulmaktadır. Tanımlanan okuma nesnelerine yazma olarak erişilebilecek değişken tipleri şu şekildedir:

| DNP3 Nesne Tipi    | Register Data Tipi |
| ----------- | ----------- |
| Control Relay Output Block : Data Object 12 - Variation 01 | Binary, Word, Analog, Long |
| 32 Bit Analog Output Block : Data Object 41 - Variation 01| Long |
| 16 Bit Analog Output Block : Data Object 41 - Variation 02 | Binary, Word |
| Short Float Analog Output Block : Data Object 41 - Variation 03 | Analog |

###	DNP3 Olay (Event) Mekanizması

#### DNP3 Nesneleri için Olay Tanımı

Değişken adres tablosunda, DNP3 nesneleri için değişimde gönder seçimi mevcuttur. Bu menüde Tanımlanan değişkenin değeri değişince yapılacak işlem seçilir.

●   None: Değer değişimi gönderimi tetikletmez.

●	Level: “Change Value” de tanımlanan miktar değişim olunca gönderim tetiklenir.

●	Percentage: “Change Value” de tanımlanan yüzde kadar değişim olunca gönderim tetiklenir.

Değişim yüzdeki yada seviyeside  “Change Value” değeri ile ayarlanır. “Send method” ile birlikte yüzde yada level değişim değerini ayarlar.

#### DNP3 Olay Durumlarının Anlık İletimi

RTU cihazı, gönderme olarak tanımlanan durumları ve olay olarak algılanan değişikliği etiketler ve olaya bir zaman etiketi atar. Etiketli bir olay olması durumunda, sunucuya bağlantı varsa ve sunucu cihazda "UNSOLICED" göndererek aktifse, ilgili nesne hemen "UNSOLICED" olarak iletilir.

Sunucu ile bağlantı varsa ve “UNSOLICITED” gönderimi aktif olarak algılanan olaylar aşağıdaki tabloda belirtilen DNP3 nesne tipleri ile gönderilir.

| DNP3 Nesne Tipi     | Register Data Tipi |
| ----------- | ----------- |
| Binary Input Change Without Time : Data Object 02 - Variation 01 | Binary |
| 32 Bit Analog Input Change Without Time : Data Object 32 - Variation 01 | Long |
| 16 Bit Analog Input Change Without Time : Data Object 32 - Variation 02 | Word |
| Short Float Analog Input Change Without Time : Data Object 32 - Variation 05 | Analog |

#### DNP3 Olay Durumlarının Zaman Etiketli Gönderimi

Olay Kontrol kontrolleri, sunucuya bağlantı olmasa veya bağlantı olmasa bile pasif olarak “UNSOLICED” göndermeye devam eder. Bu şartlar altında bir olay olması durumunda olay bilgisi zaman etiketi ile olay hafızasına kaydedilir ve bu veri cihazda SINIF 1 verisi olarak tutulur.               
Bellekte saklanan bu olay verileri, Sınıf 1 veri okuma yönetimi ile sunucu tarafından okunabilir. Bu SINIF 1 verisi de “UNSOLICED” gönderme etkinleştirilmişse RTU tarafından otomatik olarak sunucuya iletilir.

Sınıf 1 olay verileri, aşağıdaki tabloda belirtilen DNP3 nesne türleri ile gönderilir.

| DNP3 Nesne Tipi     | Register Data Tipi |
| ----------- | ----------- |
| Binary Input Change With Time : Data Object 02 - Variation 02 | Binary |
| 32 Bit Analog Input Change With Time : Data Object 32 - Variation 03 | Long |
| 16 Bit Analog Input Change With Time : Data Object 32 - Variation 04 | Word |
| Short Float Analog Input Change With Time : Data Object 32 - Variation 07 | Analog |

## MQTT Kullanımı

<center>

![mqtt_table](/img/mqtt_table.png)

</center>

### Genel Bilgi

<center>

![mqtt_01](/img/mqtt_01.png)
***<center>Şekil 1: MQTT Haberleşmesi</center>***

</center>

MQTT(Message Queuing Telemetry Transport) protokolü, internette yaygın olarak kullanılan makinalar arası (M2M) mesaj tabanlı bir protokoldür. Lightweight oluşu ve düşük kaynak tüketmesiyle Internet of Things(IoT) ekosisteminde benimsenmiştir. Hemen hemen tüm IoT bulut platformları akıllı nesnelerden veri gönderip almak için MQTT protokolünü desteklemektedir.

###	Blok Tanımlamaları

#### Mqtt Config Bloğu

MQTT ayarlarını yapılandırmak için öncelikle projenize Mqtt Config bloğunu eklemeniz gerekir.

<center>

![mqtt_02](/img/mqtt_02.png)
***<center>Şekil 2: MQTT Config Bloğu</center>***

</center>

Pin Açıklamaları;

•	Soc: TCP Soket bloğu bağlantısı için kullanılır. Mqtt Config bloğu TCP Soket bloğu olmadan kullanılamaz. 

•	Trg: Periyodik data transferi yapılmak istenildiğinde, bu girişten mqtt config bloğuna tetik verilmelidir. Eğer bu giriş boş bırakılırsa veriler belirlenen diğer koşullara göre iletilir.

•	Mqtt0: Bağlantı durumunu gösteren çıkış. Bu çıkıştan gelen bilgiler şu şekildedir;

           
          - 0: TCP Bağlantısı Yok        
          - 1: TCP Bağlanıyor         
          - 2: MQTT Bağlanıyor           
          - 3: MQTT Bağlandı       

•	Sta: Haberleşme durumunu gösteren çıkış. Bu çıkıştan gelen bilgiler şu anlama gelir;
	      - 0: MQTT Bağlantı Paketi Gönderildi      
	      - 1: MQTT Bekleme Durumu           
          - 2: MQTT Abone Olma durumu            
	      - 3: MQTT Mesaj Yayınlama Durumu    

•	Pub: Publish zaman aşımını gösteren çıkış.

Mqtt Config Bloğu Özel Ayarları;

<center>

![mqtt_03](/img/mqtt_03.png)
***<center>Şekil 3: Mqtt Config Blok Özel Ayarları</center>***

</center>

Tanımlamalar;

•	Client Id: Broker bağlantısı için cihaza el ile ID verilen alan.

•	User Name: Broker bağlantısı için cihaza kullanıcı adı verilen alan.

•	Password: Broker bağlantısı için cihaza girilen şifre alanı.

•	Keep Alive: Broker ve Publisher arasındaki bağlantı kesilirse, yeniden bağlantı kurmadan önceki bekleme süresi.

•	Clean Session: Seçilirse, cihaz ve broker arasında iletişim varsa mesajlar yayınlanır, seçilmzese iletişim kesintilerinde kaydedilen bilgiler gönderilmez.

•	Use Device Serial as User Name: Seçilirse, cihazın seri numarası cihaz username’i olarak kullanılır.

•	SSL Enabled: Bağlantıyı SSL ile yapmak için işaretlenir. (Sadece DM Serisinde aktif.)

#### TCP Soket Bloğu Bağlantısı

TCP Soket bloğunun çıkışı Mqtt Config bloğunun Soc girişine bağlanır.

<center>

![mqtt_04](/img/mqtt_04.png)
***<center>Şekil 4: TCP Soket Bloğu ve Mqtt Bloğu Bağlantısı</center>***

</center>

TCP Soket bloğunun özel ayarları mqtt bağlantısı için şu şekilde yapılmalıdır;

•	Soket tipi olarak TCP Client seçilmeli,

•	Server IP kısmına bağlanılacak mqtt server IP’si girilmeli,

•	Server Port Kısmına mqtt server port bilgisi girilmeli,

•	Medya tipi ise kullanılan mikrodev cihazın özelliğine göre Ethernet, GSM veya WI-FI seçilebilir.

<center>

![mqtt_05](/img/mqtt_05.png)
***<center>Şekil 5: TCP Bloğu Özel Ayarları</center>***

</center>

### MQTT Tablosu

Mqtt ile ilgili tim ayarlamaların yapıldığı tabloya Projeler/MQTT Table sekmesinden ulaşılır.

<center>

![mqtt_06](/img/mqtt_06.png)
***<center>Şekil 6: Mqtt Tablosu</center>***

</center>

#### Topic to Publish

Bu tabloda verileri brokera publish etmek için Publish topic girilir. Tabloda Add Topic butonuna basılarak çıkan ekrandan topic name girilir. Qos, Retain, Last Will, Payload ayarları, değişimde gönder ve periyodik gönder seçeneklerini aktif-pasif yapabileceğiniz blok tanımlamaları da bu sayfadan yapılır.

<center>

![mqtt_07](/img/mqtt_07.png)
***<center>Şekil 7: Topic Tanımlama</center>***

</center>

Tanımlamalar;

•	Topic Name: Mesajları göndereceğiniz konu başlıklarının belirlendiği alan.

•	QoS: Quality of Service (Hizmet Kalitesi), bir mesajın göndereni ile mesajın alıcısı arasındaki anlaşmayı ifade eder. QoS seviyeleri aşağıdaki gibidir;

    o	QoS 0: Minimum veri aktarımı sağlanır. Bu seviyede her mesaj bir subscriber’a iletilir ve mesajın ulaştığına dair onay alınmaz.

    o	QoS 1: Broker mesajı iletmeyi dener ve subscriber’dan onay yanıtı bekler, belirtilen bir zaman dilimi içinde onay alınmazsa mesaj tekrar gönderilir.

    o	QoS 2: Broker, subscriber’ın mesajı aldığından ve yalnızca bir kez aldığından emin olmak için iki onay alır.

•	Retain: Bu seçenek işaretlenirse, eğer broker ile subscriber arasındaki bağlantı koparsa son değer hafızaya kaydedilir.

•	Is Last Will Topic: Son istek konusu. Bir topic oluşturulur ve bu seçenek işaretlersenirse, cihazın broker ile bağlantısı koptuğunda bu topic altındaki mesajı subscriber’lara iletilir.

•	Payload Type: Mesaj içeriğinin hangi formatta gönderileceği belirlenir. Subscriber bu bilgi ile gelen mesajları yorumlar. Gönderilen mesajlara zaman etiketi eklenmek isteniyorsa “MJson v1” seçilebilir.

•	On Change Send Enable Block: Oluşturulan topic’in değişimde gönderme özelliğini aktif-pasif hale getirebilmek için diagramda eklenen blok seçimi.

•	Periodic Send Enable Block: Oluşturulan topic’in periyodik gönderme özelliğini aktif-pasif hale getirebilmek için diagramda eklenen blok seçimi.

#### Publish Blocks for Topic

Bu tabloda ilgili Topic için Publish edilecek bloklar seçilir. Publish to topic tablosunda topic tıklandıktan sonra, Add Entry butonu aktif olur bu butona basılarak projede publish edilmek istenen blok seçilir. Gelen ekrandan Verinin nasıl iletileceği de seçilebilir.

<center>

![mqtt_08](/img/mqtt_08.png)
***<center>Şekil 8: Mesaj için Blok Ekleme</center>***

</center>

Tanımlamalar;

•	Select Block for Subscribe on Topic: Projenizdeki mesaj olarak göndermek istenilen bloğun seçildiği alan.

•	Send On Change: Değişimde gönderme seçim alanı

    o	On Level Change: Change Value’de belirtilen değer kadar değişim olduğunda gönder, eğer 0 yazılırsa her değişimde gönderilir.

    o	On Percent Change: Change Value’de belirtilen değer yüzdesi kadar değişim olduğunda gönder, örneğin %10.

•	Change Value: Değişim miktarı girme alanı.

•	Send Periodcally: İşaretlenirse mqtt config bloğunun trg girişine her tetik geldiğinde mesaj gönderilir.

•	Select Block for Quality Value: MJson v1 payload tipinde mesaj içeriğine dahil edilen Quality değerinin seçildiği blok.

•	Select Trigger Blok: Mesajı değişim veya periyodik dışında burada belirteceğimiz bloktan tetik vererek de gönderebiliriz.

<center>

![mqtt_09](/img/mqtt_09.png)
***<center>Şekil 9: Mesaj Formatları</center>***

</center>

Not: Mesajlarda kullanılan bloklar; bloğun altındaki blok numarası (B:3006) ile gönderilip alınabileceği gibi hat etiketleri (word_publish_ch) ile de mesajlara eklenebilir. Bunun seçimi blok özelliklerindeki Mqtt Format sekmesi altında yapılır.

•	View and Set seçilirse görünecek mesaj;

<center>

![mqtt_10](/img/mqtt_10.png)
***<center>Şekil 10: View And Set Seçili</center>***

</center>

•	No View seçilirse görünecek mesaj;

<center>

![mqtt_11](/img/mqtt_11.png)
***<center>Şekil 11: No View Seçili</center>***

</center>

#### Subscribe to Topic

Bu tabloda brokerdan cihaza veri gönderilmek için ilgili subscribe topic girilir.

<center>

![mqtt_12](/img/mqtt_12.png)
***<center>Şekil 12: Topic to Subscribe Ekranı</center>***

</center>

Tanımlamalar;

•	Subscribe Topic Name: Subscribe olunacak topic adı girilir.

•	QoS: Hizmet kalitesi seviyesi seçilir.

•	Parse Format: Mesajların hangi formatla parse edileceği seçilir.

#### Subscribed Block Values for Topic

Bu ekrandan subscribe topic için ilişkilendirilecek bloklar eklenir. Hat etiketlerini kullanmak için yine ilgili bloğun özel ayarlarından mqtt formatı view and set olacak şekilde seçilmelidir.

<center>

![mqtt_13](/img/mqtt_13.png)
***<center>Şekil 13: Subscribed Block Values for Topic Ekranı</center>***

</center>

### Özel Uygulamalar

#### Ubidots

Mikrodev PLC  ubidots mqtt ile kullanılmak istenildiğinde, yukarıda anlatılan ayarlara ilaveten şu adımlar izlenmelidir;

1. Mqtt Config bloğu özel ayarlarından, Client Id kısmına Ubidots ID girilmeli ve  Username kısmına Ubidots da oluşturulmuş cihazın Token Key  girilmelidir.

2. Publish Topic: /v1.6/devices/< Device Name > olarak girilir. İlişkilendirilecek bloklar için ubidots hesabında değişken tanımlamaya gerek yoktur. İlk Gönderilen data ile değişkenler Ubidots tarafında otomatik oluşturulur. Veri blok numarasıyla veya hat etiketiyle Ubidots serverinde okunur.

3. Subscribe Topic: /v1.6/devices/< Device Name >/< Value Name >  olarak girilir. Her subscribe edilecek veri için ayrı ayrı bağlık tanımlanması gerekir. Veriler Ubidots ortamında tanımlanmalıdır. Eğer Hat etiketi kullanılacaksa Ubidots da oluşturulan değişken hat etiketiyle aynı isimde olmalıdır, eğer hat etiketi kullanılmadan sadece blok numarası ile iletim yapılacaksa blok numarası ile aynı isimli değişken ubidots ortamında tanımlanmalıdır.

### Örnek Uygulama

#### Topic Publish 

Genel Konfigürasyon;

Proje oluşturulduktan sonra şekildeki gibi diagram tasarımı yapılır, word ve analog yazmaçların mqtt formatları view and set seçilir.

<center>

![mqtt_14](/img/mqtt_14.png)
***<center>Şekil 14: Örnek Proje Konfigürasyonu</center>***

</center>

Değişimde Gönderme;

Projects > MQTT Table >Topics to Publish > Add Topic sırasıyla takip edilir.

<center>

![mqtt_15](/img/mqtt_15.png)
***<center>Şekil 15: Topic Ekleme Ekranı</center>***

</center>

Topic ismi seçilip OnChange Send Enable Block için diagramda hazırladığımız High kapısını girilir ve add tıklanır.

Daha sonra bir alt tablodaki Publish Blocks for Topic kısmından Add Entry tıklanır.

<center>

![mqtt_16](/img/mqtt_16.png)
***<center>Şekil 16: Topic'e Blok Ekleme Ekranı</center>***

</center>

Select Block for Subscribe on Topic kısmına mesaj olarak yayınlamak istediğiniz diagramdaki blok seçilir.          
SendOn Change kısmında, On Level Change seçilir ve Change Value 0 olarak ayarlanır ki değer her değiştiğinde mesaj gönderebilsin. Add tıklanıp devam edilir.

Proje cihaza yüklenir ve online izleme açılır.        
MQTTBox gibi bir programla açılan topic’e subscribe olunur, Mikrodiagramda online izlemede mqtt config blok değerinin 3 olduğu görüldükten sonra yazmacın değeri değiştirildiğinde değerin publish edildiğini görülür.

<center>

![mqtt_17](/img/mqtt_17.png)
***<center>Şekil 17: Değişimde Gönderilen Mesajlar</center>***

</center>

Periyodik Gönderme;        
Değişimde gönderilen konfigürasyona ek olarak mqtt config bloğunun trg girişine real time pulse generator eklenir,

<center>

![mqtt_18](/img/mqtt_18.png)
***<center>Şekil 18: Periyodik Gönderme Eklenmiş Örnek Proje</center>***

</center>

5snde bir periyodik olarak mesaj yayınlamak için real time pulse generator 5sn ayarlanır ve oluşturulan topic aşağıdaki gibi değiştirilir. OnChange Enable Block= NULL ve Periodic Send Enable Block diagramdaki High kapısı set edilir, Select Block for Subscribe on Topic kısmında ise SendOn Change= None seçilip Send Periodically tiklenir. 

<center>

![mqtt_19](/img/mqtt_19.png)
***<center>Şekil 19: Periyodik Gönderme için Yapılan Değişiklikler</center>***

</center>

Proje tekrar cihaza yüklenir ve gelen mesajlar gözlenir.

<center>

![mqtt_20](/img/mqtt_20.png)
***<center>Şekil 20: Periyodik Gönderilen Mesajlar</center>***

</center>

#### Subscribe Topic

Genel Konfigürasyon;

Proje oluşturulduktan sonra şekildeki gibi diagram tasarımı yapılır, word ve analog yazmaçların ve röle çıkışının mqtt formatları view and set seçilir.

<center>

![mqtt_21](/img/mqtt_21.png)
***<center>Şekil 21: Subscribe Olunacak Bloklar Eklenmiş Örnek Proje Konfigürasyonu</center>***

</center>

Projects > MQTT Table >Topics to Subscribe > Add Topic sırasıyla takip edilir.

<center>

![mqtt_22](/img/mqtt_22.png)
***<center>Şekil 22: Subscribe Olunacak Topic Adı</center>***

</center>

Topic adı girilir ve Add tıklanır. Daha sonra bir alt tablodaki Publish Blocks for Topic kısmından add entry tıklanır.

<center>

![mqtt_23](/img/mqtt_23.png)
***<center>Şekil 23: Subscribe Olunan Blok Seçimi</center>***

</center>

Burada abone olunacak değerin hangi bloğa aktarılacağı seçilir.

<center>

![mqtt_24](/img/mqtt_24.png)
***<center>Şekil 24: Subscribe Olan Bloklar</center>***

</center>

Abone olacak bütün bloklar belirlendikten sonra proje cihaza yüklenir.

<center>

![mqtt_25](/img/mqtt_25.png)

</center>

Yukarıdaki format ile test2 topicine mesaj publish edildiğinde değişkenlerin son durumu aşağıdaki gibi olur;

<center>

![mqtt_26](/img/mqtt_26.png)
***<center>Şekil 25: Subscribe Olunan Değerler</center>***

</center>

## MOD-C Kullanımı

<center>

![modc_01](/img/modc_01.png)

</center>

### Seri Port Blok Tanımları

<center>

![modc_02](/img/modc_02.png)

</center>

Not: RS485 için; Seri Port No: 0 , RS232 için; Seri Port No: 1

Not: Bu kısımdaki değerleri varsayılan olarak bırakabiliriz.

### MOD-C Tablo Paneli 

#### Sayaç Ekleme

Sayaç ekleme, OBIS Kodu ekleme, programlama modu komutu ekleme işlemleri bu bölümde yapılır.

Not: Seri numarası 8 haneden az ise seri numarası 8 haneye tamamlanmalıdır. Bunun için sayaç seri öneki kısmına eksik hane sayısına kadar 0 yazmak gerekir.

Not: Port 1 : RS485 ,  Port 2 : RS232 , Protocol : Mode C

|	Meter	|	Makel	|	Köhler	|	EMH	|	
| ------ | ------ | ------ | ------ |
|	Starting Baudrate	|	300	|	300		|	19200	|
|	MODC Baudrate	|	9600	|	9600		|	19200	|
|	Data Bit	|	7	|	7		|	7	|
|	Parity Bit	|	Even Parity	|	Even Parity		|	Even Parity	|
|	Stop Bit	|	1	|	1		|	1	|
|	Readout Type	|	0	|	0	|	0	|

#### OBIS Kodu Ekleme

<center>

![modc_04](/img/modc_04.png)

</center>

<center>

![modc_05](/img/modc_05.png)

</center>

#### Programlama Modu Ekle

##### OBIS Kodlarının Servis Listesi Dışında Okunması

Öncelikle okumak istediğimiz sayaç numarasını ve üzerine okumak istediğimiz OBIS kodlarını giriyoruz.

- Servis listesi dışında OBIS kodlarını giriyoruz.

- Örneğin; 2.8.0 Obis kodu.

- Seçilen sayaca Programlama Modu Komutu ekleyin.

- Okumak istediğimiz kodu giriyoruz.

<center>

![modc_08](/img/modc_08.png)

</center>

Not: Köhler marka sayaç için örnek verilmiştir. Cihazınıza uygun kodları sayaç üreticinizden isteyebilirsiniz.

##### Yük Profili Okuma

- Sayacı seçin.

- Seçilen sayaca Programlama Modu Komutu Ekleyin.

- Komutları arka arkaya ekliyoruz.

- 
```
01 52 32 02 31 32 38 2e 31 30 2e 30 30 30 30 28 29 03 5a  // [ Read Load Profile Index Information ]
01 52 32 02 31 32 38 2e 35 31 2e 31 28 46 46 46 46 29 03 46 // [ Read values defined in load profile MODC OBIS Codes section ]
01 42 30 03 71  // [ Ends the load profile reading process ]

```
- OBIS Kodu Ekle kısmından yük profili değerlerini görmek istediğimiz verileri Seçilen Metreye ekliyoruz.

Yük Profili Kodu:

for Ael tf 19/20/21  ;

```
#P1#,2,0,8,0; ----> Load Profile Index Value (DECIMAL)
#P1#,2,20,8,-3; ----> +T value (FLOAT)
#P1#,2,28,8,-3; ----> -T value (FLOAT)
#P1#,2,36,8,-3; ----> +Ri value (FLOAT)
#P1#,2,44,8,-3; ----> +Rc value (FLOAT)
#P1#,2,52,8,-3; ----> -Ri value (FLOAT)
#P1#,2,60,8,-3; ----> -Rc value (FLOAT)
#P1#,2,8,10,0; ----> Load profile record date epoch (DATETIME)

```

for Makel c410, c500 ;

```
#P2#,Active ----> +T value ( FLOAT ) 
#P2#,Capacitive  ----> +Rc value  ( FLOAT )
#P2#,DateTime ----> Load profile record date epoch   (DATETIME)
#P2#,I1 ----> IrmsA value  ( FLOAT )
#P2#,I2 ----> IrmsB value ( FLOAT )
#P2#,I3 ----> IrmsC value ( FLOAT )
#P2#,Inductive  ----> +Ri value   ( FLOAT)
#P2#,V1 ----> VrmsA value ( FLOAT )
#P2#,V2 ----> VrmsB value ( FLOAT )
#P2#,V3 ----> VrmsC value ( FLOAT )

```

<center>

![modc_06](/img/modc_06.png)

</center>

<center>

![modc_07](/img/modc_07.png)

</center>


## Rest API Konfigürasyonu

### Rest API Servis Tanımlama

<center>

![rest_table_01](/img/rest_table_01.png)

</center>

İlk yapılması gereken Rest API Server ile ilgili bazı parametrelerin tanımlanmasıdır. RestTablePanel'de, Yeni Dinlenme Sunucusu İletişim Kutusunu açmak için Sunucu Ekle düğmesine tıklayın. İletişim kutusunda size aşağıdaki parametreler sorulacaktır:

#### Server URL     
API'ye hizmet veren sunucunun root URL'sidir.

#### Kimlik Doğrulama Yolu           
API, kimlik doğrulama gerektiriyorsa, kimlik doğrulama yolu için yolu burada ayarlayın. Burada root URL'yi kullanmayın, yalnızca ilgili yol girilmelidir (örn: /api/login).

#### Başlıklar          
Kimlik doğrulama işlemi sırasında herhangi bir özel başlık kullanmanız gerekirse, bunları virgülle ayrılmış bir anahtar/değer biçiminde girin (örn: Key1 : Value1, Key2 : Value2).

#### İstek Gövdesi                   
Kimlik doğrulama işlemi sırasında bir istek gövdesi kullanmanız gerekiyorsa, onu buraya ekleyin.

#### Beklenen Kimlik Doğrulama Simgesi Adı               
Kimlik doğrulamasından sonra, sunucu kimlik doğrulama için bir belirteç gönderirse, belirteç verileri için kullanılan adı buraya girin.

#### Sorgular İçin Belirteç Adı               
Belirteç verilerini aldıktan sonra, API çağrılarınızda farklı bir belirteç adı kullanmanız gerekebilir. Kullanılacak belirteç anahtarı adını buraya yazın.

<center>

![rest_table_02](/img/rest_table_02.png)

</center>

#### Yeni Rest İstek Nesnesi Ekle              
Bir Dinlenme Sunucusu ekledikten sonra, artık o sunucuya API istek tanımları eklemeye başlayabilirsiniz. Talebi ekleyeceğiniz Rest Server'a tıklayın ve Add Request butonuna tıklayın. İletişim kutusuna aşağıdaki parametreleri eklemeniz gerekir

#### Method          
İstek için kullanılacak HTTP yöntemi. POST, GET, PUT veya DELETE isteği olabilir.

#### Rota Yolu            
İsteğin rota yolu. "/" ile başlayın ve burada root URL'yi kullanmayın (örn: /api/GetTankLevel).

#### İstek Gövdesi           
API çağrısı sırasında bir istek gövdesi kullanmanız gerekirse, onu buraya ekleyin.

#### Nesne Filtresini Yanıtla           
API isteğini gönderdikten sonra, sunucu size JSON biçiminde bir yanıt gönderecektir. Bu JSON nesnesinden ilgili verileri alabilmek için bir filtre kullanmanız gerekir. Verileri farklı biçimlerde alabilmek için lütfen aşağıdaki örneğe bakın:

Sunucudan gelen örnek yanıt:      


```
  {
    "Message": null,
    "ResponseModel": {
        "AvailableTags": [
            {
                "CanTakeFuelOutside": false,
                "CurrentMachineHours": 20,
                "THPT": 85,
                "TagNumber": "TestTag000000001",
                "UnitType": "Hour",
                "VehicleTankCapacity": 300
            },
            {
                "CanTakeFuelOutside": false,
                "CurrentMachineHours": 102,
                "THPT": 85,
                "TagNumber": "TestTag000000002",
                "UnitType": "Hour",
                "VehicleTankCapacity": 300
            }
        ],
        "ServerDateTime": "14.02.2021 22:01:44"
    },
    "Type": "S"
}
```

##### Örnek Filtreler                 

• Kullanılabilir Etiketler dizisinin ilk elemanının Araç Tank Kapasitesini alıp 6000 numaralı bloğa yazabilmek için :

```
ResponseModel.AvailableTags[0].VehicleTankCapacity ,6000;
```

• Mevcut Etiketler dizisindeki tüm Mevcut Makine Saatlerini alın ve bunları 6000 numaralı bir tablo bloğuna yazın:

```
ResponseModel.AvailableTags[].CurrentMachineHours , 6000;
```

• Dizide Etiket Numarası "TestTag000000002" olan nesneyi bulun ve bu nesnenin Araç Tank Kapasitesi değerini alın ve bu değeri 6000 blok numaralı bloğa yazın:

```
ResponseModel.AvailableTags[].TagNumber(TestTag000000002).VehicleTankCapacity, 6000;
```

##### Durum Değeri için Blok Seçin                
API isteğinin dönüş kodu bu bloğa yazılacaktır.

##### Tetik Bloğu Seçin          
Bu blok etkinleştirildiğinde, API isteği sunucuya gönderilir.


## Telediagram Lisansı

### Lisans Dosyasını Yükleme

Geçerli bir lisans almak için lütfen "donanım kimliğinizi" sales@mikrodev.com adresine gönderin.

Donanım kimliğinizi öğrenmek için; Telediagram uygulamasını indirip kurduktan sonra uygulamanın "bin" dizinine gidin ve "license_user.exe" dosyasını çalıştırın.

"license_user.exe"yi çalıştırmadan önce, donanım kimliğinizi değiştirebileceğinden, bilgisayarınıza "usb stick" veya "harici sabit disk" bağlı olmadığından emin olun.

<center>

![telediagram-editor-07](/img/telediagram-editor-07.png)

</center>

Geçerli bir "license.dat" dosyası aldıktan sonra, bu dosyayı Telediagram uygulamasının "bin" dizinine kopyalayın.

Düzenleyiciyi yeniden başlattığınızda lisans otomatik olarak yüklenecektir.
