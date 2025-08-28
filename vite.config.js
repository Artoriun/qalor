import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qalor/',
  server: {
    allowedHosts: [
      'localhost',
      '192.168.10.23',
      '.loca.lt', // Allow all localtunnel subdomains
      '.ngrok.io', // Allow ngrok domains for future use
    ],
  },
})
