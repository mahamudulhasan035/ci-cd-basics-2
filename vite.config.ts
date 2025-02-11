import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ✅ Enables global expect
    environment: 'jsdom', // ✅ Simulates browser environment
    setupFiles: './src/setupTests.ts', // ✅ Setup file for jest-dom
  },
});
