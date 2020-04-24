# node-tls
TLS server in Node.js

## Generate client & server certificates

```sh
openssl req -newkey rsa:2048 -nodes -keyout client-key.pem -x509 -days 365 -out client-cert.pem
```

Note: be careful to specify the exact server host (FQDN) in Common Name, e.g. `localhost`
```sh
openssl req -newkey rsa:2048 -nodes -keyout server-key.pem -x509 -days 365 -out server-cert.pem
```

## Start server
```sh
node tlserve.js
```

## Request with curl

```sh
curl -v --key client-key.pem --cert client-cert.pem --cacert server-cert.pem https://localhost:8000
```
