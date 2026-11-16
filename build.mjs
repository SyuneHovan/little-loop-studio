// Combines src/* into one self-contained index.html (no dependencies needed).
import { readFileSync, writeFileSync } from 'node:fs';
const r = f => readFileSync(new URL('./src/' + f, import.meta.url), 'utf8');
const html = r('index.template.html')
  .replace('/*STYLES*/', () => r('styles.css'))
  .replace('/*DATA*/', () => r('data.js'))
  .replace('/*ART*/', () => r('art.js'))
  .replace('/*APP*/', () => r('app.js'));
// inline photos referenced as '@img/name.jpg' so the page stays one self-contained file
const out = html.replace(/@img\/([\w.-]+\.(jpe?g|png|webp))/g, (_, f, ext) =>
  `data:image/${ext === 'jpg' ? 'jpeg' : ext};base64,` + readFileSync(new URL('./images/' + f, import.meta.url)).toString('base64'));
writeFileSync(new URL('./index.html', import.meta.url), out);
console.log('Built index.html', (out.length / 1024).toFixed(1) + ' KB');
