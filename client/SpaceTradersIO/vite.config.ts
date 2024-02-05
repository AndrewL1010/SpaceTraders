import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
// https://vitejs.dev/config/

dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5001,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', 
  
      },
    },
  }
})
