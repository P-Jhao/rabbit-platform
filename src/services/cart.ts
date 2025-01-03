import type { CartItem } from '@/types/cart'
import type { CartParams } from '@/types/goods'
import { http } from '@/utils/http'

export const postMemberCart = async (data: CartParams) => {
  return await http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

export const getMemberCart = async () => {
  return await http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

export const deleteMemberCart = async (ids: string[]) => {
  return await http({
    method: 'DELETE',
    url: '/member/cart',
    data: {
      ids,
    },
  })
}

export const putMemberCartBySkuIdAPI = async (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return await http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

export const putMemberCartSelectedAllAPI = async (selected: boolean) => {
  return await http({
    method: 'PUT',
    url: '/member/cart/selected',
    data: {
      selected,
    },
  })
}
