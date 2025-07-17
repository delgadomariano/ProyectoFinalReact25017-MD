import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/ 
export default defineConfig({
  base: '/cosquillas_en_la_lengua/',
  plugins: [react()]
})