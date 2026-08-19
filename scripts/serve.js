const http = require('node:http');
const { createReadStream, existsSync, statSync } = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function safePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split('?')[0]);
  const requestedPath = decodedPath === '/' ? '/index.html' : decodedPath;
  const resolvedPath = path.normalize(path.join(root, requestedPath));
  return resolvedPath.startsWith(root) ? resolvedPath : path.join(root, 'index.html');
}

const server = http.createServer((request, response) => {
  const filePath = safePath(request.url || '/');
  const fallbackPath = path.join(root, 'index.html');
  const finalPath = existsSync(filePath) && statSync(filePath).isFile() ? filePath : fallbackPath;
  const extension = path.extname(finalPath);

  response.writeHead(200, { 'Content-Type': contentTypes[extension] || 'application/octet-stream' });
  createReadStream(finalPath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`RuralCare AI is running at http://${host}:${port}`);
  console.log('Keep this terminal open while using the app. Press Ctrl+C to stop.');
});
