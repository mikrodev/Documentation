---
title: ViewPLUS SCADA Raporlayıcı
--- 

## Genel Bakış

SCADA yazılımı tarafından kaydedilen trend verilerini görüntülemek ve analiz etmek için Reporter'ı kullanabilirsiniz. Raporlama 3 temel kayıt türü üzerinde yapılır. Bunlar etiket günlükleri, alarm günlükleri ve olay günlükleridir.

<center>

![report1](/img/report1.png)

</center>

## Etiket Logları

Etiket logları, etiketin günlük kaydı yapılandırmasına bağlı olarak kaydedilen verilerdir. Etiketin lokasyon, zaman ve diğer parametrelerine göre filtreleme yapılarak farklı formatlarda çıktı oluşturulabilir.

### Loga Kaydedilecek Etiketlerin Seçimi

Etiketler seçim ekranında, bir istasyonun altındaki etiketler gruplanabilir veya tümü seçilebilir. İstasyonun altındaki etiketler seçeneğini kullanırsanız, tüm istasyonların bir listesi görüntülenir.

<center>

![report2](/img/report2.png)

</center>

İstasyon adı üzerine tıklanarak istasyon altındaki etiketler listelenebilir.

<center>

![report3](/img/report3.png)

</center>

Tüm etiketler arasından seçim yapmak için "Tüm Etiketler" seçeneği seçilir.

<center>

![report4](/img/report4.png)

</center>

Etiket özelliklerine göre etiket listesinde farklı şekillerde filtreler yapılabilir. Sol paneldeki listeden raporlanacak etiketler çift tıklanarak seçilir. Seçilen etiketler sağdaki panelde görüntülenir. Sağ panelden belirli bir etiketi silmek için etiketi seçin ve klavyede "Sil" tuşuna basın. Tüm etiketleri silmek için "Listeyi Temizle"yi seçin.

### Etiket Loglarını Görüntüleme

Rapor sayfası ilk açıldığında, seçilen etiketlerin değerleri belirli bir zaman aralığı için grafiksel olarak görüntülenir. Tablo formundaki verileri görüntülemek için "Tablo Görünümü" seçilebilir. Gösterilen verinin zaman aralığı ve türü ile ilgili olarak farklı seçimler yapılabilir.

<center>

![report5](/img/report5.png)

</center>


<center>

![report6](/img/report6.png)

</center>

#### Bir Zaman Aralığı Seçme

Görüntülenen verilerin zaman aralığı 4 farklı şekilde seçilebilir.

A) Interval: 2 farklı tarih seçilir.   
B) Within the last:  Saat, gün, hafta vb. seçilir ve geçerli tarih/saatten geriye doğru zaman hesaplanır.   
C) On Time/Date: Kesin bir tarih seçilir.   
D) ... Time Ago: Görüntülendiği günden itibaren geriye dönük rapor görüntülemek için dakika, saat, gün vb. seçilir.   
Örneğin "Today - 5 Day", "5 gün önce" anlamına gelir. "Today - 5 Month" seçiliyse ve zaman birimi "Ay" ise; zaman aralığı olarak o tarihin ayı seçilir.

#### Veri Türü Seçme

Görüntülenecek veri türü, verinin kendisinin değeri kadar istatistiksel değer de olabilir.

A) All Data: Günlüğe kaydedilen verilerin gerçek değeri gösterilir.    
B) Statistics: Seçilen zaman periyotları için verilerin ortalama, toplam, maksimum, minimum, değişim ve medyan değerlerini görüntüler. Örneğin, bir günlük zaman aralığındaki saatlik maksimumlar seçilirse, 24 noktadan oluşan bir çıktı üretmek için zaman aralığı saatlik dilimlere bölünür.

<center>

![report7](/img/report7.png)

</center>

### Grafikleri Yönetme

Show/hide Legend button: Grafiğin sağ üst köşesinde çizgi rengini gösteren çizilen etiketin ve açıklamaların adını gösterir veya gizler.        
Add a New Chart: Ana grafikteki verileri önceki dönemlerle karşılaştırabileceğiniz yeni bir grafik nesnesi ekler. Eklenen çizelge, belirlenen zaman aralığına göre ana çizelge ile senkron olarak görüntülenir.    

<center>

![report8](/img/report8.png)

</center>

Grafikte tanımlanan aralıkta seçilen öğeye ait veriler varsa, bu veriler bir nokta ile gösterilir. Gösterilen noktalar birbirine farklı şekillerde bağlanabilir. Grafiğin altında, her bir grafik için grafik özellikleri menüsü bulunur. Bu menü aracılığı ile aşağıdaki işlemler gerçekleştirilebilir.

A) Show / hide chart: Bu satır bu buton ile gizlenebilir ve gösterilebilir.     
B) Charged / unloaded: Tag ile ilgili satırın altı integral ile doldurulur. Bu şekilde diğer etiketlerle karşılaştırmak daha kolay olabilir.        
C) Merge Points: Öğe verilerinin gösterdiği noktalar farklı şekillerde birleştirilebilir.           

<center>

![report9](/img/report9.png)

</center>

### Grafikleri Kaydetme

Seçilen parametrelere göre grafik "png" formatında bir resim dosyasına kaydedilebilir. Sol paneldeki "Grafik Kaydet" düğmesini kullanın.     

### Verileri Dışa Aktarma  

Seçilen parametrelere göre veriler çeşitli formatlarda dışa aktarılabilir. Bunun için öncelikle tablo görünümü butonuna basılarak veri tablosu oluşturulur. Tablo görüntüleme ekranının üst kısmında yer alan "html, xml, xslx, csv" butonları kullanılarak tablodaki veriler bu formatlara dönüştürülür ve saklanır.

### Filtreleri Kaydetme

Verileri oluşturmak için seçilen parametreler kaydedilebilir ve gerektiğinde aynı filtre tekrar uygulanabilir. Bunun için oluşturulan parametreler en az bir kez uygulanmalıdır (Uygula Butonu). Bunu yaptıktan sonra "Bu filtreyi kaydet" seçeneğini seçin ve filtreye bir isim verilecektir. Filtreler kullanıcı hesabı için kaydedilir. Kullanıcı bu filtrelere herhangi bir yerden ulaşabilir. Kaydedilen filtre, ekranın sağ tarafında bulunan kayıtlı filtreler menüsünden uygulanabilir.

#### Kaydedilmiş Filtre Sorgularını Çağırma

Bu menüdeki filtreler fare ile sağ tıklanarak kopyalandığında filtre içeriği panoya kopyalanır. Bu kopyalanan içerik, SCADA Editör ekranındaki nesnelere bağlanabilir. Bu ekranda ilgili nesneye tıklandığında rapor ekranı açılır ve ön tanımlı filtre çalıştırılır.

### Raporlama Komutu Oluşturma

Oluşturulan filtreler raporlama komut satırı üzerinden çağrılarak istenilen formatta rapor çıktısının oluşturulması mümkündür. Bunun için raporlama uygulaması için gerekli olan komut parametrelerini vermeniz yeterlidir. Bu özellik kullanılarak Windows işletim sisteminin "Görev Zamanlayıcı" üzerinden belirli zaman aralıklarında otomatik raporlar oluşturulabilmektedir.

Aşağıdaki adımlar takip edilir.

ScadaReporter.exe    
-database  Proje veritabanının adı (proje ile aynı ad)  
-user      Database kullanıcı adı    
-password  Database kullanıcı şifresi    
-server    Database ip adresi 
-port      Database bağlantı portu    
-tnsname   Oracle veritabanları için tns adı    
-format    Rapor çıktı formu. Olası değerler html, csv, xlsx, xml   
-query     Rapora kaydedilen filtrenin adı. Bu parametre rapor komutu için gereklidir. Verilmezse rapor üretmiyoruz; Raporlama arayüzü açılır.        
-output    Dışa aktarılacak dosyanın yolu ve adı.   

#### Örnek Uygulama

ScadaReporter.exe   
-database modpollread    
-user postgres     
-password pwd123     
-server localhost     
-port 5432     
-query twohours     
-format csv     
-output "C:\Users\yg\Documents\Reports\Last2Hours"     
 
