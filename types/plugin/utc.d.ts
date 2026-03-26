import { PluginFunc, ConfigType } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {
  interface Dayjs {
    
    utc(keepLocalTime?: boolean): Dayjs
    
    local(): Dayjs

    isUTC(): boolean

    utcOffset(offset: number | string, keepLocalTime?: boolean): Dayjs
  }

  export function utc(config?: ConfigType, format?: string, strict?: boolean): Dayjs
}
