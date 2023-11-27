---
title: "ViewPLUS SCADA Alarm Sayfaları Uygulama Notu"
---

## ViewPLUS Client Ekranı Alarm Sayfası

ViewPLUS Client ekranı alarm sayfası iki kısımdan oluşmaktadır. 

<center>

![alarm30](/img/alarm30.png)
***<center>Şekil 1: ViewPLUS Client Ekranı Alarm Sayfası</center>***

</center>

Aktif olan alarmların takip edildiği aktif alarm kısmı 1 numara ile, geçmiş alarmların yer aldığı alarm günlüğü kısmı ise 2 numara ile ifade edilmiştir.

**Not:** Bu dokümanda yer alan bilgiler ViewPLUS 0.9.154 versiyonu ve sonrası için geçerlidir. 

Client ekranında oluşan alarmlar öncelik seviyesine göre 3 farklı alarm sesinde çalabilmektedir. Öncelik seviyelerinin aralık değerlerini görebilmek için ViewPLUS kanal etiket editöründen alarmlar kısmı açılır. Alarmlar kısmında yer alan herhangi bir alarm seçilir ve öncelik kısmına Mouse ile gelinir, bilgilendirme ekranının açıldığı görülür.

<center>

![alarm31](/img/alarm31.png)

</center>

Yüksek seviyede olan alarmlar için öncelik seviyesi 0-31,       
Orta seviyede olan alarmlar için öncelik seviyesi 32-63,       
Düşük seviyede olan alarmlar için öncelik seviyesi 64-95,          
Uyarı için eklenen alarmlar için öncelik seviyesi 96-127 olarak belirlenmiştir.         
Uyarı için eklenen alarmların diğer alarmlardan ayıran özelliği alarm durumu oluştuğunda alarm sesinin çalmamasıdır. (sessiz alarm)

**Not:** Oluşan alarm seslerinin tamamı kapatılmak isteniyor ise client ekranında yer alan alarm sesini kapat seçimi işaretlenmesi gerekmektedir. 

### Aktif Alarmlar Kısmı

Client ekranı aktif alarm kısmında yer alan özellikler şekil 2 de numaralandırılarak belirtilmiştir.

<center>

![alarm32](/img/alarm32.png)
***<center>Şekil 2: ViewPLUS Client Ekranı  Aktif Alarm Sekmesi</center>***

</center>

**Numara 1 Alarmları Filtrele:** Alarm filtresi kullanılacaksa bu kısma filtreleme yapmak istenen ifade girilir.

**Numara 2:** Alarm filtresi kullanılacaksa bu kısımdan filtreleme yapmak istenen özellik seçilir. Burada ekranda yer alan sütunlar filtreleme seçeneği olarak sunulmuştur.

**Numara 3 Olay Zamanı:** Oluşan alarmın oluşma zamanı veya alarm idle (alarm yok) durumda ise alarm etiketine en son gelen değerin SCADA tarafından okunma zamanı bu sütunda yazmaktadır.

**Numara 4 AlarmID:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm id bilgisi bu sütunda yazmaktadır. Alarm oluşturulma sırasında ViewPLUS SCADA editörü tarafından otomatik olarak her alarma farklı bir alarm id atanmaktadır. 

**Numara 5 Sınıf:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan sınıf adı bu sütunda yazmaktadır.

**Numara 6 İsim:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm adı bu sütunda yazmaktadır.

**Numara 7 Açıklama:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan tanımı bu sütunda yazmaktadır.

**Numara 8 Durum:** Oluşan alarmın anlık durumu bu sütunda yazmaktadır. Oluşan alarmlar için \[TRG] Alarm triggered (alarm tetiklendi), \[IDL] Alarm idle (alarm yok) olmak üzere iki farklı durum bulunmaktadır. 
Örneğin alarm ile ilişkilendirilen etikete alarm değeri gönderildiğinde oluşan alarmın alarm durumu \[TRG] alarm triggered (alarm tetiklendi) olacaktır. 

Oluşan alarm onaylanmayıp (acknowledge edilmezse) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse alarm durumu \[IDL] alarm idle (alarm yok) olacaktır. Bu durum ViewPLUS SCADA tarafından alarm devam ediyormuş gibi değerlendirilir. Alarmın aktif alarmlar kısmından kaldırılması isteniyorsa onaylanması (acknowledge edilmesi) gerekmektedir.

Oluşan alarm onaylanıp (acknowledge edilirse) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse alarm aktif alarmlar kısmında kalkacaktır.

**Numara 9 Öncelik:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan önceliği bu sütunda yazmaktadır. Buraya girilen öncelik değerine göre aktif alarmlar arasında alarm filtresi uygulayarak, alarmlarınızı öncelik sırasına göre listeleyebilirsiniz. Alarm önceliği olarak 255 farklı seviye tanımlanabilmektedir.

**Numara 10 Onaylayan:** Oluşan alarm onaylanmışsa (acknowledge edilmişse), onaylayan kişinin kullanıcı adı bu sütunda yazmaktadır.

**Numara 11 Onay Mesajı:** Oluşan alarm onaylanmışsa (acknowledge edilmişse), onaylanma mesajı bu sütunda yazmaktadır.

**Numara 12 Onaylandı mı:** Oluşan alarm onaylanmışsa (acknowledge edilmişse), onaylanma durumu (\[ACK] acknowledged) bu sütunda yazmaktadır.

**Numara 13 İstasyon:** Oluşan alarm ile ilişkilendirilen etiketin yer aldığı ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Etiket Kanalı -> İstasyon bilgisi bu sütunda yazmaktadır.

**Numara 14 Kanal:** Oluşan alarm ile ilişkilendirilen etiketin yer aldığı ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Etiket Kanalı ismi bu sütunda yazmaktadır.

**Numara 15 Değer:** Oluşan alarm ile ilişkilendirilen etiketin anlık değeri bu sütunda yazmaktadır.

**Numara 16 Etiket Adı:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında ilişkilendirilen etiket adı bu sütunda yazmaktadır.

**Numara 17 Dışa Aktar**: Oluşan alarmlar bu kısımdan dışarı aktarılabilmektedir. Dışarı aktarılacak dosyanın formatı excell, csv, html veya xml olabilmektedir. 

**Numara 18 Alarm Sesini Kapat:** Oluşan alarmların alarm sesleri bu kısımdan açılıp, kapatılabilmektedir.

**Numara 19 Tümünü Seç:** Oluşan alarmların tümü bu kısımdan seçilebilmektedir. Bu özellik sayesinde toplu bir şekilde alarmlar onaylanabilmektedir.

### Alarm Günlükleri Kısmı

Client ekranı alarm günlüğü kısmında yer alan özellikler şekil 3 de numaralandırılarak belirtilmiştir.

<center>

![alarm33](/img/alarm33.png)
***<center>Şekil 3: ViewPLUS Client Ekranı  Alarm Günlükleri Sekmesi</center>***

</center>

**Numara 1 Geçmişi Filtrele:** Alarm filtresi kullanılacaksa bu kısma filtreleme yapmak istenen ifade girilir.

**Numara 2:** Alarm filtresi kullanılacaksa bu kısımdan filtreleme yapmak istenen özellik seçilir. Burada ekranda yer alan sütunlar filtreleme seçeneği olarak sunulmuştur.

**Numara 3 Kayıt Zamanı:** Oluşan alarmın oluşma zamanı veya alarm idle (alarm yok) durumda ise alarm etiketine en son gelen değerin SCADA tarafından okunma zamanı bu sütunda yazmaktadır.

**Numara 4 Alarm Kimliği:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm adı ile birlikte eklenmişse tanımı bu sütunda yazmaktadır.

**Numara 5 Mevcut Durum:** Oluşan alarmın anlık durumu bu sütunda yazmaktadır. Oluşan alarmlar için alarm active veya alarm idle olmak üzere iki farklı durum oluşmaktadır.  

Örneğin alarm ile ilişkilendirilen etikete alarm değeri geldiğinde oluşan alarmın alarm durumu alarm active (alarm aktif) olacaktır.             
Oluşan alarm onaylanmayıp (acknowledge edilmeyip) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse alarm durumu alarm idle (alarm yok) olacaktır.

**Numara 6 Olay Tipi:** Oluşan alarmların olay tipleri bu sütunda yazmaktadır. Oluşabilecek olay tipleri aşağıdaki gibidir.

- Alarm Triggered (Alarm Tetiklendi): Alarm ile ilişkilendirilen etikete alarm değeri gelirse bu sütunda alarm triggered yazacaktır.         
- Alarm Removed (Alarm Kaldırıldı): Oluşan bu alarm onaylanıp (acknowledge edilirse) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse bu sütunda alarm removed yazacaktır.       
- Alarm Acknowledged (Alarm Onaylandı): Oluşan bu alarm onaylanırsa (acknowledge edilirse) bu sütunda alarm acknowledged yazacaktır.           
- Alarm Recovered (Alarm Kaydedildi): Oluşan bu alarm onaylanmayıp (acknowledge edilmezse) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse bu sütunda alarm recovered yazacaktır.                

**Numara 7 Veri Değeri:** Oluşan alarm ile ilişkilendirilen etiketin anlık değeri bu sütunda yazmaktadır.

**Numara 8 Kayıt Kimliği:** Oluşan alarmın database kaydedilen log id leri bu sütunda yazmaktadır.

**Numara 9 Dışa Aktar:** Oluşan alarmlar bu kısımdan dışarı aktarılabilmektedir. Dışarı aktarılacak dosyanın formatı excell, csv, html veya xml olabilmektedir.

**Numara 10 Daha fazla yükle:** Önceden database e kaydedilen ve alarm günlüğünde yer almayan alarmlar bu seçenek ile alarm günlüğü kısmına getirilebilmektedir. 

## Sunucu \(Server Engine\) Ekranı Alarm Sayfası

SCADA editörü üzerinden oluşturulan alarmlar client ekranından takip edilebildiği gibi sunucu ekranından da takip edilebilmektedir. 

Sunucu ekranı alarm sayfası 3 sekmeden oluşmaktadır.

### Aktif Alarmlar Sekmesi

Sunucu ekranından aktif alarmları izlemek için ViewPLUS SCADA Editörü -> Araçlar -> Sunucuyu (Server Engine) başlat-> Alarmlar -> Aktif Alarmlar sekmesi açılır. Sunucu ekranı aktif alarmlar sekmesi kısmında yer alan özellikler şekil 4 de numaralandırılarak belirtilmiştir.

<center>

![alarm34](/img/alarm34.png)
***<center>Şekil 4: Sunucu Ekranı Aktif Alarmlar Sekmesi</center>***

</center>

**Not:** Client ekranı aktif alarm kısmında yer alan özellikler ile sunucu ekranı aktif alarm sekmesinde yer alan özellikler birbiri ile benzer yapıdadır. Client ekranında oluşan alarmların doğruluğu kontrol edilmek istenir ise bu iki kısım kıyaslanabilir.

**Numara 1 Olay Zamanı:** Oluşan alarmın oluşma zamanı veya alarm idle durumda (alarm yok) ise alarm etiketine en son gelen değerin SCADA tarafından okunma zamanı bu sütunda yazmaktadır.

**Numara 2 ID:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm id bilgisi bu sütunda yazmaktadır. Alarm oluşturulma sırasında ViewPLUS SCADA editörü tarafından otomatik olarak her alarma farklı bir alarm id atanmaktadır. 

**Numara 3 Sınıf:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan sınıf adı bu sütunda yazmaktadır.

**Numara 4 İsim:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm adı bu sütunda yazmaktadır.

**Numara 5 Tanım:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan tanımı bu sütunda yazmaktadır.

**Numara 6 Durum:** Oluşan alarmın anlık durumu bu sütunda yazmaktadır. Alarm ile ilişkilendirilen etikete alarm değeri geldiğinde burada yazan değer 1 olmaktadır. 

Oluşan alarm client ekranı üzerinden onaylanmayıp (acknowledge edilmeyip) alarm ile ilişkilendirilen etikete alarm değeri dışında bir değer gelir ise burada yazan değer 0 olacaktır.   

Oluşan alarm eğer client ekranı üzerinden onaylanıp (acknowledge edilip) alarm ile ilişkilendirilen etikete alarm değeri dışında bir değer gelir ise bu alarm aktif alarm olarak değerlendirilmez ve aktif alarm ekranından gider.

**Numara 7 Priority:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan önceliği bu sütunda yazmaktadır. Buraya girilen öncelik değerine göre aktif alarmlar arasında alarm filtresi uygulayarak, alarmlarınızı öncelik sırasına göre listeleyebilirsiniz. Alarm önceliği olarak 255 farklı seviye tanımlanabilmektedir.

**Numara 8 Onaylayan:** Oluşan alarm client ekranı üzerinden onaylanmışsa (acknowledge edilmişse), onaylayan kişinin kullanıcı adı bu sütunda yazmaktadır.

**Numara 9 Onay Mesajı:** Oluşan alarm client ekranı üzerinden onaylanmışsa (acknowledge edilmişse), onaylanma mesajı bu sütunda yazmaktadır.

**Numara 10 Is Acknowledged:** Oluşan alarm client ekranı üzerinden onaylanmışsa (acknowledge edilmişse), onaylanma durumu bu sütunda yazmaktadır. Onaylanan alarmlarda acknowledged yazmaktadır.

**Numara 11 İstasyon:** Oluşan alarm ile ilişkilendirilen etiketin yer aldığı ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Etiket Kanalı -> İstasyon bilgisi bu sütunda yazmaktadır.

**Numara 12 Kanal:** Oluşan alarm ile ilişkilendirilen etiketin yer aldığı ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Etiket Kanalı ismi bu sütunda yazmaktadır.

**Numara 13 Value:** Oluşan alarm ile ilişkilendirilen etiketin anlık değeri bu sütunda yazmaktadır.

**Numara 14 Etiket Adı:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında ilişkilendirilen etiket adı bu sütunda yazmaktadır.

### Kayıtlı Alarmlar Sekmesi

Sunucu ekranından editör üzerinden oluşturulan tüm alarmları görmek için ViewPLUS SCADA Editörü -> Araçlar -> Sunucuyu (Server Engine) başlat-> Alarmlar -> Kayıtlı Alarmlar sekmesi açılır. Sunucu ekranı kayıtlı alarmlar sekmesinde yer alan özellikler şekil 5 te numaralandırılarak belirtilmiştir.

<center>

![alarm35](/img/alarm35.png)
***<center>Şekil 5: Sunucu Ekranı Kayıtlı Alarmlar Sekmesi</center>***

</center>

**Numara 1 ID:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm id bilgisi bu sütunda yazmaktadır. 

**Numara 2 Alarm Adı:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm adı bu sütunda yazmaktadır.

**Numara 3 Description:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan tanımı bu sütunda yazmaktadır.

**Numara 4 Class:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan sınıf adı bu sütunda yazmaktadır.

**Numara 5 Etkin:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan kullanımda kutucuğunun işaretlenip işaretlenmediği bu sütunda belirtilmektedir. Alarm oluşturulur iken kullanımda kutucuğu işaretlenir ise burada yazan değer 1, işaretlenmez ise burada yazan değer 0 olacaktır. Oluşturulan alarm bu seçenek sayesinde kullanımda veya kullanım dışı bırakılabilmektedir.

**Numara 6 Onay Gerektirir:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan geri bildirim iste kutucuğunun işaretlenip işaretlenmediği bu sütunda belirtilmektedir. 

Alarm oluşturulur iken geri bildirim iste kutucuğu işaretlenir ise burada yazan değer 1, işaretlenmez ise burada yazan değer 0 olacaktır.

Bu seçenek sayesinde oluşturulan alarmın kullanıcı onayına (acknowledge) tabi tutulup, tutulmayacağı seçimi yapılır.

**Numara 7 Loglama Aktif:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan veri tabanına giriş yap kutucuğunun işaretlenip işaretlenmediği bu sütunda belirtilmektedir. Alarm oluşturulur iken veri tabanına giriş yap kutucuğu işaretlenir ise burada yazan değer 1, işaretlenmez ise burada yazan değer 0 olacaktır. Bu seçenek sayesinde oluşturulan alarmın database e kaydının yapılıp, yapılmayacağı seçimi yapılır.

**Numara 8 Etiket ID:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında ilişkilendirilen etiket id bu sütunda yazmaktadır.

**Numara 9 Type:** Yapılacak geliştirmeler için ayrılan kısımdır. (Şuanlık bir fonksiyon tanımlanmamıştır.)

**Numara 10 Level:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan önceliği bu sütunda yazmaktadır. 

**Numara 11 Karşılaştırma Tipi:** Oluşturulan alarmın koşul tipi bu sütunda yazmaktadır. 

Koşul; değer sınıra eşit seçilir ise burada yazan değer 0,                 
Koşul; değer sınırdan küçük seçilir ise burada yazan değer 2,         
Koşul; değer sınırdan büyük seçilir ise burada yazan değer 1,           
Koşul; değer aralık içinde seçilir ise burada yazan değer 3,       
Koşul; değer aralık dışında seçilir ise burada yazan değer 4 olmaktadır.

**Numara 12 Sınır Değeri:** Oluşturulan alarmın sınır değeri bu sütunda yazmaktadır. Eğer alarmın oluşması için bellirli bir aralık değeri belirtilirse burada yazan değer baz alınmaz.

**Numara 13 Kontrol Değeri1:** Oluşturulan alarmın min. olarak girilen aralık değeri bu sütunda yazmaktadır. Eğer alarmın oluşması için belirli bir sınır değeri belirtilirse burada yazan değer baz alınmaz.

**Numara 14 Kontrol Değeri2:** Oluşturulan alarmın max. olarak girilen aralık değeri bu sütunda yazmaktadır. Eğer alarmın oluşması için belirli bir sınır değeri belirtilirse burada yazan değer baz alınmaz.

**Numara 15 Limit Tag1:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında ilişkilendirilen etiket id bu sütunda yazmaktadır.

**Numara 16 Limit Tag2:** Yapılacak geliştirmeler için ayrılan kısımdır. (Şuanlık bir fonksiyon tanımlanmamıştır.)

**Numara 17 ReadRights1:** Yapılacak geliştirmeler için ayrılan kısımdır. (Şuanlık bir fonksiyon tanımlanmamıştır.)

**Numara 18 ReadRight2:** Yapılacak geliştirmeler için ayrılan kısımdır. (Şuanlık bir fonksiyon tanımlanmamıştır.)

**Numara 19 Subscribers:** Oluşturulan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan abone kullanıcı id si bu sütunda yazmaktadır. Alarmların client ekranından izlenebilmesi için oluşturulan alarmlara abone kullanıcılar tanımlanmalıdır.

**Numara 20 Current State:** Oluşan alarmın anlık durumu bu sütunda yazmaktadır. Alarm ile ilişkilendirilen etikete alarm değeri geldiğinde burada yazan değer 1, alarm değeri dışında bir değer geldiğinde ise burada yazan değer 0 olmaktadır.

### Alarm Geçmişi Sekmesi

Sunucu ekranından editör üzerinden oluşturulan tüm alarmları görmek için ViewPLUS SCADA Editörü -> Araçlar -> Sunucuyu (Server Engine) başlat-> Alarmlar -> Alarm Geçmişi sekmesi açılır. Sunucu ekranı alarm geçmişi sekmesinde yer alan özellikler şekil 6 da numaralandırılarak belirtilmiştir.

<center>

![alarm36](/img/alarm36.png)
***<center>Şekil 6: Sunucu Ekranı Alarm Geçmişi Sekmesi</center>***

</center>

**Not:** Client ekranı alarm günlüğü kısmında yer alan özellikler ile sunucu ekranı alarm geçmişi sekmesinde yer alan özellikler birbiri ile benzer yapıdadır. Client ekranında oluşan alarmların doğruluğu kontrol edilmek istenir ise bu iki kısım kıyaslanabilir.

**Numara 1 Log Time:** Oluşan alarmın oluşma zamanı veya alarm idle (alarm yok) durumda ise alarm etiketine en son gelen değerin SCADA tarafından okunma zamanı bu sütunda yazmaktadır.

**Numara 2 Alarm ID:** Oluşan alarmın ViewPLUS SCADA Editörü -> Etiket Kanal Editörü -> Alarmlar kısmında yer alan alarm adı ile birlikte eklenmişse tanımı bu sütunda yazmaktadır.

**Numara 3 Current State:** Oluşan alarmın anlık durumu bu sütunda yazmaktadır. Oluşan alarmlar için alarm active veya alarm idle olmak üzere iki farklı durum oluşmaktadır.              

Örneğin alarm ile ilişkilendirilen etikete alarm değeri geldiğinde oluşan alarmın alarm durumu alarm active (alarm aktif) olacaktır.          
Oluşan alarm onaylanmayıp (acknowledge edilmezse) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse alarm durumu alarm idle (alarm yok) olacaktır.
 
**Numara 4 Event Type:** Oluşan alarmların olay tipleri bu sütunda yazmaktadır. Oluşabilecek olay tipleri aşağıdaki gibidir.

- Alarm Triggered (Alarm Tetiklendi): Alarm ile ilişkilendirilen etikete alarm değeri gelirse bu sütunda alarm triggered yazacaktır.              
- Alarm Removed (Alarm Kaldırıldı): Oluşan bu alarm onaylanıp (acknowledge edilirse) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse bu sütunda alarm removed yazacaktır.              
- Alarm Acknowledged (Alarm Onaylandı): Oluşan bu alarm onaylanırsa (acknowledge edilirse) bu sütunda alarm acknowledged yazacaktır.                   
- Alarm Recovered (Alarm Kaydedildi): Oluşan bu alarm onaylanmayıp (acknowledge edilmezse) alarm ile ilişkilendirilen etikete alarm değerinden farklı bir değer gelirse bu sütunda alarm recovered yazacaktır.

**Numara 5 DataVal:** Oluşan alarm ile ilişkilendirilen etiketin anlık değeri bu sütunda yazmaktadır.

**Numara 6 LogId:** Oluşan alarmın database kaydedilen log id leri bu sütunda yazmaktadır.

**Numara 7 Export to XML:** Oluşan alarmlar bu kısımdan dışarı aktarılabilmektedir. Dışarı aktarılacak dosyanın formatı xml olabilmektedir.














