---
title: Telediagram Editor
---

## IEC 104'ü kullanma

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

![telediagram-editor-01](/img/telediagram-editor-01.png)

</center>

Ser: TCP Soket Girişi. IEC104 protokolünün çalışacağı TCP server soket bloğu bu girişten bağlanır.

Trg: Trigger Girişi Periyodik gönderim için tetik girişi. Yükselen bir kenar olarak çalışır.

Asd: Asdu Adres Girişi ASDU adresi giriş olarak kullanılır.

Q1: Link Status SCADA ve RTU arasındaki IEC104 bağlantısı kurulu ise bu çıkış değeri 1, değilse 0'dır.

Q2: SCADA yazma durumu, SCADA istekleri seçip yürütürse bu çıkışta bir darbe üretilir.

### Özel ayarlar

* AsduAddress: IEC104 slave istasyon ASDU adresi tanımlıdır

<center>

![telediagram-editor-02](/img/telediagram-editor-02.png)

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

![telediagram-editor-03](/img/telediagram-editor-03.png)

</center>

### Protokollü Değişken Eşleme

#### Değişken Adres Tablosu

* RTU mantık projesinde protokol bloğu eklenerek ilgili protokol etkinleştirilir. RTU mantık Projesindeki değişkenler, protokol arasındaki ilişki değişken adres tablosunda sağlanır.

<center>

![telediagram-editor-04](/img/telediagram-editor-04.png)

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

## Telgraf Lisansı

### Lisans Dosyasını Yükleme

Geçerli bir lisans almak için lütfen "donanım kimliğinizi" sales@mikrodev.com adresine gönderin.

Donanım kimliğinizi öğrenmek için; Telediagram uygulamasını indirip kurduktan sonra uygulamanın "bin" dizinine gidin ve "license_user.exe" dosyasını çalıştırın.

"license_user.exe"yi çalıştırmadan önce, donanım kimliğinizi değiştirebileceğinden, bilgisayarınıza "usb stick" veya "harici sabit disk" bağlı olmadığından emin olun.

<center>

![telediagram-editor-07](/img/telediagram-editor-07.png)

</center>

Geçerli bir "license.dat" dosyası aldıktan sonra, bu dosyayı Telediagram uygulamasının "bin" dizinine kopyalayın.

Düzenleyiciyi yeniden başlattığınızda lisans otomatik olarak yüklenecektir.
