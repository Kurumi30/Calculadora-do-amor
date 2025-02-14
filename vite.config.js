import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        generate: resolve(__dirname, './generate.html'),
      }
    }
  }
}