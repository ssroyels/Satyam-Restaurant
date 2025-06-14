import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'
export default defineConfig({
  plugins: [
    tailwindcss(),
    
    
  ],
    server: {
    host: true,          // allows access from network (mobile)
    port: 5173,          // optional, but consistent
  },
})