import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/teshavsharma/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // no base option here for user pages
});
