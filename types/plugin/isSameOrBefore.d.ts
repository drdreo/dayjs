import { PluginFunc, ConfigType, OpUnitType } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {
  interface Dayjs {
    isSameOrBefore(date?: ConfigType, unit?: OpUnitType): boolean
  }
}
