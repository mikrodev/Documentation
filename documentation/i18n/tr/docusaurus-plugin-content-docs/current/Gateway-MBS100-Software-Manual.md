---
title: MBS100 Yazılım Kılavuzu
---

## MODBUS Ağ Geçidi Konfigürasyon Yazılımı

[MBS100 Software Manual](https://www.mikrodev.com/en/docs/ModbusGateway/software_manual/MIKRODEV_SM_MBS100_CG_EN.pdf)

### Genel Bilgi

Mikrodev Gateway cihazları için gerekli tüm ayarların yapılabilmesi için Assistant yazılımı kullanılmaktadır. Yazılım sayesinde cihaz ayarları online ve/veya offline olarak yapılabilmektedir. Cihaza yüklenen ayarlar kolaylıkla indirilebilir ve önceden kaydedilmiş ayarlar program tarafından kolaylıkla cihaza yüklenebilir. Program ile cihaz arasındaki bağlantı USB, Ethernet, GSM, Wi-Fi gibi çeşitli şekillerde kurulabilir. Ethernet destekli cihazlar için; Ayrıca ağda arama yapma ve bağlantı bilgileriyle ayrıntıları listeleme özelliği de vardır.

### Cihaz Bağlantısı

#### USB Seri Bağlantı

Cihaz konfigürasyonunda PC ile Mikrodev cihazı arasında iletişim kurma yöntemlerinden biri de USB seri bağlantıdır. PC ile cihaz arasında USB bağlantısı yapabilmek için Windows 7/8 / 8.1 işletim sistemli PC'ler için USB sürücüsünü yüklemeniz gerekmektedir. Windows 10 işletim sistemleri için USB sürücüsünü yüklemeye gerek yoktur. USB üzerinden seri bağlantı için Assistant yazılımının Connect and Configure Your Device bölümünde “Connect over USB” kutusu seçilidir. USB Port Selection bölümünde port seçip “Connect”e tıklamanız gerekmektedir.
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

Yerel ağda aktif olan cihazın ip adresi ve port numarası manuel olarak girilirken "Manuel" seçeneği kullanılır. Assistant yazılımından Connect and Configure Device bölümünde "Connect over TCP" onay kutusu işaretlendikten sonra "Manual" kutusu işaretlenir. "Aygıt IP" bölümüne bağlanılacak cihazın IP adresi girilir, "Port" bölümüne port numarası girilir ve "Bağlan" tıklanır. Asistan yazılımı Mikrodev cihazına belirtilen ip adresi ve port numarası ile bağlanır.

<center>

![gateway-mdc100-software-03](/img/gateway-mdc100-software-03.png)

</center>

### Çevrimdışı Ayarlar

Çevrimdışı mod, cihaza bağlanmadan parametre ayarları yapıldığında ve kaydedildiğinde kullanılır. Çevrimdışı parametre ayarlarını yapmak istediğinizde Asistan ana ekranında "Çevrimdışı konfigürasyon için buraya tıklayın" seçeneğine tıklayın. Gelen ekranda cihaz seçilir ve ardından "Bu cihazı seç" tıklanır. Seçilen cihazın offline parametre ayarları yapılabilir. Ayrıca aynı sayfadaki "Yapılandırma dosyasından yükle" seçeneği kullanılarak daha önce kaydedilmiş yapılandırma değerleri de programa yüklenebilir.

<center>

![gateway-mdc100-software-04](/img/gateway-mdc100-software-04.png)

</center>

## MODBUS Ağ Geçidi Ayarları

### Durum Ekranı

Bağlı olan Mikrodev cihazı ile ilgili bilgileri gösteren durum bilgisi ekranıdır. Bu ekranda cihazın üretim bilgileri, Ip ayarları ve seri bağlantı ayarları (RS-485, RS-232) yer almaktadır. Cihazın web arayüzüne de bu ekrandan ulaşabilirsiniz. Web arayüzüne erişmek için "Cihazın web arayüzüne erişmek için buraya tıklayın" seçeneğini seçin.

<center>

![gateway-mbs100-software-01](/img/gateway-mbs100-software-01.png)

</center>

### Temel Ayarlar

Temel ayarlar bölümünde haberleşme tiplerine göre parametre set değerleri girilir. Ethernet bağlantısı için yerel ip, ağ geçidi ipi, alt ağ girin ve GSM bağlantısı için APN, kullanıcı adı, kullanıcı şifresini girin. SSID (Modem kullanıcı adı)
ve şifre wifi bağlantısı istendiğinde girilir. Ek olarak; Mikrodev cihazına erişim kontrolü için şifre tanımlaması bu sayfada yapılmaktadır. Ayrıca cihaz bağlantı takip süresi, otomatik sıfırlama süresi ve konfigürasyon portu girilebilir. "Bağlantıdan sonra kimliği gönder" onay kutusunu işaretleyerek bağlantıdan sonra kimlik gönderebilirsiniz.

<center>

![gateway-mbs100-software-02](/img/gateway-mbs100-software-02.png)

</center>

### MODBUS Ayarları

Cihazın Modbus ayarları Modbus ayarları bölümünde yapılır. Modbus TCP üzerinden bağlantı yapılması durumunda bağlantı tipi sunucu veya istemci seçimi yapılır ve port ayarları tanımlanır. MBS100 serisi istemci istemci modunda çalıştırılacağı zaman,
ilgili kutu seri (RTU) bağlantı tiplerine (RS-232, RS-485) göre işaretlenir ve Ip ayarı, port numarası, baud hızı, databit değeri, parite değeri ve stop biti ayarlanır.

<center>

![gateway-mbs100-software-03](/img/gateway-mbs100-software-03.png)

</center>

### Ayarları Cihaza Yükleme

Konfigürasyon ayarlarını cihaza göndermek için Asistan yazılımında "Aygıt Yönetimi"ne tıklayın. Ardından "Yapılandırmayı Gönder" seçeneğine tıklayın.

<center>

![gateway-mbs100-software-04](/img/gateway-mbs100-software-04.png)

</center>

Yapılandırma tamamlandıktan sonra, ayarların kaydedilmesi için cihazın yeniden başlatılması gerekir.

<center>

![gateway-mbs100-software-05](/img/gateway-mbs100-software-05.png)

</center>

Asistan programının ana ekranında "Aygıt Yönetimi" altında "Cihazı Yeniden Başlat" seçeneğine tıklayarak cihazı yeniden başlatın. Aygıt yeniden başlatıldığında, seri bağlantı noktasına yeniden bağlanmak için USB kablosunu çıkarmanız ve yeniden takmanız gerekebilir.

<center>

![gateway-mbs100-software-06](/img/gateway-mbs100-software-06.png)

</center>

Cihaz yeniden başlatıldıktan sonra, TCP bağlantısı üzerinden cihaza yeniden bağlanmak için yaklaşık 20 saniye bekledikten sonra cihaz ile PC arasındaki TCP bağlantısı otomatik olarak kurulacaktır.

<center>

![gateway-mbs100-software-07](/img/gateway-mbs100-software-07.png)

</center>

### Terminal

Terminal penceresi, MMS100 serisi dönüştürücüler için komutların girildiği bölümdür. Bu bölümde cihazdan gelen bilgiler ekrana gelir. "Özel Komut Girişi" bölümüne sorgulanacak komutu yazın (örn. AT + VERSION =?) ve sorguyu cihaza göndermek için "Gönder"e tıklayın. Sorgu yanıtı ekranda belirir. Ekranda görüntülenen sorguları temizlemek için "Konsol Penceresi" bölümünde "Geçmişi Temizle" seçeneğine tıklayın.

<center>

![gateway-mbs100-software-08](/img/gateway-mbs100-software-08.png)

</center>

