import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { codeInspectorPlugin } from 'code-inspector-plugin';
export default defineConfig({
  base: '/', // 设置公共路径
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
    }),
    vue(),
  ],
});