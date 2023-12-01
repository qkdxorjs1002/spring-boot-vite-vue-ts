import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8098',
                ws: true,
                changeOrigin: true,
            },
        },
    },
    plugins: [ vue() ],
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '@': resolve(__dirname, './src'),
            '@assets': resolve(__dirname, './src/assets'),
            '@components': resolve(__dirname, './src/components'),
        },
    },
    build: {
        outDir: 'target/dist',
        assetsDir: 'static',
    },
})
