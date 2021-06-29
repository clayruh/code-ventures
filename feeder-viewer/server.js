const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('index.html'));
  } else if (req.url === '/favicon.ico' || req.url === '/favicon.png') {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(fs.readFileSync('favicon.png'));
  } else if (req.url === '/scripts.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(fs.readFileSync('scripts.js'));
  } else if (req.url === '/styles.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(fs.readFileSync('styles.css'));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

  console.log(`${res.statusCode} - ${req.method} ${req.url}`);
});

server.listen(3000);
