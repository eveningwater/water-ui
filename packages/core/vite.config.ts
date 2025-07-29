import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'ew-button': resolve(__dirname, 'src/components/ew-button/index.ts'),
        'ew-input': resolve(__dirname, 'src/components/ew-input/index.ts'),
        'ew-input-number': resolve(__dirname, 'src/components/ew-input-number/index.ts'),
        'ew-checkbox': resolve(__dirname, 'src/components/ew-checkbox/index.ts'),
        'ew-radio': resolve(__dirname, 'src/components/ew-radio/index.ts'),
        'ew-text': resolve(__dirname, 'src/components/ew-text/index.ts'),
        'ew-link': resolve(__dirname, 'src/components/ew-link/index.ts'),
        'ew-icon': resolve(__dirname, 'src/components/ew-icon/index.ts'),
        'ew-modal': resolve(__dirname, 'src/components/ew-modal/index.ts'),
        'ew-container': resolve(__dirname, 'src/components/ew-container/index.ts'),
        'ew-row': resolve(__dirname, 'src/components/ew-row/index.ts'),
        'ew-col': resolve(__dirname, 'src/components/ew-col/index.ts'),
        'ew-table': resolve(__dirname, 'src/components/ew-table/index.ts'),
        'ew-scrollbar': resolve(__dirname, 'src/components/ew-scrollbar/index.ts'),
        'ew-space': resolve(__dirname, 'src/components/ew-space/index.ts'),
        'ew-splitter': resolve(__dirname, 'src/components/ew-splitter/index.ts'),
      },
      name: 'WaterUI',
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'esm' : format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['@water-ui/themes'],
      output: {
        globals: {
          '@water-ui/themes': 'WaterUIThemes'
        }
      }
    },
    cssCodeSplit: false
  }
}); 