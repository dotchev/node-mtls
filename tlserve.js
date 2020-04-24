#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

const options = {
  // server certificate
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),

  // client certificate
  requestCert: true,
  rejectUnauthorized: true,
  ca: fs.readFileSync('client-cert.pem')
};

const port = process.env.PORT || 8000;
https.createServer(options, (req, res) => {
  console.log('Peer certificate:', req.socket.getPeerCertificate());

  res.writeHead(200);
  res.end('This is TLS server in Node.js\n');
}).listen(port);
console.log(`Listening on port ${port}...`);
