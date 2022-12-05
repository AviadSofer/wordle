import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: { '/api/': 'http://localhost:5000/' },
  },
  plugins: [react(), tsconfigPaths()],
  publicDir: 'public',
});
