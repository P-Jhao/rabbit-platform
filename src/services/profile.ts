import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfileAPI = async () => {
  return await http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfileAPI = async (data: ProfileParams) => {
  return await http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
