import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * VITE CONFIGURATION
 * Using the official @tailwindcss/vite plugin for v4 support.
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});