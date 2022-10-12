---
title: NTP Uygulama Notu
---

## Genel Bakış

NTP (Ağ Zamanlama Protokolü), değişken gecikmeye sahip paket anahtarlamalı ağlar üzerindeki bilgisayarların saatlerinin eş zamanlanmasının sağlanması için kullanılan bir protokoldür. 

NTP, 123 no'lu port üzerinden, Kullanıcı Datagram Protokolü (UDP)'nü kullanır. 

NTP ayarları hangi dağıtımın kullanıldığına bağlı olarak ya /etc/ntp.conf ya da /etc/xntp.conf dosyasından yapılır. 

Mikrodev, MP211 PLC ve RTU cihaz ailesi Network Time Protocol – NTP destekler ve böylece cihazlarımız gerçek saat değerlerine sahip olur.

## NTP Senkronizasyon Blok Tanımlamaları

### Bağlantılar

<center>

![ntp1](/img/ntp1.png)

</center>

**Ser: NTP Server IP Girişi**   
NTP Server IP bloğa bu girişten tanımlanabilir.

**Por: NTP Server Port Girişi**    
NTP Server Port numarası bloğa bu girişten tanımlanabilir.

**Trg: Tetik Girişi**     
Senkronizasyon için tetik girişidir. Yükselen kenar olarak çalışır.

### Blok Özel Ayarları

<center>

![ntp4](/img/ntp4.png)

</center>

**Not:** Tetikleme sonucu çalışması için blok özel ayarlarından “Trig Aktifken Çalış” seçeneği işaretli olması gerekir.

### Blok Açıklaması

NTP Senkronizasyon Bloğu Ttk-Tetik pinine gelen yüksek kenar sinyali ile aktif olduğundan blok tetik girişine Gerçek Zamanlı Darbe Üreticisi, Simetrik Darbe Üreticisi ya da İkilik Yazmaç bloğu bağlanabilir Tetik girişine bağlanan bloklar NTP sunucuyla eşleme sıklığını ayarlamak için kullanılır.

NTP sunucu ayarları için fonksiyon bloğu içerisinden NTP Server IP kısmına NTP sunucu IPsi girilir. NTP port kısmına ise sunucu portu girilir. Trig Aktifken Çalış seçeneği ise tetikleme sonucu bloğun çalışmasını sağlar.

İstenilirse NTP Server IP ve NTP Port bilgileri NTP Eşleme Bloğunun Ser ve Por pinlerine bağlanarak da tanımlanabilir.

### Örnek Uygulama

<center>

![ntp3](/img/ntp3.png)

</center>

Gerçek zamanlı darbe üretecinin zamanlama sıklığı saniyede 1 seçilmiştir. GZDÜ bloğu NTP senkronizasyon bloğuna saniyede bir tetik göndererek, saniyede bir NTP sunucuyla zaman eşlemesi gerçekleştirilir.




































