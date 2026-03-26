import { PluginFunc } from 'esm-dayjs'

declare module 'esm-dayjs' {
  interface ConfigTypeMap {
    bigIntSupport: BigInt
  }
  export function unix(t: BigInt): Dayjs
}

declare const plugin: PluginFunc
export default plugin
