import { PluginFunc } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

declare module 'esm-dayjs' {
  interface Dayjs {
    toObject(): DayjsObject
  }
}
