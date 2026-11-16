import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const outputDir = resolve('dist')
const serverDir = resolve('dist-server')
const { render } = await import(pathToFileURL(resolve(serverDir, 'entry-server.js')).href)
const htmlPath = resolve(outputDir, 'index.html')
const html = await readFile(htmlPath, 'utf8')
const markup = render()

if (!markup.trim()) throw new Error('Server rendering returned an empty page.')
if (!html.includes('<div id="root"></div>')) throw new Error('Could not find the app root in dist/index.html.')

await writeFile(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`))
await rm(serverDir, { recursive: true, force: true })
console.log('Pre-rendered the homepage into dist/index.html')
