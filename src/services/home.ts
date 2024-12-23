import type { BannerItem } from '@/types/banner'
import { http } from '@/utils/http'

export const getHomeBannerAPI = async (distributionSite = 1) => {
  return await http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
