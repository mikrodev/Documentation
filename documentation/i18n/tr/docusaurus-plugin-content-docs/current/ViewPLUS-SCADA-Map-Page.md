---
title: ViewPLUS SCADA Harita Sayfası
---

ViewPLUS Scada uygulamasının Coğrafi Harita Alt yapı desteği bulunmaktadır. Bu özellik sayesinde ViewPLUS üzerinden harita sayfası hazırlanabilmekte, etiket değerine göre kategori oluşturarak farklı görsellerde veya renklerde harita sayfası üzerinden etiketin durumu izlenebilmektedir.

### Geo Görünüm Özelliği

ViewPLUS Scada Editör sayfasının sağ üst köşesinde Sayfa Özellikleri bulunmaktadır. Oluşturulan bu sayfanın Harita görünümünde olması isteniyorsa, burada yer alan Sayfa Tipi seçiminin altındaki “Geo Görünüm” seçeneğinin işaretli olması gerekmektedir.

<center>

![map1](/img/map1.png)
***<center>Şekil 1 Geo Görünüm Seçeneği İşaretli</center>***

</center>

ViewPLUS Scada uygulamasının Coğrafi Alt yapı desteği Google Maps ve ArcGIS uygulamaları ile senkron çalışmaktadır.

Harita sayfasını Google Maps uygulaması ile kullanmak için Harita API Anahtarı gerekmektedir. Harita API Anahtarını girdikten sonra ekranda yazan “For development purposes only“ yazısı kalkacaktır.

“Geo Görünüm” seçeneği işaretlenince sayfa otomatik Google Maps uygulaması ile güncellenir.

<center>

![map2](/img/map2.png)
***<center>Şekil 2 Google Maps Scada Sayfası</center>***

</center>

ViewPLUS Scada Editörü -> Projeler -> Proje Konfigürasyon -> GIS Ayarları -> GIS Provider -> Google seçilir.

Seçimin Scada editöründe harita sayfasının seçime göre güncellenmesi için editörün kapatılıp tekrardan açılması gerekmektedir.

Harita API Anahtarı ViewPLUS Scada Editörü -> Projeler -> Proje Konfigürasyon -> GIS Ayarları -> Harita API Anahtarı kısmına giriniz.

<center>

![map3](/img/map3.png)
***<center>Şekil 3 Harita API Anahtarı Tanımlama</center>***

</center>

Harita sayfasını ArcGIS uygulaması ile kullanmak için harita API şifresi gerekmez, ücretsiz bir yazılımdır.

ViewPLUS Scada Editörü -> Projeler -> Proje Konfigürasyon -> GIS Ayarları -> GIS Provider -> ArcGIS seçilir.

<center>

![map4](/img/map4.png)
***<center>Şekil 4 ArcGIS Scada Sayfası Tanımlama</center>***

</center>

Seçimin Scada editöründe harita sayfasının seçime göre güncellenmesi için editörün kapatılıp tekrardan açılması gerekmektedir.

<center>

![map5](/img/map5.png)
***<center>Şekil 5 ArcGIS Scada Sayfası</center>***

</center>

Sol altta yer alan seçenek ile harita görünümü değiştirilebilmektedir.

### Harita Sayfası İkonları

Harita sayfasına ikonlar eklenerek harita üzerinden etiket durumları izlenebilmektedir.

Öncelikle harita sayfasına ikon eklemesi yapmak istediğiniz lokasyona ikon atanmalıdır.

ViewPLUS Scada Editörü -> Add Marker tıklayın ve ikon eklemek istediğiniz lokasyonu haritada işaretleyin.

Şekil 6’daki gibi ikon eklemek istediğiniz lokasyonlara ikon ataması yapılmış olacaktır.

<center>

![map6](/img/map6.png)
***<center>Şekil 6 Harita Sayfasına İkon Ekleme</center>***

</center>