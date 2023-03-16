---
title: MDC100 Yazılım Kılavuzu
---

## MODC Ağ Geçidi Yapılandırma Yazılımı

[MDC100 Software Manual](https://www.mikrodev.com/wp-content/uploads/2023/01/MIKRODEV_MDC100_SM.pdf)

### Genel bilgi

Mikrodev Gateway cihazları için gerekli tüm ayarların yapılabilmesi için Assistant yazılımı kullanılmaktadır. Yazılım sayesinde cihaz ayarları online ve/veya offline olarak yapılabilmektedir. Cihaza yüklenen ayarlar kolaylıkla indirilebilir ve önceden kaydedilmiş ayarlar program tarafından kolaylıkla cihaza yüklenebilir. Program ile cihaz arasındaki bağlantı USB, Ethernet, GSM, Wi-Fi gibi çeşitli şekillerde kurulabilir. Ethernet destekli cihazlar için; Ayrıca ağda arama yapma ve bağlantı bilgileriyle ayrıntıları listeleme özelliği de vardır.

### Cihaz Bağlantısı

#### USB Seri Bağlantı

Cihaz konfigürasyonunda PC ile Mikrodev cihazı arasında iletişim kurma yöntemlerinden biri de USB seri bağlantıdır. PC ile cihaz arasında USB bağlantısı yapabilmek için Windows 7/8 / 8.1 işletim sistemli PC'ler için USB sürücüsünü yüklemeniz gerekmektedir. Windows 10 işletim sistemleri için USB sürücüsünü yüklemeye gerek yoktur. USB üzerinden seri bağlantı için Assistant yazılımının Connect and Configure Your Device bölümünde “Connect over USB” kutusu seçilidir. USB Port Selection bölümünde port seçilerek “Connect”e tıklanmalıdır.
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

## MODC Ağ Geçidi Ayarları

### Durum Ekranı

Bağlı olan Mikrodev cihazı ile ilgili bilgileri gösteren durum bilgisi ekranıdır. Bu ekranda cihazın üretim bilgileri, Ip ayarları ve seri bağlantı ayarları (RS-485, RS-232) yer almaktadır. Cihazın web arayüzüne de bu ekrandan ulaşabilirsiniz. Web arayüzüne erişmek için "Cihazın web arayüzüne erişmek için buraya tıklayın" seçeneğini seçin.

<center>

![gateway-mdc100-software-05](/img/gateway-mdc100-software-05.png)

</center>

### Temel Ayarlar

Temel ayarlar bölümünde haberleşme tiplerine göre parametre set değerleri girilir. Ethernet bağlantısı için yerel ip, ağ geçidi ipi, alt ağ girin ve GSM bağlantısı için APN, kullanıcı adı, kullanıcı şifresini girin. Wifi bağlantısı istendiğinde SSID (Modem kullanıcı adı) ve şifre girilir. Ek olarak; Mikrodev cihazına erişim kontrolü için şifre tanımlaması bu sayfada yapılmaktadır. Ayrıca cihaz bağlantı takip süresi, otomatik sıfırlama süresi ve konfigürasyon portu girilebilir. "Bağlantıdan sonra kimliği gönder" onay kutusunu işaretleyerek bağlantıdan sonra kimlik gönderebilirsiniz.

<center>

![gateway-mdc100-software-06](/img/gateway-mdc100-software-06.png)

</center>

### MODC Genel Ayarları

ModC Genel Ayarlar bölümünde Mikrodev cihazının Modbus haberleşme ayarları yapılır. Modbus TCP üzerinden bağlantı yapılması durumunda bağlantı tipinin sunucu veya istemci seçimi yapılır ve port ayarları tanımlanır. Ayrıca Modbus Slave ID ayarları tanımlanır.

<center>

![gateway-mdc100-software-07](/img/gateway-mdc100-software-07.png)

</center>

### Ayarları Cihaza Yükleme

Konfigürasyon ayarlarını cihaza göndermek için Asistan yazılımında "Aygıt Yönetimi"ne tıklayın. Ardından "Yapılandırmayı Gönder" seçeneğine tıklayın.

<center>

![gateway-mdc100-software-08](/img/gateway-mdc100-software-08.png)

</center>

Yapılandırma tamamlandıktan sonra, ayarların kaydedilmesi için cihazın yeniden başlatılması gerekir.

<center>

![gateway-mdc100-software-09](/img/gateway-mdc100-software-09.png)

</center>

Asistan programının ana ekranında "Aygıt Yönetimi" altında "Cihazı Yeniden Başlat" seçeneğine tıklayarak cihazı yeniden başlatın. Aygıt yeniden başlatıldığında, seri bağlantı noktasına yeniden bağlanmak için USB kablosunu çıkarmanız ve yeniden takmanız gerekebilir.

<center>

![gateway-mdc100-software-10](/img/gateway-mdc100-software-10.png)

</center>

Cihaz yeniden başlatıldıktan sonra, TCP bağlantısı üzerinden cihaza yeniden bağlanmak için yaklaşık 20 saniye bekledikten sonra cihaz ile PC arasındaki TCP bağlantısı otomatik olarak kurulacaktır.

<center>

![gateway-mdc100-software-11](/img/gateway-mdc100-software-11.png)

</center>

## MODC Ağ Geçidi Parametre Ayarları

### Sayaç Ekleme

MODC Ağ Geçidi, adresleme modunu veya adreslemeyen boardcasting modunu destekler. Sayaçları adressiz okumak istiyorsanız Sayaç Seri No.'ya 0 vermelisiniz, yoksa adresleme için seri numarası vermelisiniz.

<center>

![gateway-mdc100-software-12](/img/gateway-mdc100-software-12.png)

</center>

<center>

![gateway-mdc100-software-13](/img/gateway-mdc100-software-13.png)

</center>

Tüm ayarlar yapıldıktan sonra "Sayaç Ekle"ye tıklayın. Birden fazla sayaç eklemek istiyorsanız "Sayaç Ekle ve Devam Et" seçeneğine tıklayın. Burada art arda yeni sayaçlar ekleyebilirsiniz. Tanımlı sayaçlar listesinde oluşturulan sayaç üzerinde değişiklik yapmak isterseniz değiştirilecek parametreye tıklayıp değişiklik yapabilirsiniz.

<center>

![gateway-mdc100-software-14](/img/gateway-mdc100-software-14.png)

</center>

### OBIS Kodları Ekleme

Sayaçlardan okunacak OBIS kodlarını belirlemek için öncelikle tanımlanan sayaçlar listesinden sayaç üzerine tıklayınız. Ardından Modc Ayarları sayfasında "OBIS Kodu Seçili Sayaca Ekle" seçeneğine tıklayın. Açılan sayfada "OBIS Adı" bölümüne okunacak OBIS değeri girilir. (Örn. 0.0.0, 1.8.0, ...) "Kod 1 Türü" bölümünde ilgili OBIS kodundan değerin değişken türü seçilir. Tanımlanacak bir OBIS kodundan birden fazla değer okunuyorsa "Kod 2 Tipi" bölümünde okunacak ikinci değerin değişken tipi seçilir.

<center>

![gateway-mdc100-software-15](/img/gateway-mdc100-software-15.png)

</center>

Tüm ayarlar yapıldıktan sonra "OBIS Ekle"ye tıklayınız. Birden fazla OBIS kodu tanımlanacak ise "OBIS Ekle ve Devam Et" seçeneğine tıklanır. Burada art arda yeni OBIS kodları ekleyebilirsiniz. MODC OBIS Kodları listesinde oluşturulan OBIS kodlarında değişiklik yapmak istiyorsanız, değiştirilecek parametreye tıklayıp değişiklik yapabilirsiniz.

### Özel Komutlarla OBIS Kodları Ekleme

Elektrik sayaçlarıyla ilgili belirli bilgileri okumak için özel talimatlar gerekebilir. Bu gibi durumlarda, elektrik sayacının üreticisinden belirli komut bilgileri talep edilmelidir. OBIS kodunu özel komutla eklemek için ModC Ayarları sayfasında "Programlama Modu Komutunu Seçili Sayaca Ekle" seçeneğine tıklayınız. Gelen ekranda "Komut" bölümüne özel komut girişi girilir.

<center>

![gateway-mdc100-software-16](/img/gateway-mdc100-software-16.png)

</center>

Tüm ayarlar yapıldıktan sonra "Komut Ekle" ye tıklayın. Birden fazla özel komut eklenecekse "Komut Ekle ve Devam Et" seçeneğine tıklanır. Bu şekilde ardışık OBIS kodları ekleyebilirsiniz. MODC Sayaç Programlama Modu Komutları listesinde oluşturulan özel komutları değiştirmek isterseniz değiştirilecek parametreye tıklayıp değişiklik yapabilirsiniz.

### MODBUS Adres Tablosu

MODBUS adres tablosu, daha önce tanımlanan OBIS kodlarının tipini ve bunlara karşılık gelen modbus adreslerini gösterir.

<center>

![gateway-mdc100-software-17](/img/gateway-mdc100-software-17.png)

</center>

Modbus Adres Tablosundaki adresler 10.000'den başlar. Tabloya eklenen her sayacın ilk iki adresi, hata sayacı ve rx sayaç değerlerini temsil eder. Yeni OBIS kod tanımları eklenirken dikkat edilmesi gereken hususlar; sistemde birden fazla sayaç tanımlandığında, ilk sayaçta yeni bir OBIS kodu değeri tanımlanırsa sonraki sayaçların modbus adresleri de değişir. Bu nedenle önceki sayaçların tüm parametreleri eksiksiz olarak tanımlandıktan sonra bir sonraki sayaçtan geçilmesi gerekmektedir.

<center>

![gateway-mdc100-software-18](/img/gateway-mdc100-software-18.png)

</center>

### Terminal

Terminal penceresi, MMS100 serisi dönüştürücüler için komutların girildiği bölümdür. Bu bölümde cihazdan gelen bilgiler ekrana gelir. "Özel Komut Girişi" bölümüne sorgulanacak komutu yazın (örn. AT + VERSION =?) ve sorguyu cihaza göndermek için "Gönder"e tıklayın. Sorgu yanıtı ekranda belirir. Ekranda görüntülenen sorguları temizlemek için "Konsol Penceresi" bölümünde "Geçmişi Temizle" seçeneğine tıklayın.

<center>

![gateway-mdc100-software-19](/img/gateway-mdc100-software-19.png)

</center>