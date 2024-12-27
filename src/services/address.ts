import type { AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const postMemberAddressAPI = async (data: AddressParams) => {
  return await http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
