import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lenis')) return 'scroll';
            if (id.includes('react-router') || id.includes('react-dom') || id.includes('/react/')) return 'vendor';
          }
          if (id.includes('/src/seo/blog-posts')) return 'blog';
        },
      },
    },
  },
});
