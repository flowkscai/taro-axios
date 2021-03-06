import * as rawTaro from '@tarojs/taro'
// @ts-ignore
import utils from 'axios/lib/utils'

const { isString, isObject, forEach, merge } = utils as {
  isString(value: any): value is string,
  isObject(value: any): value is Record<string, string>,
  forEach<T extends Record<string, any>>(obj: T, fn: (value: T[keyof T], key: keyof T, obj: T) => void): void,
  merge<T extends Record<string, any>>(...args: T[]): T,
}

function objectToQueryString(obj: Record<string, any>) {
  const result: string[] = []
  forEach(obj, (value, key) => {
    result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  })
  return result.join('&')
}

function getTaro(): typeof rawTaro {
  const Taro = require('@tarojs/taro') as any

  return Taro && (Taro as any).default || Taro
}

export { isString, isObject, forEach, merge, objectToQueryString, getTaro }
