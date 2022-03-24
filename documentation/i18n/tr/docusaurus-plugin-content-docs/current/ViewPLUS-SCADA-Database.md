---
title: ViewPLUS SCADA Database
---

### Veritabanı Tabloları

ViewPLUS SCADA, SCADA Projesini yönetmek, günlüğe kaydetmek ve raporlamak için çeşitli veritabanı tablolarını kullanır.

PostgreSQL için Tablolar "public" ve "logs" şemalarına göre ayrılmıştır. Genel şema proje kanalları, etiketler, kullanıcılarla ilgili tablolardan oluşur. "Günlükler" şeması, günlüklerden ve istatistiksel günlük tablolarından oluşur.

<center>

![ViewPLUS-SCADA-Database-01](/img/ViewPLUS-SCADA-Database-01.png)

</center>

alarmlar : Bu tablo SCADA editörü tarafından oluşturulan alarm tanımlarını içerir

kanallar : Kanal tanımları saha cihazlarına bağlantı bilgilerini içerir

etiketler : Sistemde etiket detaylarını tanımlamak için kullanılan etiket tanımlarıdır

kullanıcılar: Proje için yetkili kullanıcılar listesi

<center>

![ViewPLUS-SCADA-Database-02](/img/ViewPLUS-SCADA-Database-02.png)

</center>

alarm_table : Bu tablo sistemin gerçek zamanlı aktif alarm bilgilerini içerir.

alarm_log : Geçmiş alarm bilgilerini içerir

event_log : Kullanıcı girişi, kullanıcı istekleri vb. olay bilgilerini içerir.

lcd_table : Saha cihazlarından sistem etiketlerinin en son okunan değerlerini içeren en son değişiklik zaman tablosudur.

tag_log : Alandan toplanan tüm ham veriler tag_log tablosuna kaydedilir. Bu tablonun boyutu çok hızlı büyüyebilir.

tag_log_agrhour : Sistem etiketlerinin saatlik istatistiksel tablosu. İstatistikler tag_log tablosu kullanılarak hesaplanır. Tablo dakikada bir güncellenir.

tag_log_agrday : Sistem etiketlerinin günlük istatistiksel tablosu. İstatistikler tag_log_agrhour tablosu kullanılarak hesaplanır. Tablo dakikada bir güncellenir.

tag_log_agrweek : Sistem etiketlerinin günlük istatistiksel tablosu. İstatistikler tag_log_agrday tablosu kullanılarak hesaplanır. Tablo dakikada bir güncellenir.

tag_log_agrmonth : Sistem etiketlerinin günlük istatistiksel tablosu. İstatistikler tag_log_agrday tablosu kullanılarak hesaplanır. Tablo dakikada bir güncellenir.

tag_log_agryear : Sistem etiketlerinin günlük istatistiksel tablosu. İstatistikler tag_log_agryear tablosu kullanılarak hesaplanır. Tablo dakikada bir güncellenir.