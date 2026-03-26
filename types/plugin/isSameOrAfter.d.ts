import { PluginFunc, ConfigType, OpUnitType } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {
  interface Dayjs {
    isSameOrAfter(date?: ConfigType, unit?: OpUnitType): boolean
  }
}
