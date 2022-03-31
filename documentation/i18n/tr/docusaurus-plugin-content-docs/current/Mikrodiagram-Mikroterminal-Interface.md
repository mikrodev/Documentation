---
title: "Mikroterminal Arayüzü"
---

Mikroterminal programına Mikrodiagram Tools menüsünden ulaşılabilir.

<center>

![mikroterminal-interface-01](/img/mikroterminal-interface-01.png)

</center>

<center>

![mikroterminal-interface-02](/img/mikroterminal-interface-02.png)

</center>

* USB COM Bağlantı Noktasını Açma

<center>

![mikroterminal-interface-03](/img/mikroterminal-interface-03.png)

</center>

Mikroterminal üzerinde COM portunu açmak için "port name" kısmından cihaz ile bilgisayar arasındaki bağlantının kurulduğu portu seçiniz. (Cihaz ile bilgisayar arasındaki bağlantı portu "aygıt yöneticisi"nden kontrol edilebilir.)

"Aç" sekmesine tıklandığında, "konsol penceresinde" görüntülenen COM port bilgisi görüntülenir.

* AT Komutunu Gönderme

AT komutları ile cihaz üzerindeki mevcut ayarlar okunabilir veya cihaza istenilen değerler yazılabilir.

<center>

![mikroterminal-interface-04](/img/mikroterminal-interface-04.png)

</center>

Cihazdaki mevcut ayarları okumak için "Oku" düğmesine tıklayın. "Oku" butonuna tıklandığında "konsol penceresinde" cihazdaki mevcut değer görüntülenir.

<center>

![mikroterminal-interface-05](/img/mikroterminal-interface-05.png)

</center>

AT komutları ile cihazın mevcut ayarları değiştirilecekse değiştirilecek değer pencereye yazılır ve "Yaz" butonuna tıklanır. Yazılan değer "konsol penceresinde" görüntülenir. Yazma işlemi başarılı olursa konsol penceresinde “OK” komutu yazdırılır.

* Özel Komut Penceresi

<center>

![mikroterminal-interface-06](/img/mikroterminal-interface-06.png)

</center>

AT komutları, özel komut giriş penceresinden de gönderilebilir.

Cihazdaki mevcut değer okunacaksa "AT + ÖZELLİK =?" yazılır, "gönder" butonuna tıklanır, konsol penceresinde mevcut değer görüntülenir.

<center>

![mikroterminal-interface-07](/img/mikroterminal-interface-07.png)

</center>

Cihaza özel komut penceresinden değer yazmak istiyorsanız "AT + SPECIALTYPE = KOMUT YAZ" komutu tanımlanır ve "gönder" butonuna tıklandığında yazılan değer konsol penceresine gelir.

Yazma işlemi başarılı olursa, konsol penceresinde "SPECIALTY = OK" komutu yazdırılır.

### AT Komutunun Listesi

Mikrodev ürünlerinde kullanılan AT komutlarının bir kısmı sadece okunabilir, bir kısmı da hem okunabilir hem de yazılabilir özelliklere sahiptir.

AT komut listesindeki komutlar cihazlara göre farklılık gösterir.

GSM, Ethernet, Wi-Fi özellikli ürünlerde kullanılan AT komutları başlıklarda (E/G/W) belirtilmiştir.

* AT+FBD

Mikrodiagram'da kapı tiplerinin "blok numaraları" kullanılarak blok değeri okumak ve blok değeri yazmak için kullanılır.

Değer yazılacak ise "AT + FBD = BLOKNO, VALUE" tanımlanır ve "write" komutuna tıklanır.

Blok değeri okunacaksa "AT + FBD = BLOKNO,?" tanımlanır ve "yaz" komutu tıklanır.

AT + FBD komutunda "read" komutu kullanılmaz, sadece "write" komutu kullanılır.

Örnek;

<center>

![mikroterminal-interface-08](/img/mikroterminal-interface-08.png)

</center>

<center>

![mikroterminal-interface-09](/img/mikroterminal-interface-09.png)

</center>

3000 nolu blok bir register bloğu olduğu için hem yazma hem de okuma yapılabilir.

"AT + FBD = 3000,10" girilip "yaz" butonu tıklandığında bloğa "10" değeri yazılır. Yazılan değer bilgisi konsol penceresinde "FBD = OK" olarak görüntülenir.

<center>

![mikroterminal-interface-10](/img/mikroterminal-interface-10.png)

</center>

3000 nolu blok değerini okumak isterseniz "AT + FBD = 3000,?" yazılır ve "write" komutu tıklandığında konsol penceresinde blok değeri "FBD = 10" olarak görüntülenir.

* AT+LOCALIP(E/W)

Ethernet veya Wi-Fi özellikli cihazlara yerel IP'yi tanımlamak için kullanılır

<center>

![mikroterminal-interface-11](/img/mikroterminal-interface-11.png)

</center>

Yerel IP'yi değiştirmek için "AT + LOCALIP = IP" yazın ve cihaza IP yazmak için "yaz" komutuna tıklayın.

Mevcut IP değerini okumak için "oku" komutuna tıklayın.

* AT+MAC(E/W)

Ethernet veya Wi-Fi özellikli cihazlar için MAC adresini tanımlamak için kullanılır.

Sayılar onaltılık olarak tanımlanabilir.

<center>

![mikroterminal-interface-12](/img/mikroterminal-interface-12.png)

</center>

MAC adresi "AT + MAC" komutu yazıp "write" tıklanarak değiştirilebilir. Mevcut MAC adresi "read" komutu ile okunabilir.

* AT+GATEWAY(E/W)

Ethernet veya Wi-Fi özellikli cihazlara ağ geçidi tanımlamak için kullanılır.

Yerel bir ağda, ağ geçidi genellikle modemin IP adresidir.

<center>

![mikroterminal-interface-13](/img/mikroterminal-interface-13.png)

</center>

AT + GATEWAY "ağ geçidi adresini okuma ve yazma komutu.

* AĞMASK'TA(E/W)

Ethernet veya Wi-Fi özellikli cihazlar için "ağ maskesi" tanımlamak için kullanılır.

<center>

![mikroterminal-interface-14](/img/mikroterminal-interface-14.png)

</center>

Ağ maskesi "AT + NETMASK" komutu ile okunup yazılabilir.

* AT+ÇEVRİMİÇİ

Mikrodiagram'da çevrim içi görüntüleme yapılırken mikroterminalden çevrim içi görüntülemeyi başlatmak ve durdurmak için kullanılır.

AT + ONLINE = 1 komutu gönderildiğinde çevrimiçi izleme başlatılır.

AT + ONLINE = 0 komutu gönderildiğinde çevrimiçi izleme durdurulur.

* + VERSİYONDA

Mikrodev ürünleri yazılım ve donanım versiyon bilgilerine AT + VERSION komutu ile ulaşılabilir.

<center>

![mikroterminal-interface-15](/img/mikroterminal-interface-15.png)

</center>

"AT + VERSION" komutu yalnızca okunabilir. Yazma işlemi gerçekleştirilemez.

"Hızlı kullanım kılavuzu", sürüm hakkında ayrıntılı bilgiler içerir.

* AT+SERIALNO

Mikrodev ürünlerinin seri numarası bilgilerine "AT + SERIALNO" komutu ile ulaşılabilir.

<center>

![mikroterminal-interface-16](/img/mikroterminal-interface-16.png)

</center>

"AT + SERIALNO" komutu sadece okunabilir. Yazma işlemi gerçekleştirilemez.

"Hızlı kullanım kılavuzu", seri numarası hakkında ayrıntılı bilgiler içerir.

*  AT+CONNECTION(G)

GSM veri alışverişi özelliğine sahip Mikrodev ürünlerinin bağlantı durum kontrolü "AT + CONNECTION" komutu ile yapılır.

<center>

![mikroterminal-interface-17](/img/mikroterminal-interface-17.png)

</center>

AT + CONNECTION komutunun yalnızca okunabilirliği vardır.

AT + CONNECTION komutu, 0-8 arası çift sayılı değerleri alır.

AT + CONNECTION komut yanıt tablosu aşağıdadır.

<center>

![mikroterminal-interface-18](/img/mikroterminal-interface-18.png)

</center>

*  AT+HELP

AT komut listesine ulaşıldı. Komutların kullanımına ilişkin bilgiler de verilmektedir.

<center>

![mikroterminal-interface-19](/img/mikroterminal-interface-19.png)

</center>

Yazılabilir AT komutları, durum bilgisi veren AT komutları sağlanır.

* AT+SETTIME

AT + SETTIME komutu ile cihazın gerçek zaman saati okunup yazılabilir.

<center>

![mikroterminal-interface-20](/img/mikroterminal-interface-20.png)

</center>

AT + SETTIME komutu "read" tıklandığında, konsol penceresinde okunabilen cihazın güncel saati, komut penceresine ayarlanacak tarih ve saat; "gg-aa-yyyy h:m:s" olarak ayarlandığında ve "yaz" komutu gönderildiğinde, konsol penceresinde ayarlanan zaman görüntülenir.

* AT+ERROR

Cihaz hata modunda ise hata kodunu öğrenmek için kullanılır.

<center>

![mikroterminal-interface-21](/img/mikroterminal-interface-21.png)

</center>

AT + HATA = 0 ise hata durumu yoktur.

AT + HATA = 61, cihazda Mikrodiagram kurulu olmadığı anlamına gelir

AT + ERROR komutu yalnızca okunabilir bir komuttur.

<center>

![mikroterminal-interface-22](/img/mikroterminal-interface-22.png)

</center>

* AT+DEFAULT

AT + DEFAULT komutu, üniteyi fabrika ayarlarına sıfırlamak için kullanılır.

<center>

![mikroterminal-interface-23](/img/mikroterminal-interface-23.png)

</center>

AT + DEFAULT = 1 komutu yazıp "write" tıklandığında cihaz fabrika ayarlarına döner.

Cihaz fabrika ayarlarına döndürüldüğünde AT komutları ile yapılan ayarlar fabrika ayarlarına döndürülür, en son yüklenen Mikrodiagram projesi cihazdan silinir.

Komut gönderildikten sonra cihaz ERROR = 61 hatasına düşer

AT + DEFAULT komutu yalnızca yazılabilir.

*AT + RESET

AT + RESET komutu, cihazın yazılımın yeniden başlatılması için kullanılır.

<center>

![mikroterminal-interface-24](/img/mikroterminal-interface-24.png)

</center>

AT + RESET = 1 yazıp "gönder" butonuna tıklandığında cihaz yeniden başlatılır.

* AT+PLCRESET

<center>

![mikroterminal-interface-25](/img/mikroterminal-interface-25.png)

</center>

AT + PLCRESET komutu, TCP iletişim protokolleri cihazın belirli bir süre sonra sıfırlanmasını gerektirdiğinde kullanılır.

Cihaza AT + PLCRESET = 0 komutu gönderilirse komut devre dışı bırakılır.

AT + PLCRESET komutu, minimum 60 saniye (sn) ölçeğinde çalışır.

Cihazda programlanan mevcut PLCRESET komutunu öğrenmek için AT + PLCRESET =? komut cihaza gönderilebilir.

* AT+CONFIGPORT

<center>

![mikroterminal-interface-26](/img/mikroterminal-interface-26.png)

</center>

AT + CONFIGPORT komutu, TCP iletişim portu (Ethernet, GSM, Wi-Fi) bulunan cihazlara Mikrodiagram'dan TCP port bağlantısı kurulmak istenen durumlarda kullanılan port numarasını tanımlamak için kullanılır.

Fabrika varsayılan ConfigPort numarası 502'dir.

AT + CONFIGPORT komutu ile değiştirilebilir.

AT + = CONFIGPORT? komut mevcut configport ile görüntülenebilir.

<center>

![mikroterminal-interface-27](/img/mikroterminal-interface-27.png)

</center>

Cihaza sunucu Mikrodiagramı olarak seçilen bir TCP soket bloğu eklendiğinde CONFIGPORT devre dışı bırakılır. Aygıtın dinleme bağlantı noktası, TCP yuva bloğuna eklenen dinleme bağlantı noktasıdır.

* AT+SERVERTIMEOUT

<center>

![mikroterminal-interface-28](/img/mikroterminal-interface-28.png)

</center>

* AT+FORMATFS

AT + FORMATFS = 1 komutu Mikrodev ürünlerini biçimlendirmek için kullanılır. Cihaza AT + FORMATFS = 1 komutu gönderildiğinde firmware silinecektir, bu yüzden cihazı programlamak için tekrar firmware yüklemek gerekir.

* AT+CANTIMEOUT

<center>

![mikroterminal-interface-29](/img/mikroterminal-interface-29.png)

</center>

AT + CANTIMEOUT komutu Mikrodev, CPU modülleri ile genişletme üniteleri arasında haberleşme arızası olması durumunda genişletme üniteleri üzerindeki giriş ve çıkışların konumunu belirli bir süre boyunca korumak için kullanılır.

CANTIMEOUT süresi, milisaniye (ms) zaman ölçeğinde çalışır.

Giriş modülleri ile CPU arasındaki iletişim bağlantısı koptuğunda, CPU'ya girilen CANTIMEOUT sayısına kadar olan girişler yazılımdaki pozisyonunu değiştirmez.

Çıkış modülleri ile CPU arasındaki iletişim bağlantısı koptuğunda, çıkış modüllerine girilen CANTIMEOUT süreleri kadar çıkışlar konum değiştirmez.

Giriş modülleri için CPU'ya CANTIMEOUT zaman girişi, çıkış modülleri için çıkış modüllerine CANTIMEOUT zaman girişi kullanılır.

Örneğin, CPU ve genişletme birimleri için AT + CANTIMEOUT = 60000 (ms) tanımlanmışsa, gelen dijital giriş sinyali konumu, dijital giriş (DI) arasındaki iletişimden sonra 60000 (ms) (1 dakika) kadar genişletme birimi aracılığıyla korunur. ) genişletme birimi ve CPU kesintiye uğradı. 60000 ms. CANTIMEOUT süresi geçtikten sonra, genişleme ünitesine hala bağlantı yoksa dijital girişler mantığa (0) çekilir.

* AT+GPRSIP(G)

Veri paketi (internet paketi), SIM kartın IP'sidir. GSM operatörü tarafından sağlanır.

Sadece AT + GPRSIP komutu ile okunabilir. Değişti.

Cihaz sunucu olarak kullanılacaksa, sabit IP adresli bir SIM kart sağlanmalıdır.

   Sabit IP'li bir SIM kart sağlandığında, GSM operatöründen de APN bilgisi alınmalıdır.

* AT+GPRSAPN(G)

AT + GPRSAPN komutu, GSM TCP haberleşme özelliğine sahip Mikrodev ürünleri için APN tanımlamak için kullanılır.

Tanımlanması gereken APN, cihazda kullanılan SIM kart operatörüne göre değişiklik gösterdiğinden ilgili GSM operatörünün müşteri hizmetlerinden temin edilmesi gerekmektedir.

Kullanılan cihaz GSM hattı ile TCP iletişiminde sunucu olarak kullanılacaksa (cihaz başka bir IP'ye bağlanacaksa) APN tanımlanmalıdır.

Not: APN tanımlı cihazda kullanılan SIM kartın statik IP'si olmalıdır.

* AT+CSQ(G)

GSM özellikli cihazların kurulu olduğu GSM sinyal kalitesi (GSM hattının gücü) değeridir. -1 ile 31 arasında olabilir.

SIM kart takılı olmasa bile GSM anteni bağlıyken değer okunabilir. (Acil aramalar, SIM kart takılı değilken cep telefonlarında kullanılır.)

AT + CSQ sadece okunabilir komuttur.

Çekme tablosu aşağıdaki gibidir.

<center>

![mikroterminal-interface-30](/img/mikroterminal-interface-30.png)

</center>

*  AT+SIM(G)

GSM donanımına sahip Mikrodev ürünlerinde SIM kart sorgulama için kullanılmaktadır.

"AT + SIM =?" ile salt okunur komutu Değer yazılamaz.

Komutun cevabı SIM=1 ise SIM kartın doğru takıldığını ve hatasız olduğunu gösterir.

Komuta yanıt, SIM kartın takılı olmadığını, yanlış takıldığını veya arızalı olduğunu belirtmek için SIM = 0'dır.

* AT+WIFISSID(W)

WI-FI özellikli ürünlere dahil edilecek WI-FI ağ adını belirlemek için kullanılır.

"AT + WIFISSID" komut penceresinde WI-FI adı yazılır, "write" komutu tıklanır,

Mevcut WI-FI SSID'yi okumak istediğinizde, "AT + WIFISSID" "oku" komutuna tıklayın.

* AT+WIFIPSSW(W)

WI-FI özellikli ürünlere dahil edilecek WI-FI ağının şifresini açıklamak için kullanılır.

AT + WIFIPSSW WI-FI şifresi komut penceresine yazılır, "yaz" komutuna tıklayın,

Mevcut WI-FI şifresi okunmak istendiğinde AT + WIFIPSSW "oku" komutuna tıklanır.

*  AT+TEMPTYPE

RTD sıcaklık sensörü girişi olan ürünler için sıcaklık sensörü seçimi yapılır.

Donanım, ürünün sıcaklık sensörüne uygun olarak imal edilmelidir.

AT + TEMPTYPE = 0 ise PT100 sıcaklık sensörü kullanılabilir.

AT + TEMPTYPE = 1 ise NTC sıcaklık sensörü kullanılabilir.

AT + TEMPTYPE = 2 ise PT1000 sıcaklık sensörü kullanılabilir.

* AT+PRODUCTNO

Mikrodev ürün ailesindeki ürünler için donanım ürün kodu sorgulaması yapılır.

Ürün yerleşik yazılımında (MP201_E_s11.09p42) "p" harfiyle başlayan (p42, p46, vb.) kod, AT + PRODUCTNO koduyla eşleşmelidir.

   AT + PRODUCTNO, okunabilen tek komuttur.

* AT+PTO

"Darbeli katar çıkışı" ve "eksen kontrolü" bloklarını etkinleştirmek için kullanılır.

AT + PTO = 1 komutu etkinleştirilir. AT + PTO = 0 komutu devre dışı bırakın.

Mevcut durum sorgulaması için "AT + PTO =?" Komut gönderilebilir.

* AT+SOCKET

Mikrodiagram projesinde TCP soket bloklarının aktif bağlantılarını izlemek için kullanılır.

AT + SOKET = <"TCP Soket Blok" Blok Numarası> komutu cihaza gönderildiğinde ilgili TCP soket bloğundan yapılan bağlantılar görüntülenir.

Durumu "1" olanlar bağlantının var olduğunu gösterir. "1"den farklı olan "durum" durumları, bağlantının zaten var olduğunu, ancak bağlantının belirtilen süreden önce bozulduğunu gösterir.

<center>

![mikroterminal-interface-31](/img/mikroterminal-interface-31.png)

</center>

* AT+POWERCOUNT

Mikrodiagram projesi yüklendikten sonra cihazın kaç kez yeniden başlatıldığını gösterir. Mikrordiagram projesi yüklendikten sonra cihaz yeniden başlatıldığından ilk değer 1'dir.

Yazılabilir ve okunabilir komut.

AT + = GÜÇCOUNT? , Mevcut değer sorgulanır ve AT + GÜÇCOUNT = Set değeri komutu ile istenilen değer yazılabilir.
