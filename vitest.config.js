import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      'esm-dayjs': resolve(__dirname, 'src/index.js')
    }
  },
  test: {
    globals: true,
    include: ['test/**/*.test.js'],
    coverage: {
      include: ['src/**/*'],
      thresholds: {
        lines: 100
      }
    }
  }
})
