// build-client.mjs
import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/scripts/app.ts'], // tu entry real
  bundle: true,                        // 🔑 mete TODO dentro
  minify: true,
  format: 'esm',
  platform: 'browser',
  outfile: 'dist/_astro/app.js',       // dónde quedará en el build
  sourcemap: false,
});
console.log('✓ Client bundle generado en dist/_astro/app.js');
