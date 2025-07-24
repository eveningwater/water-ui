import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'WaterUIIcons',
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
}); 