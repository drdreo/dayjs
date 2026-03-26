import { PluginFunc, ConfigType, OpUnitType } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {
  interface Dayjs {
    isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | null, d?: '()' | '[]' | '[)' | '(]'): boolean
  }
}
