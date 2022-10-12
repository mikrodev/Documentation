---
title: "ViewPLUS SCADA Referans Sayfası"
---

ViewPLUS Scada uygulamasında bir sayfa tasarımı ile aynı tipte birden çok noktanın verisi gösterilebilmektedir.

Örneğin aynı özelliklere sahip bir röle, scada projenizde birden çok yerde farklı etiketlerle kullanılıyorsa; tek bir röle referans sayfası oluşturmanız yeterlidir. Oluşturduğunuz referans sayfasını farklı etiketlere sahip rölelerde kullanmak için; projede yer alan röle scada bileşeni üzerinden referans sayfasına yönlendirme yapmanız ve rölelere ait etiketlerin atanması için run function fonksiyonunu kullanmanız gerekmektedir.

### Run Function Fonksiyonu

Run Function fonksiyon tanımlaması; ViewPLUS editöründe sağ altta yer alan

Nesne Özellikleri -> Olaylar -> Run Function kısmında tanımlama yapılır.

<center>

![template1](/img/template1.png)
***<center>Şekil 1 Run Function Tanımlama</center>***

</center>

### Etiket Oluşturma

Run Function fonksiyonu aynı tipte tanımlanan etiketler üzerinde çalışır. O yüzden etiketlerin oluşturulmasında ilk kısımlarının değişken, son kısımlarının aynı olmasına dikkat edilmelidir.

Örneğin ADP1 panosundaki A Rölesine ait etiketler;

ADP1_A_REF615_AktifGuc  
ADP1_A_REF615_FazL12GerilimBilgisi   
ADP1_A_REF615_FazL1AkimBilgisi    
ADP1_A_REF615_FazL1GerilimBilgisİ şeklinde tanımlandıysa,

ADP2 panosundaki B Rölesine etiketleri

ADP2_B_REF615_AktifGuc    
ADP2_B_REF615_FazL12GerilimBilgisi     
ADP2_B_REF615_FazL1AkimBilgisi     
ADP2_B_REF615_FazL1GerilimBilgisİ şeklinde tanımlanmalıdır.   

### Run Function Kullanımı

Run Function fonksiyonu için öncellikle örnek referans sayfası oluşturulur ve etiket atamaları yapılır.

(Bu sayfada sadece başka sayfalarda çağırılacak scada bileşenleri yer almalıdır.)

<center>

![template2](/img/template2.png)
***<center>Şekil 2 Örnek Referans Sayfası</center>***

</center>

### Referans Sayfası ile Scada Bileşeni İlişkilendirme

Referans sayfası ile ilişkilendirilmek istenen scada bileşeni üzerinden

Nesne Özellikleri -> Olaylar -> Olay Aksiyonu (Sayfaya Git) -> Sayfaya Git (Oluşturulan referans sayfası seçilir.) -> Run Function (data1 = data2)*

(*yönlendirilen sayfada data 1 ile başlayan tag isimlerini data2 isimli tag ile değiştirir.)

<center>

![template3](/img/template3.png)
***<center>Şekil 3 Run Function Örneği</center>***

</center>

Şekil 3’te yer alan örnekte B500_REF615_Referans sayfasında yer alan B500KOSK_REF615_TSKB_H01 etiketli scada bileşenleri farklı bir sayfada B500KAZAN_REF615_IST2_H03 etiketi ile kullanılmıştır.

### Referans Sayfasında Rapor Oluşturma

Referans sayfasında yer alan scada bileşenleri ile ilgili oluşturulan rapor farklı etiketlerde Scada Raporlayıcısı üzerinden tanımlama yapmadan kullanılabilir.

Öncelikle referans sayfası üzerinden rapor oluşturulur.

ViewPLUS Editör -> Araçlar -> SCADA Raporlayıcıyı Başlat seçilir.

<center>

![template4](/img/template4.png)
***<center>Şekil 4 SCADA Raporlayıcısını Başlatma</center>***

</center>

Referans sayfasında tanımlanan raporlama yapılacak etiketler seçilir.

Scada Reporter -> Etiket Logları -> Tüm Etiketler -> (Etiket seçilir.) -> Raporlamayı Başlat

<center>

![template5](/img/template5.png)
***<center>Şekil 5 Scada Reporter Rapor Oluşturma</center>***

</center>

Raporlama özelliklerine göre etiketlerin raporları kaydedilir. Sağ tarafta kaydedilen filtreler kısmından oluşturulan rapor seçilir, sağ tık ile bağlantı linki kopyalanır.

<center>

![template6](/img/template6.png)
***<center>Şekil 6 Oluşturulan Raporun Bağlantı Linkini Kopyalama</center>***

</center>

Oluşturulan raporun bağlantı linkine yönlendirme yapılabilmesi için referans sayfasında raporlar için Scada bileşeni oluşturulur. Oluşturulan Scada bileşenine kopyalanan bağlantı linki yapıştırılır.

Farklı etiket tiplerinin otomatik rapor oluşturulması için Run Function kısmına ${parent:} yazılması gerekmektedir.

Nesne Özellikleri -> Olaylar -> Olay Aksiyonu (Bağlantıya Git) -> Run Function ( ${parent:} ) -> Bağlantı Ekle (işaretli) -> Web Link (bu kısma kopyalanan rapor bağlantı linki yapıştırılır.

<center>

![template7](/img/template7.png)
***<center>Şekil 7 Scada Bileşeni ile Raporlama Linkini İlişkilendirme</center>***

</center>

### Referans Sayfasında Scada Bileşenlerini İsimlendirme

Sadece referans sayfasında isimlendirme yaparak tüm scada bileşenlerinin özel olarak isimlendirilmesi yapılabilmektedir.

Yazı eklemek için kullanacağınız scada bileşeninin

Nesne Özellikleri -> Sabitler -> Yazı İçeriği kısmınına” :TAGDESC “ ifadesi yazılmalıdır.

<center>

![template8](/img/template8.png)
***<center>Şekil 8 Scada Bileşeni İsimlendirme</center>***

</center>

Scada bileşenine yazı etiketi atamasını yapmak için

Etiketler -> Yazı Etiketi kısmından referans sayfasında yer alan etiketlerden herhangi birini seçmeniz gerekmektedir.

<center>

![template9](/img/template9.png)
***<center>Şekil 9 Yazı Etiketi Atama</center>***

</center>

Ataması yaptığımızın etiketin tanımını yazmak için

Etiket Kanal Editör -> Etiket Adı (Yazı Etiketinde kullandığınız etiket yazılmalı) -> Etiket kısmından -> Genel -> Tanım kısmına scada bileşeninin ismi yazılmalıdır. Bu tanımlama referans sayfası ile çağırılan farklı etiket tanımlamaları içinde yapılmalıdır. Tanımlama yapıldıktan sonra ":TAGDESC" yazan scada bileşenin de referans sayfası ile oluşturulan tüm scada bileşenleri için isim ataması yapılmış olur.

<center>

![template10](/img/template10.png)
***<center>Şekil 10 Etiket Tanımlama</center>***

</center>

Örnek olarak referans sayfasında etiket tanımlaması yapmak için   
B500KOSK_REF615_TSKB_H01_FazL1Akim_Bilgisi_104 etiketi kullanıldıysa;

Referans sayfası ile çağırılan diğer etiketlerin FazL1Akim_Bilgisi kısmına tanım eklenmelidir.

(B500KOSK_REF615_TSKB_H02_FazL1Akim_Bilgisi_104, B500KOSK_REF615_TSKB_H03_FazL1Akim_Bilgisi_104, ... vb. etiketlere tanım eklenmelidir.)