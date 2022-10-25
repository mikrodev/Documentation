---
title: "MODBUS Uygulama Notu"
---

## MODBUS HABERLEŞMESİ

Modbus yaklaşık 247 cihaz arasında iletişim sağlayabilmektedir. Çalışma mantığı, bir ana cihaz ile aynı ağ üzerinde ana cihaza bağlı bir veya daha fazla cihaz arasındaki veri alışverişini temel alır. Genellikle bir denetleyici bilgisayarı uzak terminallerle birbirine bağlamak için kullanılır. Veri aktarımı birler ve sıfırlar şeklinde yani bitler halinde sağlanır. Birçok versiyonu olmasına rağmen en çok kullanılan versiyonları Modbus RTU ve Modbus TCP/IP'dir.

Bu kılavuz, Modbus TCP/IP ve Modbus RTU iletişimlerinin Mikrodev ürünlerinde nasıl uygulandığını gösterir.

Cihazımız Mikrodev - PLC ürünü ise Mikrodiagram programı, cihazımız Mikrodev RTU ürünü ise Telediagram programını kullanılır. Bu nedenle programlarımız ürünlerimize göre özelleştirilmiştir. Telediagram ve MiKrodiagram programlarında kullanılan bloklar ve ayarları aynıdır. Cihazlarımızda fonksiyon bloklarının altında Blok adresi (B:) ve Modbus adresi (M:) olmak üzere 2 ayrı adresleme kullanılmaktadır. B: ürün ailemize ait fonksiyonlar için, M: Modbus haberleşmesi için kullanılır.

### MODBUS TCP/IP Haberleşmesi 

Daha önce de belirttiğimiz gibi MODBUS Haberleşmesinde 1 Master/Master ve 246'ya kadar Slave/Slave cihaz olabilir. Master veya Slave cihazımızın TCP/IP protokolü ile iletişim kurması için TCP Soket bloğu kullanılır. Kapı tipleri penceresinden veya proje alanına sağ tıklayarak fonksiyon blokları ekleyebiliriz.

<center>

![modbus_01](/img/modbus_01.png)
***<center>Şekil 1 Etkinleştirmek için TCP Soket Blok ve Yüksek Kapı</center>***

</center>

Şekil 1'de görebileceğiniz gibi, IP ve Port bilgilerini TCP Soket bloğunun özel ayarlarından ve ayrıca bir register kullanarak dışarıdan ayarlayabiliriz. 

Bağlantı durumunu gözlemlemek için, Con çıkışına bir bayrak veya yazmaç bloğu bağlanır. Con çıkışına bağlanan blok değerinin 0 olması bağlantı yok, 1 olması ise bağlantı var anlamına gelmektedir. 

TCP Soket bloğunun port ve ip bilgilerini blok özel ayarlarından belirlemek dışarıdan TCP Soket bloğunun girişlerine yazmaç bloğu bağlamaktan daha kolaydır. TCP Soket blok ayarlarını Şekil 2'de görebilirsiniz.

<center>

![modbus_02](/img/modbus_02.png)
***<center>Şekil 2 TCP Socket Blok Özel Ayarları</center>***

</center>

<center>

![modbus_03](/img/modbus_03.png)
***<center>Şekil 3 Media Tipi ve Diğer Ayarlar</center>***

</center>

Eğer TCP Soket Bloğu bir Master bloğa bağlanarak cihazımız Modbus Master olarak kullanılacaksa TCP Soket blok özel ayarlarından TCP Client seçeneği seçilir (Şekil 2) ve Slave cihazının Server Port ve Server IP'sini girilir.     
TCP Soket Bloğu bir Slave bloğa bağlanarak cihazımız Modbus Slave olarak kullanılacaksa TCP Soket blok özel ayarlarından TCP Server (Şekil 2)seçilir ve TCP Sunucu ayarları bölümü aktif olur. Burada slave cihazımızın TCP/IP portu yazılır. İstenirse TCP Sunucu IP bölümünde yer alan IP filtreleme kısmını kullanarak cihazımıza bağlanacak cihazları sınırlandırmak mümkündür.    
Medya tipi (Şekil 3) Ethernet, GSM veya WiFi arasından seçilir.

#### MODBUS TCP/IP Slave Ayarları

Modbus Slave cihaz ayarı için TCP Soket bloğunun özel ayarlarından TCP Sunucu seçilir ve Dinleme Port numarası girilir. MODBUS haberleşmesi için TCP Soket bloğunun #TSB0 çıkışına MODBUS TCP Slave bloğu bağlanır. (Şekil 4)

<center>

![modbus_04](/img/modbus_04.png)
***<center>Şekil 4 MODBUS TCP Slave Bloğu Ekleme</center>***

</center>

Cihazımızın slave ayarlarına ait blok bağlantıları Şekil 4'te gösterilmiştir. Slave ID tanımlaması Modbus TCP Slave bloğunun (Şekil 5) özel ayarlarından yapılır. Modbus Haberleşmede Slave tarafının veri trafiğini de gözlemleyebiliriz. Bunun için alınan paket sayısı, hatalı paket sayısı ve son paket durum bilgisini almak istiyorsak sırasıyla Rx, Err, Sta çıkışlarına bir bayrak veya yazmaç bloğu bağlanması gerekmektedir.

<center>

![modbus_05](/img/modbus_05.png)
***<center>Şekil 5 Modbus TCP/IP Slave Ayarları (Örn Slave Adres : 1)</center>***

</center>


#### MODBUS TCP/IP Master Ayarları

TCP bloğunun özel ayarlarından (MODBUS TCP/IP Haberleşme) ilgili ayarları yaptıktan sonra MODBUS TCP Master (MTM) bloğunu TCP Soket Bloğumuza ekliyoruz (Şekil 6).
Modbus TCP Master bloğunda ise talep zaman aşımı (request timeout) diğer ayarları görebilirsiniz.

<center>

![modbus_06](/img/modbus_06.png)
***<center>Şekil 6 Modbus TCP/IP Master Bağlantıları</center>***

</center>

Master cihazımızdan Slave cihazlara istek gönderebiliriz. Bu talepler, Slave cihazlarda MODBUS adresleri (M:) tarafından tanımlanan yazmaç/yazmaç bloklarının değerleri okunarak veya bu yazmaç bloklara değer yazılarak yapılabilir. Okuma/yazma bloklarının tetik ucuna yükselen kenar bir tetik gönderildiğinde, okuma/yazma komutu Slave cihazına gönderilir ve bir yanıt beklenir. MTM bloğumuza Şekil 7'deki gibi MODBUS Okuyucu veya Yazıcı blokları ekleyebiliriz. Bu bloklar Word, Float ve Long olarak seçilebilmektedir. 

Modbus Word Okuyucu/Yazıcı bloğu 16 bit pozitif tamsayı değerleri için kullanılır.       
Modbus Float Okuyucu/Yazıcı bloğu 32 bit ondalık değerler için kullanılır.      
Modbus Long Okuyucu/Yazıcı bloğu ise 32 bit tam sayılar için kullanılır.

<center>

![modbus_07](/img/modbus_07.png)
***<center>Şekil 7 Modbus Master Cihazının Diğer Slave Cihazlara Yazma/Okuma İsteği Gönderme Örneği, Haberleşme</center>***

</center>

Aynı veri tipindeki ardışık kayıtlardan değerleri ayrı bloklarda okuyup yazmak yerine tek fonksiyon bloğu ile tabloları okuyup yazabiliriz. Bunun için MODBUS Oku/Yaz Tablosu kullanılır. 

Belirli bir Slave cihazın bağlantı durumunu kontrol etmek istenir ise MODBUS Durum bloğu kullanılabilir. 

Negatif bir word değeri okunacağı zaman, MWR bloğu Long işlem bloğuna bağlanır ve işlem tipi “Word to Signed” seçilir ve negatif değerler okunur. MODBUS Okuyucu/Yazıcı blok özel ayarları Şekil 8 ve Şekil 9'da gösterilmektedir. 

<center>

![modbus_08](/img/modbus_08.png)
***<center>Şekil 8 Modbus Word Okuyucu</center>***

</center>

<center>

![modbus_09](/img/modbus_09.png)
***<center>Şekil 9 Modbus Word Yazıcı</center>***

</center>

Şekil 8 ve 9'daki ortak değerler, okunacak/yazılacak Slave cihazının ID numarası, Kayıt Adresi ve Bayt Sırasıdır. İşlev Kodu ise kayıt türü ve değerine göre değişir. Yukardaki şekillerde diğer ayarları da görebilirsiniz.

Fonksiyon Kodu değerleri ilgili Slave üzerindeki yazmaç tipine göre 4 tiptir. Okuma değerleri aşağıdaki gibi sınıflandırılır.

İlgili Slave üzerinde yazma işlemi için Fonksiyon Kodu değerleri 3'e bölünmüştür. Yazma değerlerinin sınıflandırılması aşağıdaki gibidir.

<center>

![modbus_10](/img/modbus_10.png)
***<center>Şekil 10 Fonksiyon Kodları Açıklama</center>***

</center>

Bayt Sırası üreticiye göre değişir. Doğru sıralama cihazın kullanım kılavuzunda bulunabilir.

Bağlantı yokken değerlerin kalıcı olması Modbus Okuyucu blok özel ayarlarında yer alan kalıcılık seçeneği işaretlenerek veya
bağlantı yokken 0 değerinin yazılması Modbus Okuyucu blok özel ayarlarında yer alan Write 0 when failed seçeneği işaretlenerek sağlanır. 

Log-kayıt belleğine ekleme veya web arayüzünden izleme ayarları blok özel ayarlarından yapılır.

### MODBUS RTU 	Haberleşmesi

MODBUS TCP/IP haberleşmesinde TCP protokolü kullanır. MODBUS RTU haberleşmesinde ise RS232 ve RS485 seri port haberleşmesi kullanılmaktadır. RS232 ve RS485 cihazlarının kablo bağlantıları için ürün kullanım kılavuzuna bakınız.

Seri port haberleşme ayarları Şekil 11'de gösterilmiştir.

<center>

![modbus_11](/img/modbus_11.png)
***<center>Şekil 11 Seri Port Bloğu ve Ayarları</center>***

</center>

Seri Port No seçimi, cihazımızın hangi portuna bağlı olduğunu belirlemek içindir. RS485 için Seri Port No:0 RS232 için 1'dir. Port tipi burada belirtilen port numarasına göre belirlenmelidir.

Baudrate seri haberleşme değeri listeden seçilir veya listede olmayan değerler için Diğer seçeneği kullanılmalıdır.

Uygun olan Databits, Parity ve Stopbit değerleri girilir. Bu şekilde Seri port ayarları tamamlanmış olur.

#### MODBUS RTU Slave Ayarları

MODBUS RTU destekli Slave cihazımızın fiziksel kablo bağlantıları ve port ayarları bir önceki bölümde (MODBUS RTU Haberleşmesi) Seri Port Bloğunda gösterilmiştir. Bu bölümde cihazımın MODBUS RTU Slave ayarlarını göstereceğiz. 

Mikrodiagram/Telediagram programını açın, Kapı Tipleri kısmından MODBUS RTU Slave bloğunu seçin ve Seri Port Bloğuna bağlayın.

<center>

![modbus_12](/img/modbus_12.png)
***<center>Şekil 12 MODBUS RTU Slave Bağlantıları ve Ayarları</center>***

</center>

MRS; MODBUS RTU Slave bloğu tıklandığında Modbus Slave Adres tanımlama bölümü ekrana gelir. Resim 9'da Modbus Slave Adresi 1 olarak tanımlanmıştır. 

MODBUS RTU Slave bloğunun Rx, Err ve Sta blok çıkışlarına bir bayrak veya yazmaç bloğu bağlayarak alınan data paket sayısını, hatalı paket sayısını ve son paket datanın durumunu görebiliriz.

#### MODBUS RTU MASTER Ayarları

Cihazdan veri almak veya göndermek için MODBUS RTU Master cihazı kullanılır. Bunun için MODBUS RTU Master olarak tanımlanacak olan cihazımızın ayarları bu bölümde anlatılmaktadır. MODBUS RTU Master programlamasında MRM bloğunun bağlantısı aşağıdaki gibidir.

<center>

![modbus_13](/img/modbus_13.png)
***<center>Şekil 13 MODBUS RTU Master Bağlantıları ve Ayarları</center>***

</center>

Veri bekleme süresi olan Request Timeout süresi Modbus RTU Master blok ayarlarından ayarlanır. 

Fonksiyon bloğunun Tx, Err ve Sta çıkışlarına bir yazmaç veya bayrak bloğu bağlanarak gönderilen veri paketi sayısı, hatalı paket sayısı ve son paket durumu görülebilir. 

MODBUS RTU protokolü ile Slave cihazlardan veri okumak veya yazmak için MRM çıkışına uygun bir MODBUS Word, Long, Float Okuyucu/Yazıcı bloğu bağlanır. 

Ayrı bloklardan aynı veri tipindeki ardışık kayıtlardan değerleri okuyup yazmak yerine tek fonksiyon bloğu kullanarak tablo okuma-yazma işlemi yapılabilir. Bunun için MODBUS Oku/Yaz Tablosunun kullanılır.

Belirli bir Slave cihaz bağlantı durumunu kontrol etmek isteniyor ise MODBUS Durum bloğu kullanılır.


<center>

![modbus_14](/img/modbus_14.png)
***<center>Şekil 14: Modbus Okuyucu/Yazıcı Bloğunun Modbus RTU Master Bloğuna Bağlanması</center>***

</center>

MODBUS Okuyucu/Yazıcı blokları MODBUS TCP ve RTU haberleşmesinde ortak olarak kullanılır.

##### Örnek Proje: MODBUS RTU Protokolü ile Analizör Okuma

MODBUS RTU protokolü ile analizörün okunabilmesi için analizörün cihazımızdaki bağlantı türleri olan RS232 ve RS485 bağlantılarını desteklemesi gerekmektedir. Destekleyen cihazlardan Seri Haberleşme sağlayabilmek için gerekli değerleri bilmemiz gerekmektedir. Bilgileri, bağlanacak cihazın kullanım kılavuzunda bulabilirsiniz.

Örneğin, RS485 iletişimli bir analizör okuyacağız. Bunun için Port tipi RS485 ve Port No:0 seçilir. (RS232 kullanılır ise Port tipi RS232 ve Port No:1 seçilmelidir.) Baudrate Selection bölümünden analizörün baudrate değerini giriyoruz. Bu değer listede yoksa Diğer seçeneğinden değer girebiliriz. Bağlantı için Databits, Parity ve Stopbit değerlerini girip Tamam'ı tıkladığımızda Seri port blok ayarlarımız tamamlanmış oluyor.

Projeye Modbus RTU Master Okuyucu/Yazıcı blokları eklenir. Modbus Okuyucu/Yazıcı blokları, analizörden okuma veya yazma koruması olmayan değerlere erişmek için kullanılır. Modbus RTU Id, Yazmaç Adresi, Fonksiyon Kodu ve Byte Sırası ayarları bu bloğa girilmelidir. Bu ayarlar, Analizör kullanım kılavuzundan veya varsa üzerindeki arayüzden öğrenilebilir. 

Okunacak/yazılacak değerlerin güncellenmesi Modbus Okuyucu/Yazıcı Bloklarının  Ttk girişine yükselen kenar sinyali geldiğinde gerçekleşir. 

<center>

![analyzer](/img/analyzer.png)
***<center>Şekil 15 MODBUS RTU Protokolü ile Analizörü Oku</center>***

</center>

### Diğer Fonksiyon Blokları ve Özellikleri

MODBUS protokolü ile kullanılan ve belirtilmeyen fonksiyon blokları bu bölümde açıklanmıştır.

#### MODBUS Oku/Yaz Tablosu Bloğu

MODBUS TCP veya RTU Master haberleşmesinde kullanılır. Tekrarlamayı önlemek için sıralı adreslerle aynı tipteki kayıtlardan veri değerleri okunurken bu fonksiyon bloğunun kullanılır. Blok bağlantıları ve ayarları aşağıda gösterildiği gibidir.

<center>

![modbus_15](/img/modbus_15.png)
***<center>Şekil 16 MODBUS Oku/Yaz Tablosu Bloğu Bağlantısı ve Ayarları</center>***

</center>

Tablo ayarları, Modbus Okuyucu/Yazıcı blok ayarlarıyla aynıdır. Modbus Okuyucu/Yazıcı Tablosunun avantajı sıralı adres yazmaçlarına tek bir tuş ile değer okuyabilmemiz veya yazabilmemizdir.

#### MODBUS Durum Bloğu

MODBUS Master bloklarına bağlanır. Slave cihazların durum bilgilerini almak istediğimizde kullanılır. Blok bağlantıları ve ayarları aşağıda gösterildiği gibidir.

<center>

![modbus_16](/img/modbus_16.png)
***<center>Şekil 17 MODBUS Durum Fonksiyon Bloğu Bağlantısı ve Ayarları</center>***

</center>

Modbus Durum bloğunun Mas girişi, Master bloğun girişidir.

Modbus Durum bloğunun Rtu girişi, durum bilgisi almak istediğimiz Slave ID girişidir. Bu kısma yazmaç bloğu eklenerek veya blok özel ayarları kısmından tanımlanabilir.

#### MODBUS Gateway Bloğu

MODBUS Gateway cihazları temel olarak MODBUS TCP ağındaki ana birimler için MODBUS RTU ağındaki bağımlı birimlere erişmek için bir ağ geçidi oluşturmak için kullanılır. MODBUS TCP üzerinden gelen istek paketleri MODBUS RTU paketlerine dönüştürülerek RTU ağına gönderilir. Ayrıca RTU ağından yanıt alır ve MODBUS TCP ağına gönderir. MODBUS TCP tarafında, istek ve yanıtlardaki İŞLEM sayısı aynı olmalıdır ve bunu sağlamak da GATEWAY cihazının görevidir. Mikrodev Kontrol cihazları destekledikleri protokoller arasında GATEWAY olarak eş zamanlı çalışacak şekilde programlanabilmektedir. Bunu sağlayan bloklardan biri de MODBUS GATEWAY bloğudur.

MODBUS GATEWAY bloğu 2 farklı şekilde kullanılır.

1-	MODBUS TCP Master cihazından MODBUS RTU Slave cihazına    
2-	MODBUS RTU Master cihazından MODBUS TCP Slave cihazına

GATEWAY olarak çalışmaya başlamak için blok kullanımında Master ve Slave blokları yeterlidir.  Slave blok tarafında Modbus ID'den farklı bir ID talep edilmesi durumunda ilgili talep Master blok üzerinden okunacaktır. Modbus RTU Slave ID ve Modbus TCP/IP Slave ID'nin aynı olmadığını unutmayın.

<center>

![modbus_17](/img/modbus_17.png)
***<center>Şekil 18 MODBUS Gateway Blok Bağlantısı ve Ayarları</center>***

</center>

