---
title: SC100 Yazılım Kılavuzu
---

## SERİ GATEWAY KONFİGÜRASYON YAZILIMI

[SC100 Software Manual](https://www.mikrodev.com/wp-content/uploads/2023/01/MIKRODEV_SC100_SM.pdf)

### Genel Bilgi

Mikrodev Gateway cihazları için gerekli tüm ayarların yapılabilmesi için Assistant yazılımı kullanılmaktadır. Yazılım sayesinde cihaz ayarları online ve/veya offline olarak yapılabilmektedirCihaza yüklenen ayarlar kolayca indirilebilir ve önceden kaydedilmiş ayarlar program tarafından cihaza kolayca yüklenebilir.
Program ile cihaz arasındaki bağlantı USB, Ethernet, GSM, Wi-Fi gibi çeşitli şekillerde kurulabilir. Ethernet destekli cihazlar için; ayrıca ağda arama yapma ve bağlantı bilgileriyle ayrıntıları listeleme özelliği de vardır.

### Cihaz Bağlantısı

#### USB Seri Bağlantısı

PC ile Mikrodev cihaz arasında iletişimi kurma yöntemlerden biri de USB bağlantıdır. Bilgisayar ile Mikrodev cihazı arasında USB bağlantısını gerçekleştirmek için, Windows 7/8/8.1 işletim sistemli PC lerde USB sürücüsünün yüklenmesi gerekmektedir. Windows 10 işletim sistemi için USB sürücüsünün yüklenmesine gerek yoktur. USB ile seri bağlantı için Assistant programı ana ekranındaki Cihaza Bağlan ve Konfigüre Et bölümündeki “USB üzerinden bağlan” kutucuğu seçilir. USB Port Seçin bölümünden bağlantı noktası seçilir ve “Bağlan” tıklanır. USB bağlantısı gerçekleşmiştir. (Şekil 1)

<center>

![sc100_01](/img/sc100_01.png)

</center>

#### TCP Bağlantısı – Cihaz Bulma Modu

Yerel ağ içerisinde aktif halde çalışan Mikrodev cihazlarının IP adreslerini saptamak ve bağlantı kurabilmek için “Ağ Algılama” seçeneği kullanılır. Bunun için Assistant programı ana ekranından Cihaza Bağlan ve Konfigüre Et bölümünden “TCP Üzerinden Bağlan” kutucuğu işaretlendikten sonra “Ağ Algılama” kutucuğu işaretlenir. Ardından “Ağı Mikrodev Cihazları için Tarayın” tıklandıktan sonra ağ içerisindeki aktif durumda çalışan tüm Mikrodev cihazların seri numarası, IP adresi, dinleme portu ve yazılım versiyonları ekrana dökülür. (Şekil 2) Ekrana gelen listede bağlanılmak istenen cihazın üzerine çift tıklandığı zaman ilgili cihazla bağlantı gerçekleşmiş olur.

<center>

![sc100_02](/img/sc100_02.png)

</center>

#### TCP Bağlantısı – Doğrudan Bağlantı

Yerel ağ içerisinde aktif halde çalışan cihazın IP adresi ve port numaralarını manuel olarak yazılıp bağlanılmak istenildiğinde “El ile” seçeneği kullanılır. Bunun için Assistant programı ana ekranından Cihaza Bağlan ve Konfigüre Et bölümünden “TCP Üzerinden Bağlan” kutucuğu işaretlendikten sonra “El ile” kutucuğu işaretlenir. Bağlanılacak cihazın IP adresi “Cihaz IP si” bölümüne, port numarası ise “Port” bölümüne girilir ve “Bağlan” a tıklanır. (Şekil 3) IP adresi ve port numarası girilen Mikrodev cihazına bağlanılmış olur.

<center>

![sc100_03](/img/sc100_03.png)

</center>

### Çevrimdışı Ayarlar

Mikrodev cihazına bağlanmadan parametre ayarları yapılmak ve kaydedilmek istenildiğinde çevrimdışı bağlantı kullanılır. Çevrimdışı parametre ayarları yapılmak istendiğinde Assistant ana ekranında “Çevrimdışı konfigürasyon için buraya tıklayın” seçeneği tıklanır. Çıkan ekranda cihaz seçimi yapılır ve ardından “Bu cihazı seç” tıklanır. (Şekil 4) Seçili cihazın çevrimdışı parametre ayarları yapılabilir. Ek olarak aynı sayfada “Konfigürasyon dosyasından yükle” seçeneği ile daha öncesinde kaydedilmiş konfigürasyon değerleri de programa aktarılabilir.

<center>

![sc100_04](/img/sc100_04.png)

</center>

## SERİ GATEWAY Ayarları

### Durum Sayfası

Mikrodev cihazına bağlantı gerçekleştikten sonra ekrana cihazla alakalı bilgilerin bulunduğu genel bir bilgilendirme ekranıdır. Bu ekranda cihazın üretim bilgileri, IP ayarları ve seri bağlantı ayarları (RS-485, RS-232) bulunmaktadır. (Şekil 5) Ayrıca bu ekrandan cihazın web arayüzüne de erişme şansı bulunmaktadır. Web arayüzüne erişmek için “Cihazın web arayüzüne erişmek için buraya tıklayın” seçeneği tıklanır. 

<center>

![sc100_05](/img/sc100_05.png)

</center>

### Temel Ayarlar

Temel ayarlar bölümünde haberleşme tiplerine göre parametre set değerleri girilmektedir. Ethernet bağlantısı için yerel IP, ağ geçidi IP, alt ağ girilirken GSM bağlantısı için APN, kullanıcı adı, kullanıcı şifresi girilir. Wifi bağlantısı yapılmak istenildiğinde ise SSID (Modem kullanıcı adı) ve şifre girilir. Ek olarak Mikrodev cihazına erişimi engelleme adına şifre tanımlaması bu sayfada gerçekleştirilir. Ayrıca cihaz bağlantı takip süreleri, oto reset süreleri ve konfigürasyon portu da girilebilir. İstenildiği takdirde “Bağlanıldıktan sonra ID Gönder” kutucuğu işaretlenerek bağlantı sonrası ID gönderme işlemi gerçekleştirilebilir. (Şekil 6)

<center>

![sc100_06](/img/sc100_06.png)

</center>

### Seri Gateway Ayarları

Cihazın RS232 - Ethernet ve RS485 - Ethernet bağlantılarının 2 ayrı yolu vardır. Route 1'de RS232 - Ethernet ayarları yapılır ve Route 2'de RS485 - Ethernet bağlantı ayarları yapılır.

TCP soket ayarları tarafında TCP soket sunucusu seçilir, port tanımlanır. Tanımlanan portlar RS232 ve RS485 için aynı olmamalıdır. IP filtre bölümünde, cihaza bağlamak istediğiniz TCP istemci IP'sini tanımlayabilirsiniz. Cihaza sadece IP filtre bölümünden tanımlanan IP adresi bağlanabilir. Eğer filtrelemek istemiyorsanız bu bölüm şekildeki gibi 0.0.0.0 olmalıdır (Şekil 7). Arabellek ayarları buradan yapılır. Arabellek boyutu, gönderilecek paket boyutunu ve arabellek zaman aşımı, gelen veriler belirtilen arabellek boyutuna ulaşmazsa, gönderme için bekleme süresini tanımlamak için kullanılır.

Seri Ayarları bölümünde RS232 ve RS485 için baud hızı, parite, stop bit ve databit ayarları yapılır. Bu ayarların Mikrodev cihazına bağlanacak seri cihaza uygun olarak yapılması gerekmektedir.	


<center>

![sc100_07](/img/sc100_07.png)

</center>


### Ayarları Cihaza Yükleme

Yapılan konfigürasyon ayarlarını cihaza göndermek için Assistant programı ekranındaki “Cihaz Yönetimi” e tıklanır. Ardından “Konfigürasyonu Gönder” seçeneği tıklanır. (Şekil 8)

<center>

![sc100_08](/img/sc100_08.png)

</center>

Konfigürasyon gönderme işlemi tamamlandıktan sonra ayarlar kaydolması adına cihaz yeniden başlatılmalıdır. (Şekil 9)

<center>

![sc100_09](/img/sc100_09.png)

</center>

Assistant programı ana ekranındaki “Cihaz Yönetimi” altındaki “Cihazı Yeniden Başlat” seçeneği tıklanarak cihazı yeniden başlatma işlemi gerçekleştirilir. Cihaz yeniden başlatıldığı sürede seri bağlantı üzerinden cihazla yeniden bağlantı kurabilmek için USB kablosunun çıkarılıp yeniden takılması gerekmektedir. (Şekil 10)

<center>

![sc100_10](/img/sc100_10.png)

</center>

Cihaz yeniden başlatıldığı sürede TCP bağlantısı üzerinden cihazla yeniden bağlantı kurabilmek için yaklaşık 20 saniye bekledikten sonra cihaz ile PC arasındaki TCP bağlantısı otomatik olarak kurulacaktır. (Şekil 11)

<center>

![sc100_11](/img/sc100_11.png)

</center>

### Terminal

Terminal sayfası Mikrodev aygıtları için AT komutlarının kullanılmasını sağlar. Yalnızca USB ile bağlantılı olarak kullanılabilir. (Şekil 12)
AT komutları için https://wiki.mikrodev.com/wiki/AT_Commands sayfayı ziyaret edin

<center>

![sc100_12](/img/sc100_12.png)

</center>