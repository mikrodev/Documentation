---
title: ViewPLUS SCADA Raporlayıcı
--- 


SCADA yazılımı tarafından kaydedilen trend verilerini görüntülemek ve analiz etmek için Raporlayıcı kullanabilirsiniz. Raporlama 3 temel kayıt türü üzerinde yapılır. Bunlar etiket logları, alarm logları ve olay loglarıdır.

Raporlayıcı ekranına gelebilmek için aşağıdaki yönerge takip edilmelidir.

Öncelikle projenizde sunucuyu başlatın. -> ViewPLUS Client uygulamasını açın. -> Sol kenar çubuğunda yer alan Reports sekmesine tıklayın.  

**Not:** Açılan ViewPLUS Client ekranında sol kenar çubuğunda Reports sekmesi yer almıyor ise Client a giriş yaptığınız kullanıcının raporlara erişim hakkına sahip olduğundan emin olun.

<center>

![report54](/img/report54.png)

</center>

Yukarıdaki adımlar takip edildiğinde Mikrodev SCADA Reporter ekranına giriş yapmış olacaksınız.

<center>

![report55](/img/report55.png)

</center>

### Etiket Logları

Etiket logları, ViewPLUS Etiket Kanal Editörü sayfasında yer alan Loglama seçeneğindeki yapılandırılmasına bağlı olarak kaydedilen verilerdir.

<center>

![report56](/img/report56.png)

</center>

Etiketin lokasyon, zaman ve diğer parametrelerine göre filtreleme yapılarak farklı formatlarda çıktı oluşturulabilir.

#### Raporlayıcı Ekranında Gösterilecek Etiket Seçimi

Etiketler seçim ekranında, bir istasyonun altındaki etiketler gruplanabilir veya tümü seçilebilir. İstasyonun altındaki etiketler seçeneğini kullanırsanız, tüm istasyonların bir listesi görüntülenecektir. 

<center>

![report57](/img/report57.png)

</center>

**Not:** ViewPLUS SCADA Raporlayıcı -> Etiket Logları -> Etiket seçim penceresinde yalnızca loglamaları açık olan etiketler gözükmektedir.

İstasyon adı üzerine tıklanarak istasyon altındaki etiketler listelenebilir.

<center>

![report58](/img/report58.png)

</center>

**Not:** Burada istasyon olarak adlandırılan kısım ViewPLUS Etiket Kanal Editörü sayfasında yer alan kanalların tanımlamalarının yapıldığı yerde bulunan istasyon kısmıdır. 

<center>

![report59](/img/report59.png)

</center>

Tüm etiketler arasından seçim yapmak için "Tüm Etiketler" seçeneği seçilir.

<center>

![report60](/img/report60.png)

</center>

Etiket özelliklerine göre etiket listesinde farklı şekillerde filtreler yapılabilir. Sol paneldeki listeden raporlanacak etiketler çift tıklanarak seçilir. Seçilen etiketler sağdaki panelde görüntülenir. Seçilen etiketlerin raporlama ekranını açmak için sağ altta yer alan Raporlamayı Başlat seçeneğine tıklanmalıdır.

<center>

![report61](/img/report61.png)

</center>

Sağ panelden belirli bir etiketi silmek için etiketi seçin ve klavyede "Sil" tuşuna basın. Tüm etiketleri silmek için "Listeyi Temizle"yi seçin.

<center>

![report62](/img/report62.png)

</center>

#### Etiket Loglarını Raporlayıcı Ekranında Görüntüleme

Rapor sayfası ilk açıldığında, seçilen etiketlerin değerleri belirli bir zaman aralığı için grafiksel olarak görüntülenir. Tablo formundaki verileri görüntülemek için "Tablo Görünümü" seçilebilir. Gösterilen verinin zaman aralığı ve türü ile ilgili olarak farklı seçimler yapılabilir.

<center>

![report63](/img/report63.png)

</center>

<center>

![report64](/img/report64.png)

</center>

##### Bir Zaman Aralığı Seçme

Görüntülenen verilerin zaman aralığı 4 farklı şekilde seçilebilir.

- Aralıkta: 2 farklı tarih seçilir.   

- Son içinde:  Saat, gün, hafta vb. seçilir ve geçerli tarih/saatten geriye doğru zaman hesaplanır.   

- Zaman/Tarih : Kesin bir tarih seçilir.

- Zaman Önce: Görüntülendiği günden itibaren geriye dönük rapor görüntülemek için dakika, saat, gün vb. seçilir. Örneğin "Bugün - 5 gün", "5 gün önce" anlamına gelir. "Bugün- 5 Ay" seçiliyse ve zaman birimi "Ay" ise; zaman aralığı olarak o tarihin ayı seçilir.

Filtreleme seçeneklerinden uygun olan seçildikten sonra o filtre ile raporlama almak için sağ tarafta yer alan uygula seçeneğine tıklanmalıdır.

<center>

![report65](/img/report65.png)

</center>

##### Veri Türü Seçimi

Görüntülenecek veri türü, verinin kendisi veya seçilen istatistiksel özelliğe göre verinin istatiksel değeri de olabilir.

- Tüm Veriler: Günlüğe kaydedilen verilerin gerçek değeri gösterilir.    

- İstatiksel: Seçilen zaman periyotları için verilerin ortalama, toplam, maksimum, minimum, değişim ve medyan değerlerini görüntüler. Örneğin, bir günlük zaman aralığındaki saatlik maksimumlar seçilirse, 24 noktadan oluşan bir çıktı üretmek için zaman aralığı saatlik dilimlere bölünür. Ve bu saatlik dilimlerde verinin maksimum değerleri görüntülenir.

#### Grafikleri Yönetme

Açıklamayı Göster: Grafiğin sağ üst köşesinde çizgi rengini gösteren çizilen etiketin ve açıklamaların adını gösterir veya gizler. 

<center>

![report66](/img/report66.png)

</center>

Yeni Trend Ekle: Ana grafikteki verileri önceki dönemlerle karşılaştırabileceğiniz yeni bir grafik nesnesi ekler. Eklenen çizelge, belirlenen zaman aralığına göre ana çizelge ile senkron olarak görüntülenir.

<center>

![report67](/img/report67.png)

</center>

Grafikte tanımlanan aralıkta seçilen öğeye ait veriler varsa, bu veriler bir nokta ile gösterilir. Gösterilen noktalar birbirine farklı şekillerde bağlanabilir. Grafiğin altında, her bir grafik için grafik özellikleri menüsü bulunur. Bu menü aracılığı ile aşağıdaki işlemler gerçekleştirilebilir.

- Göster/Gizle: Bu satır bu buton ile gizlenebilir ve gösterilebilir. 

<center>

![report68](/img/report68.png)

</center>

- Doldur/Temizle: Etiket ile ilgili satırın altı integral ile doldurulur. Bu şekilde diğer etiketlerle karşılaştırmak daha kolay olabilir. 

<center>

![report69](/img/report69.png)

</center>

- Noktaları Birleştirme: Etiket verilerinin gösterildiği noktalar farklı şekillerde birleştirilebilir.

<center>

![report70](/img/report70.png)

</center>

#### Grafiği Kaydetme

Seçilen parametrelere göre grafik "png" formatında bir resim dosyasına kaydedilebilir. Grafiği kaydetmek için sol paneldeki "Grafik Kaydet" sekmesine tıklayın.

<center>

![report71](/img/report71.png)

</center>

#### Verileri Dışa Aktarma

Seçilen parametrelere göre veriler çeşitli formatlarda dışa aktarılabilir. Bunun için öncelikle tablo görünümü butonuna basılarak veri tablosu oluşturulur. Tablo görüntüleme ekranının üst kısmında yer alan "html, xml, xslx, csv" butonları kullanılarak tablodaki veriler bu formatlara dönüştürülür ve saklanır.

<center>

![report72](/img/report72.png)

</center>

#### Filtreleri Kaydetme

Verileri oluşturmak için seçilen parametreler kaydedilebilir ve gerektiğinde aynı filtre tekrar uygulanabilir. Bunun için oluşturulan parametreler en az bir kez uygulanmalıdır (Uygula Butonu). Bunu yaptıktan sonra "Bu filtreyi kaydet" seçeneğini seçin ve filtreye bir isim verilecektir. Filtreler kullanıcı hesabı için kaydedilir. Kaydedilen filtre, ekranın sağ tarafında bulunan kayıtlı filtreler menüsünde yer almaktadır.

<center>

![report73](/img/report73.png)

</center>

#### Kaydedilmiş Filtre Sorgularını Çağırma 

Bu menüdeki filtreler fare ile sağ tıklanarak kopyalandığında filtre içeriği panoya kopyalanır. Bu kopyalanan içerik, SCADA Editör ekranındaki nesnelere bağlanabilir. Bu ekranda ilgili nesneye tıklandığında rapor ekranı açılır ve ön tanımlı filtre çalıştırılır.

#### Raporlama Komutu Oluşturma

Oluşturulan filtreler raporlama komut satırı üzerinden çağrılarak istenilen formatta rapor çıktısının oluşturulması mümkündür. Bunun için raporlama uygulaması için gerekli olan komut parametrelerini vermeniz yeterlidir. Bu özellik kullanılarak Windows işletim sisteminin "Görev Zamanlayıcı" üzerinden belirli zaman aralıklarında otomatik raporlar oluşturulabilmektedir.

Bu özellik kullanılarak, Windows işletim sisteminin "Görev Zamanlayıcısı" üzerinden belli zaman aralıklarında otomatik raporlar oluşturmak mümkündür.

-database          Proje veritabanının adı(proje ile aynı isimdedir)         
-user              Veritabanı kullanıcı adı         
-password          Veritabanı kullanıcı şifresi               
-server            Veritabanı ip adresi           
-port              Veritabanı bağlantı portu             
(-tnsname           Oracle veritabanları için tns adı)                
-format            Rapor çıktı formatı. Olası değerler html,csv,xlsx,xml’dir               
-query             Raporlayıcıda kaydedilmiş olan filtrenin adı. Bu parametre raporlama komutu için gereklidir. Verilmezse bir rapor üretilmez; raporlayıcı arayüzü açılır             
-output            Çıktının oluşturulacağı dosyanın yolu ve adı               

Örnek bir komut satırı:              
ScadaReporter.exe -database deneme -user postgres -password mdv -server localhost -port 5432 -query son1saat -format csv -output "C:\Users\mikrodev\Desktop\Raporlar\taglog"

##### Raporlayıcı Uygulamasının Kısayolunun Oluşturulması 

ViewPLUS Scada uygulaması üzerine gelinir ve dosya konumunu aç seçeneği tıklanır.

<center>

![report74](/img/report74.png)

</center>

Bu dosya içerisinden ScadaReporter.exe dosyası bulunur ve sağ tıklanarak Gönder -> Masaüstü (kısayol oluştur) seçeneği seçilir.

<center>

![report75](/img/report75.png)

</center>

Masaüstünde oluşturulan raporlayıcı kısayol uygulaması üzerine gelinir, sağ tıklanır ve özellikler penceresi açılır. 

Burada yer alan hedef kısmına başlık 1.1.8 de oluşturulan komut satırı girilir.

<center>

![report76](/img/report76.png)

</center>

Kısayola tıklanıldığı zaman son1saat adında kaydettiğimiz filtrenin verileri taglog adında csv dosyası olacak şekilde çıktı oluşturulacaktır. 

<center>

![report77](/img/report77.png)

</center>

##### Otomatik Olarak Raporlayıcıdan Çıktı Oluşturma

Başlık 1.1.8 de anlatılan bu özellik kullanılarak, Windows işletim sisteminin "Görev Zamanlayıcı" üzerinden belli zaman aralıklarında otomatik raporlar oluşturmak mümkündür.

Başlat -> Görev Zamanlayıcı uygulaması açılır.

<center>

![report78](/img/report78.png)

</center>

Görev oluştur seçeneğine tıklanır.

<center>

![report79](/img/report79.png)

</center>

Raporun nasıl oluşturulması isteniyorsa Görev Oluştur penceresinden bu ayarlar girilir.

Genel kısmında; oluşturulan görevin adı, açıklaması ve güvenlik seçenekleri yer almaktadır. 

<center>

![report80](/img/report80.png)

</center>

Tetikleyiciler kısmından rapor çıktısının oluşturulma zamanı seçilir. 

Eylemler kısmına, çalıştırmak istenilen raporlayıcı komut satırı aşağıdaki gibi girilmelidir.

Program/komut dosyası: "C:\Program Files\ViewPLUS\bin\ScadaReporter.exe"

Bağımsız değişkenler ekle (isteğe bağlı): -database deneme -user postgres -password mdv -server localhost -port 5432 -query son1saat -format csv -output "C:\Users\mikrodev\Desktop\Raporlar\taglog"

<center>

![report81](/img/report81.png)

</center>

Koşullar kısmından; görevin başlatılması şartları seçilir.

<center>

![report82](/img/report82.png)

</center>

Ayarlar kısmından ise oluşturulan görev ile ilgili ek ayarlar girilir.

<center>

![report83](/img/report83.png)

</center>

### Alarm Logları

Oluşan alarmlar Raporlayıcı ekranında Alarm Logları kısmından takip edilebilmektedir.

<center>

![report84](/img/report84.png)

</center>

#### Raporlayıcı Ekranında Gösterilecek Alarmların Seçimi

ViewPLUS SCADA Editörü üzerinden oluşturulan alarmlar alarm seçim sayfasında görüntülenmektedir.

Alarm özelliklerine göre alarm listesinde farklı şekillerde filtreler yapılabilir. Sol paneldeki listeden raporlanacak alarmlar çift tıklanarak seçilir. Seçilen alarmlar sağdaki panelde görüntülenir. Seçilen alarmların raporlama ekranını açmak için sağ altta yer alan Raporlamayı Başlat seçeneğine tıklanmalıdır.

<center>

![report85](/img/report85.png)

</center>

Sağ panelden belirli bir etiketi silmek için etiketi seçin ve klavyede "Sil" tuşuna basın. Tüm etiketleri silmek için "Listeyi Temizle"yi seçin.

<center>

![report86](/img/report86.png)

</center>

#### Alarm Loglarını Raporlayıcı Ekranında Görüntüleme

Rapor sayfası ilk açıldığında, seçilen alarmların değerleri belirli bir zaman aralığı için tablo olarak görüntülenir. 

<center>

![report87](/img/report87.png)

</center>

##### Bir Zaman Aralığı Seçme 

Görüntülenen verilerin zaman aralığı 4 farklı şekilde seçilebilir.

- Aralıkta: 2 farklı tarih seçilir.   

- Son içinde:  Saat, gün, hafta vb. seçilir ve geçerli tarih/saatten geriye doğru zaman hesaplanır.   

- Zaman/Tarih : Kesin bir tarih seçilir.   

- Zaman Önce: Görüntülendiği günden itibaren geriye dönük rapor görüntülemek için dakika, saat, gün vb. seçilir. Örneğin "Bugün - 5 gün", "5 gün önce" anlamına gelir. "Bugün- 5 Ay" seçiliyse ve zaman birimi "Ay" ise; zaman aralığı olarak o tarihin ayı seçilir.

Filtreleme seçeneklerinden uygun olan seçildikten sonra o filtre ile raporlama almak için sağ tarafta yer alan uygula seçeneğine tıklanmalıdır.

<center>

![report88](/img/report88.png)

</center>

#### Verileri Dışa Aktarma

Seçilen parametrelere göre veriler çeşitli formatlarda dışa aktarılabilir. Raporlama ekranının üst kısmında yer alan "html, xml, xslx, csv" butonları kullanılarak tablodaki veriler bu formatlara dönüştürülür ve saklanır.

<center>

![report89](/img/report89.png)

</center>

#### Filtreleri Kaydetme 

Verileri oluşturmak için seçilen parametreler kaydedilebilir ve gerektiğinde aynı filtre tekrar uygulanabilir. Bunun için oluşturulan parametreler en az bir kez uygulanmalıdır (Uygula Butonu). Bunu yaptıktan sonra "Bu filtreyi kaydet" seçeneğini seçin ve filtreye bir isim verilecektir. Filtreler kullanıcı hesabı için kaydedilir. Kaydedilen filtre, ekranın sağ tarafında bulunan kayıtlı filtreler menüsünde yer almaktadır. 

<center>

![report90](/img/report90.png)

</center>

#### Kaydedilmiş Filtre Sorgularını Çağırma

Bu menüdeki filtreler fare ile sağ tıklanarak kopyalandığında filtre içeriği panoya kopyalanır. Bu kopyalanan içerik, SCADA Editör ekranındaki nesnelere bağlanabilir. Bu ekranda ilgili nesneye tıklandığında rapor ekranı açılır ve ön tanımlı filtre çalıştırılır.

### Olay Logları

Kullanıcı hareketleri Raporlayıcı ekranında Olay Logları kısmından takip edilebilmektedir.

<center>

![report91](/img/report91.png)

</center>

#### Olay Loglarını Raporlayıcı Ekranında Görüntüleme

Rapor sayfası ilk açıldığında, Kullanıcı hareketlerinin tamamı tablo olarak görüntülenir. 

ViewPLUS Client ekranına giriş yapan kullanıcılarının ip adreslerine; etiketlere değer yazma, raporlayıcı sayfalarına giriş istekleri vb. olaylarının bilgisine; kullanıcılar tarafında yazma isteği gönderilen etiket isimlerine ve bu olayların olay zaman bilgisine olay logları raporlayıcı sayfasından ulaşılabilmektedir.

<center>

![report92](/img/report92.png)

</center>

##### Bir Zaman Aralığını Seçme

Görüntülenen verilerin zaman aralığı 4 farklı şekilde seçilebilir.

- Aralıkta: 2 farklı tarih seçilir.   

- Son içinde: Saat, gün, hafta vb. seçilir ve geçerli tarih/saatten geriye doğru zaman hesaplanır.  

- Zaman/Tarih: Kesin bir tarih seçilir.   

- Zaman Önce: Görüntülendiği günden itibaren geriye dönük rapor görüntülemek için dakika, saat, gün vb. seçilir. Örneğin "Bugün - 5 gün", "5 gün önce" anlamına gelir. "Bugün- 5 Ay" seçiliyse ve zaman birimi "Ay" ise; zaman aralığı olarak o tarihin ayı seçilir.

Filtreleme seçeneklerinden uygun olan seçildikten sonra o filtre ile raporlama almak için sağ tarafta yer alan uygula seçeneğine tıklanmalıdır.

<center>

![report93](/img/report93.png)

</center>

**Not:** Uygulama kısmının sağ tarafında yer alan Auto Update seçeneği işaretliyse kullanıcı hareketleri raporlayıcı ekranında otomatik olarak güncellenmektedir.

<center>

![report94](/img/report94.png)

</center>

#### Verileri Dışa Aktarma

Seçilen parametrelere göre veriler çeşitli formatlarda dışa aktarılabilir. Raporlayıcı ekranının üst kısmında yer alan "html, xml, xslx, csv" butonları kullanılarak tablodaki veriler bu formatlara dönüştürülür ve saklanır.

<center>

![report95](/img/report95.png)

</center>

#### Filtreleri Kaydetme

Verileri oluşturmak için seçilen parametreler kaydedilebilir ve gerektiğinde aynı filtre tekrar uygulanabilir. Bunun için oluşturulan parametreler en az bir kez uygulanmalıdır (Uygula Butonu). Bunu yaptıktan sonra "Bu filtreyi kaydet" seçeneğini seçin ve filtreye bir isim verilecektir. Filtreler kullanıcı hesabı için kaydedilir. Kaydedilen filtre, ekranın sağ tarafında bulunan kayıtlı filtreler menüsünde yer almaktadır.

<center>

![report96](/img/report96.png)

</center>

