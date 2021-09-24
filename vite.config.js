import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  mode: 'development',
  server: {
    host: 'localhost',
    port: 8080
  }
})
