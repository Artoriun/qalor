import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/', // Set base to root for deployment at https://qalor.nl/
  server: {
    allowedHosts: [
      'localhost',
      '192.168.10.23',
      '.loca.lt', // Allow all localtunnel subdomains
      '.ngrok.io', // Allow ngrok domains for future use
    ],
  },
  build: {
    minify: 'esbuild', // Ensure JavaScript is minified during the build
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs for production
      },
    },
  },
})
