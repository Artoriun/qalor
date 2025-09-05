Copy this file to your server and follow the quick steps to enable precompressed serving.

1) Place files
- Copy the built `dist/` contents to `/var/www/qalor` (or the path you set in `nginx.conf`).

2) Install or enable brotli/gzip static support
- For Debian/Ubuntu with nginx mainline and brotli module (recommended):
  - Install packages or compile nginx with brotli_static and gzip_static. Cloud providers often expose a supported package.
  - If using OpenResty/nginx with modules, ensure `brotli_static` and `gzip_static` are available.

3) Enable the site
- Copy `deploy/nginx.conf` into `/etc/nginx/sites-available/qalor` and symlink to `/etc/nginx/sites-enabled/`.
- Test and reload nginx:

  sudo nginx -t
  sudo systemctl reload nginx

4) Verify
- From a remote machine run:

  curl -sI -H "Accept-Encoding: br" https://qalor.nl/assets/index-DN9d9r5_.js

- Check response headers: expect `Content-Encoding: br` (or `gzip`) and `Vary: Accept-Encoding`.

Notes
- If you can't enable brotli_static on the server, CDN options like Cloudflare/Netlify will compress on the edge.
- Do not set Content-Encoding manually unless you fully control the file selection logic.
