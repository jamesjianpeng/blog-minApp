const axios : { post: any, get: any, delete: any } = {post: {}, get: {}, delete: {}}
import Taro from '@tarojs/taro'

console.log()

const env = process.env.REACT_APP_SECRET_CODE || 'beta'
export const isBeta = env === 'beta'
export const isProd = env === 'prod'
export const isRealProd = env === 'realProd'
export const origin = 'https://smartblog.pengjiandry.com'
export const file_url = '/api/file/v1/uploadImg'
const urlConfig = {
  'beta':  'http://localhost:3070',
  'prod': origin,
  'beta_file': 'http://localhost:3070' + file_url,
  'prod_file': origin + file_url,
}

export const fileConfig = urlConfig[`${env}_file`]

const commonHeaders = {
  'beta':  {
    appId: 'hcbHiywpFpP3m8CTW0',
    authCode: 'GJaImrLgzbgKQ0GaNX5kgCDtPrk7mcdF6Kq2zxe62pU=',
    token: 'rEXS5R5-xw2u-dc18ed47-508a-4f1b-b121-bbc7e167a8f8-m8OXg7'
  },
  'prod': {
    appId: 'hcbHiywpFpP3m8CTW0',
    authCode: 'GJaImrLgzbgKQ0GaNX5kgCDtPrk7mcdF6Kq2zxe62pU=',
    token: 'rEXS5R5-xw2u-dc18ed47-508a-4f1b-b121-bbc7e167a8f8-m8OXg7'
  }
}

export const commonHeaderConfig = commonHeaders[env]
export interface IRes<T> {
  data: T
}

export interface IResPage<T> {
  data: T
  page: number,
  total: number,
  pageSize: number,
  maxCount: number
}

export interface IPage {
  page: number
  pageSize?: number
  keyword?: string
  regionId?: number
}

export interface IUrlQuery {
    id?: string
    type?: string
    stype?: string
    ttype?: string
    role?: string
    page?: number
    pageSize?: number
    keyword?: string
    date?: string
    startDate?: string
    endDate?: string
    tag?: string
}

export type IUrlQueryTemplate = IUrlQuery | {}

export function requestGet(url: any, params?: any, _showMessage?: boolean): Promise<any> {
  return new Promise((resolve) => {
    Taro.request({
      url: `${origin}${url}`,
      data: params,
      method: 'GET',
      success: (res: IRes<any>) => {
        resolve(res.data)
      }
    })
  })
}
export function requestDelete(url: any, params?: any, showMessage?: boolean): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.delete(`${origin}${url}`, { params: params || {} }).then((res: IRes<any>) => {
      if (res.data) {
        resolve(res.data)
        if (showMessage) {
          alert(res.data.message.toString())
        }
      } else {
        if (showMessage) {
          alert(res.toString())
        }
      }
    }).catch((e) => {
      alert(e.toString())
      reject(e)
    })
  })
}
export function requestPost(url: any, params: any, showMessage?: boolean): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.post(`${origin}${url}`, params).then((res: IRes<any>) => {
      if (res.data) {
        resolve(res.data)
        if (showMessage) {
          alert(res.data.message.toString())
        }
      } else {
        if (showMessage) {
          alert(res.toString())
        }
      }
    }).catch((e) => {
      alert(e.toString())
      reject(e)
    })
  })
}

export function requestPostUpload(file: any): Promise<any> {
  return axios.post(`${origin}/api/file/v1/file/upload`, file, {headers: {
    'Content-Type': 'multipart/form-data'
  }})
}
