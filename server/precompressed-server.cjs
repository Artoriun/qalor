#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'dist');
const port = process.env.PORT || 8080;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.wasm': 'application/wasm'
};

function getMime(filePath) {
  return mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function fileExists(p) {
  try { return fs.statSync(p).isFile(); } catch (e) { return false; }
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/index.html';
    const fullPath = path.join(root, urlPath);

    // Prevent path traversal
    if (!fullPath.startsWith(root)) {
      res.statusCode = 400;
      res.end('Bad request');
      return;
    }

    let accept = req.headers['accept-encoding'] || '';
    const tryBrotli = accept.includes('br');
    const tryGzip = accept.includes('gzip');

    // Prefer precompressed brotli, then gzip
    if (tryBrotli && fileExists(fullPath + '.br')) {
      const stat = fs.statSync(fullPath + '.br');
      res.writeHead(200, {
        'Content-Type': getMime(fullPath),
        'Content-Encoding': 'br',
        'Content-Length': String(stat.size),
        'Vary': 'Accept-Encoding'
      });
      fs.createReadStream(fullPath + '.br').pipe(res);
      return;
    }

    if (tryGzip && fileExists(fullPath + '.gz')) {
      const stat = fs.statSync(fullPath + '.gz');
      res.writeHead(200, {
        'Content-Type': getMime(fullPath),
        'Content-Encoding': 'gzip',
        'Content-Length': String(stat.size),
        'Vary': 'Accept-Encoding'
      });
      fs.createReadStream(fullPath + '.gz').pipe(res);
      return;
    }

    // Fallback to uncompressed file
    if (fileExists(fullPath)) {
      const stat = fs.statSync(fullPath);
      res.writeHead(200, {
        'Content-Type': getMime(fullPath),
        'Content-Length': String(stat.size),
        'Vary': 'Accept-Encoding'
      });
      fs.createReadStream(fullPath).pipe(res);
      return;
    }

    // If directory, try index.html
    if (fileExists(path.join(fullPath, 'index.html'))) {
      const idx = path.join(fullPath, 'index.html');
      const stat = fs.statSync(idx);
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Length': String(stat.size),
        'Vary': 'Accept-Encoding'
      });
      fs.createReadStream(idx).pipe(res);
      return;
    }

    res.statusCode = 404;
    res.end('Not found');
  } catch (err) {
    console.error('Server error', err);
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(port, () => {
  console.log(`Precompressed static server listening on http://localhost:${port}/`);
  console.log(`Serving: ${root}`);
});
