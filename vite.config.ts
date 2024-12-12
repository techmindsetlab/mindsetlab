import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ubah sesuai dengan sub-path hosting Anda
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
});