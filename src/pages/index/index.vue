<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/banner'

const bannerListRef = ref<BannerItem[]>([])
const categoryListRef = ref<CategoryItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerListRef.value = res.result
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryListRef.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerListRef" />
  <CategoryPanel :list="categoryListRef" />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background: #f7f7f7;
}
</style>
