// @ts-check
import { defineConfig, envField } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// For alias imports
import { fileURLToPath, URL } from 'node:url'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      },
    },
  },

  output: 'static',
  build: { inlineStylesheets: 'auto' },

  env: {
    schema: {
      FOOTBALL_API_KEY: envField.string({ context: 'server', access: 'secret' }),
    },
    validateSecrets: false,
  },

  server: {
    host: true,
    port: 4321,
  },
})
