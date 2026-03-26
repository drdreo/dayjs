import { PluginFunc } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {
  export function updateLocale(localeName: string, customConfig: Record<string, unknown>): Record<string, unknown>
}
