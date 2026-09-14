import { cp, mkdir, rm } from 'node:fs/promises'

await rm('dist', { recursive: true, force: true })
await mkdir('dist/src', { recursive: true })
await cp('index.html', 'dist/index.html')
await cp('src/app.js', 'dist/src/app.js')
await cp('src/styles.css', 'dist/src/styles.css')
await cp('public', 'dist', { recursive: true })
console.log('WASL production build created in dist/')
