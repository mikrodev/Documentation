---
title: ViewPLUS SCADA MQTT Kanalı Uygulama Notu
---


### Mosquitto Kurulumu

ViewPLUS SCADA yazılımı MQTT üzerinden haberleşebilmesi için MQTT broker ile SCADA sunucusu aynı bilgisayar üzerinden başlatılmalıdır.

Bu yüzden SCADA sunucusunun çalışacağı bilgisayara öncelikle MQTT broker ı olan Mosquitto programının kurulması gerekmektedir.

Mosquitto broker ı indirmek için [buraya tıklayınız](https://mosquitto.org/download/).

İndirme bağlantısında yer alan linklerden bilgisayarınıza uygun olana tıklayın ve indirilen exe uygulamasını çalıştırın.

Mosquitto kurulum sihirbazında next seçeneğine tıklayın. 

<center>

![mosquitto_image1](/img/mosquitto_image1.png)

</center>

Mosquitto programında indirmek istediğiniz bileşenleri seçin ve next seçeneğine tıklayın. 

<center>

![mosquitto_image2](/img/mosquitto_image2.png)

</center>

Programın kurulacağı dosya yolunu seçin ve install seçeneğine tıklayın. 

<center>

![mosquitto_image3](/img/mosquitto_image3.png)

</center>

Kurulum tamamlandı penceresinde finish seçeneğine tıklayın ve ekrandan çıkın. 

<center>

![mosquitto_image4](/img/mosquitto_image4.png)

</center>

Kurulum tamamlandıktan sonra mosquitto brokerı nı çalıştırmadan önce programın konfigürasyon ayarlarının yapılması gerekmektedir.

#### Mosquitto Konfigürasyon Ayarları

Programın kurulmuş olduğu dosya yoluna gidilir.

Kurulum esnasında dosya yolunu değiştirmediyseniz Yerel Disk (C:) nin içinde Program Files altında yer almaktadır.

<center>

![mosquitto_image5](/img/mosquitto_image5.png)

</center>

“mosquitto” adındaki dosya klasörünü açın, klasör içerisinde yer alan mosquitto.conf isimli dosyayı Notepad ++ uygulaması ile düzenle yazısına tıklayın. (Notepad++ uygulamasının bilgisayarınızda kurulu olması gerekmektedir.)

<center>

![mosquitto_image6](/img/mosquitto_image6.png)

</center>

Açılan dosya içerisinden Security başlığını bulun ve bu başlık altında yer alan 

*#allow_anonymous false* ifadesini silin.

Bir satır boşluk bırakarak 

*allow_anonymous true*          
*listener 1883*

ifadesini ekleyin.

<center>

![mosquitto_image7](/img/mosquitto_image7.png)

</center>

Böylelikle MQTT için tanımlanan 1883 default portu broker ın ayarlarından da tanımlamış olduk.

Düzenlemiş olduğumuz dosyayı kaydedip, dosyayı kapatın.

#### Mosquitto Broker Çalıştırma

Konfigürasyon ayarlarını yaptıktan sonra komut satırını yönetici olarak çalıştırın.

Başlat -> Arama çubuğuna cmd yazın -> En üstte çıkan komut istemi uygulaması üzerine gelin ve sağ tıklayın -> Yönetici olarak çalıştır seçeneğine tıklayın.

<center>

![mosquitto_image78](/img/mosquitto_image78.png)

</center>

Ekranda açılan pencerede evet seçeneğine tıklayarak devam edin.

Açılan komut penceresinde 

*net start mosquitto*

komutunu yazın ve enter a tıklayın.

*Mosquitto Broker hizmeti başlatılıyor.*           
*Mosquitto Broker hizmeti başarıyla başlatıldı yazısı ekranda yazmalıdır.*

<center>

![mosquitto_image79](/img/mosquitto_image79.png)

</center>

Görev yöneticisini açın ve arka plan işlemleri kısmından mosquitto uygulamasını bulun. Bilgisayar üzerinden mosquitto broker ının açıldığından emin olun. 

<center>

![mosquitto_image10](/img/mosquitto_image10.png)

</center>

#### Çalışan Mosquitto Broker Kapatma

Bilgisayar üzerinde çalışan mosquitto broker ı kapatmak için iki yol bulunmaktadır. 

**Birinci yol:** Görev yöneticisi üzerinden mosquitto broker uygulamasını kapatabilirsiniz. Bunun için aşağıdaki adımları takip edin.

Görev yöneticisini açın, arka plan işlemleri kısmından mosquitto.exe uygulamasını bulun. 

<center>

![mosquitto_image10](/img/mosquitto_image10.png)

</center>

mosquitto.exe uygulamasının üzerine gelin sağ tıklayın görevi sonlandır seçeneğini seçin. 

**İkinci yol:** Komut satırı üzerinden mosquitto broker uygulamasını kapatabilirsiniz. Bunun için aşağıdaki adımları takip edin.

Başlat -> Arama çubuğuna cmd yazın -> En üstte çıkan komut istemi uygulaması üzerine gelin ve sağ tıklayın -> Yönetici olarak çalıştır seçeneğine tıklayın.

<center>

![mosquitto_image78](/img/mosquitto_image78.png)

</center>

Ekranda açılan pencerede evet seçeneğine tıklayarak devam edin.

Açılan komut penceresinde 

*net stop mosquitto*

komutunu yazın ve enter a tıklayın.

*Mosquitto Broker hizmeti durduruluyor.*              
*Mosquitto Broker hizmeti başarıyla durduruldu yazısı ekranda yazmalıdır.*

<center>

![mosquitto_image81](/img/mosquitto_image81.png)

</center>

### ViewPLUS SCADA Etiket Kanal Editörü

#### MQTT Client Kanal Tanımlamaları 

Mikrodev Client, yayıncı birimlerinden gelen mesajları alır ve abone olunan birimlere iletir. Mesaj gönderirken, mesajı alacak olan müşteri birimlerini filtrelemek için konuları kullanır.

Mikrodev Client'ın çalışma yapısı aşağıdaki resimde anlatılmaktadır.

<center>

![mosquitto_image14](/img/mosquitto_image14.png)
***<center>Şekil 1: Mikrodev MQTT Client Genel Yapısı</center>***

</center>

Mikrodev MQTT Client aşağıdaki veri türlerini desteklemektedir.

![mosquitto_image82](/img/mosquitto_image82.png)

<center>

![mosquitto_image83](/img/mosquitto_image83.png)
***<center>Şekil 2: MQTT Kanal Tanımlamaları</center>***

</center>

MQTT kanalında aşağıdaki ayarların yapılması gerekmektedir.

*Payload Format: 1*         
*ServerIP: 127.0.0.1*      
*ServerPort: 1883*       
*Listen Port: 1081*         
*Clean Session: 115200*        
*Socket Type: Unencrypted*        
*KeepAlive: 6000*          

##### SCADA Üzerinden Bir Değer Yayınlama (Publish Etme)

Teçhizat: Cihaz ID bilgisi buraya girilir. (Bu kısım boşta bırakılabilir.)

Topic: Yayın yapacağı konu bu kısma girilir.

Sub/Pub: Publish, Subscribe veya her ikisi birden seçimleri buradan yapılır. Bu başlık altında değer yayınlama anlatıldığı için Publish seçeneği seçilmelidir.

Variable Name: Değişken adı buraya yazılır. Burada bahsi geçen değişken adı, PLC projesindeki etiketin hat etiketi ismidir.

Variable Type: Değişken tipi buradan seçilir. ViewPLUS SCADA sadece BOOL ve DBL değişken tiplerini desteklemektedir.

VarSize: Değişken tipine göre değişken boyutunu SCADA programı otomatik atar.

**Not:** ViewPLUS SCADA editörü etiket türü olarak iki farklı değişken tipini desteklemektedir. Bunlar Boolen ve Double veri tipleridir.

<center>

![mosquitto_image84](/img/mosquitto_image84.png)
***<center>Şekil 3: Yayın Yapma Etiket Tanımlamaları</center>***

</center>

#### SCADA Üzerinden Bir Değer Yayınlama (Publish Etme) Uygulama Örneği

**Not:** Bu örnekte MQTT Box programı kullanarak simülasyon yapılacaktır. 

Windows için MQTT Box programını indirmek için [buraya tıklayınız.](https://apps.microsoft.com/store/detail/mqttbox/9NBLGGH55JZG?hl=en-us&gl=us)

ViewPLUS SCADA  editörünü açın. Dosya -> Yeni Dosya ya da Proje seçeneğine tıklayın. Yeni bir proje oluşturun. 

<center>

![mosquitto_image85](/img/mosquitto_image85.png)

</center>

Açılan ekran üzerinden Projeler -> Uygulamaları seçin ve sağ altta yer alan seç yazısına tıklayın.

<center>

![mosquitto_image86](/img/mosquitto_image86.png)

</center>

Açılan ekrandan projenin adını ve proje dosyasının kaydolacağı dosya konumu seçin. Next yazısına tıklayın.

<center>

![mosquitto_image87](/img/mosquitto_image87.png)

</center>

Veritabanı ayarlarından PostgreSQL kurulum aşamasında belirlediğiniz şifreyi Veritabanı kullanıcı şifresi kısmına girin ve bağlantıyı test et yazısına tıklayın. Şifreyi doğru girdiğiniz takdirde ekranda Ok yazısı belirecektir. Ok yazısını gördükten sonra next yazısına tıklayın.

<center>

![mosquitto_image88](/img/mosquitto_image88.png)

</center>

Görünüm ayarları sayfasından SCADA tasarım sayfası ayarlarını yapabilirsiniz. Bu kısım proje oluşturulduktan sonra da yapılabilmektedir. Ayarlamaları yaptıktan sonra next yazısına tıklayın.

<center>

![mosquitto_image89](/img/mosquitto_image89.png)

</center>

Özet ekranından proje ile ilgili genel bilgiler yer almaktadır finish yazısına tıkladıktan sonra yeni bir proje oluşturulmuş olmaktadır.

<center>

![mosquitto_image90](/img/mosquitto_image90.png)

</center>

Yeni hazırlanan projenin Veritabanı ile bağlantısının kurulup kurulmadığı bilgisi ekranda çıkan bilgilendirme ekranından kontrol edilmektedir.

<center>

![mosquitto_image91](/img/mosquitto_image91.png)

</center>

Yeni oluşturduğumuz proje ismi projeler altında gözükecektir. 

<center>

![mosquitto_image92](/img/mosquitto_image92.png)

</center>

SCADA üzerinden MQTT Client kanalı kullanarak değer yayınlamak için öncelikle etiket kanal editörünü açın.

<center>

![mosquitto_image93](/img/mosquitto_image93.png)

</center>

None yazan ifadenin üzerine sağ tıklayın ve yeni kanal seçeneğini seçin.

<center>

![mosquitto_image94](/img/mosquitto_image94.png)

</center>

Açılan pop up ekranından kanal adını girin, protokol tipi kısmından ise MQTT_CLIENT seçeneğini seçin. Ok yazısına tıklayın.

<center>

![mosquitto_image95](/img/mosquitto_image95.png)

</center>

Kanal ayarlarını Şekil 2 de anlatıldığı gibi ayarlayın. 

<center>

![mosquitto_image96](/img/mosquitto_image96.png)

</center>

Oluşturulan bu kanal altında yeni bir etiket eklemek için; hazırlanan MQTT kanalının üzerine gelin, sağ tık yapın. Yeni etiket seçeneğine tıklayın.

<center>

![mosquitto_image97](/img/mosquitto_image97.png)

</center>

Açılan pop up ekranında yeni bir etiket adı girin ve ok yazısına tıklayın.

<center>

![mosquitto_image98](/img/mosquitto_image98.png)

</center>

Oluşturulan etiketi kanal altında görüntülemek için kanal adının sol tarafında yer alan ok tuşuna basın. Burada kanal altında yer alan etiketler yer almaktadır. Hazırlanan etiketin üzerine tıklayın. 

Başlık 2.1.1 de anlatılana göre etiket tanımlamalarını yapın. Yapılan değişikliklerin kaydedilmesi için CTRL + S tuşuna veya etiket ekranının altında yer alan etiket verisini kaydet yazısına tıklayın. Değişiklik kaydedildiğinde etiket adının sol kenarında beliren ünlem simgesi kaybolacaktır. 

<center>

![mosquitto_image99](/img/mosquitto_image99.png)

</center>

SCADA programı üzerinden değer yayınlamak için SCADA sayfasına display bileşeni eklenmelidir. 

Sol kenarda yer alan SCADA editörü yazısına tıklayın. 

<center>

![mosquitto_image100](/img/mosquitto_image100.png)

</center>

Proje adının altında Sca yazısı bulunmaktadır, bu yazının sol kenarındaki ok a tıklayın. Burada intro.sca ifadesi yer alacaktır. Bu dosya bizim SCADA ekranlarını tasarladığımız her projede default olarak gelen SCADA sayfasıdır. intro.sca ifadesi üzerine gelin ve çift tıklayın Bu işlem sonrasında sağ kenarda antetli kağıt açılacaktır.

<center>

![mosquitto_image101](/img/mosquitto_image101.png)

</center>

Sayfaya SCADA bileşeni ekleyebilmek için Projeler yazısının yanında yer alan paneli ikiye böl simgesine tıklayın.

<center>

![mosquitto_image102](/img/mosquitto_image102.png)

</center>

Sol kenarda ikinci bir projeler yazısı belirecektir buradan projeler yazısına tıklayarak SCADA Bileşenleri seçeneğini seçin. 

<center>

![mosquitto_image103](/img/mosquitto_image103.png)

</center>

SCADA bileşenleri içinden display kategorisini bulun ve herhangi bir display a tıklayın. 

<center>

![mosquitto_image104](/img/mosquitto_image104.png)

</center>

Sağ tarafta yer alan antetli kağıdın herhangi bir noktasına bırakın.

<center>

![mosquitto_image105](/img/mosquitto_image105.png)

</center>

Bu display üzerinden değer yayınlamak için sağ tarafta yer alan nesne özellikleri kısmından olaylar ifadesini bulun. 

Olay Tipi: Klavyeden değer girebilmek için bu kısım tuş basıldı seçilmelidir.

Olay Aksiyonu: Burada değeri yükle seçilmelidir.

Hedef Olay Etiketi: Mqtt kanalında hazırladığımız etiket bu kısımda seçilmelidir. Etiket seçimi yapabilmek için hedef olay etiketi yazısının yanında yer alan büyüteç simgesine tıklanmalıdır.

<center>

![mosquitto_image106](/img/mosquitto_image106.png)

</center>

Display üzerinden girilen değeri görebilmek için etiketler kısmında yer alan yazı etiketi kısmından aynı etiketin girilmesi gerekmektedir.

<center>

![mosquitto_image107](/img/mosquitto_image107.png)

</center>

Sunucuyu başlatmadan önce düzenleme yapılan tüm ekranları kaydedip kapatın ve bilgisayarda MQTT broker ın çalıştığından emin olun. (Mosquitto.exe çalışıyor olması gerekmektedir.)

Araçlar -> Sunucuyu başlata tıklayın.

<center>

![mosquitto_image108](/img/mosquitto_image108.png)

</center>

Projede ilk defa sunucuyu başlat seçeneği seçildiğinde Veritabanı ayarları ekranı gelmektedir. PostgreSQL kurulumu sırasında oluşturduğunuz şifreyi Veritabanı kullanıcı şifresi kısmına girin ve bağlantıyı test et ifadesine tıklayın. 

Sunucu programının çalıştığını göreceksiniz.

<center>

![mosquitto_image109](/img/mosquitto_image109.png)

</center>

Araçlar -> Start View PLUS Client yazısına tıklayın.

Default olarak gelen client oturum açma bilgileri aşağıda gibidir.

Kullanıcı: admin       
Şifre: mikrodev            
Sunucu Adresi: 127.0.0.1:3344          

<center>

![mosquitto_image110](/img/mosquitto_image110.png)

</center>

Yukarıdaki bilgiler girilip oturum aç yazısına tıklanıldığında tasarımı yapılan sayfanın ekrana geldiğini göreceksiniz. Display üzerinden değer gönderebilmek için display üzerine gelip sağ tık yapın. Değer ayarla ifadesine tıklayın.

<center>

![mosquitto_image111](/img/mosquitto_image111.png)

</center>

Açılan ekrandan değer girin ve tamam a basın.

<center>

![mosquitto_image112](/img/mosquitto_image112.png)

</center>

Publish edilen değerleri görebilmek için bu uygulamada MQTT Box programı kullanılacaktır. 

MQTT Box uygulamasını açın. Create MQTT Client ifadesine tıklayın.

<center>

![mosquitto_image113](/img/mosquitto_image113.png)

</center>

MQTT Client Name: İstemcinize bir isim verin. 

Protocol: mqtt/tcp seçin.        

Host: Local bilgisayarda broker açık olduğu için 127.0.0.1:1883 ifadesini yazın.       

Save yazısına tıklayın.       

<center>

![mosquitto_image114](/img/mosquitto_image114.png)

</center>

Broker ile bağlantısının kurulduğunu açılan ekranda connected yazısından takip edebilirsiniz.

<center>

![mosquitto_image115](/img/mosquitto_image115.png)

</center>

SCADA tarafından yayınlanan değerleri görebilmek için Topic to subscribe kısmından veya üst tarafta yer alan add subscriber kısmı kullanılmaktadır.

<center>

![mosquitto_image116](/img/mosquitto_image116.png)

</center>

Yayın için SCADA editöründe oluşturulan topic adını girin ve subscribe yazısına tıklayın. (QoS 0 seçili kalmalıdır.)

<center>

![mosquitto_image117](/img/mosquitto_image117.png)

</center>

Client ekranından gönderilen her değeri MQTT Box uygulamasından takip edin.

<center>

![mosquitto_image51](/img/mosquitto_image51.png)

</center>

SCADA tarafından yayın yapılan değerin payload yapısı: {"142536": { "deger": {"V": 3640.0000 }} }

Burada yer alan 142536 ifadesi, etiket tanımlamalarında girilen teçhizat numarası;

**Not:** Etiket tanımlamalarında teçhizat numarası kısmı boş bırakılırsa değerin payload yapısı:             
{"": { "deger": {"V": 3640.0000 }} } şeklinde olacaktır.

deger ifadesi, etiket tanımlamalarında girilen variable name (değişken adı);

V: 3640.0000 ifadesi ise yayın yapılan değeri ifade etmektedir.

#### SCADA Üzerinden Bir Değere Abone Olma (Subscribe Olma)

Teçhizat: Cihaz ID bilgisi buraya girilir. (Bu kısım boşta bırakılabilir.)

Topic: Abone olunacak konu bu kısma girilir.

Sub/Pub: Publish, Subscribe veya her ikisi birden seçimleri buradan yapılır. Bu başlık altında değere abone olma anlatıldığı için Subscribe seçeneği seçilmelidir.

Variable Name: Değişken adı buraya yazılır. Burada bahsi geçen değişken adı, PLC projesindeki etiketin hat etiketi ismidir.

Variable Type: Değişken tipi buradan seçilir. ViewPLUS SCADA sadece BOOL ve DBL değişken tiplerini desteklemektedir.

VarSize: Değişken tipine göre değişken boyutunu SCADA programı otomatik atar.

**Not:** ViewPLUS SCADA editörü etiket türü olarak iki farklı değişken tipini desteklemektedir. Bunlar Boolen ve Double veri tipleridir.

<center>

![mosquitto_image119](/img/mosquitto_image119.png)
***<center>Şekil 4: Abone Olma Etiket Tanımlamaları</center>***

</center>

#### SCADA Üzerinden Bir Değere Abone Olma (Subscribe Olma) Uygulama Örneği

**Not:**  Bu örnekte MQTT Box programı kullanarak simülasyon yapılacaktır. 

Windows için MQTT Box programını indirmek için [buraya tıklayınız.](https://apps.microsoft.com/store/detail/mqttbox/9NBLGGH55JZG?hl=en-us&gl=us) 

ViewPLUS Scada editörünü açın. Dosya -> Yeni Dosya ya da Proje seçeneğine tıklayın. Yeni bir proje oluşturun. 

<center>

![mosquitto_image120](/img/mosquitto_image120.png)

</center>

Açılan ekran üzerinden Projeler -> Uygulamaları seçin ve sağ altta yer alan seç yazısına tıklayın.

<center>

![mosquitto_image121](/img/mosquitto_image121.png)

</center>

Açılan ekrandan projenin adını ve proje dosyasının kaydolacağı dosya konumu seçin. Next yazısına tıklayın.

<center>

![mosquitto_image122](/img/mosquitto_image122.png)

</center>

Veritabanı ayarlarından PostgreSQL kurulum aşamasında belirlediğiniz şifreyi Veritabanı kullanıcı şifresi kısmına girin ve bağlantıyı test et yazısına tıklayın. Şifreyi doğru girdiğiniz takdirde ekranda Ok yazısı belirecektir. Ok yazısını gördükten sonra next yazısına tıklayın.

<center>

![mosquitto_image123](/img/mosquitto_image123.png)

</center>

Görünüm ayarları sayfasından Scada tasarım sayfası ayarlarını yapabilirsiniz. Bu kısım proje oluşturulduktan sonra da yapılabilmektedir. Ayarlamaları yaptıktan sonra next yazısına tıklayın.

<center>

![mosquitto_image124](/img/mosquitto_image124.png)

</center>

Özet ekranından proje ile ilgili genel bilgiler yer almaktadır finish yazısına tıkladıktan sonra yeni bir proje oluşturulmuş olmaktadır.

<center>

![mosquitto_image125](/img/mosquitto_image125.png)

</center>

Yeni hazırlanan projenin Veritabanı ile bağlantısının kurulup kurulmadığı bilgisi ekranda çıkan bilgilendirme ekranından kontrol edilmektedir.

<center>

![mosquitto_image126](/img/mosquitto_image126.png)

</center>

Yeni oluşturduğumuz proje ismi projeler altında gözükecektir. 

<center>

![mosquitto_image127](/img/mosquitto_image127.png)

</center>

SCADA üzerinden MQTT Client kanalı kullanarak yayınlanan bir değere abone olmak için öncelikle etiket kanal editörünü açın.

<center>

![mosquitto_image128](/img/mosquitto_image128.png)

</center>

None yazan ifadenin üzerine sağ tıklayın ve yeni kanal seçeneğini seçin.

<center>

![mosquitto_image129](/img/mosquitto_image129.png)

</center>

Açılan pop up ekranından kanal adını girin, protokol tipi kısmından ise MQTT_CLIENT seçeneğini seçin. Ok yazısına tıklayın.

<center>

![mosquitto_image130](/img/mosquitto_image130.png)

</center>

Kanal ayarlarını Şekil 2 de anlatıldığı gibi ayarlayın. 

<center>

![mosquitto_image131](/img/mosquitto_image131.png)

</center>

Yeni oluşturulan MQTT kanalının üzerine gelin, sağ tık yapın. Yeni etiket seçeneğine tıklayın.

<center>

![mosquitto_image132](/img/mosquitto_image132.png)

</center>

Açılan pop up ekranında yeni bir etiket adı girin ve ok yazısına tıklayın.

<center>

![mosquitto_image133](/img/mosquitto_image133.png)

</center>

Oluşturulan etiketi kanal altında görüntülemek için kanal adının sol tarafında yer alan ok tuşuna basın. Burada kanal altında yer alan etiket yer almaktadır. Hazırlanılan etiketin üzerine tıklayın. 

Başlık 2.1.1 de anlatılana göre etiket tanımlamaları yapın. Yapılan değişikliklerin kaydedilmesi için CTRL + S tuşuna veya etiket ekranının altında yer alan etiket verisini kaydet yazısına tıklayın. Değişiklik kaydedildiğinde etiket adının sol kenarında beliren ünlem simgesi kaybolacaktır. 

<center>

![mosquitto_image134](/img/mosquitto_image134.png)

</center>

SCADA programı üzerinden abone olunan değeri takip edebilmek için SCADA sayfasına display bileşeni eklenmelidir. 

Sol kenarda yer alan SCADA editörü yazısına tıklayın. 

<center>

![mosquitto_image135](/img/mosquitto_image135.png)

</center>

Proje adının altında Sca yazısı bulunmaktadır, bu yazının sol kenarındaki ok a tıklayın. Burada intro.sca ifadesi yer alacaktır. Bu dosya bizim SCADA ekranlarını tasarladığımız her projede default olarak gelen SCADA sayfasıdır. intro.sca ifadesi üzerine gelin ve çift tıklayın. Bu işlem sonrasında sağ kenarda antetli kağıt açılacaktır.

<center>

![mosquitto_image136](/img/mosquitto_image136.png)

</center>

Sayfaya SCADA bileşeni ekleyebilmek için Projeler yazısının yanında yer alan paneli ikiye böl simgesine tıklayın. 

<center>

![mosquitto_image137](/img/mosquitto_image137.png)

</center>

Sol kenarda ikinci bir projeler yazısı belirecektir buradan projeler yazısına tıklayarak SCADA Bileşenleri seçeneğini seçin. 

<center>

![mosquitto_image138](/img/mosquitto_image138.png)

</center>

SCADA bileşenleri içinden display kategorisini bulun ve herhangi bir display a tıklayın. 

<center>

![mosquitto_image139](/img/mosquitto_image139.png)

</center>

Sağ tarafta yer alan antetli kağıdın herhangi bir noktasına bırakın.

<center>

![mosquitto_image140](/img/mosquitto_image140.png)

</center>

Bu display üzerinden abone olunan değeri takip etmek için etiketler kısmında yer alan yazı etiketi kısmından abone olmak için hazırlanan etiket girilmelidir.

<center>

![mosquitto_image141](/img/mosquitto_image141.png)

</center>

Sunucuyu başlatmadan önce tüm ekranları kaydedip kapatın ve bilgisayarda MQTT broker ın çalıştığından emin olun. (Mosquitto.exe çalışıyor olması gerekmektedir.)

Araçlar -> Sunucuyu başlata tıklayın.

<center>

![mosquitto_image142](/img/mosquitto_image142.png)

</center>

Projede ilk defa sunucuyu başlat seçeneği seçildiğinde Veritabanı ayarları ekranı gelmektedir. PostgreSQL kurulumu sırasında oluşturduğunuz şifreyi Veritabanı kullanıcı şifresi kısmına girin ve bağlantıyı test et ifadesine tıklayın. 

Sunucu programının çalıştığını göreceksiniz

<center>

![mosquitto_image143](/img/mosquitto_image143.png)

</center>

Araçlar -> Start ViewPLUS Client yazısına tıklayın.

<center>

![mosquitto_image144](/img/mosquitto_image144.png)

</center>

Default olarak gelen client oturum açma bilgileri aşağıda gibidir.

Kullanıcı: admin    
Şifre: mikrodev     
Sunucu Adresi: 127.0.0.1:3344  

<center>

![mosquitto_image145](/img/mosquitto_image145.png)

</center>

Yukarıdaki bilgileri girip oturum aç yazısına tıkladığınızda tasarımını yaptığımız sayfanın ekrana geldiğini göreceksiniz.

<center>

![mosquitto_image146](/img/mosquitto_image146.png)

</center>

Bu uygulamada abone olunan değerler MQTT Box programı üzerinden yayınlama yapılacaktır. 

MQTT Box uygulamasını açın. Create MQTT Client ifadesine tıklayın.

<center>

![mosquitto_image147](/img/mosquitto_image147.png)

</center>

MQTT Client Name: İstemcinize bir isim verin. 

Protocol: mqtt/tcp seçin

Host: Local bilgisayarda broker açık olduğu için 127.0.0.1:1883 ifadesini yazın.

Save yazısına tıklayın.

<center>

![mosquitto_image148](/img/mosquitto_image148.png)

</center>

Broker ile bağlantısının kurulduğunu açılan ekranda connected yazısından takip edebilirsiniz.

<center>

![mosquitto_image149](/img/mosquitto_image149.png)

</center>

SCADA'ya değer yayınlamak için Topic to publish kısmından veya üst tarafta yer alan add Publisher kısmı kullanılmaktadır.

<center>

![mosquitto_image150](/img/mosquitto_image150.png)

</center>

Topic to publish kısmına Scada editörü üzerinden abone olunan konu girilmelidir.

QoS değeri 0 olmalıdır.

Payload Type kısmı Strings / JSON / XML / Characters seçilmelidir.

Payload yapısı {"1111": { "termometre1": {"V": 23.0000 }} } şeklinde olmalıdır.

Burada yer alan 1111 ifadesi Scada editörü üzerinden girilen teçhizat numarası,

termometre1 ifadesi Scada editörü üzerinden girilen variable name (değişken adı),

V: 23.0000 ifadesi ise etikete yayın yapılan değeri ifade etmektedir

<center>

![mosquitto_image151](/img/mosquitto_image151.png)

</center>

Buradaki değerler girilip publish yazısına tıklandığında ViewPLUS Client ekranında gönderilen değerleri display üzerinden görebilmekteyiz.

<center>

![mosquitto_image152](/img/mosquitto_image152.png)

</center>

**Not:** Örnekte teçhizat numarası girilmeden Scada üzerinden bir değere abone olunacak ise 

Örnek payload yapısı: {"": { "termometre1": {"V": 23.0000 }} } şeklinde olmalıdır.

<center>

![mosquitto_image153](/img/mosquitto_image153.png)

</center>























