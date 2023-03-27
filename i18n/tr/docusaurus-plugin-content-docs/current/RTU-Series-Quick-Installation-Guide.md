---
title: "RTU300 Serisi Hızlı Kurulum Kılavuzu"
---

## Başlangıç

### Telediagram Hakkında

Telediagram; Mikrodev tarafından geliştirilmiş ve Mikrodev RTU ailesi cihazlarının programlanmasında kullanılan editör yazılımıdır. Mikrodev RTU programlama editörü Telediagram ile çok karmaşık projeler görsel ve kolay anlaşılır arayüzü sayesinde hızla gerçekleştirebilmektedir.

Telediagram kütüphanesinde "VE, VEYA, XOR" gibi temel mantık bloklarının yanında "PID, astronomik zamanlayıcı" gibi karmaşık uygulamaları kolaylaştıracak gelişmiş bloklar da bulunmaktadır.

Farklı arayüzler \(USB/TCP\) üzerinden cihazlara bağlanarak, program yükleme/güncelleme, online izleme ve firmware güncelleme gibi araçlar da Telediagram ve web server ile sunulmaktadır.

#### Telediagram Kurulum

Telediagram yazılımı güncel Windows sürümlerinde çalışacak şekilde hazırlanmıştır. Kurulum dosyası aşağıdaki internet adresinden ücretsiz olarak indirilebilir:

https://www.mikrodev.com/downloads/telediagram/TelediagramSetup_latest.zip

Telediagram kurulumu ekrandaki yönergeler takip edilerek tamamlanır.

#### Telediagram Lisanslama

Telediagram programı lisansla çalışan bir yazılımdır. Ücretsiz bir şekilde mikrodev satış birimi ile iletişime geçerek lisans talebi oluşturabilirsiniz. Lisansın oluşturulabilmesi için sizden telediagram yazılımını kurduğunuz cihazın hardware id si istenecektir.

Cihazın hardware id sini öğrenebilmek için aşağıdaki adımlar takip edilir.

Telediagram kısayolu üzerinde sağ tık yapılır, dosya konumunu aç a tıklanır.

<center>

![rtu-quick-inst-38](/img/rtu-quick-inst-38.png)

</center>

Telediagram yazılımının bin klasörü açılır.

Bin klasörü içerisinde yer alan license_user.exe uygulamasına çift tıklanır. Ekranda beliren pop-up sayfasındaki sayılar cihazınızın hardware id sini oluşturur. Lisans işlemi için bu hardware id nin satış ekibine bildirilmesi gerekmektedir.

<center>

![rtu-quick-inst-39](/img/rtu-quick-inst-39.png)

</center>

**Not:** Cihazın hardware id sinin öğrenilmesi isteniyorsa, cihaza dongle takılı olmamasına dikkat edilmelidir.

Satış biriminden temin edilen lisans dosyası telediagram yazılımının bin klasörüne kopyalanması gerekmektedir.

Bunun için Telediagram kısayolu üzerinde sağ tık yapılır, dosya konumunu aç a tıklanır. Açılan bin klasörüne tlicense.dat dosyası kopyalanır. Böylelikle telediagram yazılımı lisanslanmış olur.

<center>

![rtu-quick-inst-40](/img/rtu-quick-inst-40.png)

</center>

## Proje Oluşturma

Telediagram’da yeni proje oluşturmak için aşağıdaki adımlar takip edilir.

<center>

![rtu-quick-inst-41](/img/rtu-quick-inst-41.png)

</center>

Telediagram’da yeni proje oluşturmak için "Dosya Menüsü"nden "yeni dosya ya da proje aç" seçilir.

### Adım 1

<center>

![rtu-quick-inst-42](/img/rtu-quick-inst-42.png)

</center>

### Adım 2

<center>

![rtu-quick-inst-43](/img/rtu-quick-inst-43.png)

</center>

Yeni oluşturulan proje ismi ve proje oluşturma yeri seçimi yapılır.

"Varsayılan proje konumu olarak kullan" seçildiğinde, daha sonra oluşturulacak projeler için proje oluşturma yeri sabitlenmiş olur.

### Adım 3

<center>

![rtu-quick-inst-44](/img/rtu-quick-inst-44.png)

</center>

Programlama metodu seçimi yapılır.

### Adım 4

<center>

![rtu-quick-inst-45](/img/rtu-quick-inst-45.png)

</center>

Programlanmak istenen cihaz ve genişleme birimi \(eklenmesi gerekiyorsa\) seçimi yapılır.

### Adım 5

<center>

![rtu-quick-inst-46](/img/rtu-quick-inst-46.png)

</center>

Proje konfigürasyon ayarlarında değişiklik yapılabilir.

### Adım 6

<center>

![rtu-quick-inst-47](/img/rtu-quick-inst-47.png)

</center>

Yeni proje oluşturulmuştur.

Sol kenar sekmesinde yer alan projeler kısmında Mdv yazısına çift tıklanır veya Mdv yazısının yanında yer alan artı ikonuna tıklanır. Açılan alt sekmede "main.mdv" dosyası yer almaktadır. Bu dosyaya çift tıklanarak sayfa açılır ve bu sayfada proje tasarımına başlanabilir.

## Cihaza Bağlantı Kurma

![rtu-quick-inst-48](/img/rtu-quick-inst-48.png)

Telediagram’ da hazırlanan projelerin cihaza gönderilmesi ve online izleme için cihaza bağlantı kurulması gerekmektedir.

Telediagram’da USB veya TCP port ile cihaza bağlantı kurulabilir.

Telediagram’da aynı anda USB ve TCP porttan bağlantı kurulamaz.

### USB Bağlantısı Kurma 

USB bağlantısının kurulabilmesi için Telediagram kurulu olan bilgisayara USB sürücü kurulumunun tamamlanmış olması gerekmektedir.

Windows10 ve üzeri işletim sistemi bulunan bilgisayarlarda USB sürücü kurulumuna ihtiyaç yoktur.

USB Sürücü kurulumu tamamlandıktan sonra bilgisayar ile cihaz arasına USB kablo bağlantısı yapılır.

USB kablosu seçiminde "USB A ve USB B" (\yazıcı kablosu\) tercih edilmelidir. USB B tarafı cihaza USB A tarafı da bilgisayara bağlanır.

Aygıt yöneticisinden bağlanan USB kablonun tanımlandığı COM port belirlenir.

<center>

![rtu-quick-inst-49](/img/rtu-quick-inst-49.png)

</center>

Build Mod seçeneklerinden 
![rtu-quick-inst-48](/img/rtu-quick-inst-48.png)
sekmesine tıklanarak bağlantı arayüzüne ulaşılır.

<center>

![rtu-quick-inst-50](/img/rtu-quick-inst-50.png)

</center>

"SERİ USB kullanarak bağlan" seçilir, COM port seçimi yapılır. "OK" butonu ile bağlantı kurma işlemi başlatılır.

<center>

![rtu-quick-inst-51](/img/rtu-quick-inst-51.png)

</center>

<center>

![rtu-quick-inst-52](/img/rtu-quick-inst-52.png)

</center>

"Cihaz ile bilgisayar arasında seri port üzerinden USB bağlantısı kuruldu" uyarısı alındığında ve bağlantı kurma butonu "bağlandı"
![rtu-quick-inst-53](/img/rtu-quick-inst-53.png)
konumuna geldiğinde USB üzerinden bağlantı kurulumu tamamlanmıştır.

### TCP Bağlantısı Kurma

Bilgisayar ile cihaz arasında TCP bağlantısının kurulabilmesi için;

TCP bağlantı kurulacak cihazda "ethernet, Wi-Fi veya GSM" portlarından en az birinin bulunması gerekmektedir.

#### Ethernet ile TCP Bağlantısı Kurma

Ethernet bağlantısının kurulabilmesi için;

- Cihazın ethernet portunun olması gerekmektedir.    

- Cihaz ile bilgisayar arasına ethernet kablosu \(CAT5, CAT6\) bağlantısı kurulmuş olmalıdır.

- Cihaz ve bilgisayar aynı yerel ağda ise tanımlanan IP’ler de ona göre seçilmelidir.

#### Cihaza IP Tanımlama

Cihaz IP ayarlarını USB bağlantısı ile yapmak için "mikroterminal" programı kullanılmalıdır. \("Mikroterminal kullanımı" bölümüne bakınız.\)

<center>

![rtu-quick-inst-54](/img/rtu-quick-inst-54.png)

</center>

Mikroterminal programına Telediagram "Araçlar" menüsünden ulaşılabilir.

<center>

![rtu-quick-inst-55](/img/rtu-quick-inst-55.png)

</center>

<center>

![rtu-quick-inst-56](/img/rtu-quick-inst-56.png)

</center>

Cihaz ve bilgisayar IP ayarlarının eksiksiz yapıldıktan sonra cihaz ile bilgisayar arasında "ethernet kablo bağlantı testi" için bilgisayardan cihaza "ping atma" işlemi yapılmalıdır.

<center>

![rtu-quick-inst-57](/img/rtu-quick-inst-57.png)

</center>

"Ping atma" işlemi için bilgisayar "komut penceresine", cihaz IP’si resimdeki gibi yazılıp "ENTER" tıklanır.

Üst resimdeki sonuç çıktısı oluşursa pingleme işlemi "başarısız" demektir. IP ayarları ve ethernet kablo bağlantıları tekrar kontrol edilmelidir.

Aşağıdaki resimdeki gibi sonuç çıktısı oluşuyorsa pingleme işlemi "başarılı" demektir.

<center>

![rtu-quick-inst-58](/img/rtu-quick-inst-58.png)

</center>

Telediagram’dan cihaza ethernet TCP bağlantısı kurulabilir demektir.

#### Cihaza Dinleme Portu Tanımlama  

Mikrodev ürünlerinde standart dinleme portu 502 olarak tanımlanmıştır.        
Standart 502 olan dinleme portunu değiştirmek için;           
Telediagram’da hazırlanan projeye TCP soket bloğu eklenmelidir.           

<center>

![rtu-quick-inst-59](/img/rtu-quick-inst-59.png)

</center>

Soket tipi “TCP sunucu” seçilir.             
Dinleme portu tanımlanır.             
“Media type” olarak ethernet , GSM veya Wİ-Fİ seçeneklerinden biri seçilir.       

**Not:** Telediagram projesinde sunucu olarak eklenen TCP soket bloğu sayısınca dinleme portu tanımlanabilir.

#### Ethernet Bağlantısı Testi

Ethernet bağlantısı için gerekli ayarlar yapıldıktan sonra TCP bağlantısı için;

Build mod seçeneklerinde bulunan bağlantı 
![rtu-quick-inst-60](/img/rtu-quick-inst-60.png)
sekmesine tıklanır.

<center>

![rtu-quick-inst-61](/img/rtu-quick-inst-61.png)

</center>

Açılan pencerede "Ayarlar" tıklanır.

<center>

![rtu-quick-inst-62](/img/rtu-quick-inst-62.png)

</center>

Açılan pencerede "Cihaz IP" bölümüne cihaz IP’si ve "port" bölümüne cihaz dinleme portu yazılır.

"TCP kullanarak bağlan" seçilir ve "OK" tıklanarak TCP bağlantısının kurulması beklenir.

<center>

![rtu-quick-inst-63](/img/rtu-quick-inst-63.png)

</center>

TCP bağlantısı kurulduğunda "Cihaz ve bilgisayar arasında TCP bağlantısı kuruldu" uyarısı ekranda görüntülenir.

Bağlantı ikonu da "Bağlandı"
![rtu-quick-inst-64](/img/rtu-quick-inst-64.png)
şeklinde görüntülenir.

#### GSM ile TCP Bağlantısı Kurma 

Telediagram’ da cihaza GSM ile TCP bağlantısının kurulabilmesi için;

- Cihazın GSM özellikli olması gerekmektedir.

- Cihazın GSM anteni takılı olmalıdır.

- Cihaz sinyal kalitesi \(CSQ\) 1-31 arasında olmalıdır.

- Cihaza data paketi \(internet paketi\) bulunan SIM kart takılmalıdır. \(SIM kart sabit IP’li olmalıdır.\)

- Cihaza, takılan SIM kartın APN tanımlaması yapılmalıdır.

- Telediagram kurulu bilgisayarın “geniş alan ağına” \(WAN\) \(internet ağı\) bağlanıyor olması gerekmektedir.

#### Cihaza IP Tanımlama

Telediagram’dan GSM özellikli cihaza TCP bağlantısı kurmak için "cihaz IP" bölümüne GSM IP’si yazılır

<center>

![rtu-quick-inst-65](/img/rtu-quick-inst-65.png)

</center>

GSM IP tanımlamanın dışındaki diğer işlemler ethernet TCP bağlantısı ile aynıdır.

## Cihaza Telediagram Projesi Yükleme 

Telediagram’da hazırlanan projeyi cihaza yüklemek için 2 yöntem vardır.

Telediagram üzerinden TCP bağlantısı ile veya web server üzerinden proje cihaza gönderilebilir.

### USB Bağlantısı ile Proje Yükleme 

Cihaz ile bilgisayar arasında USB bağlantısı
![rtu-quick-inst-66](/img/rtu-quick-inst-66.png)
kurulduktan sonra "cihaza gönder" butonuna 
![rtu-quick-inst-67](/img/rtu-quick-inst-67.png)
tıklanır.

Proje dosyası derlenir ve cihaza bin dosyası yüklenmiş olur.

Proje dosya yedeğinin cihaza yüklenmesi için onay ekranı açılır. "Evet" yazısına tıklanır ise, daha sonrasında cihaz içerisinden proje dosyasının çekilmesi sağlanmış olur.

<center>

![rtu-quick-inst-68](/img/rtu-quick-inst-68.png)

</center>

Yapılan değişikliklerin uygulanabilmesi için cihazın yeniden başlatılması gerekmektedir. Cihazın yeniden başlatılması için onay ekranı açılır. "Evet" yazısına tıklanır.

<center>

![rtu-quick-inst-69](/img/rtu-quick-inst-69.png)

</center>

Telediagram’da "gelen mesajlar" bölümünde aşağıdaki gibi bir çıktı oluşuyorsa Telediagram projesi cihaza başarı ile yüklenmiş demektir.

Dosya yükleme işleminin %100 tamamlanmasına dikkat edilmelidir.

USB bağlantısı ile cihaza proje yükleme işlemi %100 tamamlandığında cihaz otomatik olarak yeniden başlatılır. \(resetlenir.\)

<center>

![rtu-quick-inst-70](/img/rtu-quick-inst-70.png)

</center>

### TCP Bağlantısı ile Proje Yükleme  

Cihaz ile bilgisayar arasında TCP bağlantısı
![rtu-quick-inst-71](/img/rtu-quick-inst-71.png)
kurulduktan sonra 
![rtu-quick-inst-67](/img/rtu-quick-inst-67.png)
"cihaza gönder" butonuna tıklanır.Proje dosyası derlenir ve cihaza bin dosyası yüklenmiş olur.

Proje dosya yedeğinin cihaza yüklenmesi için onay ekranı açılır. "Evet" yazısına tıklanır ise, daha sonrasında cihaz içerisinden proje dosyasının çekilmesi sağlanmış olur.

<center>

![rtu-quick-inst-72](/img/rtu-quick-inst-72.png)

</center>

Yapılan değişikliklerin uygulanabilmesi için cihazın yeniden başlatılması gerekmektedir. Cihazın yeniden başlatılması için onay ekranı açılır. "Evet" yazısına tıklanır.

<center>

![rtu-quick-inst-73](/img/rtu-quick-inst-73.png)

</center>

Telediagram’da "gelen mesajlar" bölümünde aşağıdaki gibi bir çıktı oluşuyorsa Telediagram projesi cihaza başarı ile yüklenmiş demektir.

Dosya yükleme işleminin %100 tamamlanmasına dikkat edilmelidir.

TCP bağlantısı ile cihaza proje yükleme işlemi %100 tamamlandığında cihaz otomatik olarak yeniden başlatılır. \(resetlenir.\)

<center>

![rtu-quick-inst-74](/img/rtu-quick-inst-74.png)

</center>

## Cihazın İçerisinden Proje Dosyası Çekme

Cihaz içerisinde var olan proje Telediagram programı üzerinden bilgisayara indirilebilmektedir. Bunu için aşağıdaki adımlar izlenmelidir.

Cihaz enerjili ve bilgisayar ile TCP üzerinden bağlı iken;

Telediagram’da araçlar kısmında yer alan "dowload project from device" seçeneğine tıklanır.

<center>

![rtu-quick-inst-75](/img/rtu-quick-inst-75.png)

</center>

İndirme durum izlemesi %99 da iken projenin kaydedilmesi istenen dosya konumu seçilir.

<center>

![rtu-quick-inst-76](/img/rtu-quick-inst-76.png)

</center>

Buradan dosyanın kaydedilmesi gereken yer seçilir. Böylece cihaz içerisinde yer alan bin dosyası bilgisayara indirilmiş olur.
