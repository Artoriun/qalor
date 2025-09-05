Serve precompressed assets locally

This project emits precompressed `.gz` and `.br` files in `dist/` when you build with the compression plugin.

Quick start (macOS / zsh)

1. Build the site:

```bash
npm run build
```

2. Start the precompressed test server (serves `.br` then `.gz` when client supports it):

```bash
npm run serve:compressed
# or background:
npm run serve:compressed:bg
```

3. Open http://localhost:8080/ in your browser. The server returns `Content-Encoding: br` or `gzip` when appropriate and sets `Vary: Accept-Encoding`.

Run Lighthouse locally (requires Chrome installed):

```bash
# ensure server is running, then:
npm run lh:report
# output will be written to ./precompressed-lighthouse.json
```

Notes
- This server is for local testing only. For production, enable `gzip_static` and `brotli_static` (or equivalent) in your webserver or rely on your CDN.
- The repository also contains `deploy/nginx.conf` with an example nginx setup.
