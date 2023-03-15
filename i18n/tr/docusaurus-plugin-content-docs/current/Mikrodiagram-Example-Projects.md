---
title: "Örnek Projeler"
---

## Temel Mantık Örnekleri

### Apple Boks Otomasyonu

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/apple_packaging.zip) 

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* BINARY FLAG
* OR
* AND
* EDGE
* IMPULSE RELAY
* HIGH
* UP / DOWN COUNTER
* WORD COMPARATOR
* Adding a Line Label

#### Diyagram Algoritması

Elma otomasyonunda elma taşıma bandından gelen elmalar sayılacak ve koliye 20 adet geçirilecektir. Sayılan elma sayısı 20 olduğunda kutuları taşıyan konveyör hareket edecektir. Bunun için kutuların geldiği kayış motoru kontrol edilecektir.

<center>

![mikrodiagram-example-projects-01](/img/mikrodiagram-example-projects-01.png)

</center>

#### Diyagram Çözümü

* Dijital çıkışı oluşturan elma sayma ve kutu algılama sensörü PLC cihazının dijital girişlerine bağlanır.
* Sistem ilk açıldığında veya elma karşılaştırıcısı yüksek seviyeli bir sinyal ürettiğinde kutu bant motoru DQ1 ile devreye girecektir.
* Kutu algılandığında kutu taşıma motoru durdurulacak ve elmaları göndermek için hemen elma taşıma motoru devreye girecektir.
* Elma sayma işlemi tamamlandığında konveyör motoru tekrar devreye girecek ve döngüsel işlem devam edecektir.
* Sistem kapatma butonuna basıldığında kutu konveyör ve elma konveyör motorları durdurulur.

<center>

![mikrodiagram-example-projects-02](/img/mikrodiagram-example-projects-02.png)

</center>

### Sızdırmazlık ve Temas Güvenli Motor Anahtarlama

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/sealing_and%20contact_safe.zip) 

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* BINARY FLAG
* AND
* NOT
* OR
* Adding a Line Label

#### Diyagram Algoritması

* Düğmeye ileri basıldığında motor ileri doğru hareket etmeye başlayacak ve ileri basılmasa bile düğme devam edecektir.
* Düğmeye geri basıldığında motor duracak ve hemen motor ters yönde çalışmaya başlayacaktır.
* Aynı anda iki tuşa basılırsa sistem duracaktır.

#### Diyagram Çözümü

* Sızdırmazlık algoritmasında, 'ileri düğmesi' ile yüksek sinyal uygulandığında 'motor ileri' çalışmaya başlayacaktır. 'Motor ileri' etiketi, 'motor ileri' çalışmaya başladığında yüksek seviyeli bir çıkış üretecek ve butona basılmasa bile 'motor ileri' aktif olacaktır.
* Güvenlik algoritmasında iki butonun birlikte basılması durumu kontrol edilir. İkili bayrak, düğme kontrollerinde 1 döngü gecikmesi oluşturmak için kullanılır.
* Yukarıdaki resimde buton ileri basıldığında motorun ileri aktif olduğu ve aşağıdaki resimdeki 2 butonun birlikte basıldığı bir online izleme ekranı görüntüsü vardır, böylece motorun ileri ve geri çıkışları inaktif olur.

<center>

![mikrodiagram-example-projects-03](/img/mikrodiagram-example-projects-03.png)

</center>

### Dört Düğmeyle İki Motoru Kontrol Etme

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/4button_STM.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* OR
* IMPULSE RELAY
* Adding a Line Label

#### Diyagram Algoritması

* Düğme 0'a basıldığında, Motor 1 başlatılacaktır.
* Düğme 1'e basıldığında Motor 2 çalışacaktır.
* Düğme 2'ye basıldığında, iki motor birlikte çalışacaktır.
* Düğme 3'e basıldığında iki motor birlikte duracaktır.
* Motor 1 çalışırken Motor 2'nin start butonuna basılırsa Motor 1 duracak ve Motor 2 çalışmaya başlayacaktır.

#### Diyagram Çözümü

* Ayarlanan algoritmada motorların çalışma durumları; reset algoritmasında motorların durma durumları, darbe darbe kısmında ise motorların aktif veya pasif durumlarının kalıcılığı sağlanmaktadır.

<center>

![mikrodiagram-example-projects-04](/img/mikrodiagram-example-projects-04.png)

</center>

### Konveyör Otomasyonu

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/band_carrying.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* AND
* OR
* IMPULSE RELAY
* ON DELAY
* Adding a Line Label

#### Diyagram Algoritması

* Başlat düğmesine basıldığında, Motor 1 hemen çalışacaktır.
* Herhangi bir Durdur düğmesine basıldığında program hemen duracaktır.
* Motor 2, FS1 nesneyi 2 saniye sonra algıladığında çalışır.
* Motor 3, FS2 nesneyi 3 saniye sonra algıladığında çalışır.
* FS3 nesneyi algıladığında program hemen duracaktır.

#### Diyagram Çözümü

*Sistemin açma-kapama fonksiyonu darbe rölesi kullanılarak gerçekleştirilmiştir. Sistem kapalıyken Başlat/Durdur butonundan yüksek seviyeli bir sinyal alındığında sistem açılacak, sistem açıkken yüksek seviyeli bir sinyal alındığında sistem kapanacaktır.
* Sistem ilk açıldığında motor1 'Sistem Başlat/durdur' darbe rölesi etiketi ile çalışmaya başlayacaktır.
* FS1 sensörü devreye girdiğinde 2 saniye bekleyip ardından çalışacaktır. Bu algoritma için, FS1 etiketi gecikmeli olarak kontrol edildi.
* FS2 sensörü etkinleştirildiğinde, motor 3 gecikmeli olarak 3 saniye bekledikten sonra çalışacaktır.

<center>

![mikrodiagram-example-projects-05](/img/mikrodiagram-example-projects-05.png)

</center>

### Kontak Kilitleme Motor Kontrolü

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/contact_safe.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* BINARY FLAG
* AND
* NOT
* Adding a Line Label

#### Diyagram Algoritması

* Motorun sağa ve sola dönüş durumları kontrol edilecektir.
* Motor sola dönerse sağa dönmez, sağa dönerse sola dönmez.
* Sağa dönerken sola basarsanız sağa dönmeye devam edecek, sola dönüş durumunda da aynı olacaktır.
* Düğmelerden hiçbirine basılmazsa motor çalışmayacaktır.

#### Diyagram Çözümü

* Sola dönün sağa dönün: Motor sola dönüyorsa, 'motor sola' etiketi yüksek olduğundan ve makbuz için olmadığı için AND bloğuna düşük bir sinyal gönderilecektir. Bu nedenle motorun sol hareketi aktif ise sağ tuşa basılsa dahi sağa dönmeyecektir. Kontrolör, sonsuz döngüye girmemesi için ikili bayraklar kullanan bir döngü gecikmesine sahiptir.
* Sağa dönerken sola dönmeyi önlemek için üst kısımdaki aynı durum da kullanılmıştır.
* Yukarıdaki online izleme ekranında herhangi bir butona basılmadığı gözlemlenmiştir.
* Aşağıdaki örnekte, DI0 aktifken motorun sağa dönüşü gözlemlenmektedir.

<center>

![mikrodiagram-example-projects-06](/img/mikrodiagram-example-projects-06.png)

</center>

### Şişe Sıvı Seviye Kontrolü

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/bottle_filling.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* BINARY FLAG
* AND
* OR
* NOT
* IMPULSE RELAY
* EDGE
* Adding a Line Label

#### Diyagram Algoritması

* Şişeler üçerli gruplar halinde konveyör banttan geçer. Sensörler birbirini göremediğinde doldurma vanaları açılır ve şişelerin dolmaya başlaması sağlanır. Bu sırada doldurma vanalarının yanındaki mesafe sensörleri de ölçüm yapmaya başlar. İstenilen mesafeye ulaşılana kadar doldurulur. Daha sonra doldurma vanaları kapatılır. Konveyör bant tekrar hareket etmeye başlar ve diğer şişenin algılanması beklenir.

#### Diyagram Çözümü

* Sistem ilk açıldığında bant motoru çalışmaktadır. Sensörler şişeleri algıladığında mantık yüksektir ve motor durdurularak şişelerin doldurulması beklenir. Şişeler doldurulduktan sonra konveyör bant motoruna tekrar enerji verilir ve şişeler konveyör bant üzerinde tutulur. Kayışın ucuna yerleştirilen sıvı seviye kontrol sensörleri dolum şişelerini kontrol eder. Şişedeki sıvı seviyesi istenilen referans noktasında değilse sistem durdurulur ve arıza lambası yanar. İstenen referans değeri olmadığında sıvı seviye sensörü mantık yüksektir.

<center>

![mikrodiagram-example-projects-07](/img/mikrodiagram-example-projects-07.png)

</center>

### Şişe Paketleme Otomasyonu

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/Bottle_packaging.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* AND
* OR
* IMPULSE RELAY
* Adding a Line Label

#### Diyagram Algoritması

* Şişeler üçerli gruplar halinde konveyör banttan geçer. Sensörlerin uçları birbirini göremediğinde doldurma valfleri açılarak şişelerin dolmaya başlaması sağlanır. Bu sırada doldurma vanalarının yanındaki mesafe sensörleri ölçüme başlar. Seviye istenilen seviyeye çıkana kadar mesafe doldurulur. Sensör belirtilen seviyeye ulaştığında doldurma vanaları kapatılır. Konveyör bant hareket eder ve diğer şişeyi algılamak için bekler.

#### Diyagram Çözümü

* Sistem ilk açıldığında bant motoru çalışmaktadır.
* Sensörler şişeleri algıladığında mantık yüksektir (1) ve kayış motorunu durdurarak şişelerin doldurulması beklenir.
* Şişeler doldurulduktan sonra konveyör bant motoruna tekrar enerji verilir ve şişeler konveyör bant üzerinde tutulur.
* Konveyör bandının ucuna yerleştirilen sıvı seviye kontrol sensörleri dolum şişelerini kontrol eder. Şişedeki sıvı seviyesi istenilen referans noktasında değilse sistem durdurulur ve arıza lambası yanar. Sıvı seviye sensörü istenen referans değeri değilse mantık yüksektir (1).
* RD, renk algılamanın kısaltmasıdır, Cturn ise renk algılanıncaya kadar döndürmenin kısaltmasıdır.

<center>

![mikrodiagram-example-projects-08](/img/mikrodiagram-example-projects-08.png)

</center>

### Fonksiyonel Butonlu Led Açma Gecikmesi

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/led_switchondelay.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* AND
* NOT
* OR
* IMPULSE RELAY
* DIGITAL OUTPUT
* Adding a Line Label

#### Diyagram Algoritması

* İki tuşa aynı anda basıldığında ilk lamba yanar.
* Toplamda üç buton bulunan sistemde üç butona basıldığında ikinci lamba yanar ve motor devreye girer.
* Stop butonu ile de sistem kapatılabilir.

#### Diyagram Çözümü

* Button_A ve Button_B'ye aynı anda basıldığında, Lamba 1 yanar.
* Button_A, Button_B ve Button_C'ye aynı anda basıldığında, Lamba 2 yanar.
* Lamba 2 yandığında Motor çalışmaya başlar.
* Tüm sistemi durdurmak için bir Durdurma Düğmesi eklendi.

<center>

![mikrodiagram-example-projects-09](/img/mikrodiagram-example-projects-09.png)

</center>

### Şişe Tanıma ve Dolum Otomasyonu

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/bottle_recognition_andfilling_automation.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* AND
* OR
* IMPULSE RELAY
* EDGE
* DIGITAL OUTPUT
* NOT
* TIMER OUTPUT RELAY
* BINARY FLAG
* Adding a Line Label

#### Diyagram Algoritması

* Sağlam şişeler üç saniye boyunca doldurulacaktır.
* Sağlam ve kırık şişeler kamera ile belirlenir.
* Kırık şişeler silindirle birlikte atılır.
* Sensör şişeyi algıladıktan hemen sonra kamera çalışacaktır.

#### Diyagram Çözümü

* Start butonu ile sistem çalışmaya başlar ve kayış hareket etmeye başlar.
* Kamera, kayış hareket halindeyken şişe sensörü etkinleştirildiğinde çalışır.
* Şişelerin sağlam veya kırık olduğu bilgisi sisteme gönderilir.
* Şişe dolum noktasına ulaştığınızda kemer durur.
* Şişe kırılırsa piston çalışır ve şişe kayıştan dışarı fırlar. Sağlam ise vana açılır ve timer ile belirtilen süre içerisinde dolum işlemi yapılır.
* Doldurduktan sonra bant aktif hale gelir.
* Bu işlemler stop butonuna basılana kadar devam eder.

<center>

![mikrodiagram-example-projects-10](/img/mikrodiagram-example-projects-10.png)

</center>

### Motoru Başlat ve Sürdür

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/motorstart.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* SYMETRIC PULSE GENERATOR
* TIMER OUTPUT RELAY
* EDGE
* IMPULSE RELAY
* BINARY FLAG
* OR
* Adding a Line Label

#### Diyagram Algoritması

* DO0 çıkışına bağlı motor 5 saniye çalıştıktan sonra DO1 çıkışına bağlı lamba 10 saniye aralıklarla 0,5 saniye yanıp sönecektir.
* Bu işlemler DI0 girişine bağlı butona basıldığında başlayacak ve DI1 girişine bağlı butona basıldığında durdurulacaktır.

#### Diyagram Çözümü

* Start butonuna basıldığında motor 5 saniye çalışır.
* Motor durduğunda, lamba kenar kapısı tarafından tetiklenir ve 10 saniye boyunca 0,5 saniye aralıklarla yanıp söner.
* 10 saniye sonra motor yeniden çalışır.
* Sistem bu şekilde tekrar eder.
* Stop butonuna basıldığında tüm sistem durur.

<center>

![mikrodiagram-example-projects-11](/img/mikrodiagram-example-projects-11.png)

</center>

### Sistematik Motor Çalışması

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/systematic_motor_operation.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* EDGE
* LOW
* DIGITAL OUTPUT
* Adding a Line Label

#### Diyagram Algoritması

* Sistem limit switch, start ve stop butonları ile kontrol edilecektir.
* Start butonuna basıldığında Motor 1 çalışmaya başlayacaktır.
* Mekanik bir sistem limit anahtarı ile temas ettiğinde, Motor 2 hareketli sistem limit anahtarına basınç uyguladığı sürece Motor 1 aktif kalacaktır.
* Mekanik sistem limit anahtarı geçtikten sonra Motor 1, Motor 2 durana kadar çalışmaya devam edecektir.
* Stop Butonuna basıldığında tüm sistemler duracaktır.
* Stop Butonu ile durdurulan sistemi yeniden başlatmak için Start Butonuna tekrar basıldığında motorlar o pozisyonda çalışmaya devam edecektir.

#### Diyagram Çözümü

* Bu sistem limit switch ve stop butonu ile kontrol edilecektir.
* Mekanik sistem, durdurma düğmesine basılana kadar limit anahtarına temas ettiğinde Motor 1'i çalıştıracaktır. Motor 2, limit anahtarına basıldığı sürece çalışacaktır.
* Stop butonu tüm sistemi durduracaktır.

<center>

![mikrodiagram-example-projects-12](/img/mikrodiagram-example-projects-12.png)

</center>

### Asansör Otomasyonu

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* Adding a Line Label
* AND
* DIGITAL OUTPUT
* NOT
* TIMER OUTPUT RELAY
* ANALOG FLAG

#### Diyagram Algoritması

* Proje üç katlı asansör için hazırlanacaktır. Asansör kontrolünde yapılması gereken kontroller aşağıdaki gibi sıralanmıştır.
* Asansör kabini, motor ileri geri hareket ettirilerek yükseltilir/indirilir. Silindir gibi motorlar, güç kesildikten sonra bir süre daha dönmeye devam eder. Bu durumda asansör kabini tam istenilen yerde durmayacağı için asansörde fren sistemi olacaktır.
* Dijital çıkışlardan sadece motor ve asansör kabin aydınlatması kontrol edilecektir.
* Kabin içerisinde 3 adet kat butonu ve 1 adet acil stop butonu bulunmaktadır.
* Her katta asansör çağrı butonu bulunmaktadır.
* Asansör kabininin hangi katının kat olduğunu anlamak için her katta sensörler bulunmaktadır.
* Yerdeyken asansör kapısı açılırsa veya asansör çağırma düğmesine basılırsa kabin aydınlatması ve meşgul lambası 10 saniye yanar.
* Acil durumlarda kabini yerinde tutmak için stop butonu sağlanacaktır.
* Herhangi bir arızadan haberdar olmak için kabine sesli alarm veya alarm butonu yerleştirilmelidir.
* Tasarlanan sistemde asansör kapısı elle açılıp kapanacaktır (otomatik açma motorlu bir sistem gereklidir). Telefon sesli bildirimi PLC'den bağımsız yapılacaktır. Kabin katta olmadığı sürece asansör kapısı açılmayacaktır.

#### Diyagram Çözümü

* Bu sistemde kontrol edilecek 3 katlı asansör sistemi.
* Motor ileri çıkışı asansörü aşağı, Motor geri çıkışı asansörü yukarı hareket ettirecektir.
* Bu motorlar, güç kapatıldıktan sonra biraz daha dönmeye devam eder.
* Bu nedenle asansör her durduğunda pnömatik fren sistemi çalışır ve asansör istenilen yerde durur.
* Asansörün bulunduğu yer her katta bulunan şalterler ile kontrol edilir.
* Asansörde 3 adet kat butonu ve bir adet stop butonu bulunmaktadır.
* Asansörde ve katlarda bulunan çağrı butonlarına basıldığında asansör çağrılan yere hareket eder.
* Asansör kapısı manuel olarak açılır.
* Kapının açık veya kapalı durumu switch ile kontrol edilir.
* Kapı açıksa asansör hareket etmeyecektir.
* Kapı açıkken diğer katlardan asansör çağırılırsa meşgul lambası 10 saniye boyunca yanar.
* Bu işlem timer bloğu ile yapılır.
* Acil stop butonuna basıldığında asansörde durur.

### Analog Saat Otomasyonu

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/clock_automation.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* OR
* HIGH GATE
* BINARY FLAG
* BINARY REGISTER
* SYMETRIC PULSE GENERATOR
* TIMER OUTPUT RELAY
* EDGE
* WORD COMPARATOR
* UP/DOWN COUNTER
* Adding a Line Label

#### Diyagram Algoritması

* Merkeze bağlı dairesel bir hareket yapmak için iki kollu bir sistem tasarlanmıştır.
* Sistem her altı derecede bir saniyelik bir tetik üretir. İşlem altmış adımda tekrarlanacaktır.
* Saniye ve yelkovan tetikte 600 milisaniye hareket edecektir.
* Akrep her on dakikada bir beş yüz milisaniye hareket edecektir. Bu şekilde altmış dakika içinde saat kadranı hareketi kademeli olarak gerçekleştirilecektir.
* 12 saat sonra başa dönecek sistem hayata geçirilecek. Tekerlekleri döndüren motorlar step motorlardır.

#### Diyagram Çözümü

* Sistemde DI0 girişi step motorun girişidir.
* Saniye ibresi her tetikte (DO0) 600ms yüksek kalır.
* Dakika step motorunun çıkışı 60 saniyelik aralıklarla tetiklenir (DO1).
* Akrep step motoru her 10 dakikada bir 500 ms tetiklenir (DO2). 60 dakikanın sonunda saat kadranı kademeli olarak bir birime ilerleyecektir.
* Sisteme enerji verildiğinde otomatik olarak çalışmaya başlar.
* Başlamazsa start butonu ile başlatılır.

<center>

![mikrodiagram-example-projects-13](/img/mikrodiagram-example-projects-13.png)

</center>

### Otomatik Kapı Kontrolü

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/automatic_door_control.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* Adding a Line Label
* AND
* DIGITAL OUTPUT
* NOT
* TIMER OUTPUT RELAY

#### Diyagram Algoritması

* Sistemde iki start ve bir stop butonu olacaktır.
* İlk çalıştırma düğmesine (açma düğmesi) basıldığında kapı açılacaktır.
* İkinci başlat düğmesine (kapat düğmesi) basıldığında kapı kapanacaktır.
* Kapı açılırken kapatma düğmesine basılırsa kapı açılmaya devam eder.
* Kapı kapalı iken açma butonuna basılırsa kapı kapanmaya devam edecektir.
* Kapı açıkken veya kapanırken herhangi bir anda stop butonuna basılırsa kapı duracak ve daha sonra hangi butona basılırsa o yönde hareket edecektir.
* Kapı kapandığında araca girerseniz kapı açılacaktır. Araç geçtikten sonra kapı tekrar kapanacaktır.

#### Diyagram Çözümü

* Kapıyı açıp kapatan iki adet start butonu bulunmaktadır.
* Kapı kapalıyken kapı açılamaz, kapı açıkken kapatılamaz.
* Kapı açıkken veya kapanırken herhangi bir anda stop butonuna basılırsa kapı duracak ve daha sonra hangi butona basılırsa o yönde hareket edecektir.
* Kapı giriş ve çıkışında birer adet fotosel bulunmaktadır.
* Fotoseller verici ve alıcıdan oluşur.
* Kızılötesi ışık, alıcı ve verici arasında iletişim kurar.
* Alıcı ve verici karşılıklı olarak monte edilmiştir.
* Alıcı ile verici arasına bir cisim girdiğinde fotosel bir çıkış sinyali üretir.
* Bu sistemde kapı kapandığında ve ilk fotosel nesneyi algıladığında kapı durur ve tekrar açılmaya başlar.
* Cisim çıkınca ikinci fotosel devreye girer ve kapı kapanır.
* Stop butonu tüm sistemi durdurur.

<center>

![mikrodiagram-example-projects-14](/img/mikrodiagram-example-projects-14.png)

</center>

<center>

![mikrodiagram-example-projects-15](/img/mikrodiagram-example-projects-15.png)

</center>

### Öğeleri Sayma

[Download Project Files](https://www.mikrodev.com/downloads/example_projects/en/countitems.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* ANALOG COMPARATOR
* AND
* ON DELAY
* UP/DOWN COUNTER
* HIGH
* BINARY FLAG
* EDGE
* IMPULSE RELAY
* Adding a Lane Label

#### Diyagram Algoritması

* Ürünler konveyör banttan geçer. Toplam ürün 500 olduğunda sistem 30 saniye bekleyecek ve tekrar çalışacak ve aynı işlem tekrarlanacaktır.


#### Diyagram Çözümü

* Bu sistemde start butonu ile konveyör bant motoru çalıştırılır.
* Tezgahta şişeler var.
* Bu şişeler sayaç ile birlikte sayılır.
* Şişe sayısı 500 olduğunda kayış motoru timer'da tanımlanan sürede (30 sn) durur.
* Daha sonra kayış motoru çalışmaya devam eder.
* Bu süreç süreklidir.

<center>

![mikrodiagram-example-projects-16](/img/mikrodiagram-example-projects-16.png)

</center>

### Fırın Otomasyonu

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/oven_automation.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* AND
* OR
* DIGITAL OUTPUT
* WORD COMPARATOR
* IMPULSE RELAY
* EDGE GATE
* BINARY FLAG
* SYMMETRIC PULSE GENERATOR
* UP/DOWN COUNTER
* HIGH
* Adding a Line Label

#### Diyagram Algoritması

* Bir fırın kapısı PLC tarafından otomatik olarak kontrol edilecektir.
* Başlat düğmesi kayış motorunu çalıştırır.
* Ürün birinci fotoselin (P1) önüne geldiğinde piston açma ziline enerji verilerek kapının otomatik olarak açılması, ürün ikinci fotoselin (P2) önüne geldiğinde ise pistona enerji verilerek kapının kapanması istenir. ).
* Kapının açık veya kapalı olduğu bilgisi S1 ve S2 yakınlık sensörleri tarafından algılanır.
* Ürün P1 fotoselinden geçtikten sonra 5 saniye içerisinde açılamıyorsa kayış motoru durdurulmalı ve arıza sinyali yanmalıdır. Ürün P2 fotoselini geçtikten sonra 5 saniye içerisinde kapı kapanmaz ise yine arıza sinyal lambasının yanması gerekir.
* Arıza sinyal lambası açık olduğu sürece kayış motoru hareket etmeyecektir.
* Reset butonu ile arıza sinyali resetlenecektir.
* Stop butonuna basılması kayış motorunun çalışmasını durduracaktır.

#### Diyagram Çözümü

* Start butonu bant motorunu çalıştırır.
* Ürün ilk fotosele girdiğinde fırın kapağı açılır.
* Ürün ikinci fotoselden geçtikten sonra fırın kapağı kapanır.
* Fırın kapağının açık konumu S1 yakınlık sensörü tarafından algılanır. Fırın kapağı kapalıysa S2 yakınlık sensörü tarafından algılanır.
* Ürün fotosellerden geçtikten 5 saniye sonra kapı açılmaz veya kapanmaz ise alarm çalışacaktır.
* Reset butonu ile alarm durdurulur.
* Stop butonu aynı zamanda kayış motorunu da durdurur.

<center>

![mikrodiagram-example-projects-17](/img/mikrodiagram-example-projects-17.png)

</center>

### Akıllı Ev Uygulaması

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/smart_home_application.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* AND
* NOT
* OR
* WEEKLY TIMER
* DIGITAL OUTPUT
* RTD INPUT
* HYSTERESIS

#### Diyagram Algoritması

* Bu uygulamalar, her türlü güvenlik önleminin alınacağı evde yaşayan kişilerin işlerini en aza indirecek sensörler vasıtasıyla gerçekleştirilecektir.
* Olası bir yangın durumunda duman dedektörü alarmı tetikleyecek ve yangın söndürme fıskiyeleri çalışacaktır.
* Klima, ev sıcaklığı 25 santigrat derecenin üzerine çıktığında çalışacak ve 20 santigrat derecenin altına düştüğünde duracaktır.
* Çimler her gün saat 09:00'da sulanacaktır.
* Akşamları bahçedeki ışıklar açılacaktır.
* Hafta sonu veya gece 00:00'dan sonra hareket dedektörü ile alarm çalacaktır.
* Pencere kepenkleri yağmur yağdığında veya 11:00 ile 14:00 saatleri arasında otomatik olarak kapanacaktır.

#### Diyagram Çözümü

* Duman sensörü sayesinde monteli fıskiyeler ile yangın söndürülür.
* Evin sıcaklığı RTD sensörü ile ölçülür.
* Klima, sıcaklık 25 santigrat derecenin üzerine çıktığında devreye girer ve sıcaklık 20 santigrat derecenin altına düştüğünde durur.
* Haftalık zamanlayıcı bloğu, çimlerin 09:00 ile 09:30 saatleri arasında günlük olarak sulanmasını sağlar.
* Yağmur sensörü sayesinde yağmur yağdığında kepenkler kapanır.
* Panjurlar haftalık zamanlayıcı ile her gün 23:00 ile 02:00 saatleri arasında kapanır.
* Haftalık zamanlayıcı bloğu hırsızlığa karşı hafta sonları ve hafta içi 00:00 - 20:00 saatleri arasında çalıştırılır.
* Hava karanlık olduğunda aydınlatma sensörü sayesinde bahçe aydınlatması açılır.


<center>

![mikrodiagram-example-projects-18](/img/mikrodiagram-example-projects-18.png)

</center>

## Analog Fonksiyonlar

### RTD Sıcaklık Kontrolü

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/rtd_temperature_control.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* RTD TEMPERATURE INPUT
* DIGITAL OUTPUT
* ANALOG REGISTER
* ANALOG COMPARATOR
* HIGH
* SYMMETRIC PULSE GENARATOR
* EDGE GATE
* Adding a Line Label

#### Diyagram Algoritması

* PT100 verileri 20 saniyelik periyotlarla kontrol edilir. Ayarlanan değerin üzerinde ise dijital çıkış DQ0 aktif olur.
* Alarm durumu temizlendiğinde DQ0 devre dışı kalacaktır.

#### Diyagram Çözümü

* İstenen PT100 sensörlerinin okunması için Fiziksel I/O Blokları sekmesindeki RTD Sıcaklık Girişleri bloğu eklenmiştir.
* RTD'den gelen verilerin kontrol periyodunu belirlemek için Simetrik Darbe Üreticisi kullanılmıştır.
* Dört sensör olduğu için dört analog karşılaştırıcı kullanılır. Analog Karşılaştırıcıların inA girişine gelen sensör verileri, kontrol edilecek sıcaklık değeri kaydının inB girişine bağlandı. Simetrik Darbe Üreticisinden gelen sinyal ile karşılaştırma tetiklemesi yapılmıştır.
* Or kapısı, herhangi bir sıcaklık sensörü üzerinden alarm durumuna geçmek için kullanılır.


<center>

![mikrodiagram-example-projects-19](/img/mikrodiagram-example-projects-19.png)

</center>

### Analog Tablo ve İşlemler

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/analog_table_operations.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* ANALOG INPUT
* ANALOG TABLE
* DIGITAL INPUT
* AND
* ANALOG TABLE OPERATION
* REAL TIME PULSE GENERATOR
* Adding a Line Label

#### Diyagram Algoritması

* Beş saniyelik periyotlar için okunan analog değerler toplanacaktır. Değerler maksimum 30 adet olacaktır. 30 adetin üzerindeki okumalarda ilk yazılan değer silinecek ve son okunan değer yazılacaktır. Dijital giriş 0 aktif olduğunda sistem çalışacak, devre dışı bırakıldığında duracaktır.

#### Diyagram Çözümü

* Analog giriş değeri AI0 ile okunmuştur.
* Sistem açıksa (DI0 yüksek sinyal durumundayken), sistem zamanlama tetikleyicisinden ve And geçidinden gelen sinyalle tetiklenir.
* 30 değerlik bir dizi ile bir analog tablo oluşturuldu. Analog tablo bloğunun Clk girişine yükselen her kenar AI0'dan yeni değeri okuyacaktır. Analog tablo tipi FIFO seçildiğinde ve 30 tablo boyutu doldurulduğunda, ilk okunan değer son okunan değerin üzerine yazılacaktır.
* Analog tablo işlem bloğu da tablodaki değerleri toplar.

<center>

![mikrodiagram-example-projects-20](/img/mikrodiagram-example-projects-20.png)

</center>

## Kelime İşlevleri

### Trafik ışıkları

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/traffic_lights.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* HIGH
* OR
* BINARY FLAG
* EDGE GATE
* WORD COMPARATOR
* SYMMETRİC PULSE GENARATOR
* UP/DOWN COUNTER
* IMPULSE RELAY
* Adding a Line Label

#### Diyagram Algoritması

* DI0'a basıldığında sistem açılır, DI1'e basıldığında sistem kapanır.
* Işık 30 saniye kırmızı, 10 saniye sarı, 20 saniye yeşile dönecektir.
*Stop bu işlemi Stop butonuna basılana kadar tekrarlayacaktır.

#### Diyagram Çözümü

*Sistemi on-off kontrol etmek için darbe rölesi kullanılır. DI0, darbe rölesinin Set Girişine yani aktivasyon girişine bağlanır. DI0 sinyali yüksek olduğunda sistem açılacaktır.
* DI1 darbe rölesinin Res Girişine bağlanmıştır. DI1'den yüksek olduğunda, sistem kapanacaktır.
* Zamanlama algoritması oluşturmak için simetrik puls üreteci kullanıldı. Sistem açıldığında, simetrik puls üreteci, etkinleştirilecek bir saniyelik periyotlarla sinyaller üretmeye başlayacaktır. Simetrik darbe üreteci, yüksek ve düşük seviyeli sinyal toplam periyodunda çıkış ürettiği için bu değeri içeride 500 milisaniye olarak bloke eder. Yani 500ms+500ms=1 sn çıktı üretecektir.
* Simetrik puls üretecinden gelen sinyaller sayaç ile sayılmıştır. Yukarı/Aşağı sayacı için sayaç işlemi kullanıldı. Yukarı seçeneğini seçmek için bloğa çift tıklayın. Gelen 0,1,2,3, ... için her sinyali seçmek, 0,-1,-2,,...
* Kırmızı, sarı ve yeşil ışıkların toplam yanma süreleri 60 saniyedir. Sayaç değeri 60 olduğunda sinyalizasyon işlemi iptal olacağından sayaç sıfırlanır. sistem kapanana kadar sistem işlevi tekrarlayacaktır. İkili bayrak, zamanlayıcı çıkışı ile Kelime Karşılaştırıcı girişine bağlandığı için kullanılır.
* Işık 0-30 saniye aralığında kırmızı, 30-40 aralığında sarı, 40-60 saniye aralığında yeşile dönecektir.

<center>

![mikrodiagram-example-projects-21](/img/mikrodiagram-example-projects-21.png)

</center>

### Kelime Tablosu ve İşlemler

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/word_table_operations.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* WORD REGISTER
* AND
* DIGITAL INPUT
* WORD TABLE
* WORD TABLE OPERATION
* REAL TIME PULSE GENERATOR
* Adding a Line Label

#### Diyagram Algoritması

* Beş saniyelik periyotlar için okunan word değerleri toplanacaktır. Değerler maksimum 30 adet olacaktır. 30 adetin üzerindeki okumalarda ilk yazılan değer silinecek ve son okunan değer yazılacaktır. Dijital giriş 0 aktif olduğunda sistem çalışacak, devre dışı bırakıldığında duracaktır.

#### Diyagram Çözümü

* Word registeri Word Table girişine bağlandı.
* Sistem açıksa (DI0 yüksek sinyal durumundayken), sistem zamanlama tetikleyicisinden ve And geçidinden gelen sinyalle tetiklenir.
* 30 değerlik bir dizi ile bir kelime tablosu oluşturuldu. Kelime tablosu bloğunun Clk girişine yükselen her kenar, kelime kaydından yeni değeri okuyacaktır. Word tablo tipi FIFO seçildiğinde ve 30 tablo boyutu doldurulduğunda, ilk okunan değer son okunan değerin üzerine yazılacaktır.
* Word tablosu işlem bloğu da tablodaki değerleri toplar.

<center>

![mikrodiagram-example-projects-22](/img/mikrodiagram-example-projects-22.png)

</center>

## GSM İletişim Örnekleri

### Sıcaklık Değerlerini SMS ile Gönderin

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/send_temp_via_sms.zip)

#### Tasarımdan Önce Bilinmesi Gerekenler

* RTD INPUT
* SMS SEND
* WEEKLY TIMER
* STRING REFERENCE
* Adding a Line Label

#### Diyagram Algoritması

*Hafta içi saat 09:00'da belirlenen beş numaraya sms olarak gönderilmesi rica olunur.


#### Diyagram Çözümü

* Haftalık Zaman Bloğu kullanılarak, sistem hafta içi sadece 9.00 ile 9.15 arasında aktif hale gelir.
* PT1000 sensörü RTD girişlerine bağlanır.
* Sıcaklık sensöründen okunan değerler için SMS'in gönderildiği telefon numaraları tanımlanır.
* 'String tablosu' bölümünde gönderilecek mesajın içeriği yazılır.
* Her bir RTD Giriş bloğunun blok numarası, başına bir '$' işareti konarak tanımlanır. Örneğin RTD0 girişinden sıcaklık değerini okumak için SMS içeriğine 5000$ yazılır. RTD0 giriş değeri 5000$, RTD1 giriş değeri ise 5001$'dır.

<center>

![mikrodiagram-example-projects-23](/img/mikrodiagram-example-projects-23.png)

</center>

### Alarmda Arama Yap

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/make_call_on_alarm.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* RTD INPUT
* BINARY FLAG
* OR
* NOT
* HIGH
* EDGE GATE
* IMPULSE RELAY
* RUN TIME
* LONG COMPARATOR
* LONG MATH
* ON DELAY
* SYMMETRİC PULSE GENARATOR
* DTMF ORIGINATE CALL
* ANALOG COMPARATOR
* Adding a Line Label

#### Diyagram Algoritması

* 20 sn periyotta kontrol edilen bir RTD sıcaklık sensörü verisi belirtilen değeri geçtiğinde DTMF çağrısı başlayacaktır. Sırayla üç farklı numara aranacaktır. Arama işlemi bittikten sonra, 30 dakika içinde sıcaklık değeri tekrar konum alarmında ise arama işlemi tekrarlanır.

#### Diyagram Çözümü

* Analog register ile alarm durumunun oluştuğu sıcaklık değeri belirlenir. Simetrik puls üreteci ile sıcaklık değerleri her 20 saniyede bir kontrol edilir. RTD girişlerinin her biri bir analog karşılaştırıcı tarafından kontrol edilir.
* Belirtilen sıcaklık değerinin üzerindeki analog kayıtlardan herhangi bir analog karşılaştırıcı blok çıkışı, yüksek seviyeli bir sinyal üretecek ve bir alarm durumuna geçecektir. Alarm durumundan geçtikten sonra, arama süresi bir saniye aralıklarla artmaya başlayacaktır.
* 30 dakika içerisinde sıcaklık düşmez ise sayaç değeri 1800 (1800sn / 60 = 30dk) olduğunda Ori girişi sıfırlanır ve arama yeniden başlar.
* Çağırma işlemi analog karşılaştırıcıdan alınan verilere göre yapılacaktır. Sıcaklık 0-30 arasında ise ilk arama, 100-180 saniye arası ve 200-230 arası üçüncü arama yapılır.
* DTMF Originate Call Block'ta aranacak numaralar çift tıklanır.


<center>

![mikrodiagram-example-projects-24](/img/mikrodiagram-example-projects-24.png)

</center>

<center>

![mikrodiagram-example-projects-25](/img/mikrodiagram-example-projects-25.png)

</center>

### SMS ile Fırın Otomasyonu

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/oven_automation_via_sms.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* DIGITAL OUTPUT
* AND
* NOT
* SMS RECEIVER
* SMS SEND
* STRING REFERENCE
* TIMER OUTPUT RELAY
* ON DELAY
* IMPULSE RELAY
* Adding a Line Label

#### Diyagram Algoritması

* Fırın projesine SMS atılarak sistem her an devreye girecektir.
* +441234567890'a "Hamur hazırla" mesajı atıldığında sistem çalışacaktır.
* Otomasyon tarafında komut verildiğinde 50 saniye boyunca hamur yoğurma kabına un dökülür. 20 saniye su eklenir ve maya 10 saniye dökülür.
* Karışım bittikten sonra karışım motoru 15 dakika çalışır ve fırına "Hamur yaptım" mesajı gönderilir.

#### Diyagram Çözümü

* Belirlenen numaradan "hamur hazırla" mesajı geldiğinde darbe röleli sistem açılacaktır. Acil müdahalede sistemi kapatmak veya hamur işlemini tamamlamak için DI0 darbe rölesinin Sif girişine bağlanır.
* Zamanlayıcı çıkış rölesi farklı zamanlarda un, su ve maya eklemek için kullanılır. Belirlenen süre boyunca aktif olduktan sonra sistem pasif hale gelecektir.
* Sistem açıkken un, su ve maya alımı tamamlandıktan sonra DQ0, DQ1 ve DQ2 çıkışları pasif olacaktır. Bu dijital çıkışlar, yüksek seviyeli bir sinyal üretmek için Not bloğuna bağlanır.
* Un, su ve maya alındıktan sonra And kapısı çıkışı aktif olacak ve karıştırma işlemi başlayacak ve karıştırma süresi bittikten sonra mesaj gönderilecektir.

<center>

![mikrodiagram-example-projects-26](/img/mikrodiagram-example-projects-26.png)

</center>

<center>

![mikrodiagram-example-projects-27](/img/mikrodiagram-example-projects-27.png)

</center>

### Kayıt Değerlerini İnternete Gönderin

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/send_register_value_to_internet.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* TCP SOCKET BLOCK
* MODBUS TCP SLAVE
* WORD REGISTER
* GSM SIGNAL QUALITY
* GPRS APN
* CSQ
* CONNECTION
* GPRS IP

#### Diyagram Algoritması

* GSM haberleşmesi ile word register değerini okumak ve değiştirmek için Modbus TCP protokolü.

#### Diyagram Çözümü

* Online izleme ekranı görüntüsünün yer aldığı yukarıdaki resimde, modbus adresi 4000 olan word register datası GSM haberleşmesi ile okunur.
* PLC cihazı, GSM bağlantısı için server ve slave olarak düzenlenmiştir.
* Sunucu TCP soket bloğundan seçilmiş ve dinleme portu 502 olarak yazılmıştır. Bağlantı herhangi bir IP adresinden istendiği için IP filtresi tanımlanmamıştır. Yalnızca bir IP bağlanacaksa, bir IP filtresinin belirtilmesi gerekir.
* Modbus ID numarası, Modbus TCP bağımlı blok içeriği tarafından belirlenir. Modbus slave adresi, birden fazla slave terminal ile iletişime izin verecektir.
* GSM bağlantısını sağlamak için öncelikle Mikrodiagram'da Araçlar bölümünde Mikroterminal açılır. APN açıklaması yapıldıktan sonra CSQ, CONNECTION ve GPRSIP sorgulaması yapılmalıdır.
* Kullanılan data hattının statik IP adresi varsa GSM operatöründen öğrenilebilecek APN numarası doğru girilmelidir. Örneğin GSM operatörünün APN adresi 'mgbs' ise AT+GPRSAPN komutu 'mgbs' olarak yazılır ve yazma butonuna basılır.
* GSM hattının kalitesini okumak için AT + CSQ komut satırında oku butonuna basınız. Örnekte CSQ değeri 16 ile 20 arasında okunmaktadır. Bu değer bağlantının yapılması için yeterli çekim gücünün olduğunu gösterir.

GSM hattını açtıktan sonra AT+CONNECTION=? komut gönderilir. Komut yanıtı '6' ise GPRS IP'si alınır. AT+GPRSIP=? IP adresini bulmak için komut gönderilir, cihaz bağlanır.

<center>

![mikrodiagram-example-projects-28](/img/mikrodiagram-example-projects-28.png)

</center>

<center>

![mikrodiagram-example-projects-29](/img/mikrodiagram-example-projects-29.png)

</center>

### GPRS üzerinden iki PLC ile iletişim kurma

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/comm_two_plc_via_gprs.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* TCP SOCKET
* MODBUS TCP MASTER
* MODBUS TCP SLAVE
* HIGH
* SYMETRIC PULSE GENERATOR
* WORD REGISTER
* MODBUS WORD READER
* GPRS APN
* CONNECTION
* CSQ
* GPRS IP

#### Diyagram Algoritması

* MODBUS Master olarak konfigüre edilen PLC, MODBUS Slave olarak konfigüre edilen PLC'den bir kayıt değeri okuyacaktır. MODBUS protokolünde bir SLAVE cihazı bir "TCP Sunucu Soketi" oluşturur, ancak MASTER cihazı "TCP İstemci Soketi" oluşturur. MASTER cihazı, SLAVE cihazını bağlar. Bu yüzden MASTER, SLAVE cihazının IP ve PORT bilgisini bilmelidir.

#### Diyagram Çözümü

* Sunucu ve istemci olarak iki cihaz ve iki ayrı diyagram kullanılmaktadır.
* TCP Soket Bloğunda ortam türü olarak GSM seçilir.
* Sunucu şemasında Modbus TCP slave bloğu kullanılmıştır. Bu, istemci cihazın sunucuya bağlanmasına izin verir. ID belirlenerek birden fazla cihaz slave olarak çalışabilecektir. TCP soket bloğunda sunucu seçilir ve dinleme portu girilir.
*SLAVE cihazına bağlanmak için client diyagramına MODBUS TCP MASTER bloğu eklenir. MODBUS word okuyucu bloğunun yükselen kenarı tetik girişine her geldiğinde, bağlı olduğu cihazdan belirtilen register okunur. Slave olarak tanımlanan cihazın ID'si MODBUS word okuyucu bloğundaki "ID" tanımlama alanına yazılmalıdır.
* Modbus adresli Word Register Block'un MODBUS register adresi 4000 olduğundan, Modbus Word Okuyucu Bloğunda MODBUS adresi 4000 olarak ayarlanır. İstemci cihazın TCP soketine bağlanılacak PLC'nin IP numarası ve dinleme port değerleri girilir. SLAVE cihazının IP ve dinleme port değerleri GPRSIP ve LISTENPORT komutları ile Mikroteminal uygulama konsolu üzerinde öğrenilebilir.
* Mikroterminal üzerinden APN, CSQ ve GPRSIP değerlerini de kontrol etmeniz gerekmektedir. Bağlantı ayarları için lütfen MODBUS TCP GSM İletişim örneğine bakınız.

#### Ana Cihaz:

<center>

![mikrodiagram-example-projects-30](/img/mikrodiagram-example-projects-30.png)

</center>

#### Bağımlı Aygıt:

<center>

![mikrodiagram-example-projects-31](/img/mikrodiagram-example-projects-31.png)

</center>

### SMS ile PLCRESET ve GSMRESET Tanımlama

AT komutlarını mobilden kullanmak için bloklar aşağıdaki gibi kurulmalıdır.

<center>

![sms-block-01](/img/sms-block-01.png)

</center>

<center>

![sms-block-02](/img/sms-block-02.png)

</center>

<center>

![sms-block-03](/img/sms-block-03.png)

</center>

AT+PLCRESET=? ve AT+GSMRESET=? Komut gönderildiğinde cihazda saklanan bilgiler PLC tarafından sms olarak gönderilir.

<center>

![sms-block-04](/img/sms-block-04.png)

</center>

AT+PLCRESET=26400 ve AT+GSMRESET=600 komutu gönderildiğinde, belirtilen sayı PLC'ye saniyeler içinde set edilir.

<center>

![sms-block-05](/img/sms-block-05.png)

</center>

AT+PLCRESET= tekrarla ve AT+GSMRESET= Komut gönderildiğinde set değerinin PLC'ye işlendiği görülür.

<center>

![sms-block-06](/img/sms-block-06.png)

</center>

#### SMS Konsolunu Kullanma

#### Tanım

Cep telefonundan AT komutları göndererek PLC'deki verileri alıp değiştirebilirsiniz. Aşağıda örnek uygulamalar ve birkaç AT komutunun iletimi gösterilmektedir.

#### Örnek 1

SMS konsolunu etkinleştirmek için:

<center>

![sms-block-07](/img/sms-block-07.png)

</center>

SMS yoluyla bir dizi ayarlamak için:
Cihaza aşağıdaki biçimde SMS metin mesajı gönderin:

AT+FBD=Blok No,NewTextValue

String refeecne bloğu (Blok No: 2) ve String Text Offset 1 ile referans verilen String Metni güncellemek için cihaza aşağıdaki gibi bir SMS gönderin:

AT+FBD=2,+905457878774

Uzaktan kumandadan bir dize referans değerini değiştirmek için cihaza yukarıdaki SMS metin mesajını gönderin.

<center>

![sms-block-08](/img/sms-block-08.png)

</center>

#### Örnek 2:

SMS konsolunu etkinleştirmek için, SMSR Msj girişine "AT + SMS" Dize Referans Metni Ofseti'ni seçin. Kelime Kayıt değeri 0'dır.

<center>

![sms-block-09](/img/sms-block-09.png)

</center>

Word registerindeki değeri değiştirmek için Mobil'den AT + FBD = 3000,20 gönderilir.Word Register değeri 20'dir.

<center>

![sms-block-10](/img/sms-block-10.png)

</center>

Aşağıdaki tablo, AT komutlarının cep telefonundan gönderilen ve gelen yanıtlarını gösterir.

<center>

![sms-block-11](/img/sms-block-11.png)

</center>


## Ethernet İletişimi

### MODBUS TCP Ethernet İletişimi

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/modbus_tcp_ethernet_communication.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* TCP SOCKET BLOCK
* MODBUS TCP SLAVE
* MODBUS TCP MASTER
* REAL TIME PULSE GENERATOR
* MODBUS WORD READER
* LOCAL IP
* MAC
* GATEWAY
* NETMASK
* Adding a Line Label

#### Diyagram Algoritması

* MODBUS Master olarak konfigüre edilen PLC, MODBUS Slave olarak konfigüre edilen PLC'den bir kayıt değeri okuyacaktır. MODBUS protokolünde bir SLAVE cihazı bir "TCP Sunucu Soketi" oluşturur, ancak MASTER cihazı "TCP İstemci Soketi" oluşturur. MASTER cihazı, SLAVE cihazını bağlar. Bu yüzden MASTER, SLAVE cihazının IP ve PORT bilgisini bilmelidir.

#### Diyagram Çözümü

* Sunucu ve istemci olarak iki cihaz ve iki ayrı diyagram kullanılmaktadır.
* TCP Soket Bloğunda medya türü olarak Ethernet seçilir.
* Sunucu şemasında Modbus TCP slave bloğu kullanılmıştır. Bu, istemci cihazın sunucuya bağlanmasına izin verir. ID belirlenerek birden fazla cihaz slave olarak çalışabilecektir. TCP soket bloğunda sunucu seçilir ve dinleme portu girilir.
*SLAVE cihazına bağlanmak için client diyagramına MODBUS TCP MASTER bloğu eklenir. MODBUS word okuyucu bloğunun yükselen kenarı tetik girişine her geldiğinde, bağlı olduğu cihazdan belirtilen register okunur. Slave olarak tanımlanan cihazın ID'si MODBUS word okuyucu bloğundaki "ID" tanımlama alanına yazılmalıdır.
* Modbus adresli Word Register Block'un MODBUS register adresi 4004 olduğundan, Modbus Word Reader Block'ta MODBUS adresi 4004 olarak ayarlanır. İstemci cihazın TCP soketine bağlanılacak PLC'nin IP numarası ve dinleme port değerleri girilir. LOCALIP komutu ile Mikroteminal uygulama konsolu üzerinde SLAVE cihazının IP ve dinleme port değerleri öğrenilebilir.
* TCP soket bloğunun içinden "TCP server" seçilerek 502 portu dinleme olarak yazılmıştır.Herhangi bir ip adresinden bağlanmak istediğiniz için ip filtresi yazılmadı. IP'den yalnızca birinin bağlanması gerekiyorsa, belirlemek için IP filtresine ihtiyaç duyulacaktır.
* Mikroterminal üzerinden MAC, GATEWAY ve NETMASK değerlerini de kontrol etmeniz gerekmektedir. Bağlantı ayarları için lütfen MODBUS TCP Ethernet İletişim örneğine bakın.
* Lokal IP adresi, PLC cihazının IP adresi belirtilir.
* Yerel Ip ayarı, alt ağ maskesini, varsayılan ağ geçidi parametrelerini kullanarak yapılandırılmalıdır.
#### Ana Cihaz:

<center>

![mikrodiagram-example-projects-32](/img/mikrodiagram-example-projects-32.png)

</center>

#### Bağımlı Aygıt:

<center>

![mikrodiagram-example-projects-33](/img/mikrodiagram-example-projects-33.png)

</center>

### DevNET İletişimi

#### Tasarımdan Önce Bilmeniz Gerekenler

* DEVNET MAIN
* DEVNET REGISTER
* WORD REGISTER
* Adding a Line Label

#### Diyagram Algoritması

* Aynı yerel ağa bağlı iki farklı PLC ürünü vardır.
* DevNET bloklarını kullanarak PLC word register değerini diğer cihazın DevNET registerlarına aktaracağız.

#### Diyagram Çözümü

İlk Cihaz

* Word kayıtlarında DevNET ile Sync seçilmelidir.
* Değerler Word kayıtlarına girilir.
* DevnetMain ayarları, bilinmesi gerekenler sekmesinden ön tasarım olarak bakıldı. Zaman Aşımı ve Döngü Gecikme süreleri, iki cihaz iletişim halinde olduğundan eşittir.

İkinci Cihaz

* Diğer PLC için DevNET Main ayarları yapılmıştır.
* DevNET register bloğuna okunacak cihazın adresi ve blok numarası yazılır.
* Resimlerde görüldüğü gibi birinci cihazın word register değerleri ikinci cihazın DevNET registerlarında okunur.

## Seri iletişim

### RS485 üzerinden Ağ Analizörü Okuma

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/reading_analyzer_via_rs485.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* SERIAL PORT BLOCK
* MODBUS RTU MASTER
* SYMMETRİC PULSE GENARATOR
* HIGH
* MODBUS WORD READER
* ANALOG MATH
* Adding a Line Label

#### Diyagram Algoritması

* RS485 iletişim portu ile ağ analizöründen voltaj verilerinin okunması.

#### Diyagram Çözümü

* Seri haberleşme için seri port ve RTU master blok kullanılmaktadır. Ağ analizörünün Baudrate, Databit ve Parity değerleri seri port bloğuna girilir.
* Seri Port Bloğunda Seri port numarası 0 girilir ve Port Tipi RS485 seçilir.
* Analizörün slave adresi ve register adresi Modbus word okuyucu bloklarına girilir.
* Değer, simetrik puls üretecinden yükselen her kenarda okunur.
* Şebeke analizör verileri word formatında olduğu için 222.7 V voltaj değeri 2227 olarak okunur. Analizör ekranından okunan gerçek değere Analog Math Block ile bölme işlemi yapılarak ulaşılır.

<center>

![mikrodiagram-example-projects-34](/img/mikrodiagram-example-projects-34.png)

</center>

<center>

![mikrodiagram-example-projects-35](/img/mikrodiagram-example-projects-35.png)

</center>

### İki PLC'nin Modbus Tablo Okuyucu ile Seri Haberleşmesi

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/seri_communication_via_modbus_table.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* SERIAL PORT BLOCK
* MODBUS RTU MASTER
* MODBUS RTU SLAVE
* HIGH
* SYMMETRİC PULSE GENARATOR
* WORD REGISTER
* ANALOG REGISTER
* MODBUS READ/WRITE TABLE
* WORD TABLE OPERATION
* ANALOG TABLE OPERATION
* Adding a Line Label

#### Diyagram Algoritması

RTU Slave cihazındaki 10 Word ve 10 Analog registerin RTU Master cihazı tarafından RS485 haberleşme protokolü ile okunması.

#### Diyagram Çözümü

* Slave cihaz için Modbus blokları sekmesinde bulunan Modbus RTU slave bloğu eklenir.
* Seri haberleşme için Seri Port Blok eklendi ve haberleşme parametreleri ayarlandı. Slave ve master cihazlar aynı baud hızına, veri bitine ve parite seçeneğine sahip olmalıdır.
* Yukarıdaki izleme ekranı RTU bağımlı cihazıdır ve aşağıda RTU Master cihazının ekran görüntüsü yer almaktadır.
* Master cihaz için Modbus blokları sekmesinde bulunan Modbus RTU master bloğu eklendi.
* Modbus tablo bloğu her yükselen kenarı okuduğundan, tetik simetrik puls üreteci aracılığıyla gönderilir.
* Word ve Analog gibi iki farklı kayıt formatından beri iki modbus tablo bloğu kullanılmıştır. Çünkü kelime kayıtları 4000'den ve analog kayıtlar 6000'den başlar.
* Modbus tablo bloklarının Mas girişine RTU master hat etiketi eklendi.
* Simetrik puls üreteci tetik için Modbus tablo bloklarının Trg girişine bağlanır.
* Word ve Analog değerlerinin okunabilmesi için iki ayrı Tablo Bloğu eklenmiştir. Tablo bloğunun çıkışı, Modbus tablo bloğunun Tab girişine bağlanır.
* Kelime tablosu alanı, okunacak kelime kaydının iki katı büyüklüğünde oluşturulmalıdır.
* Modbus tablo bloğundan okunan analog değerler, RTU Slave'den okunan kayıt sayısının iki katıdır. Modbus tablo bloğuna girilen sayının iki katı kadar analog tablo boyutu oluşturulur. Örneğin; RTU Slave'de 10 analog register vardır. RTU Master tarafından okunan modbus tablosundaki kayıt sayısı 20'dir. Veri aktarımı için ayrıca tablo boyutu 40 olan bir analog tablo bloğu eklenmiştir.
* Modbus tablosu okuma fonksiyonu "0x03 Okuma Tutma Kaydı" seçilmelidir.
* İşlem bloklarından "Okuma Ofseti" seçilerek tablo indeks numarası girilir.
* Modbus tablo bloklarından 10 veri almak için 10 Analog ve 10 Word tablo işlem bloğu eklendi. Bu yöntem aynı zamanda iki tablo işlem bloğu (analog ve word için) eklenerek ve kayıt defteri tablo işlem bloklarının "inB" girişine bağlanarak ofset değeri değiştirilerek de kullanılabilir.

Ana Cihaz:

<center>

![mikrodiagram-example-projects-36](/img/mikrodiagram-example-projects-36.png)

</center>

Köle Aygıtı:

<center>

![mikrodiagram-example-projects-37](/img/mikrodiagram-example-projects-37.png)

</center>

## Dijital Kontrol Sistemleri

### PID Kontrollü Havalandırma Sistemi

[Download Project Files](http://www.mikrodev.com/downloads/example_projects/en/pid_controller_ventilation_system.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* DIGITAL INPUT
* ANALOG INPUT
* ANALOG OUTPUT
* PID CONTROLLER
* ANALOG DUAL MULTIPLEXER
* Adding a Line Label

#### Diyagram Algoritması

* RTD0 sıcaklık girişi sıcaklık değeri ile okunan sistemde analog çıkışa bağlı fan ile sıcaklığın kontrol edilmesi istenir.
* PT100 sensörü RTD0 girişine bağlanır. Sıcaklık ölçümü -50 ile 100 santigrat derece arasında yapılır.
* Ortam sıcaklığı arttıkça analog çıkış 0'a bağlanan fanın hızı da artacaktır.
* Ortamın çıkış çıkışı 0'a bağlı olan fan motoru hızı da art. Analog çıkış, 4 ile 20 mA arasında akım üretir. Motor hızı arttıkça, sıcak hava dışarı akacaktır. Bu, ortamın ısınmasını önleyecektir.

* PID parametreleri autotunning ile hesaplanacaktır.
* Acil durumda dijital giriş sinyali bilgisi alınır. Dijital giriş 0'a yüksek seviyeli bir sinyal girildiğinde analog çıkış değeri sıfırlanacaktır (4 mA).

#### Diyagram Çözümü

*Sistemin sıcaklığının 60 milisaniye olacağı tahmin edilmektedir.
* PID parametrelerinin Autotunning ile ayarlanması için sistem 'autotunning' modunda çalıştırılır. Mikroterminal konsolundan port açılarak hesaplanan PID parametrelerinin görüntülenmesi beklenir. Sistem olası koşullar için test edilerek 30 dakika boyunca PID parametrelerinin hesaplanması sağlanır. Hesaplama süresi sistem koşullarına göre değişir.
* PID parametreleri hesaplandıktan sonra, PID bloğuna çift tıklandığında mod seçeneği 'otomatik' moda geçer. Otomatik modda sistem daha önce hesaplanan PID parametrelerine göre çalışmaya devam edecektir.
* Acil durumlarda analog çıkışı sıfırlamak için analog çoklayıcı kullanılır. Acil durum düğmesine basılmazsa (DI0) çoklayıcının I1 kanalından gelen analog değer analog çıkışa aktarılacaktır. DI0 butonuna basıldığında multiplexer'ın I2 kanalından gelen 4 mA değeri analog çıkışa aktarılacaktır.

## Makro Örnekleri

### Makroda Mantıksal VE İşlem Tanımlayın

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/and_operation_on_macro.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* HIGH
* SYMMETRIC PULSE GENARATOR
* BINARY FLAG
* BINARY REGISTER
* MACRO

#### Diyagram Algoritması

* Sekiz ikili kayıt değeri, mantıksal "Ve" işlemiyle makro tarafından kontrol edilir.
* Makro blok sadece tetik aktifken çalışacaktır.

#### Diyagram Çözümü

<center>

![mikrodiagram-example-projects-38](/img/mikrodiagram-example-projects-38.png)

</center>

Makro Komutları:

```
[v0=$0&$1] // "and(&)" işleminde $0 ve $1 kayıtlarını değerlendirin ve sonucu v0 değişkenine atayın
[v1=v0&$2] // "ve" işleminde v0 ve $2 kayıtlarını değerlendirin ve sonucu v1 değişkenine atayın
[v2=v1&$3] // "ve" işleminde v1 ve $3 kayıtlarını değerlendirin ve sonucu v2 değişkenine atayın,
[v3=v2&$4] // "ve" işleminde v2 ve $4 kayıtlarını değerlendirin ve sonucu v3 değişkenine atayın,
[v4=v3&$5] // "ve" işleminde v3 ve $5 kayıtlarını değerlendirin ve sonucu v4 değişkenine atayın
[v5=v4&$6] // "ve" işleminde v4 ve $6 kayıtlarını değerlendirin ve sonucu v5 değişkenine atayın,
[v6=v5&$7] // "ve" işleminde v5 ve $7 kayıtlarını değerlendirin ve sonucu v6 değişkenine atayın,
[o0=v6+0] // Değişken 6'daki (v6) makro bloğu değerini 0 çıkışına aktarın.
[E] // Makro sonu tanımlama işlemi
```

7($7) blok numaralı registerin değerinin 0 ve diğer registerlerin değerinin 1 olduğu işlemin sonucu:

<center>

![mikrodiagram-example-projects-39](/img/mikrodiagram-example-projects-39.png)

</center>

Sonuç tüm kayıt değerleri 1:

<center>

![mikrodiagram-example-projects-40](/img/mikrodiagram-example-projects-40.png)

</center>

### Poligon Valf Lineerizasyonu

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/poligon_valve_linearization.zip)

#### Tasarımdan Önce Bilmeniz Gerekenler

* WORD REGISTER
* ANALOG REGISTER
* BINARY REGISTER
* MACRO

#### Diyagram Algoritması

* Giriş değeri on farklı noktada parametrik olarak kalibre edilerek çıkışa aktarılır.

#### Diyagram Çözümü

<center>

![mikrodiagram-example-projects-41](/img/mikrodiagram-example-projects-41.png)

</center>

Bazı bölümler makro içinden açıklanmıştır. Tüm makro projede.

```
[v0=$3000b0] // Controls whether the value in the register with block number 3000 is equal to or greater than 0. If the condition is satisfied, the v0 variable becomes 1.
[v1=$3000<10] // Controls whether the value in the register with block number 3000 is less than 10. If the condition is satisfied, the v1 variable becomes 1.
[v2=$3000b10]
[v3=$3000<20]
...........
...........
...........
[v20=v0&v1] // Variables 'v0' and 'v1' are subjected to 'And(&)' operation. If the condition is satisfied, the v20 variable becomes 1.
[v21=v2&v3]
..........
..........
..........
[IF,v20,17]
[v30=$3001-$3002] // The value of the register with the block number 3002 is subtracted from the block number 3001. The result is written in variable v30.
[v31=$3003-$3004]
[v32=v31/v30] // The value of the variable v31 is divided by the value of the variable v30. The result is written in variable v32.
[v33=$3000-$3002]
[$0=1+0] // If the block number is 0, the value of the register becomes 1.
[$1=0+0] // If the block number is 1, the value of the register becomes 0.
[$2=0+0]
[$3=0+0]
[$4=0+0]
[$5=0+0]
[$6=0+0]
[$7=0+0]
[$8=0+0]
[$9=0+0]
[$5008=v32*v33] // Variables v32 and v33 are multiplied and written into the block numbered 5008.
[E] // Macro operations end
..........
..........
..........
[E]
```

<center>

![mikrodiagram-example-projects-42](/img/mikrodiagram-example-projects-42.png)

</center>

## Cihaz Seri Numarasını Alma

Bir "Uzun Matematik" bloğu kullanarak cihazın seri numarasını alabilirsiniz.

Seri numarası, "30000" adresli özel bir kayıt defterinde tutulur. Bu kayda erişmek için "Uzun Matematik" bloğunda "Get" matematik operatörünü kullanmanız gerekir. Aşağıdaki resim gerekli yapılandırmayı göstermektedir.

<center>

![logic-app-01](/img/logic-app-01.png)

</center>

## Mikrodev Cihazındaki Telefon Numaralarının SCADA Üzerinden Güncellenmesi

Mikrodev cihazlarını kullanarak (pp* olmayan yazılımlar ile) SMS mesajları gönderip alabilirsiniz. Mesajların içeriği ve telefon numaraları, PLC cihazının string kayıtlarında saklanır. Ve bu diziler PLC projesinde "string tabloları" üzerinde konfigüre edilir.

Bazen SCADA sisteminiz üzerinden SMS mesajları için telefon numarasını görüntülemek ve güncellemek isteyebilirsiniz. Aşağıdaki örnek, bunu nasıl başarabileceğinizi göstermektedir.

#### Telefon Numarasını Kaydetme

Modbus gibi endüstriyel protokoller yalnızca sayısal veri türlerini desteklediğinden, telefon numaranızın sayısal bir sürümünü kaydetmeniz gerekir. Ve bir telefon numarasını saklamak için tek bir "Uzun Kayıt" yeterli olmadığından, bu işlem "2 Uzun Kayıt" kullanılarak yapılabilir. Telefon numarasını 2 parçaya bölüp bu registerler üzerinden bu numaraları yazıp okuyabilirsiniz. Ama tabii; ayrıca telefon numarası kısımlarını içeren bu "2 Uzun Kayıt" ı tek bir "String Kaydı"na dönüştürmeniz gerekecektir. Ve bu kaydı SMS bloğunun "telefon numarası girişine" kopyalayın.

<center>

![logic-app-02](/img/logic-app-02.png)

</center>

"StringManip Block"ta "ToString" oluşturma ve bunu bir string register'a, yani "index 2"ye yazmanız gerekir.

<center>

![logic-app-03](/img/logic-app-03.png)

</center>

#### Telefon Numarasını Biçimlendirme

Örneğimizde; telefon numarası bölümlerinin biçim girişi olarak 10. ve 11. String dizinlerini kullanıyoruz:

<center>

![logic-app-04](/img/logic-app-04.png)

</center>

Bu formatlara ve gerçek telefon numarası bölümlerine dikkat etmelisiniz. Birbirlerine uygun olmalıdır. Bunun anlamı;

Telefon numaranız +905556008899 ise, yapılandırmanız şöyle olacaktır:

10. dizi dizininin içeriği: "+90%04s"

```
Burada "%04s", numaranızın başına 4 haneye kadar olan sıfırları eklemek anlamına gelir.
```

11. dize dizininin içeriği: "%06s"

```
Burada "%06s", numaranızın başına 6 haneye kadar olan sıfırları eklemek anlamına gelir.
```

Dolayısıyla, ilk uzun kaydınız "5556" ve ikinci uzun kaydı "8899" içeriyorsa, bu biçimlendirme kuralları kullanılarak bu sayılar "+905556008899" ile birleştirilir.

<center>

![logic-app-05](/img/logic-app-05.png)

</center>

Aşağıdaki "StringManipulation" bloğunda, "Append" işlemini seçmeli ve sonucu bir string register'a yani "index 1"e kopyalamalısınız.

<center>

![logic-app-06](/img/logic-app-06.png)

</center>

#### Mantığı Çalıştırma

"Telefon numarası dizisi" mekanizmanızı yapılandırdıktan sonra, bu diziyi SMS bloğuna bağlamanız ve "tetikleyici" kaydına "1" yazmanız yeterlidir.

<center>

![logic-app-07](/img/logic-app-07.png)

</center>

#### SCADA'da Görüntüleme ve Güncelleme

SCADA tarafında; PLC projesinde iki farklı bileşende "2 Uzun Kayıt" ve "tetikleyici" kaydı tetiklemek için bir uygula düğmesi görüntüleyebilirsiniz. Buradaki tek dezavantaj, kullanıcının PLC projesindeki format dizilerinde belirtilen sayıda karakter kullanması gerektiğidir.

Örnek PLC projesini şuradan indirin: [here](https://www.mikrodev.com/files/phonestring.zip) 

* pp olmayan bellenim: 2 tür bellenim vardır, varsayılan ve 3G bağlantısı için noktadan noktaya ağ yığınına sahip olan. Noktadan noktaya bellenim ile daha yüksek indirme/yükleme hızına sahip olursunuz, ancak sms veya arama işlevi olmaz.

## MQTT İletişim

### Örnek 1

#### MQTT Yayınlama/Abone Olma Yapılandırması

[Download Project Files](https://mikrodev.com/downloads/example_projects/en/mqtt_test2.rar) 

#### Tasarımdan Önce Bilmeniz Gerekenler

* TCP SOCKET

* MQTT CONFIG

* REAL TIME PULSE GENERATOR

* WORD FLAG

* WORD REGISTER

* HIGH

#### MQTT İçin Parametre Ayarları

<center>

![mqtt-app-01](/img/mqtt-app-01.png)

</center>

* MQTT iletişimi için TCP soket bloğunda istemci modu tanımlanmalıdır.
* Sunucu ip ve port bilgileri TCP soket bloğuna girilir. Medya türü blok içinde seçilir.
* TCP soket bloğunun Ena girişi, iletişim süresince her zaman aktif olmalıdır.
* TCP Soket çıkışı MQTT Config'in I1 girişine bağlandıktan sonra MQTT Config Block'a Client ID, kullanıcı adı ve şifre gibi doğrulama bilgileri girilir.
* Temiz Oturum seçimi aktif ise, yayınla ile brooker arasında iletişim olduğunda bilgi paylaşılır. Seçilmezse, iletişim kesintilerinde kaydedilen bilgiler gönderilmez.
* Yayıncı ile aracı arasında iletişim yoksa, Keep Alive'da saniye cinsinden tanımlanan süre sonunda MQTT bağlantısı yeniden kurulmaya çalışılır.
* Periyodik veri iletimi istendiğinde MQTT Config bloğunun I2 girişinin zamanında tetiklenmesi gerekir. I2 girişi için tetikleyici yoksa bilgi, tanımlanan olay koşullarına göre aracıya gönderilir.
* MQTT Config bloğunun o0 çıkışından alınan bilgiye göre şu anlama gelir: 0: TCP_DISCONNECTED, 1: TCP_CONNECTING, 2: MQTT_CONNECTING, 3: MQTT_CONNECTED
* MQTT Config bloğunun o1 çıkışından alınan bilgiye göre şu anlama gelir: 0: E_MQTT_SEND_CONNPACK,1: E_MQTT_STATE_IDLE, 2: E_MQTT_STATE_SUBSCRIBING, 3: E_MQTT_STATE_PUBLISHING
* Yayınlama tmo bilgisi MQTT Config bloğunun o2 çıkışından okunur.

#### MQTT Tablosunda Olay Tanımları

<center>

![mqtt-app-02](/img/mqtt-app-02.png)

</center>

* Yayınlanacak Konu bölümünde Onchange send etkin blok ve periyodik gönderme etkin blok ile gönderme seçeneklerini açıp kapatabilirsiniz, blok buraya eklenmelidir. Blok değeri 1 ise gönderme seçeneği aktif, 0 ise gönderme seçeneği devre dışıdır. Konu için engellemek için yayınla bölümüne Qblock satır etiketi ve Trgblock satır etiketi eklendi. Qblock ile gönderilecek verilerle birlikte kullanıcı tarafından belirlenebilecek bir kalite bilgisi gönderilir, boş bırakılabilir. trg bloğu ile periyodik göndermeden bağımsız olarak farklı bir tetik gönderip boş bırakmak mümkündür.
* Olay tanımları oluşturmak için Mikrodiagram veya Telediagram Programında 'Projeler'de 'MQTT Tablosu' seçeneğine tıklayın.
*Yayınlanacak Konu bölümünde yayınlanacak konu başlığı girilir. Yük tipi seçilir. QOS bölümünde yayınlanacak paketin sorgu durumu belirlenir. QOS 0 seçilirse, yayımlanacak paketin durumu sorgulanmaz. QOS1 seçilirse yayın paketinin iletildiği bilgisi verilir. QOS2 seçilirse, aracı, yayınlanan bilgilerin teslimi hakkında geri bildirim alacaktır. Sakla seçilirse ve yayınlama ile aracı arasındaki iletişim kaybolursa, en son bilgiler bellekte tutulur. İletişim tekrar kurulduğunda son bilgi yayınlanır. MQTT Config bloğunda temiz oturum seçilirse, sakla seçilse bile bilgiler tekrar yayınlanmayacaktır.
* Publishtopic bölümünde yayınlanacak olan bloklar seçilir. Satır etiketi seçilerek verilerin hangi durumda gönderileceği belirlenir. Tetikleyicide gönder seçilirse, veriler MQTT Yapılandırma bloğunun I2 girişi için tetikleyiciye göre yayınlanacaktır.
* Abone Olacak Konular bölümünde, abone olunacak etiketler için konu başlığı oluşturulur. Abone olunan bilgilerin doğrulama durumu seçilir (QoS0, Qos1, Qos2).
* Abone Ol Konusu bölümünde abone olunacak bilgiler seçilir.

### Örnek: 2

[Download Project Files](http://www.mikrodev.com/downloads/example_projects/en/mqttTest.zip) 

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/Wss6YhNHebs" frameBorder="1" allowFullScreen>></iframe></center>

Mikrodev cihazı MQTT verilerini aşağıdaki formatta gönderir:

```
{"BLOCKNUMBER1":VALUE1} or {"LINELABEL1":VALUE1}
```

çoklu değerler için:

```
{"BLOCKNUMBER1":VALUE1 , "BLOCKNUMBER2":VALUE2} or {"LINELABEL1":VALUE1 , "LINELABEL2":VALUE2}
```

Örnek olarak, bir konu altında 3001 ve 6001 blok numaralı blokları seçtiyseniz, cihaz aşağıdaki dizileri gönderecektir:

```
{"3001":1234, "6001":123.6 }
```

JSON formatında "Blok Numaraları" yerine "Satır Etiketleri" de kullanabilirsiniz. Blok özellikleri içerisinden "Blok Numarası" veya "Satır Etiketi" ekran formatı seçimi yapılır.

## MP211 Serisinde LCD'yi Kullanma

#### Karşılama Metnini Ayarlama

Mikroterminal uygulaması, MP211'e ilk enerji verildiğinde LCD ekranda görünen metni değiştirmek için kullanılır. Mikroteminal uygulamasını başlattıktan sonra 'AT + MENULINE1 =' komutunu girerek üst satırı, 'AT + MENULINE2 =' komutunu girerek alt satırı değiştirebilirsiniz. Bu komutların sonuna herhangi bir kelime yazdıktan sonra cihaza komut gönderdiğinizde metin değişecektir.

<center>

![LCD-PLC-13](/img/LCD-PLC-13.png)

</center>

```
Example:
AT+MENULINE1=BUILDING
AT+MENULINE2=AUTOMATION
```

<center>

![LCD-PLC-12](/img/LCD-PLC-12.png)

</center>

#### Başlat/Durdur Kontrolü

PLC işlemini başlatmak veya durdurmak için tuş takımındaki ok tuşlarını kullanarak LCD ekranda "PLC KONTROL" seçeneğini seçin. Ve "BAŞLAT" veya "DURDUR" öğesini seçin. PLC buna göre davranacaktır.

<center>

![LCD-PLC-11](/img/LCD-PLC-11.png)

</center>

<center>

![LCD-PLC-10](/img/LCD-PLC-10.png)

</center>

#### G/Ç Değerlerini İzleme

Tuş takımı üzerindeki ok tuşlarını kullanarak LCD ekranda "IO MONITOR" seçeneğini seçerek Giriş ve Çıkışların gerçek zamanlı değerlerini izleyebilirsiniz.

<center>

![LCD-PLC-09](/img/LCD-PLC-09.png)

</center>

#### Çevrimiçi İzleme için Blokları Seçme

LCD ekranda görüntülemek/kontrol etmek istediğiniz bloklar için Mikrodiagram'da 'LCD/Web Görünümü' seçeneğini seçmeniz gerekmektedir. Yalnızca değeri izlemeniz gerekiyorsa, "Salt Görüntüle" seçeneğini seçin. Ayrıca blok değerini LCD ve tuş takımı üzerinden değiştirebilmek istiyorsanız "Görüntüle ve Ayarla"yı seçin.

<center>

![LCD-PLC-08](/img/LCD-PLC-08.png)

</center>

Ayrıca bu bloklar için bir "Satır Etiketi" tanımlamanız gerekir. "Satır etiketi" dizisi, gerçek zamanlı değeriyle LCD'de görünecektir.

<center>

![LCD-PLC-07](/img/LCD-PLC-07.png)

</center>

#### Kayıt Değerlerini Değiştirme

Bir kayıt değeri ayarlamak için; tuş takımındaki ok tuşlarını kullanarak LCD ekranda "BLOCK MONITOR" öğesini seçin.

<center>

![LCD-PLC-06](/img/LCD-PLC-06.png)

</center>

Ve değerini ayarlamak istediğiniz bloğu seçin.

<center>

![LCD-PLC-05](/img/LCD-PLC-05.png)

</center>

Şifreyi girdikten sonra blok için bir değer girebilirsiniz. Henüz cihaza giriş şifresi belirlemediyseniz şifre olarak "0" değerini girmeniz yeterlidir.

<center>

![LCD-PLC-04](/img/LCD-PLC-04.png)

</center>

<center>

![LCD-PLC-03](/img/LCD-PLC-03.png)

</center>

<center>

![LCD-PLC-02](/img/LCD-PLC-02.png)

</center>

#### Örnek vermek

Aşağıdaki örnekte, ikili kaydın çıkışı, dijital çıkışın(DO0) girişine bağlanmıştır. Dijital çıkış(DO0), LCD ekrana bir (yüksek) ikili kayıt değeri yazılarak etkinleştirilir.

<center>

![LCD-PLC-01](/img/LCD-PLC-01.png)

</center>

## DNS Bloğu

#### DNS Blok Kullanımı

<center>

![dnsblock-01](/img/dnsblock-01.png)

</center>

#### Özel Ayarları Engelle

<center>

![dnsblock-02](/img/dnsblock-02.png)

</center>

```
Blok Name: Blok adı.

Primary DNS Server: Birincil DNS sunucusu bu bölüme girilir.

Secondary DNS Server: İkincil DNS Sunucusu bu bölüme girilir.

URL : Kullanılacak URL, dize tablosuna girilir. Dize tablosuna girilen URL'nin kimliği burada seçilir.

Default IP : Varsayılan IP bu bölümde girilir. DNS bloğu, URL'yi IP adresine dönüştüremezse, Varsayılan IP kullanılır.

DNS Timeout : DNS timeout değeri bu bölüme girilir.
```

#### Dize Tablosu Girilen Değer

<center>

![dnsblock-03](/img/dnsblock-03.png)

</center>

Mikrodiagram yazılımının solundaki Projeler sekmesine tıklayın. Üst menüden String Table seçilir.

Dize Metni başlığının altına bir URL girebilirsiniz.

#### TCP Bloğu ile kullanın

<center>

![dnsblock-04](/img/dnsblock-04.png)

</center>

dns blok çıkışı tcp soket bloğunun ip pinine bağlanır. DNS bloğu, URL'yi IP'ye, Fou'ya dönüştürecektir. pin aktif. tcp bloğu, DNS bloğundaki ip adresini kullanır.

<center>

![dnsblock-05](/img/dnsblock-05.png)

</center>

TCP soket bloğu, Mqtt bloğu ile kullanılabilir.