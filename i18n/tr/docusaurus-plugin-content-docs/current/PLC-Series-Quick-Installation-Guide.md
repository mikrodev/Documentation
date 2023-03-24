---
title: "MP110 ve MP211 PLC Serisi Hızlı Kurulum Kılavuzu"
---

## Giriş

### Mikrodiagram Hakkında

Mikrodiagram; Mikrodev tarafından geliştirilmiş ve Mikrodev PLC ailesi cihazlarının programlanmasında kullanılan editör yazılımıdır. Mikrodev PLC programlama editörü Mikrodiagram ile çok karmaşık projeler görsel ve kolay anlaşılır arayüzü sayesinde hızla gerçekleştirebilmektedir.

Mikrodiagram kütüphanesinde "VE, VEYA, XOR" gibi temel mantık bloklarının yanında "PID, astronomik zamanlayıcı" gibi karmaşık uygulamaları kolaylaştıracak gelişmiş bloklar da bulunmaktadır.

Farklı arayüzler (USB/TCP) üzerinden cihazlara bağlanarak, program yükleme/güncelleme, online izleme ve firmware güncelleme gibi araçlar da Mikrodiagram ve web server ile sunulmaktadır.

#### Mikrodiagram Kurulum

Mikrodiagram yazılımı güncel Windows sürümlerinde çalışacak şekilde hazırlanmıştır. Kurulum dosyası aşağıdaki internet adresinden ücretsiz olarak indirilebilir:

http://www.mikrodev.com/downloads/mikrodiagram/MikrodiagramSetupSTM_latest.zip

Mikrodiagram kurulumu ekrandaki yönergeler takip edilerek tamamlanır.

## Proje Oluşturma

Mikrodiagram’da yeni proje oluşturmak için aşağıdaki adımlar takip edilir.

<center>

![plc-quick-inst-01](/img/plc-quick-inst-01.png)

</center>

Mikrodiagram’da yeni proje oluşturmak için "Dosya Menüsü"nden "yeni dosya ya da proje aç" seçilir.

### Adım 1

<center>

![plc-quick-inst-34](/img/plc-quick-inst-34.png)

</center>

### Adım 2

<center>

![plc-quick-inst-35](/img/plc-quick-inst-35.png)

</center>

Yeni oluşturulan proje ismi ve proje oluşturma yeri seçimi yapılır.

"Varsayılan proje konumu olarak kullan" seçildiğinde, daha sonra oluşturulacak projeler için proje oluşturma yeri sabitlenmiş olur.

### Adım 3

<center>

![plc-quick-inst-36](/img/plc-quick-inst-36.png)

</center>

Programlama metodu seçimi yapılır.

### Adım 4

<center>

![plc-quick-inst-37](/img/plc-quick-inst-37.png)

</center>

Programlanmak istenen cihaz ve genişleme birimi (eklenmesi gerekiyorsa) seçimi yapılır.

### Adım 5

<center>

![plc-quick-inst-38](/img/plc-quick-inst-38.png)

</center>

Proje konfigürasyon ayarlarında değişiklik yapılabilir.

### Adım 6

<center>

![plc-quick-inst-39](/img/plc-quick-inst-39.png)

</center>

Yeni proje oluşturulmuştur.

Sol kenar sekmesinde yer alan projeler kısmında Mdv yazısına çift tıklanır veya Mdv yazısının yanında yer alan artı ikonuna tıklanır. Açılan alt sekmede "main.mdv" dosyası yer almaktadır. Bu dosyaya çift tıklanarak sayfa açılır ve bu sayfada proje tasarımına başlanabilir.

## Cihaza Bağlantı Kurma

![plc-quick-inst-40](/img/plc-quick-inst-40.png)

Mikrodiagram’ da hazırlanan projelerin cihaza gönderilmesi ve online izleme için cihaza bağlantı kurulması gerekmektedir.

Mikrodiagram’da USB veya TCP port ile cihaza bağlantı kurulabilir.

Mikrodiagram’da aynı anda USB ve TCP porttan bağlantı kurulamaz.

### USB Bağlantısı Kurma 

USB bağlantısının kurulabilmesi için Mikrodiagram kurulu olan bilgisayara USB sürücü kurulumunun tamamlanmış olması gerekmektedir.

Windows10 ve üzeri işletim sistemi bulunan bilgisayarlarda USB sürücü kurulumuna ihtiyaç yoktur.

USB Sürücü kurulumu tamamlandıktan sonra bilgisayar ile cihaz arasına USB kablo bağlantısı yapılır.

USB kablosu seçiminde "USB A ve USB B" (yazıcı kablosu) tercih edilmelidir. USB B tarafı cihaza USB A tarafı da bilgisayara bağlanır.

Aygıt yöneticisinden bağlanan USB kablonun tanımlandığı COM port belirlenir.

<center>

![plc-quick-inst-41](/img/plc-quick-inst-41.png)

</center>

Build Mod seçeneklerinden 
![plc-quick-inst-40](/img/plc-quick-inst-40.png)
sekmesine tıklanarak bağlantı arayüzüne ulaşılır.

<center>

![plc-quick-inst-42](/img/plc-quick-inst-42.png)

</center>

"SERİ USB kullanarak bağlan" seçilir, COM port seçimi yapılır. "OK" butonu ile bağlantı kurma işlemi başlatılır.

<center>

![plc-quick-inst-43](/img/plc-quick-inst-43.png)

</center>

<center>

![plc-quick-inst-44](/img/plc-quick-inst-44.png)

</center>

"Cihaz ile bilgisayar arasında seri port üzerinden USB bağlantısı kuruldu" uyarısı alındığında ve bağlantı kurma butonu "bağlandı"
![plc-quick-inst-45](/img/plc-quick-inst-45.png)
konumuna geldiğinde USB üzerinden bağlantı kurulumu tamamlanmıştır.

### TCP Bağlantısı Kurma

Bilgisayar ile cihaz arasında TCP bağlantısının kurulabilmesi için;

TCP bağlantı kurulacak cihazda "ethernet, Wi-Fi veya GSM" portlarından en az birinin bulunması gerekmektedir.

#### Ethernet ile TCP Bağlantısı Kurma

Ethernet bağlantısının kurulabilmesi için;

- Cihazın ethernet portunun olması gerekmektedir.    

- Cihaz ile bilgisayar arasına ethernet kablosu (CAT5, CAT6) bağlantısı kurulmuş olmalıdır.

- Cihaz ve bilgisayar aynı yerel ağda ise tanımlanan IP’ler de ona göre seçilmelidir.

#### Cihaza IP Tanımlama

Cihaz IP ayarlarını USB bağlantısı ile yapmak için "mikroterminal" programı kullanılmalıdır. ("Mikroterminal kullanımı" bölümüne bakınız.)

<center>

![plc-quick-inst-46](/img/plc-quick-inst-46.png)

</center>

Mikroterminal programına Mikrodiagram "Araçlar" menüsünden ulaşılabilir.

<center>

![plc-quick-inst-47](/img/plc-quick-inst-47.png)

</center>

<center>

![plc-quick-inst-48](/img/plc-quick-inst-48.png)

</center>

Cihaz ve bilgisayar IP ayarlarının eksiksiz yapıldıktan sonra cihaz ile bilgisayar arasında "ethernet kablo bağlantı testi" için bilgisayardan cihaza "ping atma" işlemi yapılmalıdır.

<center>

![plc-quick-inst-49](/img/plc-quick-inst-49.png)

</center>

"Ping atma" işlemi için bilgisayar "komut penceresine", cihaz IP’si resimdeki gibi yazılıp "ENTER" tıklanır.

Üst resimdeki sonuç çıktısı oluşursa pingleme işlemi "başarısız" demektir. IP ayarları ve ethernet kablo bağlantıları tekrar kontrol edilmelidir.

Aşağıdaki resimdeki gibi sonuç çıktısı oluşuyorsa pingleme işlemi "başarılı" demektir.

<center>

![plc-quick-inst-50](/img/plc-quick-inst-50.png)

</center>

Mikrodiagram’dan cihaza ethernet TCP bağlantısı kurulabilir demektir.

#### Cihaza Dinleme Portu Tanımlama  

Mikrodev ürünlerinde standart dinleme portu 502 olarak tanımlanmıştır.

Standart 502 olan dinleme portunu değiştirmek için;    

Mikrodiagram’da hazırlanan projeye TCP soket bloğu eklenmelidir.           

<center>

![plc-quick-inst-51](/img/plc-quick-inst-51.png)

</center>

Soket tipi “TCP sunucu” seçilir.  

Dinleme portu tanımlanır.     

“Media type” olarak ethernet , GSM veya Wİ-Fİ seçeneklerinden biri seçilir.       

**Not:** Mikrodiagram projesinde sunucu olarak eklenen TCP soket bloğu sayısınca dinleme portu tanımlanabilir.

#### Ethernet Bağlantısı Testi

Ethernet bağlantısı için gerekli ayarlar yapıldıktan sonra TCP bağlantısı için;
![plc-quick-inst-40](/img/plc-quick-inst-40.png)
Build mod seçeneklerinde bulunan bağlantı sekmesine tıklanır.

<center>

![plc-quick-inst-52](/img/plc-quick-inst-52.png)

</center>

Açılan pencerede "Ayarlar" tıklanır.

<center>

![plc-quick-inst-53](/img/plc-quick-inst-53.png)

</center>

Açılan pencerede "Cihaz IP" bölümüne cihaz IP’si ve "port" bölümüne cihaz dinleme portu yazılır.

"TCP kullanarak bağlan" seçilir ve "OK" tıklanarak TCP bağlantısının kurulması beklenir.

<center>

![plc-quick-inst-54](/img/plc-quick-inst-54.png)

</center>

TCP bağlantısı kurulduğunda "Cihaz ve bilgisayar arasında TCP bağlantısı kuruldu" uyarısı ekranda görüntülenir.

<center>

![plc-quick-inst-55](/img/plc-quick-inst-55.png)

</center>

Bağlantı ikonu da "Bağlandı" şeklinde görüntülenir.

#### GSM ile TCP Bağlantısı Kurma 

Mikrodiagram’ da cihaza GSM ile TCP bağlantısının kurulabilmesi için;

- Cihazın GSM özellikli olması gerekmektedir.

- Cihazın GSM anteni takılı olmalıdır.

- Cihaz sinyal kalitesi (CSQ) 1-31 arasında olmalıdır.

- Cihaza data paketi (internet paketi) bulunan SIM kart takılmalıdır. (SIM kart sabit IP’li olmalıdır.)

- Cihaza, takılan SIM kartın APN tanımlaması yapılmalıdır.

- Mikrodiagram kurulu bilgisayarın “geniş alan ağına” (WAN) (internet ağı) bağlanıyor olması gerekmektedir.

#### Cihaza IP Tanımlama

Mikrodiagram’dan GSM özellikli cihaza TCP bağlantısı kurmak için "cihaz IP" bölümüne GSM IP’si yazılır

<center>

![plc-quick-inst-56](/img/plc-quick-inst-56.png)

</center>

GSM IP tanımlamanın dışındaki diğer işlemler ethernet TCP bağlantısı ile aynıdır.

## Cihaza Mikrodiagram Projesi Yükleme 

Mikrodiagram’da hazırlanan projeyi cihaza yüklemek için 2 yöntem vardır.

Mikrodiagram üzerinden TCP bağlantısı ile veya web server üzerinden proje cihaza gönderilebilir.

### USB Bağlantısı ile Proje Yükleme 

Cihaz ile bilgisayar arasında USB bağlantısı
![plc-quick-inst-57](/img/plc-quick-inst-57.png)
kurulduktan sonra "cihaza gönder" butonuna tıklanır.
![plc-quick-inst-24](/img/plc-quick-inst-24.png)
Proje dosyası derlenir ve cihaza bin dosyası yüklenmiş olur.

Proje dosya yedeğinin cihaza yüklenmesi için onay ekranı açılır. "Evet" yazısına tıklanır ise, daha sonrasında cihaz içerisinden proje dosyasının çekilmesi sağlanmış olur.

<center>

![plc-quick-inst-58](/img/plc-quick-inst-58.png)

</center>

Yapılan değişikliklerin uygulanabilmesi için cihazın yeniden başlatılması gerekmektedir. Cihazın yeniden başlatılması için onay ekranı açılır. "Evet" yazısına tıklanır.

<center>

![plc-quick-inst-59](/img/plc-quick-inst-59.png)

</center>

Mikrodiagram’da "gelen mesajlar" bölümünde aşağıdaki gibi bir çıktı oluşuyorsa Mikrodiagram projesi cihaza başarı ile yüklenmiş demektir.

Dosya yükleme işleminin %100 tamamlanmasına dikkat edilmelidir.

USB bağlantısı ile cihaza proje yükleme işlemi %100 tamamlandığında cihaz otomatik olarak yeniden başlatılır. (resetlenir.)

<center>

![plc-quick-inst-60](/img/plc-quick-inst-60.png)

</center>

### TCP Bağlantısı ile Proje Yükleme  
Cihaz ile bilgisayar arasında TCP bağlantısı
![plc-quick-inst-55](/img/plc-quick-inst-55.png)
kurulduktan sonra 
![plc-quick-inst-24](/img/plc-quick-inst-24.png)
"cihaza gönder" butonuna tıklanır.Proje dosyası derlenir ve cihaza bin dosyası yüklenmiş olur.

Proje dosya yedeğinin cihaza yüklenmesi için onay ekranı açılır. "Evet" yazısına tıklanır ise, daha sonrasında cihaz içerisinden proje dosyasının çekilmesi sağlanmış olur.

<center>

![plc-quick-inst-61](/img/plc-quick-inst-61.png)

</center>

Yapılan değişikliklerin uygulanabilmesi için cihazın yeniden başlatılması gerekmektedir. Cihazın yeniden başlatılması için onay ekranı açılır. "Evet" yazısına tıklanır.

<center>

![plc-quick-inst-62](/img/plc-quick-inst-62.png)

</center>

Mikrodiagram’da "gelen mesajlar" bölümünde aşağıdaki gibi bir çıktı oluşuyorsa Mikrodiagram projesi cihaza başarı ile yüklenmiş demektir.

Dosya yükleme işleminin %100 tamamlanmasına dikkat edilmelidir.

TCP bağlantısı ile cihaza proje yükleme işlemi %100 tamamlandığında cihaz otomatik olarak yeniden başlatılır. \(Resetlenir.\)

<center>

![plc-quick-inst-63](/img/plc-quick-inst-63.png)

</center>

## Cihazın İçerisinden Proje Dosyası Çekme

Cihaz içerisinde var olan proje Mikrodiagram programı üzerinden bilgisayara indirilebilmektedir. Bunu için aşağıdaki adımlar izlenmelidir.

Cihaz enerjili ve bilgisayar ile TCP üzerinden bağlı iken;

Mikrodiagram’da araçlar kısmında yer alan "dowload project from device" seçeneğine tıklanır.

<center>

![plc-quick-inst-64](/img/plc-quick-inst-64.png)

</center>

İndirme durum izlemesi %99 da iken projenin kaydedilmesi istenen dosya konumu seçilir.

<center>

![plc-quick-inst-65](/img/plc-quick-inst-65.png)

</center>

Buradan dosyanın kaydedilmesi gereken yer seçilir. Böylece cihaz içerisinde yer alan bin dosyası bilgisayara indirilmiş olur.
