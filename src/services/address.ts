import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/goods'
import { http } from '@/utils/http'

export const postMemberAddressAPI = async (data: AddressParams) => {
  return await http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const getMemberAddressAPI = async () => {
  return await http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

export const getMemberAddressByIdAPI = async (id: string) => {
  return await http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}
