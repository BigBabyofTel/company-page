import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_serviceId': JSON.stringify(process.env.VITE_serviceId),
    'process.env.VITE_templateId': JSON.stringify(process.env.VITE_templateId),
    'process.env.VITE_publicKey': JSON.stringify(process.env.VITE_publicKey),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
