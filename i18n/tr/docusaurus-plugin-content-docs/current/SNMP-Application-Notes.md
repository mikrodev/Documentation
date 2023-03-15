---
title: "SNMP Uygulama Notu"
---

## SNMP PROTOKOLÜ

### Genel Bilgi

<center>

![snmp_01](/img/snmp_01.png)
***<center>Şekil 1 SNMP Protokolü</center>***

</center>

Simple Network Management Protocol (Basit Ağ Yönetimi Protokolü) adı verilen bu teknoloji, bilgisayar ağları büyüdükçe bu ağlar üzerindeki birimleri denetlemek amacıyla tasarlanmıştır. Cihaz üzerindeki sıcaklıktan, cihaza bağlı kullanıcılara, internet bağlantı hızından sistem çalışma süresine kadar çeşitli bilgiler SNMP’de tanımlanmış ağaç yapısı içinde tutulurlar.

SNMP’yi oluşturan bileşenler şunlardır;

•	Ajan uygulama: SNMP hizmetini cihaz üzerinde çalıştırıp gerekli bilgileri kayıtlı tutarak yönetici birime aktaran veya yönetici birimden gelen değişikliği cihaza uygulayan uygulamaya verilen isim.

•	Yönetici uygulama: Ajan uygulamadan ihtiyaç duyulan bilgileri alıp kullanıcıya gösteren ve kullanıcının değiştirmek istediği değerleri cihaza gönderen uygulama.

•	Ağ Yönetim Sistemi (NMS): Yönetici birimde çalışan ve bir ağa bağlı tüm cihazların izlenmesini ve yönetimini sağlayan uygulamaya verilen isimdir.

Mikrodev ürünleri SNMP Ajan uygulaması olarak çalışırlar.

SNMP Yönetim Bilgi Birimleri (MIB): MIB’ler hiyerarşik bir yapıda kayıtlı tutulan bilgi koleksiyonudur. SNMP’de belirli bir değişkenin değerine ulaşmak için evrensel olarak belirlenmiş bu koleksiyonun ilgili birimi kullanılır. Örneğin bir cihazın üreticisi tarafından atanan cihaz açıklaması için 1.3.6.1.2.1.2 birimindeki bilgiye ulaşmak gerekir.

### Blok Tanımlamaları

#### SNMP Agent Bloğu

Cihazı ajan olarak tanımlayabilmek için SNMP Agent bloğu projeye eklenir.

<center>

![snmp_02](/img/snmp_02.png)
***<center>Şekil 2 SNMP Agent Bloğu</center>***

</center>

Pin Açıklamaları;

  •	Lis: Dinleme Portu
  
  •	SNAg0: Blok Çıkışı
  
  • Err: Hata Çıkışı  

Blok Özel Ayarları;

<center>

![snmp_03](/img/snmp_03.png)
***<center>Şekil 3 SNMP Agent Blok Özel Ayarları</center>***

</center>

Tanımlamalar;

•	UDP Listen Port: Dinlenecek port numarası, SNMP için varsayılan 161’dir.

•	Read Community, Write Community: Kullanıcı adı ve şifre mantığıyla çalışır, managerda da aynı bilgi girilmelidir.

#### SNMP Trap Bloğu

<center>

![snmp_04](/img/snmp_04.png)
***<center>Şekil 4 SNMP Trap Bloğu</center>***

</center>

SNMP Trap bloğu cihazdan manager’a belli değişim değerlerinde veri göndermek için kullanılır. Şekildeki gibi girişine bağlı registerın değerini özel ayarlarındaki şartlara göre managera gönderir.

Blok Özel Ayarları;

<center>

![snmp_05](/img/snmp_05.png)
***<center>Şekil 5 SNMP Trap Blok Özel Ayarları</center>***

</center>

Tanımlamalar;

•	SNMP Manager IP Address: Kullanılan manager IP adresi

•	SNMP Manager Port: Kullanılan manager’in port numarası

•	Alarm Control: Verilerin hangi şartla gönderileceği;

   o	Greater Than: Input değeri eşik değerinden büyükse veri gönderilir.
   
   o	Smaller Than: Input değeri eşik değerinden küçükse veri gönderilir.
   
   o	Level Change: Input değeri eşik değeri kadar değişirse veri gönderilir.
   
   o	Percent Change: Input değeri %eşik değeri kadar değişirse veri gönderilir.
   
•   Threshold Value: Eşik değeri.

## OID HESAPLANMASI ve ÖRNEK UYGULAMA

### OID Hesaplanması

SNMP protokolünde manager tarafından agent cihaza gönderilecek sorgu aşağıdaki yapıda olmalıdır;

                        .1.3.6.1.2.1.Blok Tipi.Blok Numarası 


Blok tipi aşağıdaki değerler olabilir;
•	1: Bool
•	2: Word
•	3: Float
•	4: Long

Blok numarası ise Mikrodiagramdaki gibi yazılmayıp, aşağıdaki formata çevirilmelidir;

Blok No: 3004 >> 30*100+4 = 30.4 

Blok No: 3000 >> 30*100+0 = 30.0
 
Blok No: 6000 >> 60*100+0 = 60.0

### Örnek Uygulama

Projeye şekildeki gibi bir SNMP Agent bloğu ve word, binary, long, analog registerlar eklenir.

<center>

![snmp_06](/img/snmp_06.png)
***<center>Şekil 6 SNMP Örnek Uygulama</center>***

</center>

<center>

![snmp_07](/img/snmp_07.png)
***<center>Şekil 7 SNMP Örnek Uygulama Ayarları</center>***

</center>

Şekil 6’da projedeki registerların değerlerini almak için manager’ın göndereceği OID sorgusu aşağıdaki gibi olmalıdır;

Blok Numarası 2 olan binary register: .1.3.6.1.2.1.1.0.2 

Blok Numarası 3000 olan word register: .1.3.6.1.2.1.2.30.0
 
Blok Numarası 5000 olan analog register: .1.3.6.1.2.1.3.50.0
 
Blok Numarası 6000 olan long register: .1.3.6.1.2.1.4.60.0

MIB Browser programı manager olarak kullanılabilinir. IP ve port ayarları yapıldıktan sonra OID kısmından yukarıdaki sorgular gönderilirse registerların değerleri şekildeki gibi karşımıza çıkar.

<center>

![snmp_08](/img/snmp_08.png)
***<center>Şekil 8 MIB Browser SNMP Uygulaması</center>***

</center>

#### SNMP Trap Uygulaması

Manager’ın sorgu göndermeden, agent’in manager’a veri göndermesinin yolu Trap yöntemidir. Bu yöntemde Trap bloğunun girişine bağlanılan register, Trap bloğunun içindeki şartlara göre gönderilir.

<center>

![snmp_09](/img/snmp_09.png)
***<center>Şekil 9 SNMP Trap Uygulaması</center>***

</center>

Trap ayarları aşağıdaki gibi girilir.

<center>

![snmp_10](/img/snmp_10.png)
***<center>Şekil 10 SNMP Trap Bloğu Özel Ayarları</center>***

</center>

MIB Browser Trap ayarları da aşağıdaki gibi yapılır.

<center>

![snmp_11](/img/snmp_11.png)
***<center>Şekil 11 MIB Browser Trap Alıcı Ayarları</center>***

</center>

Trap bloğunun girişindeki register değeri değiştirilir ve eğer blok ayarlarında belirtilen şart sağlanıyorsa trap alıcısında aşağıdaki gibi görünür.

<center>

![snmp_12](/img/snmp_12.png)
***<center>Şekil 12 MIB Browser Trap Alıcısı</center>***

</center>






