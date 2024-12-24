import { http } from '@/utils/http'
import type { PageParams } from '../types/global'
import type { HotResult } from '@/types/hot'

type HotParams = PageParams & { subType?: string }

export const getHotComponentData = async (url: string, data?: HotParams) => {
  return await http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
