import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

export const getGoodsByIdAPI = async (id: string) => {
  return await http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
