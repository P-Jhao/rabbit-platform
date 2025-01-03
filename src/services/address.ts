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

export const putMemberAddressByIdAPI = async (id: string, data: AddressParams) => {
  return await http<AddressItem>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

export const deleteMemberAddressByIdAPI = async (id: string) => {
  return await http<AddressItem>({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
