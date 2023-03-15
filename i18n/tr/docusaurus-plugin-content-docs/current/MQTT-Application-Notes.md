---
title: "MQTT Uygulama Notu"
---

## MQTT PROTOKOLÜ

### Genel Bilgi

<center>

![mqtt_01](/img/mqtt_01.png)
***<center>Şekil 1 Mqtt Haberleşme Akış Şeması</center>***

</center>

MQTT(Message Queuing Telemetry Transport) protokolü, internette yaygın olarak kullanılan makinalar arası (M2M) mesaj tabanlı bir protokoldür. Lightweight oluşu ve düşük kaynak tüketmesiyle Internet of Things(IoT) ekosisteminde benimsenmiştir. Hemen hemen tüm IoT bulut platformları akıllı nesnelerden veri gönderip almak için MQTT protokolünü desteklemektedir.

### Blok Tanımlamaları

#### Mqtt Config Bloğu

MQTT ayarlarını yapılandırmak için öncelikle projenize Mqtt Config bloğunu eklemeniz gerekir.

<center>

![mqtt_02](/img/mqtt_02.png)
***<center>Şekil 2 MQTT Config Bloğu</center>***

</center>

Pin Açıklamaları;

•	Soc: TCP Soket bloğu bağlantısı için kullanılır. Mqtt Config bloğu TCP Soket bloğu olmadan kullanılamaz.

•	Trg: Periyodik data transferi yapılmak istenildiğinde, bu girişten mqtt config bloğuna tetik verilmelidir. Eğer bu giriş boş bırakılırsa veriler belirlenen diğer koşullara göre iletilir.

•	Mqtt0: Bağlantı durumunu gösteren çıkış. Bu çıkıştan gelen bilgiler şu şekildedir;

           
          - 0: TCP Bağlantısı Yok
          - 1: TCP Bağlanıyor
          - 2: MQTT Bağlanıyor
          - 3: MQTT Bağlandı
           
•   Sta: Haberleşme durumunu gösteren çıkış. Bu çıkıştan gelen bilgiler şu anlama gelir;
	      - 0: MQTT Bağlantı Paketi Gönderildi
	      - 1: MQTT Bekleme Durumu
          - 2: MQTT Abone Olma durumu
	      - 3: MQTT Mesaj Yayınlama Durumu
		  
•	Pub: Publish zaman aşımını gösteren çıkış


Mqtt Config Bloğu Özel Ayarları;

<center>

![mqtt_03](/img/mqtt_03.png)
***<center>Şekil 3 Mqtt Config Blok Özel Ayarları</center>***

</center>		  

Tanımlamalar;

•	Client Id: Broker bağlantısı için cihaza el ile ID verilen alan.

•	User Name: Broker bağlantısı için cihaza kullanıcı adı verilen alan.

•	Password: Broker bağlantısı için cihaza girilen şifre alanı.

•	Keep Alive: Broker ve Publisher arasındaki bağlantı kesilirse, yeniden bağlantı kurmadan önceki bekleme süresi.

•	Clean Session: Seçilirse, cihaz ve broker arasında iletişim varsa mesajlar yayınlanır, seçilmezse iletişim kesintilerinde kaydedilen bilgiler gönderilmez.

•	Use Device Serial as User Name: Seçilirse, cihazın seri numarası cihaz username’i olarak kullanılır.

•	SSL Enabled: Bağlantıyı SSL ile yapmak için işaretlenir. (Sadece DM Serisinde aktif.)

#### TCP Soket Bloğu Bağlantısı

TCP Soket bloğunun çıkışı Mqtt Config bloğunun Soc girişine bağlanır.

<center>

![mqtt_04](/img/mqtt_04.png)
***<center>Şekil 4 TCP Soket Bloğu ve Mqtt Bloğu Bağlantısı</center>***

</center>


TCP Soket bloğunun özel ayarları mqtt bağlantısı için şu şekilde yapılmalıdır;

•	Soket tipi olarak TCP Client seçilmeli,

•	Server IP kısmına bağlanılacak mqtt server IP’si girilmeli,

•	Server Port Kısmına mqtt server port bilgisi girilmeli,

•	Medya tipi ise kullanılan mikrodev cihazın özelliğine göre Ethernet, GSM veya WI-FI seçilebilir.

<center>

![mqtt_05](/img/mqtt_05.png)
***<center>Şekil 5 TCP Bloğu Özel Ayarları</center>***

</center>

## MQTT Tablosu

Mqtt ile ilgili tim ayarlamaların yapıldığı tabloya Projeler/MQTT Table sekmesinden ulaşılır.

<center>

![mqtt_06](/img/mqtt_06.png)
***<center>Şekil 6 Mqtt Tablosu</center>***

</center>

### Topics The Publish

Bu tabloda verileri brokera publish etmek için Publish topic girilir. Tabloda Add Topic butonuna basılarak çıkan ekrandan topic name girilir. Qos, Retain, Last Will, Payload ayarları, değişimde gönder ve periyodik gönder seçeneklerini aktif-pasif yapabileceğiniz blok tanımlamaları da bu sayfadan yapılır.

<center>

![mqtt_07](/img/mqtt_07.png)
***<center>Şekil 7 Topic Tanımlama</center>***

</center>

Tanımlamalar;

• Topic Name: Mesajları göndereceğiniz konu başlıklarının belirlendiği alan.

• QoS: Quality of Service (Hizmet Kalitesi), bir mesajın göndereni ile mesajın alıcısı arasındaki anlaşmayı ifade eder. QoS seviyeleri aşağıdaki gibidir;

   o QoS 0: Minimum veri aktarımı sağlanır. Bu seviyede her mesaj bir subscriber’a iletilir ve mesajın ulaştığına dair onay alınmaz.
   
   o QoS 1: Broker mesajı iletmeyi dener ve subscriber’dan onay yanıtı bekler, belirtilen bir zaman dilimi içinde onay alınmazsa mesaj tekrar gönderilir.
   
   o QoS 2: Broker, subscriber’ın mesajı aldığından ve yalnızca bir kez aldığından emin olmak için iki onay alır.
   
• Retain: Bu seçenek işaretlenirse, eğer broker ile subscriber arasındaki bağlantı koparsa son değer hafızaya kaydedilir.

• Is Last Will Topic: Son istek konusu. Bir topic oluşturulur ve bu seçenek işaretlersenirse, cihazın broker ile bağlantısı koptuğunda bu topic altındaki mesajı subscriber’lara iletilir.

• Payload Type: Mesaj içeriğinin hangi formatta gönderileceği belirlenir. Subscriber bu bilgi ile gelen mesajları yorumlar. Gönderilen mesajlara zaman etiketi eklenmek isteniyorsa “MJson v1” seçilebilir.

• On Change Send Enable Block: Oluşturulan topic’in değişimde gönderme özelliğini aktif-pasif hale getirebilmek için diagramda eklenen blok seçimi.

• Periodic Send Enable Block: Oluşturulan topic’in periyodik gönderme özelliğini aktif-pasif hale getirebilmek için diagramda eklenen blok seçimi.

#### Publish Blocks for Topic

Bu tabloda ilgili Topic için Publish edilecek bloklar seçilir. Publish to topic tablosunda topic tıklandıktan sonra, Add Entry butonu aktif olur bu butona basılarak projede publish edilmek istenen blok seçilir. Gelen ekrandan Verinin nasıl iletileceği de seçilebilir.

<center>

![mqtt_08](/img/mqtt_08.png)
***<center>Şekil 8 Mesaj İçin Blok Ekleme</center>***

</center>

Tanımlamalar;

• Select Block for Subscribe on Topic: Projenizdeki mesaj olarak göndermek istenilen bloğun seçildiği alan.

• Send On Change: Change: Değişimde gönderme seçim alanı

    o On Level Change: Change Value’de belirtilen değer kadar değişim olduğunda gönder, eğer 0 yazılırsa her değişimde gönderilir.
	
    o On Percent Change: Change Value’de belirtilen değer yüzdesi kadar değişim olduğunda gönder, örneğin %10.
	
• Change Value: Değişim miktarı girme alanı.

• Send Periodcally: İşaretlenirse mqtt config bloğunun trg girişine her tetik geldiğinde mesaj gönderilir.

• Select Block for Quality Value: MJson v1 payload tipinde mesaj içeriğine dahil edilen Quality değerinin seçildiği blok.

• Select Trigger Block: Mesajı değişim veya periyodik dışında burada belirteceğimiz bloktan tetik vererek de gönderebiliriz.

<center>

![mqtt_09](/img/mqtt_09.png)
***<center>Şekil 9 Mesaj Formatları</center>***

</center>


Not: Mesajlarda kullanılan bloklar; bloğun altındaki blok numarası (B:3006) ile gönderilip alınabileceği gibi hat etiketleri (word_publish_ch) ile de mesajlara eklenebilir. Bunun seçimi blok özelliklerindeki Mqtt Format sekmesi altında yapılır.

•	View and Set seçilirse görünecek mesaj;

<center>

![mqtt_10](/img/mqtt_10.png)
***<center>Şekil 10 View and Set Seçimi</center>***

</center>

•	No View seçilirse görünecek mesaj;

<center>

![mqtt_11](/img/mqtt_11.png)
***<center>Şekil 11: No View Seçimi</center>***

</center>

### Subscribe to Topic

Bu tabloda brokerdan cihaza veri gönderilmek için ilgili subscribe topic girilir.

<center>

![mqtt_12](/img/mqtt_12.png)
***<center>Şekil 12 Topic to Subscribe Ekranı</center>***

</center>

Tanımlamalar;

• Subscribe Topic Name: Subscribe olunacak topic adı girilir.

• QoS: Hizmet kalitesi seviyesi seçilir.

• Parse Format: Mesajların hangi formatla parse edileceği seçilir.

#### Subscribed Block Values for Topic

Bu ekrandan subscribe topic için ilişkilendirilecek bloklar eklenir. Hat etiketlerini kullanmak için yine ilgili bloğun özel ayarlarından mqtt formatı view and set olacak şekilde seçilmelidir.

<center>

![mqtt_13](/img/mqtt_13.png)
***<center>Şekil 13 Subscribed Block Values for Topic Ekranı</center>***

</center>

## ÖZEL UYGULAMALAR

### Ubidots

Mikrodev PLC ubidots mqtt ile kullanılmak istenildiğinde, yukarıda anlatılan ayarlara ilaveten şu adımlar izlenmelidir;

1. Mqtt Config bloğu özel ayarlarından, Client Id kısmına Ubidots ID girilmeli ve Username kısmına Ubidots da oluşturulmuş cihazın Token Key girilmelidir.

2. Publish Topic: /v1.6/devices/<Device Name\> olarak girilir. İlişkilendirilecek bloklar için ubidots hesabında değişken tanımlamaya gerek yoktur. İlk Gönderilen data ile değişkenler Ubidots tarafında otomatik oluşturulur. Veri blok numarasıyla veya hat etiketiyle Ubidots serverinde okunur.

3. Subscribe Topic: /v1.6/devices/<Device Name\>/<Value Name\> olarak girilir. Her subscribe edilecek veri için ayrı ayrı bağlık tanımlanması gerekir. Veriler Ubidots ortamında tanımlanmalıdır. Eğer Hat etiketi kullanılacaksa Ubidots da oluşturulan değişken hat etiketiyle aynı isimde olmalıdır, eğer hat etiketi kullanılmadan sadece blok numarası ile iletim yapılacaksa blok numarası ile aynı isimli değişken ubidots ortamında tanımlanmalıdır.

## Örnek Uygulama

### Topic Publish

GGenel Konfigürasyon;       
Proje oluşturulduktan sonra şekildeki gibi diagram tasarımı yapılır, word ve analog yazmaçların mqtt formatları view and set seçilir.

<center>

![mqtt_14](/img/mqtt_14.png)
***<center>Şekil 14 Örnek Proje Konfigürasyonu</center>***

</center>

Değişimde Gönderme;

Projects > MQTT Table > Topics to Publish > Add Topic sırasıyla takip edilir.

<center>

![mqtt_15](/img/mqtt_15.png)
***<center>Şekil 15 Topic Ekleme Ekranı</center>***

</center>

Topic ismi seçilip OnChange Send Enable Block için diagramda hazırladığımız High kapısını girilir ve add tıklanır.

Daha sonra bir alt tablodaki Publish Blocks for Topic kısmından Add Entry tıklanır.

<center>

![mqtt_16](/img/mqtt_16.png)
***<center>Şekil 16 Topic'e Blok Ekleme Ekranı</center>***

</center>

Select Block for Subscribe on Topic kısmına mesaj olarak yayınlamak istediğiniz diagramdaki blok seçilir.

SendOn Change kısmında, On Level Change seçilir ve Change Value 0 olarak ayarlanır ki değer her değiştiğinde mesaj gönderebilsin. Add tıklanıp devam edilir.   

Proje cihaza yüklenir ve online izleme açılır.

MQTTBox gibi bir programla açılan topic’e subscribe olunur, Mikrodiagramda online izlemede mqtt config blok değerinin 3 olduğu görüldükten sonra yazmacın değeri değiştirildiğinde değerin publish edildiğini görülür.

<center>

![mqtt_17](/img/mqtt_17.png)
***<center>Şekil 17 Değişimde Gönderilen Mesajlar</center>***

</center>

Periyodik Gönderme;     

Değişimde gönderilen konfigürasyona ek olarak mqtt config bloğunun trg girişine real time pulse generator eklenir,

<center>

![mqtt_18](/img/mqtt_18.png)
***<center>Şekil 18 Periyodik Gönderme Eklenmiş Örnek Proje</center>***

</center>

5snde bir periyodik olarak mesaj yayınlamak için real time pulse generator 5sn ayarlanır ve oluşturulan topic aşağıdaki gibi değiştirilir. OnChange Enable Block= NULL ve Periodic Send Enable Block diagramdaki High kapısı set edilir, Select Block for Subscribe on Topic kısmında ise SendOn Change= None seçilip Send Periodically tiklenir.

<center>

![mqtt_19](/img/mqtt_19.png)
***<center>Şekil 19 Periyodik Gönderme için Yapılan Değişiklikler</center>***

</center>

Proje tekrar cihaza yüklenir ve gelen mesajlar gözlenir.

<center>

![mqtt_20](/img/mqtt_20.png)
***<center>Şekil 20 Periyodik Gönderilen Mesajlar</center>***

</center>

### Subscribe Topic

Genel Konfigürasyon;

Proje oluşturulduktan sonra şekildeki gibi diagram tasarımı yapılır, word ve analog yazmaçların ve röle çıkışının mqtt formatları view and set seçilir.

<center>

![mqtt_21](/img/mqtt_21.png)
***<center>Şekil 21 Subscribe Olunacak Bloklar Eklenmiş Örnek Proje Konfigürasyonu</center>***

</center>

Projects > MQTT Table >Topics to Subscribe > Add Topic sırasıyla takip edilir. 

<center>

![mqtt_22](/img/mqtt_22.png)
***<center>Şekil 22 Subscribe Olunacak Topic Adı</center>***

</center>

Topic adı girilir ve Add tıklanır. Daha sonra bir alt tablodaki Publish Blocks for Topic kısmından add entry tıklanır.

<center>

![mqtt_23](/img/mqtt_23.png)
***<center>Şekil 23 Subscrie Olunan Blok Seçimi</center>***

</center>

Burada abone olunacak değerin hangi bloğa aktarılacağı seçilir.

<center>

![mqtt_24](/img/mqtt_24.png)
***<center>Şekil 24 Subscribe Olan Bloklar</center>***

</center>

Abone olacak bütün bloklar belirlendikten sonra proje cihaza yüklenir.

<center>

![mqtt_25](/img/mqtt_25.png)
</center>

Yukarıdaki format ile test2 topicine mesaj publish edildiğinde değişkenlerin son durumu aşağıdaki gibi olur;

<center>

![mqtt_26](/img/mqtt_26.png)
***<center>Şekil 25 Subscribe Olunan Değerler</center>***

</center>

## SSL İLE MQTT BAĞLANTISI KURMA

SSL (Secure Sockets Layer) ve TLS (Transport Layer Security) bir bilgisayar ağı veya bağlantısı üzerinden güvenli iletişim sağlayan protokollerdir. SSL/TLS; veri şifrelemeyi, veri bütünlüğünü ve kimlik doğrulamayı sağlar.

Mqtt Config Bloğunun blok özel ayarlarında yer alan “SSL Enabled” seçeneği; SSL Sertifikası ile güvenli bir şekilde MQTT bağlantısı kurulmasını sağlar. Bu özellik sadece DM serisi cihazlarda aktiftir.

Özelliğinin kullanılabilmesi için cihaza SSL Sertifikasının yüklenmesi ve Mqtt Config bloğunun “SSL Enabled” seçeneğinin işaretli olması gerekmektedir.

<center>

![mqtt_27](/img/mqtt_27.png)
***<center>Şekil 26 Mqtt Config Bloğu SSL Enabled Yapma</center>***

</center>