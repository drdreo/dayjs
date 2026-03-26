import { PluginFunc } from 'esm-dayjs'

declare module 'esm-dayjs' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}

declare const plugin: PluginFunc
export default plugin
