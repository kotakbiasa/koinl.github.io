const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8'
};

function resolveTarget(urlPath) {
  let reqPath = decodeURIComponent((urlPath || '/').split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  let target = path.join(root, reqPath.replace(/^\//, ''));
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    target = path.join(target, 'index.html');
  }

  return target;
}

const server = http.createServer((req, res) => {
  try {
    const target = resolveTarget(req.url);
    if (!fs.existsSync(target)) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const ext = path.extname(target).toLowerCase();
    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    fs.createReadStream(target).pipe(res);
  } catch (error) {
    res.statusCode = 500;
    res.end(String(error));
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Server berjalan di http://127.0.0.1:${port}`);
});
