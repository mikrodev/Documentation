---
title: Firmware güncelleme
---

Mikrodev PLC, RTU, Remote IO ve Gateway ürün ailelerinin yazılımlarını USB bağlantısı ile güncelleyebilirsiniz.

* Başlamadan önce, cihaza giden tüm USB bağlantılarının kapalı olduğundan emin olun.

* Cihazı KAPATIN, DC besleme bağlantısını kesin.

<center>

![](https://www.mikrodev.com/images/wiki/en/disconnect.gif)

</center>

* USB kablosunu bilgisayar ve cihaz arasına bağlayın.

* "..." düğmesine tıklayın ve .mx3 uzantılı bellenimi seçin.

<center>

![mikrodiagram-firmware-update-01](/img/mikrodiagram-firmware-update-01.png)

</center>

* Cihazı AÇIK konuma getirin, DC kaynağını bağlayın.
 
<center>

![](https://www.mikrodev.com/images/wiki/en/connect.gif)

</center>

* Doğru portu seçin, "Aç"a tıklayın. Ardından "Önyükleme İstemine Otomatik Geçiş" üzerine tıklayın ve cihazın yeniden başlatılmasını ve Önyükleme modunda başlamasını bekleyin.

<center>

![mikrodiagram-firmware-update-02](/img/mikrodiagram-firmware-update-02.png)

</center>

* Cihaz önyükleme modunda başladıktan sonra "Firmware Yüklemeyi Başlat" düğmesine tıklayın
 
<center>

![mikrodiagram-firmware-update-03](/img/mikrodiagram-firmware-update-03.png)

</center>

* Ürün yazılımı yüklemesinin bitmesini bekleyin

<center>

![mikrodiagram-firmware-update-04](/img/mikrodiagram-firmware-update-04.png)

</center>

* İşlem tamamlandıktan sonra USB bağlantısı otomatik olarak kapatılacak ve flash dosya sistemi doğrulandıktan sonra cihaz bir kez yeniden başlatılacaktır.

<center>

![mikrodiagram-firmware-update-05](/img/mikrodiagram-firmware-update-05.png)

</center>

* Cihazın bellenim yükseltmesini tamamlaması için birkaç dakika bekleyin ve cihazı tekrar bağlamak için "Portu Aç"a tıklayın. Ve "AT+VERSION=?" ile "GÖNDER" düğmesine tıklayarak güncelleme işleminin başarılı olup olmadığını doğrulamak için sürüm bilgilerini kontrol edin. parametre.

<center>

![mikrodiagram-firmware-update-06](/img/mikrodiagram-firmware-update-06.png)

</center>

Aşağıdaki bağlantıdan Seri Yükleyici uygulamasını indirin:

[MikrodevSerialLoader](https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip)