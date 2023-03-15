---
title: Özel Modbus Registerları
---

Mikrodev Cihazları, bazı özel parametreleri ayarlayabileceğiniz MODBUS kayıtlarına sahiptir. Bu özel kayıtları aşağıdaki tabloda bulabilirsiniz. Lütfen MODBUS üzerinden ayarladığınız değerlerin güvenlik amacıyla her 5 dakikada bir kalıcı belleğe kaydedileceğini unutmayın. Parametreyi MODBUS üzerinden ayarladıktan sonra cihazı 5 dakikadan daha erken kapatırsanız değişiklikler kaybolabilir.

| KISA İSİM | AÇIKLAMALAR | MODBUS ADRES | TİP | BOYUT |
| ------ | ------ | ------ | ------ | ------ |
|	ConfigPort;	|	Mikrodiagram Connection TCP Port	|	0	|	u16_t	|	1	|
|	ConnectionTrack;	|	Sunucu Zaman Aşımı, Takip soketlerinin canlı olup olmadığı	|	1	|	u16_t	|	1	|
|	ConfigPlcReset;	|	ETH veya GSM üzerinden herhangi bir sokect aktivitesi yoksa, tanımlanan saniyeler içinde PLC'yi resetleyin.	|	2	|	u16_t	|	1	|
|	ConfigAinVoltage;	|	NA	|	3	|	u16_t	|	1	|
|	ConfigTempType;	|	NA	|	4	|	u16_t	|	1	|
|	ConfigPto;	|	Darbe Aktarımı Çıkış İşlevselliğinin Yapılandırması. 1- Enable, 0- Disable	|	5	|	u16_t	|	1	|
|	ConfigDhcp;	|	Configuration of DHCP. 1- Enable, 0- Disable	|	6	|	u16_t	|	1	|
|	ConfigCanSpeed;	|	Configuration of CAN Extension Bus Spees. 0- 500 Kbit, 1- 250 Kbit, 2- 100 Kbit, 3- 1000 Kbit	|	7	|	u16_t	|	1	|
|	ConfigCanTmo;	|	Timeout value for CAN extensions, milisecond	|	8	|	u16_t	|	1	|
|	ConfigTimeZone;	|	Time zone,	|	9	|	s16_t	|	1	|
|	ConfigGsmReset;	|	Güç Tanımlanan saniye sonra GSM etkinliği yoksa entegre GSM'yi sıfırlayın (Firmware sürüm 15.08'den sonra. 15.08'den önce bu değer 480 saniyeye sabitlenir)	|	10	|	u16_t	|	1	|
|	ProductSubCode;	|	Product Familiy code	|	11	|	u16_t	|	1	|
|	BoardPcbVersion;	|	PCB version number	|	12	|	u8_t	|	1	|
|	VersionHighByte;	|	Firmware Version Number, High Byte	|	 	|	u8_t	|	0	|
|	VersionLowByte;	|	Firmware Version Number, High Low	|	13	|	u8_t	|	1	|
|	ErrorCode;	|	PLC Error State	|	 	|	u8_t	|	0	|
|	CsqLevel;	|	GSM CSQ Level	|	14	|	u16_t	|	1	|
|	LwipTmo;	|	Tanımlanan saniyeler sonunda herhangi bir ETH aktivitesi olmazsa entegre ETH Phy'yi resetler VE tanımlanan saniyelerden sonra PPP(Noktadan Noktaya) bağlantısında aktivite olmazsa GSM Modemi resetler.	|	15	|	u16_t	|	1	|
|	Mac;	|	MAC adress of ETH units	|	16	|	u32_t	|	2	|
|	SerialNo;	|	Serial number of the PLC	|	18	|	u32_t	|	2	|
|	LocalIp;	|	Local IP adress of the PLC over ETHERNET	|	20	|	u32_t	|	2	|
|	Netmask;	|	Subnet Mask of the PLC over ETHERNET	|	22	|	u32_t	|	2	|
|	Gateway;	|	Gateway adress of the PLC over ETHERNET	|	24	|	u32_t	|	2	|
|	PowerResetCount;	|	Cihazın güç sıfırlama sayacının sayısını tutun. 	|	26	|	u32_t	|	2	|
|	AppPlcTime;	|	PLC Current Dat/Time	|	28	|	u32_t	|	2	|
|	AppPlcRam;	|	PLC Current RAM Usage	|	30	|	u32_t	|	2	|
|	AppPlcSecret;	|	PLC Security Info	|	32	|	u32_t	|	2	|
|	ScheduleItemList[64];	|	Bu, planlama öğelerini kontrol etmek için ViewPLUS SCADA ile birlikte kullanılır	|	34	|	u32_t	|	128	|
|	GprsName[32];	|	GSM APN Username - NULL karakter ile sonlandırılmalıdır	|	162	|	char	|	16	|
|	GprsPssw[32];	|	GSM APN Password  - NULL karakter ile sonlandırılmalıdır	|	178	|	char	|	16	|
|	GprsPin[8];	|	GSM PIN - Not Used Now	|	194	|	char	|	4	|
|	GprsApn[64];	|	GSM APN Name  - NULL karakter ile sonlandırılmalıdır	|	198	|	char	|	32	|
|	MenuFbdAddress;	|	LCD ekranda blok değerlerinden hangisinin görülmesi istenir	|	214	|	u32_t	|	2	|
|	MenuLine1[24];	|	LCD raw 1 text  - NULL karakter ile sonlandırılmalıdır	|	216	|	char	|	12	|
|	MenuLine2[24];	|	LCD raw 2 text  - NULL karakter ile sonlandırılmalıdır	|	228	|	char	|	12	|
|	E_MODCAN_DO16;	|		|	16000 + 0x000	|		|		|
|	E_MODCAN_RL16;	|		|	16000 + 0x080	|		|		|
|	E_MODCAN_AQ2;	|		|	16000 + 0x180	|		|		|
|	E_MODCAN_DI16;	|		|	16000 + 0x200	|		|		|
|	E_MODCAN_AI2;	|		|	16000 + 0x280	|		|		|
|	E_MODCAN_RTD2;	|		|	16000 + 0x300	|		|		|
|	E_MODCAN_DI8DQ8;	|		|	16000 + 0x380	|		|		|
|	E_MODCAN_AI4AQ4;	|		|	16000 + 0x400	|		|		|
|	E_MODCAN_DI8;	|		|	16000 + 0x480	|		|		|
|	E_MODCAN_DQ8;	|		|	16000 + 0x500	|		|		|
|	E_MODCAN_AI4;	|		|	16000 + 0x580	|		|		|
|	E_MODCAN_AQ4;	|		|	16000 + 0x600	|		|		|
|	E_MODCAN_T8;	|		|	16000 + 0x680	|		|		|
|	E_MODCAN_LC2;	|		|	16000 + 0x700	|		|		|
|	E_MODCAN_T4;	|		|	16000 + 0x780	|		|		|
|	E_MODCAN_STATUS_TMO;	|		|	19000	|		|		|
|	E_MODCAN_STATUS_TX;	|		|	19002	|		|		|
|	E_MODCAN_STATUS_RX;	|		|	19004	|		|		|
