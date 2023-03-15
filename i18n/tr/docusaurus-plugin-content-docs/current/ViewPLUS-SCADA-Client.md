---
title: ViewPLUS SCADA İstemci
---

## İstemci Operatör Ekranı

SCADA sunucusuna bağlanmak için istemci yazılımına kullanıcı, şifre, sunucu adresi ve port bilgilerini girmeniz gerekmektedir. Yeni bir kullanıcı oluşturmak için "Kullanıcı Yöneticisi" kullanmanız gerekir. Bu bilgiler doğru girildiğinde, sunucu ile istemci yazılımı arasında şifreli bir bağlantı kurulur ve sunucudan gönderilen proje ana ekranı istemcide görüntülenir.

İstemcide gösterilen içerik, kullanıcının erişim ayrıcalıklarına, sayfalara ve tanımlanan etiketlere göre farklılık gösterebilir. Kullanıcının erişim haklarına uygun olmayan sayfalar "sayfa seçicide" gösterilmeyecek veya bu sayfalara yönlendirilen bağlantılar çalışmayacaktır. Sayfadaki bir görsel öğe, kullanıcının erişimi olmayan bir etiket içeriyorsa, kullanıcının bu öğeyi izlemesi veya kontrol etmesi engellenir.

ViewPLUS İstemcisi, açık bir ViewPLUS SCADA sunucusuna bağlanmak için kullanılır. Editör ekranında geliştirilen görsel işlemler ViewPLUS İstemci ekranında görüntülenebilir.

<center>

![client-operator-screen-01](/img/client-operator-screen-01.png)

</center>

| Sayılar | İsimler | Açıklama |
| ------ | ------ | ------ |
| 1 | kullanıcı adı | Projede oluşturulan kullanıcı adı girilir|
| 2 | Kullanıcı Şifresi | Projede oluşturulan kullanıcı şifresi girilir |
| 3 | IP ve Bağlantı Noktası | Sunucu bilgisayarın IP ve Port bilgileri girilir|
| 4 | Giriş Yap | Tüm bilgiler girildikten sonra sunucuya bağlanmak için tıklayın|
| 5 | Kullanıcıyı Hatırla | Girilen son kullanıcı bilgilerini saklar |
| 6 | Profiller | Eklenen kullanıcı bilgilerini otomatik olarak alır |
| 7 | Araç Çubuğu | Sunucuya bağlandığında sol pencerenin açılıp kapanmasını gerçekleştirir|
| 8 | Uygulama | |
| 8.1 | Mevcut Profili Kaydet | İstemci oturum açma ekranındaki bilgilerle yeni bir profil oluşturur |
| 8.2 | Çıkış | ViewPLUSClient programını kapatır |
| 8.3 | Oturumu kapat | Bağlı sunucudan çıkış |
| 9 | Ayarlar | |
| 9.1 | Dil | Türkçe veya İngilizce dil seçimi |
| 9.2 | Bağlantı Hatası Yerleşimini Çiz | Sunucu ile bağlantı koptuğunda, iletişimin kesintiye uğradığı bilgisini bileşenlerde gösterir|
| 9.3 | Geçerli Sayfayı Önbelleğe Alın | Sıcaklık |
| 9.4 | Önbellek Klasörünü Temizle | Sıcaklık |
| 9.5 | Son Ziyaret Edilen Sayfayı Hatırla | ViewPLUSClient| ile sunucuya bağlanırken son ziyaret edilen sayfa ekranda belirir.
| 9.6 | Alarm Sesini Devre Dışı Bırak | Aktif olan alarm sesini devre dışı bırakır|
| 10 | Araçlar | |
| 10.1 | Raporlar | Raporlar sayfasını ekrandaki pencereye getirir |
| 10.2 | Sayfalar | Proje sayfalarını ekrandaki pencereye getirir|
| 11 | pencere | |
| 11.1 | Tam Ekran | İstemci ekranını tam pencerede göster|
| 11.2 | Geçerli Sayfayı Ayır | Son sayfa, farklı bir istemci ekranında otomatik olarak oturum açarak ekranda görünür|
| 11.3 | Ölçekle | Sayfa, tüm bileşenlerle birlikte ekran boyutunda görünür |
| 11.4 | Yakınlaştır | Sayfa görünümünü yakınlaştırır |
| 11.5 | Uzaklaştır | Sayfa görünümünü uzaklaştırır |
| 11.6 | Bölünmüş Alarmlar Baş Aşağı | İstemci ekranının alt kısmında alarm penceresi sayfasını gösterir|
| 11.7 | Alarmları Yan Yana Böl | İstemci ekranının sağ tarafında alarm penceresi sayfasını gösterir |
| 11.8 | Bölmeleri Kaldır | İstemci ekranının alt veya sağ tarafında açık olan alarm pencerelerini kapatır|
| 12 | Yardım | |
| 12.1 | Hata Ayıklama Kazan | Etiketlerin Tag ID ve Data Value bilgilerini sayfa ekranında gösterir|
| 12.2 | ViewPLUSClient Hakkında | İstemci sürüm bilgilerini gösterir |

## İstemci Yardım İçeriği

İstemci programında tanımlanan Yardım İçeriği Bağlantısı, Projeler>>Müşteri Seçenekleri menüsünden "Müşterilere Özel Yardım Bağlantısı" bölümünden değiştirilebilir. İstemci programında bu seçeneği devre dışı bırakmak isterseniz "Sayfa Seçici Panelini Devre Dışı Bırak" seçeneğini seçebilirsiniz.

<center>

![viewplus-client-help-content-01](/img/viewplus-client-help-content-01.png)
***<center>Figure 1: Displaying Custom Help Link for Clients and Disable Options</center>***

</center>

Client Programında "Help" sekmesi altında "Help Contents" seçeneği tıklandığında Editor Programında tanımlanan linke yönlendirilir.

<center>

![viewplus-client-help-content-02](/img/viewplus-client-help-content-02.png)
***<center>Figure 2: Displaying Help Contents Link Position</center>***

</center>

Yukarıdaki gibi "Yardım İçeriği" seçeneğine tıklandığında internet tarayıcısı üzerinden editörde tanımlanan bağlantı açılır.

![viewplus-client-help-content-03](/img/viewplus-client-help-content-03.png)
***<center>Figure 3: Displaying Help Content Link In Browser</center>***