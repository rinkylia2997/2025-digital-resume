import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/2025-digital-resume/', // Set to your repo name
  plugins: [react()],
});
