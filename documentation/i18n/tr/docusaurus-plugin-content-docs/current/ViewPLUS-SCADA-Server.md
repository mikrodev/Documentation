---
title: ViewPLUS SCADA Sunucu
---

## Genel Bakış

Sunucu yazılımının çalışabilmesi için bir proje ile ilişkilendirilmesi gerekir. Editör menüsünden çalıştırıldığında, o anda açık olan proje sunucu tarafından kullanılır. Sunucuyu düzenleyiciden bağımsız olarak çalıştırmak için, bir klasör belirtmek ve sunucu dosyalarını bu klasöre kopyalamak için "Düzenleyici > Araçlar Seç > Sunucu Dosyaları Oluştur'u seçin. Sunucuyu başlatmak için "ServerEngine" komut dosyası kullanılır. "ServerEngine" komut dosyası görünür varsayılan davranışla aynı klasörde "Proje" adlı bir klasör için.

"Proje" klasörü, editör tarafından oluşturulan özel dosyaları içerir. Başlıcaları; "MicrodevScada.ini", "Project.zip", ".sca uzantılı proje sayfaları" ve bileşen dosyaları. Sunucu, "MikrodevScada.ini" dosyasındaki veritabanına nereden bağlanılacağı ve kayıtların nerede tutulacağı gibi bilgileri okur.

SCADA sunucusu ilk kez başlatıldığında, kullanıcıdan veritabanı bağlantı bilgilerini girmesi istenebilir. Sunucu, aşağıdaki komut satırı parametrelerini kullanarak bir projeyi farklı bir klasörde açabilir.

```
“ServerEngine –dir “C:\Users\yg\Desktop\server\projectname“ ”
```

```
-dir : Project folder
```

#### Sunucu Ana Ekranı

Sunucunun ana ekranında, genel sistem günlüklerinin görüntülenebildiği bir konsol bulunur. Bu konsol önemli sunucu değişikliklerini gösterir. Daha ayrıntılı sunucu günlükleri ayrı bir dosyaya kaydedilir. "Başlat" butonuna basıldığında sunucu saha cihazlarına bağlanmaya çalışır. Bağlantı kurulduktan sonra sunucu, istemcilerin bağlanabileceği bir bağlantı noktası açar ve gelen bağlantıları bekler. Sunucu sahadan veri okumaya başladığında proje ayarlarında belirtildiği gibi veri tabanı sunucusuna kaydeder. Alanda okunabilen verilerin anlık okumaları, etiket izleme ekranında görüntülenebilir.

<center>

![server-09](/img/server-09.png)
***<center>Figure 1: Add Password</center>***

</center>

#### Sunucu Etiketi İzleme Ekranı

Tag izleme ekranındaki anlık değerler tagID, tag name, channel name, device address gibi parametrelere göre filtrelenebilir.

```
"Değer" alanında gösterilen sayısal verilerin yanında "dced" yazısı varsa bu, cihaz ile SCADA sunucusu arasında bir bağlantı sorunu olduğunu gösterir.
```

Sürücü izleme ekranında çalışan protokol sürücüleri hakkında bilgi verilir. Bağlantı sorunları hakkında bilgi bu konsoldan alınabilir.

Alarm ekranı, sistemde oluşturulan alarmların geçmişini ve mevcut alarmları gözlemlemenizi sağlar.

## Sunucu Otomatik Başlatma

### Windows Platformu

Sunucuyu otomatik olarak başlatmak için şu adımları izleyin ("TestProject" adlı örnek bir proje için):

ViewPLUS'ın kurulum klasöründeki "ServerEngine.exe" programı için masaüstünde bir kısayol oluşturun.
Kısayol Oluşturma

Oluşturulan kısayola sağ tıklayın ve "Özellikler" seçeneğini seçin.
"Hedef" yazan alanı aşağıdaki gibi değiştirin (Dosya yolunu sisteminize göre değiştirin):

```
C:\Users\<User Name>\TestProject" -start C:\Program Files (x86)\ViewPLUS\bin\ServerEngine.exe"
```

Ardından bu kısayolu şuraya kopyalayın:

```
"C:\Users\<User Name>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"
```

Kullanıcı sisteme giriş yaptığında sunucu artık otomatik olarak başlayacaktır.

Otomatik başlatma, OperatorClient kısayolunu şuraya kopyalayarak gerçekleştirilebilir:

```
"C:\Users\<User Name>\AppData\ Roaming\Microsoft\Windows\Start Menu\Programs\Startup"
```

## E-posta Sunucusu Ayarları

Kullanıcı yöneticisinden "e-posta gönderme seçeneği" aktif olarak işaretlenen kullanıcıya alarm durumunda e-posta gönderilebilir. Bunun için sunucu üzerinde e-posta yapılandırma ayarları yapılmalıdır. Ayrıca, kullanılacak smtp sunucusu ["daha az güvenli uygulama erişimine"](https://support.google.com/accounts/answer/6010255?hl=tr) izin vermelidir. E-posta sunucusu ayarlarının aşağıdaki klasörde bulunabileceği "ServerEngine.ini" yapılandırma dosyası:

```
C:\Users\<user name>\AppData\Roaming\Mikrodev\ScadaServer\<project name>\ServerEngine.ini 
```

Bu dosyada, [SMTP] altında aşağıdaki değişkenler doğru şekilde ayarlanmalıdır:

[SMTP]

```
SMTP_user =<email username>
SMTP_pwd=<e-mail password>
SMTP_host=<smtp server address>
SMTP_port=<smtp server port>
SMTP_mailDelay=<The time (in seconds) to wait for an e-mail to be sent after an alarm condition(in seconds)>
```

## Sunucu Çalışma Zamanı Oluştur

Geliştirilen SCADA projesini ViewPLUS'ı farklı bir bilgisayara kurmadan da çalıştırabilirsiniz. Bunun için "Araçlar" menüsünden "Sunucu Dosyaları Oluştur" seçeneğini seçerek proje ve sunucu çalışması için dosyaları bir klasörde toplayabilirsiniz. Bu klasörü taşıyarak projenizi farklı sunucu makinelerinde çalıştırmanız mümkündür.

## Gelişmiş Ayarlar

log_server.txt:

```
On Windows systems, it is located in the following folder:   C:\Users\<username>\AppData\Roaming\Mikrodev\ScadaServer\<project name>  
It is the file where the detailed server logs are found
```

log_serverstarter.txt :

Sunucu izleme yazılımının günlüklerini içeren dosya

OperatorClient.ini :

ServerEngine.ini:

```
Windows sistemlerinde, aşağıdaki klasörde bulunur: 
C:\Users\<user name>\AppData\Mikrodev\ScadaServer\<project name>
```

```
[Giriş]> ServerAdr : Veritabanı adresi

[Giriş]> DbName : Veritabanı adı

[Giriş]> DbUserName : Veritabanı kullanıcı adı

[Giriş]> DbPassword : Veritabanı şifresi

[Bağlantı] > Port   : Varsayılan sunucu bağlantı noktası 560'tır. Bu parametre değiştirilerek farklı bir bağlantı noktası seçilebilir.

[Logging] > IsLogging : Veri kaydı etkinleştirilebilir/devre dışı bırakılabilir(doğru/yanlış)

[Logging] > IsLoggingDısconnections: Bağlantı hatalarının günlüğe kaydedilip kaydedilmeyeceğini seçebilirsiniz

[YEDEKLEME]> ServerMode        : Çalışma modunu belirler. Bu değer BİRİNCİL veya YEDEK olabilir. Bu mod YEDEK olarak ayarlandığında, sunucu, yedekli bir yapı oluşturmak için BİRİNCİL sunucu ile iletişim kurar.

[YEDEKLEME]> PrimaryIP  : YEDEKLEME modundaki sunucunun bağlanacağı BİRİNCİL sunucu IP adresi bu alana yazılır.

[YEDEKLEME]> PrimaryPORT  : YEDEKLEME modundaki sunucunun bağlanacağı BİRİNCİL sunucunun port numarası bu alana yazılır.

[YEDEKLEME]> Timeout : BİRİNCİL, YEDEK sunucu kapalı olduğunda sunucunun ne kadar süre etkin kalacağını belirten saniye cinsinden değerdir.
```

## Aktif Oturumlar

Sunucu ve istemci ortamında oturum açan kişilerin bilgilerini gösterir. Uzak IP, kullanıcı, oturum anahtarı, son mesaj zamanı bilgilerini içerir.

<center>

![server-01](/img/server-01.png)
***<center>Figure 1: Add Password</center>***

</center>

## Beyaz Liste

Bu, yalnızca belirtilen IP adreslerinden bağlantılara izin verecektir.

<center>

![server-02](/img/server-02.png)
***<center>Figure 1: Add Password</center>***

</center>

Beyaz liste filtrelemeyi etkinleştirin. Bir IP adresi ekle'ye tıklanarak görüntülenen pencereye IP adresi girilir.

<center>

![server-03](/img/server-03.png)
***<center>Figure 1: Add Password</center>***

</center>

## Kara Liste

Bir IP adresi ekle'ye tıklanarak görüntülenen pencereye IP adresi girilir. Girilen IP adresleri bloke edilir ve sunucuya erişim yasaktır.

<center>

![server-04](/img/server-04.png)
***<center>Figure 1: Add Password</center>***

</center>

## İstemci Ayarları

#### İstemci Otomatik Oturum Kapatmayı Etkinleştir
Etkinleştirildiğinde dakika cinsinden belirtilen süre boyunca istemci ekranında herhangi bir işlem gerçekleştirilmezse
istemci otomatik oturum kapatma işaretlenir, oturum otomatik olarak kapatılır.
#### Aynı kullanıcı için birden fazla bağlantıya izin verme
Aynı kullanıcı için birden fazla bağlantıya izin verme işaretlendiğinde, birden fazla oturum açmaya izin verilmez.
aynı kullanıcı ile istemci ekranı.
#### 3 başarısız oturum açma denemesinden sonra kullanıcı kara listesini etkinleştir
Kullanıcı kara listesini etkinleştirirken istemci ekranında kullanıcı bilgileri 3 kez yanlış girilirse
3 başarısız oturum açma girişimi işaretlendikten sonra IP adresi otomatik olarak kara listeye alınır.

<center>

![server-05](/img/server-05.png)
***<center>Figure 1: Add Password</center>***

</center>

## Paralel Yedekli Çalışma Modu

ViewPLUS SCADA yazılımı, birkaç bilgisayardan oluşan bir sunucu kümesi üzerinde "Paralel Yedekleme Modu"nda çalışabilir. Bu durumda, sunucu kesinti süresi minimuma indirilebilir. Yedekli mod sunucuları aynı yerel alan ağında olmalıdır.

### Kurulum Adımları

ViewPLUS bu modda çalışırken her iki 2 sunucunun da (PRIMARY, BACKUP) proje veritabanına ağ üzerinden erişebilmesi gerekir.
Aynı zamanda proje dosyalarının sunucu bilgisayarlarda bulunması ve güncel (birbiri ile aynı) olması gerekmektedir. Bu senkronizasyonu sağlamak için SVN gibi bir sürüm kontrol aracı kullanılabilir veya dosyalar manuel olarak taşınabilir.
Yedek ve ana sunucunun iletişim kurabilmesi için ana sunucunun bilgisayarda 51313 numaralı bağlantı noktasının açık olması gerekir. Güvenlik duvarı ayarlarında bu bağlantı noktasına izin verildiğinden emin olun.
Bir sonraki adımda, birincil sunucu (PRIMARY) ve yedekleme sunucusu (BACKUP) üzerindeki ScadaServer.ini dosyalarında aşağıdaki yapılandırma ayarlarının yapılması gerekir:
Birincil sunucu(PRIMARY):

```
[REDUNDANCY]
ServerMode=PRIMARY
PrimaryIP=192.168.2.201
PrimaryPORT=51314
Timeout=60
size=0
```

Yedekleme sunucusu(BACKUP):

```
[REDUNDANCY]
ServerMode=BACKUP
PrimaryIP=192.168.2.201
PrimaryPORT=51314
Timeout=60
size=0
```

ServerMode: Yedekleme çalışma modunu belirtir. Bu değer BİRİNCİL veya YEDEK olabilir. Bu mod YEDEK olarak ayarlandığında, sunucu, yedekli bir yapı oluşturmak için BİRİNCİL sunucu ile iletişim kurar. Birincil IP: YEDEKLEME modundaki sunucunun bağlanacağı BİRİNCİL sunucu IP adresi bu alana yazılır. PrimaryPORT: YEDEK modundaki sunucunun bağlanacağı PRİMARY sunucunun port numarası bu alana yazılır. Zaman Aşımı: BİRİNCİL sunucunun, YEDEK sunucu aktif hale gelmeden önce hizmet dışı kalacağı zamanı belirten saniye cinsinden değerdir.

Örnekte, birincil sunucunun (PRIMARY) IP adresi "192.168.2.201" sabit IP'sidir. Kurulacak sistemdeki birincil sunucunun IP adresi bu şekilde statik bir IP olmalıdır, bir DHCP sunucusundan gelen değişken IP kullanılmamalıdır. BirincilPORT'ta ayarlanan port numarası, güvenlik gereksinimlerine göre farklı şekilde ayarlanabilir. Bu durumda, her 2 konfigürasyon dosyası değiştirilerek doğru port numarası girilmelidir.

Yapılandırma işlemi tamamlandıktan sonra önce birincil, ardından yedek sunucular başlatılır. Bu andan itibaren, birincil sunucuyu izleyerek, bir kapatma durumunda yedekleme sunucusu açılır ve kapanır. Birincil sunucu tekrar aktif hale geldiğinde yedekleme sunucusu izleme moduna geçerek kendini durduracaktır.

### Projenin Yedekleme Sunucusunda Senkronize Edilmesi

Yedekleme sunucusu çalışmaya başladığında, sunucu proje klasöründeki dosyaları kullanacaktır. Bu nedenle, bu dosyalar ana sunucudaki dosyalarla senkronize edilmezse, istemcilere projenin eski bir sürümü gönderilecektir. Bunun olmasını önlemek için bir senkronizasyon mekanizması kurulmalıdır.

Proje dosyalarının daha önce anlatıldığı gibi SVN sürüm kontrol sunucusunda olduğunu varsayarak aşağıdaki gibi otomatik senkronizasyonu sağlayabilirsiniz.

SVN senkronizasyonunu tetikleyecek bir toplu komut dosyası oluşturuyoruz. Bu örnekte, dosya adı updateSvn.bat'tır. Dosyanın içeriğini sisteminizdeki dosya yollarına göre şu şekilde değiştirin:

```
CD D:\MIKRODEV\Projects\DepoProject
"C:\Program Files\TortoiseSVN\bin\svn.exe" update
```

Bu betiği her çalıştırdığımızda, proje klasörünü SVN sunucusununkiyle senkronize edecektir.

Bir sonraki adımda, bu komut dosyası belirli aralıklarla çalışacak şekilde yapılandırılacaktır. Bunun için Windows "Programlama Görevleri" aracını kullanacağız.
Aşağıdaki adımları takip ederek senkronizasyon prosedürü her 10 dakikada bir çalıştırılacaktır. Bu zaman aralığını istediğiniz gibi yapılandırabilirsiniz.

Görev Zamanlayıcısı

Yeni bir görev oluştur

Zamanlama Programlama

Zamanlama ayarlarını yapın. Bu örnekte her 10 dakikada bir çalışmayı seçiyoruz.

Komut Dosyası Seçimi

Son olarak, oluşturduğunuz .bat dosyasını zamanlayıcı ile ilişkilendirin.

Zamanlayıcıyı onaylarsanız, yedekleme sunucusu ana sunucudaki proje ile her 10 dakikada bir kendini senkronize edecektir.


Birincil sunucuda arıza, kesinti veya aşırı trafik olması durumunda, birincil sunucunun yerini alacak yedek bir sunucu uygulanabilir. Yedekleme modunda yedekleme sunucusu seçildiğinde, birincil sunucu IP'si ve yedek sunucu etkinleştirme zaman aşımı girilir.

<center>

![server-06](/img/server-06.png)
***<center>Figure 1: Add Password</center>***

</center>

## Bilgi

Bilgi sekmesi, projenin veritabanında kapladığı kapasite bilgilerini gösterir.


<center>

![server-07](/img/server-07.png)
***<center>Figure 1: Add Password</center>***

</center>

Projenin PostgreSQL veritabanındaki boyutu aşağıda gösterilmiştir.

<center>

![server-08](/img/server-08.png)
***<center>Figure 1: Add Password</center>***

</center>

