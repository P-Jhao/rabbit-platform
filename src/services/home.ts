import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
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

export const getHomeCategoryAPI = async () => {
  return await http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

export const getHomeHotAPI = async () => {
  return await http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
