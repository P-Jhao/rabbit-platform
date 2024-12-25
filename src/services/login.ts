import { http } from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

// 小程序快捷登录
export const postLoginWxMinAPI = async (data: LoginParams) => {
  return await http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 小程序模拟手机登录（内测版）
export const postLoginWxMinSimpleAPI = async (phoneNumber: string) => {
  return await http({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
