import { PluginFunc } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {
  interface Dayjs {
    week(): number

    week(value : number): Dayjs
  }
}
