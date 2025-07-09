import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  // Adicione isso para ignorar os arquivos .sql
  loader: {
    '.sql': 'text',
  },
});