import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qrcode() // Add this line
  ],
  server: {
    host: '0.0.0.0'
  }
})