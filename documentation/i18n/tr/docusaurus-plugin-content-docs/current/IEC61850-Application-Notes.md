---
title: IEC61850 Uygulama Notu
---

### Data Nesnesi Okuma

1.	Telediagramın 16.1.04 beta8 ve üstü sürümüyle gelen Mdv61850 Browserı açmak için Tools menüsünden Mdv61850 Browser tıklanır.

<center>

![61850-Browser1](/img/61850-Browser1.png)
***<center>Şekil 1: Tools/Mdv61850 Browser</center>***

</center>

2.	Koruma Rölesinden alından konfigürasyon dosyası(xxxx.cid) seçilip, konfigürasyon yüklenir.

<center>

![61850-Browser2](/img/61850-Browser2.png)
***<center>Şekil 2: Konfigürasyon Yükleme</center>***

</center>

1 ile 2 numaralı butonlar arasında IED1 yazan listeden, birden fazla röle olması halinde konfigüre etmek istenen röle seçilir.

3.	Konfigürasyon dosyası açıldığında soldaki menüden alınmak istenilen değerler çift tıklanarak sağdaki tabloya aktarılır.

<center>

![61850-Browser3](/img/61850-Browser3.png)
***<center>Şekil 3: Data Nesnesi Yükleme</center>***

</center>

4. Telediagram projesine tablodaki her bir değer için Result Block, Status Block ve Trig Bloğu eklenir.

<center>

![61850-Browser4](/img/61850-Browser4.png)
***<center>Şekil 4: Data Nesnesi Tablosu</center>***

</center>


Status, Trig ve Dataset From Report blokları için Telediagram projesinde binary register, RxTime ve RxCount blokları için ise projeye long register eklenir.                  
Result bloğu için Type’a göre projeye uygun blok eklenir. Type çeşitleri ve Telediagram karşılıkları aşağıda listelenmiştir.            
•	BOOLEAN ise projeye binary register.          
•	INT32 ise projeye long register.           
•	FLOAT32 ise projeye analog register.            

<center>

![61850-Browser5](/img/61850-Browser5.png)
***<center>Şekil 5: Eklenen Telediagram Blokları</center>***

</center>

5. Projects / Blok Properties / Export selected blocks to CSV butonuna tıklanır ve blokların hat etiketleri csv dosyasına export edilir.

<center>

![61850-Browser6](/img/61850-Browser6.png)
***<center>Şekil 6: Block Properties Ekranı</center>***

</center>

6.	Mdv 61850 Browsera geri dönülüp ekranın sağ tarafında “Import Line Labels” butonuna tıklanarak telediagramda csv olarak export ettiğimiz bloklar seçilir. Seçim bittikten sonra Info Screen’de blok isimlerini görmelisiniz.

<center>

![61850-Browser7](/img/61850-Browser7.png)
***<center>Şekil 7: Import Line Labels Ekranı</center>***

</center>

7.	Data nesnelerine blok atamalarını yapmak için ilgili bloğun hücresine çift tıklanarak projedeki blok ismi seçilir.

<center>

![61850-Browser8](/img/61850-Browser8.png)
***<center>Şekil 8: Data Nesnelerin Line Label Atama Ekranı</center>***

</center>

8.	Blok isimleri seçildikten sonra “Export” butonuna basılır ve Telediagrama import edilecek dosyanın dizini ve adı çıkan uyarı ekranında görünür.                      
“C:/Users/< username >/MdvExports/” dizininde export edilmiş dosyayı bulabilirsiniz.

<center>

![61850-Browser9](/img/61850-Browser9.png)
***<center>Şekil 9: Konfigurasyon Export Ekranı</center>***

</center>

9.	Mdv61850 Browser’da oluşturulan kofigurasyon dosyası, Telediagram / Projeler / 61850 Sekmesi / Import Tables from Excel tıklanarak Telediagrama aktarılır.

Eğer önceden eklenmiş röle tanımı varsa, onu silmeden 2. bir röle eklemek isteniyorsa Import Connection from Excel butonuna basılır

<center>

![61850-Browser10](/img/61850-Browser10.png)
***<center>Şekil 10: Telediagram 61850 Tablosu Import Ekranı</center>***

</center>

10.	Import işlemi bittikten sonra tablo aşağıdaki gibi görünecektir. IP ve port ayarları kontrol edilir;

<center>

![61850-Browser11](/img/61850-Browser11.png)
***<center>Şekil 11: 61850 Tablosu</center>***

</center>

11.	Projeyi cihaza yükledikten sonra trig bloğuna tetik verdiğimizde verilerin geldiği görülür. Status registerları her tetikte 0’a inip okuma başarılıysa tekrar 1’e yükselir, okuma doğruluğu bu şekilde sağlanabilir.

<center>

![61850-Browser12](/img/61850-Browser12.png)
***<center>Şekil 12: Sonuç</center>***

</center>

### Dataset Okuma


1.	Sol ortadaki Dataset Object listesinden okumak isteidğimiz dataset çift tıklanıp, sağdaki Datasets listesine eklenir.

<center>

![61850-Browser13](/img/61850-Browser13.png)
***<center>Şekil 13: DataSet Object Listesi</center>***

</center>

2.	Datasetin içindeki okunacak nesneler çift tıklanarak Dataset Member Object Indexes tablosuna eklenir.

<center>

![61850-Browser14](/img/61850-Browser14.png)
***<center>Şekil 14: DataSet Object Indeks Tablosu</center>***

</center>

3.	Dataset için Status, Trig Block, RxTime, RxCount, Dataset From Report blokları ve dataları okuyacağımız result blokları eklenir.

Status, Trig ve Dataset From Report blokları için Telediagram projesinde binary register, RxTime ve RxCount blokları için ise projeye long register eklenir.                  
Result bloğu için Type’a göre projeye uygun blok eklenir. Type çeşitleri ve Telediagram karşılıkları aşağıda listelenmiştir.               
•	BOOLEAN ise projeye binary register.            
•	INT32 ise projeye long register.            
•	FLOAT32 ise projeye analog register.          

<center>

![61850-Browser15](/img/61850-Browser15.png)
***<center>Şekil 15: DataSet Blokları</center>***

</center>

4.	Projects / Blok Properties / Export selected blocks to CSV butonuna tıklanır ve blokların hat etiketleri csv dosyasına export edilir.

<center>

![61850-Browser16](/img/61850-Browser16.png)
***<center>Şekil 16: Block Properties Ekranı</center>***

</center>

5.	Mdv 61850 Browsera geri dönülüp ekranın sağ tarafında “Import Line Labels” butonuna tıklanarak telediagramda csv olarak export ettiğimiz bloklar seçilir. Seçim bittikten sonra Info Screen’de blok isimlerini görmelisiniz.

<center>

![61850-Browser17](/img/61850-Browser17.png)
***<center>Şekil 17: Insert Line Label Ekranı</center>***

</center>

6. Data nesnelerine blok atamalarını yapmak için ilgili bloğun hücresine çift tıklanarak projedeki blok ismi seçilir.

<center>

![61850-Browser18](/img/61850-Browser18.png)
***<center>Şekil 18: Line Label Ekranı</center>***

</center>

7.	Blok isimleri seçildikten sonra “Export” butonuna basılır ve Telediagrama import edilecek dosyanın dizini ve adı çıkan uyarı ekranında görünür.                       
C:/Users/< username >/MdvExports/ 

<center>

![61850-Browser19](/img/61850-Browser19.png)
***<center>Şekil 19: Konfigürasyon Export Ekranı</center>***

</center>

8. Mdv61850 Browser’da oluşturulan kofigurasyon dosyası, Telediagram / Projeler / 61850 Sekmesi / Import Tables from Excel tıklanarak Telediagrama aktarılır.

Eğer önceden eklenmiş röle tanımı varsa, onu silmeden 2. bir röle eklemek isteniyorsa Import Connection from Excel butonuna basılır.

<center>

![61850-Browser20](/img/61850-Browser20.png)
***<center>Şekil 20: Telediagram 61850 Tablosu Import Ekranı</center>***

</center>

9.	Import işlemi bittikten sonra tablo aşağıdaki gibi görünecektir. IP ve port ayarları kontrol edilir;

<center>

![61850-Browser21](/img/61850-Browser21.png)
***<center>Şekil 21: 61850 Tablosu</center>***

</center>

10.	Projeyi cihaza yükledikten sonra trig bloğuna tetik verdiğimizde verilerin geldiği görülür. Status registerı her tetikte 0’a inip okuma başarılıysa tekrar 1’e yükselir, okuma doğruluğu bu şekilde sağlanabilir.

<center>

![61850-Browser22](/img/61850-Browser22.png)
***<center>Şekil 22: DataSet Okuma Sonucu</center>***

</center>

### Report Okuma

Oluşturulan dataseti tetik vermeden okumak için aşağıdaki adımlar takip edilir;

1.	Sol altta Reports kısmından oluşturulan raporlar listelenir. Okunmak istenen rapora çift tıklanarak ortadaki Reports tablosuna eklenir.

<center>

![61850-Browser23](/img/61850-Browser23.png)
***<center>Şekil 23: Report Ekleme</center>***

</center>

Burada dikkat edilmesi gereken nokta, Reports tablosuna eklenen raporun dataset idsinin(Ds ID) yukarıdaki dataset ile aynı olmasıdır.

2.	Trig Type kutucuğuna çift tıklanınca açılan dialog penceresinde datanın ne zaman gönderileceği seçilir ve Period kutucuğuna da okuma periyodu milisaniye cinsinden girilir. 

•	TRG_OPT_DATA_CHANGED: Veri değişiminde gönder.           
•	TRG_OPT_QUALITY_CHANGED: Quality değişiminde gönder.       
•	TRG_OPT_DATA_UPDATE: Veri güncellendiğinde gönder.       
•	TRG_OPT_INTEGRITY: Periyodik bütün olarak gönder.        
•	TRG_OPT_GI: Genel sorgu isteği geldiğinde gönder.          

<center>

![61850-Browser24](/img/61850-Browser24.png)
***<center>Şekil 24: Trig Type Dialog Ekranı</center>***

</center>

3.	Dataset okuma kısmındaki 15. Adımdan itibaren yapılan import-export işlemleri tekrarlanır ve proje cihaza yüklenir.

4.	Röleden gelen değerlerin bloklara aktarıldığı ve “Dataset from report flag” bloğunun 1 olduğu görülür.

<center>

![61850-Browser25](/img/61850-Browser25.png)
***<center>Şekil 25: Report Okuma Sonucu</center>***

</center>