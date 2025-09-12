---
title: WEB SERVER LDAP Entegrasyonu
---

> **Not:** Web Server 1.1.50 sürümünden itibaren LDAP üzerinden kullanıcı yönetimi yapılabilmektedir.         
> Bu doküman, Web Server 1.1.50 ve üzeri sürümler için geçerlidir.      

## 	Giriş: LDAP Nedir?

<center>

![LDAP-webserver1](/img/LDAP-webserver1.png)
***<center>Şekil 1: LDAP Dizin Ağacı</center>***

</center>

LDAP (Lightweight Directory Access Protocol), hiyerarşik bir dizin üzerinde kullanıcı, grup, cihaz vb. nesneleri saklamaya ve sorgulamaya yarayan bir protokoldür.    

**TTipik kullanım alanları:**       
- **Kimlik doğrulama (authentication):** Kullanıcının kim olduğunu doğrulama.          
- **Yetkilendirme (authorization):** Doğrulanan kullanıcının hangi kaynaklara hangi yetkiyle erişebileceğini belirleme.    

**Temel kavramlar:**       
- **DN (Distinguished Name)**        
- **OU (Organizational Unit)**         
- **Attribute** (e.g., `uid`, `cn`)        
- **Group** (`posixGroup`)            

**Bağlantı güvenliği seçenekleri**     
- **LDAPS (636):** TLS bağlantının başında kurulur.        
- **StartTLS (389):** Standart bir LDAP bağlantısı TLS’e yükseltilir.        

Hangi yöntemin kullanılacağı kurum politikalarına göre belirlenir. Cihaz her iki seçeneği de destekler .

## 	Kapsam ve Desteklenen Dizimler

Bu doküman cihazın LDAP istemci davranışını açıklar; sunucu kurulumu yalnızca örnek amaçlı Başlık 11’de kısaca gösterilmiştir.      

**Desteklenen şemalar:**
- **OpenLDAP:** `posixGroup (memberUid)` ve `groupOfNames (member)` ile grup eşlemesi.      
- **Active Directory:** `member=<userDN>` veya `uniqueMember=<userDN>` üyeliğiyle çalışır. (Doğrudan memberOf okunmaz.) 

## 	Bağlantı Güvenliği Seçenekleri (TLS/StartTLS)

Cihaz, LDAP sunucusuna şifreli bağlanmak için aşağıdaki seçenekleri destekler:   

- **LDAPS (636):** Bağlantı açılışında TLS kurulumu.    
- **StartTLS (389):** Standart LDAP bağlantısı TLS’e yükseltilir.        

Sertifika doğrulanması ve sertifika yönetimi, kurum politikalarına göre yapılandırılır.       Doğrulama başarısız olduğunda istemci tarafında  “unknown CA” or “self-signed in chain” vb. hatalar görülebilir.

## Cihaz LDAP İstemci Yapılandırması 

###	Web Server Kullanıcılar Sayfası LDAP Konfigürasyonu

<center>

![LDAP-webserver2](/img/LDAP-webserver2.png)
***<center>Şekil 2: Web Server Kullanıcılar Sayfası LDAP Sekmesi</center>***

</center>

Aşağıdaki alanlar, cihaz web arayüzündeki LDAP istemci ayarlarını açıklar.

<center>

![LDAP-webserver10](/img/LDAP-webserver10.png)

</center>

**Hızlı Test:** Arayüzdeki **Test Connection** butonu ile bağlanma (bind) ve grup okuma denemesi yapılabilir.      
Sonuçta bağlanma durumu ve bulunan gruplar gösterilir.

<center>

![LDAP-webserver4](/img/LDAP-webserver4.png)
***<center>Şekil 3: Örnek Hızlı Test Çıktısı</center>***

</center>

### Web Server Yükleme Yöneticisi Sayfası TLS Sertifikası Yükleme ve Yönetimi 

Cihaz, LDAP sunucusunun CA sertifikasını  `/configs` adresine kaydeder. 

İş akışı:

1. **Upload** sayfasında, **LDAP Certificate Upload** seçeneği ile (`.crt` or `.pem`)  uzantılı CA veya ara CA sertifikalarını yükleyin. Sertifika **PEM** formatında olmalıdır.     
2. Yüklenen dosyalar `/configs/ldaps/` dizinine kaydedilir.
3. Sistem tüm PEM bloklarını tek bir demet halinde  `/configs/ldap-ca-bundle.pem` dosyasında birleştirir (yinelenen sertifikalar ayıklanır).    
4.	Uygulama ayarlarında,  `ca_bundle_path` otomatik olarak `/configs/ldap-ca-bundle.pem` olarak güncellenir ve TLS doğrulamalarında bu demet kullanılır.

<center>

![LDAP-webserver5](/img/LDAP-webserver5.png)
***<center>Şekil 4: Web Server Dosya Yükleme Yöneticisi Ekranı</center>***

</center>

**Notlar:**
- Sertifika adı önemli değildir; içerik PEM olmalıdır.       
- Birden fazla CA/ara CA yükleyebilirsiniz; cihaz bunları tek bir dosyada birleştirir.          
- Eğer kurum kendi özel CA kullanıyorsa, CA’nın kök veya zincir sertifikasını yüklemeniz gerekir. Sunucu sertifikasını tek başına yüklemek genelde yetersizdir.        
- LDAPS/StartTLS için server adı (URL) ile sertifikadaki  CN/SAN in the eşleşmelidir. (örn, `ldap.dev.local`). IP adresiyle bağlantı kurmayın.    

## Yetkilendirme Modeli ve Gruplar

Uygulama, kullanıcının grup üyeliğine göre rol atar.

| Grup         | Atanan Rol |
|---------------|--------------|
| `iot-admins`  | admin         |
| `iot-techs`   | technician    |
| `iot-guests`  | guest          |
| Others / none | user            |


**Grup arama filtresi**

(\|(&(objectClass=posixGroup)(memberUid=%s))
  (&(objectClass=groupOfNames)(member=%s))
  (&(objectClass=group)(member=%s)))

* OpenLDAP’ta genellikle memberUid=&lt;uid&gt; veya member=&lt;userDN&gt; kullanılır.    
* AD tarafında member/uniqueMember=&lt;userDN&gt; yaygındır. 

**Not:** Grup adlarının yukarıdaki rol eşlemesiyle uyumlu olduğundan emin olun.   

## Kimlik Doğrulama Akışı ve API

### Akış Özeti

1. İstemci `/login` isteği gönderir (username, password).    
2. Eşzamanlı oturum koruması: `user_count > 2` ise, HTTP 405 döner.    
3. Konfigürasyona göre giriş metodu seçilir:  **LDAP** veya **JSON**.      
4. **LDAP**ta **bind ile doğrulama → ardından grup araması ve role ataması** yapılır.      

### Ayar API'leri (özet)

#### GET `/api/settings/ldap`

Mevcut ayarları döndürür. 

**Örnek sunucu cevabı:**

{            
"use_ldap": true,   
"ldap": { ... }    
}   

### POST /api/settings/ldap

Ayarları kaydeder (yalnızca gönderilen alanlar güncellenir).    
Arayüz düz (`camelCase`) veya iç içe (`snake_case`) gönderilebilir.   

### POST `/api/settings/ldap/test` 

Bağlantı / sertifika / grup testini yapar.      
`user_bind`, `service_bind` ve `groups` bilgilerini döndürür.     

## LDAP Özel Hata Kodları ve Eşlemesi

Aşağıdaki hata kodları, uygulamanın LDAP ile konuşurken ürettiği ldap_error alanıdır. 

Sunucu, durumuna göre HTTP status ile birlikte döner.   

### Bağlam

- **Kullanıcı bind (authenticate):** İstemcinin girdiği username + password ile `loginDN` üzerinden doğrudan bind denemesi.     
- **Grup araması (get_groups):** Başarılı kullanıcı bind sonrasında grupları bulmak için önce `service/bind DN` ile binde denenir (SERVICE), başarısızsa kullanıcı bind ile denenir. (USER).    

### Hata Kodları Tablosu 

| Kod                               | HTTP          | Kaynak             | Açıklama / Olası Nedenler                                                     |
|----------------------------------|---------------|---------------------|-------------------------------------------------------------------------------|
| `INVALID_CREDENTIALS`             | 401             | Kullanıcı bağlama (User bind) | Hatalı parola; yanlış `loginDN` (OU/özellik uyuşmazlığı) veya boş parola              |
| `LDAP_BIND_ERROR`                  | 503             | Kullanıcı bağlama             | Kimlik bilgileriyle ilgili olmayan genel bağlanma hataları (hesap kilitli, politika ihlali vb.) |
| `LDAP_UNREACHABLE`                 | 503             | Kullanıcı bağlama             | Sunucuya ulaşılamıyor (IP/port, güvenlik duvarı, DNS)                                  |
| `LDAP_ERROR`                       | 503             | Kullanıcı bağlama             | Genel/beklenmeyen LDAP hatası (zaman aşımı, protokol hatası vb.)                         |
| `SERVICE_BIND_INVALID_CREDENTIALS` | 503             | Grup (SERVICE)                | Geçersiz `bind_dn`/`bind_password`; gruplar alınamadı                                         |
| `SERVICE_BIND_ERROR`                | 503             | Grup (SERVICE)                | Genel servis bağlanma hatası (ACL/izinler vb.)                                                      |
| `SERVICE_ERROR`                        | 503             | Grup (SERVICE)                | Servis bağlanması sırasında beklenmeyen hata (ağ, zaman aşımı)                                      |
| `USER_BIND_INVALID_CREDENTIALS`         | 401 / Uyarı      | Grup (USER)                   | Kullanıcı bağlamasıyla grup arama başarısız (parola/ACL sorunu)                                        |
| `USER_BIND_ERROR`                              | 401 / Uyarı      | Grup (USER)                   | Kullanıcı bağlamasıyla grup aramada genel hata                                                               |
| `USER_ERROR`                                             | Uyarı               | Grup (USER)                   | Kullanıcı bağlamasıyla grup aramada beklenmeyen hata                                                               |
                      |


##	Uygulama Davranışı Hakkında Notlar
 
-	LDAP modunda parolalar cihazda saklanmaz; yalnızca kullanıcı kimliği (ve rol) tutulur.    
-	JSON backend (geliştirme) parola özetinde MD5 kullanır.    
- `admin/admin` kullanılırsa LDAP yerine yerel (JSON) doğrulama devreye girer.   
- JWT geçerlilik süresi 30 dakikadır.     
- Arayüzde LDAPS ve StartTLS birbirini dışlar; biri açıkken diğeri otomatik kapanır (port alanı uygun değere çekilir).

##	Hızlı Doğrulama Adımları

1. (TLS) 	Önce Başlık 4.2’deki gibi CA sertifikanızı yükleyin. (**Upload → LDAP Certificate Upload**).   
2. LDAP istemci ayarlarını girin (Başlık 4.1) ve  **Test Connection** ile doğrulayın.  
3. LDAP’ta bir test kullanıcısını uygun gruba  (`iot-*`) ekleyin.      
4.	Uygulamada test kullanıcısıyla giriş yapın; yetkilerin beklendiği gibi olduğunu doğrulayın.

## Sorun Giderme

### Yaygın Durumlar

- **Bağlanamıyor:** IP/port, DNS ve servis durumu kontrol edilir. LDAPS için 636, StartTLS için 389 erişilebilir olmalı.    
- **Hostname uyuşmazlığı:** URL’deki ad, sunucu sertifikasındaki CN/SAN ile eşleşmelidir.  (örn, `ldap.dev.local`).    
- **CA hataları** (`unknown CA` / `self-signed in chain`): Yanlış CA yüklenmiş olabilir;  `/configs/ldap-ca-bundle.pem` güncel mi?   
- **Bind hatası / invalidCredentials:** `login_attr=uid` ile kurulan `loginDN` doğru mu (`uid=<user>,<UsersOU>,<BaseDN>`)?   
- **Rol gelmiyor:** Grup `memberUid=<uid>` veya `member/uniqueMember=<userDN>`içeriyor mu? Grup adları `iot-*` ile eşleşiyor mu?   

### Gelişmiş Komutlar (isteğe bağlı)

**Sertifika Oturumu (LDAPS 636):**

openssl s_client -connect ldap.dev.local:636 -servername ldap.dev.local \
  -CAfile /configs/ldap-ca-bundle.pem -brief </dev/null

**LDAP araması (bind ile):**

ldapsearch -H ldaps://ldap.dev.local:636 -b "dc=dev,dc=local" \    
  -D "cn=ldap-reader,dc=dev,dc=local" -W \    
  "(|(objectClass=posixGroup)(objectClass=groupOfNames))" cn member memberUid    

## Örnek LDAP Sunucu Konfigürasyonu (Geliştiriceye Yönelik)

Bu örnek geliştirme aşamasında kullanılan konfigürasyonu göstermektedir.     
 (Kurulum ayrıntıları müşterinin ortamına göre değişir.)

### docker-compose.yml (özet)

version: "3.8"    
services:  
  ldap:    
    image: osixia/openldap:1.5.0    
    container_name: dev-ldap    
    environment:    
      LDAP_ORGANISATION: "Dev Org"    
      LDAP_DOMAIN: "dev.local"    
      LDAP_ADMIN_PASSWORD: "XXXX"   
      LDAP_REMOVE_CONFIG_AFTER_SETUP: "false"    
    ports:   
      - "389:389"    
      - "636:636"   
    volumes:   
      - ./ldifs:/container/service/slapd/assets/config/bootstrap/ldif/custom    

  phpldapadmin:    
    image: osixia/phpldapadmin:0.9.0   
    container_name: dev-ldapui    
    environment:   
      PHPLDAPADMIN_LDAP_HOSTS: ldap    
    ports:   
      - "6443:443"   
    depends_on:   
      - ldap   

### docker-compose.yml (SSL)

services:  
  ldap:     
    image: osixia/openldap:1.5.0     
    container_name: dev-ldap     
    hostname: ldap.dev.local      
    command: ["--copy-service","--loglevel","debug"]   
    environment:      
      LDAP_ORGANISATION: Dev Org     
      LDAP_DOMAIN: dev.local      
      LDAP_ADMIN_PASSWORD: XXX      
      LDAP_CONFIG_PASSWORD: XXX     
      LDAP_TLS: "true"      
      LDAP_TLS_CRT_FILENAME: ldap.dev.local.crt        
      LDAP_TLS_KEY_FILENAME: ldap.dev.local.key        
      LDAP_TLS_CA_CRT_FILENAME: dev-local-ca.crt         
      LDAP_TLS_ENFORCE: "false"   
      LDAP_TLS_VERIFY_CLIENT: "never"        
      LDAP_REMOVE_CONFIG_AFTER_SETUP: "false"       
    ports:     
      - "389:389"    
      - "636:636"       
    volumes:  
      - type: bind     
        source: C:\Users\user\Desktop\<XXX>\ldap ssl\certs       
        target: /container/service/slapd/assets/certs      
      - type: bind       
        source: C:\Users\user\Desktop\<XXX>\ldap ssl\ldifs       
        target: /container/service/slapd/assets/config/bootstrap/ldif/custom          
        read_only: true      
    restart: unless-stopped        

  phpldapadmin:    
    image: osixia/phpldapadmin:0.9.0     
    container_name: dev-ldapui     
    environment:     
      PHPLDAPADMIN_LDAP_HOSTS: "ldaps://dev-ldap"    
      PHPLDAPADMIN_LDAP_CLIENT_TLS_REQCERT: "never"  
    ports:    
      - "6443:443"       
    depends_on:      
      - ldap       
    restart: unless-stopped        

### LDIF OU ve Gruplar (örnek)

**OU'lar**

dn: ou=users,dc=dev,dc=local          
objectClass: organizationalUnit          
ou: users            

dn: ou=groups,dc=dev,dc=local     
objectClass: organizationalUnit          
ou: groups      

**Gruplar**

dn: cn=iot-admins,ou=groups,dc=dev,dc=local         
objectClass: posixGroup       
cn: iot-admins         
gidNumber: 5000    
memberUid: test   

dn: cn=iot-techs,ou=groups,dc=dev,dc=local     
objectClass: posixGroup       
cn: iot-techs    
gidNumber: 5001         

dn: cn=iot-guests,ou=groups,dc=dev,dc=local            
objectClass: posixGroup            
cn: iot-guests        
gidNumber: 5002        

### PhpLDAPAdmin'de Örnek İşlemler

<center>

![LDAP-webserver6](/img/LDAP-webserver6.png)
***<center>Şekil 5: LDIF import menüsü (örnek).</center>***

</center>

<center>

![LDAP-webserver7](/img/LDAP-webserver7.png)
***<center>Şekil 6: ou=users düğümüne erişim</center>***

</center>

<center>

![LDAP-webserver8](/img/LDAP-webserver8.png)
***<center>Şekil 7: Yeniden adlandırma öncesi: cn=….</center>***

</center>

<center>

![LDAP-webserver9](/img/LDAP-webserver9.png)
***<center>Şekil 8: Yeniden adlandırma sonrası: uid=….</center>***

</center>

<center>

![LDAP-webserver10](/img/LDAP-webserver10.png)
***<center>Şekil 9: iot-admins grubuna kullanıcı ekleme (memberUid).</center>***

</center>