import { PluginFunc } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {
  interface Dayjs {
    dayOfYear(): number
    dayOfYear(value: number): Dayjs
  }
}
