---
title: WEB SERVER LDAP Integration
---

> **Note:** Starting from Web Server version 1.1.50, user management can be performed via LDAP.        
> This document is applicable to Web Server version 1.1.50 and later.

## Introduction: What is LDAP?

<center>

![LDAP-webserver1](/img/LDAP-webserver1.png)
***<center>Figure 1: LDAP Directory Tree</center>***

</center>

LDAP (Lightweight Directory Access Protocol) is a protocol used to store and query objects such as users, groups, and devices in a hierarchical directory.

**Typical use cases include:**       
- **Authentication:** Verifying a user’s identity.          
- **Authorization:** Determining which resources an authenticated user can access and with what permissions.     

**Key concepts:**       
- **DN (Distinguished Name)**        
- **OU (Organizational Unit)**         
- **Attribute** (e.g., `uid`, `cn`)        
- **Group** (`posixGroup`)            

**Connection security options:**     
- **LDAPS (636):** TLS is established at the start of the connection.        
- **StartTLS (389):** A standard LDAP connection is upgraded to TLS.        

The method to be used depends on organizational policies. The device supports both options.

## Scope and Supported Directories

This document describes the device’s LDAP client behavior; server setup is shown only briefly in Section 11 for demonstration purposes.     

**Supported directory schemas:**
- **OpenLDAP:** Group mapping with `posixGroup (memberUid)` and `groupOfNames (member)`
- **Active Directory:** Works with `member=<userDN>` or `uniqueMember=<userDN>` membership. (Direct `memberOf` queries are not used.)

## Connection Security Options (TLS/StartTLS)

The device supports the following options for establishing a secure connection to an LDAP server:

- **LDAPS (636):** TLS is established at the start of the connection.    
- **StartTLS (389):** A standard LDAP connection is upgraded to TLS.        

Certificate verification and certificate management are configured according to organizational policies.    
If verification fails, client-side errors such as “unknown CA” or “self-signed in chain” may occur.

## Device LDAP Client Configuration

### Web Server Users Page LDAP Configuration

<center>

![LDAP-webserver2](/img/LDAP-webserver2.png)
***<center>Figure 2: Web Server Users Page LDAP Tab</center>***

</center>

The following fields describe the LDAP client settings in the device’s web interface:

<center>

![LDAP-webserver3](/img/LDAP-webserver3.png)

</center>

**Quick Test:** Using the **Test Connection** button in the interface, a bind and group query can be tested.  
The result displays the connection status and the groups found.

<center>

![LDAP-webserver4](/img/LDAP-webserver4.png)
***<center>Figure 3: Example Quick Test Output</center>***

</center>

### Web Server Upload Manager Page TLS Certificate Upload and Management

The device stores the LDAP server’s CA certificate under the `/configs` directory.

1. On the **Upload** page, use the **LDAP Certificate Upload** option to upload CA or intermediate CA certificates (`.crt` or `.pem`) in PEM format.
2. Uploaded files are saved under `/configs/ldaps/`.
3. The system merges all PEM blocks into a single bundle file `/configs/ldap-ca-bundle.pem`.
4. In the application settings, `ca_bundle_path` is automatically updated to this file.

<center>

![LDAP-webserver5](/img/LDAP-webserver5.png)
***<center>Figure 4: Web Server Upload Manager Screen</center>***

</center>

**Notes:**
- The certificate filename is not important; only the content must be in PEM format.      
- Multiple CA/intermediate CA certificates can be uploaded; they are merged into one bundle.     
- If the organization uses a private CA, its root or chain certificate must be uploaded.    
- For LDAPS/StartTLS, the server name (URL) must match the CN/SAN in the certificate (e.g., `ldap.dev.local`). Do not connect with an IP address.    

## Authorization Model and Groups

The application assigns roles to users based on their group memberships.

| Group         | Assigned Role |
|---------------|--------------|
| `iot-admins`  | admin         |
| `iot-techs`   | technician    |
| `iot-guests`  | guest          |
| Others / none | user            |


**Group search filter:**

(\|(&(objectClass=posixGroup)(memberUid=%s))
  (&(objectClass=groupOfNames)(member=%s))
  (&(objectClass=group)(member=%s)))

* In OpenLDAP, typically memberUid=&lt;uid&gt; or member=&lt;userDN&gt; is used.    
* In Active Directory, member/uniqueMember=&lt;userDN&gt; is common.    


**Not:** Ensure that group names comply with the role mapping defined above.

## Authentication Flow and API

### Flow Overview

1. The client sends a `/login` request (username, password).   
2. Concurrent session protection: if `user_count > 2`, HTTP 405 is returned.    
3. According to configuration, the login method is selected: **LDAP** or **JSON**.      
4. In **LDAP** mode: **bind for authentication → group search → role assignment.**      

### Settings APIs (Summary)

#### GET `/api/settings/ldap`

Returns the current LDAP settings.

**Example response:**

{            
"use_ldap": true,   
"ldap": { ... }    
}   

### POST /api/settings/ldap

Saves LDAP settings (only submitted fields are updated).   
The interface may send plain (`camelCase`) or nested (`snake_case`) formats.   

### POST `/api/settings/ldap/test` 

Performs a connection / certificate / group test.      
Returns `user_bind`, `service_bind`, and `groups` information.     

## LDAP-Specific Error Codes and Mapping

The following error codes are produced by the application in the `ldap_error` field when communicating with LDAP.     
The server returns them together with the appropriate HTTP status depending on the context.

### Context

- **User bind (authenticate):** A direct bind attempt on `loginDN` using the username + password entered by the client.     
- **Group search (get_groups):** After a successful user bind, groups are queried.      
  First, a bind is attempted with the `service/bind DN` (SERVICE).      
  If this fails, a group search is attempted using the user bind (USER).    

### Error Codes Table 

| Code                             | HTTP         | Source           | Description / Typical Causes                                          |
|--------------------------------|--------------|------------------|-----------------------------------------------------------------------|
| `INVALID_CREDENTIALS`            | 401           | User bind         | Wrong password; incorrect `loginDN` (OU/attribute mismatch) or empty password |
| `LDAP_BIND_ERROR`                 | 503           | User bind         | General bind errors unrelated to credentials (account locked, policy violation, etc.) |
| `LDAP_UNREACHABLE`                | 503           | User bind         | Server unreachable (IP/port, firewall, DNS)                            |
| `LDAP_ERROR`                      | 503           | User bind         | General/unexpected LDAP error (timeout, protocol failure, etc.)        |
| `SERVICE_BIND_INVALID_CREDENTIALS`| 503           | Group (SERVICE)   | Invalid `bind_dn`/`bind_password`; groups could not be retrieved       |
| `SERVICE_BIND_ERROR`               | 503           | Group (SERVICE)   | General service bind error (ACL/permissions, etc.)                     |
| `SERVICE_ERROR`                      | 503           | Group (SERVICE)   | Unexpected error during service bind (network, timeout)                |
| `USER_BIND_INVALID_CREDENTIALS`       | 401 / Warning | Group (USER)      | Group search with user bind failed (password/ACL issue)                 |
| `USER_BIND_ERROR`                          | 401 / Warning | Group (USER)      | General error during group search with user bind                        |
| `USER_ERROR`                                     | Warning        | Group (USER)      | Unexpected error during group search with user bind                       |


## Notes on Application Behavior

- In LDAP mode, passwords are not stored on the device; only the user identity (and role) is kept.   
- The JSON backend (for development) uses MD5 in password hashing.    
- If the username/password `admin/admin` is used, local (JSON) authentication is applied instead of LDAP.    
- The JWT validity period is 30 minutes.     
- In the interface, LDAPS and StartTLS are mutually exclusive; when one is enabled, the other is automatically disabled (the port field is updated accordingly).

## Quick Verification Steps

1. (TLS) First, upload your CA certificate as described in §4.1 (**Upload → LDAP Certificate Upload**).   
2. Enter the LDAP client settings (§4) and verify them with **Test Connection**.   
3. In LDAP, add a test user to an appropriate group (`iot-*`).   
4. Log in with the test user in the application and verify that the permissions are applied as expected.

## Troubleshooting

### Common Cases

- **Cannot connect:** Check IP/port, DNS, and service status. For LDAPS, port 636 must be accessible; for StartTLS, port 389 must be accessible.    
- **Hostname mismatch:** The name in the URL must match the CN/SAN in the server certificate (e.g., `ldap.dev.local`).    
- **CA errors** (`unknown CA` / `self-signed in chain`): An incorrect CA may have been uploaded. Check whether `/configs/ldap-ca-bundle.pem` is up to date.   
- **Bind error / invalidCredentials:** Verify that the `loginDN` is correctly formed with `login_attr=uid` (`uid=<user>,<UsersOU>,<BaseDN>`).   
- **Role not assigned:** Ensure the group includes `memberUid=<uid>` or `member/uniqueMember=<userDN>`. Group names must match the `iot-*` pattern.   

### Advanced Commands (optional)

**Certificate session (LDAPS 636):**

openssl s_client -connect ldap.dev.local:636 -servername ldap.dev.local \
  -CAfile /configs/ldap-ca-bundle.pem -brief </dev/null

**LDAP search (with bind):**

ldapsearch -H ldaps://ldap.dev.local:636 -b "dc=dev,dc=local" \    
  -D "cn=ldap-reader,dc=dev,dc=local" -W \    
  "(|(objectClass=posixGroup)(objectClass=groupOfNames))" cn member memberUid    

## Example LDAP Server Configuration (for Developers)

This example shows the configuration used during development.    
(Setup details may vary depending on the customer’s environment.)

### docker-compose.yml (summary)

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

### LDIF OUs and Groups (example)

**OUs**

dn: ou=users,dc=dev,dc=local          
objectClass: organizationalUnit          
ou: users            

dn: ou=groups,dc=dev,dc=local     
objectClass: organizationalUnit          
ou: groups      

**Groups**

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

### Example Operations in PhpLDAPAdmin

<center>

![LDAP-webserver6](/img/LDAP-webserver6.png)
***<center>Figure 5: LDIF Import Menu (example)</center>***

</center>

<center>

![LDAP-webserver7](/img/LDAP-webserver7.png)
***<center>Figure 6: Access to ou=users node</center>***

</center>

<center>

![LDAP-webserver8](/img/LDAP-webserver8.png)
***<center>Figure 7: Before renaming: cn=…</center>***

</center>

<center>

![LDAP-webserver9](/img/LDAP-webserver9.png)
***<center>Figure 8: After renaming: uid=…</center>***

</center>

<center>

![LDAP-webserver10](/img/LDAP-webserver10.png)
***<center>Figure 9: Adding a user to iot-admins group (memberUid)</center>***

</center>