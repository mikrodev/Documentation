---
title: AT Komutları
---

Mikrodev Cihazları, bazı özel parametreleri ayarlayabileceğiniz MODBUS kayıtlarına sahiptir. Bu özel kayıtları aşağıdaki tabloda bulabilirsiniz. Lütfen MODBUS üzerinden ayarladığınız değerlerin güvenlik amacıyla her 5 dakikada bir kalıcı belleğe kaydedileceğini unutmayın. Parametreyi MODBUS üzerinden ayarladıktan sonra cihazı 5 dakikadan daha erken kapatırsanız değişiklikler kaybolabilir.

| | 	AT+XXX=?	 | 	ERİŞİM HAKKI	 | 	AÇIKLAMA	 |			
| ------ | ------ | ------ | ------ |
|	ETHERNET	|	LOCALIP	|	LOGIN REQUIRED, R/W	|		|																	
|		|	MAC	|	LOGIN REQUIRED, R/W	|		|																	
|		|	GATEWAY	|	LOGIN REQUIRED, R/W	|		|																	
|		|	NETMASK	|	LOGIN REQUIRED, R/W	|	 	|																	
|		|	DHCP	|	LOGIN REQUIRED, R/W	|	Enable/Disable DHCP	|																	
|		|	LWIPTMO	|	LOGIN REQUIRED, R/W	|	PLC Ethernet portundan paket alınmazsa ethernet bağlantısını sıfırlar	|																	
|		|	CONFIGPORT	|	LOGIN REQUIRED, R/W	|	 	|																	
|	 	|		|		|	 	|																	
|	GSM	|	GPRSAPN	|	LOGIN REQUIRED, R/W	|		|																	
|		|	GPRSNAME	|	LOGIN REQUIRED, R/W	|		|																	
|		|	GPRSPSSW	|	LOGIN REQUIRED, R/W	|		|																	
|		|	CSQ	|	READ ONLY	|	 ppp etkin değilse kullanılabilir	|																	
|		|	IMEI	|	READ ONLY	|	ppp etkin değilse kullanılabilir	|																	
|		|	GPRSIP	|	READ ONLY	|	 ppp etkin değilse kullanılabilir	|																	
|		|	SIM	|	READ ONLY	|	 ppp aktif değilse kullanılabilir, SIMCARD iletişimi tamamsa true döner	|																	
|		|	MODEM	|	UNPROTECTED, READ ONLY	|	 ppp etkin değilse kullanılabilir, modemden yanıt gönderir ve alır	|																	
|	 	|		|		|		|																	
|	SOCKET STATUS	|	SERVERTIMEOUT	|	LOGIN REQUIRED, R/W	|	Soketlerin sağlam olup olmadığını test eder, değilse kapatır (saniye)	|																	
|	 	|	CONNECTION	|	READ ONLY	|	 	|																	
|		|	SOCKET	|	UNPROTECTED, READ ONLY	|	Bu "soket numarasına" bağlı istemcilerin ayrıntılarını görüntüler	|																	
|		|	PLCRESET	|	LOGIN REQUIRED, R/W	|	Bu aralıkta GSM/ETH'den herhangi bir veri alınmazsa cihazı sıfırlar	|																	
|		|		|		|	 	|																																	
|	PLC STATUS	|	HELP	|	READ ONLY	|	 	|																	
|		|	INCLUDE	|	READ ONLY	|	Cihazda etkinleştirilmiş özellikleri gösterir	|																	
|		|	MEMORY	|	READ ONLY	|	Toplam kullanılan bellek	|																	
|		|	VERSION	|	READ ONLY	|	 	|																	
|		|	SERIALNO	|	READ ONLY	|	 	|																	
|		|	PRODUCTNO	|	READ ONLY	|	Ürün numarasını döndürür	|																	
|		|	MODEL	|	READ ONLY	|	Önyükleyici düzeyinde seçilen cihaz modeli	|																	
|		|	POWERCOUNT	|	READ ONLY	|	Projenin yüklendiği zamandan itibaren toplam sıfırlama sayısı	|																	
|		|	ERROR	|	READ ONLY	|	 	|																	
|		|		|		|	 	|																																	
|	PLC TIME	|	SETTIME	|	LOGIN REQUIRED, R/W	|	 	|																	
|		|	TIMEOFFSET	|	LOGIN REQUIRED, R/W	|	Time zone offset	|																	
|		|		|		|	 	|																																		
|	PLC LCD	|	MENULINE1	|	LOGIN REQUIRED, R/W	|	LCD cihazlar için başlangıç metni, 16 karakter, ilk satır 	|																	
|		|	MENULINE2	|	LOGIN REQUIRED, R/W	|	LCD cihazlar için başlangıç metni, 16 karakter, ikinci satır	|																	
|		|		|		|	 	|																																	
|	WI-FI SETTINGS	|	WIFIPSSW	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi Password	|																	
|		|	WIFISSID	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi SSID	|																	
|		|	WIFIMAC	|	LOGIN REQUIRED, R/W	|	Get WiFi MAC	|																	
|		|	WIFIIP	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi IP Address	|																	
|		|	WIFIGATEWAY	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi Gateway Address	|																	
|		|	WIFINETMASK	|	LOGIN REQUIRED, R/W	|	Set/Get WiFi Network Mask	|																	
|		|		|		|	 	|																																	
|	CANBUS	|	CANSTATUS	|	UNPROTECTED, READ ONLY	|	Genişletme cihazları için durum bilgileri	|																	
|		|	CANCOMMAND	|	LOGIN REQUIRED, R/W	|	Uzatma cihazlarına komutlar gönderir	|																	
|		|	CANTIMEOUT	|	LOGIN REQUIRED, R/W	|	Uzantı cihazının var olup olmadığını kontrol etmek için zaman aşımı değeri	|																	
|	 	|		|		|		|																	
|	INTERNAL FILESYSTEM RELATED	|	FBD	|	UNPROTECTED, R/W	|	 	|																	
|		|	ONLINE	|	UNPROTECTED, R/W	|	 	|																	
|		|	DEFAULT	|	LOGIN REQUIRED, R/W	|	 	|																	
|		|	PASSWORD	|	UNPROTECTED, R/W	|	Set Password	|																	
|		|	LOGIN	|	UNPROTECTED, READ ONLY	|	Login device	|																	
|		|	RESET	|	UNPROTECTED, R/W	|	 	|																	
|		|		|		|	 	|																																		
|	OTHER PLC FUNCTIONS	|	ADCERROR	|	READ ONLY	|	ADC error count	|																	
|		|	FORMATFS	|	LOGIN REQUIRED, R/W	|	Format filesystem	|																	
|		|	FATFS	|	READ ONLY	|	SD karttaki günlük dosyasının boyutu	|																	
