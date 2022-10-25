---
title: "DNP3 Slave Uygulama Notu"
---

## DNP3 Slave

### Genel Bilgi

DNP3 protokolü, dağıtılmış bir iletişim protokolüdür.   

Birincil avantajları: 

•Zaman etiketli değişken desteği

•Zaman etiketleri ile bağlanıldığında iletişimin olmadığı zamanlarda meydana gelen olayları yeniden gönderebilme

•SCADA'nın sorgulamaya gerek kalmadan değişiklikleri otomatik olarak gönderme yeteneği

•Birden çok değişkeni tek tek değil, sınıf olarak sorgulama yeteneği

•Zaman senkronizasyonu

### DNP3 Slave Driver

Mikrodev RTU cihazları DNP3 SLAVE modunu destekler ve TCP IP ve/veya SerialPort üzerinden DNP3 destekli sistemlere hizmet verir. Aşağıdaki hizmetler desteklenir:

1-	Sınıf nesne sorgusu ile toplu nesne okuma

2-	Zaman senkronizasyonu

3-	Anlık ölçüm verilerinde yüzde ve seviye olarak olay kontrolü 

4-	Olay verilerini otomatik gönder

5-	Veri noktalarını periyodik olarak gönder

### DNP3 Slave Blok Tanımları

#### Bağlantılar

<center>

![dnp3_01](/img/dnp3_01.png)

</center>

Ser: TCP Soket Bloğu Girişi

DNP3 protokolünün çalışacağı TCP server soket bloğu bu girişten bağlanır.

Trg: Tetik Girişi

Periyodik olarak gönderme işlemi için tetik girişi. Yükselen kenar olarak çalışır. 

Asd: Asdu Adresi Girişi

ASDU adres girişi olarak kullanılır.

<center>

![dnp3_02](/img/dnp3_02.png)

</center>

#### Blok Açıklamaları

DNP3 Slave bloğu eklenerek, RTU'da DNP3 etkinleştirilir. DNP3 Slave bloğunun Ser girişine TCP soket bloğu veya Seri port bloğu eklenir. 

Birden fazla sunucuya hizmet vermek için her sunucu için bir DNP3 bloğu eklenmelidir. 

DNP3 ASDU adresi dışarıdan ayarlanacaksa ASD girişi kullanılır. 

Periyodik gönderim seçili olan DNP3 nesne değerlerini DNP3 Slave bloğunun Trg girişine bağlanan tetikleyicinin her yükselen kenarında, periyodik COT ile sunucuya gönderir. Periyodik gönderim seçili olmayan uygulamalar için bu tetik girişi boş bırakılabilir. 

<center>

![dnp3_03](/img/dnp3_03.png)

</center>

## DNP3 Değişken Tablosu Tanımları 

### Değişken Tablosu

RTU Telediagram projesine, DNP3 Slave Blok eklenmesi ile DNP3 protokolünde DNP3 haberleşmesi aktif hale gelir. RTU Telediagram projesindeki değişkenler ile DNP3 ilişkisi değişken adres tablosunda sağlanır.

<center>

![dnp3_04](/img/dnp3_04.png)

</center>

### Hat Etiketi Tanımı

Mikrodiyagramda tanımlanan tüm bloklar için hat etiketi tanımlanabilir. Değişken tablosundaki protokol adresleri ile ilişkilendirmek için hat etiketi tanımlanmalıdır.

<center>

![dnp3_05](/img/dnp3_05.png)

</center>


### Hat Etiketi İlişkilendirmesi

Protokol adreslerinin hat etiketleri ile ilişkilendirilmesi, adres tablosuna uygun değerler girildikten sonra “Ekle” butonuna basılarak gerçekleştirilir.

<center>

![dnp3_06](/img/dnp3_06.png)

</center>

Değişken Adı:

Bu değişkeni tanımlayan özel bir isim verilir.

Başlangıç Adresi:

SCADA üzerinde bu değişken için ayrılan adres buraya yazılır. Desimal değer olarak yazılır.

Hat Etiketi:

Mikrodiagramdan ilişkilendirilecek blok hat etiketi seçilir.

Nokta Sayısı:

Otomatik olarak hesaplanır. (Tablolarda anlamlı.)

Protokol Tipi:

Kullanılan protokolün tipi seçilir. Modbus, DNP3, IEC101, IEC104 arasından seçim yapılır. Nesne Türü, seçilen protokol türüne göre değişecektir.

Nesne Tipi:

DNP3 nesne türü bilgisi seçilir. Ayrıntılı bilgi için protokol türü bilgilerine bakın.

Nesne Sınıfı:

Değişkenin ait olduğu sınıf bilgisi seçilir.

Tetikleyicide Gönder:

DNP3 Slave bloğunun Trg girişine bağlanılan tetik bloğu ile bu değişkenin SCADA'ya periyodik gönderim olarak gönderilip gönderilmeyeceği seçimi yapılır.

Gönderim Methodu:

Tanımlanan değişkenin değeri değiştiğinde yapılacak işlem seçilir.

●	Hiçbir Değişimde:  Spinner gönderimi tetiklemez. 

●	Seviye Değişiminde: “Değişm Değeri” bölümünde tanımlanan miktar kadar değer değiştirildiğinde gönderim tetiklenir.

●	Yüzdesel Değişiminde: "Değişim Değeri" bölümünde tanımlanan bir yüzde kadar değişim değişikliği olduğunda tetiklenir.

Değişim Değeri:

“Gönderim Methodu” ile yüzde veya seviye değişim değerini ayarlar.

### DNP3 Nesne Tipleri

#### Okuma Yönünde DNP3 Nesne Tipleri

| DNP3 Object Type     | Register Data Type |
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

NOT : Sınıf 0, Sınıf 1 ve Sınıf 2 verilerini oluşturmak için Değişken Adres tablosundan DNP_OBJTYPE_CLASSOBJ türünde bir değişken eklenmelidir. Bu değişkenin adres, hat etiketi gibi diğer ayarları rastgele seçilebilir.   

<center>

![dnp3_07](/img/dnp3_07.png)

</center>

#### Kontrol Yönünde DNP3 Nesne Tipleri

Yazma değişkeni, okuma türüne göre eşlenen her blok için otomatik olarak oluşturulur. Tanımlı okuma nesnelerine yazma olarak erişilebilen değişken türleri aşağıdaki gibidir:

| DNP3 Object Type     | Register Data Type |
| ----------- | ----------- |
| Control Relay Output Block : Data Object 12 - Variation 01 | Binary, Word, Analog, Long |
| 32 Bit Analog Output Block : Data Object 41 - Variation 01| Long |
| 16 Bit Analog Output Block : Data Object 41 - Variation 02 | Binary, Word |
| Short Float Analog Output Block : Data Object 41 - Variation 03 | Analog |


### DNP3 Olay Mekanizması

#### DNP3 Nesneleri için Olay Tanımı

Değişken adres tablosunda, DNP3 nesneleri için değişiklik olduğunda gönder seçimi mevcuttur. Bu menüde tanımlanan değişkenin değeri değiştiğinde yapılacak işlem seçilir.

●	Hiçbir Değişimde:  Spinner gönderimi tetiklemez. 

●	Seviye Değişiminde: “Değişm Değeri” bölümünde tanımlanan miktar kadar değer değiştirildiğinde gönderim tetiklenir.

●	Yüzdesel Değişiminde: "Değişim Değeri" bölümünde tanımlanan bir yüzde kadar değişim değişikliği olduğunda tetiklenir.

Değişim yüzde veya seviye değeri “Değişim Değeri” kısmından, değişim türünün yüzdesel mi yoksa seviyesel mi olacağı “Gönderme Yöntemi” ile ayarlanır.

#### DNP3 Olay Durumlarının Anlık İletimi

RTU cihazı, olay olarak algılanan gönderme ve değişiklik olarak tanımlanan durumları etiketler ve olaya bir zaman etiketi atar. Etiketli bir olay olması durumunda, sunucuya bağlantı varsa ve “SOLICED” gönderen cihazda sunucu aktif ise, ilgili nesne derhal “SOLICED” olarak iletilir.

Sunucu ile bağlantı mevcutsa ve “UNSOLICED” gönderme aktifi ile tespit edilen olaylar aşağıdaki tabloda belirtilen DNP3 nesne tipleri ile gönderilir.

| DNP3 Object Type     | Register Data Type |
| ----------- | ----------- |
| Binary Input Change Without Time : Data Object 02 - Variation 01 | Binary |
| 32 Bit Analog Input Change Without Time : Data Object 32 - Variation 01 | Long |
| 16 Bit Analog Input Change Without Time : Data Object 32 - Variation 02 | Word |
| Short Float Analog Input Change Without Time : Data Object 32 - Variation 05 | Analog |

#### DNP3 Olay Durumlarının Zaman Etiketli Gönderimi

Olay Kontrollerinin, sunucu ile bağlantısı olsun veya olmasın pasif olarak "UNSOLICED" göndermeye devam eder. Bu şartlar altında bir olay olması durumunda olay bilgisi zaman etiketi ile olay hafızasına kaydedilir ve bu veriler cihazda Sınıf 1 verisi olarak tutulur.
Bellekte saklanan bu olay verileri, Sınıf 1 veri okuma yönetimi ile sunucu tarafından okunabilir. 

Bu Sınıf 1 verisi de "UNSOLICED" gönderim etkinleştirilmişse RTU tarafından sunucuya otomatik olarak iletilir.

Sınıf 1 olay verileri, aşağıdaki tabloda belirtilen DNP3 nesne türleri ile gönderilir.

| DNP3 Object Type     | Register Data Type |
| ----------- | ----------- |
| Binary Input Change With Time : Data Object 02 - Variation 02 | Binary |
| 32 Bit Analog Input Change With Time : Data Object 32 - Variation 03 | Long |
| 16 Bit Analog Input Change With Time : Data Object 32 - Variation 04 | Word |
| Short Float Analog Input Change With Time : Data Object 32 - Variation 07 | Analog |














