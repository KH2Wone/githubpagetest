import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/githubpagetest/vue-project-dist/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    include: ["vue"]
  },
  build: {
    outDir: '../vue-project-dist'  // githubpagetest/vue-project-dist 폴더에 빌드
  }
})
