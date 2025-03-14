---
title: MDV61850 Browser Uygulama Notu
---

**Not:** Bu doküman versiyon 19, versiyon 19 üzeri ve DM serisi Mikrodev cihazlarını kapsamaktadır. Versiyon 19 öncesi ve RTU serisi cihazlar için IEC 61850 Uygulama Notu Versiyon 1.0 dokümanına başvurulmalıdır.

## IEC61850 Protokolü

IEC 61850, özellikle elektrik dağıtım sistemlerinde kullanılan bir haberleşme protokolüdür. Elektrik enerjisi altyapısındaki bileşenler arasında veri alışverişini standartlaştırmak ve kolaylaştırmak amacıyla geliştirilmiştir. Bu standart, transformatörler, kesiciler, koruma röleleri ve diğer elektrik şebekesi bileşenlerinin birbirleriyle güvenli ve hızlı bir şekilde iletişim kurmasını sağlar.

Mikrodev, IEC 61850 protokolünü birçok RTU (Remote Terminal Unit) ürününde desteklemektedir. Telediagram programlama editöründe bulunan IEC 61850 Browser aracı sayesinde gerekli konfigürasyon kolaylıkla yapılabilmektedir. Mikrodev RTU cihazı, Client olarak çalışarak IED’lerin (Intelligent Electronic Device) konfigürasyonunu sağlamak için ".scl" uzantılı dosyaları kullanır.

IEC 61850 Browser üzerinden üç farklı veri okuma yöntemi bulunmaktadır:

* **Data Nesnesi Okuma**
* **Dataset Okuma**
* **Report Okuma**

Bu seçenekler sayesinde hangi verilerin nasıl alınacağı belirlenir ve editördeki ilgili bloklarla ilişkilendirilmesi sağlanır. Yapılan ayarlar dışa aktarılarak, Telediagram programlama editöründe bulunan IEC 61850 Table Panel kısmına aktarılmalıdır. Bu panel üzerinden  IED’lerin IP adresi, port bilgisi ve bağlantı komutları tanımlanarak haberleşme tamamlanır.

<center>

![mdv61850_figure1](/img/mdv61850_figure1.png)
***<center>Şekil 1: IEC61850 – Mikrodev Cihazları</center>***

</center>

## MDV61850 Browser

MDV61850 Browser, röleden çekilen 61850 konfigürasyon (.cid, .icd, .scl) dosyalarını açarak içeriğindeki verileri görüntülemeye ve yapılandırmaya olanak tanır. Browser içinde aşağıdaki bölümler bulunmaktadır:

* **Data Nesnesi Okuma**
* **Dataset Okuma**
* **Report Okuma**

Bu bölümler, IED’den alınan bilgileri farklı kategorilere ayırarak, kullanıcıların ihtiyaç duyduğu verileri kolayca seçmesini sağlar. Mikrodev RTU ile IED arasındaki haberleşmenin sağlanabilmesi için öncelikle MDV61850 Browser üzerinden doğru konfigürasyon yapılması gerekmektedir.

### MDV61850 Browser Yeni Proje Oluşturma

MDV61850 Browser'ı açmak için Telediagram programında Araçlar menüsüne girilir ve MDV61850 Browser seçeneğine tıklanır.

<center>

![iec61850_figure1](/img/iec61850_figure1.png)
***<center>Şekil 2: MDV61850 Browser Açma</center>***

</center>

MDV61850 Browser açıldıktan sonra, Dosya menüsünden Yeni Proje seçeneğine tıklanır.

<center>

![iec61850_figure2](/img/iec61850_figure2.png)
***<center>Şekil 3: Browserda Yeni Proje Oluşturma</center>***

</center>

Açılan pencerede, röleden çekilen 61850 konfigürasyon (.cid, .icd, .scl) dosyası seçilir.

<center>

![iec61850_figure3](/img/iec61850_figure3.png)
***<center>Şekil 4: 61850 Konfigürasyon Dosyası Seçme Ekranı</center>***

</center>

Proje için bir isim belirlenir ve kaydedileceği dosya yolu seçilir. Projeyi Oluştur butonuna tıklanarak yeni proje oluşturulur.

<center>

![iec61850_figure4](/img/iec61850_figure4.png)
***<center>Şekil 5: Proje Oluşturma Ekranı</center>***

</center>

Yeni proje başarıyla oluşturulduğunda Info ekranında, röleden çekilen 61850 konfigürasyon dosyasına ait bilgiler görüntülenir. "Proje oluşturuldu" yazısı ekranda görünüyorsa, işlem başarılı şekilde tamamlanmış demektir.

<center>

![iec61850_figure5](/img/iec61850_figure5.png)
***<center>Şekil 6: Info Ekranı</center>***

</center>

Yeni proje, belirtilen isimle .sclpro uzantılı olarak kaydedilir. Bu dosya, daha sonra MDV61850 Browser üzerinden tekrar açılarak düzenlenebilir veya mevcut konfigürasyonlar görüntülenebilir.

### MDV61850 Browser ile Proje Dosyası Açma

Daha önce oluşturulan .sclpro uzantılı proje dosyasını açmak için aşağıdaki adımları takip edebilirsiniz:            
MDV61850 Browser içinde Dosya menüsünden Dosya Aç seçeneğine tıklayın.        
Alternatif olarak, Son Projeler sekmesinden açılacak proje seçilebilir.         

<center>

![mdv61850_figure2](/img/mdv61850_figure2.png)
***<center>Şekil 7: Kaydedilen Proje Dosyasını Açma</center>***

</center>

### MDV61850 Browser Arayüzü Seçenekleri

.sclpro dosyası browser üzerinde açıldıktan sonra şekil 8 de yer alan ekran karşımıza çıkmaktadır.

<center>

![mdv61850_figure3](/img/mdv61850_figure3.png)
***<center>Şekil 8: MDV61850 Browser Arayüzü</center>***

</center>

#### Dosya Menüsü

MDV61850 Browser'ın Dosya menüsünde aşağıdaki seçenekler bulunmaktadır:

* **Yeni Proje**: Yeni bir .sclpro dosyası oluşturmak için kullanılır.     
* **Proje Aç**: Daha önce oluşturulmuş .sclpro dosyalarını açmak için kullanılır.          
* **Son Projeler**: Daha önce açılan projelerin listesi görüntülenir ve buradan seçim yapılabilir.           
* **Projeyi Kapat**: Açık olan projeyi kapatır.          
* **Projeyi Kaydet**: Yapılan değişiklikleri kaydetmek için kullanılır.      
* **Export to Excel**: MDV61850 Browser'da yapılan konfigürasyonların Telediagram'daki IEC61850 Table bölümüne aktarılabilmesi için Excel formatında dışa aktarım yapılmasını sağlar.         
* **Import from Excel**: Telediagram'da konfigüre edilen IEC 61850 Table bölümünden alınan Excel dosyasının MDV61850 Browser’a içe aktarılması için kullanılır.        
* **Recent Excel Imports**: Son içe aktarılan Excel dosyalarının listesi görüntülenir ve buradan seçim yapılabilir.

<center>

![mdv61850_figure4](/img/mdv61850_figure4.png)
***<center>Şekil 9: Dosya Menüsü</center>***

</center>

#### Yardım Menüsü

Yardım menüsünde yer alan hakkında seçeneği MDV61850 Browser’ın sürüm bilgilerini görüntülemek için kullanılır.

<center>

![mdv61850_figure5](/img/mdv61850_figure5.png)
***<center>Şekil 10: Hakkında Seçeneği</center>***

</center>

#### Dosya Kısayolları

Dosya ve Yardım menülerinin altında, sık kullanılan işlemlere hızlı erişim sağlayan dosya kısayolları bulunmaktadır. Bu kısayollar sayesinde aşağıdaki işlemler hızlıca gerçekleştirilebilir:

* **Yeni Proje Oluştur**: Yeni bir .sclpro dosyası oluşturur.    
* **Proje Aç**: Daha önce oluşturulmuş .sclpro uzantılı projeleri açar.      
* **Projeyi Kaydet**: Açık olan proje üzerindeki değişiklikleri kaydeder.       
* **Projeyi Kapat**: Açık olan projeyi kapatır.       
* **Konfigürasyonu Excel’e Aktar**: Mevcut proje konfigürasyonlarını Excel formatında dışa aktarmak için kullanılır.

<center>

![mdv61850_figure6](/img/mdv61850_figure6.png)
***<center>Şekil 11: Dosya Kısayolları</center>***

</center>

#### Hide Top Panel – Show Top Panel Seçeneği

Hide Top Panel – Show Top Panel seçeneği, MDV61850 Browser arayüzündeki üst paneli gizleme veya gösterme işlevine sahiptir.

Bu panel üzerinden rölenin IP ve port bilgisi girilerek, röleye bağlantı kurulur. Rölenin içerisinde yer alan data nesne, data sets ve raporlar anlık olarak görüntülenir.

Paneli gizleyerek çalışma alanını genişletebilir veya tekrar göstererek cihaz bağlantı ayarlarına erişebilirsiniz.

<center>

![mdv61850_figure7](/img/mdv61850_figure7.png)
***<center>Şekil 12: Hide Top Panel-Show Top Panel Seçeneği</center>***

</center>

### MDV61850 Browser Arayüzü Bölümleri

Seçilen .sclpro dosyası yüklendikten sonra, Browser arayüzü Variable Engineering ve RTU/PLC Integration olmak üzere iki ana bölüme ayrılır. Bu iki bölüm, IEC 61850 protokolüyle IED'ler ve Mikrodev RTU cihazları arasındaki haberleşmenin etkin bir şekilde yapılandırılmasını sağlar.

### Variable Engineering

Bu bölümde, projede kullanılan röleye ait 61850 konfigürasyon dosyasına ait bilgiler yer alır. Röle haberleşme bilgileri, data nesneleri, data setler ve raporlar görüntülenebilir. Kullanıcı, hangi verilerin okunacağını ve nasıl yapılandırılacağını bu bölümde belirleyebilir.

SCL Model yazısının yanında yer alan Con, DO, DS ve RP butonları, kullanıcıların röle haberleşme ve veri yönetim menülerine hızlıca erişmesini sağlar:

*   **Con (Connection)**: Rölenin haberleşme ayarlarına hızlı erişim sağlar.       
*   **DO (Data Objects)**: Data nesneleri (data objects) menüsüne yönlendirir.       
*   **DS (Data Sets)**: Data setlerini görüntüleme ve yapılandırma menüsüne erişim sağlar.       
*   **RP (Reports)**: Data raporları (reports) bölümüne geçiş yapmayı sağlar.    

Ekranın sağ tarafında yer alan Data Nesne Tablosu, Data Setler ve Raporlar bölümleri, üst panelde bulunan butonlar yardımıyla gizlenebilir veya görüntülenebilir.

*   **Data Objects**: Data nesneleri tablosunu açar veya gizler.         
*   **Data Sets**: Data setler tablosunu açar veya gizler.        
*   **Reports**: Data raporları tablosunu açar veya gizler.         

<center>

![mdv61850_figure8](/img/mdv61850_figure8.png)
***<center>Şekil 13: Variable Engineering Bölümü</center>***

</center>

### Bağlantı (Connection) Kısmı

Bağlantı kısmında röleye ait 61850 konfigürasyon dosyasında yer alan röle ile ilgili bağlantı bilgileri görüntülenir.

<center>

![mdv61850_figure9](/img/mdv61850_figure9.png)
***<center>Şekil 14: Röle Bağlantı Ayarları</center>***

</center>

MDV61850 Browser'da röle bağlantı ve konfigürasyon ayarları aşağıdaki parametreler üzerinden yönetilir:

*   **Id**: Röle ID’si    
*   **IED Name**: Rölenin ismi, istenirse bu kısım değiştirilebilir.   
*   **IP Adresi**: Rölenin IP adresi, istenirse bu kısım değiştirilebilir.          
*   **Port**: Rölenin haberleşme port numarası, istenirse bu kısım değiştirilebilir.           
*   **Interface**: Mikrodev RTU’nun ethernet port bilgisi                
*   **Connection Enable Signal**: Röle ile RTU arasındaki bağlantıyı kontrol etmek için kullanılan sinyaldir. Telediagram üzerinden ilişkilendirilecek bir blok seçilir.                      
Telediagram’da bu etikete tetik sinyali (1 değeri) uygulandığında, RTU röleye bağlanır ve haberleşme başlatılır.           
Bağlantıyı kesmek için bu sinyal 0 yapılmalıdır.        
*   **Dev Status Signal**: Bağlantı durumunu gösteren bir sinyaldir ve Telediagram üzerinden ilişkilendirilecek uygun bir blok ile atanmalıdır. Bu sinyalin alabileceği değerler ve açıklamaları aşağıdaki gibidir:

    * 0 CLOSED Bağlantı kapalı.
    * 1 CONNECTING  Bağlanıyor.
    * 2 CONNECTED Bağlandı.           
    * 3 CLOSING Bağlantı kapatılıyor.
    * 15 NAMEPLATE_SEND Nameplate bilgisi gönderiliyor.
    * 16 NAMEPLATE_WAIT Nameplate bilgisi için bekleniyor.
    * 17 NAMEPLATE_FAILED Nameplate bilgisi alınamadı (hata oluştu).            

**Not:** CONNECTED (2) değeri alındığında, RTU ve röle arasındaki bağlantı başarılı bir şekilde sağlanmıştır.       
CLOSED (0) veya CLOSING (3) değerleri alındığında, bağlantının kapalı veya kapanma aşamasında olduğu anlaşılır.          
NAMEPLATE ile ilgili değerler (15-17), bağlantı sürecinde röle üzerindeki cihaz bilgileri alınırken kullanılır.         
*   **NamPlt.configRev**:  Röleye ait 61850 konfigürasyon dosyanın konfigürasyon versiyonu hakkında bilgi verir.
*   **Nam.Plt.check**: Konfigürasyon versiyon kontrolünü aktif eder. Kontrol yapılması isteniyorsa bu kısma 1 değeri yazılır. Eğer nameplate kontrolü etkinleştirilmişse, nameplate uyumsuzluğu ilgili sunucunun başlatma hata (init error) durumuna alınmasına neden olur ve bu sunucu için hiçbir servis çalıştırılmaz.              
*   **ReportSets**: Belirli verilerin periyodik veya tetiklenmiş olaylar doğrultusunda raporlanmasını sağlar. MDV61850 Browser’da, rapor setleri Telediagram üzerinden yönetilir ve belirli veri nesneleri ile ilişkilendirilir.         
*   **CltTestFlag Signal**: Client (RTU) tarafından test modunda olup olmadığını belirlemek için kullanılır. Test modu, genellikle kontrol komutlarını uygulamadan önce sistemin doğru çalıştığını test etmek için kullanılır.         
*   **CltSyncCheck Signal**: Saat senkronizasyonu (Time Sync) ile ilgili doğrulamalar yapmak için kullanılır. Eğer senkronizasyon başarısız olursa, ClockNotSynchronized durumu oluşturulabilir. NTP veya diğer senkronizasyon mekanizmaları kullanılarak saat doğrulaması yapılır.               
*   **CltInterlockCheck Signal**: Client tarafında kilitleme kontrolü (interlocking check) yapmak için kullanılır. Bir RTU veya SCADA sistemi üzerinden kontrol komutu gönderilmeden önce, ilgili kilitleme koşullarının sağlanıp sağlanmadığını kontrol eder.          
Eğer kilitleme devredeyse, komut yürütülmez ve hata kodu döndürülür.
*   **Control Orginator Category**: Kontrol eden kişinin yetki seviyesi. Her kategori, belirli bir kontrol yetkisine sahiptir ve hangi seviyenin kullanılacağı, sistem gereksinimlerine bağlıdır. Yetki seviyesi ve açıklamaları aşağıdaki gibidir.

    * 1: Bara kontrol seviyesi (Bay Control)
    * 2: İstasyon kontrol seviyesi (Station Control)
    * 3: Uzaktan kontrol (Remote Control)
    * 4: Otomatik bara kontrolü (Automatic Bay)
    * 5: Otomatik istasyon kontrolü (Automatic Station)
    * 6: Otomatik uzaktan kontrol (Automatic Remote)
    * 7: Bakım işlemleri için kullanılır (Maintenance)
    * 8: Süreç kontrolü (Process)

*   **Control Orginator Identification**: Kontrol eden kişinin kimlik bilgileri.             
*   **Time Sync Indication Signal**: Bu sinyal, zaman senkronizasyonu durumunu gösterir. Eğer senkronizasyon başarısız olursa, ClockNotSynchronized sinyali (1) yükseltilir. MDV61850 Browser, NTP gibi yöntemlerle senkronizasyon yapar. Senkronizasyon başarılı olduğunda, bu sinyal sıfırlanır.              

### Data Nesnesi Kısmı

Browserda açılan röleye ait 61850 konfigürasyon dosyasının içinde yer alan data nesneleri bu kısımda görüntülenir.

<center>

![mdv61850_figure10](/img/mdv61850_figure10.png)
***<center>Şekil 15: Data Nesnesi Kısmı</center>***

</center>

Görüntülenmek istenen dosya çift tıklayarak açılır ve sağ tarafta yer alan data nesneleri tablosunda görüntülenir.

<center>

![mdv61850_figure11](/img/mdv61850_figure11.png)
***<center>Şekil 16: Data Nesnesi Seçme</center>***

</center>

### Data Nesne Tablosu

MDV61850 Browser'da seçilen data nesneleri, Data Nesne Tablosu içinde görüntülenir. Kullanıcı, girdiye izin verilen sütunlar aracılığıyla, Telediagram projesinde ilişkilendirilmek istenen blokları seçebilir.

*   **Name**: Röleye ait 61850 konfigürasyon dosyasında yer alan data nesnesinin adı. Seçime göre otomatik gelir.          
*   **Function**: Röleye ait IEC 61850 konfigürasyon dosyasında (CID/SCL) tanımlanan data nesnesinin fonksiyonunu belirtir. Bu alan, MDV61850 Browser tarafından otomatik olarak doldurulur ve aşağıdaki fonksiyon türlerinden biri olabilir:

    * **ST (Status)**: Durum bilgisi içeren data nesneleri. Röle tarafından sağlanan anlık durum verilerini temsil eder.         
    * **CF (Configuration)**: Konfigürasyon değişkenleri içeren data nesneleri. Rölede yapılandırma ayarlarını ifade eder.             
    * **DC (Direct Control)**: Doğrudan kontrol komutları içeren data nesneleri. Rölede doğrudan eylemleri tetiklemek için kullanılır.          
    * **CO (Command)**: Komut gönderme amaçlı kullanılan data nesneleri. Bu nesneler, RTU veya SCADA sistemleri tarafından röleye kontrol komutları göndermek için kullanılır.          
    * **MX (Measured Value)**: Ölçülen değerleri içeren data nesneleri. Akım, gerilim, güç gibi analog ölçümleri içerir.

**Not:** ST ve MX nesneleri genellikle sadece okunabilir (Read-Only) veri içerirken, DC ve CO nesneleri yazılabilir (Writable) veya komut içerebilir.

*   **MMS_Type**: Değişken tipi. Bu kısım projede seçilen data nesnesine göre otomatik güncellenir. Telediagramda ilişkilendirilecek blokların değişken tipi, burada belirlenen MMS tipine göre atanır.  

<center>

![mdv61850_figure23](/img/mdv61850_figure23.png)

</center>
<center>

![mdv61850_figure24](/img/mdv61850_figure24.png)

</center>

*   **Read Trig Signal**: Data nesnesini okumak için Telediagram’da ilişkilendirilecek tetik bloğu seçilir.            
*   **Write Trig Signal**: Data nesnesine komut göndermek için Telediagram’da ilişkilendirilecek tetik bloğu seçilir.        
*   **Status Signal**: Okuma veya yazma işlemlerinin durumunu takip etmek için kullanılır. Telediagram üzerinden ilişkilendirilecek blok seçilir. Bu sinyalin alabileceği değerler ve açıklamaları aşağıdaki gibidir:

    * 0: WAITING/FAIL, İstek yanıtı bekleniyor veya işlem başarısız oldu.            
    * 1: OK, İstek başarıyla tamamlandı.        
    * 2: MISMATCH, Uyumsuzluk nedeniyle işlem başarısız oldu.     
    * 3: TIMEOUT, Zaman aşımı nedeniyle işlem başarısız oldu.     
    * 4: FAILED, Dahili hata nedeniyle işlem başarısız oldu.         
    * 100 ve üzeri: Kütüphane hatası nedeniyle işlem başarısız oldu. (Hata kodu: durum değeri + 100 olarak hesaplanabilir.)       

**Not:** Status Signal değeri "1" (OK) olduğunda, okuma veya yazma işlemi başarıyla tamamlanmıştır. Değer "0" (WAITING/FAIL) olduğunda, işlem başarısız olmuş veya yanıt beklenmektedir.     

**Not:** Status Signal 100 ve üzeri değer olduğunda hata kodu için CtrlErrCode Signal yazan değer kontrol edilmelidir.CtrlErrCode da yazan Kütüphane Hataları ve açıklamaları aşağıdaki gibidir. Burada yazan
hata kodlarına +100 değeri eklenerek bakılmalıdır. Örneğin IED_ERROR_NOT_CONNECTED kodu için okunacak değer 100+1 den 101 değeridir.

    * 0  IED_ERROR_OK: Hata yok, servis isteği başarıyla tamamlandı.                  
    * 1  IED_ERROR_NOT_CONNECTED: İstemci bağlı değil, servis isteği gerçekleştirilemiyor.             
    * 2  IED_ERROR_ALREADY_CONNECTED: Bağlantı isteği başarısız, çünkü istemci zaten bağlı.          
    * 3  IED_ERROR_CONNECTION_LOST: Bağlantı kaybedildi, servis isteği gerçekleştirilemiyor.             
    * 4  IED_ERROR_SERVICE_NOT_SUPPORTED: İstemci veya sunucu tarafından desteklenmeyen servis veya parametre kullanılıyor.                   
    * 5  IED_ERROR_CONNECTION_REJECTED: Sunucu bağlantı isteğini reddetti.               
    * 6  IED_ERROR_OUTSTANDING_CALL_LIMIT_REACHED: Maksimum eşzamanlı çağrı limiti aşıldı, yeni istek gönderilemiyor.                             
    * 10  IED_ERROR_USER_PROVIDED_INVALID_ARGUMENT: API fonksiyonuna geçersiz bir argüman ile çağrı yapıldı.                  
    * 11  IED_ERROR_ENABLE_REPORT_FAILED_DATASET_MISMATCH: Rapor etkinleştirme başarısız oldu, dataset uyuşmazlığı var.         
    * 12  IED_ERROR_OBJECT_REFERENCE_INVALID: Nesne referansı geçersiz.           
    * 13  IED_ERROR_UNEXPECTED_VALUE_RECEIVED: Beklenmeyen tipte nesne alındı.           
    * 20  IED_ERROR_TIMEOUT: Sunucu ile iletişim başarısız oldu, zaman aşımı meydana geldi.       
    * 21  IED_ERROR_ACCESS_DENIED: Sunucu, nesneye veya servise erişimi reddetti.                
    * 22  IED_ERROR_OBJECT_DOES_NOT_EXIST: Sunucu, talep edilen nesnenin mevcut olmadığını bildirdi.               
    * 23  IED_ERROR_OBJECT_EXISTS: Sunucu, talep edilen nesnenin zaten mevcut olduğunu bildirdi.              
    * 24  IED_ERROR_OBJECT_ACCESS_UNSUPPORTED: Sunucu, talep edilen erişim yöntemini desteklemiyor.           
    * 25  IED_ERROR_TYPE_INCONSISTENT: Sunucu, talep edilen nesnenin beklenen tipte olmadığını bildirdi.      
    * 26  IED_ERROR_TEMPORARILY_UNAVAILABLE: Nesne veya servis geçici olarak kullanılamaz.         
    * 27  IED_ERROR_OBJECT_UNDEFINED: Talep edilen nesne sunucuda tanımlanmamış.            
    * 28  IED_ERROR_INVALID_ADDRESS: Geçersiz adres hatası.           
    * 29  IED_ERROR_HARDWARE_FAULT: Donanım hatası nedeniyle servis başarısız oldu.                
    * 30  IED_ERROR_TYPE_UNSUPPORTED: Sunucu, talep edilen veri türünü desteklemiyor.           
    * 31  IED_ERROR_OBJECT_ATTRIBUTE_INCONSISTENT: Sunucu, sağlanan nesne özelliklerinin tutarsız olduğunu bildirdi.         
    * 32  IED_ERROR_OBJECT_VALUE_INVALID: Sunucu, sağlanan nesne değerinin geçersiz olduğunu bildirdi.             
    * 33  IED_ERROR_OBJECT_INVALIDATED: Nesne geçersiz hale getirildi.         
    * 34  IED_ERROR_MALFORMED_MESSAGE: Sunucudan alınan mesaj geçersiz biçimde.         
    * 98  IED_ERROR_SERVICE_NOT_IMPLEMENTED: Servis sunucu tarafından uygulanmamış.         
    * 99  IED_ERROR_UNKNOWN: Bilinmeyen hata oluştu.          

*   **CtlModel**: Kontrol modunu belirten parametredir ve aşağıdaki kontrol modlarından biri seçilebilir:

    *   DO (Direct-Operate): Normal güvenlik önlemleriyle doğrudan kontrol sağlar.     
    *   SBO (Select-Before-Operate): Normal güvenlik önlemleriyle seç & çalıştır mantığıyla kontrol sağlar.      
    *   DOes (Direct-Operate with Enhanced Security): Gelişmiş güvenlik önlemleriyle doğrudan kontrol sağlar.        
    *   SBOes (Select-Before-Operate with Enhanced Security): Gelişmiş güvenlik önlemleriyle seç & çalıştır mantığıyla kontrol sağlar.     

*   **Data Signal**: Röle üzerindeki ilgili data nesnesinin değeri bu blok üzerinden okunur. Telediagram üzerinden ilişkilendirilecek blok seçilir.             
*   **Time Activated Ctrl**: Kontrol komutlarının belirli bir zamanlama ile gerçekleştirilmesini sağlar. Örneğin, belirli bir saatte bir devre kesicinin açılması veya kapatılması gibi zamanlanmış işlemler gerçekleştirilir.            
*   **Enh CtrlCmdTerm Signal**: Gelişmiş kontrol komutlarının sonlandırılmasını sağlamak için kullanılır. Komut işlemi tamamlandığında, bu sinyal devreye girer. Eğer kontrol komutu başarısız olursa, hata kodları CtrlErrCode Signal üzerinden takip edilebilir.           
*   **CtrlErrCode Signal**: Kontrol komutlarının başarısız olması durumunda döndürülen hata nedenlerini açıklar. Telediagram üzerinden ilişkilendirilecek blok seçilir. Bu sinyalin alabileceği değerler ve açıklamaları aşağıdaki gibidir:   

    * 0  ADD_CAUSE_UNKNOWN  Bilinmeyen hata.       
    * 1  ADD_CAUSE_NOT_SUPPORTED  Desteklenmeyen işlem.          
    * 2  ADD_CAUSE_BLOCKED_BY_SWITCHING_HIERARCHY Anahtarlama hiyerarşisi tarafından engellendi.          
    * 3  ADD_CAUSE_SELECT_FAILED    Seçim başarısız oldu.        
    * 4  ADD_CAUSE_INVALID_POSITION  Geçersiz pozisyon.         
    * 5  ADD_CAUSE_POSITION_REACHED  Pozisyon zaten ulaşılmış durumda.           
    * 6  ADD_CAUSE_PARAMETER_CHANGE_IN_EXECUTION  Parametre değişikliği yürütme sırasında gerçekleşti.            
    * 7  ADD_CAUSE_STEP_LIMIT   Adım sınırına ulaşıldı.      
    * 8  ADD_CAUSE_BLOCKED_BY_MODE  Mod tarafından engellendi.        
    * 9  ADD_CAUSE_BLOCKED_BY_PROCESS  Süreç tarafından engellendi.         
    * 10 ADD_CAUSE_BLOCKED_BY_INTERLOCKING  Kilitleme mekanizması tarafından engellendi.           
    * 11 ADD_CAUSE_BLOCKED_BY_SYNCHROCHECK  Senkron kontrolü tarafından engellendi.             
    * 12 ADD_CAUSE_COMMAND_ALREADY_IN_EXECUTION  Komut zaten yürütülüyor.             
    * 13 ADD_CAUSE_BLOCKED_BY_HEALTH  Sağlık durumu nedeniyle engellendi.           
    * 14 ADD_CAUSE_1_OF_N_CONTROL  1/N kontrol mekanizması nedeniyle engellendi.               
    * 15 ADD_CAUSE_ABORTION_BY_CANCEL  İşlem iptal edildi.             
    * 16 ADD_CAUSE_TIME_LIMIT_OVER  Zaman sınırı aşıldı.                 
    * 17 ADD_CAUSE_ABORTION_BY_TRIP  Trip nedeniyle işlem iptal edildi.            
    * 18 ADD_CAUSE_OBJECT_NOT_SELECTED  Nesne seçilmedi.             
    * 19 ADD_CAUSE_OBJECT_ALREADY_SELECTED  Nesne zaten seçili durumda.             
    * 20 ADD_CAUSE_NO_ACCESS_AUTHORITY  Yetkisiz erişim.               
    * 21 ADD_CAUSE_ENDED_WITH_OVERSHOOT  Fazla hareket nedeniyle işlem tamamlandı.         
    * 22 ADD_CAUSE_ABORTION_DUE_TO_DEVIATION  Sapma nedeniyle işlem iptal edildi.              
    * 23 ADD_CAUSE_ABORTION_BY_COMMUNICATION_LOSS  İletişim kaybı nedeniyle işlem iptal edildi.              
    * 24 ADD_CAUSE_ABORTION_BY_COMMAND  Komut tarafından işlem iptal edildi.            
    * 25 ADD_CAUSE_NONE  Hata yok.          
    * 26 ADD_CAUSE_INCONSISTENT_PARAMETERS  Tutarsız parametreler nedeniyle işlem başarısız oldu.             
    * 27 ADD_CAUSE_LOCKED_BY_OTHER_CLIENT  Başka bir istemci tarafından kilitlendi.                

    Özel 61850 Hata Kodları:    
    * 100  E_61850CONTROL_ERROR_MODELMISMATCH  Model uyuşmazlığı hatası.       
    * 101  E_61850CONTROL_ERROR_INITIALIZATION  Başlatma hatası.         
    * 102  E_61850CONTROL_ERROR_TIMEOUT  Zaman aşımı hatası.        

*   **Selection Type**: Kontrol işlemlerinde kullanılacak seçim yöntemini belirtir.
    With Value: Seçim işlemi sırasında hedef nesneye bir değer atanarak çalıştırılır.         
    Without Value: Seçim işlemi sadece nesne belirleyerek yapılır, değer belirleme sonraki adımda gerçekleştirilir.             
    Select-Before-Operate (SBO) mekanizmasının nasıl uygulanacağını tanımlar.       
*   **Command Type Signal**: IEC 61850 kontrol komutlarının türünü belirlemek için kullanılan bir sinyaldir. Bu sinyal, RTU veya SCADA sisteminin bir kontrol komutunu nasıl göndereceğini belirlemesini sağlar.

### Data Set Kısmı

Browserda açılan röleye ait 61850 konfigürasyon dosyasının içinde yer alan data setleri bu kısımda görüntülenir.


<center>

![mdv61850_figure14](/img/mdv61850_figure14.png)
***<center>Şekil 17: Data Set Seçme</center>***

</center>

Görüntülenmek istenen data set dosyasına çift tıklanarak açılabilir.

Açılan data setler, sağ tarafta yer alan Data Setler Tablosu içinde listelenir.

<center>

![mdv61850_figure15](/img/mdv61850_figure15.png)
***<center>Şekil 18: Data Set Kısmı</center>***

</center>

**Not**: Data set okuma işleminin, data nesnesi okuma işleminden farkı; her bir data attribute için ayrı ayrı status signal, trig signal, rx time signal, rx count signal ve data set from report flag signal tanımlamaya gerek olmamasıdır.

### Data Sets Tablosu

MDV61850 Browser'da seçilen data setleri, Data Sets Tablosu içinde görüntülenir.         
Kullanıcı, girdiye izin verilen sütunlar aracılığıyla, Telediagram projesinde ilişkilendirilmek istenen blokları seçebilir.
  

*   **Name**: Röleye ait 61850 konfigürasyon dosyasında yer alan data nesnesinin adı. Seçime göre otomatik gelir.          
*   **Status Signal**: Okuma işleminin durumunu takip etmek için kullanılır. Telediagram üzerinden ilişkilendirilecek blok seçilir. Bu sinyalin alabileceği değerler ve açıklamaları aşağıdaki gibidir:

    *   0: WAITING/FAIL, İstek yanıtı bekleniyor veya işlem başarısız oldu.
    *   1: OK, İstek başarıyla tamamlandı.          
    *   2: MISMATCH, Uyumsuzluk nedeniyle işlem başarısız oldu.           
    *   3: TIMEOUT, Zaman aşımı nedeniyle işlem başarısız oldu.          
    *   4: FAILED, Dahili hata nedeniyle işlem başarısız oldu.         
    *   100 ve üzeri: Kütüphane hatası nedeniyle işlem başarısız oldu. (Hata kodu: durum değeri – 100 olarak hesaplanabilir.)

*   **Trig Signal**: Data setleri okumak için Telediagram’da ilişkilendirilecek tetik bloğu seçilir.                   
*   **Rx Time Signal**: Veri alım zamanını göstermek için kullanılır.          
*   **Rx Count Signal**: Data set alım sayısını takip etmek için kullanılır.         
*   **Result Signal**: Röle üzerindeki ilgili data sets değeri bu blok üzerinden okunur. Telediagram üzerinden ilişkilendirilecek blok seçilir.              
*   **MMS Type**: Değişken tipi. Bu kısım projede seçilen data nesnesine göre otomatik güncellenir. Daha ayrıntılı açıklamalar ve örnekler için lütfen dokümanın 2.4.1.2.1 başlığında yer alan MMS Type bölümüne bakınız.             
*   **DatasetFromReportFlag Signal**: Data setin raporlama mekanizması üzerinden alınıp alınmadığını gösterir.          


### Raporlar Kısmı

IEC 61850 protokolünde raporlar, data setleri tetik vermeden okumak için kullanılır. Raporları başarılı şekilde okuyabilmek için MDV61850 Browser’da hem data set hem de ilgili raporların seçilmesi gerekmektedir.

Browserda açılan röleye ait 61850 konfigürasyon dosyasının içinde yer alan raporlar bu kısımda görüntülenir.       

<center>

![mdv61850_figure16](/img/mdv61850_figure16.png)
***<center>Şekil 19: Raporlar Kısmı</center>***

</center>

Şekil 19'da gösterildiği gibi, raporlar listelenir ve görüntülenmek istenen rapor dosyasına çift tıklanarak açılabilir.

Açılan raporlar, sağ tarafta yer alan Reports Tablosu içinde listelenir (Şekil 20).

<center>

![mdv61850_figure17](/img/mdv61850_figure17.png)
***<center>Şekil 20: Raporlar Tablosu</center>***

</center>

**Not**: .br uzantısı ile biten raporlar buffered report olup, olayları (değişiklikleri) bir bellekte geçici olarak saklar ve alıcı bağlantı kurduğunda iletir.             
.ur uzantısı ile biten raporlar unbuffered report olup, röledeki olayları anında ve tek seferde iletir.           
MDV61850 Browser'da seçilen raporlar, Raporlar Tablosu içinde görüntülenir. Kullanıcı, girdiye izin verilen sütunlar aracılığıyla, Telediagram projesinde ilişkilendirilmek istenen blokları seçebilir.

*   **Report Ref Path**: Seçilen raporun dosya uzantısıdır.         
*   **Data Set Ref Path**: İlgili raporun bağlı olduğu data set dosya uzantısıdır.           
*   **Trigger Type**: Raporun hangi tetikleme koşullarında çalışacağını belirler. Trigger Type sütununa çift tıklanıldığında Şekil 21 de yer alan pop up ekranı açılmaktadır.    

    * TRG_OPT_DATA_CHANGED: Veri değişiminde gönder.        
    * TRG_OPT_QUALITY_CHANGED: Quality değişiminde gönder.   
    * TRG_OPT_DATA_UPDATE: Veri güncellendiğinde gönder.       
    * TRG_OPT_INTEGRITY: Periyodik olarak gönder.           
    * TRG_OPT_GI: Genel sorgu isteği geldiğinde gönder.

<center>

![mdv61850_figure18](/img/mdv61850_figure18.png)
***<center>Şekil 21: Trigger Type Seçim Ekranı</center>***

</center>

*   **Not**: Aşağıdaki tablo, IEC 61850 protokolündeki Quality (Kalite) değerlerinin MDV61850 Browser içindeki RTU (Client) sistemine nasıl eşlendiğini gösterir. RTU sisteminde her kalite durumu belirli bir tam sayı değeri ile ifade edilir.


<center>

![mdv61850_figure19](/img/mdv61850_figure19.png)

</center>

*   **IsIndexed**: Raporların indeksli olup olmadığını belirler.                 
    *   Indexed raporlar (Buffered Reports – BRCB), geçmiş olayları saklar ve belirli bir sıra ile işler.       
    *   Unindexed raporlar (Unbuffered Reports – URCB), olayları sadece anlık olarak iletir.         
    *   Eğer IsIndexed değeri 1 ise, Buffered Report kullanılır.              
*   **MaxIndex**: Indeksli raporların maksimum indeks numarasını belirler. Buffered Reports (BRCB) kullanıldığında tutulan maksimum olay sayısını belirler. Eğer indeks değeri maksimuma ulaşırsa, eski kayıtlar silinir. Örneğin, 1000 olaylık bir tampon belleği varsa, en eski olay silinerek yeni gelen olay kaydedilir.         
*   **Conf Rev Check**: Konfigürasyon revizyon kontrolünü etkinleştirir.         
*   **Conf Rev Number**: Konfigürasyon revizyon numarasını belirtir.           
*   **IntPeriod**: Raporun iletilme periyodunu belirler. Eğer veri periyodik olarak (trigger type TRG\_OPT\_INTEGRITY seçiliyse) gönderilecekse, Int Periyod sütununa periyodik gönderme süresi (ms cinsinden) girilmelidir.          
*   **Buffering Time**: Bu parametre, buffered raporların verileri ne kadar süreyle saklayacağını belirler. BRCB kullanılıyorsa, olaylar belirli bir süre boyunca bellekte tutulur. Buffering Time artırılırsa, eski olayları daha uzun süre saklar. Eğer buffer taşarsa, Purge Buffer Signal ile manuel temizlenebilir.        
*   **Opt Fields**: IEC 61850 raporlarının hangi ek alanları içereceğini belirler. Report Time Stamp, ConfRev.         
*   **Enable Signal**: Raporun etkin olup olmadığını belirlemek için Telediagram üzerinden ilişkilendirilecek blok seçilir.            
*   **Status Signal**: Raporun durumunu takip etmek için Telediagram üzerinden ilişkilendirilecek blok seçilir. Bu sinyalin alabileceği değerler ve açıklamaları aşağıdaki gibidir:

    *   INIT=0: Enable Signal’i bekleniyor.        
    *   REGISTER=1: Rapor etkinleştirilmeye başlanıyor.       
    *   WAITRCBVALUES=2: Rapor RCB okuma isteği gönderildi, yanıt bekleniyor.      
    *   HASRCBVALUES=3: Rapor RCB okundu, etkinleştirme işlemi devam ediyor.     
    *   WAITSETRCBVALUES=4: Rapor RCB güncellendi, sonuç bekleniyor.    
    *   INSTALLED=5: Rapor kuruldu, rapor alımına hazır.      
    *   ACTIVE=6: Rapor kuruldu ve en az bir rapor alındı.      
    *   FAILEDINIT=7: Rapor etkinleştirme başarısız oldu. 60 saniye sonra cihaz yeniden deneyecek.        
    *   FORCETOCLOSE=8: Rapor devre dışı bırakma isteği alındı, devre dışı bırakma başlatıldı.      
    *   FORCETOCLOSE_WAITDISABLE=9: Devre dışı bırakma işlemi devam ediyor.         
    *   FORCETOCLOSE_UNRESERVE=10: Devre dışı bırakma için rezervasyon kaldırılıyor.    
    *   FORCETOCLOSE_WAITUNRESERVE=11: Devre dışı bırakma işlemi tamamlanıyor.   


    **Not**: ACTIVE (6) değeri, raporun başarıyla çalıştığını ve en az bir raporun alındığını gösterir. FAILEDINIT (7) değeri, rapor etkinleştirme işleminin başarısız olduğunu ve cihazın 60 saniye sonra tekrar deneyeceğini gösterir.          
    *   FORCETOCLOSE (8-11) değerleri, raporun devre dışı bırakılma sürecinde olduğunu belirtir.    
     
*   **Send GI Signal**: Eğer raporun tetikleme türü (Trigger Type) olarak GI seçildiyse Send GI Signal girişine bir tetik sinyali atanmalıdır. Bu girişe yükselen sinyal (1) uygulandığında, Genel Sorgu (General Interrogation - GI) isteği tetiklenir ve rapor gönderilir.      
*   **Purge Buffer Signal**: Rapor kısmında tampon belleğin taşması (buffer overflow) durumunda belleği temizlemek için kullanılır. Eğer buffer overflow olursa kullanıcı Purge Buffer Signal ile ilişkilendirilen telediagram bloğunun girişine yükselen bir sinyal (1) uygulayarak tampon belleği manuel olarak temizleyebilir.       
*   **Ignored Report**: İstemcinin rapor kontrol bloğu yapılandırma revizyonu uyumsuzluklarını nasıl ele aldığını belirler. Eğer rapor kontrol bloğu yapılandırma revizyonu uyumsuz ise, rapor işlenmez ve yok sayılır. IgnoredReportCount sinyali üzerinden, kaç adet raporun bu nedenle yok sayıldığı takip edilebilir.  

**Not**: Sadece rapor seçildiğinde, Data Set Path kısmında ünlem işareti (!) oluşur. Raporun düzgün çalışabilmesi için, ilgili Data Set’in de browser’a eklenmesi gerekmektedir.

*Data Set Seçili değil;*
<center>

![mdv61850_figure20](/img/mdv61850_figure20.png)

</center>

*Data Set Seçili;*
<center>

![mdv61850_figure21](/img/mdv61850_figure21.png)

</center>

**Not**: Reports tablosuna eklenen raporun DatasetRefPath değeri ile Data Set Tablosuna eklenen dataset’in aynı olduğundan emin olun.

### RTU/PLC Integration

Telediagram üzerinden IED'lerin okuma işlemlerini yapılandırmak için kullanılır. IED'lerden alınan veriler, RTU veya PLC içindeki ilgili bloklara eşleştirilir. Böylece, IEC 61850 protokolü üzerinden gelen verilerin Telediagram içindeki fonksiyon bloklarıyla ilişkilendirilmesi mümkün olur.

<center>

![mdv61850_figure22](/img/mdv61850_figure22.png)
***<center>Şekil 22: RTC/PLC Integration Bölümü</center>***

</center>

Şekil 22 RTC/PLC Integration Bölümü'nde gösterildiği gibi, Import Line Labels seçeneği kullanılarak Telediagram'dan alınan Excel tablosu, MDV61850 Browser’a içe aktarılabilir.

#### İçe Aktarma Süreci:

Import Line Labels seçeneği ile Telediagram’dan alınan Excel dosyası içe aktarılır.

Arama kutusundan, ilgili hat etiketleri aranabilir ve üzerinde düzenleme yapılabilir.

Info ekranı, Telediagram’dan alınan Excel tablosunun içe aktarımı yapıldığında, bloklar ile ilgili bloklar Clear seçeneği ile bilgi ekranı temizlenir.

İçe aktarım tamamlandığında, sayfanın sağ tarafında içe aktarılan etiketler listelenir.   

#### RTU/PLC Integration Tablosu Alanları

*   **Signal Number**: Telediagram’da bu hat etiketine karşılık gelen blok numarası yer alır.      
*   **Address**: Telediagram’da bu hat etiketine karşılık gelen modbus adresi yer alır.       
*   **Label**: İlgili bloğun Telediagram’daki hat etiketi.       
*   **Type**: Bloğun değişken tipi burada gösterilir.            

Bu yapı sayesinde IEC 61850 protokolü ile haberleşen IED'lerin verileri, RTU veya PLC’de kullanılmak üzere Telediagram içindeki bloklarla doğru şekilde eşleştirilir.