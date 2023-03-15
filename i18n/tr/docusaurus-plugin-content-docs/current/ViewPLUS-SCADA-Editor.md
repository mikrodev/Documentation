---
title: ViewPLUS SCADA Editor
---

## BAŞLANGIÇ

### SCADA NEDİR?

SCADA terimi İngilizce "Supervisory Control and Data Acquisition” kelimelerinin ilk harflerinin okunması 
ile oluşturulan bir kısaltmadır. Kapsamlı ve bütünleşmiş bir veri tabanlı kontrol ve izleme sistemi olan 
SCADA ile bir tesise veya işletmeye ait tüm elektronik birimlerin otomatik kontrolü, gözetlenmesi ve 
sonuçların raporlanması sağlanabilir. Temel olarak SCADA yazılımından izleme, kontrol, veri toplama, 
verilerin kaydı ve saklanması işlevlerini gerçekleştirmesi beklenmektedir. SCADA sistemleri endüstriyel 
proseslerde, imalat, üretim, enerji üretimi, imalat ve rafinerilerde sürekli, kesintili, tekrarlayan ya da 
ayrık modlarda çalışabilir. Altyapı işlemleri, kamu veya özel sektörlerde su arıtma ve terfi merkezlerinde, 
atık su arıtma, petrol ve gaz boru hatları, elektrik iletim ve dağıtım, rüzgâr jeneratörleri, sivil savunma 
siren sistemleri ve büyük iletişim sistemlerini içerebilir. Tesis binaları, havaalanları, gemiler ve uzay 
istasyonları da dahil olmak üzere kamu ve özel tesisleri kapsayabilir. Isıtma ve havalandırma 
sistemlerinde (HVAC) erişim ve enerji tüketimini kontrol ve izleme gerekebilir. SCADA sağladığı 
maksimum fayda, güvenlik ve kolaylık bakımından endüstri tesislerinin en büyük ihtiyaçlarından olmaya 
devam edecektir.

### Mikrodev ViewPLUS SCADA

ViewPLUS geliştirilirken stabilite, kullanım kolaylığı ve görsellik prensipleri ön planda tutulmuştur. 
ViewPLUS ile sahada bulunan her türlü otomasyon biriminin görsel olarak takip, kontrol ve 
değerlendirilmesi sağlanabilir. 


ViewPLUS’ nın sahip olduğu bazı özellikleri şöyle özetleyebiliriz: 

#### Geniş Görsel Kütüphane

Geniş görsel kütüphanesinin yanında, kullanıcıların da kendi SCADA bileşenlerini kolaylıkla 
hazırlamasına imkan verir.

#### Paralel Yedekli Çalışma(Redundant Working Mode)

Sahadan veriler her iki SCADA sisteminde okunur ve işlenir.
Veri kaybı yaşanmaz
Haberleşme durum testleri (saha cihazları veya yedek SCADA)

#### Server/Client Mimari 

Çoklu çalışma istasyon desteği
Çalışma istasyonlarına yetki seviyesi atama


#### Lisansa Bağlı Etiket Kapasitesi 

Sınırsız lisans imkanı (Sistem belleği ile sınırlıdır.)
Etiket sayısı kadar alarm etiketi tanımlayabilme
Etiket sayısı kadar trend tanımlayabilme

#### İşletim Sistemi Desteği 

Windows 7/8/10
Windows Server 2008/2012/2016
Linux (Debian)
MacOSX

#### Güvenlik 

Etiketlere ve sayfalara 128 farklı erişim yetkisi tanılama
Kullanıcılara 128 farklı grup üyeliği atayabilme 
İşletim sistemi ile entegre güvenlik
Haberleşmede katman 7 protokollerinin TLS/SSL versiyonları
Yetkilendirme mekanizmasında düz metin şifreler yerine salt eklenmiş SHA256 özetler kullanır

#### Veri Aktarım 

SQL uyumlu dışa ve içe veri aktarım imkanı

#### Alarm

Tanımlanmış tüm etiketler için alarm tanımlama imkanı
Alarmlar 256 farklı kritiklik seviyesi tanımlayabilme
Aktive alarmları ve alarm geçmişini izleme imkanı
Tarih ve önem sırasına göre alarm izleme imkanı
Alarm listesinden çıktı alma imkanı: Excel,printer,pdf

#### Veri Kayıt Trend İzleme 

Tanımlanmış tüm etiketler için log kayıt imkanı
Trend tanımlanmış etiketler grafiksel gösterim
Trend tanımlanmış etiket verilerinin excel, pdf veya printer çıktısı

#### Haberleşme

Mikrodev PLC,REMOTE IO ve Gateway ürünleri ile mükemmel bağlantı
Endüstri standardı çok sayıda protokolle uyum: MODBUS TCP, MODBUS RTU,DNP3,SNMP, IEC-, BACNET

#### Veri Tabanı Desteği 

PgSQL

ORACLE

SQLite


##  MİMARİ

Mikrodev SCADA sunucusu intranet ya da internet üzerinden saha cihazlarına bağlanarak bu cihazların 
gerçek zamanlı izleme ve kontrolünü sağlar. Topladığı verileri etiket, olay ve alarm veri tabanına 
kaydeder. Aynı zamanda hazırlanmış olan SCADA projesini kullanarak internet üzerinden sunucuya 
bağlanan kullanıcıların sahadaki cihazları izlemesini ve kontrol etmesini sağlar. ViewPLUS ile tasarlanan 
ağ ve donanım topolojisine göre çok farklı kombinasyonlar oluşturulabilmekle beraber, temel olarak 
aşağıdaki şekilde gösterilen mimari kullanılabilir.

<center>

![introduction-01](/img/introduction-01.png)


</center>

## YENİ PROJE OLUŞTURMA  

Yeni proje oluşturmak için:

 Dosya>Yeni Dosya ya da Proje > Mikrodev SCA Projesi seçilir.,
 
 <center>

![new-project-01](/img/new-project-01.png)


</center>
 
  Proje ismi ve nereye kaydedeceği seçilir.

 <center>

![new-project-02](/img/new-project-02.png)


</center>
 
  Veritabanı kullanıcı adı ve şifrenizi girdikten sonra "Bağlantıyı Test Et" butonuna basılarak şifre 
doğrulaması yapılır.(Eğer PostgreSQL veritabanı, sisteminizde kurulu değilse " PgSQL ‘i indir" 
bağlantısına tıklayarak ilgili versiyonu indirip kurmanız gerekir)

<center>

![new-project-03](/img/new-project-03.png)


</center>

 Ekran rengi, varsayılan sayfa boyutu gibi görsel parametreler ayarlanır.
 
 <center>

![new-project-04](/img/new-project-04.png)


</center>

Sonraki sayfada SVN sürüm kontrol aracı kullanacaksak, bununla ilgili ayarlamalar yapılır.

<center>

![new-project-05](/img/new-project-05.png)


</center>

"Finish" butonuna basılarak yeni proje oluşturulmuş olur. Yeni oluşturduğunuz proje 2 adet 
dosyadan oluşur. Bunlardan ilki proje yapılandırma parametrelerinin saklandığı “scapro” uzantılı 
dosyadır. Bu dosya üzerinde herhangi bir değişiklik yapmanıza genelde ihtiyaç yoktur. Otomatik 
oluşturulan diğer dosya ise “intro.sca” ismindeki dosyadır. SCADA sisteminde kullanacağınız ana 
ekranı bu sayfa üzerinde tasarlayabilirsiniz.
 
 <center>

![new-project-06](/img/new-project-06.png)

</center>
 
 En solda, editörün temel arayüzlerinde gezinmenizi sağlayan gezinme düğmeleri bulunur. Bu düğmeleri kullanarak SCADA Düzenleyici görünümü, Projeler görünümü ve Etiket/kanal Düzenleyici görünümü arasında geçiş yapabilirsiniz. Gezinme düğmelerinin altında proje seçici bulunur. Editörde aynı anda birden fazla proje açıksa, projeler arasında geçiş yapmak için bu buton kullanılabilir.
 
 <center>

![new-project-07](/img/new-project-07.png)


</center>
 
 Detaylı bilgi için:
[Proje oluşturmak]
(https://www.youtube.com/watch?v=czQOlx0or2g&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=3).
 

## SSCADA GÖRSEL BİLEŞENLERİ

### Kenar çubuğu

Kenar çubuğu, SCADA Düzenleyici görünümünde mevcuttur. Projelere, dosyalara göz atmak ve bileşenleri eklemek için kenar çubuğunu kullanın.

Proje dosyaları ve bileşenleri, düzenleyicinin sol tarafındaki bölmeler kullanılarak kontrol edilir. Ayrıca bu panelin altındaki arama kutusu aracılığıyla proje dosyalarını filtreleyebilir ve arayabilirsiniz. Panelin sol alt tarafında, panelleri gizlemenizi ve göstermenizi sağlayan bir düğme bulunur.

<center>

![editor-view-01](/img/editor-view-01.png)

</center>

Kenar çubuğu menüsünden kenar çubuğunun içeriğini seçebilirsiniz:

Projeler, geçerli oturumda açık olan projelerin bir listesini gösterir.
Açık Belgeler, o anda açık olan dosyaları gösterir.
Dosya Sistemi, seçili olan dizindeki tüm dosyaları gösterir.
Kenar çubuğunun görünümünü aşağıdaki şekillerde değiştirebilirsiniz:

Kenar çubuğunu değiştirmek için ￼ (Kenar Çubuğunu Gizle/Kenar Çubuğunu Göster) öğesini tıklayın veya Alt+0 (macOS'ta Cmd+0) tuşlarına basın.
Kenar çubuğunu bölmek için ￼ (Böl) öğesini tıklayın. Bölünmüş görünümde görüntülemek için yeni içerik seçin.
Bir kenar çubuğu görünümünü kapatmak için ￼ (Kapat) öğesini tıklayın.

### Bileşenler

ViewPLUS SCADA, görüntülenen verilerin görselleştirilmesi için farklı tiplerde bileşenler sunar. Bunlar; temel bileşenler, zamanlayıcılar, grafikler, veritabanı sorgusu ve metin bileşenleri.

Temel bileşenler, Editörün sol panelindeki "SCADA Bileşenleri" bölmesinde bulunur. Diğer bileşenler, düzenleyici penceresinin üstündeki "bileşenler araç çubuğu" kullanılarak oluşturulabilir.

<center>

![editor-view-02](/img/editor-view-02.png)

</center>

####  Temel Bileşenler 

“Bileşen Yöneticisi” kullanılarak buradaki bileşenlere kullanıcının tanımlamış olduğu farklı nesneler de 
eklenebilir. Mevcut sayfaya bileşen eklemek için paneldeki bileşenlerden birine sol fare tuşu ile bastıktan 
sonra, sahnede istenen pozisyona sol fare tuşu ile tekrar basılır ve bileşen eklenmiş olur. 

<center>

![editor-view-03](/img/editor-view-03.png)

</center>

Eklenen bileşenin boyutlarını değiştirmek için bileşenin sağ alt köşesindeki üçgen ikonunu fare ile 
hareket ettirebilirsiniz. Bileşene ait gelişmiş özellikleri değiştirmek için “Bileşen Özellikleri Paneli” 
kullanılır. 

#### Metin Bileşeni 

Metin bileşeni, farklı font, renk ve biçimde yazıları ekranda göstermek için kullanılır. Metin bileşeni 
üzerinde herhangi bir dinamik içerik gösterilmez. Sabit metinler için kullanılır. Metnin format ayarlarını 
araç çubuğundaki "Format" sekmesinden değiştirebilirsiniz. 

<center>

![editor-view-04](/img/editor-view-04.png)

</center>

Dinamik içeriği metin bileşeninde gösterebilirsiniz.
Bazı bileşenlere dinamik içerik ekleyebilirsiniz. Bunu başarmak için '$' operatörünü ve 'parantez' kullanmalısınız ($ {....}):

 ```
 ${Etiket_ID}
 ```
Örnek olarak, sisteminizde etiket kimliği '1234' olan bir etiketin değerini görüntülemek için bileşeninize '${1234}' yazmalısınız.

```
Depo Seviye degeri ${1234} dir
```
bu ifade aşağıdaki gibi bileşende gösterilecektir:

```
Depo Seviye degeri 78 dir
```

"Çift duyarlıklı" sayılarla çalışırken, görüntülenen değerin kesinliğini değiştirmek için "printf metin biçimi"ni (Nesne Özellikleri Paneli bölümüne bakın) kullanabilirsiniz:

```
Depo Seviye degeri {1234,%.3f} dir
```
'1234' kimliğine sahip etiketin değeri "567.123456" gibi bir çift duyarlıklı sayıysa, bu ifade bileşende şu şekilde görüntülenecektir:

```
Depo Seviye degeri 567.123 dir
```

#### Zamanlayıcı Bileşeni 

Mikrodiagram yazılımda PLC projesine eklemiş olduğunuz “Zamanlayıcı Blokları” nın kontrolünü 
“Zamanlayıcı” bileşeni üzerinden yapabilirsiniz. Etiket/Kanal Editöründe tanımlamış olduğunuz 
“Zamanlayıcı Etiketleri” ni zamanlayıcı bileşenine ekleyerek, istemci üzerinden kullanıcıların zamanlama 
ayarlarını değiştirebilmeleri sağlanır. 


<center>

![editor-view-05](/img/editor-view-05.png)

</center>

#### Grafik Bileşeni 

Grafik bileşeni kullanılarak, istediğiniz etikete ait verileri grafiksel olarak izleyebilirsiniz. Grafik nesnesi 
grafikleri çizgi grafiği şeklinde gösterir. Grafik ayarları penceresinde grafiğin görünümü, davranışı ve 
gösterilecek etiketlere ait parametreler ayarlanabilir. 

Çubuk grafikte sadece eklenen etiketlerin son değerleri gösterilirken; etiketlerin geçmiş değerleri çizgi grafikte görüntülenebilir.

<center>

![editor-view-06](/img/editor-view-06.png)

</center>

Grafik Görünüm Türü: Grafiğin nasıl çalışacağını ayarlar.
Grafik Bileşeni : Eklenen bileşenin grafiksel gösterimi.

Grafiğe Bağlantı : Eklenen bileşen yalnızca bir düğme görevi görür. Basıldığında ayrı bir pencere grafiği ekranı gösterilir.

Grafik Türü: Grafik türü için seçici tür

Line Grid : Tanımlanan etiketlerin trend verileri aynı grafik üzerinde farklı renklerle çizilir. Sahadan okunan yeni verilerle grafik saniyede bir güncellenir.

Çubuk Grafik: Tanımlı etiketler, çubuk grafik biçiminde görüntülenir. Grafik saniyede bir güncellenir.

#### Veritabanı Sorgu Bileşeni 
Bu bileşen veritabanından bazı özel sorguların alınarak istemci üzerinde gösterilmesini sağlar. Veritabanı
sorgu ayarları penceresinde, sorgulanacak etiket, sorgu tipi, aralığı, güncelleme sıklığı ve bileşenin 
göeünümüyle ilgili parametreler ayarlanabilir.

<center>

![editor-view-07](/img/editor-view-07.png)

</center>

#### Tablo Bileşeni
Tablo bileşeni üzerinde verileri tabular bir formda gösterebilirsiniz. Tablo menüsü üzerinden tabloya yeni 
kolon/satır ekleyip çıkartabilirsiniz. 

<center>

![editor-view-08](/img/editor-view-08.png)

</center>

#### Tablo Şekillendirme

Düzenleyicinin üst kısmındaki biçim araç çubuğunu kullanarak hücre metni için yazı tipini ve rengini ayarlayabilirsiniz:

<center>

![editor-view-09](/img/editor-view-09.png)

</center>

Stil sayfalarını kullanarak tablonun görünümünü de değiştirebilirsiniz. Satır renklerini değiştirmek için örnek bir stil sayfası:

```
alternate-background-color:#AACA98;
background-color: #D3E3D0;
```

#### Formulas on Table
Tablo hücrelerinde excel benzeri oluşum kullanabilirsiniz.

Desteklenen işlevler şunlardır:

[SIN](https://support.microsoft.com/en-us/office/sin-function-cf0e3432-8b9e-483c-bc55-a76651c95602?ui=en-us&rs=en-us&ad=us) 
[COS](https://support.microsoft.com/en-us/office/cos-function-0fb808a5-95d6-4553-8148-22aebdce5f05?ui=en-us&rs=en-us&ad=us) 
[TAN](https://support.microsoft.com/en-us/office/tan-function-08851a40-179f-4052-b789-d7f699447401?ui=en-us&rs=en-us&ad=us)
[COT](https://support.microsoft.com/en-us/office/cot-function-c446f34d-6fe4-40dc-84f8-cf59e5f5e31a?ui=en-us&rs=en-us&ad=us)
[ABS](https://support.microsoft.com/en-us/office/abs-function-3420200f-5628-4e8c-99da-c99d7c87713c?ui=en-us&rs=en-us&ad=us)
[LOG](https://support.microsoft.com/en-us/office/log-function-4e82f196-1ca9-4747-8fb0-6c4a3abb3280?ui=en-us&rs=en-us&ad=us)
[LOG10](https://support.microsoft.com/en-us/office/log10-function-c75b881b-49dd-44fb-b6f4-37e3486a0211?ui=en-us&rs=en-us&ad=us)
[SQRT](https://support.microsoft.com/en-us/office/sqrt-function-654975c2-05c4-4831-9a24-2c65e4040fdf?ui=en-us&rs=en-us&ad=us)
[POWER](https://support.microsoft.com/en-us/office/power-function-d3f2908b-56f4-4c3f-895a-07fb519c362a?ui=en-us&rs=en-us&ad=us)
[ROW](https://support.microsoft.com/en-us/office/row-function-3a63b74a-c4d0-4093-b49a-e76eb49a6d8d?ui=en-us&rs=en-us&ad=us)
[COLUMN](https://support.microsoft.com/en-us/office/column-function-44e8c754-711c-4df3-9da4-47a55042554b?ui=en-us&rs=en-us&ad=us)
[PI](https://support.microsoft.com/en-us/office/pi-function-264199d0-a3ba-46b8-975a-c4a04608989b?ui=en-us&rs=en-us&ad=us)
[SUM](https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89?ui=en-us&rs=en-us&ad=us)
[PRODUCT](https://support.microsoft.com/en-us/office/product-function-8e6b5b24-90ee-4650-aeec-80982a0512ce?ui=en-us&rs=en-us&ad=us)
[MIN](https://support.microsoft.com/en-us/office/min-function-61635d12-920f-4ce2-a70f-96f202dcc152?ui=en-us&rs=en-us&ad=us)
[MAX](https://support.microsoft.com/en-us/office/max-function-e0012414-9ac8-4b34-9a47-73e662c08098?ui=en-us&rs=en-us&ad=us)
[AVERAGE](https://support.microsoft.com/en-us/office/average-function-047bac88-d466-426c-a32b-8f33eb960cf6?ui=en-us&rs=en-us&ad=us)
[MEDIAN](https://support.microsoft.com/en-us/office/median-function-d0916313-4753-414c-8537-ce85bdd967d2?ui=en-us&rs=en-us&ad=us)
[MODE](https://support.microsoft.com/en-us/office/mode-function-e45192ce-9122-4980-82ed-4bdc34973120?ui=en-us&rs=en-us&ad=us)

#### Görüntü Bileşeni

Görüntü bileşenini kullanarak görünümünüze görüntü ekleyebilirsiniz. Eklenen resmi yeniden boyutlandırabilir, döndürebilir ve çevirebilirsiniz.

<center>

![editor-view-10](/img/editor-view-10.png)

</center>

#### Web Frame Bileşeni 

Web Frame bileşenini kullanarak görünümünüze web içeriği ekleyebilirsiniz. Eklenen Frame  yeniden boyutlandırabilir, döndürebilir ve çevirebilirsiniz. Bu bileşen, örneğin SCADA sayfanıza bir web kamerası görünümü eklemeniz gerektiğinde kullanışlıdır.

<center>

![editor-view-11](/img/editor-view-11.png)

</center>

Web Frame görünümü, OperatorClient'in mobil sürümlerinde desteklenmez.

#### Nesne Ekleme Modu

Nesne Ekleme Modu, son kullanılan scada bileşenini editör ekranına getirmek için kullanılır.

<center>

![add-object](/img/add-object.png)

</center>

### Sayfa Özellikleri Paneli

<center>

![editor-view-12](/img/editor-view-12.png)

</center>

Sayfanın temel ayarları bu panel üzerinden yapılır.

#### Sayfa ismi
Sekme olarak ayarlanmış sayfalar için istemci ekranında sol panelde sayfaya görünmesini istediğiniz isim.

#### Sayfa Kimliği
Her sayfa için sistem tarafından atanan benzersiz kimlik.

#### Sayfa sırası
Sekmeler olarak ayarlanan sayfalar için istemci ekranında sol panelde sayfanın görüneceği sırayı belirler.

#### Sayfa Türü
Üç farklı sayfa türü vardır. "Sekme" tipi sayfalar istemcide tam ekran olarak görünür. Aynı zamanda sol taraftaki gezinme panelinde bu sayfaya erişim sağlayan bir buton oluşturulur. "Bağlantılı Sayfa" türü için "Sekme"den farklı olarak, gezinme panelinde herhangi bir düğme yoktur. "İletişim kutusu" türü sayfalar, bir eylem havuzunda açılacak şekilde açılır pencereler olarak yapılandırılmış sayfalardır.

#### Coğrafi Görünüm
Google Haritalar API'sini etkinleştirir ve haritayı gösterir. Bu özelliği kullanabilmek için bir harita API anahtarı sağlamalısınız. Önce Google'a giriş yapın, Google API Anahtar Konsolu'na gidin ve "Google Haritalar JavaScript API"sini seçin. Anahtarı aldıktan sonra bunu "Projeler > Proje Dosya Yolları > Harita API Anahtarı"na ekleyin.

#### GeoCenter
Bu seçenek, açıldığında haritanın başlangıç ​​konumunu ve yakınlaştırma seviyesini belirler. Şu biçimde olmalıdır: "Boylam, Enlem, Yakınlaştırma Düzeyi" Başlangıçta ölçekle Sayfa istemci ekranında ilk açıldığında ölçeklemenin nasıl ölçekleneceğini ayarlayın.

#### Özel boyut
Proje ayarlarında varsayılan sayfa boyutu yerine farklı bir boyut kullanılacaksa bu seçenek işaretlenir.

#### Sayfa genişliği
Özel sayfa boyutu için genişlik

#### Sayfa Yüksekliği
Özel sayfa boyutu için yükseklik

#### Arka plan görüntüsü
Sekme olarak ayarlanan sayfalar için sol paneldeki sayfa için istemci ekranında görüntülenecek bir resim görüntülenir.

#### Kaydırma Metni Ekle
Sayfanın altına bilgilendirici mesajlar göstermenizi sağlayan bir slip ekler.

#### Erişim Hakları
Sayfaya erişimi kısıtlamak için farklı erişim hakları tanımlanabilir. Bu haklara sahip olmayan kullanıcılar için sayfa görüntülenmez.
Okuma: Kullanıcıların etiket değerlerini görebilmeleri için sahip olmaları gereken haklardır. Burada 
ayarlanan haklara sahip olmayan kullanıcılar bu etiket değerini göremezler. 
Yazma: Kullanıcıların etiket 
değerlerini değiştirebilmeleri için sahip olmaları gereken haklardır. Burada ayarlanan haklara sahip 
olmayan kullanıcılar bu etiket değerini değiştiremezler. 

### Katmanlar Paneli

Katmanlar panelinde yeni bir katman oluşturabilir veya silebilirsiniz. Oluşturduğunuz katmanlar üzerinde bileşenler oluşturarak sayfada hiyerarşik bir düzen oluşturabilirsiniz. Katmanları gizleyerek/göstererek karmaşık tasarımları daha kolay hale getirebilirsiniz. Katmanların sağladığı bir diğer fayda ise, farklı yakınlaştırma seviyelerinde katmanların görünürlüğünün değiştirilebilmesidir.

#### Katmanları Gizle / Göster
Eklemiş olduğunuz katmanları farenin sağ tıklama menüsündeki "Katmanı Gizle / Göster" seçeneğini kullanarak gizleyebilir/gösterebilirsiniz.

<center>

![editor-view-13](/img/editor-view-13.png)

</center>

#### Katmandaki Bileşenlerin Sırasını Değiştirme

Eklemiş olduğunuz katmanların sırasını farenin sağ tuş menüsündeki "Katman Bileşenlerini Öne Getir" veya "Katman Bileşenlerini Geri Gönder" seçeneklerini kullanarak değiştirebilirsiniz.


#### Ölçek Düzeyine Göre Katmanları Gizle / Göster

Ekranın ölçek düzeyine göre sayfada tanımlanan katmanları gizleyebilir ve gösterebilirsiniz. Bu ölçekte, ölçek düzeyi arttığında daha ayrıntılı bilgi bileşenleri görüntüleyebilirsiniz ancak ölçek düzeyi arttığında daha az bileşen göstererek tasarımın karmaşıklığını azaltabilir ve kullanımı daha kolay hale getirebilirsiniz. Bunu yapmak için önce "Katmanlar Paneli"nde "Katman Özellikleri"ni seçin.

Açılan iletişim kutusunda, ölçek düzeyi parametrelerini gösteren iki alan vardır.

<center>

![editor-view-14](/img/editor-view-14.png)

</center>

Katman, buraya girilecek iki ölçek değeri arasında görünecektir. Değerlerden birini "-1" olarak tanımlarsanız, katman, ölçekten bağımsız olarak bu yönde sürekli olarak görünür olacaktır. Örneğin, "300" ve "-1" değerleri dikkate alınırsa sonuç şu şekilde olacaktır: "Ölçek 3'ten büyükse katmanı görünür yap"

Ölçek '3'ten küçüktür:

<center>

![editor-view-15](/img/editor-view-15.png)

</center>

Ölçek '3'ten yüksek:

<center>

![editor-view-16](/img/editor-view-16.png)

</center>

Resimde de göreceğiniz gibi skala değeri '3' e çıkınca butonların olduğu katman görünür hale geliyor.

### GIS Nesne Paneli

<center>

![editor-view-17](/img/editor-view-17.png)

</center>

Bu paneli kullanarak haritalarınızı düzenleyebilirsiniz.

#### Metin
Haritada görünecek olan işaretçinin adı.

#### Konum
İşaretçinin haritadaki konumu. "Boylam, Enlem" biçiminde olmalıdır

#### Simge
Haritada kullanılacak özel işaretçi simgesi

#### Sayfa Bağlantısı
İşaretçi tıklandığında gidilecek sayfa bağlantısını seçin. Sayfa bağlantısını etkinleştirebilir veya devre dışı bırakabilirsiniz. Sayfa bağlantısını devre dışı bıraktığınızda "Sayfaya Git" düğmesi bilgi penceresinde kaybolacaktır. Ayrıca bu panelden işaretçide hedef sayfanın alarmlarının gösterilmesini etkinleştirebilir/devre dışı bırakabilirsiniz.

<center>

![editor-view-18](/img/editor-view-18.png)

</center>

#### Bilgi Penceresi
Burada, her işaretçi için Bilgi Penceresinde gösterilecek herhangi bir html içeriğini ekleyebilirsiniz. Html öğelerinin içinde ${tag_id} ve #{process} sözdizimini kullanabilirsiniz.

#### İşaretleyici Düğmesi Ekle
Yeni bir işaretçi eklemek için bu düğmeyi seçtikten sonra haritaya tıklayın

#### İşaretçileri Kaldır Düğmesi
İşaretçileri kaldırmak için bu düğmeyi seçtikten sonra haritaya tıklayın

#### GeoJson Düğmesinden İşaretleri İçe Aktarma
Bu düğmeyi kullanarak işaretçileri bir geoJson dosyasından içe aktarabilirsiniz.
Daha fazla bilgi için [https://geojson.io](https://geojson.io) adresine gidin.

### Nesne Özellikleri Paneli
Sayfaya eklenen SCADA nesnelerini ayarlamanızı sağlayan bir paneldir.

<center>

![editor-view-19](/img/editor-view-19.png)

</center>

#### Obje adı
Nesneyi ayırt etmeyi kolaylaştıran bir ad.

#### Nesne türü
Nesnenin bileşen türünü temsil eder.

#### Geometri
Nesnenin ekrandaki konumu, ölçek ve döndürme ile ilgili parametrelerdir. Sayfanın en sol üst noktası (0,0) noktası kabul edilerek konumlandırılır. Konum değeri aşağı ve sağa doğru artar.

#### Sabitler
Nesnenin görünümüyle ilgili bazı ayarları içerir.

```
Font X Offset : Used to add a horizontal offset to the position of the text to be printed on the object, relative to the upper left corner of the object.  
Font Offset : Used to add a vertical offset to the position of the text to be printed on the object, relative to the upper left corner of the object.  
Text Content : It is the field in which the display format of the "Text Label" defined in "Feature Tags" is conŞekild. The "formatted" text entered here is printed on the component. The text to be entered must be in "printf text format". The following examples can be used for formatting:

Integer             :% d    => "1977"  
Add leading spaces  :% 10d  => "1977"  
Add a leading zero  :% 010d => "0000001977"  
Float numbers       :% 4.2f => "3.14"

You can also display date/time values read from a 'seconds' source in desired format. To achieve this you can use "%dt(...)" notation. "%dt(...)" notation assumes that the tag value is in seconds:

Date is : %dt(dd.MM.yyyy / hh:mm)  will be displayed as:

Date is : 13.05.2017 / 12:24
```

```
Font Style Sheet : By setting the style sheet for the "Font Content" to be displayed.
Text Width : The maximum width of the text to be displayed on the component.
```
Olaylar: Kullanıcı etkileşimi ayarlarını içerir.
```
Event Type : The parameter that determines when the event will be fired.             
MousePressed: Left mouse button press event   
MouseReleased: Left mouse button release event   Keystroke: Keyboard push event             

Event Action : When "Event Type" is triggered, the function to be operated is selected.               
SET           : Sets the value of "Target Event Tag" to "1".   CLEAR: Makes the value of "Target Event Tag" "0".   
CHANGE        : Makes "0" if "Target Event Tag" is "1" and "1" if it is "0".   
LOADVALUE     : If this function is selected, users will have a dialogue page in the client software where they can right-click on this component mouse to change the value of "Target Event Tag".   
NEXTPAGE   
PREVIOUSPAGE   
GOPAGE        : The page that was selected in "Go to Page" opens on the screen.   
GOLINK        : The link defined in "WebLink" is executed.

Target Event Tag : Defines the tag that is the target of the "Event Action"  
Go to page : Page selection for "Go to page" action
(Web)link: If this field is defined as a web link, a menu entry will be created to access the related page from the right-click menu of the component. You can also create direct link to Alarms page by writing ":Alarms" expression or to Reports page by writing ":Reports" to this field or to previous page by writing ":Back". Other than that you can directly create a link to a report query in this field.
```

Ayrıntılı bilgi için: [Bileşen Etkinlik Türü ve Etkinlik Eylemleri](https://www.youtube.com/watch?v=l0icsb53-Ng&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=8).

### Etiket Paneli

Bu panelden seçilen etiketlerden okunan değerler, sahadan okunan değerlere göre sürekli güncellenir.

Burada tanımlanan etiketler makrolarda da kullanılabilir. Her etiket için önceden tanımlanmış "i, o, s, w" değerleri vardır. (i1, i2, o1, o2 .. gibi). Etiketlerin varsayılan değişken adlarını fare ile üzerlerine getirerek görebilirsiniz.

<center>

![editor-view-20](/img/editor-view-20.png)


</center>

#### Özellik Etiketleri

Görüntü İndeksi Etiketi: Anında görüntülenecek bileşenin görüntü indeksini gösterir. Hangi resimlerin hangi indekste olduğu "Component Manager" kullanılarak değiştirilebilir veya "Diğer Sekme" altında görüntülenebilir.

Metin Etiketi: Burada seçilen etiketin değeri, "Metin İçeriği"nde belirtilen forma göre bileşen üzerinde görüntülenir.

X Konumu: Bileşenin yatay konum koordinatı bu parametreden alınır. Sayfanın sol üst köşesi (0,0) koordinatıdır. Sağa gidildikçe X değeri artar.

Y Konumu: Bileşen ekranının dikey konum koordinatı bu parametreden alınır. Sayfanın sol üst köşesi (0,0) koordinatıdır. Y değeri düştükçe artar.

Genişlik: Bileşenin genişlik değeri bu etiketten okunur.

Yükseklik: Bileşenin yükseklik değeri bu etiketten okunur.

Dönüş Açısı: Bileşenin X ekseni ile dönüş açısı. Derece cinsinden değer alır.

Metin rengi: Bileşen üzerinde görüntülenecek yazının rengi bu parametreden alınır.

Maske rengi: Bileşene uygulanacak maskenin rengi bu parametreden alınır.

112233 olarak tanımlanan RGB renk değerinin "112233" hex değeri tamsayı sayaç değeri olarak alınır. Bazı örnek onaltılık renk değerlerini [burada](https://www.w3schools.com/colors/colors_picker.asp) bulabilirsiniz. Ve renk değerini tamsayıya dönüştürmek için [bu](https://www.binaryhexconverter.com/hex-to-decimal-converter) aracını kullanabilirsiniz.

Maske şeffaflığı: Görüntülenecek maskeli baloya ait şeffaflık değeri için bu etiketten 0-255 arası bir değer alınır.
Özel Etiketler: Burada seçtiğiniz 7 etiket makrolar tarafından kullanılabilir olacaktır.

### Diğer Ayarlar Paneli

<center>

![editor-view-21](/img/editor-view-21.png)

</center>

Limitler: Kullanıcıların istemci yazılımı aracılığıyla "Target Event Tag" değerini değiştirebilecekleri maksimum ve minimum değerler bu parametreler kullanılarak ayarlanır.

Araç İpucu: Kullanıcılar fareyi istemci yazılımındaki bileşenin üzerine getirdiğinde gösterilecek içeriği ayarlayın. Araç ipuçlarında dinamik içeriği gösterebilirsiniz. Lütfen Temel Komut Dosyasına bakın.

Makro: Bileşen için komut dosyası bu kutuya yazılır. Makrolar hakkında daha fazla bilgi için ilgili bölüme bakın.

Görüntüler: Seçilen bileşen için tanımlanan görüntüler ve indeks numaraları bu alanda görüntülenir. İndeks numarası, "Etiketler Paneli"nde bulunan "Görüntü İndeks Etiketi"nin etiket değerinden okunan veri değerine göre hangi resmin gösterileceğini ifade eder. Bileşenlerin indeks görüntüleme sırasını bu panelden değiştirebilirsiniz.

<center>

![editor-view-22](/img/editor-view-22.png)

</center>

Görsellere sağ tıklayarak açılan içerik menüsünden görsel indekslerini yukarı veya aşağı hareket ettirebilirsiniz.

Detaylı bilgi için: [Limit, Hint, Macro and Index Assignments](https://www.youtube.com/watch?v=7d1n1Myp1Tc&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=9).

## Proje Görünümü

### SCADA Sayfaları

Projede oluşturulan tüm sayfaların listesi. Bu görünüm, proje için oluşturulan sayfalar hakkında ayrıntılı bilgi verir.

<center>

![project-view-01](/img/project-view-01.png)

</center>

### Proje Dosya Yolları

SCADA projesiyle ilgili bazı önemli klasör yolları

<center>

![project-view-02](/img/project-view-02.png)

</center>

### Yapılandırmayı Görüntüle

SCADA sayfaları için varsayılan ayarlar bu menü kullanılarak yapılandırılır.

<center>

![project-view-03](/img/project-view-03.png)

</center>

### Client Seçenekleri

Bu menüde Client görünümü ile ilgili çeşitli ayarlar yapılabilir.

<center>

![project-view-04](/img/project-view-04.png)

</center>

### Etiket ve Kanal Düzenleyici Görünümü

Kanallar ve etiketler, SCADA yazılımının saha cihazlarındaki verilere erişmesini sağlayan özel tanımlardır. Kanallar, cihazla sahada haberleşmeyi sağlayacak protokol tanımlarını ve bu protokole özel ayarları içerir. Etiketler, bağlı cihazdaki kayıtlar için adres tanımlarından oluşur. Alarm yönetimi de bu görünüm altında yapılır.

#### Kanallar

Alandaki bir cihaz ile bağlantı tanımlarını içeren kanallar oluşturulabileceği gibi, makrolar veya veritabanı sorguları gibi sanal bağlantılarla tanımlanan özel kanallar da oluşturulabilir.

Yeni bir kanal oluşturmak için "Tag Channel Editor" sekmesini açın, herhangi bir kanal üzerinde farenin sağ tuşuna basın ve açılır menüden "New Channel" öğesini seçin.

Açılan diyalog penceresinde yeni kanal ile ilgili gerekli ayarlamalar yapılabilmektedir.

#### Etiketler

"Etiket", sahneden okunan veya sistem tarafından sanal olarak oluşturulan nokta verilerini ifade eder. Etiketler kanalların altında tanımlanır ve bulundukları kanalın türüne göre farklı özelliklere sahip olabilir.

#### Etiketler Oluşturma
Bir etiket oluşturmak için "Etiket/Kanal Düzenleyici Paneli"ni açın. Etiket/Kanal bölmesi ekranın sol üst kısmındadır. Bölmede, etiket oluşturmak istediğiniz kanala sağ tıklayın. Bağlam menüsünde "Yeni Etiket" eylemini seçin.

<center>

![project-view-05](/img/project-view-05.png)

</center>

"Yeni Etiket" iletişim kutusunda etiket için bir ad ve açıklama yazın. "Etiket adı" benzersiz olmalıdır; mevcut bir etiket adını seçerseniz, sistem size bir uyarı verecektir.

<center>

![project-view-06](/img/project-view-06.png)

</center>

Sistemde oluşturulan tüm etiketlerin değiştirilebilen ortak özellikleri vardır. Bu özellikler şunlardır:


#### Çoklu Etiket Değişimi

Değiştirilecek bileşenlerin üzerindeki etiketlerin ön ekinden sonraki harfler, konulacak etiketlerin ön ekinden sonraki harflerle aynı olmalıdır.

<center>

![multi-label-exchange-1](/img/multi-label-exchange-1.png)

</center>

Birden çok etiketi değiştirmek için Etiketleri Değiştir sekmesine tıklayın.

<center>

![multi-label-exchange-2](/img/multi-label-exchange-2.png)

</center>

Etiketleri Değiştir penceresinde gerekli işlem yapıldığında çoklu etiket değiştirme işlemi tamamlanır.

<center>

![multi-label-exchange-3](/img/multi-label-exchange-3.png)

</center>

Detaylı bilgi için:[Multi-Label Exchange](https://www.youtube.com/watch?v=qyHYIkWGs_k&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=24).

#### Genel Etiket Parametreleri

##### Kullanım
Etiket "kullanımda" olarak işaretlenmemişse, SCADA sunucusu tarafından yok sayılır. Etiket sadece sistemde bir tanım haline gelir.

##### Etiket adı
Her etiketin benzersiz bir adı olmalıdır. Etiketi kısaca açıklamak için net kelimeler ve format kullanılmalıdır.

##### Tanım
Etiket hakkında kısa bir açıklama yapın

##### Birim Adı
Bu, etiket için isteğe bağlı bir özelliktir. Etiketleri sahadaki birimlere göre gruplamak istiyorsanız faydalı olabilir.

##### Etiket Türü
Mikrodev cihazlarında takvim işlemleri için ayrılmış özel bir register olan "Schedule Tag" seçimi için bir seçenektir. Daha fazla ayrıntı için Mikrodiyagram belgelerine bakın

#### Erişim Hakları
Okuma: Kullanıcıların etiket değerlerini görebilmeleri için sahip olmaları gereken haklardır. Burada belirlenen haklara sahip olmayan kullanıcılar bu etiket değerini okuyamayacaktır. Yazma: Etiket değerlerini değiştirmek için kullanıcıların sahip olması gereken haktır. Burada belirlenen haklara sahip olmayan kullanıcılar bu etiket değerini değiştiremezler.

#### Değişken
Değişken Türü: Değişkenin matematiksel türü.

#### Logging

##### Veritabanına Giriş Yap
Bu seçenek etkinleştirilmezse, etiket değeri sistemde günlüğe kaydedilmeyecek ve geçmiş değerler görüntülenmeyecektir. Ayrıca tarihsel değerler grafikte görüntülenemez.

##### Oturum açma değişikliği
Etiket değerinin değişmesi durumunda loglama yapılır. Değişiklik türü "Yüzde" veya "Seviye" değişikliği türünde olabilir.

##### Yüzdelik değişimi
Değişiklik türü olarak "Yüzde Değişim" seçilirse; Etiket değeri, en son kaydedilen değerin belirtilen yüzde değeri kadar değişirse, günlük kaydı yapılır. Değer "0" olarak ayarlanırsa her türlü değişiklik loglanır.

##### Seviye Değişikliği
Değişiklik türü olarak "Seviye Değişikliği" seçilirse; etiket değeri belirtilen değer kadar değiştiyse, loglama yapılır. Değer "0" olarak ayarlanırsa her türlü değişiklik loglanır.

##### Periyodik Olarak Giriş Yapma
Bu seçenek etkinleştirilirse, etiket, belirtilen zaman aralığında sürekli olarak günlüğe kaydedilir.
Not: Kaydedilecek verilerin boyutunu gereksiz yere büyütmemek için, günlüğe kaydetme türü ve günlüğe kaydedilecek etiketler dikkatli bir şekilde seçilmelidir. Örneğin;

Geçmiş değerlere ihtiyacınız yoksa etiketler asla günlüğe kaydedilmemelidir.
Analog değişkenler için bir seviye veya yüzde değişimi seçilirse, veri alışverişi modeline uygun bir yüzde veya seviye seçilmelidir.
Dijital değerler için periyodik loglama yerine "log on change" kullanılmalıdır.

##### Veri Kaydı Filtresi

Veri kaydı filtresini kullanarak, sahadan toplanan ölçüm değerlerinin seçtiğiniz filtreye göre loglanmasını engelleyebilirsiniz. Böylece olası yanlış verileri alabileceksiniz.

Yalnızca maksimum değerde azalırken günlüğe kaydet
Bu filtre, yalnızca girilen maksimum değerin altındaki azalan verilerin günlüğe kaydedilmesine izin verir. Örneğin; Maksimum değer 1000 olarak girilirse:

```
188,
225 ,(logged)
1500,(not logged)
350 ,(logged)
400  (logged)
```

Bu örnekte, '1500' değeri bir önceki değerden 1275 fazladır, bu nedenle maksimum 1000 değerini aşmaktadır. Bu nedenle, günlüğe kaydedilmez.

Yalnızca maksimuma çıkarken günlüğe kaydet
Bu filtre yalnızca girilen maksimum değerin altındaki artımlı verilerin günlüğe kaydedilmesine izin verir.

Yalnızca değer aralıktaysa günlüğe kaydet
Bu filtre, yalnızca alandan okunan değer belirtilen aralıktaysa günlüğe kaydetmeye izin verir.

Yalnızca değer aralık dışındaysa günlüğe kaydet
Bu filtre, yalnızca alandan okunan değer belirtilen aralığın dışındaysa günlüğe kaydetmeye izin verir.

### Alarmlar

Alarmlar, izleme sistemlerinin ayrılmaz bir parçasıdır. ViewPLUS, saha verilerine ve kullanıcı erişim haklarına göre kullanıcılar için alarmlar oluşturabilir.

#### Alarm Oluşturma
Bir alarm oluşturmak için "Etiket/Kanal Düzenleyici Paneli"ni açın. Alarmlar bölmesi ekranın sol alt kısmındadır. Alarm bölmesine sağ tıklayın. Bağlam menüsünde "Yeni Alarm" eylemini seçin.

<center>

![project-view-07](/img/project-view-07.png)

</center>

"Yeni Alarm" iletişim kutusunda, alarm için bir ad ve açıklama yazın. AlarmClass'a mevcut bir "sınıf adı" yazarsanız, alarm o sınıfa eklenir; yeni bir "sınıf adı" yazarsanız yeni bir AlarmClass oluşturulacak ve alarm o sınıfa eklenecektir.

<center>

![project-view-08](/img/project-view-08.png)

</center>

#### Genel Alarm Parametreleri

<center>

![project-view-9](/img/project-view-09.png)

</center>

##### Alarm Adı
Alarm için görünürde benzersiz bir ad verin

##### Sınıf adı
Alarmın ait olduğu sınıfın adı. Bu, alarmları gruplandırırken kullanışlıdır.

##### Tanım
Alarm hakkında insan tarafından okunabilir bir açıklama yazın

##### Değer Etiketi
Seçilen etiket, alarmın kaynağıdır. Bu etiketin değeri üzerinde durum kontrolü yapılacaktır.

#### Koşul
Koşullar, koşullar bölmesinin sağ tarafında bulunan LIMIT ve RANGE değerlerine göre değerlendirilir.

##### VALUE, LIMIT'e eşittir
Etiketin değeri "LIMIT" değerine eşitse alarm devreye girer.
##### VALUE, LIMIT değerinden küçük
Etiketin değeri "LIMIT" değerinden küçükse alarm devreye girer.
##### VALUE, LIMIT değerinden büyük
Etiketin değeri "LIMIT" değerinden büyükse alarm devreye girer.
##### DEĞER "ARALIK" içinde
Etiketin değeri "RANGE" içindeyse alarm etkinleştirilir.
##### VALUE, "RANGE" dışında
Etiketin değeri "RANGE" dışındaysa alarm etkinleştirilir.

#### Abonelikler

Alarmlar kullanıcılara atanmalıdır. Bir kullanıcı, yalnızca kullanıcı o alarma aboneyse bir alarmı izleyebilir.

Alarma bir kullanıcı aboneliği eklemek için Abone Olunan Kullanıcı Seçimi düğmesine tıklayın.

<center>

![project-view-10](/img/project-view-10.png)

</center>

On the opened dialog, select the users which you want to be subscribed on the alarm.

#### Diğer
##### Onay Gerektir
Bu seçenek işaretlendiğinde, kullanıcı alarmı onaylamazsa, alarm durumu da ortadan kalkmışsa alarmlar listesinden kaybolmaz.
##### Veritabanına Giriş Yapın
Bu seçenek işaretlendiğinde alarm durumları veritabanına kaydedilir.
##### Etkinleştirilmiş
Bu seçenek alarmı etkinleştirir/devre dışı bırakır

Detaylı bilgi için: [Alarm Identification and E-mail Sending](https://www.youtube.com/watch?v=hVc3wrQba3o&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=13).

### PLC ve SCADA Projelerini İlişkilendirme

Projenizi geliştirirken SCADA'daki kanalları PLC projeleri ile ilişkilendirmek kafa karışıklığını önlemek için daha önemli hale geliyor. Bunun için kanal menüsünün sağ üst köşesinden PLC proje yolunu belirtebilirsiniz.

<center>

![project-view-11](/img/project-view-11.png)

</center>

## İçe/Dışa Aktarma İşlemleri

Projeden/projeye veri almak/vermek için farklı seçenekler vardır.

### Projeleri İçe/Dışa Aktarma

Bu sihirbaz, kullanıcının özel bir dosya formatı (.scaexp) kullanarak etiketleri, kanalları, alarmları, kullanıcıları ve sayfaları içe/dışa aktarmasına olanak tanır.

#### Projeyi Dışa Aktarma
Projeyi ViewPLUS üzerinde açtıktan sonra Dosya menüsünden "Projeyi Dışa Aktar" seçeneğini seçin:

<center>

![import-export-01](/img/import-export-01.png)

</center>

Sihirbaz penceresinde, oluşturulacak ".scaexp" dosyası için bir çıktı klasörü yolu seçin. Bundan sonra, "Dışa Aktarmayı Başlat" düğmesine bastığınızda, sihirbaz ".scaexp" dosyasını oluşturacaktır.

<center>

![import-export-02](/img/import-export-02.png)

</center>

#### Projeyi İçe Aktarma
Dosya menüsünde "Projeyi İçe Aktar" seçeneğini seçin:

<center>

![import-export-03](/img/import-export-03.png)

</center>

Sihirbaz penceresinde, dışa aktarılan ".scaexp" dosyasını ve ayıklanacak proje dosyaları için bir hedef klasör seçin:

<center>

![import-export-04](/img/import-export-04.png)

</center>

Bundan sonra, "Projeyi İçe Aktar" seçeneğine bastığınızda, sihirbaz veritabanı bağlantı ayarlarını isteyecektir. Proje veritabanı, yapılandırılmış veritabanına çıkarılacaktır.

<center>

![import-export-05](/img/import-export-05.png)

</center>

Operasyon başarıyla tamamlandığında proje kullanıma hazırdır.

### Etiketleri/Kanalları/Alarmları İçe/Dışa Aktarma

Kullanıcılar, etiket/kanal/alarm tanımlarını diğer projelere/projelerden içe/dışa aktarabilir.

#### Etiketleri/Kanalları/Alarmları Dışa Aktarma
Projeyi ViewPLUS üzerinde açtıktan sonra Araçlar menüsünden "Etiket/Kanal Tanımlarını Dışa Aktar" seçeneğini seçin:

<center>

![exporttag](/img/exporttag.png)

</center>

Dosya yolu seçimi iletişim kutusunu onayladığınızda, ".tcf" uzantılı bir dosya oluşturulacaktır. Bu dosyayı diğer projelere aktarmak için kullanabilirsiniz.

#### Etiketleri/Kanalları/Alarmları İçe Aktarma
ViewPLUS üzerinde bir proje açtıktan sonra Araçlar menüsünden "Etiket/Kanal Tanımlarını İçe Aktar" seçeneğini seçin:

<center>

![import-tag](/img/import-tag.png)

</center>

Önemli Not: Bu işlem mevcut etiketlerin üzerine yazacaktır. Dolayısıyla bu işlem projenize zarar verebilir. Dışa aktarılan etiket kimliği aralığı ile yerel projenin etiket kimliği aralığının kesişmediğinden emin olun!

### Kullanıcıları İçe/Dışa Aktarma

Bir proje için oluşturulan kullanıcılar başka bir projeye aktarılabilir. Kullanıcıları Dışa Aktar/İçe Aktar menüsü bunun için kullanılabilir

#### Kullanıcıları Dışa Aktarma
Projeyi ViewPLUS üzerinde açtıktan sonra Araçlar menüsünde "Kullanıcıları Dışa Aktar" seçeneğini seçin:

<center>

![export-users](/img/export-users.png)

</center>

Dosya yolu seçimi iletişim kutusunu onayladığınızda, ".usr" uzantılı bir dosya oluşturulacaktır. Kullanıcıları başka projelere aktarmak için bu dosyayı kullanabilirsiniz.

#### Kullanıcıları İçe Aktarma
ViewPLUS üzerinde bir proje açtıktan sonra Araçlar menüsünde "Kullanıcıları İçe Aktar" seçeneğini seçin:

<center>

![import-users](/img/import-users.png)

</center>

Önemli Not: Bu işlem mevcut kullanıcıların üzerine yazacaktır. Dolayısıyla bu işlem projenize zarar verebilir. Dışa aktarılan kullanıcı kimliği aralığı ile yerel projenin kullanıcı kimliği aralığının kesişmediğinden emin olun!

-Detaylı bilgi için:[Channel and User Definitions](https://www.youtube.com/watch?v=cpywPnxuD00&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=22).

## Makro Kılavuzu

ViewPLUS, farklı türlerdeki makroları destekler. Bu makrolardan bazıları sunucu tarafında, bazıları ise istemci tarafında çalışır.

Etiket/Kanal Düzenleyicide tanımladığımız "makro etiketler" sunucu tarafında çalışır. Ve sanal bir etiket görevi görür. Bu makrolar belirtilen süre boyunca sunucu üzerinde sürekli çalışır.

Editör üzerinde her nesne için ayrı makrolar yazmak mümkündür. Bu makrolar, o nesnenin görüntülenmesini ve davranışını etkiler ve yalnızca kullanıcı nesneyi izlerken yürütülür.

### Sunucu Tarafı Makro Etiketleri

Makrolar aynı anda iki işlem öğesi alabilir ve satır satır yazılır.

Örnek olarak:

[ v0 = $1234 * 2]

Makroya eklenebilecek işlenenler şunlardır:

200 ayrı değişken eklenebilir(vo, v1, …., v199)

Etiket değerleri ("1234$" biçiminde)

Sabit değerler ("234,12" gibi sabit ondalık değerler eklenebilir)

[ v0 = $1234 * 2]

v0 : “ = ” öğesinin solundaki eleman işlemin nihai sonucudur.

* : “+ , - , * , / , % , & , |, ^ , > , < , e ,b , k , n , ?“ gibi operatörler kullanılabilir. Burada:

e: Eşitlik kontrolü. Sonuç, işlenenler birbirine eşitse "1", değilse "0" olur.

n: Eşit değil kontrolü. İşlenenler birbirine eşit değilse sonuç "1", değilse "0" döndürür.

b: Kontrolden büyük. İlk işlenen ikinciden büyükse sonuç "1", değilse "0" döndürür.

k: kontrolden daha az. Sonuç, ilk işlenen daha küçükse "1", değilse "0" olur.

?: Bu özel bir işlenendir.

[ v0 = 1234 ? 0] : 1234 kimliğine sahip etiketin "RX Sayısı" değerini döndürür (Sayaç değerini oku)

[ v0 = 1234 ? 1] : 1234 kimliğine sahip etiketin "Okuma Süresi" değerini döndürür (alandan en son verilerin okunduğu saat)

[ v0 = 1234 ? 2] : 1234 kimlikli etiketin bulunduğu cihaz ile iletişim olup olmadığını kontrol eder.

[ v0 = 1234 ? 3] : 1234 kimlikli etikette geçerli bir değer olup olmadığını kontrol eder.(Genel olarak, bir SCADA sunucusu ilk kez başlatıldığında, etikete geçerli bir değer veya geçerli bir değer yazmak için geç olabilir. etiket asla yazılmayabilir)

[ v0 = v0? 20] : Sunucu tarih saatini "v0" değişkenine 1970-01-01T00:00:00'dan bu yana geçen saniye sayısı olarak yazar

[ v1 = v0? 21] : Sunucu yılını "v1"e yazar, çünkü "v0" 1970-01-01T00:00:00'dan bu yana geçen saniye sayısıdır

[ v2 = v0? 22] : Sunucu ayını "v2"ye yazar, çünkü "v0" 1970-01-01T00:00:00'dan bu yana geçen saniye sayısıdır

[ v3 = v0? 23] : Sunucu gününü "v3"e yazar, çünkü "v0" 1970-01-01T00:00:00'dan beri geçen saniye sayısıdır

[ v4 = v0? 24] : Sunucu saatini "v4"e yazar, çünkü "v0" 1970-01-01T00:00:00'dan bu yana geçen saniye sayısıdır

[ v5 = v0? 25] : Sunucu dakikasını "v5"e yazar, çünkü "v0" 1970-01-01T00:00:00'dan bu yana geçen saniye sayısıdır

[ v6 = v0? 26] : Sunucu saniyelerini "v6"ya yazar, çünkü "v0" 1970-01-01T00:00:00'dan bu yana geçen saniye sayısıdır


Dikkat: Burada etiket kimliği (örnekte 1234), başında "$" olmadan makroya sabit bir değer olarak girilmelidir.

Durum kontrolü:

Aşağıdaki örnekte, "v0" değişkeninin 1'e eşit olup olmadığı kontrol edilir. "v0" 1'e eşitse, makro en alt satırdaki komutu yürütür (v1 değerini 555 yapar). 1'e eşit değilse, satır "IF" satırının ikinci parametresi ("2") kadar aşağı kaydırılır. Bu örnekte "v0" 1'e eşit değilse, makro 2 satır aşağı inecek yani dönüş değeri ([E]) satırına gidecek ve bitecektir.

[ IF , v0 , 2]

[ v1 = 555]

[ E ]

Başka bir koşul kontrol işleneni “NI” (NOT IF) 'dir. Bu, "IF" nin tersi olarak eşitliği 0'a kontrol eder.

Aşağıdaki örnekte "v0" değişkeninin 0'a eşit olup olmadığı kontrol edilir. "v0" 0'a eşitse makro en alt satırdaki komutu yürütür (v1 değerini 555 yapar). 0'a eşit değilse, satır "NI" satırındaki ikinci parametre ("2") kadar aşağıdadır. Bu örnekte, "v0" 0'a eşit değilse, makro 2 satır aşağı inecek, yani dönüş değeri ([E]) satırına gidecek ve bitecek.

[ NI , v0 , 2]

[ v1 = 555]

[ E ]

Makroların düzgün çalışabilmesi için bir dönüş ([E] </ nowiki> dönüş) eklenmelidir.

### Client  Makroları

Client  Makroları: Bu makro, "sunucu makroları" ile aynı formatta yazılır. Ancak bu makrolar içerisinde sadece o nesne üzerinde tanımlanan etiketler kullanılabilir. Nesnelerin etiket sekmesinde tanımlanan etiketler şu şekilde kullanılır:

Her etiket için "i, o, s, w" değerleri mevcuttur.

```
i (in) : Alandan okunan etiketin ham değeri
o (out): Etiket makro işlemlerinden geçirildikten sonra ekranda görüntülenecek değer
s (set): Kullanıcı tarafından etiket için ayarlanan değer
w(yaz): Kullanıcının ayarlamak istediği değer makro işlemlerden geçtikten sonra saha cihazına yazılacak değer
```

```
i ---Makro---->o , s----Makro---->w
Makro işlemi yoksa, 'i', 'o'ya eşittir, 's', 'w'ye eşittir.
```

Makrolar aynı anda iki işlem öğesi alabilir ve satır satır yazılır.

Örnek olarak:

Aşağıdaki örnekte, "v0" değişkenini 123 etiketinin değerini alır ve daha sonra değeri kontrol edilir. "v0" 1'e eşitse, makro en alt satırdaki komutu yürütür (o1 değerini 1 yapar). 1'e eşit değilse, satır "IF" satırının ikinci parametresi ("2") kadar aşağı kaydırılır. Bu örnekte "v0" 1'e eşit değilse, makro 2 satır aşağı inecek yani dönüş değeri ([E]) satırına gidecek ve bitecektir.


[ v0=$123 ]

[ IF,v0,2 ]

[ o1=0+1 ]

[ E ]


"o1" değişkeninin değeri kontrol edilir. "o1" 1'e eşitse, makro en alt satırdaki komutu yürütür (o1 değerini 1 yazar). 1'e eşit değilse, satır "IF" satırının ikinci parametresi ("2") kadar aşağı kaydırılır. Bu örnekte "v0" 1'e eşit değilse, makro 2 satır aşağı inecek yani dönüş değeri ([E]) satırına gidecek ve bitecektir.


[ IF,o1,2 ]

[ w1=0+1 ]

[ E ]


Etiketlerin o,i,s,w için sıra numaralarını öğrenmek için üzerine işaretçiyi getirmeniz yeterlidir.

<center>

![macro-001](/img/macro-001.png)


</center>


## Lisans Dosyasını Yükleme

Geçerli bir lisans almak için lütfen "donanım kimliğinizi" sales@mikrodev.com adresine gönderin. Donanım kimliğinizi öğrenmek için; uygulama menüsünden Help > User License Generator'ı seçin.

<center>

![license-file-01](/img/license-file-01.png)


</center>

Geçerli bir "license.dat" dosyası aldıktan sonra bu dosyayı ViewPLUS uygulamasının bin klasörüne kopyalayın.

<center>

![license-file-02](/img/license-file-02.png)


</center>

Düzenleyiciyi yeniden başlattığınızda lisans otomatik olarak yüklenecektir.

## Proje Dosyası Şifreleme

Parola, projeyi daha güvenilir hale getirmek için kullanılabilir. Projeye şifre koymak için projelerden proje konfigürasyonu girilerek proje korumayı aktif hale getir işaretlenir.
sekme. Şifre büyük, küçük harf, rakam ve sembol içermelidir. Şifre 8 karakterden fazla olmalıdır.

<center>

![password-01](/img/password-01.png)


</center>

Proje dosyası parolasını kaldırmak için projeyi etkinleştirme koruması kaldırılır ve mevcut
şifre girilir.

<center>

![password-02](/img/password-02.png)
***<center>Şekil 2: Delete Password</center>***

</center>

## ArcGIS Haritası

ArcGIS teknolojisi, ESRI tarafından geliştirilmiş, ölçeklenebilir bir entegre Coğrafi Bilgi Sistemi yazılımıdır.
Yazılım bileşenleri, ArcObjects'in ortak kitaplığı üzerine kuruludur. Bu bir sistem sağlar.
ArcGIS haritasını kullanmak için CBS ayarları altında bulunan Projeler menüsünden ArcGIS seçilmelidir.

<center>

![arcgis-map-01](/img/arcgis-map-01.png)
***<center>Şekil 1: ArcGIS Configuration</center>***

</center>

ArcGIS haritası, sayfanın sağ tarafında bulunan Sayfa Özellikleri menüsünden "GeoView" parametresi seçildiğinde aktif hale gelir.
"GeoCenter" parametresi, işaretçinin haritadaki yerini gösterir. Enlem ve boylam şeklinde olmalıdır.
"GIS Objects" menüsü altındaki işaretçi ikonu kullanılarak harita üzerine işaretler eklenebilir veya haritaya eklenen işaretler, işaret sil ikonu kullanılarak silinebilir.

![arcgis-map-02](/img/arcgis-map-02.png)
***<center>Şekil 2: ArcGIS MAP Visibility Configuration</center>***

İşaretçi simgeleri yeni kategoriler oluşturularak değiştirilebilir ve işaretçiler bir kategori altında gruplandırılabilir.

Yeni bir kategori oluşturmak için CBS Nesnesi menüsünden Kategori satırında Düzenle düğmesine tıklayın. Açılan pencerede "Yeni Kategori Ekle"ye tıklayın ve "Kategori Adı" ve "Kategori Resmi" tanımlayın.

<center>

![arcgis-map-03](/img/arcgis-map-03.png)
***<center>Şekil 3: Adding New GIS Object Category</center>***

</center>

CBS Object'in Kategori kısmında Marker seçilip yeni kategori olarak noktayı seçiyoruz. Böylece ikon ve kategori seçimi tamamlanmış olur.

![arcgis-map-04](/img/arcgis-map-04.png)
***<center>Şekil 4: Demonstration of New Category Point That is Created as GIS Object.</center>***

## ViewPLUS SCADA Kanalları

### Kanal: Modbus TCP

ModBus protokolünü kullanarak TCP üzerinden saha cihazlarıyla iletişim kurmak için yeni bir Modbus Kanalı oluşturmalısınız.

Yeni bir kanal oluşturmak için iletişim kutusunda "Protokol Tipi" olarak "Modbus TCP"yi seçin.

Detaylı bilgi için:[Modbus TCP Definitions](https://www.youtube.com/watch?v=9CHtYTDdAIc&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=7).

#### Max. Read Size

<center>

![max.read-size](/img/max.read-size.png)

</center>


ViewPLUS'ta Etiket Kanalı Düzenleyicisi sekmesinin Kanal bölümünde "Maksimum Okuma Boyutu" alanı vardır.

<center>

![modbus-read-address](/img/modbus-read-address.png)

</center>

Modbus Protokolü, modbus adresi için 125 yazmaca kadar okuma/yazmayı destekler.


#### Kanal Parametreleri

<center>

![modbuskanal](/img/modbuskanal.png)
***<center>Şekil 1: Modbus Channel Screen</center>***

</center>


#### Sunucu Adresi
Bağlanmak istediğiniz cihazın IP adresi
#### Sunucu Portu  
Cihazın modbus bağlantı port bilgisi
#### Yanıt Zaman Aşımı  
Herbir modbus sorgusundan sonra Modbus Slave cihazın yanıt vermesi için 
beklenecek milisaniye cinsinden süredir. Bu süre içerisinde slave cihazdan yanıt gelmezse yeni 
bir sorgu gönderilir.
#### Bağlantı Zaman Aşımı  
Cihaza bağlanma talebi gönderildikten sonra yeni bir bağlantı denemesi 
yapılacağı ana kadar beklenecek olan milisaniye cinsinden süredir. Tipik olarak GPRS veya 3G 
şebekelerinde bu süre TCP ye göre biraz daha uzun olabilir.
#### Çerçeve Zaman Aşımı  
Modbus sorgusuna yanıt geldikten sonra bir sonraki sorgunun yapılması 
için beklenecek milisaniye cinsinden süredir


#### Etiket Parametreleri

<center>

![modbustag](/img/modbustag.png)
***<center>Şekil 2: Modbus Tag Screen</center>***

</center>

#### Fonksiyon Kodu
Bağlanmak istediğiniz cihazın IP adresi
#### Cihaz Adresi
Modbus protokolü cihaz adresi
#### Değişken Adresi
Modbus değişken adresi
#### Değişken Boyutu
Tanımlanan adresteki değişkenin boyutu
#### Değişken Tipi
Tanımlanan adresteki değişkenin tipi


### Kanal: IEC 104 

Sahadaki cihazlarla TCP üzerinden IEC 104 protokolü kullanarak haberleşmek için yeni bir IEC 104 Kanalı 
oluşturmalısınız.

#### Kanal Parametreleri

<center>

![kanal-104](/img/kanal-104.png)
***<center>Şekil 1: IEC 104 Channel Screen</center>***

</center>

#### Sunucu Adresi
Bağlanmak istediğiniz cihazın IP adresi
#### Sunucu Portu  
Cihazın IEC 104 port bağlantı bilgisi
#### W : 
ACK(onay mesajı) gönderme sıklığı(W adet paketten sonra ACK gönderilir)
#### K : 
Maksimum izin verilen ACK alınmamış paket sayısı
#### T1 : 
ASDU paketi için ACK zamanaşımı süresi
#### T2 : 
Bu süre sonunda hala yeni data gönderilmeyecekse ACK gönderilir
#### T3 : 
Test frame için zamanaşımı süresi
#### General Interrogation : 
GI mesajı gönderme sıklığı
#### Clock Synchronisation : 
CS mesajı gönderme sıklığı
#### Timezone GMT : 
Sunucu bilgisayarın timezone bildgisi


#### Etiket Parametreleri

<center>

![tag-104](/img/tag-104.png)
***<center>Şekil 2: IEC 104 Tag Screen</center>***

</center>

#### ASDU Adresi
RTU, cihazın IEC 104 üzerinden haberleşeceği adresi belirtir.

#### Nesne türü

IEC 104 Adres Listesi:

- Tek nokta bilgisi (Tip=1)
- Çift nokta bilgisi (Tip=3)
- Kademe konum bilgisi (Tip=5)
- 32 bitlik bit dizisi (Tür=7)
- Ölçülen değer, normalleştirilmiş değer (Tip=9)
- Ölçülen değer, ölçeklenen değer (Tip=11)
- Ölçülen değer, kısa kayan noktalı sayı (Tip=13)
- Entegre toplamlar (Tür=15)
- Durum değişikliği algılamalı paketlenmiş tek nokta bilgisi (Tip=20)
- Ölçülen değer, kalite tanımlayıcısı olmayan normalleştirilmiş değer (Tip=21)
- CP56Time2a zaman etiketli tek nokta bilgisi (Tip=30)
- CP56Time2a zaman etiketli çift nokta bilgisi (Tip=31)
- CP56Time2a zaman etiketli adım konum bilgisi (Tip=32)
- CP56Time2a zaman etiketli 32 bit bit dizisi (Tür=33)
- Ölçülen değer, zaman etiketi CP56Time2a (Tip=34) ile normalleştirilmiş değer
- Ölçülen değer, CP56Time2a zaman etiketli ölçeklenmiş değer (Tip=35)
- Ölçülen değer, CP56Time2a zaman etiketli kısa kayan noktalı sayı (Tip=36)
- CP56Time2a zaman etiketi ile entegre toplamlar (Tür=37)
- CP56Time2a zaman etiketli koruma ekipmanı olayı (Tip=38)
- CP56Time2a (Tip=39) zaman etiketli koruma ekipmanının paketlenmiş başlatma olayları
- CP56Time2a zaman etiketli koruma ekipmanının paket çıkış devresi bilgisi (Tip=40)
- Tek komut (Tip=45)
- Çift komut (Tip=46)
- Kademe düzenleme komutu (Tip=47)
- Ayar noktası Komutu, normalleştirilmiş değer (Tip=48)
- Ayar noktası Komutu, ölçeklenmiş değer (Tip=49)
- Ayar noktası Komutu, kısa kayan nokta sayısı (Tip=50)
- Bitstring 32 bit komutu (Tip=51)
- CP56Time2a zaman etiketli tek komut (Tip=58)
- CP56Time2a zaman etiketli çift komut (Tip=59)
- CP56Time2a zaman etiketi ile adım komutunun düzenlenmesi (Tip=60)
- Ölçülen değer, zaman etiketi CP56Time2a ile normalleştirilmiş değer komutu (Tip=61)
- Ölçülen değer, zaman etiketi CP56Time2a ile ölçeklenmiş değer komutu (Tip=62)
- Ölçülen değer, CP56Time2a zaman etiketli kısa kayan noktalı sayı komutu (Tip=63)
- CP56Time2a zaman etiketli 32 bit komutun bit dizisi (Tür=64)
- Sorgulama komutu (Tip=100)
- Sayaç sorgulama komutu (Tip=101)
- Okuma komutu (Tip=102)
- Saat senkronizasyon komutu (Tip=103)
- İşlemi sıfırla komutu (Tip=105)

#### BilgiNesnesiAdresi

Okunacak RTU cihazından etiketin adres bilgisi girilir.

<center>

![variable-iec](/img/variable-iec.png)
***<center>Şekil 3: Telediagram Variable Addresses Field</center>***

</center>



### Kanal: DNP3

DNP3 protokolünü kullanarak TCP üzerinden saha cihazlarıyla iletişim kurmak için yeni bir DNP3 Kanalı oluşturmalısınız.

#### Kanal Parametreleri

<center>

![dnp3-ch](/img/dnp3-ch.png)
***<center>Şekil 1: DNP3 Channel Screen</center>***
</center>


#### Sunucu portu
DNP3 Sunucu Bağlantı Noktası varsayılanı 20000.
#### Saat Senkronizasyonu
Saat Senkronizasyon mesajı gönderme frekansı.
#### Saat Dilimi GMT
Sunucu bilgisayarın saat dilimi bilgisi.
#### İstek zaman aşımına uğradı
Sunucunun bir istek mesajı alma sıklığını belirtir.
#### Sınıf 1,2,3 Anket Aralığı(sn)
Belirli zaman aralıklarında sınıflara ayrı sorgular gönderir.
#### Bütünlük Anket Aralığı(sn)
Belirtilen zaman aralıklarında sorguyu bir bütün olarak gerçekleştirir.

#### Etiket Parametreleri

<center>

![dnp3-tag](/img/dnp3-tag.png)
***<center>Şekil 2: DNP3 Tag Screen</center>***
</center>


### Kanal: SNMP
Bu kanal SNMP cihazlarına bağlanmak için kullanılır. Bu kanal türünün çalışabilmesi için sisteminizde NetSnmp kitaplığının kurulu olması gerekir. NetSnmp kitaplığını buradan indirebilirsiniz: [Buradan](http://www.net-snmp.org/download.html).

#### Kanal Parametreleri

<center>

![snmp-ch](/img/snmp-ch.png)
***<center>Şekil 1: SNMP Channel Screen</center>***
</center>

#### Sunucu IP'si
Bağlanmak istediğiniz cihazın IP adresi.
#### Sunucu portu
SNMP Sunucu Bağlantı Noktası varsayılanı 161.
#### Etiket Parametreleri

<center>

![snmp-tag](/img/snmp-tag.png)
***<center>Şekil 2: SNMP Tag Screen</center>***
</center>



### Kanal: Makro 
Bu kanal, sanal etiketler oluşturmak ve bunları komut dosyalarıyla değiştirmek için kullanılır.

Ayrıntılı bilgi için: [Makro Kanal Tanımları](https://www.youtube.com/watch?v=oA8lWr3p_wc&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=25).

#### Kanal Parametreleri



#### Kare Zaman Aşımı
Makronun çalışma sıklığını ifade eden milisaniye cinsinden süre.
#### Etiket Parametreleri

<center>

![macrokanalı](/img/macrokanalı.png)
***<center>Şekil 2: Macro Programming Screen</center>***

</center>


<center>

![macro-komut](/img/macro-komut.png)
***<center>Şekil 3: Macro Commands</center>***

</center>

- "+" : Ekle
- "-" : Çıkar
- "*"  : Çarpmak
- "/"  : Bölmek
- "%" : Modlama
- "&" : Mantıksal ve işlem
- "|" : Mantıksal veya işlem
- "?" : Özel işlenen
- "^" : Mantıksal özel veya işlem
- ">" : şundan büyüktür
- "<" : daha küçüktür
- "e" : Eşittir
- "b" : Daha büyük veya eşittir
- "k" : Küçük veya eşit
- "n" : Eşit değil


### Kanal: Veritabanı
SCADA'nın kendi veri tabanından sorgulama yapmak için kullanılan kanal türüdür. ViewPLUS SCADA'da bir veritabanı kanalı oluşturularak, sunucunun çalıştığı veritabanı üzerinde işlemler gerçekleştirilir.
Bu, kanalın altında oluşturulan etiketlere bir sorgu yazılarak yapılır.
Sorgu penceresine sorgular girilir. Sorguya verilen yanıtlar yine aynı etikette görüntülenir.


#### Kanal Parametreleri

<center>

![database-channel](/img/database-channel.png)
***<center>Şekil 1: Database Channel Screen</center>***

</center>

#### Yanıt Zaman Aşımı
Veritabanı sorgusunun yürütülme sıklığını temsil eden milisaniye sayısı.

<center>

![database-tag](/img/database-tag.png)
***<center>Şekil 2: Database Tag Screen</center>***

</center>

<center>

![database-query](/img/database-query.png)
***<center>Şekil 3: Database Query Screen</center>***

</center>


```

Select data_value from logs.tag_log where tag_id=1 order by logtime  desc limit 1  \\  Indicates the last value for tag_id=1.
Select data_value from logs.tag_log where tag_id=1 order by logtime  limit 1 \\  Indicates the first value for tag_id=1.
Select*from logs.tag_log \\ Shows all values.


```


Detaylı bilgi için: [Database Channel Definitions](https://www.youtube.com/watch?v=73F15MW64eo&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=23).

### Kanal: Küresel Veritabanı
Farklı veritabanlarına bağlanarak özel sorgular oluşturmak ve bu sorgu sonuçlarını proje etiketlerine geçirmek için kullanılan kanal türüdür.

#### Kanal Parametreleri

<center>

![global-channel](/img/global-channel.png)
***<center>Şekil 1: GlobalDatabase Channel Screen</center>***

</center>

<center>

![db-user](/img/db-user.png)
***<center>Şekil 2: Database Name</center>***

</center>

#### Yanıt Zaman Aşımı
Veritabanı sorgusunun yürütülme sıklığını temsil eden milisaniye sayısı.
#### Etiket Parametreleri

<center>

![globaldatabase-tag](/img/globaldatabase-tag.png)
***<center>Şekil 3: GlobalDatabase Tag Screen</center>***

</center>

#### Sorgu

<center>

![database-query](/img/database-query.png)
***<center>Şekil 4: GlobalDatabase Query Screen</center>***

</center>

Veritabanında yürütülecek sorgu ifadesi. Bu etiket, sorgudan döndürülen ilk satırın alınmasına izin verir. Bu ilk satır için ??dönüş değerleri etiketlere sırasıyla :{${32}, ${33} , ${34}, ${35},....} biçiminde tanımlanan etiketlere yazılır:
Örnek bir "Sorgu" ifadesi:

```
 WITH
 t1 AS (
  SELECT  data_value from logs.tag_log where tag_id=19 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1 ),
 t2 AS (
  SELECT  data_value from logs.tag_log where tag_id=20 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1),
 t3 AS (
  SELECT  data_value from logs.tag_log where tag_id=29 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1),
 t4 AS (
  SELECT  data_value from logs.tag_log where tag_id=26 AND data_value IS NOT NULL ORDER BY logtime DESC limit 1)
 
 SELECT t1.data_value data1, t2.data_value  data2, t3.data_value  data3, t4.data_value  data4
 FROM t1, t2 ,t3,t4;
 
 :{${32}, ${33} , ${34}, ${35}}:
```
Yukarıdaki PostgreSQL veritabanı sorgusunda 19, 20, 29 ve 26 etiketlerinin en son kaydedilen veritabanı değerleri sırasıyla 32, 33, 34, 35 kimlikli etiketlere yazılır.

### Kanal: JavaScript Kanalı
JavaScript fonksiyonları JavaScript kanalı tanımlanabilir. Komut dosyanızda çeşitli Matematik işlevlerini çağırabilirsiniz. [Referans](https://www.w3schools.com/jsref/jsref_obj_math.asp). Sistem etiketlerinin değerlerini "${123}" biçiminde de kullanabilirsiniz. İşlev sonucunun "JavaScript Etiketi" üzerine yazılması için sayısal bir değer "döndürmeniz" gerekir.

#### Kanal Parametreleri

<center>

![jv-ch](/img/jv-ch.png)
***<center>Şekil 1: JavaScript Channel Screen</center>***

</center>

#### Yanıt Zaman Aşımı
JavaScript işlevinin çağrıldığı frekansı temsil eden milisaniye sayısı.
Etiket Parametreleri
#### Sorgu
Çağrılacak JavaScript ifadesi. :
Örnek bir "JavaScript" ifadesi:

```
var1 = 5 + ${19};   //In the first  line : define a variable "var1" and assign "the value of tag with id 19" plus "5"
 var2 = 3 + ${20};   //In the second line : define a variable "var2" and assign "the value of tag with id 20" plus "3"
 subtotal= (var1 +var2 );      //In the third  line : define a variable "subtotal" and assign "the sum of var1 and var2" to it
 return Math.sqrt(subtotal);   //In the last   line : evaluate the square root of subtotal and return to that value. The return value will also be written as the value of the current  JavaScript Tag.
```

```
IMPORTANT NOTE
You cannot set the values of other system tags in JavaScript tag. You need to use Macros to achieve this. Thus the following script will not work:
${20}= 3 + var1 ;
```

Detaylı bilgi için: [Javascript Channel Definitions](https://www.youtube.com/watch?v=YKGy4F4Z8-I&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=28).

### Kanal: SABUN API Kanalı
Bir SOAP Web Hizmetine bağlanmak ve sorgu sonuçlarını proje etiketlerine iletmek için kullanılan kanal türüdür.

#### Kanal Parametreleri

<center>

![webapi-ch](/img/webapi-ch.png)
***<center>Şekil 1: SOAP API Channel Screen</center>***
</center>

<center>

![webapi-tag](/img/webapi-tag.png)
***<center>Şekil 1: SOAP API Tag Screen</center>***
</center>

#### Yanıt Zaman Aşımı
Sorgunun yürütüldüğü frekansı temsil eden milisaniye sayısı.
Etiket Parametreleri
#### Sorgu
SOAP servisine gönderilecek API ifadesi. Sorgu sonucu ayrıştırılır ve ilgili dönüş değerleri etiketlere yazılır:
Sorgu ifadesi 3 bölümden oluşur. İlk kısım, SOAP sunucusunun WSDL yolunu tanımlar. İkinci kısım, gerçek SABUN sorgu zarfıdır. Ve son kısım, sonuçların doğru etiket değerlerine yazılması için etiket bağlama ifadesidir. Örnek bir "Sorgu" ifadesi:

```
WSDL_PATH = https://minosxcloud.umpi.it/ws/wsminos.php?wsdl; 

<SOAP-ENV:Envelope 
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" 
	xmlns:ns1="http://localhost/" 
	xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
	xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" 
	SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <SOAP-ENV:Body>
    <ns1:getStatus>
      <user xsi:type="xsd:string">ws-istanbul</user>
      <password xsi:type="xsd:string">passwordvalue</password>
      <db_name xsi:type="xsd:string">databasename</db_name>
      <id_andros xsi:type="xsd:string">s345dfsad2345asd45fsdfsgds4542345a</id_andros>
    </ns1:getStatus>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>

:{${32}, <stato><statopl num="1"><fase1 stato>  ; 
  ${33}, <stato><statoingresso num=17 stato> }:
```

Ve sunucudan gelen yanıt aşağıdaki gibidir:

```
<SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
	<SOAP-ENV:Body>
		<ns1:getStatusResponse
			xmlns:ns1="http://localhost/">
			<res xsi:type="xsd:string">
				<armadio identificatore="b3e1f32cb0db36ef0fbfaf047074e4d5">
					<stato>
						<statoingresso num="16" stato="1">ON Input Andros CMS-EXP 1</statoingresso>
						<statoingresso num="17" stato="1">ON Input Andros CMS-EXP 2</statoingresso>
						<statopl num="1">
							<fase1 stato="0">Line 1 Phase 1 OK</fase1>
							<fase2 stato="0">Line 1 Phase 2 OK</fase2>
							<fase3 stato="0">Line 1 Phase 3 OK</fase3>
						</statopl>
					</stato>
				</armadio>
			</res>
		</ns1:getStatusResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

Yanıtın sonucunu etiketlere yazma yöntemi aşağıdaki gibidir:

<center>

![soap-channel-01](/img/soap-channel-01.png)
***<center>Şekil 3: Create Database Channel Screen</center>***

</center>

Ayrıştırıcı şeklinde tanımlanır
```
:{${tag1 ID}, <child1> <child2>; ${tag2 ID} , <child1> <child2> <child3 filterAttribute returnAttribute> }:
```

Sorgunun son 3 satırında ilk parametre hedef etiketidir. İkinci kısım, yanıtın nasıl ayrıştırılacağını tanımlar. Bu bölümün son öğesi, XML belgesi için bir öznitelik filtresi oluşturmak için kullanılabilir. Kalan kısımlar, düğüm hiyerarşi filtresidir.

returnAttribute veya filterAttribute tanımlı değilse, düğümün metin değeri sayıya dönüştürülür ve etikete yazılır.

returnAttribute tanımlanmışsa ancak filterAttribute yoksa; birden çok öğenin ilk öğesi seçilir ve "returnAttribute" özniteliğinin değeri döndürülür.

Hem returnAttribute hem de filterAttribute tanımlanmışsa; birden çok öğe filterAttribute'a göre filtrelenir ve bu düğümün "returnAttribute" değeri döndürülür.


### Kanal: MQTT İstemcisi

Mikrodev Client, yayıncı birimlerinden gelen mesajları alır ve abone olunan birimlere iletir. Mesaj gönderirken, mesajı alacak olan müşteri birimlerini filtrelemek için konuları kullanır.

Mikrodev Client'ın çalışma yapısı aşağıdaki resimde anlatılmaktadır.

![mqtt client](/img/mqtt-client.png)
***<center>Şekil 1: General Structure of Mikrodev Client</center>***

Mikrodev Client aşağıdaki veri türlerini destekler.

| Number | Variable Type |
| ------ | ------ |
| 1 | BOOLEAN |
| 2 | DOUBLE |

#### Abone Biriminin Yapısı

Aboneler Mikrodev Client'a bildirdikleri konulara göre mesaj alan birimlerdir.

<center>

<img src="/img/structure-of-subscriber.png" align="center" width="500" height="500"/>

***<center>Şekil 2: Structure of Subscriber Unit</center>***

</center>

Konu adları bir veya daha fazla kelime ve sayı içerebilir. Örnek topikal isimler aşağıdaki gibi listelenebilir.

| Number | Topical Names |
| ------ | ------ |
| 1 | Temperature |
| 2 | Temperature/Flat1 |
| 3 | Gebze/Flat1/Room1 |
| 4 | 587251468 |
| 5 | 587251468/Temperature |

Yayıncı birimleri tarafından Mikrodev Client'a gönderilen payload yapısı aşağıdaki gibidir.
#### Örnek 1:
```
{ 
	"421453435": {
		"Humidity": {"V": 247, "T": 20201009105447},
        "Pressure": {"V": 88}
	}	
}
```

"421453435" ifadesi, cihazın kimliğini belirtir. ID'deki "Nem" ve "Basınç" ifadeleri etiketleri belirtir. Etiketteki "V" ifadesi, etiketin değerini belirtir. "T" ifadesi, verilerin gönderildiği zaman bilgisini belirtir. Yayıncı bu kez bilgi gönderemez.

#### Yayıncı Biriminin Yapısı

Yayıncılar, mesaj yayınlayan ve yayınlamak istedikleri mesajı güncel bilgilerle birlikte aracı birime ileten birimlerdir. Mikrodev Client, mesajı ilgili konuya üye olan abone birimlerine iletir.

![structure publisher](/img/structure-of-publisher.png)
***<center>Şekil 3: Structure of Mikrodev Client for Publishing Data</center>***

Mikrodev Client tarafından abone birimlerine iletilen payload yapıları aşağıdaki gibidir.
#### Örnek 1:
```
{ 
	"": {
          "LampCommand": {"V": 1}
	}	
}
```
#### Örnek 2:
```
{ 
	"434523": {
                "PanelCommand": {"V": 0}
	}	
}
```

Örnek 1'deki payload yapısında Cihaz Kimliği tanımlanmadığından "0" olarak belirtilmiştir. {"V": 1} payload yapısı olan cihaza "LampCommand": "1" bilgisi gönderilmiştir.

Örnek 2'deki faydalı yük yapısı, cihazın kimlik bilgileri ile birlikte yayınlanmıştır.


## Bileşen Metin İçeriği

Bazı bileşenler ve fonksiyonlar üzerine etiket ve kanal parametre metinleri yazılabilir.
Metin bilgilerinin ekranda görüntülenmesini sağlayan bileşen üzerinde aşağıdaki fonksiyonlar tanımlanmıştır.

``` 
:CHNAME: etiketin bulunduğu kanalın adını gösterir.
:CHDESC: Etiketin bulunduğu kanal üzerinde "Kimlik" bilgisini gösterir.
:CHSTATION: Etiketin bulunduğu kanal üzerindeki “İstasyon” bilgisini gösterir.
:CHSERVERIP: Etiketin bulunduğu kanal üzerindeki “Sunucu IP” bilgisini gösterir.
:TAGNAME: “TagName” bilgilerini gösterir.
:TAGDESC: etiketin “Açıklama” bilgisini gösterir.
:TAGLOCATION: etiketin “Location” bilgisini gösterir.
:TAGDESC işlevi, aşağıdaki yöntemle bileşen üzerinde etiket tanımlama bilgilerinin görüntülenmesini sağlar.
```
Etiketin "Açıklama" parametresine bir metin değeri girilir.


Kısıtlı erişim gerektiren dinamik sayfa için ilgili nesnede "Run Function" parametresi tanımlanır. "data1 = data2" bilgisi, yönlendirilen sayfada data 1 ile başlayan tag isimlerini data2 isimli tag ile değiştirir. Noktalı virgülden sonra kullanılan bilgiler, yönlendirilecek sayfanın erişim numaralarını gösterir.

<center>

![text-component-text-01](/img/text-component-text-01.png)
***<center>Şekil 1: Adding a Description for a Tag</center>***

</center>

Açıklama metnini görüntülemek için, "Nesne Özellikleri" bileşenindeki "Metin İçeriği"ne:TAGDESC işlevi yazılır.

<center>

![text-component-text-02](/img/text-component-text-02.png)
***<center>Şekil 2: Assigning :TAGDESC Function to a Tag</center>***

</center>

Oluşturulan etiket, bileşenin "Etiketler" menüsü altındaki "Etiket Metni" bölümünde tanımlanır.

<center>

![text-component-text-03](/img/text-component-text-03.png)
***<center>Şekil 3: Assigning Label Tag Under Tags Menu of The Component</center>***

</center>

TAGDESC fonksiyonunun tanımlanan işlemlerine göre, bileşen üzerinde etiket verilerinin "Descrip-tion" parametresi görünür.

<center>

![text-component-text-04](/img/text-component-text-04.png)
***<center>Şekil 4: Displaying Tag Description of Component</center>***

</center>

## Dinamik Sayfa

Birden fazla sayfayı aynı formatta hazırlamak yerine referans sayfası oluşturup farklı etiketleri tek sayfada gösterebiliyoruz.

Aşağıdaki resimde iki kanala ayrılmış ve değiştirilecek olan etiketlerin referansları Faz1Voltaj, Faz2Voltaj, Faz3Voltaj olarak listelenebilir.

<center>

![dynamic-pages-01](/img/dynamic-pages-01.png)
***<center>Şekil 1: Defined Tags and Channels</center>***

</center>

Referans etiketleri, referans sayfasındaki bileşenlere atanır.

<center>

![dynamic-pages-02](/img/dynamic-pages-02.png)
***<center>Şekil 2: Assigning The Tags to The Components on The Reference Page</center>***

</center>

“Run Function” parametresinde “RegionA = RegionB” bilgisi, yönlendirilen sayfada “RegionA” ile başlayan tag adlarını “RegionB” ile başlayan tag isimleri ile değiştirir.

![dynamic-pages-03](/img/dynamic-pages-03.png)
***<center>Şekil 3: Run Function Configuration for Desired Components</center>***

A Bölgesi butonuna tıklandığında Bölge isimli açılır sayfa açılır ve bileşenler üzerinde tanımlanan referans etiket bilgileri ekrana gelir.

<center>

![dynamic-pages-04](/img/dynamic-pages-04.png)
***<center>Şekil 4: Displaying The Pop-Up Page That Shows Run Function Configuration for Region A</center>***

</center>

Bölge B butonuna tıklandığında Bölgeler isimli bir açılır sayfa açılır ve "Run Function" parametresinde yazılan referans etiketleri, RegionB ile başlayan etiketlerle değiştirilir.

<center>

![dynamic-pages-05](/img/dynamic-pages-05.png)
***<center>Şekil 5: Displaying The Pop-Up Page That Shows Run Function Configuration for Region B</center>***

</center>

Dinamik sayfadan farklı sayfalara yönlendirme yapılırken dinamik yapının korunabilmesi için referans sayfasından farklı sayfalara yönlendirmede kullanılan bileşenler üzerindeki "Run Function" parametresine "$ {Parent}" fonksiyonu yazılmalıdır.

<center>

![dynamic-pages-06](/img/dynamic-pages-06.png)
***<center>Şekil 6: Configuration for "Run Function" for Dynamic Page Redirection</center>***

</center>

## Navigasyon Paneli

SCADA projesi içerisinde oluşturulan sayfalar, Navigasyon panelinde sayfalar veya klasörler halinde görüntülenebilir.

Kırmızı ile işaretlenmiş alan, Navigasyon panelini gösterir. Panel boyutu, Navigasyon panelinin sağ tarafından büyütülebilir veya küçültülebilir.

<center>

![navigation-panel-01](/img/navigation-panel-01.png)
***<center>Şekil 1: Navigation Panel</center>***

</center>

Navigasyon panelinde işlem yapmak için mouse ile sağ tıklayın ve görüntülenen pencerede yapılacak işlemi seçin.

<center>

![navigation-panel-02](/img/navigation-panel-02.png)
***<center>Şekil 2: Adding Folder in Navigation Panel</center>***

</center>

Navigasyon panelinde klasör oluşturmak için “Klasör Ekle” işaretlenir ve çıkan ekranda klasör adı yazılır.

Oluşturulan klasör üzerinde işlem yapmak için seçilen klasöre sağ tıklayın ve istediğiniz işlemi seçin.

<center>

![navigation-panel-03](/img/navigation-panel-03.png)
***<center>Şekil 3: Adding Page Link Into The Created Folder</center>***

</center>

SCADA sayfalarını klasöre taşımak için klasöre sağ tıklayın ve “Sayfa Bağlantısı Ekle” seçeneğini seçin. Açılan pencerede eklenecek sayfa seçilir.

"Görüntü Metni" parametresi ile sayfanın adı tanımlanabilir ve "Şablon Fonksiyonunu Çalıştır" parametresi ile dinamik yapı kullanılabilir.

![navigation-panel-04](/img/navigation-panel-04.png)
***<center>Şekil 4: Configuration for Page Link</center>***

Şekil 5'te gezinme panelindeki klasöre eklenen "Page1.sca" sayfasını görebilirsiniz.

<center>

![navigation-panel-05](/img/navigation-panel-05.png)
***<center>Şekil 5: Displaying Added Page Link</center>***

</center>

Navigasyon paneli Client ekranındaki pencere sekmesinden açılıp kapatılabilir.

![navigation-panel-06](/img/navigation-panel-06.png)
***<center>Şekil 6: Navigation Panel Display Option on ViewPLUS Client</center>***

## Sunucu Yazılımı

Sunucu yazılımının çalışabilmesi için bir proje ile ilişkilendirilmesi gerekir. Editör menüsünden çalıştırıldığında, o anda açık olan proje sunucu tarafından kullanılır. Sunucuyu editörden bağımsız olarak çalıştırmak için "Editör > Araçlar > Sunucu Dosyaları Oluştur" seçilerek bir klasör belirlenir ve sunucu dosyaları bu klasöre kopyalanır. Sunucuyu başlatmak için "ServerEngine" widget'ı kullanılır. Varsayılan olarak, "ServerEngine" pencere öğesi, kendisiyle aynı klasörde "Proje" adlı bir klasörü arar.

“Proje” klasörü, editör tarafından oluşturulan özel dosyaları içerir. Başlıcaları; “MikrodevScada.ini”, “Project.zip”, “.sca uzantılı proje sayfaları” ve bileşen dosyalarıdır. Sunucu, “MikrodevScada.ini” dosyasında hangi veritabanına bağlanılacağı ve kayıtların nerede tutulacağı gibi bilgileri okur.

SCADA sunucusu ilk kez başlatıldığında, kullanıcıdan veritabanı bağlantı bilgilerini girmesi istenebilir. Sunucu ayrıca aşağıdaki komut satırı parametrelerini kullanarak bir projeyi farklı bir klasörde açabilir.

“ServerEngine –dir “C:\Users\yg\Desktop\server\projectname“ ” 
-dir : Proje klasörü 

<center>

![server1](/img/server1.png)
***<center>Server Main Page</center>***

</center>

Sunucunun ana ekranında genel sistem loglarının izlenebileceği bir konsol bulunur. Bu konsol üzerinde 
sunucu ile ilgili önemli değişimler gösterilir. Daha detaylı sunucu logları ayrı bir dosyada kaydedilir. 
“Başlat” butonuna basıldığında sunucu saha cihazlarıyla bağlantı kurar. Bağlantı kurulduktan sonra 
sunucu istemcilerin bağlanabileceği bir port açar ve gelen bağlantıları bekler. Sunucu sahadan veri
okumaya başladığında, proje ayarlarında belirtildiği şekilde bu verileri veritabanı sunucusuna göndererek 
kaydeder. Etiket izleme ekranında sahadan okunan verilerin anlık değerleri izlenebilir.

<center>

![server2](/img/server2.png)
***<center>Server Tag Monitoring Screen</center>***

</center>


Etiket izleme ekranındaki anlık değerler üzerinde etiketId, etiket adı, kanal adı, cihaz adresi gibi 
parametrelere göre filtreleme yapılabilir. 
“Değer” alanında gösterilen sayısal verinin yanında “dced” şeklinde bir metin 
bulunuyorsa, bu durum cihaz ile SCADA sunucu arasında bir bağlantı problemi 
olduğunu gösterir
Sürücü izleme ekranında çalışan protokol sürücüleriyle ilgili bilgiler verilir. Bu konsoldan cihaz bağlantı 
problemleriyle ilgili bilgiler elde edilebilir. 
Alarm ekranı ise, sistemde oluşmuş olan alarmların geçmişi ve mevcut alarmların gözlemlenebilmesini 
sağlar. 

### Sunucuyu Otomatik Başlatma

#### Windows Platformu

Sunucuyu otomatik başlatmak için şu adımları takip ediniz ("TestProjesi" isimli örnek bir proje icin ):
• ViewPLUS' ün kurulum klasörü içindeki "ServerEngine.exe" programcığı için masaüstüne bir 
kısayol oluşturun.


<center>

![create-shortcut](/img/create-shortcut.png)

</center>

Kısayol Oluşturma
• Oluşturulan kısayola sağ tıklayıp "Özellikler"i seçin.
• "Target" yazan alanı şu şekilde değiştirin (Dosya yolunu kendi sisteminize göre değiştirin):
"C:\Program Files (x86)\ViewPLUS\bin\ServerEngine.exe" -dir "C:\Users\User Name\TestProjesi"-start • Sonra bu kısayolu "C:\Users\User Name  \AppData\Roaming\Microsoft\Windows\Start 
Menu\Programs\Startup" altına kopyalayın. Artık kullanıcı sisteme giriş yapınca sunucu otomatik olarak başlayacaktır.
• OperatorClient kısayolunu da "C:\Users\UserName\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup" altına 
kopyalayarak açılışta otomatik başlaması sağlanabilir.


### Sunucu Runtime Oluşturma

Geliştirilen SCADA projesini farklı bir bilgisayarda ViewPLUS kurmadan da çalıştırabilirsiniz. Bunun için 
"Araçlar" menüsünden "Sunucu Dosyalarını Oluştur" u seçerek, proje ve sunucunun çalışması için gerek 
dosyaları bir klasör içerisinde toplayabilirsiniz. Bu klasörü taşıyarak, projenizi farklı sunucu makineleri 
üzerinde çalıştırmanız mümkündür. 

Detaylı bilgi için: [Autostart The Server](https://www.youtube.com/watch?v=CAR2qN3Xe_k&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=15).

## İstemci Yazılımı

stemci yazılımı; uç kullanıcıların SCADA sunucusuna internet ya da intranet üzerinden bağlanarak, 
hazırlanan projeyi izlemelerini ve kontrol edebilmelerini sağlar. 

<center>

![clienthome](/img/clienthome.png)
***<center>Client Login Screen</center>***

</center>

SCADA sunucuya bağlanabilmek için kullanıcı, şifre, sunucu adresi ve portu bilgilerini istemci yazılımına 
girmeniz gerekir. Yeni bir kullanıcı oluşturmak için "Kullanıcı Yöneticisi" ni kullanmanız gerekir. Bu bilgiler 
doğru bir şekilde girildiğinde sunucu ile istemci yazılımı arasında şifrelenmiş bir bağlantı oluşturulur ve 
sunucudan gönderilen proje giriş ekranı istemcide gösterilir. 
İstemci ekranının sol tarafında yer alan “sayfa seçici” de, editörde “SCADA Sekmesi” olarak tanımlanan 
sayfalar için kısayollar gösterilir. Burada gösterilen kısayolların görünümü ve sırası editör üzerinde 
ayarlanabilir. Bu kısayollar yanında alarm paneli ve web görünüm paneli kısayolları bulunur. 

<center>

![client-screen](/img/client-screen.png)
***<center>Client Screen</center>***

</center>

İstemci üzerinde gösterilen içerik; kullanıcının, sayfaların ve tanımlı etiketlerin erişim yetkilerine bağlı 
olarak değişiklik gösterebilir. Kullanıcının erişim yetkisi olmayan sayfalar “sayfa seçici” de gösterilmez ya 
da bu sayfalara doğru olan bağlantılar çalışmaz. Eğer sayfadaki bir görsel öğe, kullanıcının erişim yetkisi 
olmayan bir etiket içeriyorsa kullanıcının bu öğeyi izlemesi veya kontrolü engellenir. 

## Yeni Kullanıcı Oluşturma

<center>

![new-user-1](/img/new-user-1.png)

</center>

ViewPLUS'ta kullanıcı oluşturmak ve gerekli konfigürasyonları yapmak için Araçlar sekmesi altında Kullanıcı Yöneticisini Başlat seçilir.

<center>

![new-user-2](/img/new-user-2.png)

</center>

Yeni Kullanıcı sekmesine tıklanır ve açılan sayfada parametreler doldurularak yeni bir kullanıcı oluşturulur. Oluşturulan kullanıcı, Kullanıcılar sekmesi altındaki kullanıcı adının altında görüntülenir.

## Kullanıcı Erişim Hakları

Kullanıcı erişim yetkileri, kullanıcıya bağlı olarak değişiklik gösterebilir. Kullanıcının erişim yetkisi olmayan sayfalar “sayfa seçici” de gösterilmez ya da bu sayfalara doğru olan bağlantılar çalışmaz. Eğer sayfadaki bir görsel öğe, kullanıcının erişim yetkisi olmayan bir etiket içeriyorsa kullanıcının bu öğeyi izlemesi veya kontrolü engellenir.

<center>

![new-user-3](/img/new-user-3.png)

</center>

Erişim Hakları;

Okuma: Kullanıcıların etiket değerlerini görebilmeleri için sahip olmaları gereken haklardır. Burada belirlenen haklara sahip olmayan kullanıcılar bu etiket değerini okuyamayacaktır.

Yazma: Etiket değerlerini değiştirmek için kullanıcıların sahip olması gereken haktır. Burada belirlenen haklara sahip olmayan kullanıcılar bu etiket değerini değiştiremezler.


Detaylı bilgi için:[User Definitions and Page Authorizations](https://www.youtube.com/watch?v=x-ySrdmeHJI&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=20).

## Raporlama Yazılımı 

SCADA yazılımının loglamış olduğu trend verilerini görmek ve analiz etmek için Raporlayıcı 'yı 
kullanabilirsiniz. Raporlayıcı üç temel log verisi ile ilgili raporlama yapmanızı sağlar. Bunlar etiket logları, 
alarm logları ve olay loglarıdır. 

### Raporlama Komutu Oluşturma

Oluşturulan filtrelerin raporlayıcı komut satırı üzerinden çağrılarak istenilen formatta rapor çıktısı 
oluşturmak mümkündür. Bunun için raporlama uygulamasına gerekli komutsatırı parametrelerini 
vermek yeterlidir. Bu özellik kullanılarak, Windows işletim sisteminin "Görev Zamanlayıcısı" üzerinden 
belli zaman aralıklarında otomatik raporlar oluşturmak mümkündür.


ScadaReporter.exe -database modpollread -user postgres -password laqhd -server localhost -port 5432 -query twohours -format csv -output "C:\Users\yg\Documents\Reports\Son2saat" 

-database          Proje veritabanının adı(proje ile aynı isimdedir)
-user              Veritabanı kullanıcı adı
-password          Veritabanı kullanıcı şifresi
-server            Veritabanı ip adresi
-port              Veritabanı bağlantı portu
-tnsname           Oracle veritabanları için tns adı
-format            Rapor çıktı Formatı. Olası değerler html,csv,xlsx,xml dir 
-query             Raporlayıcıda kaydedilmiş olan filtrenin adı. Bu parametre 
raporlama komutu için gereklidir. Verilmezse bir rapor üretimez; raporlayıcı 
arayüzü açılır
-output           Çıktının oluşturulacağı doayanın yolu ve adı

Detaylı bilgi için: [Reporter Screen](https://www.youtube.com/watch?v=iLUgWksTYjA&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=19).

## Bileşen Yöneticisi

Yeni görsel bileşenler ve animasyonlar eklemek için "comx" bileşen dosyaları oluşturmanız gerekir. Bunun için "Bileşen Yöneticisi"ni kullanabilirsiniz.

<center>

![component-manager-1](/img/component-manager-1.png)

</center>

Araçlar menüsünden ViewPLUS başlatıldığında ilgili projenin bileşen klasöründeki bileşenler görüntülenir.

<center>

![component-manager-2](/img/component-manager-2.png)

</center>

Yeni Bileşen eklemek için "Yeni Bileşen Ekle" seçeneğini seçerek eklenecek görseli veya görselleri seçin. Resimler (.png,.jpeg,.gif,.svg) formatlarında olabilir.

<center>

![component-manager-3](/img/component-manager-3.png)

</center>


Bileşen Adı = Bileşenin adını girin.

Bileşen Kategorisi = Bileşenin olmasını istediğimiz kategori adı yazılır.
Birden fazla bileşenin aynı kategori altında olması isteniyorsa aynı işlemler tekrarlanır, önemli olan kategori adının aynı olması aksi halde bileşen farklı bir kategoriye eklenir.

İlk görselin boyutunu kullama = Bu komut, eklenen nesneyi orijinal boyutuna ayarlamak için kullanılır. Verilere göre değiştirmek istediğimiz nesneleri eklerken diğerlerini ilk resmin boyutlarına göre yeniden boyutlandırır.

Detaylı bilgi için: [Add New Component](https://www.youtube.com/watch?v=1w3nwg0BCN0&list=PLJRed6B6rTSoT97Y58zzJDD5R9rQOzMak&index=21).

## Gelişmiş Ayarlar

log_server.txt:

Windows sistemlerde şu klasör içinde bulunur:
C:\Users\username\AppData\Roaming\Mikrodev\ScadaServer\proje adı

Sunucuya ait detaylı logların bulunduğu dosyadır 
log_serverstarter.txt : 

Sunucu izleyici yazılımına ait logların bulunduğu dosyadır 
OperatorClient.ini :
ServerEngine.ini:

Windows sistemlerde şu klasör içinde bulunur: 
C:\Users\kullanıcı adı\AppData\Mikrodev\ScadaServer\proje adı 

[Login] ServerAdr: Veritabanı adresi 

[Login] DbName: Veritabanı adı 

[Login] DbUserName: Veritabanı kullanıcı adı 

[Login] DbPassword: Veritabanı şifresi 

[Connection] Port: Varsayılan sunucu portu 560 dır. Farklı bir port bu parametre değiştirilerek seçilebilir. 

[Logging]  IsLogging: Veri loglama aktif/pasif yapılabilir(true/false) 

[Logging]  IsLoggingDısconnections: Bağlantı kopmalarının loglanıp loglanmayacağı seçilebilir 

[REDUNDANCY] ServerMode: Yedekli çalışma modunu belirler. Bu değer PRIMARY ya da BACKUP olabilir. Bu mod backup olarak ayarlandığında,sunucu PRIMARY sunucu ile haberleşerek redundant bir yapı oluştururlar. 

[REDUNDANCY] PrimaryIP: BACKUP moddaki sunucunun bağlanacağı PRIMARY sunucu IP adresi bu alana yazılır. 

[REDUNDANCY] PrimaryPORT: BACKUP moddaki sunucunun bağlanacağı PRIMARY sunucunun port numarası bu alana yazılır. 

[REDUNDANCY] Timeout: PRIMARY sunucunun ne kadar sürelik bir devredışı kalma durumunda BACKUP sunucunun aktif olacağını belirleyen saniye cinsinden değerdir. 

Daha fazla bilgi almak için:

[Mikrodev Website](https://www.mikrodev.com/en/index.php).

[Mikrodev Bilişim Youtube Channel](https://www.youtube.com/channel/UC-67KqN9lzKKQUuZaMt3Zhg/featured).
