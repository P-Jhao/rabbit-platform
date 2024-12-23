import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
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

export const getHomeGoodsAPI = async (data?: PageParams) => {
  return await http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
