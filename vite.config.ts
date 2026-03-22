import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ci_cd_project_testing/', // <--- fix here
  server: {
    open: true,
    port: 3001,
  },
})