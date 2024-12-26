import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfileAPI = async () => {
  return await http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
