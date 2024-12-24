import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTop = async () => {
  return await http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
