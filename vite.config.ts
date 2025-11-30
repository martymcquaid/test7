import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/b9b2f842-3ce5-4ac7-82f5-aee198a9c96d/preview/',
  plugins: [react()],
  server: {
    port: 5143,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5143,
    },
  },
})
