---
title: Firmware Yükleme
---

### Firmware Yüklenirken Dikkat Edilmesi Gerekenler

**Uyarı:** Elinizdeki cihaza uygun firmware için Mikrodev teknik destek ile iletişime geçin.

1. Yüklenecek firmware cihazın model numarasına uygun olmalıdır. AT+VERSION=? veya telediagram uygulamasından cihaz konfigürasyonu gelişmiş parametreler kısmından okunabilir. MP211EG ise MP211EG yüklenmelidir. 

2. Cihazın PCB versiyonu, firmware yüklenmeden önce AT+VERSION=? ile versiyon sorulur gelen cevabın sonunda p harfi ile başlayan versiyon numarası yükleyeceğiniz firmwarede p harfi ile başlayan versiyon numarası ile aynı olmalıdır.

Örnek,           
                   
AT+VERSION=?         
VERSION=MP211_E_s16.11p71              
Yüklenmesi gereken firmware: MP211_E_s17.03p71(xionew+internalADC) olmalıdır.

3. AT+INCLUDE=? ile cihazın özellikleri okunup varsa GSM özellikleri ve Analog giriş tipi kontrol edilmelidir. 

* GSM için AT+INCLUDE=? cevabında,          
GPRS_MODULE_SIM800 ise cihaz 2G,      
GPRS_MODULE_UC20 ise cihaz 3G,          
GPRS_MODULE_SIM7600 ise cihaz 4G,        
Yüklenmesi gereken firmware MP211_EG_s17.08p75(xionew+4G+EXTERNALADC) GSM modulu parantez içinde belirtilir. 

* Analog giriş için Input AT+INCLUDE=? cevabında,         
CONFIG_EXTERNAL_ADC varsa, EXTERNALADC firmware, yoksa internalADC firmware yüklenmelidir.               
Örnek firmware isimleri,       
MP211_EG_s17.08p75(xionew+4G+EXTERNALADC)         
MP211_E_s17.03p71(xionew+internalADC)          

### Serial Loader Uygulaması Kullanarak Firmware Yükleme

Mikrodev PLC, RTU, Remote IO ve Gateway ürün ailelerinin yazılımlarını USB bağlantısı ile güncelleyebilirsiniz.

* Başlamadan önce, cihaza giden tüm USB bağlantılarının kapalı ve cihazın enerjili olduğundan emin olun.

* USB kablosunu bilgisayar ve cihaz arasına bağlayın.

* Cihazda bulunan firmware dosyasını güncellemek için öncelikle Serial Loader uygulaması açılır. Telediagram veya Mikrodiagram uygulamasına sağ tık yapılır, uygulamanın dosya konumu açılır. Serial Loader uygulaması açılan bu dosya içerisinde bulunur ve çalıştırılır.

* Cihazın bilgisayara bağlı olduğu Port seçilir ve “OPEN PORT” yazısına tıklanır.

* Ön yükleme moduna geçebilmek için Sağ kenarda yer alan “Auto Switch to Boot Propmpt” yazısına tıklanır. Cihazın otomatik ön yükleme moduna geçer, ekranda BootCmd> yazısı okunur. 

<center>

![mikrodiagram-firmware-update-02](/img/mikrodiagram-firmware-update-02.png)

</center>

Erkanda BootCmd> yazısı okunmuyorsa yani cihaz otomatik ön yükleme moduna geçmediyse farklı bir yol izlenir.

* Cihazı açın, DC kaynağını bağlayın.

<center>

![](https://www.mikrodev.com/images/wiki/en/connect.gif)

</center>

* USB kablosunu bilgisayar ve cihaz arasına bağlayın.

* Cihaz USB ile bilgisayara bağlı iken enerjisi kesilir.

<center>

![](https://www.mikrodev.com/images/wiki/en/disconnect.gif)

</center>

* Enerjisi verilir verilmez Serial Loader uygulaması üzerinden “OPEN PORT” yazısına tıklanır. 

* Port açılınca cihazın BOOT modda (ön yükleme modunda) çalıştığı gözlemlenir ve "STOP BOOT" yazısına tıklanarak cihazı ön yükleme modunda kalması sağlanır.

<center>

![mikrodiagram-firmware-update-07](/img/mikrodiagram-firmware-update-07.png)

</center>

* Cihaz ön yükleme modunda çalışıyor iken yüklemek istenilen .mx3 uzantılı Firmware dosyası Start Loading Firmware yazısının üzerinde bulunan üç noktadan seçilir.

<center>

![mikrodiagram-firmware-update-08](/img/mikrodiagram-firmware-update-08.png)

</center>

* Firmware dosyası dosyasını cihaza yüklemek için "Start Loading Firmware" yazısına tıklanır.
 
<center>

![mikrodiagram-firmware-update-03](/img/mikrodiagram-firmware-update-03.png)

</center>

* Firmware yüklemesinin bitmesi beklenir.

<center>

![mikrodiagram-firmware-update-04](/img/mikrodiagram-firmware-update-04.png)

</center>

* İşlem tamamlandıktan sonra USB bağlantısı otomatik olarak kapatılacak ve flash dosya sistemi doğrulandıktan sonra cihaz bir kez yeniden başlatılacaktır.

<center>

![mikrodiagram-firmware-update-05](/img/mikrodiagram-firmware-update-05.png)

</center>

* Aygıtın aygıt yazılımı yükseltmesini tamamlaması için birkaç dakika bekleyin ve aygıtı yeniden bağlamak için "Open Port" öğesine tıklayın. Ve "AT+VERSION=?" ile güncelleme işleminin başarılı olup olmadığını doğrulamak için cihazın versiyon bilgilerini kontrol edin. 

<center>

![mikrodiagram-firmware-update-06](/img/mikrodiagram-firmware-update-06.png)

</center>

Aşağıdaki linkten Serial Loader uygulamasını indirin :

[MikrodevSerialLoader](https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip)

### Telediagram/Mikrodiagram Uygulaması Kullanarak Firmware Yükleme

Cihaza Telediagram/Mikrodiagram uygulaması kullanarak firmware yüklemesi yapılabilmektedir. Cihaz enerjili ve bilgisayar ile TCP veya USB üzerinden bağlantısı var iken Mikrodiagram/Telediagram programı açılır. 

Aşağıdaki yönerge takip edilir.

* Projeler -> Cihaz Konfigürasyon -> Yazılım Güncelleme

<center>

![mikrodiagram-firmware-update-09](/img/mikrodiagram-firmware-update-09.png)

</center>

* Yüklenilmek istenilen .mx3 uzantılı Firmware dosyası üç noktadan seçilir ve “YÜKLE” yazısına tıklanır.

* Cihaza firmware dosyası başarılı bir şekilde yüklenecektir
