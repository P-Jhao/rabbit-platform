import { http } from '@/utils/http'
import type { PageParams } from '../types/global'

type HotParams = PageParams & { subType?: string }

export const getHotComponentData = async (url: string, data?: HotParams) => {
  return await http({
    method: 'GET',
    url,
    data,
  })
}
