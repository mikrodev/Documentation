---
title: Dosya Sistemini Biçimlendirme
---

Mikrodev PLC, RTU, Remote IO ve Gateway ürün ailelerinin dosya sistemini USB bağlantısı ile formatlayabilirsiniz.

* Başlamadan önce, cihaza giden tüm USB bağlantılarının kapalı olduğundan emin olun.

* Cihazı KAPATIN, DC besleme bağlantısını kesin.

<center>

 ![](http://www.mikrodev.com/images/wiki/en/disconnect.gif)

</center>

* USB kablosunu bilgisayar ve cihaz arasına bağlayın.

* Cihazı AÇIK konuma getirin, DC kaynağını bağlayın.
 
<center>

 ![](http://www.mikrodev.com/images/wiki/en/connect.gif)

</center>

* Doğru portu seçin, "Aç"a tıklayın. Ardından "Önyükleme İstemine Otomatik Geçiş" üzerine tıklayın ve cihazın yeniden başlatılmasını ve Önyükleme modunda başlamasını bekleyin.

<center>

![mikrodiagram-formatfilesystem-01](/img/mikrodiagram-formatfilesystem-01.png)

</center>

* Cihaz boot modunda başladıktan sonra "Komut Gönder" kutusuna "AT+FORMATFS=1" yazıp "GÖNDER" butonuna tıklayınız. Bu aşamada cihaz üzerindeki sistem ışığı hızlı bir şekilde yanıp sönecek ve hata ışığı sabit olacaktır. İşlem bittikten sonra sistem ledi tekrar normal şekilde yanıp sönmeye başlayacaktır. Biçimlendirme prosedürü yaklaşık 2-3 dakika sürecektir. Biçimlendirme işlemi sırasında cihazı kapatmayın. Cihaz birkaç kez sıfırlanacak ve USB bağlantısını kesecektir.

* Cihazın boot versiyonunu kontrol ederek formatlama işleminin bitip bitmediğini kontrol edebilirsiniz. Önyükleme sürümünü kontrol etmek için USB bağlantı noktasını bağlayın ve ardından "AT+VERSION=?" "Komut Gönder" kutusuna girin ve "GÖNDER" düğmesini tıklayın. Bu komuttan sonra konsolda önyükleme sürümünü görebiliyorsanız, aygıta bellenimi yüklemeye hazırsınız demektir.

* [Firmware Yükleme](Mikrodiagram-Updating-Firmware) sayfasında Adım 7'ye gidin ve bellenimi yüklemeye devam edin. Aygıt biçimlendirildiğinden, ilk önyükleme süresi, standart bellenim yükleme işlemine kıyasla önemli ölçüde daha uzun sürer.

Aşağıdaki bağlantıdan Seri Yükleyici uygulamasını indirin:

[MikrodevSerialLoader](https://www.mikrodev.com/downloads/drivers/MikrodevSerialLoader.zip)
