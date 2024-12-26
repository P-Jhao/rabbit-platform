// src/types/member.d.ts

type BaseProfile = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
}

/** 小程序登录 登录用户信息 */
export type LoginResult = {
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
} & BaseProfile

/** 个人信息 用户详情信息 */
export type ProfileDetail = {
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
} & BaseProfile
/** 性别 */
export type Gender = '女' | '男'
