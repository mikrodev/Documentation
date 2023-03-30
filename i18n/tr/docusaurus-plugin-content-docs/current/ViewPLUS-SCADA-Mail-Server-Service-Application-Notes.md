---
title: "ViewPLUS SCADA Mail Server Hizmeti Uygulama Notu"
---

Scada projesinde tanımlı olan kullanıcıların e-posta adresleri girilerek, alarm durumlarında burada yer alan e-posta adreslerine mail atılması sağlanabilir.

Öncelikle scada projesinde bulunan ServerEngine.ini dosyasına mail server ayarlarının tanımlı olması gerekmektedir. Burada yer alacak olan e-posta, alarm durumlarında mail gönderecek olan adrestir.

### Scada Mail Server Ayarları

**Not:** Scada Mail Server yapılandırılması yapılırken, aktif ise scada sunucusu ve client uygulaması kapatılmalıdır.

Versiyon ViewPLUS \(0.9.154 beta build 15\) öncesi için - > C:\Users\< Kullanıcı Adı >\AppData\Roaming\Mikrodev\ScadaServer\< Scada Projesi >

Versiyon ViewPLUS \(0.9.154 beta build 15\) dan sonrası için - > C:\ProgramData\Mikrodev\ScadaServer\< Scada Projesi >

Dosya yolu izlenerek mail server tanımlanacak scada projesinin ServerEngine.ini dosyası bulunur. Notepad++ vb. bir uygulama ile düzenle seçeneği ile açılır.

<center>

![mailserver](/img/mailserver.png)
***<center>Şekil 1: ServerEngine.ini dosyasını düzenleme</center>***

</center>

Bu dosyada SMTP kısmı bulunur.

<center>

![mailserver1](/img/mailserver1.png)
***<center>Şekil 2: ServerEngine.ini dosyasında yer alan SMTP kısmı</center>***

</center>

SMTP_user = < E-posta Adresi > // Maili gönderecek olan e-posta adresi yazılır.

SMTP_pwd = < Uygulama Şifresi > // Maili gönderecek olan hesaptan scada uygulaması için şifre alınması gerekmektedir. (Bu kısım Gmail Uygulama Şifresi Alma başlığının altında anlatılmıştır.)

SMTP_host = < SMTP Server Adresi > // E-posta adresine ait SMTP Server Adresi girilir. (Gmail için smtp.gmail.com yazılmalıdır.)

SMTP_port = < SMTP Server Portu > // E-posta adresine ait SMTP Server Portu girilir. (Gmail için 465 yazılmalıdır.)

SMTP_mailDelay = < Süre > // Bir alarm durumundan sonra bir e-postanın gönderilmesi için beklenecek süre girilir. (saniye cinsinden)  

#### Gmail Uygulama Şifresi Alma

Maili gönderecek olan e-posta adresi gmail ise aşağıdaki adımlar takip edilerek uygulama şifresi alınır.

- Gmail adresinde oturum açın.    
- “Google hesabınızı yönetin” tıklayın.      
- Güvenlik kısmından Oturum Açma Seçeneklerinden 2 adımlı doğrulama özelliğini açın.    

<center>

![mailserver2](/img/mailserver2.png)
***<center>Şekil 3: Google Oturum Açma Seçenekleri</center>***

</center>

- Uygulama şifreleri kısmından scada uygulamasına yeni bir şifre tanımlayın. Uygulama seçin kısmından Diğer (Özel ad) seçeneğini seçin ve istediğiniz isimlendirmeyi yapın, oluştur yazısına tıklayın.    

<center>

![mailserver3](/img/mailserver3.png)
***<center>Şekil 4: Uygulama Şifresi Oluşturma</center>***

</center>

- Ekranda yer alan şifreyi kaydedin. Ekranda yer alan şifre mail server un şifresi olacaktır. (SMTP Pwd: Kısmına burada yer alan şifre girilmelidir.)

<center>

![mailserver4](/img/mailserver4.png)
***<center>Şekil 5: Örnek Uygulama Şifresi</center>***

</center>


### ViewPLUS Editör Ayarları

Scada projesinde yer alan alarmlar tanımlanan kullanıcının e-posta adresine mail olarak gönderilmesi isteniyorsa, ViewPLUS Editör üzerinden Kullanıcı Yöneticisi başlatılır.

<center>

![mailserver5](/img/mailserver5.png)
***<center>Şekil 6: Kullanıcı Yöneticisini Başlatma</center>***

</center>

- E-posta adresi tanımlanacak olan kullanıcı seçilir.    
- Kullanıcı Verisi -> Diğer -> Eposta kısmına mailin gönderilmesi istenilen e-posta adresi girilir.   
- Kullanıcı Verisi -> Diğer -> Abonelikler kısmından mail atılması istenilen alarm durumları seçilir. (bu kısım ViewPLUS editörünün alarmlarda yer alan abone kullanıcılar kısmından kullanıcı ataması yapılarak da yapılabilir.)         
-  Kullanıcı Verisi -> Diğer -> Abonelikler kısmında yer alan “Alarm Uyarılarını e-posta ile gönder” seçeneğinin işaretli olması gerekmektedir.        

<center>

![mailserver6](/img/mailserver6.png)
***<center>Şekil 7: Kullanıcı Ayarları</center>***

</center>

Yukarıdaki adımlar takip edildiğinde alarm durumlarında tanımlanan e-posta adresine mail atılacaktır.
