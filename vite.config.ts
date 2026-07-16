import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function copyProjectImages(): Plugin {
  return {
    name: 'copy-project-images',
    closeBundle() {
      const source = resolve(process.cwd(), 'img')
      const destination = resolve(process.cwd(), 'dist', 'img')

      if (existsSync(source)) {
        cpSync(source, destination, { recursive: true })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyProjectImages()],
  base: process.env.NODE_ENV === 'production' ? '/repo_landing_page/' : '/',
})
