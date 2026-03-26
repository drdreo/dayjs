import { rolldown } from 'rolldown'
import { readdir, readFile, writeFile, cp } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import configFactory from './rolldown.config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const localeNameRegex = /\/\/ (.*) \[/
const formatName = (n) => n.replace(/\.js/, '').replace('-', '_')

const localePath = join(__dirname, '../src/locale')

async function build(option) {
  const bundle = await rolldown(option.input)
  await bundle.write(option.output)
}

async function listLocaleJson(localeArr) {
  const localeListArr = []
  await Promise.all(
    localeArr.map(async (l) => {
      const localeData = await readFile(join(localePath, l), 'utf-8')
      localeListArr.push({
        key: l.slice(0, -3),
        name: localeData.match(localeNameRegex)[1]
      })
    })
  )
  await writeFile(join(__dirname, '../locale.json'), JSON.stringify(localeListArr), 'utf8')
}

try {
  const locales = await readdir(localePath)
  for (const l of locales) {
    await build(
      configFactory({
        input: `./src/locale/${l}`,
        fileName: `./locale/${l}`,
        name: `dayjs_locale_${formatName(l)}`
      })
    )
  }

  const plugins = await readdir(join(__dirname, '../src/plugin'))
  for (const plugin of plugins) {
    await build(
      configFactory({
        input: `./src/plugin/${plugin}/index`,
        fileName: `./plugin/${plugin}.js`,
        name: `dayjs_plugin_${formatName(plugin)}`
      })
    )
  }

  await build(
    configFactory({
      input: './src/index.js',
      fileName: './dayjs.min.js'
    })
  )

  await cp('./types/', './', { recursive: true })

  // list locales
  await listLocaleJson(locales)
} catch (e) {
  console.error(e) // eslint-disable-line no-console
  process.exit(1)
}
