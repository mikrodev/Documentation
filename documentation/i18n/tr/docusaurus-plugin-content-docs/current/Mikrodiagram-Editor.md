---
title: "Mikrodiagram Editor"
---

## Tanıtım

### Mikrodiyagram Hakkında

Mikrodiagram, Mikrodev tarafından geliştirilen Mikrodev PLC ailesi cihazların kullanılan programlanması için bir editör yazılımıdır. Mikrodiagram, görsel ve kolay anlaşılır bir arayüz ile çok karmaşık projeleri hızlı bir şekilde gerçekleştirmenizi sağlar.

Mikrodiagram kütüphanesi, “PID, astronomik timer” gibi karmaşık uygulamaları kolaylaştıracak gelişmiş blokların yanı sıra “AND, OR, XOR” gibi temel mantık bloklarını da bulundurur.

Program yükleme ve güncelleme, online izleme ve firmware güncelleme gibi ayarlar cihazlara farklı arayüzler (USB/TCP) üzerinden bağlanarak Mikrodiagram'da sunulmaktadır.

## Kurmak

### Sistem gereksinimleri

Mikrodiagram kurulumu için minimum bilgisayar gereksinimleri:

Operating system: Microsoft Windows XP/Vista/7/8/10/12 (32/64 Bit),  Linux

CPU: 500 Mhz

RAM: 512 MB

Video Card: 128 MB

Disk Area: 200 MB

### Mikrodiyagram Kurulumu

Mikrodiagram yazılımı, güncel Windows sürümleriyle çalışacak şekilde tasarlanmıştır. Kurulum dosyası aşağıdaki internet adresinden ücretsiz olarak indirilebilir:

[Mikrodiagram Setup](https://www.mikrodev.com/downloads/mikrodiagram/MikrodiagramSetupSTM_latest.zip)

Ekrandaki yönergeler takip edilerek Mikrodiagram kurulumu tamamlanır.

### Usb Sürücü Kurulumu

STM İşlemci USB sürücü kurulum dosyası…………………… internet adresinden indirilebilir.

Ekrandaki yönergeler takip edilerek USB sürücü kurulumu tamamlanır.

= Not:= Mikrodiagram Windows 10 veya üzeri işletim sistemine sahip bir bilgisayara kurulduğunda USB sürücüsü kurulmasına gerek yoktur.

## Arayüz

### Menü seçenekleri

Mikrodiagram menü seçeneklerinde "Dosya, Düzenle, Oluştur, Araçlar, Pencere ve Yardım" menüleri mevcuttur.

<center>

![mikrodiagram-editor-01](/img/mikrodiagram-editor-01.png)

</center>

* Dosya menüsü

Mikrodiagram dosya menüsünden temel program dosyalama işlemleri yapılabilmektedir.

<center>

![mikrodiagram-editor-02](/img/mikrodiagram-editor-02.png)

</center>

Dosya menü seçenekleri tabloda açıklanmıştır.

<center>

![mikrodiagram-editor-03](/img/mikrodiagram-editor-03.png)

</center>

* Düzenle Menüsü

<center>

![mikrodiagram-editor-04](/img/mikrodiagram-editor-04.png)

</center>

Düzenleme menüsü, işlemi geri almak, geri alma işlemini geri yüklemek, yeniden adlandırmak, kesmek, kopyalamak, yapıştırmak ve tüm işlemleri seçmek için kullanılır.

* Yapı Menüsü

<center>

![mikrodiagram-editor-05](/img/mikrodiagram-editor-05.png)

</center>

Projeyi derlemek için Build menüsü kullanılır.

* Araçlar Menüsü

<center>

![mikrodiagram-editor-06](/img/mikrodiagram-editor-06.png)

</center>

Araçlar menüsünden Mikrodiagram arayüz konfigürasyon ayarlarına ve USB seri port cihaz ayarlarının yapıldığı "Mikroterminal" programına ulaşabilirsiniz.

* Pencere Menüsü

<center>

![mikrodiagram-editor-07](/img/mikrodiagram-editor-07.png)

</center>

Pencere menüsü, pencere ayarlarını tasarlamak için Mikrodiagram yapmak için kullanılır. Tam ekran, kenar çubuğu gösterimi, mod seçici gösterimi, çeşitli şekillerde ekran bölme gibi özellikler mevcuttur.

* Yardım Menüsü

<center>

![mikrodiagram-editor-08](/img/mikrodiagram-editor-08.png)

</center>

Yardım menüsünden Mikrodiagram "yardım metni" ve "Mikrodiagram hakkında" seçeneklerine ulaşabilirsiniz.

<center>

![mikrodiagram-editor-09](/img/mikrodiagram-editor-09.png)

</center>

Mikrodiagram yazılım sürümü ile ilgili bilgilere "Mikrodiagram Hakkında" sekmesinden ulaşılabilir.

### Durum çubuğu

<center>

![mikrodiagram-editor-10](/img/mikrodiagram-editor-10.png)

</center>

Durum çubuğunda "nesneyi taşı, nesneyi bağla, nesne ekle, metin ekle, satır etiketi ekle, grup blokları, kaydet, farklı kaydet, diyagram ayarları, yakınlaştır, uzaklaştır" modunu seçebilirsiniz.

Kullanılan bellek alanı da bu bölümden görülmektedir.

* Nesne Taşıma Modu

<center>

![mikrodiagram-editor-11](/img/mikrodiagram-editor-11.png)

</center>

Mikrodiagram çalışma alanında nesneleri hareket ettirmek için kullanılan mod seçimidir.

* Nesne Bağlantı Modu

<center>

![mikrodiagram-editor-12](/img/mikrodiagram-editor-12.png)

</center>

Mikrodiagram çalışma alanında nesneleri birbirine bağlamak için kullanılan moddur.

* Nesne Ekleme Modu

<center>

![mikrodiagram-editor-13](/img/mikrodiagram-editor-13.png)

</center>

Mikrodiagram çalışma alanına nesne eklemek için kullanılan moddur. Seçildiğinde Mikrodiyagram çalışma alanında tıklandığında son seçilen kapı tipini ekler.

* Metin Ekleme Modu

<center>

![mikrodiagram-editor-14](/img/mikrodiagram-editor-14.png)

</center>

Mikrodiagram çalışma alanına kelime notu eklemek için kullanılan moddur.

* Satır Etiketi Ekle

<center>

![mikrodiagram-editor-15](/img/mikrodiagram-editor-15.png)

</center>

Mikrodiagram çalışma alanına satır etiketi eklemek için kullanılan moddur. Hat etiketleri, kapı tiplerinde "hat tanımlaması" olan kapıların çıkışını diğer blokların girişlerine bağlamak için uygun bir yol sağlar. Mikrodiagram projelerin okunması ve takibinde kolaylık sağlar.

* Grup Blokları

<center>

![mikrodiagram-editor-16](/img/mikrodiagram-editor-16.png)

</center>

Mikrodiyagram çalışma alanında hazırlanan projeler gruplar halinde kullanılmaktadır. Projeleri okuma ve takip etme kolaylığı sağlar.

* Kaydet- Farklı kaydet

<center>

![mikrodiagram-editor-17](/img/mikrodiagram-editor-17.png)

</center>

Mikrodiagram'da projelerde yapılan değişiklikleri kaydetmek için "Kaydet" ve projeleri farklı bir klasöre kaydetmek için "Farklı Kaydet".

* Diyagram Ayarı

<center>

![mikrodiagram-editor-18](/img/mikrodiagram-editor-18.png)

</center>

Mikrodiagram üzerinde kapı tiplerinin eklenebileceği çalışma alanının ölçülerini ayarlamak için kullanılan mod seçimidir.

* Yakınlaştır-Uzaklaştır-Sıfırla Yakınlaştır

<center>

![mikrodiagram-editor-19](/img/mikrodiagram-editor-19.png)

</center>

Mikrodiagram üzerinde kapı tiplerinin eklenebileceği çalışma alanını yakınlaştırıp uzaklaştırmak ve başlangıç ayarlarına getirmek için kullanılır.

* Bulmak

<center>

![mikrodiagram-editor-20](/img/mikrodiagram-editor-20.png)

</center>

Mikrodiagram üzerinde "blok adı, blok numarası, modbus adresi, hat açıklaması ve hat etiketi" filtreleri ile hazırlanan projelerde kapı tiplerini veya hat etiketlerini daha kolay bulmak için kullanılan arama motorudur.

* Kullanılan Bellek

<center>

![mikrodiagram-editor-21](/img/mikrodiagram-editor-21.png)

</center>

Mikrodiagram üzerinde hazırlanan projeler cihaza yüklendiğinde kullanılacak hafıza alanı gözlemlenir.

### Mod Seçenekleri

<center>

![mikrodiagram-editor-22](/img/mikrodiagram-editor-22.png)

</center>

* Kapı Editörü

<center>

![mikrodiagram-editor-23](/img/mikrodiagram-editor-23.png)

</center>

Mikrodiagram'da proje hazırlama modudur.

* Projeler

<center>

![mikrodiagram-editor-24](/img/mikrodiagram-editor-24.png)

</center>

"Cihaz konfigürasyonu, PLC ve uzantılar, metin tablosu, blok özellikleri tablosu, değişken adres tablosu, ekran seçenekleri ve IEC61850 tablosu" seçenekleri.

* Simülasyon

<center>

![mikrodiagram-editor-25](/img/mikrodiagram-editor-25.png)

</center>

Mikrodiagram üzerinde hazırlanan projeleri cihaza yüklemeden offline modda test etmenizi ve program yanıtlarını incelemenizi sağlar.

* Çevrimiçi Görünüm

<center>

![mikrodiagram-editor-26](/img/mikrodiagram-editor-26.png)

</center>

Cihaza yüklenen Mikrodiagram projesine USB veya TCP bağlantısı ile blok değerlerini takip etmek ve yeni değerleri bloklara yüklemek için kullanılır.

### Yapı Modu Seçenekleri

<center>

![mikrodiagram-editor-27](/img/mikrodiagram-editor-27.png)

</center>

Oluşturma modu seçenekleri "cihazı bağla / bağlantısını kes, projeyi derle, ikili cihaza gönder, projeyi cihaza gönder ve proje seçimi" modlarına değiştirilebilir.

* Cihaz Bağlantısı/ Bağlantısının Kesilmesi

<center>

![mikrodiagram-editor-28](/img/mikrodiagram-editor-28.png)

</center>

Programlanacak cihaz ile bilgisayar arasında bağlantı kurmak için kullanılır. USB veya TCP bağlantı noktası bağlantı seçenekleri mevcuttur.

* Yapı Projesi

<center>

![mikrodiagram-editor-29](/img/mikrodiagram-editor-29.png)

</center>

Mikrodiagram üzerinde hazırlanan projeyi derlemek için kullanılır.

* Cihaza İkili Dosya Gönder

<center>

![mikrodiagram-editor-30](/img/mikrodiagram-editor-30.png)

</center>

Cihaza ikili dosyalar göndermek için kullanılır.

* Cihaza Gönder

<center>

![mikrodiagram-editor-31](/img/mikrodiagram-editor-31.png)

</center>

Hazırlanan projeyi cihaza göndermek için kullanılır.

* Proje Seçimi

<center>

![mikrodiagram-editor-32](/img/mikrodiagram-editor-32.png)

</center>

Mikrodiagram üzerinde birden fazla proje açık ise cihaza gönderilecek projeyi seçmek için kullanılır.

### Kenar Çubuğu Seçenekleri

<center>

![mikrodiagram-editor-33](/img/mikrodiagram-editor-33.png)

</center>

Kenar çubuğu seçeneklerinden "blok türleri, satır etiketleri, blok paketleri, projeler, açık diyagramlar ve dosya sistemi" modlarına geçebilirsiniz.

* Kapı Çeşitleri

<center>

![mikrodiagram-editor-34](/img/mikrodiagram-editor-34.png)

</center>

Mikrodiagram üzerinde FBD programlama için kullanılan blokları seçmek ve blokları programlama çağına taşımak için "Gate Types" seçilmesi gerekmektedir.

* Satır Etiketleri

<center>

![mikrodiagram-editor-35](/img/mikrodiagram-editor-35.png)

</center>

Kenar çubuğunda "çizgi etiketleri" seçili iken Mikrodiagram'da tanımlanan "çizgi tanımları" projede görüntülenebilir ve kullanılabilir.

* Projeler

<center>

![mikrodiagram-editor-36](/img/mikrodiagram-editor-36.png)

</center>

Kenar çubuğunda "satır etiketleri" seçiliyken, açık projeler görüntülenir ve projeler seçilir.

* Bölmek

<center>

![mikrodiagram-editor-37](/img/mikrodiagram-editor-37.png)

</center>

Kenar çubuğunda birden fazla mod seçmek için "böl" seçeneği kullanılarak bölümlere ayrılabilir.

## Mikrodiyagram Yapılandırması

<center>

![mikrodiagram-editor-38](/img/mikrodiagram-editor-38.png)

</center>

Mikrodiagram konfigürasyonuna "Araçlar" menüsünden "Seçenekler" tıklanarak ulaşılabilir. "ortam, metin düzenleyici, diyagram düzenleyici ve sürüm kontrolü" mevcuttur.

### Çevre

<center>

![mikrodiagram-editor-39](/img/mikrodiagram-editor-39.png)

</center>

Ortam sekmesinde "genel, klavye, harici araçlar, MIME türleri ve konumlandırıcı" seçenekleri bulunmaktadır.

* Genel

<center>

![mikrodiagram-editor-40](/img/mikrodiagram-editor-40.png)

</center>

<center>

![mikrodiagram-editor-41](/img/mikrodiagram-editor-41.png)

</center>

Genel sekmesinden Mikrodiagram arayüz rengi değiştirilebilir ve renk ayarları sıfırlanabilir. (Fabrika ayarlarına dönün.)

<center>

![mikrodiagram-editor-42](/img/mikrodiagram-editor-42.png)

</center>

Mikrodiagram Türkçe ve İngilizce dil seçeneklerine sahiptir.

<center>

![mikrodiagram-editor-43](/img/mikrodiagram-editor-43.png)

</center>

Mikrodiagram'da dosyalar dışarıdan değiştirilirse, değişikliklerin uygulama durumu kontrol edilir.

Dil seçenekleri arasında seçim yaparken Mikrodiagram'ın yeniden başlatılması gerekiyor.

<center>

![mikrodiagram-editor-44](/img/mikrodiagram-editor-44.png)

</center>

Projede yapılan değişikliklerin Mikrodiagram'da otomatik olarak kaydedilmesi istendiğinde, "değiştirilen dosyalar otomatik olarak kaydedilebilir" seçilebilir ve kaydedilecek zaman aralığı belirtilebilir.

* Tuş takımı

<center>

![mikrodiagram-editor-45](/img/mikrodiagram-editor-45.png)

</center>

Klavye sekmesinde Mikrodiagram'da kullanılan kısayol tuşlarının fabrika ayarlarına erişim sağlar.

Kısayol tuşu ayarları değiştirilebilir ve fabrika varsayılan ayarları geri yüklenebilir.

* Harici Araçlar
* MIME Türleri
* Konumlandırıcı

### Metin düzeltici

<center>

![mikrodiagram-editor-46](/img/mikrodiagram-editor-46.png)

</center>

Mikrodiagram'da kullanılan yazı tiplerinin mevcut durumu görüntülenir.

Yazı tipi ve renkler, davranış, görünüm, genel vurgulayıcı, snippet'ler, tamamlama seçenekleri ile metin düzenleyicinin görünümü düzenlenebilir.

### Diyagram Düzenleyici

<center>

![mikrodiagram-editor-47](/img/mikrodiagram-editor-47.png)

</center>

Mikrodiagram arka plan rengi, blok rengi, sayfa boyutu ve USB port seçimi ayarlarını yapmak için kullanılır.

<center>

![mikrodiagram-editor-48](/img/mikrodiagram-editor-48.png)

</center>

Mikrodiagram'da "arka plan rengi" bölümünden renk seçilerek ayarlanabilir.

Mikrodiagram'da "blok rengi" bölümünden renk seçilerek ayarlanabilir.

Sayfa boyutları herhangi bir boyuta ayarlanabilir.

<center>

![mikrodiagram-editor-49](/img/mikrodiagram-editor-49.png)

</center>

Cihaza seri port bağlantısı için Mikrodiagram'dan COM port seçimi yapmak için kullanılır.

<center>

![mikrodiagram-editor-50](/img/mikrodiagram-editor-50.png)

</center>

Yeni oluşturulan projeleri kaydetmek için "log" seçilir.

### Sürüm Kontrolü

#### Genel

<center>

![mikrodiagram-editor-51](/img/mikrodiagram-editor-51.png)

</center>

#### Yıkım

<center>

![mikrodiagram-editor-52](/img/mikrodiagram-editor-52.png)

</center>

## Proje Oluşturma

<center>

![mikrodiagram-editor-53](/img/mikrodiagram-editor-53.png)

</center>

Mikrodiagram'da yeni bir proje oluşturmak için "Dosya Menüsü"nde "Yeni dosya veya Proje aç" seçeneğini seçin.

* Aşama 1

<center>

![mikrodiagram-editor-54](/img/mikrodiagram-editor-54.png)

</center>

* Aşama 2

<center>

![mikrodiagram-editor-55](/img/mikrodiagram-editor-55.png)

</center>

Yeni oluşturulan proje adı ve proje oluşturma yeri seçilir

"Varsayılan proje konumu olarak kullan" seçildiğinde, daha sonra oluşturulacak projeler için proje oluşturma yeri sabitlenir.

* Aşama 3

<center>

![mikrodiagram-editor-56](/img/mikrodiagram-editor-56.png)

</center>

Programlama yöntemi seçimi yapılır.

* Adım 4

<center>

![mikrodiagram-editor-57](/img/mikrodiagram-editor-57.png)

</center>

Programlanacak cihaz ve genişletmeyi seçin.

* Adım 5

<center>

![mikrodiagram-editor-58](/img/mikrodiagram-editor-58.png)

</center>

Proje yapılandırma ayarları değiştirilebilir.

* Adım 6

<center>

![mikrodiagram-editor-59](/img/mikrodiagram-editor-59.png)

</center>

Yeni bir proje oluşturuldu.

Açılan sayfada "main.mdv" dosyasına tıklanarak proje tasarımına geçilebilir.

## Düzenleyiciyi Kullanma

### Blok Yerleştirme (Kapı Tipi Yerleştirme)

Mikrodiagrama özel FBD (fonksiyon blok şeması) programlama kitaplığında tutulan kapı tipleri ile programlanabilir.

<center>

![mikrodiagram-editor-60](/img/mikrodiagram-editor-60.png)

</center>

Kenar çubuğundan "Kapı Tipleri" seçilir ve eklenecek kapı tipi seçilir.

<center>

![mikrodiagram-editor-61](/img/mikrodiagram-editor-61.png)

</center>

Eklenecek kapı tipine tıklanır, çalışma alanı üzerine tıklandığında kapı tipi çalışma alanına taşınır. Eklenen blokların giriş ve çıkışları birbirine bağlanarak projenin tasarımına devam edilir.

### Satır Etiketi Ekleme

Mikrodiagram projelerinde blok çıkışları diğer blokların girişlerine bağlanarak programlama yapılabilir.

Blok çıkışlarını diğer blokların girişlerine bağlamanın başka bir yolu da bir satır etiketi eklemektir.

"Hat tanımı" adlı herhangi bir blok, bir bloğa bağlandığında satır etiketi olarak kullanılabilir.

Satır etiketleri projelerin hazırlanmasını kolaylaştırır ve projelerin okunabilirliğini artırır.

* Aşama 1

<center>

![mikrodiagram-editor-62](/img/mikrodiagram-editor-62.png)

</center>

Herhangi bir blok çıktısını bir çizgi etiketi ile başka bir noktaya taşımak için, "nesne özelliklerine" erişmek için bloğa çift tıklayın. Nesne özelliklerinde "satır açıklaması" sekmesine tıklanır ve satır etiketlerine açıklama yazılır.

* Adım 2

<center>

![mikrodiagram-editor-63](/img/mikrodiagram-editor-63.png)

</center>

Mikrodiagram durum çubuğundaki "satır etiketi ekle" simgesine tıklandığında ve ardından çalışma alanına tıklandığında "satır etiketi" eklenir. Satır etiketinin çıkışı, blokları birbirine bağlama yönteminde olduğu gibi blok girişine bağlanır.

* Aşama 3

<center>

![mikrodiagram-editor-64](/img/mikrodiagram-editor-64.png)

</center>

Çizgi tanımlarından seçim yapmak için çizgi etiketine çift tıklayın.

* Adım 4

<center>

![mikrodiagram-editor-65](/img/mikrodiagram-editor-65.png)

</center>

Satır etiketi eklemenin başka bir yolu da;

Kenar çubuğundan "satır etiketleri" seçilir. Projede tanımlanan çizgi tanımlarından seçim yapılarak çalışma alanına "çizgi etiketi" eklenebilir.

Satır etiketlerinden seçim yapabileceğiniz bir filtreleme özelliği de vardır.

### Metin Ekleme

Mikrodiagramda proje oluşturma alanına not eklemek için kullanılır. Eklenen notların yazı tipleri ve arka planı değiştirilebilir.

<center>

![mikrodiagram-editor-66](/img/mikrodiagram-editor-66.png)

</center>

Mikrodiagram durum çubuğunda "metin ekle" butonuna basar ve ardından çalışma alanına tıklarsanız eklenecek not sayfası çalışma alanına taşınır. Notlar not kağıdına yazılabilir. Yazı tipi, renk, arka plan vb. ayarları değiştirmek için nota sağ tıklayın ve seçim yapın.

### Blokların Taşlanması

Mikrodiyagram blok gruplama özelliği; projelerdeki blok gruplarının işlevlerinin takibini kolaylaştırır.

<center>

![mikrodiagram-editor-67](/img/mikrodiagram-editor-67.png)

</center>

Durum çubuğundaki "Blok Grubu" simgesine tıklayın, ardından bloklar seç ve bırak yöntemi kullanılarak çalışma alanında gruplandırılır.

Blok gruplama üzerine çift tıklanarak blok gruplama özellikleri sayfasına ulaşılır.

Blok grubunun adı "grup başlığı" seçeneği ile tanımlanır.

"Bak" seçeneği ile blok grubunun arka planı (şeffaf arka plan veya dikdörtgen çizgi) seçilir.

"Renk" seçeneği ile blok grubu için istenilen renk seçimi yapılır.

Blok grubunun boyutu "Boyut" seçeneği ile ayarlanır.

"Behavior" seçeneğinde blok grubunun seçicilik durumu belirlenir.

### Diyagram Ayarları

Mikrodiagram'da projelerin oluşturulduğu sayfaların boyutlarını ayarlamak için kullanılır.

<center>

![mikrodiagram-editor-68](/img/mikrodiagram-editor-68.png)

</center>

Diyagram ayarlarında sayfa boyutları standart A3, A4, A5, A6 arasından seçilebilir ve programcıya özel ayarlar yapılabilir.

## Kapı Düzenleyici

<center>

![mikrodiagram-editor-69](/img/mikrodiagram-editor-69.png)

</center>

Mod seçeneklerinin "gate editor" bölümünde proje oluşturma sayfasına ulaşılır.

### Nesne (Blok) Özellikleri

<center>

![mikrodiagram-editor-70](/img/mikrodiagram-editor-70.png)

</center>

Mikrodiagram'da eklenen bloklar üzerine sağ tıklanarak blok özelliklerine ulaşılır. Blok özellikleri arasında "nesne özellikleri, kesme, kopyalama, silme, yatay hizalama, dikey hizalama" özellikleri bulunur.

* Nesne Özellikleri

<center>

![mikrodiagram-editor-71](/img/mikrodiagram-editor-71.png)

</center>

Blok nesne özelliklerinde "parametreler, çizgi tanımlama ve notlar" pencereleri bulunmaktadır.

* Parametreler

Parametre tanımları tabloda açıklanmıştır.

<center>

![mikrodiagram-editor-72](/img/mikrodiagram-editor-72.png)

</center>

* Hat Tanımı

Programcı tarafından belirlenen bir isimle tanınmak istediğinizde blok çıkışları kullanılır. Hat tanımlarının birden fazla kullanımı vardır.

1 - Çıkışların başka bir bloğun girişine "hat etiketi" ile bağlanacağı bloklarda "hat tanımı" kullanılır.

2 - Blok değeri, LCD ekran özelliği veya WEB arayüzü olan cihazlardan izlenip değiştirilecekse "hat tanımı" eklenmelidir.

3 - Mikrodiagram'daki bloklar "değişken adres tablosunda" tanımlanacaksa, bloklara "hat tanımı" eklenmelidir.

* Notlar

Kullanıcı tarafından bloğa not yazmak için kullanılır.

* Kes-Kopyala-Yapıştır-Sil

<center>

![mikrodiagram-editor-73](/img/mikrodiagram-editor-73.png)

</center>

Mikrodiagram projesinde kullanılan bloklar üzerinde kes-kopyala-yapıştır-sil işlemleri yapılabilmektedir. Blok üzerine sağ tıklanarak kes-kopyala-sil işlemleri yapılabilir. "Yapıştır" seçeneği için Mikrodiagram çalışma alanında boş bir alana sağ tıklayın ve "yapıştır" seçeneğini seçin.

* Yatay Hizala-Dikey Hizala

<center>

![mikrodiagram-editor-74](/img/mikrodiagram-editor-74.png)

</center>

<center>

![mikrodiagram-editor-75](/img/mikrodiagram-editor-75.png)

</center>

Mikrodiagramda seçilen blok grubunu yatay veya dikey olarak ölçeklendirmek için kullanılır.

## Proje Yapılandırması

Mikrodiagram'da mod seçeneklerinde bulunan "projeler" bölümünden projeye özel konfigürasyonlar yapılabilmektedir.

### Cihaz konfigürasyonu

Ip,port,versiyon vb. ayarların yapılması ve görüntülenmesi için kullanıldığında TCP üzerinde cihaza bağlanır

* Bağlantı

<center>

![mikrodiagram-editor-76](/img/mikrodiagram-editor-76.png)

</center>

TCP portu üzerinden cihazla bağlantı kurmak ve TCP portu üzerinde bulunan "Cihazı yeniden başlat" butonu ile cihazı yeniden başlatmak için kullanılır.

"Cihaz IP'si" bölümünde TCP bağlantısı yapılacak cihazın IP adresi yazılır. Yerel ağdan bağlantı varsa, harici ağdan bağlantı veya bir GSM cihazına bağlantı kurulur. , uygun IP'ler tanımlanmalıdır.

Port: Cihazın dinleme port tanımlaması yapılmalıdır. Mikrodev ürünlerinde standart dinleme portu 502. Değiştirilebilir.

"Cihazı yeniden başlat" butonunun aktif olabilmesi için TCP bağlantısının kurulmuş olması gerekmektedir.

* Yazılım güncellemesi

<center>

![mikrodiagram-editor-77](/img/mikrodiagram-editor-77.png)

</center>

TCP bağlantısı kurulduktan sonra, güncellemek istediğiniz cihaz gömülü yazılımının adını kullanın.

* Gelişmiş Parametreler

<center>

![mikrodiagram-editor-78](/img/mikrodiagram-editor-78.png)

</center>

TCP bağlantısı kurulduktan sonra cihazın sürüm, IP, port, saat vb. ayarlarını yapılandırmak için kullanılır. Parametreleri okumak için "Parametreleri oku" ve parametreleri ayarlamak için "parametreleri uygula" düğmeleri kullanılır.

"Cihaz zamanını PC zamanı ile senkronize et" seçili iken "parametreleri uygula" seçildiğinde bilgisayar saati cihaza yazılır.

GSM bölümünün parametrelerinin ayarlanabilmesi için cihazın GSM destekli ürün olması gerekmektedir.

"Parametreleri uygula" ile ayarlar yapıldıktan sonra cihazın yeniden başlatılması gerekir.

### PLC ve Genişletmeler

Projede kullanılan cihazlar seçilir.

* Ana Cihazı Güncelle

<center>

![mikrodiagram-editor-79](/img/mikrodiagram-editor-79.png)

</center>

Mikrodiagram projesini yükleyecek cihaz seçilir. Projede kullanılacak ana ünite tıklanır, cihazlardan seçim yapmak için "Ana Cihazı Güncelle" sekmesine tıklanır.

* Seçili Aygıtı Ekle/Seçili Aygıtı Kaldır

<center>

![mikrodiagram-editor-80](/img/mikrodiagram-editor-80.png)

</center>

Hazırlanan projede kullanılan fiziksel giriş/çıkış sayısı ana ünite üzerinde bulunan sayıdan fazla ise projeye genişletme üniteleri eklemek gerekir.

Extension Devices bölümünde ilgili modüle tıklayın, eklemek için Add Selected Device sekmesine tıklayın. Eklenecek genişletme birimi kaldırılmak istendiğinde ilgili birim tıklanarak "Seçili Aygıtı Kaldır" veya "sil" tuşuna basılabilir.

Örneğin, MP201 PLC'lerde 16 dijital giriş (DI) bulunur. Hazırlanan projede 16'dan fazla dijital giriş kullanılıyorsa, dijital giriş genişletme ünitesi (IO200_I32) eklenmesi gerekir.

* Uyumsuz Cihaz Hata Kodu:17

<center>

![mikrodiagram-editor-81](/img/mikrodiagram-editor-81.png)

</center>

Hazırlanan projenin cihaza yüklenmesinde bir hata gözlemlenirse, projede kullanılan fiziksel girdi ve çıktı sayısı "ana ünite ve seçilen üniteler"den fazladır.

Yukarıdaki satırda projeye MP201 PLC ve 32 adet dijital giriş genişletme modülü (IO200_I32) eklenmiştir. Projeye toplamda "dijital girişli" kapı tipleri eklenmiştir. Ancak dijital giriş genişletme modülü (IO200_I32) "seçilen birimi ayıkla" yapıldığından, proje cihaza yüklenirken "uyumsuz cihaz hata kodu: 17" hatası oluştu.

Hatayı önlemek için dijital giriş genişletme (IO200_I32) ünitesi tekrar eklenmelidir.

## Dize Tablosu

GSM ürünlerinde SMS ve DTMF arama özellikleri kullanılırken, tanımlama için SMS içeriği ve telefon numarası kullanılmaktadır.

Metin tablosunda 64 satır ve satır başına 64 karakter vardır.

Metin tablosunda Türkçe karakterler kullanılmamalıdır.

Metin tablosundaki tanımlar SMS ve DTMF aramalarında kullanılmak üzere "metin blokları" arasından seçilmelidir.

### Dize Metni

<center>

![mikrodiagram-editor-82](/img/mikrodiagram-editor-82.png)

</center>

Metin tablosundaki tanımlar Mikrodiagram projesi cihaza gönderildiğinde cihaza yüklenir.

Telefon numaralarının metin içeriğine yazılma şekli GSM operatörlerine göre farklılık gösterebilir (bazı operatörler ülke telefon kodları ile (+905001234567), diğerleri ülke telefon kodu olmadan (05011234567) numaralandırmayı destekler.

Metin içeriği yazarken kelimeler arasında boşluk yok.

### Blok Özellik Tablosu

<center>

![mikrodiagram-editor-83](/img/mikrodiagram-editor-83.png)

</center>

Mikrodiagram'da hazırlanan projeye eklenen blok sayısı, register adresleri ve değişken tipleri hat tanımlamaları, loglama ve online izleme durumlarının daha kolay tanımlanması için kullanılmaktadır.

Tabloyu CSV'ye aktarma imkanı da vardır.

* Seçilen Blokları CSV'ye Seç/Dışa Aktar

<center>

![mikrodiagram-editor-84](/img/mikrodiagram-editor-84.png)

</center>

Seçilen blokları CSV'ye aktarmak için kullanılır.

"Ters Çevir" sekmesi ile blok seçimi tersine çevrilir.

Tüm bloklar "Tümü" sekmesi ile seçilir.

"Yok" sekmesi ile tüm bloklardaki seçimler kaldırılır.

* Blok No

<center>

![mikrodiagram-editor-85](/img/mikrodiagram-editor-85.png)

</center>

<center>

![mikrodiagram-editor-86](/img/mikrodiagram-editor-86.png)

</center>

Kapı tiplerinin blok numaralarını izlemek ve CSV'ye aktarmak için kullanılır.

* Kayıt Adresi

<center>

![mikrodiagram-editor-87](/img/mikrodiagram-editor-87.png)

</center>

<center>

![mikrodiagram-editor-88](/img/mikrodiagram-editor-88.png)

</center>

Kapı tiplerinin modbus haberleşme adreslerini izlemek ve CSV'ye aktarmak için kullanılır.

* Satır Açıklaması

<center>

![mikrodiagram-editor-89](/img/mikrodiagram-editor-89.png)

</center>

<center>

![mikrodiagram-editor-90](/img/mikrodiagram-editor-90.png)

</center>

Bloklarda tanımlanan hat tanımlarını değiştirmek ve takip etmek için kullanılır.

Çizgi tanımları, blok nesne özelliklerinden ve blok özellikleri tablosundan değiştirilebilir.

* Değişken Tipi

<center>

![mikrodiagram-editor-91](/img/mikrodiagram-editor-91.png)

</center>

Mikrodiagram'da 4 tip değişken vardır: logic, word, float, long type. Değişken blok tiplerini izlemek ve CSV'ye aktarmak için kullanılır.

* Aktif ve DevNET Loglama

<center>

![mikrodiagram-editor-92](/img/mikrodiagram-editor-92.png)

</center>

<center>

![mikrodiagram-editor-93](/img/mikrodiagram-editor-93.png)

</center>

Blok nesne özelliklerinden seçilebilir ve ayrıca blok özellikleri tablosundan "Günlük kaydı belleğe ekle ve DevNET ile senkronize et" seçenekleri de değiştirilebilir.

* Çevrimiçi Görüntüleme Aktif

<center>

![mikrodiagram-editor-94](/img/mikrodiagram-editor-94.png)

</center>

Programda izlenecek ve değiştirilecek blokları USB veya TCP portu üzerinden seçmek mümkündür. "Tüm bloklar için çevrimiçi izlemeyi aç / kapat" ile programdaki tüm bloklar için çevrimiçi izleme etkinleştirilebileceği gibi, "online izleme aktif" bölümünden izlenmesi gereken bloklar da seçilebilir.

### Değişken Adres Tablosu

<center>

![mikrodiagram-editor-95](/img/mikrodiagram-editor-95.png)

</center>

<center>

![mikrodiagram-editor-96](/img/mikrodiagram-editor-96.png)

</center>

* Açıklamalar

1- DNP3, IEC101 ve IEC104 protokollerinde değişken adresleri, türleri ve veri aktarım yöntemleri kullanılmaktadır.

2- Bloklar üzerindeki standart modbus register adreslerinden farklı bir Modbus adresi tanımlanmak istendiğinde Modbus Protokolünde kullanılır.

3- TCP haberleşmesi ile belirlenen belirli bir adresten başlayarak tablo bloklarında kayıtlı verileri okumak için kullanılabilir.

4- Mikrodiagram'da blokların değişken adres tablosunda tanımlanabilmesi için bloklara "blok tanımlama" yapılmalıdır.

* Takma ad

<center>

![mikrodiagram-editor-97](/img/mikrodiagram-editor-97.png)

</center>

Tabloya aktarılan bloklar için isimlendirmede kullanılır.

* Başlangıç Adresi

<center>

![mikrodiagram-editor-98](/img/mikrodiagram-editor-98.png)

</center>

Değişken adres tanımlamaları için kullanılır.

Protokol tipi olarak MODBUS seçilirse, seçilen başlangıç adresi Mikrodiagram'da kullanılan blok adreslerinden farklı seçilmelidir. (Mikrodiyagramdaki değişken adresleri, word: 4000, ikili: 1000, analog: 6000, uzun: 8000).

* Satır Etiketi

<center>

![mikrodiagram-editor-99](/img/mikrodiagram-editor-99.png)

</center>

Değişken adres tablosunda tanımlanan blok seçimi yapılır.

Değişken adres sekmesine aktarılacak bloklara Mikrodiagram'da "hat tanımı" tanımlanmalıdır.

* Puan Sayısı

<center>

![mikrodiagram-editor-100](/img/mikrodiagram-editor-100.png)

</center>

Değişken adres tablosuna eklenen başlangıç adresinden tanımlanacak adres sayısı belirlenir. Değişken adres tablosuna tablo blokları eklenirse tablonun boyutuna göre okunacak nokta sayısı otomatik olarak tanımlanır. (Başlangıç adresi 10000 ve nokta numarası 4 ise tanımlanan adresler 10000, 10001, 10002 ve 10003'tür.)

* Protokol Türü

<center>

![mikrodiagram-editor-101](/img/mikrodiagram-editor-101.png)

</center>

Değişken adres tablosuna aktarılan blokların haberleşme protokol tipi seçimi konfigüre edilir.

* Nesne türü

<center>

![mikrodiagram-editor-102](/img/mikrodiagram-editor-102.png)

</center>

Her protokolde farklılık gösteren nesne (değişken) türleri seçilir.

* Nesne Sınıfı

<center>

![mikrodiagram-editor-103](/img/mikrodiagram-editor-103.png)

</center>

Nesne sınıflandırma tanımları

* Tetikte Gönder

<center>

![mikrodiagram-editor-104](/img/mikrodiagram-editor-104.png)

</center>

<center>

![mikrodiagram-editor-105](/img/mikrodiagram-editor-105.png)

</center>

DNP3, IEC 101, IEC104 protokollerinde, değişken adres tablosuna belirli zaman aralıklarında eklenen veriler, verilerin istemciye gönderilmesi için kullanılır. Örneğin, IEC bağımlı bloğu tarafında 10 saniye boyunca bir tetik algılanırsa ve değişken adres tablosunda tanımlanan blok "tetikte gönder" ise; Blok değeri istemciye 10 saniye aralıklarla gönderilir.

* Gönderme Yöntemi/Değeri Değiştir

<center>

![mikrodiagram-editor-106](/img/mikrodiagram-editor-106.png)

</center>

<center>

![mikrodiagram-editor-107](/img/mikrodiagram-editor-107.png)

</center>

DNP3, IEC101, IEC104 protokollerinde, belirlenen değişiklik yöntemine göre değişiklik belirlenen değeri aştığında istemciye göndererek değişken adres tablosunda tanımlanan blok değerleri kullanılır. Örneğin, gönderme yöntemi "değişim düzeyi" ise ve değişiklik değeri 4 ise, ilk değer ile gönderilecek değer arasındaki fark 4'ten büyükse, değer istemcisi gönderilir (İlk değer 15 ise. ve son değer 11'den küçük veya 19'dan büyükse gönderilir.

* Örnek 1

<center>

![mikrodiagram-editor-108](/img/mikrodiagram-editor-108.png)

</center>

<center>

![mikrodiagram-editor-109](/img/mikrodiagram-editor-109.png)

</center>

Örnekte; Ortam sıcaklık değerinin okunduğu RTD blok değeri, IEC104 protokolü ile değişken adres tablosunda tanımlanır. Değişken adres tablosunda adresin adresi 12000'dir ve sıcaklık değeri 1°C'den fazla değiştiğinde (değer değiştikçe) client gönderilecektir. Değişken adres tablosunda "Send on trigger" seçili fakat IEC104 slave bloğunun "Ttk" girişi boş bırakıldığı için aktif değil.

* Örnek 2

<center>

![mikrodiagram-editor-110](/img/mikrodiagram-editor-110.png)

</center>

<center>

![mikrodiagram-editor-111](/img/mikrodiagram-editor-111.png)

</center>

Örnekte; Analog giriş blok değerleri üstte bir analog tabloya yazdırılır ve adresten 5 modbus protokolü ile değişken adres tablosunda tanımlanan 11000 adresinden okunur. Analog tablo bloğunun boyutu 20 bayt ve 1 analog değer 4 bayt ise tabloya 5 analog değer kaydedilir. Tablo 5 analog değere sahip olduğu için satır etiketi olarak analog tablo seçildiği için tabloda yer alan veriler otomatik olarak "değişken adres tablosu" "nokta numarası"nda görüntülenmektedir. Modbus TCP slave protokol özelliği nedeniyle "tetikte gönder", "gönderme yöntemi" ve "değişim değeri" bölümleri aktif değildir.

### Görüntüleme seçenekleri

<center>

![mikrodiagram-editor-112](/img/mikrodiagram-editor-112.png)

</center>

Mikrodiagram'da proje çalışma arka planı ve blok renklerinin değiştirilmesi; blok adı, blok numarası ve bloklardaki kayıt adresleri kullanılır. Ayarlar projeye özeldir. Her projede farklı ayarlar kullanılabilir.

* Arka plan rengi

<center>

![mikrodiagram-editor-113](/img/mikrodiagram-editor-113.png)

</center>

Mikrodiagram çalışma alanı arka plan renkleri değiştirilebilir ve başlangıç ayarlarına sıfırlanabilir.

* Blok Rengi

<center>

![mikrodiagram-editor-114](/img/mikrodiagram-editor-114.png)

</center>

Mikrodiagram blok renkleri değiştirilebilir, başlangıç ayarlarına sıfırlanabilir.

* Veri görünümü

<center>

![mikrodiagram-editor-115](/img/mikrodiagram-editor-115.png)

</center>

Blok üzerinde ekran durumunun blok adı, blok numarası ve modbus register adresleri seçimini yapabilir.

### Simülasyon

<center>

![mikrodiagram-editor-116](/img/mikrodiagram-editor-116.png)

</center>

Mikrodiagramda hazırlanan projeler cihaza yüklenmeden test edilir ve reaksiyonların izlenmesinde kullanılır.

<center>

![mikrodiagram-editor-117](/img/mikrodiagram-editor-117.png)

</center>

* Açıklamalar

Mikrodiagram'da hazırlanan projeyi simülasyon modunda çalıştırmak için "mod seçimi"nden "simülasyon"a tıklayınız.

Start butonu ile simülasyonu başlatın.

Değerler "girişler" bölümünden dijital ve analog girişlere yazılır. Dijital ve analog çıkışlar, "çıkış" bölümünden izlenebilir.

<center>

![mikrodiagram-editor-118](/img/mikrodiagram-editor-118.png)

</center>

<center>

![mikrodiagram-editor-119](/img/mikrodiagram-editor-119.png)

</center>

Değişkenlere değer atama işlemi (word, long, analog, binary register vb.) ilgili bloğa sağ tıklayarak açılan pencereden yapılır.

Simülasyon modunda blok durumu ve değerleri bloklar üzerinden izlenir.

= Not:= İletişim blokları, hareket kontrol blokları, GSM blokları gibi bazı bloklarda simülasyon modu aktif değildir.

## Çevrimiçi Görünüm

<center>

![mikrodiagram-editor-120](/img/mikrodiagram-editor-120.png)

</center>

Mikrodiagramda hazırlanan projeler cihaza yüklendikten sonra USB veya TCP port bağlantısı kullanılarak yanıtlar izlenip bloklara yeni değerler atanarak kullanılmaktadır.

<center>

![mikrodiagram-editor-121](/img/mikrodiagram-editor-121.png)

</center>

* Döngü Periyotları(ms)

<center>

![mikrodiagram-editor-122](/img/mikrodiagram-editor-122.png)

</center>

Online görünümün çevrim süresini belirlemek için kullanılır.Belirtilen zaman aralıklarında bloklar üzerinde online izleme yapılır, blok değerleri okunur ve bloklar üzerine yazılır.

* Açıklamalar

Mikrodiagram'da hazırlanan projenin "online görüntüleme" moduna alınabilmesi için izlenmesi gereken işlemler;

1 - Online izlenecek blokların seçimi, "proje konfigürasyonu" bölümündeki "blok konfigürasyonu" sekmesinde "Online görünüm aktif" başlığı altında yapılmalıdır.

<center>

![mikrodiagram-editor-123](/img/mikrodiagram-editor-123.png)

</center>

<center>

![mikrodiagram-editor-124](/img/mikrodiagram-editor-124.png)

</center>

Online izlenecek blokların seçimi, cihaza Mikrodiagram projesi yüklendikten sonra bloğa sağ tıklanarak ve "çevrimiçi görünümü etkinleştir / devre dışı bırak" ile yapılabilir.

2 - USB veya TCP port bağlantısı kurulur.

3- Hazırlanan Mikrodiagram projesi cihaza yüklenir.

4 - USB veya TCP bağlantı noktasını yeniden bağlayın.

5 - Mod seçiminde "çevrimiçi görünüm"e tıklayın ve "döngü periyotları" ayarlanır.

<center>

![mikrodiagram-editor-125](/img/mikrodiagram-editor-125.png)

</center>

<center>

![mikrodiagram-editor-126](/img/mikrodiagram-editor-126.png)

</center>

Çevrimiçi izlemeyi başlatmak için "Başlat"a tıklayın.

Online izlemenin aktif olduğu bloklarda kırmızı-mavi renkler yanıp söner.

* Cihaza Bağlanma

<center>

![mikrodiagram-editor-127](/img/mikrodiagram-editor-127.png)

</center>

Mikrodiagramda hazırlanan projeyi cihaza göndermek ve online izlemek için cihaza bağlanılması gerekmektedir.

Mikrodiagram cihaza USB veya TCP portu üzerinden bağlanabilir.

Mikrodiagram USB ve TCP portuna aynı anda bağlanamaz.

### Usb Bağlantısı

USB bağlantısını kullanmak için USB sürücüsünün kurulumu tamamlanmalıdır.

Windows10 veya üzeri işletim sistemine sahip bilgisayarlarda USB sürücüsü kurulmasına gerek yoktur.

USB Sürücü kurulumu tamamlandıktan sonra bilgisayar ile cihaz arasına bir USB kablosu bağlanır.

USB kablosu seçilirken "USB A ve USB B" (yazıcı kablosu) tercih edilmelidir. USB B tarafı cihaza, USB A tarafı ise bilgisayara bağlanır.

Aygıt Yöneticisinden bağlanan USB kablosunun tanımlandığı COM bağlantı noktası belirlenir.

<center>

![mikrodiagram-editor-128](/img/mikrodiagram-editor-128.png)

</center>

Bağlantı arayüzüne, yapı modu seçeneklerindeki sekmeye tıklanarak erişilir.

<center>

![mikrodiagram-editor-129](/img/mikrodiagram-editor-129.png)

</center>

"SERIAL USB ile bağlan" seçilir, COM port seçimi yapılır. "OK" butonu ile bağlantı işlemi başlatılır.

<center>

![mikrodiagram-editor-130](/img/mikrodiagram-editor-130.png)

</center>

“Cihaz ve bilgisayar arasında COM8 seri port üzerinden USB bağlantısı kuruldu” uyarısı alındığında ve bağlantı butonu "bağlı" konumuna geldiğinde USB üzerinden bağlantı tamamlanmış olur.

<center>

![mikrodiagram-editor-131](/img/mikrodiagram-editor-131.png)

</center>

### TCP Bağlantısı

Bilgisayar ile cihaz arasında TCP bağlantısı kurmak için;

TCP'ye bağlanacak cihazda "Ethernet, Wi-Fi veya GSM" portlarından en az birinin bulunması gerekir.

      Ethernet ile TCP Bağlantısı Kurma
Kurulacak Ethernet bağlantısı için;

1 - Cihaz ethernet portu olmalıdır.

2 - Cihaz ile bilgisayar arasında ethernet kablosu (CAT5, CAT6) bağlantısı mutlaka yapılmalıdır.

3 - Cihaz ve bilgisayar aynı yerel ağ üzerinde ise tanımlanan IP'ler buna göre seçilmelidir.

      Cihaza IP Tanımlama
USB bağlantısı üzerinden cihaz IP ayarlarını yapmak için "Mikroterminal" programı kullanılmalıdır. ("Mikroterminalleri Kullanma" bölümüne bakın.)

<center>

![mikrodiagram-editor-132](/img/mikrodiagram-editor-132.png)

</center>

Mikroterminal uygulamasına Mikrodiagram "Araçlar" menüsünden ulaşılabilir.

<center>

![mikrodiagram-editor-133](/img/mikrodiagram-editor-133.png)

</center>

<center>

![mikrodiagram-editor-134](/img/mikrodiagram-editor-134.png)

</center>

Cihaz ve bilgisayar IP ayarları tamamlandıktan sonra cihaz ile bilgisayar arasındaki "ethernet kablo bağlantı testi" için cihaza bilgisayardan "ping" atılması gerekir.

<center>

![mikrodiagram-editor-135](/img/mikrodiagram-editor-135.png)

</center>

"Ping" işlemi için bilgisayar "komut penceresine" yazılır, cihaz IP'si resimde gösterilir ve "ENTER" tıklanır.

En üstteki görüntüde ortaya çıkan çıktı oluşursa, ping işlemi "başarısız" olur. IP ayarları ve ethernet kablo bağlantıları tekrar kontrol edilmelidir.

Sonuç çıktısı aşağıdaki şekilde görünüyorsa ping işlemi "başarılı" demektir.

<center>

![mikrodiagram-editor-136](/img/mikrodiagram-editor-136.png)

</center>

Mikrodiagram'dan cihaza ethernet TCP bağlantısı kurulabilir.

* Cihaza Dinleme Portu Tanımlama

Mikrodev ürünlerinde standart dinleme portu 502 olarak tanımlanır.

Varsayılan dinleme bağlantı noktası 502'yi değiştirmek için;

1- Mikrodiagramda hazırlanan projeye bir TCP soket bloğu eklenmelidir.

<center>

![mikrodiagram-editor-137](/img/mikrodiagram-editor-137.png)

</center>

2- Soket tipi "TCP server" seçilir.

3- Listen portu tanımlanır.

4- "Medya türü" olarak "Ethernet", "GSM" veya "Wi-Fi" seçin.

Not: Dinleme portu, Mikrodiagram projesinde sunucu olarak eklenen TCP soket bloklarının sayısı ile tanımlanabilir.

* Ethernet Bağlantı Testi

Ethernet bağlantısı için gerekli ayarları yaptıktan sonra TCP bağlantısı için;

1 - Sekmede Build mode seçeneklerinde bulunan linke tıklanır.

<center>

![mikrodiagram-editor-138](/img/mikrodiagram-editor-138.png)

</center>

<center>

![mikrodiagram-editor-139](/img/mikrodiagram-editor-139.png)

</center>

2 - Açılan pencerede "Ayarlar"a tıklayınız.

<center>

![mikrodiagram-editor-140](/img/mikrodiagram-editor-140.png)

</center>

3 - Açılan pencerede "Device IP" bölümü cihaz IP'si ve "Port" bölümüne cihaz dinleme portu yazılır.

4- TCP bağlantısını kurmak için "TCP kullanarak bağlan"ı seçin ve "Tamam"a tıklayın.

<center>

![mikrodiagram-editor-141](/img/mikrodiagram-editor-141.png)

</center> 

<center>

![mikrodiagram-editor-142](/img/mikrodiagram-editor-142.png)

</center>

5- TCP bağlantısı kurulduğunda ekrana "Cihaz ve bilgisayar arasında bir TCP bağlantısı kuruldu" uyarısı gelir.

Bağlantı simgesi "Bağlandı" olarak görüntülenir.

<center>

![mikrodiagram-editor-143](/img/mikrodiagram-editor-143.png)

</center>

* GSM ile TCP Bağlantısı Kurma

Mikrodiagram,GSM'de cihaza TCP bağlantısı kurmak için;

1 - Cihazda GSM etkin olmalıdır.

2 - Cihazın GSM anteni bağlı olmalıdır.

3 - Cihaz sinyal kalitesi (CSQ) 1 ile 31 arasında olmalıdır.

4 - Veri paketi (internet paketi) olan SIM kart cihaza takılmalıdır. (SIM kartın sabit bir IP adresi olmalıdır.)

5 - Takılan SIM kartın APN tanımlaması cihaza yapılmalıdır.

6 - Mikrodiagram kurulu bilgisayarın "geniş alan ağına" (WAN) (internet ağı) bağlı olması gerekir.

* Cihaza IP Tanımlama

Mikrodiagram'dan GSM uyumlu cihaza TCP bağlantısı kurmak için GSM'nin IP'sinde "cihaz IP" kısmına yazılır.

<center>

![mikrodiagram-editor-144](/img/mikrodiagram-editor-144.png)

</center>

GSM IP tanımı dışındaki diğer işlemler, Ethernet TCP bağlantısı ile aynıdır.

## Mikrodiagram Projesinin Cihaza Yüklenmesi

Mikrodiyagramda hazırlanan projeyi cihaza yüklemek için 2 yöntem vardır.

Proje, USB veya TCP bağlantısı ile cihaza gönderilebilir.

### Usb Bağlantılı Proje Yükleme

Cihaz ve bilgisayar arasında USB bağlantısı Bağlantı kurulduktan sonra "cihaza gönder" butonuna tıklayınız.

<center>

![mikrodiagram-editor-145](/img/mikrodiagram-editor-145.png)

</center>

Mikrodiagram'da "Genel Mesajlar" bölümünde çıktı aşağıdaki gibi ise Mikrodiagram projesi başarıyla cihaza yüklenmiştir.

Dosya yükleme işleminin %100 tamamlandığından emin olmak için özen gösterilmelidir.

USB bağlantısı ile cihaza proje yükleme işlemi %100 tamamlandığında cihaz otomatik olarak yeniden başlar.

<center>

![mikrodiagram-editor-146](/img/mikrodiagram-editor-146.png)

</center>

### Tcp Bağlantılı Proje Yükleme

Cihaz ve bilgisayar arasında TCP bağlantısı Bağlantı kurulduktan sonra "cihaza gönder" butonuna tıklanır.

<center>

![mikrodiagram-editor-147](/img/mikrodiagram-editor-147.png)

</center>

<center>

![mikrodiagram-editor-148](/img/mikrodiagram-editor-148.png)

</center>

Proje yükleme işleminin %100 tamamlanması için beklenmelidir.

Projeyi USB ile yükleme durumundan farklı olarak cihaz yeniden başlatma işlemi manuel olarak gerçekleştirilir.

<center>

![mikrodiagram-editor-149](/img/mikrodiagram-editor-149.png)

</center>

Proje yükleme işlemi %100 tamamlandıktan sonra "cihaz konfigürasyonu"ndan "bağlantı"ya tıklanır, "cihazı yeniden başlat" tıklanır ve proje yükleme işlemi tamamlanır.

## Kalıcılık Yapılandırması

Bir PLC uygulaması tasarlarken, PLC kullanıcısının PLC'deki farklı bellek türlerini anlaması önemlidir. Mikrodev PLC tarafından üç tip bellek kullanılmaktadır; RAM, SRAM ve FLASH bellek.

SRAM belleği, PLC kullanıcısı tarafından kalıcı bellek olarak yapılandırılabilir. SRAM, PLC harici gücü kapalıyken dahili pil ile çalışır.

Kalıcı bellek, bir güç sıfırlaması yoluyla değerleri korumak için kullanıcı tarafından yapılandırılan bellektir. Kalıcı olmayan bellek, bir güç sıfırlamasından sonra verileri temizlemek için PLC kullanıcısı tarafından yapılandırılan bellektir.

Mikrodev PLC'deki blokların varsayılan davranışı kalıcı değildir. Bloğun kalıcı bellek kullanmasını sağlamak için "Kalıcı" seçeneğini seçmeniz gerekir.

* Örnek 1

“Retentive” seçili değilse “Load Initial Value” seçip seçmemeniz bir şey değiştirmez.

Güç Sıfırlandığında: Cihaz “Register Initial Value”yu registera yükleyecektir.

Proje Yüklemesinde: Cihaz “Register Initial Value”yu registera yükleyecektir.

<center>

![mikrodiagram-editor-150](/img/mikrodiagram-editor-150.png)

</center>

* Örnek: 2

Güç Sıfırlandığında: Kayıt, en son değeri koruyacaktır.
Proje Yüklemede:

A- Projede kalıcı blok ekleme/kaldırma gibi değişiklikler varsa, açılıştan sonra register üzerine “Register Initial Value” yazılacaktır.

B- Projede parametre güncelleme, satır ekle/kaldır gibi küçük değişiklikler varsa, register boot sonrası en son değeri koruyacaktır.

<center>

![mikrodiagram-editor-151](/img/mikrodiagram-editor-151.png)

</center>

* Örnek: 3

Güç Sıfırlandığında: Kayıt, en son değeri koruyacaktır.
Proje Yüklemede: Register'a “Register Initial Value” yazılacaktır.

<center>

![mikrodiagram-editor-152](/img/mikrodiagram-editor-152.png)

</center>

