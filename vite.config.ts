import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import relay from 'vite-plugin-relay';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), relay],
});
