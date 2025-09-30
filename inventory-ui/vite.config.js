import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      // Ye '/api' se start hone wali requests ko Render backend pe forward karega
      '/api': {
        target: 'https://model-ai-inventory.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' remove karke backend ko forward kare
      },
    },
  },
})
