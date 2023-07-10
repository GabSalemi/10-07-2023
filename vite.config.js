import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        
        @import "./src/scss/variables.scss";
        @import "./src/scss/helpers.scss";
        @import "./src/scss/mediaquery.scss";
      `
      }
    }
  }
})
