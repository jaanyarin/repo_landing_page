import { copyFileSync, cpSync, existsSync } from 'node:fs'
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

        const missingRacimoImage = resolve(destination, 'racimo_por_planta(1).png')
        const equivalentSourceImage = resolve(source, 'evaluacion_de_crecimiento de_brote(3).png')

        if (!existsSync(missingRacimoImage) && existsSync(equivalentSourceImage)) {
          copyFileSync(equivalentSourceImage, missingRacimoImage)
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyProjectImages()],
  base: process.env.NODE_ENV === 'production' ? '/repo_landing_page/' : '/',
})