// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://asociacionaljofarcastilleja.es',
    base: '/', // raíz del dominio
    vite: {
        build: { assetsInlineLimit: 0 },
        css: { preprocessorOptions: { sass: { quietDeps: true } } },
    },
});
