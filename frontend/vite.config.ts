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
            '@api': resolve(__dirname, './src/api'),
            '@assets': resolve(__dirname, './src/assets'),
            '@components': resolve(__dirname, './src/components'),
            '@router': resolve(__dirname, './src/router'),
            '@store': resolve(__dirname, './src/store'),
            '@views': resolve(__dirname, './src/views'),
        },
    },
    build: {
        outDir: 'target/dist',
        assetsDir: 'static',
    },
})
