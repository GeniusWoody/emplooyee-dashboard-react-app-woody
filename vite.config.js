import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/emplooyee-dashboard-react-app-woody",
  plugins: [react()],
})
