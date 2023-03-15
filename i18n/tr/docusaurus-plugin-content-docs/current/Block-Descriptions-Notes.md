---
title: "Blok Açıklama Notları"
---


### Fiziksel Giriş/Çıkış Blokları

(T/M) Dijital Giriş: Cihaz üzerindeki fiziksel dijital girişi okumak için kullanılır.

(T/M) Dijital Çıkış: Cihaz üzerindeki fiziksel dijital çıkışlara değer yazmak için kullanılır.

(T/M) Analog Giriş: Cihaz üzerindeki fiziksel analog girişi okumak için kullanılır.

(T/M) Analog Çıkış: Cihaz üzerindeki fiziksel analog çıkışlara değer yazmak için kullanılır.

(T/M) Röle Çıkışı: Cihaz üzerindeki fiziksel röle çıkışlarına değer yazmak için kullanılır.

(T/M) RTD Sıcaklık Girişi: Cihaz üzerindeki fiziksel RTD girişlerini okumak için kullanılır.

(T/M) Kilitli Dijital Giriş: Kilitli Giriş/Çıkış blokları, fiziksel giriş/çıkış bloklarına gerçek fiziksel değerlerden farklı değerler atamak için kullanılır.

(T/M) Kilitli Analog Giriş: Kilitli Giriş/Çıkış blokları, fiziksel giriş/çıkış bloklarına gerçek fiziksel değerlerden farklı değerler atamak için kullanılır.

(T/M) Kilitli RTD Sıcaklık Girişi: Kilitli Giriş/Çıkış blokları, fiziksel giriş/çıkış bloklarına gerçek fiziksel değerlerden farklı değerler atamak için kullanılır.

(T/M) Kilitli Dijital Çıkış: Kilitli Giriş/Çıkış blokları, fiziksel giriş/çıkış bloklarına gerçek fiziksel değerlerden farklı değerler atamak için kullanılır.

(T/M) Kilitli Analog Çıkış: Kilitli Giriş/Çıkış blokları, fiziksel giriş/çıkış bloklarına gerçek fiziksel değerlerden farklı değerler atamak için kullanılır.

(T/M) Kilitli Röle Çıkışı: Kilitli Giriş/Çıkış blokları, fiziksel giriş/çıkış bloklarına gerçek fiziksel değerlerden farklı değerler atamak için kullanılır.



### Lojik Kapı BLokları

(T/M) Kenar Kapısı: Kenar kapısı, kenar tetikleme amacıyla kullanılır.

(T/M) Değil Kapısı:Değil kapısı, giriş sinyallerini tersine çevirmek için kullanılır.

(T/M) Veya Kapısı: Giriş sinyallerine lojik VEYA işlemini gerçekleştirir.

(T/M) Veya Değil Kapısı: Giriş sinyallerine lojik NOR işlemini gerçekleştirir.

(T/M) Ve Değil Kapısı: Giriş sinyallerine lojik NAND işlemini gerçekleştirir.

(T/M) Ve Kapısı: Giriş sinyallerine lojik AND işlemini gerçekleştirir.

(T/M) XOR Kapısı: Giriş sinyallerine mantıksal XOR işlemini gerçekleştirir.

(T/M) Yüksek Kapısı: Blok çıkışı her zaman (1) Yüksek'tir.

(T/M) Düşük Kapısı: Blok çıkışı her zaman (0) Düşük'tür.

(T/M) Darbe Rölesi: Açma-kapama, set ve reset gibi işlemler için kullanılır.

(T/M) Kaydırma Bloğu: Bir değeri sağa veya sola kaydırmak için kullanılır.

(T/M) Bit Birleştirme Bloğu: En fazla 8 biti binary olarak birleştirmek ve 1 bayt olarak blok çıkışına aktarmak için kullanılır.

(T/M) Özel Kapı: Blok özel ayarlarından yapılan seçimler ile kullanıcının istediği tipte bir mantık kapısı tasarlamasını sağlar.



### Kalibratör Blokları

(T/M) Eğimsel Kalibratör: Eğim kalibratör bloğu, bir analog değerin "Y = mX + c" olarak işlendiği anlamına gelir. m ve c değerleri blok özel ayarlardan ayarlanan katsayı değerleridir. “X“ değeri bloğun girişi (I1) ve Y değeri işlemin çıkışıdır (Q1)

(T/M) Noktasal Kalibratör: Doğru denklemin eğimini ve ofsetini tanımlamak yerine, dönüşüm iki örnek nokta üzerinden tanımlanır.



### Gecikme/Darbe Zamanlayıcılar

(T/M) Çekmede Gecikme: Bloğun Ttk girişine yükselen kenar bir sinyal (lojik(1)) belirlenen gecikme zaman aralığı boyunca uygulanırsa; blok çıkış sinyali, gecikme süresi sona erdikten sonra durumunu lojik(0)'dan lojik(1)'e değiştirir.

(T/M) Düşmede Gecikme: Bloğun Ttk girişine düşen kenar bir sinyal (lojik(0)) belirlenen gecikme zaman aralığı boyunca uygulanırsa; blok çıkış sinyali, gecikme süresi sona erdikten sonra durumunu lojik(1)'den lojik(0)'a değiştirir.

(T/M) Çekme/Düşmede Gecikme: Bloğun Ttk girişine yükselen kenar bir sinyal (lojik(1)) belirlenen gecikme zaman aralığı boyunca uygulanırsa; blok çıkış sinyali, gecikme süresi sona erdikten sonra durumunu lojik(0)'dan lojik(1)'e değiştirir.      
Bloğun Ttk girişine düşen kenar bir sinyal (lojik(0)) belirlenen gecikme zaman aralığı boyunca uygulanırsa; blok çıkış sinyali, gecikme süresi sona erdikten sonra durumunu lojik1)'den lojik(0)'a değiştirir.

(T/M) Çekmede Kalıcı Gecikme: Bloğun Ttk girişine yükselen kenar bir sinyal (lojik(1)) belirlenen gecikme zaman aralığı boyunca uygulanırsa; blok çıkış sinyali, gecikme süresi sona erdikten sonra durumunu lojik(0)'dan lojik(1)'e değiştirir. Çekmede Gecikme bloğundan farkı çıkışın lojik(0) olabilmesi için bloğun Rst girişine tetik gönderilmesi gerekmektedir.

(T/M) Zaman Ayarlı Çıkış Rölesi:  Bloğun Ttk girişine yükselen kenar bir sinyal (lojik(1)) geldiği anda blok çıkışı lojik(1) olur, tetik girişindeki sinyal belirlenen gecikme zaman aralığı boyunca uygulanırsa; blok çıkış sinyali, gecikme süresi sona erdikten sonra durumunu lojik(1)'den lojik(0)'a değiştirir.

(T/M) Simetrik Darbe Üreteci: Bloğun Etk girişine yükselen kenar bir sinyal (lojik(1)) geldiği süre boyunca; blok girişinden veya blok özel ayarlarından belirlenen T süre boyunca blok çıkışı lojik(1), T süre boyunca lojik(0) değeri alarak periyodik sinyal üretir.

(T/M) Gerçek Zamanlı Darbe Üreteci: Cihazın gerçek zaman saati ile senkronize olarak belirlenen zaman aralıklarında periyodik anlık yükselen kenar tetiklemesi üretir.



### Matematiksel İşlem Blokları

(T/M) Word Karşılaştırıcı: 16-bit WORD (0-65535) sayıları karşılaştırmak için kullanılır.

(T/M) Analog Karşılaştırıcı: 32-bit ANALOG (floating point) sayıları karşılaştırmak için kullanılır.

(T/M) Long Karşılaştırıcı: 32-bit LONG (işaretli) sayıları karşılaştırmak için kullanılır.

(T/M) Analog İşlem: ANALOG (IEE754 floating point) sayılar üzerinde matematiksel işlemler yapmak için kullanılır.

(T/M) Word İşlem: İşlem sonucu maksimum 16-bit (0-65535) WORD olan matematiksel işlemlerde kullanılır..

(T/M) Long İşlem: İşlem sonucu maksimum 32-bit LONG (işaretli tamsayı) olan matematiksel işlemlerde kullanılır.




### Sayaç Blokları

(T/M) Yukarı/Aşağı Sayaç 1: Sayma işleminin herhangi bir değerden pozitif (+) yönde birer birer artırılmasında veya bir değerden negatif (-) yönde birer birer azaltılmasında kullanılır.

(T/M) Çalışma Zamanı: Çalışma zamanını kaydetmek için kullanılır. “Akt” blok girişine sinyal geldiği süre boyunca belirlenen zaman ölçeğinde (saniye, dakika, saat) süreyi sayar ve çıkışına yazar.

(T/M) Yukarı/Aşağı Sayaç 2: Pozitif (+) yönlü ve negatif (-) yönlü sayma işlemi blok üzerindeki iki farklı girişten yapılmak istendiğinde kullanılır.



### GSM Blokları

(T/M) SMS Alıcı: SMS ile kontrol gerektiren uygulamalarda kullanılır.

(T/M) SMS Gönder: PLC/RTU cihazından başka bir numaraya SMS gönderilmek istenen uygulamalarda kullanılır. 

(T/M) DTMF Gelen Çağrı: Arama blokları sayesinde PLC cihazı DTMF kodlar ile kontrol edilmektedir.

(T/M) DTMF Araması Başlat: Bloğunun “Ara” girişine gelen lojik (1) sinyali ile tanımlanan numaraya arama başlatılır.

(T/M) GSM Sinyal Kalitesi: GSM sinyal kalitesini ölçmek için eklenebilen bir bloktur. 1 ile 31 arasındaki değerler cihazın sinyal kalitesini gösterir.



### Veri/Olay Kayıt Blokları

(T/M) Loglayıcı: Kontrol cihazında, Log Kayıt işlemi yaptırmak için kullanılır. Log Kayıt işlemi, SD kart destekleyen cihazlarda SD kart üzerine yapılırken, SD kart olmayan cihazlarda dahili data flash bellek üzerine yapılır.



### Yazmaç/Değişken Blokları

Yazmaç blokları, IEC 61131-3 programlama dilindeki değişkenlere karşılık gelmektedir. Değişkenler, program içinde kullanılacak değerlerini bir yerde tutulmasını sağlar. Değişkenin tanımlaması ise girilen veya programın getireceği veriye göre farklılık gösterir.

(T/M) Word Yazmaç: 16-bit WORD (işaretsiz) tamsayı değerleri için PLC projelerde değişken olarak kullanılır.

(T/M) Analog Yazmaç: 32-bit ANALOG (floating point) tamsayı değerleri için PLC projelerde değişken olarak kullanılır.

(T/M) Long Yazmaç: 32-bit LONG (işaretli) tamsayı değerleri için PLC projelerde değişken olarak kullanılır. 

(T/M) İkilik Yazmaç: BINARY (Boolean) tamsayı değerleri için PLC projelerde değişken olarak kullanılır.

(T/M) Word Bayrak: Giriş sinyalindeki değer, bir PLC çevrim gecikmesi ile blok çıkışına iletilir.

(T/M) Analog Bayrak: Giriş sinyalindeki değer, bir PLC çevrim gecikmesi ile blok çıkışına iletilir.

(T/M) Long Bayrak: Giriş sinyalindeki değer, bir PLC çevrim gecikmesi ile blok çıkışına iletilir.

(T/M) İkilik Bayrak: Giriş sinyalindeki değer, bir PLC çevrim gecikmesi ile blok çıkışına iletilir.



### MODBUS Protokol Blokları

(T/M) Modbus RTU Efendi: MODBUS RTU Efendi bloğu, iletişim portu girişi üzerinden bağlanan fiziksel arayüz üzerinde MODBUS RTU Efendi protokolünü etkinleştirir.

(T/M) Modbus TCP Efendi: MODBUS TCP Efendi bloğu, iletişim portu girişi üzerinden bağlanan fiziksel arayüz üzerinde MODBUS TCP Efendi protokolünü etkinleştirir.

(T/M) Modbus TCP Köle: MODBUS TCP Köle bloğu, iletişim portu girişi üzerinden bağlanan fiziksel arayüzde MODBUS TCP Köle protokolünü etkinleştirir.

(T/M) Modbus RTU Köle: MODBUS RTU Köle bloğu, iletişim portu girişi üzerinden bağlanan fiziksel arayüzde MODBUS RTU Köle protokolünü etkinleştirir.

(T/M) Modbus Word Okuyucu: Tek bir 16-bit uzunluğundaki WORD sayı tutan Modbus yazmaç adresini okumak için kullanılır.

(T/M) Modbus Float Okuyucu: 32-bit uzunluğundaki ANALOG (IEEE 754 floating point) sayı tutan 2 adet Modbus yazmaç adresini okumak için kullanılır.

(T/M) Modbus Long Okuyucu: 32 bit uzunluğundaki LONG sayı tutan 2 adet Modbus yazmaç adresini okumak için kullanılır.

(T/M) Modbus Word Yazıcı: Tek bir 16-bit uzunluğundaki WORD sayıyı saklayan MODBUS yazmaç adresine yazmak için kullanılır.

(T/M) Modbus Analog Yazıcı: 32-bit uzunluğundaki ANALOG (IEEE 754 floating point) sayıyı saklayan 2 MODBUS yazmaç adresine yazmak için kullanılır.

(T/M) Modbus Long Yazıcı: 32-bit uzunluğundaki LONG sayıyı saklayan 2 MODBUS yazmaç adresine yazmak için kullanılır.

(T/M) Modbus Oku/Yaz Tablosu: Sıralı giden bir Modbus adresinde tanımlı bir veya birden fazla yazmacın okunması ya da yazılmasında kullanılır.

(T/M) Modbus Gateway: MODBUS Modbus Gateway cihazları, Modbus TCP/RTU ağındaki Efendi ünitelerin, Modbus RTU/TCP ağındaki Köle ünitelere erişebilmesi için geçit oluşturmakta kullanılır.

(T/M) Modbus Durum: Modbus RTU/TCP Efendi blok üzerinden okuma ve yazma yapılan Köle cihazların durum bilgisi bu blok ile okunur.



### IEC/DNP3 Protokolü

(T) IEC101 Köle: Telediagram projesine IEC101 Köle bloğu eklenerek, RTU üzerinde IEC 60870-5-101 Slave protokolü etkinleştirilir. IEC101 Köle bloğunun Ser girişine TCP Soket veya Seri Port bloğu eklenir.

(T) DNP3 Köle: Telediagram projesine DNP3 Köle bloğu eklenerek, RTU üzerinde DNP3 Köle protokolü etkinleştirilir. DNP3 Köle bloğunun Ser girişine TCP Soket veya Seri Port bloğu eklenir.

(T) IEC104 Köle: Telediagram projesine IEC104 Köle bloğu eklenerek, RTU üzerinde IEC 104 Köle protokolü etkinleştirilir. IEC104 Köle bloğunun Ser girişine TCP Soket veya Seri Port bloğu eklenir.



### MQTT Blokları

(T/M) MQTT Config: TCP Soket bloğundan ayarlanan ana bilgisayara veya IP adresi aracılığıyla uzak bir aracıya bağlanmak ve internet veya yerel ağ kullanarak cihazlar veya arayüzler arasında iletişim sağlamak için kullanılır.



### Haberleşme Blokları

(T/M) Seri Port Bloğu: Mikrodev PLC'nin desteklediği herhangi bir protokol, seri port üzerinden haberleşecek şekilde yapılandırılabilir.

(T/M) TCP Soket Bloğu: TCP Soket Bloğu, desteklenen protokollerle Ethernet, GSM veya Wi-Fi ile iletişimi sağlamak için kullanılır.

(T/M) DNS Blok: Web adresini IP adresine dönüştürür.



### Tablo Blokları

(T/M) Word Tablo: Eklenen Word değerleri tabloda tutar. Tablo boyutu girilen Word yazmaç sayısının 2 katı seçilmelidir.

(T/M) Analog Tablo: Eklenen Analog değerleri tabloda tutar. Tablo boyutu girilen Analog yazmaç sayısının 4 katı seçilmelidir.

(T/M) Long Tablo: Eklenen Long değerleri tabloda tutar. Tablo boyutu girilen Long yazmaç sayısının 4 katı seçilmelidir.

(T/M) Bit Tablo: Eklenen Binary değerleri tabloda tutar. Tablo boyutu girilen İkilik yazmaç sayısı ile aynı seçilmelidir.

(T/M) Word Tablo İşlemleri: Tablo verileri üzerinde tanımlanan işlemi yapar ve sonucu bloğun çıkışına yazar.

(T/M) Analog Tablo İşlemleri: Tablo verileri üzerinde tanımlanan işlemi yapar ve sonucu bloğun çıkışına yazar.

(T/M) Long Tablo İşlemleri: Tablo verileri üzerinde tanımlanan işlemi yapar ve sonucu bloğun çıkışına yazar.

(T/M) Bit Tablo İşlemleri: Tablo verileri üzerinde tanımlanan işlemi yapar ve sonucu bloğun çıkışına yazar.



### Kontrol Blokları

(T/M) Histerezis: Açma/kapama kontrollü sistemlerde belirlenen "alt eşik ve üst eşik" bitiş noktalarında açılıp kapatılarak anahtarlama aralığı oluşturmak için kullanılır.

(T/M) PID Denetleyici: Bir PID denetleyici, bir mekanizmayı en uygun zamanda sabit bir değerde stabilize etmek ve değeri ideal değerlerde sabit tutmak için tasarlanmış bir denetleyicidir.

(T/M) Analog Rampa: Analog Rampa bloğu bir değerden başka bir değere belirli bir zaman dilimi içinde sabit ivme ile ulaşması gereken uygulamalarda kullanılır.

(T/M) On/Off Kontrolör: Prosesin giriş değeri, tanımlanan şartlara uygun ise On çıkışı, değil ise Off çıkışı verilir.

(T/M) Change Dedektör: Change Dedektör bloğu herhangi bir blok değerindeki değişimlerin izlenmesi gerektiği uygulamalarda kullanılır.



### HVAC Blokları

(T/M) Yüzer Motor: Oransal veya PID kontrol uygulamalarında kullanılır. Blok “YKB0” çıkışından gönderilen lojik (1) sinyal süresi kadar çıkışa bağlı ekipman açılacaktır. Bloğun “Kap” çıkışından gönderilen lojik (1) sinyal süresi kadar çıkışa bağlı ekipman kapanacaktır.

(T/M) Yaşlandırma Yöneticisi: Bloğun "Etk" girişine lojik(1) sinyali geldiği sürece, blok aktif hale gelir ve bağlı olan yaşlandırma üyelerini etkinleştirir.

(T/M) Yaşlandırma Üyesi: Birden fazla ekipmanın belirli bir süre boyunca sırayla başlatılması ve durdurulması gereken uygulamalarda kullanılır.

(T/M) DevNET Ana: DevNET, ethernet üzerinden seçilen Mikrodev PLC/RTU cihazdan veri okuyup yazan ve verileri DevNET kaydına aktaran bir sistemdir.

(T/M) DevNET Yazmaç: Ethernet ağı üzerinden bağlanan cihazdaki kayıtların verileri bu bloğa aktarılır.



### System Blokları

(T/M) İlk Tarama Biti: Lojik kontrolör sistemi aktif konuma geldiğinde ve aktif konumda kaldığı sürece lojik (1) üreten bloktur. Lojik kontrolör sistemini referans değer ve konumlarına getirmek için kullanılır.

(T/M) Reset Sayıcı: Cihazın Resetlenme sayısı blok çıkışına yazılır. Her power reset işleminden sonra, blok çıkış değeri 1 artmaktadır.

(T/M) Sistem Sıfırlama: Blok “Ttk” girişine, yükselen kenar tetik sinyali gelmesi durumunda cihaza yazılım tabanlı Reset atar.



### Çoklu Seçici Blokları

(T/M) Analog Dörtlü Seçici: Bloğun girişlerindeki 4 farklı bağlantıdan birinin seçilip çıkışa verilmesi gerektiği durumlarda kullanılır. 

(T/M) Word İkili Seçici: Bloğun girişlerindeki 2 farklı bağlantıdan birinin seçilip çıkışa verilmesi gerektiği durumlarda kullanılır. 

(T/M) Long İkili Seçici:  Bloğun girişlerindeki 2 farklı bağlantıdan birinin seçilip çıkışa verilmesi gerektiği durumlarda kullanılır. 

(T/M) Analog İkili Seçici:  Bloğun girişlerindeki 2 farklı bağlantıdan birinin seçilip çıkışa verilmesi gerektiği durumlarda kullanılır. 



### Hareket Kontrol Blokları

(T/M) Hızlı Sayıcı Girişi: Dijital darbe giriş sinyallerini saymak için kullanılır. Diğer yukarı-aşağı sayacı bloklarından farklı olarak donanımsal kesmeleri kullanarak sayma yapar, bu sayede CPU başka görevleri yerine getirirken bile hızlı darbe sinyallerini kaçırmamış olur. 

(T/M) Darbe Genişlik Modülasyonu (PWM): Cihazın sahip olduğu PWM çıkışlarının kontrol edilmesini sağlar. 

(T/M) Darbe Treni Çıkışı: Belirli sayıda darbe gönderilerek, kontrollü adım hareketi yapmak için kullanılır.

(T/M) Eksen Tanımı: Bu blok, bir sistem içerisinde bulunan motorun eksen üzerindeki konumunu kontrol etmek için kullanılır.

(T/M) Eksen Kontrol: Servo motor uygulamalarında motoru konum olarak sabitlemek için kullanılır.



### Seri Haberleşme Blokları

(T/M) RX Paket: Rx Paket bloğu gelen verinin tanımlanması amacıyla kullanılır. 

(T/M) Paket Ayrıştırıcı: Gelen verinin Pars (Ayrıştırma) edilmesi için kullanılır. 

(T/M) TX Paket: Tx Paket bloğu “Deg” blok girişinden gönderilmek istenen veriyi paket haline dönüştürerek “#TxPak0” blok çıkışından veri paketi gönderir.

(T/M) Serial Gateway: Transparan veri iletimini sağlamak için kullanılan bloktur. Seri Port bloğu ile uzaktan bağlanan cihaz arasında herhangi bir protokolden bağımsız olarak veri gönderimi sağlar.



### Metin Blokları

(T/M) Metin Referansı: Programlama yapılırken metin tablosuna girilen değerleri kullanmak için Metin Referansı blokları kullanılır. 

(T/M) Metin Değiştirme: Metin Değiştirme blokları Metin Referansı blokları üzerinde işlem yaparak, işlem sonucunda oluşan yeni metni seçilen metin ofsetine yazar.

(T/M) Metin İşlem: Metin İşlem bloğu Metin Referansı blokları üzerinde işlem yaparak, işlem sonucunda oluşan tam sayı değeri blok çıkışına yazar.



### Takvim Blokları

(T/M) Haftalık Zamanlayıcı: Haftanın seçilen gün ve saat aralıklarında Haftalık Zamanlayıcı bloğu “#HZ0” çıkışında lojik (1) sinyali üretir.

(T/M) Yıllık Zamanlayıcı: Yıllık Zamanlayıcı bloğu yılın belirlenen 2 zaman aralığı arasında lojik (1) çıkış üretmesi için kullanılır.

(T/M) Astronomik Zamanlayıcı: Enlem, boylam ve ofset değeri girilerek güneşin doğuş ve batış saatlerini hesaplar. 

(T/M) Sistem Saniye: Sistem saniye bloğu PLC'nin gerçek zaman saatinin saniye değerini gösterir.

(T/M) Sistem Milisaniye: Sistem milisaniye bloğu PLC’nin çalışmaya başladığı andan itibaren iç registerlarda saydığı yazılımsal milisaniye çözünürlüklü sayıcının değerini okur. 

(T/M) Sistem SSDD (Saat-Dakika): Sistem dakika saat bloğu PLC'nin gerçek zaman saatinin, saat ve dakika değerini gösterir.

(T/M) Sistem Haftanın Günü: Sistem haftanın günü bloğu PLC'nin gerçek tarihinde haftanın kaçıncı günü olduğunu gösterir. 

(T/M) Sistem Ayın Günü: Sistem ayın günü bloğu PLC'nin gerçek zaman saatinde ayın kaçıncı gününde olduğunu gösterir.

(T/M) Sistem Yılın Günü: Sistem yılın günü bloğu PLC'nin gerçek zaman saatinde yılın kaçıncı günü olduğunu gösterir.

(T/M) Sistem Ay: Sistem ay bloğu PLC'nin gerçek zaman saatinde yılın kaçıncı ayı olduğunu gösterir.

(T/M) Sistem Yılı: Sistem yıl bloğu PLC'nin gerçek zaman saatinde, hangi yıl olduğunu gösterir.

(T/M) Zamanı Kaydet: PLC’nin saat ve tarih bilgisini lojik proje içinden ayarlamak için kullanılır.

(T/M) NTP Senkronizasyon Bloğu : PLC saatini senkronize etmek için kullanılır.

(T/M) Zaman Plan Seçici: Mikrodev ViewPLUS SCADA ile birlikte kullanılabilir. Tek başına kullanılamaz.



### Makro Blokları

(T/M) Makro: Blok makro alanına özel komut tanımları eklenerek özel bloklar tasarlanabilir.



### SNMP Blokları

(T/M) SNMP Agent: Cihazı bir ajan olarak tanımlayabilmek için projeye SNMP Agent bloğu eklenir.

(T/M) SNMP Trap: SNMP Trap bloğu, cihazdan yöneticiye belirli değişim değerlerinde veri göndermek için kullanılır.



### DALI Blokları

(T) DALI Manager Bloğu: DALI Manager bloğu armatürlere veya gruplara uzaktan erişim imkanı sağlar. 