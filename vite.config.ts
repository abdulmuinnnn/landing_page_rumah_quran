import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ konfigurasi fix untuk Netlify
export default defineConfig({
  plugins: [react()],
  base: './', // <--- tambahkan ini
})



// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
*/