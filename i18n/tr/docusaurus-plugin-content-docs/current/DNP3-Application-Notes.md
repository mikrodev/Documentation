---
title: "DNP3 Uygulama Notu"
---

## DNP3 Slave

### Genel Bilgi

DNP3 protokolü bir dağıtık haberleşme protokolüdür.  Başlıca üstünlüklerini şunlardır:

•	Zaman etiketli değişken desteği         
•	Haberleşmenin olmadığı zamanda oluşan olayları zaman etiketleriyle bağlantı kurulunca tekrar gönderebilme özelliği        
•	SCADA nın sorgulama yapmasına gerek olmadan değişimleri otomatik gönderebilme özelliği.          
•	Değişkenleri tek tek değil, sınıf olarak çoklu sorgulayabilme özelliği           
•	Zaman senkronizasyon            

### DNP3 Slave Sürücüsü

Mikrodev RTU cihazları, DNP3 SLAVE modunu destekler ve DNP3 destekleyen Ünitelere sistemlerine TCP/IP ve/veya Seri port üzerinden hizmet verir. Aşağıdaki servisler desteklenir:

1-	Class nesne sorgusu ile toplu nesne okunması       
2-	Object Static Variation ve Object Event Variation ekleme (belirlenen değişkenlerin nesne tiplerine göre)        
3-	Zaman senkronizasyonu        
4-	Yüzde ve Seviye olarak anlık ölçüm verilerinde olay denetimi          
5-	Olay verilerinin otomatik gönderimi         
6-	Data noktalarının periyodik gönderimi         

<center>

![dnp3-image1](/img/dnp3-image1.png)
***<center>Şekil 1: Mikrodev RTU genel kullanım şeması</center>***

</center>

### DNP3 Slave Blok Tanımlamaları

#### Bağlantılar

<center>

![dnp3-image19](/img/dnp3-image19.png)

</center>

#### Bağlantı Açıklamaları

**Ser: TCP Soket Girişi**

DNP3 protokolün çalışacağı TCP server soket bloğu bu girişten bağlantısı yapılır.

**Trg: Tetik Girişi**

Periyodik gönderim için tetik girişidir. Yükselen kenar olarak çalışır.

**Asd: Asdu Address Girişi**

ASDU adresi girişi olarak kullanılır.

**#DNP30: Bağlantı Durum Bilgisi**

Master ile slave arasındaki bağlantı durumunu kontrol etmek için kullanılır. DNP3 master ile bağlantı kurulduğunda 1 değerini verir.

#### Blok Özel Ayarları

<center>

![dnp3-image20](/img/dnp3-image20.png)

</center>

#### Blok Açıklaması

Projeye DNP3 Slave blok ekleyerek, RTU üzerinde DNP3 protokolü aktif hale getirilir. 

**Ser Girişi:**

DNP3 blok ser girişine TCP veya Seri port bloğu eklenir.

**Not:** Birden fazla master a hizmet vermek için her bir master için telediagram projesine DNP3 Slave blok eklenmesi gerekir. 

**Trg Girişi:**

Tetiğin yükselen kenarında, DNP3 nesneleri arasında periyodik gönderim aktif seçilen nesneler, Periyodik COT ile mastera iletilir.           
Bu giriş periyodik gönderim yapılmak istenmiyorsa boş bırakılabilir.

**Asd Girişi:**

DNP3 Asdu adresi, blok özel ayarları yerine dışarıdan ayarlanmak istenirse Asd girişi kullanılır.

**#DNP30 Çıkışı:**

Master ile slave arasındaki bağlantı durumunu kontrol etmek için kullanılır. DNP3 master ile bağlantı kurulduğunda 1 değerini verir.

<center>

![dnp3-image21](/img/dnp3-image21.png)
***<center>Şekil 2: DNP3 Slave Blok Örnek FBD Projesi</center>***

</center>

RTU lojik projesine DNP3 Slave bloğu eklendiğinde, RTU üzerinde DNP3 protokolü aktif hale gelir. Bu protokolün RTU'daki değişkenlerle ilişkilendirilmesi, değişken adres tablosu aracılığıyla gerçekleştirilir. Bu tabloda tanımlanan değişkenler, master cihazı ile doğru iletişim kurulmasını sağlar.

Object 60 ve Object 80, DNP3 protokolünün kritik nesnelerindendir ve master ile iletişim kurulabilmesi için değişken adres tablosunda mutlaka tanımlanmalıdır:

•	Object 60: Olay (event) ve statik verilerin sınıflandırılmasını ve talep edilmesini sağlar. Bu nesne, master cihazın belirli sınıflara (Class 0, Class 1, Class 2, Class 3) yönelik sorgular göndermesine ve yalnızca ilgili verilerin alınmasına olanak tanır.

•	Object 80: Cihazın iç durumu ve teşhis bilgilerini izlemeye hizmet eder. Bu nesne, RTU'nun güncel ve iletişim durumu gibi bilgilerinin kontrol edilmesini sağlar.
Object 60 ve Object 80 değişkenlerini tanımlamak için değişken adres tablosuna gidilir. Hat etiketi, başlangıç adresi gibi girdiler rastgele seçilebilir.


<center>

![dnp3-image22](/img/dnp3-image22.png)
***<center>Şekil 3: DeviceObj ve ClassObj Tanımlama</center>***

</center>

**Not:** Eğer DeviceObj (Nesne 60) ve ClassObj (Nesne 80) değişkenleri değişken adres tablosunda tanımlanmazsa, DNP3 Master ile Slave arasında haberleşme sağlanamaz.

##	DNP3 Değişken Adres Tablosu Tanımlamaları

###	Değişken Adres Tablosu

RTU lojik projesindeki değişkenlerin DNP3 protokolü ile ilişkilendirilmesi için değişken adres tablosu kullanılır.

<center>

![dnp3-image23](/img/dnp3-image23.png)
***<center>Şekil 4: Değişken Adres Tablosu</center>***

</center>

### Hat Etiketi Tanımlama

Telediagram projesine eklenen tüm bloklar için Hat Etiketi tanımlaması yapılabilir. Değişken adres tablosunda protokol adresleri ile ilişkilendirme yapabilmek için, ilgili blokların hat etiketi tanımlanmış olması gerekmektedir.

<center>

![dnp3-image24](/img/dnp3-image24.png)
***<center>Şekil 5: Hat Etiketi Tanımlama</center>***

</center>

### Hat Etiketi İlişkilendirme

Hat etiketleri ile protokol adreslerinin ilişkilendirilmesi, değişken adres tablosundaki “Ekle” butonuna basılarak çıkan menüden sağlanır.

<center>

![dnp3-image25](/img/dnp3-image25.png)

</center>

<center>

![dnp3-image26](/img/dnp3-image26.png)

</center>

<center>

![dnp3-image27](/img/dnp3-image27.png)

</center>

## DNP3 Nesne Sınıfları

DNP3 protokolündeki sınıf yapısı, verilerin öncelik ve kategorilere göre gruplandırılmasını sağlayarak iletişim etkinliğini artırır. Veriler, Sınıf 0, Sınıf 1, Sınıf 2 ve Sınıf 3 olmak üzere dört ana sınıfta toplanır ve bu sınıflar, değişken adres tablosunda belirtilen nesne sınıflarına göre tanımlanır.

**Sınıf 0 (Class 0):** Bu sınıf, statik (değişmeyen) veriler için ayrılmıştır. Statik veriler, bir cihazdaki verinin mevcut değerini yansıtır. Örneğin, bir sensörün o anki ölçüm değeri, bir anahtarın mevcut konumu gibi bilgiler Sınıf 0'da yer alır. Sınıf 0 verileri genellikle düşük önceliklidir ve master tarafından talep edildiğinde gönderilir. Sınıf 0’a atanmış noktalar olay (event) bildirmez. Bir cihazdaki tüm statik veri türlerini okumak, Sınıf 0'ı okumakla aynı anlama gelir.

**Sınıf 1 (Class 1):** Bu sınıf, yüksek öncelikli olay verileri için kullanılır. Bir olay (event), bir veri noktasındaki bir değişiklik veya başka bir tetikleyici sonucu ortaya çıkar. Sınıf 1 olayları, diğer sınıflara göre daha acil olarak kabul edilir. Genellikle, önemli durum değişiklikleri veya kritik alarmlar gibi yüksek öncelikli bilgiler bu sınıfa atanır. Örneğin, bir güvenlik sisteminde izinsiz giriş algılandığında bu olay Sınıf 1 olarak rapor edilebilir.

**Sınıf 2 (Class 2):** Bu sınıf, orta öncelikli olay verileri için kullanılır. Sınıf 2 olayları, Sınıf 1 olaylarından daha az acil, ancak Sınıf 3 olaylarından daha önceliklidir. Daha az kritik durum değişiklikleri veya olaylar bu sınıfa atanır. Örneğin, bir cihazdaki bir uyarı sinyali Sınıf 2 olarak rapor edilebilir.

**Sınıf 3 (Class 3):** Bu sınıf, düşük öncelikli olay verileri için kullanılır. Sınıf 3 olayları, diğer sınıflara göre daha düşük bir önceliğe sahiptir. Genellikle, rutin olaylar veya daha az acil durum değişiklikleri bu sınıfa atanır. Örneğin, bir cihazdaki bir ölçümün belirlenen aralığı aşması durumu Sınıf 3 olarak rapor edilebilir.

**Not:** Master cihazdan Unsolicited Enable sorgusu ile DNP3 verileri almak isteniyorsa, ilgili adreste mutlaka 0 değerinden farklı bir sınıf (class) tanımı bulunmalıdır. Sınıf (class) tanımı 0 olarak belirlenmiş adresler için unsolicited mesajlar gönderilemez. Bu nedenle, kritik veya olay bazlı verilerin doğru şekilde iletilmesi için değişkenlerin sınıf (class) yapıları dikkatlice tanımlanmalıdır.


## DNP3 Nesne Tipleri

DNP3 slave cihazı, aşağıda belirtilen nesne tiplerindeki varyasyon 0 komutlarına, değişken adres tablosunda tanımlanan statik ve event varyasyonları ile yanıt verir. Bu nedenle varsayılan olarak atanmak istenen statik ve event varyasyonlar değişken adres tablosunda mutlaka tanımlanmalıdır.

Bu nesneler, değişim (event) olaylarının veya statik durumların sorgulanması ve iletilmesi için kullanılır.

<center>

![dnp3-image28](/img/dnp3-image28.png)

</center>

**Not:** Binary Input Change ve Analog Input Change nesne tipleri, değişken adres tablosunda tanımlı değildir. Bunun yerine, değişim takibi için Binary Input ve Analog Input nesne tipleri kullanılır. Eğer bu nesnelerde "değişimde gönder" özelliği etkinleştirilmişse, bu değişkenlerde bir değişim meydana geldiğinde, DNP3 Slave cihazı, Master cihazın sorgusuna uygun şekilde (Binary Input Change veya Analog Input Change olarak) yanıt verir. 

### DNP3 Okuma Yönünde Nesne Tipleri

DNP3 protokolüne göre, master cihaz, slave cihaza 0 Varyasyon sorgusu gönderdiğinde, slave cihaz yalnızca değişken adres tablosunda tanımlı statik varyasyonlarla yanıt verir. Bunun yanı sıra, master tarafından bir değişken için örneğin varyasyon 1 ile sorgu gönderildiğinde, slave cihaz ilgili değişkenin farklı bir varyasyonla tanımlanmış olmasına bakmaksızın, varyasyon 1 ile yanıt verir.

#### Binary Input Değişkeninin Desteklediği Varyasyonlar

<center>

![dnp3-image29](/img/dnp3-image29.png)

</center>

#### Binary Output Değişkeninin Desteklediği Varyasyonlar

<center>

![dnp3-image30](/img/dnp3-image30.png)

</center>

#### Analog Input Değişkeninin Desteklediği Varyasyonlar

<center>

![dnp3-image31](/img/dnp3-image31.png)

</center>

<center>

![dnp3-image32](/img/dnp3-image32.png)

</center>

#### Analog Output Değişkeninin Desteklediği Varyasyonlar

<center>

![dnp3-image33](/img/dnp3-image33.png)

</center>

**Not:** Değişkenlerin desteklediği varyasyonlar dışında herhangi bir varyasyon tanımlanmamalıdır. Slave cihaz, yalnızca burada belirtilen varyasyonları desteklemektedir. Bu nedenle, farklı varyasyonların kullanımı haberleşme hatalarına yol açabilir.

**Not:** 0. varyasyon, master cihaz slave cihaza varsayılan olarak tanımlanan varyasyonları sorgulamak için kullanır. Bu nedenle, slave cihazda 0. varyasyon tanımlanmamalıdır.

### DNP3 Kontrol Yönünde Nesne Tipleri

Slave cihazda kontrol yönünde desteklenen nesne tipleri şu şekildedir:

<center>

![dnp3-image34](/img/dnp3-image34.png)

</center>

Cihazda değişken adres tablosunda tanımlanan 2 farklı kontrol yönünden nesne tipi bulunmaktadır. Bunlar Control Relay (12) ve Control Analog (41) nesne tipleridir. 

## DNP3 Olay (Event) Mekanizması

###	DNP3 Nesneleri için Olay Tanımı

Binary Input Change ve Analog Input Change nesne tipleri, değişken adres tablosunda tanımlı değildir. Bunun yerine, değişim takibi için Binary Input ve Analog Input nesne tipleri kullanılır. Eğer bu nesneler "değişimde gönder" özelliği etkinleştirilmişse, bu değişkenlerde bir değişim meydana geldiğinde, DNP3 Slave cihazı, Master cihazın sorgusuna uygun şekilde yanıt verir. 

Değişken adres tablosunda, DNP3 nesneleri için değişimde gönder seçimi mevcuttur. Bu menüde tanımlanan değişkenin değeri değişince yapılacak işlem seçilir.

Hiçbir Değişimde: Değer değişimi gönderimi tetiklemez. 

Seviye Değişiminde: “Değişim Değeri” nde tanımlanan miktar kadar değişim olunca gönderim tetiklenir. 

Yüzde Değişiminde: “Değişim Değeri” nde tanımlanan yüzde kadar değişim olunca gönderim tetiklenir. 

İntegral Değişiminde: “Değişim Değeri” nde tanımlanan değer eklenen nesnenin birim zamanındaki değişimlerinin toplamını aşarsa gönderim tetiklenir. 

Değişim Değeri “Gönderim Metodu” ile birlikte yüzde, seviye ve integral değişim değerini ayarlar. 

Örneğin değişken adres tablosunda tanımlanan DNP3 nesnesinin gönderim metodu integral değişiminde seçilip, değişim miktarı 10 girildiğinde; 

Tanımlanan değişkenin değişim miktarı 2 olduğunda (tanımlanan değişkenin son değeri ile bir önceki değeri arasındaki fark alınır) gönderim 10/2 (değişken adres tablosuna girilen değişim değeri bölü tanımlanan değişkenin değişim miktarı) işleminden dolayı 5 sn sonra,    
değişim miktarı 5 olduğunda gönderim 10/5 işleminden dolayı 2 sn sonra,            
değişim miktarı 15 olduğunda, değişken adres tablosuna girilen değişim miktarından büyük olmasından dolayı hemen tetiklenecektir.

#### DNP3 Olay (Event) Durumlarının Anlık İletimi 

DNP3 Slave cihazı, "Değişimde Gönder" olarak tanımlanan durumları ve olay olarak algılanan değişiklikleri etiketler. Etiketlenmiş bir olay olduğunda:

Eğer slave ile master arasında bağlantı mevcutsa ve master cihaz unsolicited mesajlarını kabul edecek şekilde etkinleştirilmişse, ilgili nesne hemen unsolicited mesajı olarak iletilir.

**Not:** Unsolicited gönderimi, yalnızca master cihazın bu özelliği desteklemesi ve aktif olarak ayarlanmış olması durumunda gerçekleştirilir.

**Not:** Master cihazdan Unsolicited Enable sorgusu ile DNP3 verileri almak isteniyorsa, ilgili adreste mutlaka 0 değerinden farklı bir sınıf (class) tanımı bulunmalıdır. Sınıf (class) tanımı 0 olarak belirlenmiş adresler için unsolicited mesajlar gönderilemez. 

#### DNP3 Master ile Bağlantı Yokken Olay (Event) Durumları

RTU cihazı, değişimde gönder tanımlı olan ve değişim tespit edilmiş durumları olay olarak etiketler. Bu veriler cihazda Sınıf (Class) verileri olarak saklanır. Bellekte saklanan bu sınıf (class) olay verileri, Class 1, Class 2 veya Class 3 veri okuma sorguları ile Master cihaz tarafından okunabilir. Eğer unsolisted gönderme etkinleştirilmişse, RTU cihazı bu verileri otomatik olarak mastera iletir.

Eğer slave ile master arasında bağlantı yok ise, rtu cihazı class verilerini olay kayıt hafızasına ekler ve tekrar bağlantı kurulduğunda göndermek üzere saklar. 

**Not:** Saklama işlemi için DNP3 Slave bloğunun özel ayarlarından log-kayıt belleğine ekle seçeneği seçili olmalıdır.

**Not:** Bağlantı kurulduğunda log-kayıt belleğinde tutulan tüm class verilerinin mastera gönderilmesi isteniyorsa DNP3 Slave bloğunun özel ayarlarından DevNET ile senkronla seçeneği seçili olmalıdır.

**Not:** DNP3 nesneleri arasında periyodik gönderim aktif seçilen nesnelerin değerleri olay (event) olarak algılanmaz. Yani periyodik gönderimler bağlantı yokken log kayıt belleğine eklenmez.

DNP3 değişkenlerindeki eventlar aşağıdaki tabloda belirtilen DNP3 nesne tipleri aracılığıyla iletilir:

<center>

![dnp3-image35](/img/dnp3-image35.png)

</center>