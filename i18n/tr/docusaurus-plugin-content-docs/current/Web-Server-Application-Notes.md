---
title: WEB SERVER Kullanma Kılavuzu
---

## PC IP YAPILANDIRMA AYARLARI

DM50 Web Server Arayüzüne giriş yapabilmek için öncelikle bilgisayar IP adresinin bağlanılmak istenen cihaz IP adresi ile aynı ağda olması gerekmektedir. Aynı ağda yer almıyor ise PC üzerinden DM50 Web Server Arayüzüne erişim sağlanamayacaktır. Bunun için aşağıdaki yönergeler takip edilmelidir:

* Sağ alt köşede yer alan internet bağlantısı simgesine tıklayın. Ağ ve İnternet ayarlarını açın.

<center>

![webserver01](/img/webserver01.png)
***<center>Şekil 1: Ağ ve İnternet Ayarları</center>***

</center>

* Gelişmiş ağ ayarları kısmında yer alan Bağdaştırıcı seçeneklerini değiştire tıklayın.

<center>

![webserver02](/img/webserver02.png)
***<center>Şekil 2: Bağdaştırıcı Seçeneklerini Değiştir</center>***

</center>

* Ethernet -> Özellikler -> İnternet Protokolü Sürüm 4 (TCP/IPv4) çift tıklayın.

<center>

![webserver03](/img/webserver03.png)
***<center>Şekil 3: İnternet Protokolü Sürüm 4 (TCP/IPv4)</center>***

</center>

* İnternet Protokolü Sürüm 4 (TCP/IPv4) Özellikleri sayfasından “Aşağıdaki IP kullan” ve “Aşağıdaki DNS sunucu adreslerini kullan” seçeneklerine tıklayın ve Yönlendiricinin aynı alt ağı içinde manuel olarak statik bir IP adresi yapılandırın, “Tamam” a tıklayın.

<center>

![webserver04](/img/webserver04.png)
***<center>Şekil 4: İnternet Protokolü Sürüm 4 (TCP/IPv4) Özellikleri IP Atama</center>***

</center>

## TELEDİAGRAM PROJESİNDEN BLOKLARIN WEB SERVER GÖRÜNÜMÜNÜ AÇMA

Telediagram projesinde yer alan blokların web server arayüzü üzerinden izlenmesi ve bloklara değer gönderilebilmesi için blok özel ayarlarında bulunan **Web View seçeneklerinin** işaretli olması gerekmektedir.

* **İzleme Yok:** Bu seçenek işaretli olan bloklar, web server arayüzü üzerinden izlemez.          
* **Sadece İzleme:** Bu seçenek işaretli olan bloklar, web server arayüzü üzerinden sadece izlenebilir, bloklara değer set edilemez.        
* **İzleme ve Değiştirme:** Bu seçenek işaretli olan bloklar, web server arayüzü üzerinden hem izlenebilir hem de bloklara değer set edilebilir.             

DM50 cihazına yüklenecek olan proje öncelikle Telediagram programı üzerinden açılmalıdır. Web server arayüzünden izlenmek istenen blokların, blok özel ayarlarından Web View seçenekleri işaretlenmelidir.

<center>

![webserver05](/img/webserver05.png)
***<center>Şekil 5: Telediagram Web View Ayarları</center>***

</center>

**Not:** Telediagram üzerinden ilgili blokların Web View özelliği aktif edilmediğinde, web server arayüzünden hiçbir bloğa erişim sağlanamamaktadır.

## DM50 WEB SERVER ARAYÜZÜNE GİRİŞ YAPMA

DM50 Web Server Arayüzünde oturum açmak için aşağıdaki yönergeler takip edilmelidir:

* Bilgisayarınızda bulunan herhangi bir internet tarayıcısını açın.

* URL kısmına cihazın bağlanılmak istenen herhangi bir Ethernet IP adresi (default: https://192.168.2.200) girilmelidir.

<center>

![webserver06](/img/webserver06.png)
***<center>Şekil 6: DM50 Web Server URL Örneği</center>***

</center>

* Enter yapıldıktan sonra Şekil 2 de gözüken kullanıcı giriş ekranı gelmektedir. Username ve Password kısmına default olarak tanımlanan kullanıcı adı ve şifre girilmelidir.

    Default olarak tanımlanan 
	**Username: admin**                   
    **Password: admin**

<center>

![webserver07](/img/webserver07.png)
***<center>Şekil 7: Kullanıcı Giriş Sayfası</center>***

</center>

**Not:** Aynı anda web server arayüzüne max 3 kullanıcı giriş yapabilmektedir. 4. Kullanıcı giriş yaptığında maksimum kullanıcı sayısına ulaştı hatası vermektedir.

<center>

![webserver08](/img/webserver08.png)
***<center>Şekil 8: Maksimum Kullanıcı Ulaştı Hatası</center>***

</center>

## DM50 WEB SERVER GENEL BAKIŞ

Web server arayüzü, Telediagram programı olmadan internet üzerinden DM50 cihazının anlık durumunu izleme, cihaza proje yükleme, firmware güncelleme, cihazın log kayıtlarını görüntüleme ve indirme gibi işlevleri sağlar. Bu arayüz aynı zamanda projedeki blok parametrelerini izleme ve bu parametrelerin değerlerini değiştirme olanağı sunar. Ayrıca, firewall kuralları oluşturma, NAT yapılandırması, bridge kurma ve port yönlendirme (port forwarding) özelliklerini de destekler.

IPSec ve OpenVPN protokolleri aracılığıyla cihazlar arasında güvenli ve şifreli iletişim sağlanarak, veri güvenliği artırılır. Bu protokoller, ağ üzerindeki iletişimi şifreleyerek verilerin korunmasını sağlar. Bu sayede, IoT cihazları arasındaki iletişim güvenli hale getirilir ve yetkilendirilmemiş erişimlere karşı önlem alınır.

Bu özellikler, DM50 cihazının uzaktan erişim ve yönetimini kolaylaştırarak, güvenli bir şekilde kontrol edilmesini ve güncellenmesini sağlar.

<center>

![webserver09](/img/webserver09.png)
***<center>Şekil 9: DM50 Web Server Ana Ekranı</center>***

</center>

DM50 Web Server Arayüz ana ekranının sol kenar çubuğunda Kontrol Paneli, Kullanıcılar, Arayüzler, VPN, Network, Yükle, Cihaz Günlükleri, Terminal, Gerçek Zamanlı Lojikler, Hesap Tercihleri ve Uygulama Ayarları olmak üzere 11 ana başlık bulunmaktadır.

* **Kontrol Paneli Sayfası:** Cihazın sistem ve ağ bilgilerinin anlık durumunu gösteren sayfadır.         

* **Kullanıcılar Sayfası:** Kullanıcılar üzerinde düzenlemelerin yapıldığı ve yeni kullanıcı tanımlamalarının eklendiği sayfadır.

* **Arayüzler Sayfası:** Ethernet, Wifi ve GSM Ağ ayarlarının yapıldığı sayfadır.

* **VPN Başlığı:** OPENVPN sayfası ve IPSEC sayfası yer almaktadır. Cihaza web server üzerinden OpenVPN ve IPSec parametre ayarları bu sayfalardan yapılmaktadır.

* **Network Başlığı:** Firewall, NAT, Bridge ve Port Forwarding sayfaları yer almaktadır. Cihaza web server üzerinden güvenlik duvarı, NAT, Bridge ayarları ve port yönlendirme ayarları bu sayfalardan yapılmaktadır.

* **Yükleme Yöneticisi Sayfası:** Cihaza firmware, proje ve SSL Sertifikası yüklemelerinin yapıldığı sayfadır. Geçmiş sekmesinde geçmişte yapılan yüklemeler takip edilebilmektedir.

* **Cihaz Günlükleri Sayfası:** Cihazın loglarının izlendiği, SD Karta yazılan logların görüntülendiği sayfadır. Web Server Arayüz üzerinden görüntülenen sistem günlükleri ve protokol günlükleri “.txt” formatında indirilebilmektedir.

* **Terminal Sayfası:** Cihaza AT komutlarının gönderildiği sayfadır.

* **Gerçek Zamanlı Lojikler Sayfası:** Cihaz içerisine yüklenen projenin blok parametrelerinin izlendiği ve değer atamalarının yapıldığı sayfadır. Bu sayfadan CSV formatında çıktı alınabilmektedir.

* **Hesap Tercihleri Sayfası:** Web servera giriş yapan kullanıcının kullanıcı bilgilerini düzenleyebildiği sayfadır.

* **Uygulama Ayarları Sayfası:** Uygulama teması ve dil seçenekleri üzerinde ayarlamaların yapıldığı sayfadır.

## WEB SERVER SOL KENAR ÇUBUĞU ÖZELLİKLERİ

**Sol Kenar Çubuğu Gizleme:**

Sayfanın en üst kısmında bulunan “Home” yazısına tıklanıldığında sol kenar çubuğu gizlenebilmektedir. Gizlenen sol kenar çubuğu yine “Home” yazısına tıklanarak sayfada gösterilebilmektedir.

<center>

![webserver10](/img/webserver10.png)
***<center>Şekil 10: Sol Kenar Çubuğu Gizleme</center>***

</center>

### Kontrol Paneli Sayfası

Bu sayfadan cihaz modeli, sistem çalışma süresi, sistem zamanı, RAM kullanımı, Firmware versiyonu bilgilerine, ethernet bilgilerine ve son sistem olaylarına ulaşılabilmektedir.
Cihaz üzerinde yer alan ethernet girişlerinden bağlantı kurulduğunda ETH0 ve ETH1 in tipi bağlı veya bağlı olarak durumları güncellenmektedir.

Bu sayfaya Web Server Arayüzü üzerinden tanımlanan misafir ve operatör kullanıcıları hariç tüm kullanıcı tipleri erişim sağlayabilmektedir.

<center>

![webserver11](/img/webserver11.png)
***<center>Şekil 11: Kontrol Paneli Sayfası</center>***

</center>

### Kullanıcılar Sayfası

Kullanıcı yönetim sayfasının altında aktif ve inaktif olmak üzere 2 sekme bulunmaktadır. Sayfanın üstünde yer alan aktif ve inaktif isimlerinin üzerine tıklayarak sekmeler arasında geçiş yapılmaktadır. İsimlere tıklandığında aktif olan sekmenin yazısı koyu gri olmaktadır.

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

Kullanıcı isimlerinin sağ tarafında yer alan kalem simgesine tıklayarak kişi bilgileri düzenlenebilmekte ve kullanıcılar aktif veya inaktif olarak belirlenebilmektedir. Aktif olarak seçilen kullanıcılar aktif sekmesinde, inaktif kullanıcılar ise diğer sekmede listelenmektedir.      

Kayıtlı kullanıcılar silinmek istenildiğinde ise burada yer alan silgi simgesine tıklanılması gerekmektedir.

<center>

![webserver12](/img/webserver12.png)
***<center>Şekil 12: Kullanıcı Tablosu</center>***

</center>


#### Kullanıcı Ekleme

Web Server Arayüzüne yeni bir kullanıcı, kullanıcı ekleme sekmesinden yapılmaktadır.

<center>

![webserver13](/img/webserver13.png)
***<center>Şekil 13: Kullanıcı Ekleme Sekmesi</center>***

</center>

* **Kullanıcı Adı:** Kullanıcı adı belirlenir.

* **Parola:** Şifrenin min 6 max 20 karakter olmasına, büyük/küçük harf, rakam ve sembol kullanılmasına dikkat edilmelidir.

* **Mail:** adınız@example.xyz şeklinde olmalıdır.

* **Erişim IP:** Web Server Arayüzüne giriş yapılacak bilgisayarın IP adresidir. (Operatör, Misafir ve Teknisyen için giriş IP adresi tanımlanması gerekmektedir. Admin kullanıcısı ise tüm IP adreslerden Web Server Arayüzüne giriş yapabilmektedir).

Oluşturulan kullanıcılara farklı yetkiler sayfanın sağ alt kısmında yer alan yetki seçeneklerinden yapılmaktadır. 4 farklı kullanıcı tipi yer almaktadır. Her kullanıcı tipinin Web Server arayüzündeki yetkisi farklıdır.

* **Operatör:** Cihaza yüklenen projenin blok değerlerinin bulunduğu gerçek zamanlı lojikler sayfasına, hesap tercihleri sayfasına ve uygulama ayarları sayfasına erişim sağlayabilmektedir. Misafir kullanıcısından farklı olarak gerçek zamanlı lojikler sayfasından blok değerlerini izleyebilmekte ve blok değeri set edebilmektedir.

<center>

![webserver14](/img/webserver14.png)
***<center>Şekil 14: Operatör Kullanıcısı Ana Ekranı</center>***

</center>

* **Teknisyen:** Cihazın durumunu gösteren kontrol paneli, arayüzler sayfası, yükleme yöneticisi, gerçek zamanlı lojikler sayfasına, hesap tercihleri sayfasına ve uygulama ayarları sayfasına erişim sağlayabilir.

<center>

![webserver15](/img/webserver15.png)
***<center>Şekil 15: Teknisyen Kullanıcısı Ana Ekranı</center>***

</center>

* **Misafir:** Cihaza yüklenen projenin blok değerlerinin bulunduğu gerçek zamanlı lojikler sayfasına, hesap tercihleri sayfasına ve uygulama ayarları sayfasına erişim sağlayabilmektedir. Operatör kullanıcısından farklı olarak gerçek zamanlı lojikler sayfasından sadece blok değerlerini izleyebilir; blok değeri set edemez.

<center>

![webserver16](/img/webserver16.png)
***<center>Şekil 16: Misafir Kullanıcısı Ana Ekranı</center>***

</center>

* **Administrator:** Web Server Arayüzünde tanımlanan en yetkili kişi Administratordur. Web Server Arayüzünde bulunan tüm sayfalara erişim sağlayabilmektedir.

**Not:** Web Server Arayüzünde birden fazla Administrator kullanıcısı tanımlanabilmektedir.

<center>

![webserver17](/img/webserver17.png)
***<center>Şekil 17: Administrator Kullanıcısı Ana Ekranı</center>***

</center>

### Arayüzler Sayfası

Arayüzler sayfasında cihazın ağ ayarlarının yapıldığı tablo yer almaktadır. Bu tablodan cihazın Ethernet, GSM ve Wifi ayarları düzenlenebilmektedir.

<center>

![webserver18](/img/webserver18.png)
***<center>Şekil 18: Arayüzler Sayfası</center>***

</center>

#### Ethernet Ayarları

Arayüzler sayfasındaki tablodan Eth0 ve Eth1 olarak yazan satırdan cihazın mevcuttaki ethernet ayarlarını takip edebilir, hangi portun ethernet üzerinden bağlı olduğunu durum kısmından görebilir ve kalem simgesine tıklayarak ethernet ağ yapılandırma ayarları yapılabilmektedir.

Bu sayfaya Administrator ve Teknisyen kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver19](/img/webserver19.png)
***<center>Şekil 19: Ethernet Ayarları</center>***

</center>

Ağ yapılandırılması yapılmak istenen ethernet portu ilgili tablonun satırına gidilir. Bu satırda yer alan kalem simgesine tıklayarak ethernet yapılandırma ayarları sayfasına erişim sağlanır.
Ethernet ağ yapılandırma sayfasından Ethernet IP adresi, Subnet Mask ve Gateway adresi girilir ve “kaydet & uygula” yazısına tıklanır.

<center>

![webserver20](/img/webserver20.png)
***<center>Şekil 20: Ethernet Ağ Yapılandırma Ayarları</center>***

</center>

#### GSM APN Yapılandırma

Cihaza GSM üzerinden bağlanmak için bağlanılacak olan GSM ayarları arayüzler tablosunun ppp0 satırından yapılmaktadır.

Bu sayfaya Administrator ve Teknisyen kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver21](/img/webserver21.png)
***<center>Şekil 21: GSM Ayarları</center>***

</center>

GSM APN yapılandırılması için ppp0 satırında yer alan kalem simgesine tıklanır.

Açılan GSM APN yapılandırma sayfasından APN, Ad ve Şifre bilgileri girilir ve “kaydet & uygula” yazına tıklanır.

<center>

![webserver22](/img/webserver22.png)
***<center>Şekil 22: GSM APN Yapılandırma Ekranı</center>***

</center>

#### Wifi Ayarları

Cihazın Web Server Arayüzü üzerinden wifi yapılandırma ayarları arayüzler tablosunun wlan satırından yapılmaktadır.

Bu sayfaya Administrator ve Teknisyen kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver23](/img/webserver23.png)
***<center>Şekil 23: Wifi Ayarları</center>***

</center>

Wifi ağ yapılandırılması için WLAN satırında yer alan kalem simgesine tıklanır.

Cihaza wifi üzerinden **Client** olarak bağlanmak için sayfanın üst kısmında bulunan seçeneklerden Client seçeneği seçilir. Açılan sayfadan bağlanılacak olan ağın SSID, Şifresi, Statik IP, Gateway adresi, DNS1 ve DNS2 ayarları girilir ve “kaydet & uygula” yazısına tıklanır.

<center>

![webserver24](/img/webserver24.png)
***<center>Şekil 24: Wifi Client Yapılandırma Ekranı</center>***

</center>

Cihaza wifi üzerinden **Hotspot** olarak bağlanmak için sayfanın üst kısmında bulunan seçeneklerden Hotspot seçeneği seçilir. Açılan sayfadan HotSpot olarak bağlanmak için oluşturulan SSID, Şifresi, Ülke Seçimi, Kiralama Zamanı, Local IP, DHCP Server Başlangıç IP, Bitiş IP, DNS1 ve DNS2 ayarları girilir ve “Aply” yazısına tıklanır.

<center>

![webserver25](/img/webserver25.png)
***<center>Şekil 25: Wifi HotSpot Yapılandırma Ekranı</center>***

</center>

Cihazın Wifi özelliği Web Server arayüzü üzerinden kapatılabilmektedir. Arayüzler tablosunda yer alan WLAN satırındaki kalem simgesine tıklanır. Burada yer alan “Disabled” seçeneği seçilir. Cihazın Wifi özelliği kapatılmış olur.

<center>

![webserver26](/img/webserver26.png)
***<center>Şekil 26: Cihazın Wifi Özelliğini Kapatma</center>***

</center>

### VPN

#### OpenVPN Sayfası

OpenVPN bağlantısı, web arayüzündeki sol kenar çubuğunda bulunan VPN seçeneği altındaki OpenVPN sayfasından yapılır. Sertifikalar, açılan sayfanın x509 sekmesinden cihaza yüklenir.

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

##### OpenVPN Auto Mod

OpenVPN Auto Modu, sistem açıldığında veya bağlantı koptuğunda VPN’i otomatik başlatan, kesintisiz ve güvenli bir bağlantı sağlayan moddur.

<center>

![webserver27](/img/webserver27.png)
***<center>Şekil 27: OpenVPN x509 Sertifikası Yükleme</center>***

</center>

Automod modunda VPN bağlantısı kurmak için .ovpn uzantılı yapılandırma dosyası gereklidir.

**Not:** Yüklenen sertifikaların ve yapılandırma işlemlerinin aynı tünelle uyumlu olmalıdır. Örneğin, bir sertifika Tunnel 1 için yüklendiyse, aynı Tunnel 1 için yapılandırma adımları takip edilmelidir.

Sertifikalar yüklendikten sonra Add Openvpn kısmından gerekli yerler doldurulur. Bu sayfada mode seçimine göre doldurulması gereken yerler değişmektedir.

<center>

![webserver28](/img/webserver28.png)
***<center>Şekil 28: Add OpenVPN Sayfası</center>***

</center>

Eklenen bağlantılar "Connection" bölümünde görüntülenebilir ve bu bağlantılar etkinleştirilebilir veya devre dışı bırakılabilir. Ayrıca oluşturulan yapılandırma dosyası da indirilebilir. Enable edildikten sonra bağlantı durumu ve IP bilgisi güncellenecektir.

<center>

![webserver92](/img/webserver92.png)
***<center>Şekil 29: OpenVPN Connections Sayfası</center>***

</center>

##### Client Mod

OpenVPN Client Modu, istemcinin OpenVPN sunucusuna bağlanarak güvenli ve şifreli bir tünel oluşturmasını sağlar. İstemciye sunucu tarafından özel bir IP atanır, trafik VPN üzerinden yönlendirilir ve bağlantı durumu ifconfig veya OpenVPN arayüzünden takip edilebilir. Güvenli iletişim için sertifika ve anahtar dosyalarının eksiksiz yüklenmesi gereklidir.

<center>

![webserver31](/img/webserver31.png)
***<center>Şekil 30: OpenVPN Client Sertifika Yükleme Ekran</center>***

</center>

Bu dosyalar, OpenVPN istemcisinin güvenli bir bağlantı kurabilmesi için gereklidir. Yüklenen sertifikalar ve anahtarlar Uploaded Files sekmesinden görülebilir ve yönetilebilir. Add OpenVPN sekmesine gelerek sertifikaların yüklendiği tunnel’da servera ait konfigürasyonlar yapılır. Buradaki ayarlar server konfigürasyonlarına uygun şekilde olmalıdır. Aşağıdaki ayarlar serverın ayarlarına göre yapılmıştır.

Server kurulumu sırasında ayarlanan encryption ve authentication algoritmalarının aynısı burada da girilir ve ekle butonuna tıklanır. Save & Apply denir ve ‘Connection’ kısmından bağlantı durumu ve ip bilgisi kontrol edilir.

<center>

![webserver32](/img/webserver32.png)
***<center>Şekil 31: OpenVPN Client Yapılandırma Ayarları</center>***

</center>

Server kurulumu sırasında ayarlanan encryption ve authentication algoritmalarının aynısı burada da girilir ve ekle butonuna tıklanır. Save & Apply denir ve ‘Connection’ kısmından bağlantı durumu ve ip bilgisi kontrol edilir.

<center>

![webserver93](/img/webserver93.png)
***<center>Şekil 32: OpenVPN Client Bağlantı Durumu</center>***

</center>

Örnekte client_ovpn istemcisinin Tunnel-1 üzerinden başarıyla bağlandığı görülmektedir. İstemciye 10.8.0.2 IP adresi atanmış ve bağlantı aktif (Connected) durumdadır. VPN bağlantısı Enable seçeneğiyle açılıp kapatılabilir, gerekirse sağdaki kırmızı buton ile silinebilir.

##### Server Mod

OpenVPN Server Modu, VPN sunucusunun istemciler için merkezi bir erişim noktası olarak çalışmasını sağlayan moddur. Bu modda, sunucu belirlenen protokol ve güvenlik politikalarına göre istemci bağlantılarını yönetir, IP adresleri atar. Server Modu, istemcilerin aynı ağ üzerinde güvenli bir şekilde haberleşmesini sağlar.

<center>

![webserver35](/img/webserver35.png)
***<center>Şekil 33: OpenVPN Sunucu Modu İçin Sertifika ve Anahtar Yükleme Ekranı</center>***

</center>

Server modunda VPN çalıştırabilmek için, VPN sunucusunun kurulu olduğu makinede server sertifikalarının üretilmesi gerekmektedir. x509 sekmesinden uygun tünel seçilip server modda sertifika yüklenmelidir.

<center>

![webserver36](/img/webserver36.png)
***<center>Şekil 34: Server Konfigürasyonu</center>***

</center>

Server kurulumu sırasında ayarlanan encryption ve authentication algoritmalarının aynısını burada da girilir ekle butonuna tıklanır. Save & Apply denir ve ‘Connection’ kısmından bağlantı durumu ve ip bilgisi kontrol edilir.

<center>

![webserver94](/img/webserver94.png)
***<center>Şekil 35: OpenVPN Server Modu Bağlantı Sayfası</center>***

</center>

Burada anlatılan örnekte, OpenVPN Server Modu'nun aktif olduğunu göstermektedir. Sunucu, 10.8.0.1 IP adresiyle çalışmakta ve istemciler için bağlantıyı yönetmektedir. Bağlantı durumu Connected (Bağlandı) olarak görülmekte ve sunucu etkin durumda bulunmaktadır.

#### IPsec Sayfası

GSM üzerinden IP almış iki cihaz arasında IPsec tüneli kurmak için web server yazılımının VPN seçenekleri altındaki IPSec sayfası kullanılır.

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver39](/img/webserver39.png)
***<center>Şekil 36: IPSec Sayfası</center>***

</center>

Yeni IPSec yapılandırması eklemek için Add IPSEC yazısına tıklanır. Edit seçeneğine seçilir. Açılan sayfadan uzak cihazın public IP'si "Remote IP Address" kısmına yazılırken, erişilmek istenen uzak cihazın yerel ağı "Remote Local Subnet" kısmına ağ kimliği ve alt ağı olarak yazılmalıdır.

Cihazın kendi public IP adresi "Public IP Address" kısmına, erişilmek istenen yerel ağın ağ kimliği ve alt ağı ise "Local Subnet" kısmına yazılmalıdır. PSK Secret kısmında gizli şifre ayarlanır. Time interval, timeout değerleri ve Action kısımları doldurulur.

Daha sonra faz1 ve faz2 ayarlarını her iki cihaz için aynı değerlerde yapılandırıp "Apply" butonuna tıklandığında, tanımlanan lokal ağlar arasında bir tünel oluşur.

<center>

![webserver40](/img/webserver40.png)
***<center>Şekil 37: IPSEC Yapılandırma Sayfası</center>***

</center>

Aktif IPsec bağlantıları "Connections" sekmesinde görüntülenebilir.

### Network

#### Firewall (Güvenlik Duvarı) Sayfası

Web server üzerinden ağ güvenliğini arttırmak için cihaza güvenlik duvarı ayarları yapılabilmektedir. Filtre kuralları ekleyerek cihaza erişim sağlayacak ip ve portlar belirlenebilmektedir.

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver41](/img/webserver41.png)
***<center>Şekil 38: Firewall Sayfası</center>***

</center>

Yeni filtre kuralı eklemek için “Add Firewall Rule” yazısına tıklanır. Uyarı ekranından “Add” seçeneği ile devam edilir. Protokol kısmından cihaza bağlantı filtresi eklemek istenen protokol tipi seçilir. Source ip ve port kısmına filtreleme yapmak istediğiniz ip ve port bilgisini, destination ip kısmına ise DM50 ip adresi girilmelidir. Action kısmından ise filtreleme yapılan ip veya port bilgisi üzerinden cihaza erişim sağlanıp, sağlanmayacağı seçilir.

Yapılmak istenen filtreleme kuralına göre gerekli yerler doldurulur ve sayfanın alt kısmında bulunan “Apply” yazısına tıklanır. Firewall için üç farklı mod vardır.

##### Input Modu

<center>

![webserver95](/img/webserver95.png)
***<center>Şekil 39: Firewall Input Kuralı</center>***

</center>

Firewall input kuralı, doğrudan firewall’un kendisine gelen trafiği kontrol eden bir güvenlik kuralıdır. Bu kurallar, belirli IP adreslerinden, protokollerden veya portlardan gelen isteklerin kabul edilip edilmeyeceğini belirler. Bu örnekte, 192.168.10.58 cihazının 510 numaralı portuna yalnızca 192.168.10.151 IP adresinden erişim izni verilmiş, diğer tüm IP adreslerinden gelen bağlantılar engellenmiştir.

Bağlantının doğru çalıştığını doğrulamak için, öncelikle 192.168.10.151 IP adresinden 192.168.10.58:510 portuna bağlantı kurulmalıdır. Bu bağlantının başarılı olması beklenir. Daha sonra, farklı bir IP adresinden aynı bağlantı denenmelidir. Bu durumda bağlantının başarısız olmalıdır. Bu örnek, yalnızca yetkilendirilmiş cihazların belirlenen porta erişmesini sağlarken, diğer tüm erişim taleplerini engelleyerek güvenliği artırır.

Bu yapılandırmada, 192.168.10.151 IP adresine sahip cihazın 510 numaralı portu üzerinden Modbus TCP/IP bağlantısı kurulduğu görülmelidir. SSH üzerinden 192.168.10.58 cihazına bağlanılarak, telnet ile 192.168.10.151:510 bağlantısının başarılı olduğu doğrulanmıştır.

<center>

![webserver43](/img/webserver43.png)

</center>

<center>

![webserver44](/img/webserver44.png)
***<center>Şekil 40: Ağ Bağlantı ve Erişim Kontrolü</center>***

</center>

##### Output Modu

<center>

![webserver96](/img/webserver96.png)
***<center>Şekil 41: Firewall Output Kuralı</center>***

</center>

Firewall output kuralı, sistemden dışarıya giden trafiği kontrol eden bir güvenlik kuralıdır. Bu kurallar, belirli IP adreslerine, protokollere veya portlara yapılan çıkış bağlantılarını kısıtlamak veya izin vermek için kullanılır. Bu örnekte, 192.168.10.151 IP adresinden 192.168.10.58'in 540 numaralı portuna giden trafik için güvenlik kuralları uygulanmıştır. ACCEPT kuralı, 192.168.10.151’den yapılan çıkış trafiğine izin verirken, DROP kuralı diğer tüm IP’lerden aynı hedefe yapılan çıkışları engellemektedir. 

Bağlantının başarılı olması için 192.168.10.151’den 192.168.10.58:540’a bağlantı kurulmalı, farklı bir IP’den denendiğinde ise başarısız olmalıdır. Ayrıca, hedef cihazın 540 numaralı portunun açık olması ve INPUT kurallarında bir kısıtlama olmaması gerekmektedir.

##### Forward Kuralı

<center>

![webserver47](/img/webserver47.png)
***<center>Şekil 42: Firewall Forward Bağlantı Sayfası</center>***

</center>

Firewall Forward Zinciri, belirli bir cihaz üzerinden geçen trafiği kontrol etmek için kullanılır. Burada anlatılan örnekte, 192.168.10.151 IP adresinden 192.168.10.156 IP adresine 520 numaralı port üzerinden yönlendirilen TCP trafiğine izin verilirken, diğer tüm kaynaklardan gelen trafik reddedilmektedir.

Bağlantıyı doğrulamak için 192.168.10.151 IP adresinden 192.168.10.156 IP adresine telnet 192.168.10.156 520 komutu ile bağlantı kurulmalıdır. Bağlantının başarılı olması beklenirken, farklı bir IP adresinden aynı işlem denendiğinde bağlantı başarısız olmalıdır.

Bu yapılandırma, yalnızca yetkilendirilmiş cihazların belirlenen porta erişmesini sağlayarak güvenliği artırmaktadır.

<center>

![webserver48](/img/webserver48.png)

</center>

<center>

![webserver49](/img/webserver49.png)
***<center>Şekil 43: Ağ Bağlantı ve Erişim Kontrolü</center>***

</center>


#### NAT Sayfası

Web server arayüzü üzerinden NAT işlemi bu sayfadan yapılır. NAT (Network Address Translation), aynı ağ içerisinde bulunan birden fazla cihazın aynı public IP’yi kullanarak internete erişebilmesini sağlayan yöntemdir.

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver50](/img/webserver50.png)
***<center>Şekil 44: NAT Sayfası</center>***

</center>

Yeni bir NAT yapılandırması için öncelikle host gateway’ın router IP’si olarak ayarlanır. Daha sonrasında NAT sayfasından “Add NAT Rule” yazısına tıklanır. Bilgilendirme ekranından “Add Rule” seçeneği ile devam edilir. WAN IP bilgisini statik veya otomatik alması action seçeneği üzerinden ayarlanır. Statik olarak ayarlamak için SNAT seçeneğini veya otomatik almak için Masquerade seçeneğini seçin. Bu ayarı seçtikten sonra, Source Address kısmına host IP bilgisi, To Destination kısmına ise WAN IP bilgisi yazılır. Port kısmına host’un WAN’a hangi port üzerinden çıkması isteniyorsa o port bilgisi girilir.

Yapılmak istenen NAT yapılandırmasına göre gerekli yerler doldurulur ve sayfanın alt kısmında bulunan “Save and Apply” yazısına tıklanır. Bu işlem tamamlandığında, router'a bağlı olan host, belirtilen port üzerinden WAN'dan erişilebilir hale gelecektir. Aktif NAT yapılandırılmaları "Connections" sekmesinde görüntülenebilir.

##### SNAT

SNAT (Source NAT), çıkış yapan ağ trafiğinin kaynak IP adresini değiştiren bir NAT yöntemidir. Genellikle, iç ağdaki cihazların belirli bir dış IP adresi üzerinden internete çıkmasını sağlamak için kullanılır. İç ağdan dış ağa erişimi yönetmek, güvenliği artırmak ve ağ adreslerini gizlemek amacıyla kullanılır.

Örneğin 192.168.1.10 IP adresine sahip bir cihazın internet trafiği, SNAT ile 5.26.182.3 gibi bir dış IP adresi üzerinden yönlendirilerek internete çıkması sağlanabilir.

<center>

![webserver52](/img/webserver52.png)
***<center>Şekil 45: İnternete Çıkarılacak Cihazın Ağ Yapılandırması</center>***

</center>

Ağ yapılandırmasında, cihazın 192.168.10.58 gateway adresini kullanarak iletişim kurulmuştur. SNAT kuralı ile 192.168.10.156 IP adresinden çıkan trafik, 81.6.111.229 adresine yönlendirilmiş ve cihazın başarılı bir şekilde internete eriştiğini doğrulanmıştır. Bu yapılandırma, internete doğrudan çıkamayan bir cihazın NAT üzerinden yönlendirilerek iletişim kurmasını sağlamaktadır.

##### DNAT

DNAT (Destination NAT), gelen ağ trafiğinin hedef IP adresini değiştiren bir NAT yöntemidir. Genellikle, dış ağdan gelen istekleri iç ağdaki belirli bir sunucuya yönlendirmek için kullanılır. Port yönlendirme, web ve uygulama sunucularına dış erişim sağlama ve yük dengeleme gibi amaçlarla kullanılır.

Örneğin, dış IP’ye gelen 8080 numaralı istekler, iç ağdaki 192.168.1.10:80 adresine yönlendirilerek, dış istemcilerin iç sunucuya erişmesi sağlanabilir.

<center>

![webserver53](/img/webserver53.png)
***<center>Şekil 46: DNAT Kuralı ile Port Yönlendirme Yapılandırması</center>***

</center>

<center>

![webserver54](/img/webserver54.png)
***<center>Şekil 47: Cihaz Ağ Yapılandırması</center>***

</center>

DM50 cihazının PPP bağlantısı kullanılarak internete çıkabilmesi için Gateway adresi olarak 192.168.10.58 tanımlanmalıdır. Telediagram üzerinden 502 numaralı port kullanılarak bağlantı kurulduğunda, trafik DNAT kuralı ile DM110 (192.168.10.156) cihazına yönlendirilmelidir. Bu yapılandırma sayesinde, dış ağdan gelen talepler DNAT aracılığıyla DM110’a yönlendirilerek bağlantı sağlanır.

#### Bridge Sayfası

Web server arayüzü üzerinden router’ın kendi arayüzleri arasında bridge kurması sağlanabilmektedir. Bu özellik sayesinde IoT cihazlarının bağlı olduğu ağları birbirine bağlanması ve bu cihazların iletişim kurması sağlanır.

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver55](/img/webserver55.png)
***<center>Şekil 48: Bridge Sayfası</center>***

</center>

Yeni bir bridge kuralı eklemek için “Add Bridge Rule” yazısına tıklanır. Bilgilendirme ekranında “Add Bridge” seçeneği ile devam edilir. Bridge kurmak istediğiniz ethernet bağlantısı seçilir ve Bridge IP adresi kısmına yeni bir IP adresi girilir. Gerekli ayarlamalar yapıldıktan sonra sayfanın alt kısmında yazan “Save & Apply” yazısına tıklanır.

<center>

![webserver56](/img/webserver56.png)
***<center>Şekil 49: Bridge Kuralı Ekleme Sayfası</center>***

</center>

Aktif Bridge kuralları "Connections" sekmesinde görüntülenebilir.

#### Port Forwarding (Port Yönlendirme) Sayfası

Web server üzerinden router’a bağlı cihazların port yönlendirilmesi sağlanabilmektedir. Bu özellik sayesinde belirli bir port numarasına gelen taleplerin, belirli bir iç IP adresine ve porta yönlendirilmesiyle gerçekleştirilir.

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver57](/img/webserver57.png)
***<center>Şekil 50: Port Yönlendirme Sayfası</center>***

</center>

Yeni bir port yönlendirme yapılandırması eklemek için “Add Port Forward” yazısına tıklanır. Bilgilendirme ekranında “Add Rule” seçeneği ile devam edilir. Yönlendirme yapılmak istenen port bilgisi server port kısmına girilir. Internal Destination Address kısmına ise router a bağlı olan cihazın ip bilgisi ve port bilgisi girilir.

Gerekli ayarlamalar yapıldıktan sonra sayfanın alt kısmında yazan “Save & Apply” yazısına tıklayın.

<center>

![webserver58](/img/webserver58.png)
***<center>Şekil 51: Port Yönlendirme Yapılandırma Sayfası</center>***

</center>

Aktif port yönlendirme yapılandırmaları "Connections" sekmesinde görüntülenebilir.

<center>

![webserver59](/img/webserver59.png)
***<center>Şekil 52: Port Yönlendirme Yapılandırması</center>***

</center>

<center>

![webserver60](/img/webserver60.png)
***<center>Şekil 53: Cihaz TCP Bağlantı Ayarları</center>***

</center>

Burada anlatılan örnekte, 4124 portuna gelen dış ağ trafiği, 192.168.10.58 IP adresindeki cihazın 502 portuna yönlendirilmiştir. Dış ağdan gelen bağlantılar 4124 portunu kullanarak yönlendirilirken, iç ağda 192.168.10.58 cihazı 502 portu üzerinden bağlantıya hazır hale getirilmiştir. Bu yapılandırma sayesinde, dış ağdan gelen isteklerin iç ağdaki belirli bir cihaza yönlendirilmesi sağlanmıştır.

### Yükleme Yöneticisi Sayfası

Telediagram programı kullanmadan Web Server Arayüzünden DM50 cihazına firmware, proje ve SSL sertifikası yüklemeleri bu sayfadan gerçekleştirilir. Bu sayfada Web Server Arayüzü üzerinden yapılan dosya yüklemelerinin son güncelleme tarih ve saat bilgisi geçmiş sekmesinde yer almaktadır.

<center>

![webserver61](/img/webserver61.png)
***<center>Şekil 54: Yükleme Yöneticisi Sayfası</center>***

</center>

Dosya yükleme sayfasına Administrator ve Teknisyen kullanıcısı erişim sağlayabilmektedir.

* Proje yükleme kısmından cihaza telediagram üzerinden hazırlanan proje dosyası yüklenir. Yüklenilmek istenen dosyanın uzantısı ".bin" olmalıdır.

* Firmware yükleme kısmından cihazın firmware güncellemeleri yapılır. Yüklenilmek istenen core dosyası kabul edilir.

* SSL sertifikasını güncelle kısmından SSL sertifikalarının güncellemeleri yapılır. Yüklenilmek istenen dosyaların uzantısı ".crt , .pem " olmalıdır.

Cihaza dosya yüklemek için yüklenmek istenen dosya türü kısmından dosya seç tıklanır ve ilgili dosya seçilir. Uygun dosya seçimi yapıldıktan sonra sağ tarafta yer alan yükle seçeneğine tıklanır.

### Cihaz Günlükleri Sayfası

Cihaza ait log kayıt bilgilerine bu sayfadan ulaşılır. Cihaz günlükleri sayfası protokol log ayarlarının yapıldığı ayarlar sekmesi, sistem günlükleri, protokol günlükleri ve SD kart günlükleri olmak üzere 4 sekmeden oluşmaktadır. Sekmeler arasında geçişler sayfanın üst kısmında bulunan ayarlar, sistem günlükleri, protokol günlükleri ve SD kart günlükleri yazılarına tıklayarak gerçekleştirilmektedir. Seçilen sekmenin yazısı koyu gri renk olmaktadır.

Cihaz log sayfasına sadece Administrator kullanıcısı erişim sağlayabilmektedir.

#### Ayarlar Sekmesi

Cihaz log ayarları sekmesinden cihaz içerisine yüklenen projenin IEC104, MQTT, DNP3 ve IEC61850 protokol logları açılıp, kapatılabilmektedir.

Protokol loglarını açmak için protokollerin yanında yer alan kaydırma butonu seçilmelidir. Seçim gerçekleştikten sonra burada yer alan simge mavi renge dönecektir.

Burada loglaması açılan protokol logları, protokol logları sekmesinden görüntülenmektedir.

**Not:** Protokol logları açılmayan protokoller, protokol log sekmesi filtresinde gözükmeyecektir.

**Not:** Protokol loglarını, protokol log sekmesinde izleyebilmek için telediagram projesinde yer alan blokların blok özel ayarlarından izleme ve değiştirme seçeneğinin işaretli olması gerekmektedir.

<center>

![webserver62](/img/webserver62.png)
***<center>Şekil 55: Cihaz Günlükleri Ayarlar Sekmesi</center>***

</center>

#### Sistem Günlükleri Sekmesi

Cihaza ait sistem logları bu sekmeden izlenmektedir. Ekranda görüntülenen sistem logları dışa aktar seçeneği ile ".txt" formatında dışa aktarılabilmektedir.

<center>

![webserver63](/img/webserver63.png)
***<center>Şekil 56: Sistem Günlükleri Sekmesi</center>***

</center>

#### Protokol Günlükleri Sekmesi

Protokol günlükleri sekmesinden, cihazın içerisinde yer alan projenin protokol logları izlenmektedir. Bu sayfada izleme yapabilmek için başlık 4.7.1 Ayarlar sekmesinde görüntülemek istenilen protokol loglarının açılması gerekmektedir.

Sayfada görüntülenen protokol logları filtrelenebilmektedir. Bunun için sağ üst köşede yer alan filtreleme seçeneği kullanılmaktadır.

* Tümü seçildiğinde, loglaması açılan tüm protokol logları ekranda görüntülenecektir.

* IEC104 seçildiğinde, sadece IEC104 protokolü ile ilgili loglar ekranda görüntülenecektir.

* MQTT seçildiğinde, sadece MQTT protokolü ile ilgili loglar ekranda görüntülenecektir.

* DNP3 seçildiğinde, sadece DNP3 protokolü ile ilgili loglar ekranda görüntülenecektir.

* IEC61850 seçildiğinde, sadece IEC61850 protokolü ile ilgili loglar ekranda görüntülenecektir.

Yenile butonuna tıklandığında filtre ile seçilen protokol logları sayfası yenilenir.

Görüntülenen loglar dışa aktar seçeneği ile ".txt" formatında dışa aktarılabilmektedir.

<center>

![webserver64](/img/webserver64.png)
***<center>Şekil 57: Protokol Günlükleri Sekmesi</center>***

</center>

#### SD Kart Günlükleri Sekmesi

SD Kart Günlükleri sekmesinden, cihazın içerisine SD kart takılı olduğu sürece, içinde oluşan log dosyasına web sunucusu üzerinden erişim sağlanabilir. Bu sekmeden log dosyası sadece CSV formatında indirilebilir ve silinebilir. Ayrıca, dosyanın son güncellenme tarihi ve boyutu da görülebilir.

<center>

![webserver65](/img/webserver65.png)
***<center>Şekil 58: SD Kart Günlükleri Sekmesi</center>***

</center>

### Terminal Sayfası

Terminal sayfası üzerinden cihaza AT komutu gönderilebilmektedir. Cihaza gönderilebilecek AT komut listesine [buradan ulaşabilirsiniz](https://docs.mikrodev.com/tr/docs/Mikrodiagram-ATCommands/).

Bu sayfaya sadece Administrator kullanıcısı erişim sağlayabilmektedir.

<center>

![webserver66](/img/webserver66.png)
***<center>Şekil 59: Terminal Sayfası</center>***

</center>

### Gerçek Zamanlı Lojikler Sayfası

Cihaza yüklenen projenin blok parametre değerleri okunabilmekte ve değer atamaları gerçek zamanlı lojikler sayfasından yapılabilmektedir.

Bu sayfaya Web Server Arayüzünde tanımlanan tüm kullanıcılar erişim sağlayabilmektedir.

Sayfada görüntülenecek hat etiketi sayısı sayfanın sağ altında yer alan page size kısmından seçilebilmektedir.

Görüntülenen blok parametreleri sayfanın sağ üst köşesinde yer alan export seçeneği ile CSV formatında dışa aktarılabilmektedir.

<center>

![webserver67](/img/webserver67.png)
***<center>Şekil 60: Gerçek Zamanlı Lojikler Sayfası</center>***

</center>

* Hat Etiketi: Blok hat etiketinin bulunduğu kısımdır.

* Type: İlgili bloğun veri tipinin yazdığı kısımdır.

* Değer: İlgili bloğun blok değerinin yazdığı kısımdır.

Değer atamaları; ilgili blok hat etiketinin sağında yer alan değer kısmından yapılmaktadır. Değer ataması yapılacak ilgili blok hat etiketinin değer kısmına çift tıklanıldığında değer girme penceresi aktif olmaktadır. Buraya değer girilir ve ENTER tuşuna basılır.

<center>

![webserver68](/img/webserver68.png)
***<center>Şekil 61: Blok Hat Etiketine Değer Gönderme</center>***

</center>

### Hesap Tercihleri Sayfası

Web server’a giriş yapan tüm kullanıcıların erişim sağlayabildiği ve kullanıcı bilgilerini düzenleyebildiği bir sayfadır. Bu sayfada kullanıcılar, kişisel bilgilerini güncelleyebilir, şifre değişiklikleri yapabilir ve diğer hesap ayarlarını yönetebilirler. Bu sayede, her kullanıcı kendi hesap bilgilerini kolayca yönetebilir ve güncel tutabilir.

<center>

![webserver69](/img/webserver69.png)
***<center>Şekil 62: Hesap Tercihleri Sayfası</center>***

</center>

### Uygulama Ayarları Sayfası

Kullanıcılara çeşitli kişiselleştirme ve uygulama tercihlerini yönetme olanağı sunar. Bu sayfadan uygulama teması seçebilir ve uygulama dilini değiştirebilirsiniz. Bu sayfa, kullanıcıların web arayüzünü kendi ihtiyaç ve tercihlerine göre özelleştirmelerini sağlayarak, daha kullanıcı dostu bir deneyim sunmasını sağlamaktadır.

Bu sayfaya Web Server Arayüzünde tanımlanan tüm kullanıcılar erişim sağlayabilmektedir.

<center>

![webserver70](/img/webserver70.png)
***<center>Şekil 63: Uygulama Ayarları Sayfası</center>***

</center>

## DM50 WEB SERVER ARAYÜZÜNE OPERATÖR TEKNİSYEN VE MİSAFİR KULLANICISI OLARAK GİRİŞ YAPMA

### Operatör Olarak Giriş Yapma

Operatör olarak giriş yapabilmek için öncelikle administrator kullanıcısı kullanıcılar sayfasından operatör tipinde bir kullanıcı oluşturmalıdır.

Admin oluşturduğu her operatör kullanıcısına farklı Erişim IP verir.

Operatörler sadece kendilerine tanımlanan IP’lerden DM50 web server arayüzüne erişim sağlayabilmektedir. Operatör kullanıcısı kendisine tanımlanan IP’den farklı bir bilgisayar IP ile web server’a giriş yapmak isterse "IP'nin erişim yetkisi yok!" uyarısını alır ve web server’a giriş yapamaz.

<center>

![webserver71](/img/webserver71.png)
***<center>Şekil 64: IP'nin Erişim Yetkisi Yok Uyarısı</center>***

</center>

**Not:** Operatör kullanıcısı olarak DM50 web server arayüzüne giriş yapabilmek için öncelikle bilgisayar IP’sinin adminin tanımlamış olduğu Erişim IP’sine ayarlanmalıdır. Aksi halde DM50 web server arayüzüne erişim sağlanamayacaktır.

### Teknisyen Olarak Giriş Yapma

Teknisyen olarak giriş yapabilmek için öncelikle administrator kullanıcısı kullanıcılar sayfasından teknisyen tipinde bir kullanıcı oluşturmalıdır.

Admin oluşturduğu her teknisyen kullanıcısına farklı Erişim IP verir.

Teknisyenler sadece kendilerine tanımlanan IP’lerden DM50 web server arayüzüne erişim sağlayabilmektedir. Teknisyen kullanıcısı kendisine tanımlanan IP’den farklı bir bilgisayar IP ile web server’a giriş yapmak isterse "IP'nin erişim yetkisi yok!" uyarısını alır ve web server’a giriş yapamaz.

**Not:** Teknisyen kullanıcısı olarak DM50 web server arayüzüne giriş yapabilmek için öncelikle bilgisayar IP’sinin adminin tanımlamış olduğu Erişim IP’sine ayarlanmalıdır. Aksi halde DM50 web server arayüzüne erişim sağlanamayacaktır.

### Misafir Olarak Giriş Yapma

Misafir olarak giriş yapabilmek için öncelikle administrator kullanıcısı kullanıcılar sayfasından misafir tipinde bir kullanıcı oluşturmalıdır.

Admin oluşturduğu her misafir kullanıcısına farklı Erişim IP verir.

Misafirler sadece kendilerine tanımlanan IP’lerden DM50 web server arayüzüne erişim sağlayabilmektedir. Misafir kullanıcısı kendisine tanımlanan IP’den farklı bir bilgisayar IP ile web server’a giriş yapmak isterse "IP'nin erişim yetkisi yok!" uyarısını alır ve web server’a giriş yapamaz.

**Not:** Misafir kullanıcısı olarak DM50 web server arayüzüne giriş yapabilmek için öncelikle bilgisayar IP’sinin adminin tanımlamış olduğu Erişim IP’sine ayarlanmalıdır. Aksi halde DM50 web server arayüzüne erişim sağlanamayacaktır.

## DM50 WEB SERVER ARAYÜZÜNDEN ÇIKIŞ YAPMA

Sağ üst köşede yer alan kullanıcı simgesine tıklanıldığında açılan seçeneklerden Logout seçeneğini seçerek web server arayüzünden güvenli çıkış yapabilirsiniz.

<center>

![webserver72](/img/webserver72.png)
***<center>Şekil 65: Web Server Arayüzünden Çıkış Yapma</center>***

</center>