import { PluginFunc } from 'esm-dayjs'

declare const plugin: PluginFunc
export default plugin

declare module 'esm-dayjs' {

  export function isMoment(input: any): boolean

}
