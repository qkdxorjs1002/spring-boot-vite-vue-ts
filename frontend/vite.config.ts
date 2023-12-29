import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolve from 'unplugin-icons/resolver'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        __APP_URL__: JSON.stringify("http://localhost:8089"),
        __API_URL__: JSON.stringify("http://localhost:8089/api"),
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8098',
                ws: true,
                changeOrigin: true,
            },
        },
    },
    plugins: [
        vue(),
        Components({
            resolvers: [ BootstrapVueNextResolver() ],
        }),
        Components({
            resolvers: [ IconsResolve() ],
            dts: true,
        }),
        Icons({
            compiler: 'vue3',
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'target/dist',
        assetsDir: 'static',
    },
})
