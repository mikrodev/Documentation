---
title: MMS100 Software Manual
---

## M-BUS Ağ Geçidi Yapılandırma Yazılımı

[MMS100 Software Manual](https://www.mikrodev.com/en/docs/MbusModbusGateway/software_manual/MIKRODEV_SM_MMS100_CG_EN.pdf)

### Genel bilgi

Mikrodev Gateway cihazları için gerekli tüm ayarların yapılabilmesi için Assistant yazılımı kullanılmaktadır. Yazılım sayesinde cihaz ayarları online ve/veya offline olarak yapılabilmektedir. Cihaza yüklenen ayarlar kolaylıkla indirilebilir ve önceden kaydedilmiş ayarlar program tarafından kolaylıkla cihaza yüklenebilir. Program ile cihaz arasındaki bağlantı USB, Ethernet, GSM, Wi-Fi gibi çeşitli şekillerde kurulabilir. Ethernet destekli cihazlar için; Ayrıca ağda arama yapma ve bağlantı bilgileriyle ayrıntıları listeleme özelliği de vardır.

### Cihaz Bağlantısı

#### USB Seri Bağlantı

Cihaz konfigürasyonunda PC ile Mikrodev cihazı arasında iletişim kurma yöntemlerinden biri de USB seri bağlantıdır. USB bağlantısını gerçekleştirmek için
PC ve cihaz arasında, Windows 7/8 / 8.1 işletim sistemlerine sahip PC'ler için USB sürücüsünü yüklemeniz gerekir. Windows 10 işletim sistemleri için USB sürücüsünü yüklemeye gerek yoktur. USB üzerinden seri bağlantı için Assistant yazılımının Connect and Configure Your Device bölümünde “Connect over USB” kutusu seçilidir. USB Port Selection bölümünde port seçip “Connect”e tıklamanız gerekmektedir.
Bundan sonra USB bağlantısı kurulacaktır.

<center>

![gateway-mdc100-software-01](/img/gateway-mdc100-software-01.png)

</center>

#### TCP Bağlantısı – Cihaz Bulma Modu

Yerel ağda aktif olan Mikrodev cihazlarının IP adreslerini tespit etmek ve bağlamak için "Network Discovery" seçeneği kullanılır. Assistant yazılımının Connect and Configure to Device (Cihaza Bağlan ve Yapılandır) bölümünde "Connect via TCP" kutusu işaretlendikten sonra "Network Discovery" kutusu vurgulanacaktır. "Ağı Mikrodev Cihazları için Tara" seçeneğine tıkladıktan sonra, ağda aktif olan tüm Mikrodev cihazlarının seri numarası, IP adresi, dinleme portu ve yazılım sürümleri ekranda listelenir. Ekrandaki cihaz ismine çift tıklayarak listedeki cihazı bağlayabilirsiniz.

<center>

![gateway-mdc100-software-02](/img/gateway-mdc100-software-02.png)

</center>

#### TCP Bağlantısı – Manuel

Yerel ağda aktif olan cihazın ip adresi ve port numarası manuel olarak girilirken "Manuel" seçeneği kullanılır. Assistant yazılımından Connect and Configure Device bölümünde "Connect over TCP" onay kutusu işaretlendikten sonra "Manual" kutusu işaretlenir. Bağlanacak cihazın IP adresi girilir.
"Aygıt IP" bölümünde, "Port" bölümüne port numarası girilir ve "Bağlan" tıklanır. Asistan yazılımı Mikrodev cihazına belirtilen ip adresi ve port numarası ile bağlanır.

<center>

![gateway-mdc100-software-03](/img/gateway-mdc100-software-03.png)

</center>

### Çevrimdışı Ayarlar

Çevrimdışı mod, cihaza bağlanmadan parametre ayarları yapıldığında ve kaydedildiğinde kullanılır. Asistan ana ekranında "Çevrimdışı yapılandırma için burayı tıklayın" seçeneğine tıklayın
çevrimdışı parametre ayarlarını yapmak istediğinizde. Gelen ekranda cihaz seçilir ve ardından "Bu cihazı seç" tıklanır. Seçilen cihazın offline parametre ayarları yapılabilir. Ayrıca aynı sayfadaki "Yapılandırma dosyasından yükle" seçeneği kullanılarak daha önce kaydedilmiş yapılandırma değerleri de programa yüklenebilir.

<center>

![gateway-mdc100-software-04](/img/gateway-mdc100-software-04.png)

</center>

## M-BUS Ağ Geçidi Ayarları

### Durum Ekranı

Bağlı olan Mikrodev cihazı ile ilgili bilgileri gösteren durum bilgisi ekranıdır. Bu ekranda cihazın üretim bilgileri, Ip ayarları ve seri bağlantı ayarları (RS-485, RS-232) yer almaktadır. Cihazın web arayüzüne de bu ekrandan ulaşabilirsiniz. Web arayüzüne erişmek için "Cihazın web arayüzüne erişmek için buraya tıklayın" seçeneğini seçin.

<center>

![gateway-mms100-software-01](/img/gateway-mms100-software-01.png)

</center>

### Temel Ayarlar

Temel ayarlar bölümünde haberleşme tiplerine göre parametre set değerleri girilir. Ethernet bağlantısı için yerel ip, ağ geçidi ipi, alt ağ girin ve GSM bağlantısı için APN, kullanıcı adı, kullanıcı şifresini girin. Wifi bağlantısı istendiğinde SSID (Modem kullanıcı adı) ve şifre girilir. Ek olarak; Mikrodev cihazına erişim kontrolü için şifre tanımlaması bu sayfada yapılmaktadır. Ayrıca cihaz bağlantı takip süresi, otomatik sıfırlama süresi ve konfigürasyon portu girilebilir. "Bağlantıdan sonra kimliği gönder" onay kutusunu işaretleyerek bağlantıdan sonra kimlik gönderebilirsiniz.

<center>

![gateway-mms100-software-02](/img/gateway-mms100-software-02.png)

</center>

### MMS100 Modbus Ayarları

MMS100'ün Modbus ayarları bölümünde Mikrodev cihazının Modbus haberleşme ayarları yapılır. Modbus TCP üzerinden bağlantı yapılması durumunda bağlantı tipi, sunucu veya istemci seçimi ve port ayarları yapılır. MMS100 serisi Gateway'in seri(RTU) bağlantı tipi seçimine (RS-232, RS-485) bağlı olarak ilgili kutu işaretlenir ve Ip ayarı, port numarası, baud hızı, databit değeri,
parite değeri ve stop biti ayarlanır.

<center>

![gateway-mms100-software-03](/img/gateway-mms100-software-03.png)

</center>

### Ayarları Cihaza Yükleme

Konfigürasyon ayarlarını cihaza göndermek için Asistan yazılımında "Aygıt Yönetimi"ne tıklayın. Ardından "Yapılandırmayı Gönder" seçeneğine tıklayın.

<center>

![gateway-mms100-software-04](/img/gateway-mms100-software-04.png)

</center>

Yapılandırma tamamlandıktan sonra, ayarların kaydedilmesi için cihazın yeniden başlatılması gerekir.

<center>

![gateway-mms100-software-05](/img/gateway-mms100-software-05.png)

</center>

Asistan programının ana ekranında "Aygıt Yönetimi" altında "Cihazı Yeniden Başlat" seçeneğine tıklayarak cihazı yeniden başlatın. Aygıt yeniden başlatıldığında, seri bağlantı noktasına yeniden bağlanmak için USB kablosunu çıkarmanız ve yeniden takmanız gerekebilir. 

<center>

![gateway-mms100-software-06](/img/gateway-mms100-software-06.png)

</center>

Cihaz yeniden başlatıldıktan sonra, TCP bağlantısı üzerinden cihaza yeniden bağlanmak için yaklaşık 20 saniye bekledikten sonra cihaz ile PC arasındaki TCP bağlantısı otomatik olarak kurulacaktır.

<center>

![gateway-mms100-software-07](/img/gateway-mms100-software-07.png)

</center>

## M-BUS Ağ Geçidi Parametre Ayarları

### MMS100 Seri İletişim Ayarları

MMS100 serisi ağ geçitlerinin seri (RTU) bağlantı ayarları bu bölümde tanımlanmıştır. Cihaz veya cihazların (su sayaçları, doğalgaz sayaçları, kalorimetreler...) baud hızı, databit değeri, parite değeri ve stop bit değeri.

<center>

![gateway-mms100-software-08](/img/gateway-mms100-software-08.png)

</center>

### MMS100 Cihaz Tanımları

Mikrodev MMS100 serisi ağ geçitlerinin sorgu gönderme periyodu "Anket Frekansı" bölümünde tanımlanmıştır. Değer saniye cinsinden girilir. MMS100 serisi ağ geçidine bağlanacak cihaz sayısı "Cihaz Sayısı" bölümünde belirlenir. "Fiziksel Cihaz Adresi" bölümünde "Cihaz Sayısı" bölümünde belirtilen slot sayısı 1'den başlar ve sonuna eklenir. Bu bölümde sahadaki cihazların slave adresleri tanımlanır. "Fiziksel Cihaz Adresi", cihazın bulunduğu bölümdür.
Modbus adresleri cihaz seçimlerine göre belirlenir.

<center>

![gateway-mms100-software-09](/img/gateway-mms100-software-09.png)

</center>

### MMS100 Adres Tablosu

MMS100 Adres Tablosu bölümü, MMS100 serisi ağ geçitlerinin MBUS bilgilerinin hangi Modbus adresine yazıldığı bölümdür. Bu bölümde cihaz numaraları, fiziksel adresler (slave adresleri), veri tipleri, adres adları ve modbus adresleri görüntülenir.

<center>

![gateway-mms100-software-10](/img/gateway-mms100-software-10.png)

</center>

### Terminal

Terminal, MMS100 serisi ağ geçitleri için komut satırlarının girildiği bölümdür. Bu bölümde cihazdan gelen bilgiler ekranda listelenir. "Özel Komut Girişi" bölümüne sorgulanacak komutu yazın (örn. AT + VERSION =?) ve sorguyu cihaza göndermek için "Gönder"e tıklayın. Sorgu yanıtı ekranda belirir. Ekrandaki sorguları temizlemek için "Konsol Penceresi" bölümünde "Geçmişi Temizle"ye tıklayın.

<center>

![gateway-mms100-software-11](/img/gateway-mms100-software-11.png)

</center>
