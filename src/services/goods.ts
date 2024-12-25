import { http } from '@/utils/http'

export const getGoodsByIdAPI = async (id: string) => {
  return await http({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
