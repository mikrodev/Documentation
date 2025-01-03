---
title: "DALI Uygulama Notu"
---

## DALI PROTOKOLÜ

### DALI DALI2 Protokolü Genel Bilgi

<center>

![dali_logo](/img/dali_logo.png)
***<center>Şekil 1: DALI Protokolü</center>***

</center>

DALI (Digital Addressable Lighting Interface) protokolünün Türkçe anlamı Dijital Adreslenebilir Aydınlatma Arayüzü’dür. DALI teknolojisinin uluslararası standartı IEC 62386’dır.            
DALI, aydınlatma sistemleri için iki yönlü veri iletişimi sağlar. Özellikle ticari yapılarda yaygın kullanılan bir otomasyon sistemidir. DALI protokolü sayesinde; balastlar, sürücüler, kontrol üniteleri, aydınlatma armatürleri ve acil aydınlatma armatürleri gibi sistemler tek bir noktadan kontrol edilebilir hale gelmektedir.            
DALI-2, DALI üzerine birçok yeni komut ve özellik eklenerek oluşturulmuştur.          

### DALI Genişleme Modülü Bağlantı Şeması

<center>

![dali-sema](/img/dali-sema.png)
***<center>Şekil 2: DALI Genişleme Modülü Bağlantı Şeması</center>***

</center>

**Not:** DALI hattı genişleme modülü üzerindeki 15V 300mA çıkış ile beslenmelidir, aksi takdirde iletişim kurulamayacaktır.                        
Ürünümüzün içinde bulunan DALI güç kaynağını kullanabilmek için şemada görüldüğü gibi klemens bağlantılarında köprü bağlantısı yapılmalıdır.

**ÖNEMLİ!**
Mikrodev DALI Genişleme Modülü ile işleme başlamadan önce bir USB-DALI Dönüştürücü ile konfigürasyon yapılmış olmalıdır. Konfigürasyon; adresleme, gruplama, power-on, min, max level seçimlerini ve sahne seçimlerini içermelidir. Bu adreslere göre plc programı yazılır. Konfigürasyon detayları için **DALI Configurator dokümanını** inceleyebilirsiniz

### GDA Kart Tipi (1 DALI Port) Fiziksel Arayüz

<center>

![dali-sema16](/img/dali-sema16.png)
***<center>Şekil 3: DALI GDA Kart Tipi Fiziksel Arayüz</center>***

</center>

<center>

![dali-sema17](/img/dali-sema17.png)

</center>

### DALI Bloğu

#### Blok Bağlantıları

<center>

![dali-sema18](/img/dali-sema18.png)

</center>

#### Blok Bağlantı Açıklamaları

Dali hattına dali manager bloğundan gönderilemeyen data paketlerini göndermek için kullanılır.      

**Girişler:**    

1.	Dali Bus: Genişleme Switch ID’si girişidir.           
2.	Address Byte: Armatür adresi girişidir.            
3.	Data Byte 1: Dali hattına gönderilmek istenen data paketinin 1. byte nı temsil eder. (Değer desimal olarak gönderilir.)       
4.	Data Byte 2: Dali hattına gönderilmek istenen data paketinin 2. byte nı temsil eder. (Değer desimal olarak gönderilir.)            
5.	Trig: Bloğun tetik girişidir. Buraya tetik uygulandığında blok üzerinden gönderilmek istenen data paketi dali hattına gönderilir.   

**Çıkışlar:**         

1.	DALI0: Armatürün ışık seviyesini verir.       
2.	Rx: Armatürden gelen mesaj sayısı        
3.	Res: Armatüre gönderilen mesaj sayısı           
                   
#### Özel Ayarlar

<center>

![dali-sema19](/img/dali-sema19.png)

</center>

#### Blok Açıklaması

DALI bloğu, armatürlere doğrudan veri paketi gönderebilmenizi sağlar. DALI Manager bloğundan gönderilemeyen veri paketlerini, byte'larına ayrıştırarak bu blok aracılığıyla DALI hattına iletebilir ve böylece armatürleri uzaktan kontrol edebilirsiniz. Veri byte bölümlerine, göndermek istediğiniz veri paketinin desimal karşılıklarını girmeniz gerekmektedir.

Mikrodev DALI Genişleme Modülü ile işleme başlamadan önce bir USB-DALI Dönüştürücü ile konfigürasyon yapılmış olmalıdır. Konfigürasyon; adresleme, gruplama, power-on, min, max level seçimlerini ve sahne seçimlerini içermelidir. Bu adreslere göre plc programı yazılır.


**Not:** Dali 2 desteği bulunan dali anahtarlama elemanlarından gönderilen data paketi rtu üzerinden okunabilmektedir. Bunun için dali bloğu kullanılmaktadır.            
Örneğin: Dali bus no 0’dan okunan 0. adresindeki dali anahtarlama elemanı takılı olsun, buradaki data paketini okuyabilmek için dali bloğunun özel ayarları aşağıdaki gibi girilmelidir. 

<center>

![dali-sema20](/img/dali-sema20.png)
***<center>Şekil 4: DALI Blok Özel Ayarları</center>***

</center>

Dalibus No: 0 (İlgili anahtarlama elemanı hangi dali genişleme modülüne bağlıysa onun switch id si girilir.)         
Address Byte: 0 (Anahtarlama elemanın bağlı olduğu adres numarası girilir.)       
Data Byte1: 255 (Anahtarlama elemanından gönderilen data paketini okumak için buraya 255 değeri girilir.)           
Data Byte2: 255 (Anahtarlama elemanından gönderilen data paketini okumak için buraya 255 değeri girilir.)
                                                           
#### Örnek Uygulama

<center>

![dali-sema8](/img/dali-sema8.png)

</center>
<center>

![dali-sema9](/img/dali-sema9.png)

</center>

<center>
![dali-sema21](/img/dali-sema21.png)

</center>

Örnek uygulamada, DALI bus numarası 0’a, 0. adreste bir DALI anahtarlama elemanı bağlanmıştır. Anahtar açık pozisyondayken DALI bloğunun Rx çıkışından 0 değeri okunmakta, kapalı pozisyondayken ise 255 değeri okunmaktadır. Anahtarlama elemanından okunan bu değerlere göre sahadaki DALI armatürleri kontrol edilmektedir.

### DALI Manager Bloğu

#### Blok Bağlantıları

<center>

![dali-sema22](/img/dali-sema22.png)

</center>

#### Blok Bağlantı Açıklamaları

**Girişler:**

1.	Bus Id: Genişleme Switch ID’si girişidir.         
2.	Address: Armatür adresi girişidir.            
3.	Address Type: Bu giriş 0 ise armatür, 1 ise grup adresi olarak işlem yapılır.          
4.	Max Level: Bu girişe tetik uygulandığında armatür/grup maksimum level aydınlık verir.             
5.	Min Level: Bu girişe tetik uygulandığında armatür/grup minimum level aydınlık verir.           
6.	Off: Bu girişe tetik verildiğinde armatür/grup kapanır.           
7.	Dim Value: Armatüre 85-254 arası parlaklık değeri girişidir.            
8.	Dim Trig: Bu girişe tetik geldiğinde “Dim Value” girişine uygulanan değeri armatüre uygular.        
9.	Scene No: Sahne numarası girişidir. 0-15 arası değer girilir.          
10.	Scene Trig: Bu girişe tetik geldiğinde “Scene No” girişine uygulanan değeri DALI hattına gönderir ve sahne uygulaması başlatılır.           
11.	Read Trig: Armatürden; dim level, durum ve alarm byte larını okumak için tetik verilir. (ADDRESS TYPE 0 OLMALIDIR!)          

**Çıkışlar:** Read trig uygulandığında güncellenir.

1.	Actual Level: Armatürün ışık seviyesini verir.        
2.	Status Byte: Armatürün durum bilgisini içerir. Bit ayrıştırma yaparak aşağıdaki bilgileri elde edebiliriz;        
•	0. Bit: Genel alarm. 0= Hata yok, 1=Hata var   
•	1. Bit: Lamba arızası. 0= Hata yok, 1= Hata var          
•	2. Bit: Lamba durumu. 0= Kapalı, 1=Açık         
•	3. Bit: Limit hatası. 0= Hata yok, 1=Min/Max level dışında değer girilirse 1 olur.         
•	4. Bit: Fade çalışma. 0= Fade çalışma yok 1=Fade çalışma açık.*           
•	5. Bit: Reset durumu. 0= Reset durumunda değil, 1= Tüm değişkenler (dim, fade, ..vb) başlangıç durumunda.         
•	6. Bit: Adres hatası. 0= Adresleme yapıldı, 1= Adresleme yapılmadı.            
•	7. Bit: Enerji Döngüsü. 0=Normal çalışma, 1= ilk enerji verildiğinde 1 olur, sonraki dim level değişimlerinde vb 0’a düşer.           
*fade: Analog rampa gibi armatürün yavaş yavaş yanıp sönmesini sağlar örneğin dim level 0’dan 100’e 10sn de gitme işlemi. Bu 10sn konfigürasyonda belirtilmeli, plcde esktra bir işlem yapmıyoruz.        
3.	Fail Status Byte: Armatürün alarm bilgisini içerir. Bit ayrıştırma yaparak aşağıdaki bilgileri elde edebiliz;       
•	0. Bit: Led kısa devre     
•	1. Bit: Led açık devre      
•	2. Bit: Yük azalması        
•	3. Bit: Yük artması      
•	4. Bit: Aşırı akım koruma     
•	5. Bit: Termal kapatma         
•	6. Bit: Termal aşırı yük        
•	7. Bit: Referans hatası        
4.	Device Status: Okuma tetiği geldiğinde 0 olur, eğer armatürden cevap gelirse 1 olur, düşmede gecikme bloğu ile bu timeout değeri ayarlanabilir ve armatürün aktif olup olmadığı izlenebilir. 
5.	Tx: Armatüre gönderilen mesaj sayısı      
6.	Rx: Armatürden gelen mesaj sayısı         
7.	Rx Complete: Okuma işlemi sırasında 0, okuma işlemi bittiğinde 1 olur.

#### Özel Ayarlar

<center>

![dali-sema23](/img/dali-sema23.png)

</center>

#### Blok Açıklaması

DALI Manager bloğu armatürlere veya gruplara uzaktan erişim imkanı sağlar. DALI Manager bloğu sayesinde armatür parlaklığını ayarlayabilir, blok çıkışlarından sahadaki armatürlerin ışık seviyesini, armatür durum bilgisini ve armatür hata bilgilerini okuyabiliriz.           
Mikrodev DALI Genişleme Modülü ile işleme başlamadan önce bir USB-DALI Dönüştürücü ile konfigürasyon yapılmış olmalıdır. Konfigürasyon; adresleme, gruplama, power-on, min, max level seçimlerini ve sahne seçimlerini içermelidir. Bu adreslere göre plc programı yazılır.          
  

#### Örnek Uygulama 

<center>

![dali-sema13](/img/dali-sema13.png)

</center>

Örnek uygulamada dali genişleme modülünün Switch ID 0. girişine bağlı olan 0. adresteki armatürüne Dali manager bloğundan 90 dim değeri gönderilmiştir.        
Read trig girişi tetiklendiğinde dali manager bloğunun çıkışınından 90 dim değeri okunmuştur.

### DALI Manager Bloğu 2

#### Blok Bağlantıları

<center>

![dali-sema24](/img/dali-sema24.png)

</center>

#### Blok Bağlantı Açıklamaları

**Girişler:**

1.	Bus Id: Genişleme Switch ID’si girişidir.         
2.	Address: Armatür adresi girişidir.        
3.	Address Type: Bu giriş 0 ise armatür, 1 ise grup adresi olarak işlem yapılır.          
4.	Max Level: Bu girişe tetik uygulandığında armatür/grup maksimum level aydınlık verir.           
5.	Min Level: Bu girişe tetik uygulandığında armatür/grup minimum level aydınlık verir.        
6.	Off: Bu girişe tetik verildiğinde armatür/grup kapanır.         
7.	Dim Value: Armatüre 85-254 arası parlaklık değeri girişidir.              
8.	Dim Trig: Bu girişe tetik geldiğinde “Dim Value” girişine uygulanan değeri armatüre uygular.          
9.	Scene No: Sahne numarası girişidir. 0-15 arası değer girilir.                
10.	Scene Trig: Bu girişe tetik geldiğinde “Scene No” girişine uygulanan değeri DALI hattına gönderir ve sahne uygulaması başlatılır.             
11.	Read Trig: Armatürden; dim level, durum ve alarm byte larını okumak için tetik verilir. (ADDRESS TYPE 0 OLMALIDIR!)           
       
**Çıkışlar:** Read trig uygulandığında güncellenir.

1.	Actual Level: Armatürün ışık seviyesini verir.         
2.	Status Byte: Armatürün durum bilgisini içerir. Bit ayrıştırma yaparak aşağıdaki bilgileri elde edebiliriz;        
•	0. Bit: Genel alarm. 0= Hata yok, 1=Hata var       
•	1. Bit: Lamba arızası. 0= Hata yok, 1= Hata var       
•	2. Bit: Lamba durumu. 0= Kapalı, 1=Açık         
•	3. Bit: Limit hatası. 0= Hata yok, 1=Min/Max level dışında değer girilirse 1 olur.       
•	4. Bit: Fade çalışma. 0= Fade çalışma yok 1=Fade çalışma açık.*          
•	5. Bit: Reset durumu. 0= Reset durumunda değil, 1= Tüm değişkenler (dim, fade, ..vb) başlangıç durumunda.            
•	6. Bit: Adres hatası. 0= Adresleme yapıldı, 1= Adresleme yapılmadı.           
•	7. Bit: Enerji Döngüsü. 0=Normal çalışma, 1= ilk enerji verildiğinde 1 olur, sonraki dim level değişimlerinde vb 0’a düşer.        
*fade: Analog rampa gibi armatürün yavaş yavaş yanıp sönmesini sağlar örneğin dim level 0’dan 100’e 10sn de gitme işlemi. Bu 10sn konfigürasyonda belirtilmeli, plcde esktra bir işlem yapmıyoruz.         
3.	Fail Status Byte: Armatürün alarm bilgisini içerir. Bit ayrıştırma yaparak aşağıdaki bilgileri elde edebiliz;       
•	0. Bit: Led kısa devre      
•	1. Bit: Led açık devre           
•	2. Bit: Yük azalması      
•	3. Bit: Yük artması          
•	4. Bit: Aşırı akım koruma      
•	5. Bit: Termal kapatma        
•	6. Bit: Termal aşırı yük       
•	7. Bit: Referans hatası           
4.	Device Status: Okuma tetiği geldiğinde 0 olur, eğer armatürden cevap gelirse 1 olur, düşmede gecikme bloğu ile bu timeout değeri ayarlanabilir ve armatürün aktif olup olmadığı izlenebilir.        

#### Özel Ayarlar

<center>

![dali-sema25](/img/dali-sema25.png)

</center>
