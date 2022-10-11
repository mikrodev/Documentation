---
title: "GSM IP Kullanımı"
---

## Genel Bakış

GSM operatörleri tarafından temin edilen Sim kartlar Mikrodev PLC/RTU ürünleri üzerinden IP alınıp kullanılabilmektedir.  

Modbus Slave, IEC 104 Slave, DNP3 Slave kullanılacak ise sim kartın Statik IP özellikli olması gerekir.  

Mqtt, DNP3 Master uygulamaları için Dinamik IP özellikli sim kart yeterlidir.

**Not:** Dinamik IP özellikli sim kartlara Mikrodiagram/Telediagram programı ile GSM üzerinden bağlantı kurulamaz, Mikrodiagram/Telediagram programı ile GSM üzerinden bağlantı kurulmak istenirse; Statik IP özellikli sim kart kullanılmalıdır.

### Gerekli Bağlantılar

PLC/RTU cihaza GSM üzerinden bağlantı kurmak için öncelikle cihazların anten ve USB/Ethernet bağlantısı yapılmalıdır ve sim kart cihaza takılmalıdır.

USB bağlantısı yapılacaksa, Mikroterminal üzerinden AT komutları ile GSM IP ayarları yapılır. Cihazın IP alıp almadığı AT komutlarından kontrol edilebilir.

Ethernet bağlantısı yapılacaksa, Mikrodiagram/Telediagram programı üzerinden GSM APN, Username ve Password bilgileri girilerek GSM IP ayarları yapılır veya GSM IP biliniyorsa Mikrodiagram/Telediagram uygulaması üzerinden cihaz konfigürasyonu kısmına GSM IP ve port bilgisi girilerek bağlantı kurulur.

**Not:** Ancak Ethernet bağlantısı kurularak yapılan bağlantılarda cihazın Mikrodiagram/Telediagram programı üzerinden aldığı IP görülemez.

<center>

![gsm_ip1](/img/gsm_ip1.png)   
***<center>Şekil 1: Mikrodiagram GSM Ayarları</center>***

</center>

<center>

![gsm_ip2](/img/gsm_ip2.png)   
***<center>Şekil 2: Mikrodiagram GSM IP ve Port Bilgisi Girme</center>***

</center>

**Not:** Mikrodev PLC/RTU ürünleri GSM üzerinden IP alınması isteniyorsa cihaza yüklü olan Mikrodiagram/Telediagram projesinde TCP Soket bloğu yer almalıdır ve medya tipi olarak GSM seçili olmalıdır.

DM serisi için TCP Soket bloğuna gerek yoktur.

### GSM APN Ayarları

Donanımsal olarak gerekli bağlantılar yapıldıktan sonra Statik IP özelliğne sahip Sim kartlara IP aldırmak için Mikroterminal uygulaması açılır. Cihazın bağlı olduğu port seçilir.

Komutlar -> GSM -> AT+GPRSAPN=\* -> W(Write)

\*Vodafone için AT+GPRSAPN=internetstatik

Turkcell için AT+GPRSAPN=mgbs

Türk Telekom için AT+GPRSAPN=statikip yazılmalıdır.

<center>

![gsm_ip3](/img/gsm_ip3.png)   
***<center>Şekil 3: Mikroterminal AT+GPRSAPN Komutu</center>***

</center>

GSM operatörleri tarafından kullanıcıya Username ve Password bilgisi temin edilmişse, Mikroterminal uygulamasındaki uygun yerlere edinilen kullanıcı bilgileri yazılmalıdır.

Eğer operatör tarafından kullanıcı bilgileri temin edilmediyse, Mikroterminal uygulamasında yer alan username ve password kısımları default bırakılmalıdır.

<center>

![gsm_ip4](/img/gsm_ip4.png)   
***<center>Şekil 4: Mikroterminal Kullanıcı Adı ve Şifre Tanımlama Komutu</center>***

</center>

GPRSAPN ayarlarının cihazda uygulanabilmesi için cihaza reset atılmalıdır.

Komutlar -> Internal FS -> AT+RESET=1 -> W(Write) azılıp, cihazın tekrar ayağa kalkması beklenmelidir.

<center>

![gsm_ip5](/img/gsm_ip5.png)   
***<center>Şekil 5: Mikroterminal Cihaz Resetleme Komutu</center>***

</center>

Cihazın “Err (Error) Ledi” söndüğünde, “SYS (Sistem) ledi” yanıp sönmeye başladığında cihaza Mikroterminal uygulaması üzerinden tekrar bağlanılır.

Cihazın GSM sinyal kalitesini öğrenebilmek için Mikroterminal uygulamasının GSM kısmı açılır.

Komutlar -> GSM -> AT+CSQ=? -> R(Read) sorgusu yapılır.

<center>

![gsm_ip6](/img/gsm_ip6.png)   
***<center>Şekil 6: Mikroterminal AT+CSQ Komutu</center>***

</center>

AT+CSQ=? Sorgusu 1 ile 31 arası değer alabilmektedir.

1 sinyal kalitesi en düşük, 31 ise en yüksek anlamına gelmektedir.

<center>

![gsm_ip7](/img/gsm_ip7.png)   
***<center>Şekil 7: CSQ Tablosu</center>***

</center>

**Not:** Sinyal kalitesi yetersiz ise antenin konumuna veya kazancına bakılır. Anten pano içerisinde bulunuyorsa anteni dışarı alarak veya anteni daha kazançlı bir anten ile değiştirerek sinyal kalitesi arttırılabilir.

Cihazın IP alma durumları, Mikroterminal uygulamasının Socket Status kısmından izlenebilir.

Komutlar -> Socket Status -> AT+Connection=? -> R (Read) sorgusu yapılır.

<center>

![gsm_ip8](/img/gsm_ip8.png)   
***<center>Şekil 8: Mikroterminal AT+CONNECTION Komutu</center>***

</center>

AT+CONNECTION sorgusunun cevabı

0 ise; Modül enerjisiz,

2 ise; Modül enerjili, (arama yapabilir, sms atabilir.)

4 ise; Modül IP almaya çalışıyor,

6 ise; Modül IP aldı,

8 ise; Modül hem IP aldı hem de bağlantısı gerçekleşti anlamına gelmektedir.

AT+CONNECTION sorgusunun cevabı 8 ise, cihazımız IP aldı ve GSM üzerinden bağlantı kurdu demektir.

Cihazın aldığı IP’yi öğrenebilmek için Mikroterminal uygulamasının GSM kısmı açılır.

Komutlar -> GSM -> AT+GPRSIP=? -> R(Read) sorgusu yapılır.

<center>

![gsm_ip9](/img/gsm_ip9.png)   
***<center>Şekil 9: Mikroterminal AT+GPRSIP Komutu</center>***

</center>

**Not:** Bu sorgunun cevabı TIMEOUT olarak geliyorsa, cihaz IP almamış demektir.

**Not:** Sim kartın doğru takılıp takılmadığını anlayabilmek için Mikroterminal uygulamasının GSM kısmı açılır.

Komutlar -> GSM -> AT+SIM=? -> R(Read) sorgusu yapılır.

<center>

![gsm_ip10](/img/gsm_ip10.png)   
***<center>Şekil 10: MMikroterminal AT+SIM Komutu</center>***

</center>

AT+SIM=? Sorgusunun cevabı;

0 ise SIM kartın takılı olmadığını, yanlış takıldığını veya arızalı olduğunu belirtir.

1 ise SIM kartın doğru takıldığını ve hatasız olduğunu gösterir.

GSM bağlantısında kısa süreli kopmaların önüne geçmek için zaman belirlenerek bağlantı bekleme süresi tanımlanabilir. Komuta yazılan sürenin birimi saniyedir.

Komutlar -> Özel Komut Girişi -> AT+GSMRESET=<Süre\> -> Gönder

GSM kısmından bağlantı istediği geldiği andan itibaren cihaz tanımlanan süre boyunca GSM bağlantısını kontrol eder, belirtilen süre sonunda bağlantı kurulmazsa cihaz kendini resetler.

Komutlar -> Özel Komut Girişi -> AT+GSMRESET=0 -> Gönder

GSM reset özelliğini kapatır.

<center>

![gsm_ip11](/img/gsm_ip11.png)   
***<center>Şekil 11: Mikroterminal AT+GSMRESET Komutu</center>***

</center>

Mikroterminal üzerinden GSM modemine komut gönderilebilmektedir.

Komutlar -> GSM -> AT+MODEM= -> AT+<Command\> -> W sorgusu yapılır.

<center>

![gsm_ip12](/img/gsm_ip12.png)   
***<center>Şekil 12: Mikroterminal AT+MODEM Komutu</center>***

</center>