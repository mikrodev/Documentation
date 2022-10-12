---
title: ViewPLUS SCADA Harita İkonları 
---

## Giriş

ViewPLUS Scada, harita üzerinde etiket değerine göre ikon değiştirme özelliğine sahiptir, bu yazımızda nasıl yapacağınız anlatılmaktadır.

Aşağıdaki bağlantıdan ViewPLUS SCADA Harita Simgeleri Örneği'ni indirin:

[Harita Simgeleri Örneği](http://www.mikrodev.com/downloads/documentation/MapIcon_Example.zip)

### Kategori Oluşturma

Haritaya eklediğiniz ikonun resmini veya rengini değiştirmek için kategori oluşturmanız gerekmektedir.

Eklediğiniz ikon üzerine tıklayın,

ViewPLUS Scada Editörü -> GIS Nesneleri -> Seçili İşaretçi Özellikleri -> Kategori -> Edit yazısına tıklayın

<center>

![mapicon1](/img/mapicon1.png)

</center>

Yeni kategori ekle düğmesini tıklayın. Kategori adını yazın ve resmi yükleyin. Bu sayede harita simgeleri alarm veya diğer durumlar göstergesi olarak farklı renk ve şekillerde kullanılır.

<center>

![mapicon2](/img/mapicon2.png)

</center>

### Harita İkonlarından Etiket Durumunu İzleme

Oluşturulan kategorilere etiket değer ataması yapılarak, etiketin aldığı değerlere göre ikon rengi veya görseli değiştirilebilmektedir. Bu sayede ikonlar üzerinden etiketin durumu izlenebilir.

Oluşturulan kategorilere etiket değer ataması run function kısmından yapılmaktadır.

ViewPLUS Scada Editörü -> GIS Nesneleri -> Seçili İşaretçi Özellikleri -> Run Function

<center>

![mapicon3](/img/mapicon3.png)

</center>

### Harita İkonlarından Etiket Durumunu İzleme Örneği

Seçili işaretleyici özelliklerinde her işaretçi için aşağıdaki gibi çalıştırma fonksiyon kodunu ekleyin.

```
function onCheckMarkerIcon(){
var $Category ="Beyaz";			
if (${1} == 3 )
   $Category="Sari"; 			
else if(${1} == 2)
   $Category="Siyah";
else if(${1} == 1)
   $Category="Kirmizi";

return $Category;
}
```

```
   ${1};
```
Etiket kimliğinin 1 olduğu etiket anlamına gelir.

```
   var $Category ="Beyaz";
```
Varsayılan görüntü yukarıdaki gibi ayarlandı.

```
if (${1} == 3 )
   $Category="Sari"; 
```
Etiket değeri 3'e eşitse, simge adı "Sari" olan resmi gösterecektir.

```
else if(${1} == 2)
   $Category="Siyah";
```
Etiket değeri 2'ye eşitse, simge adı "Siyah" olan resmi gösterir.

Bu şekilde etiketin değerine göre ikon renkleri değişmektedir.

Daha fazla görüntü eklemek için run function kısmına daha fazla if satırı ekleyebilirsiniz.

### Sonuçlar

<center>

![mapicon4](/img/mapicon4.png)

</center>
<center>

![mapicon5](/img/mapicon5.png)

</center>

