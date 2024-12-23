<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

//获取轮播图数据
const bannerListRef = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerListRef.value = res.result
}

//获取前台分类数据
const categoryListRef = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryListRef.value = res.result
}

//获取热门推荐数据
const hotPanelListRef = ref<HotItem[]>([])
const getHotPanelData = async () => {
  const res = await getHomeHotAPI()
  hotPanelListRef.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHotPanelData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerListRef" />
  <CategoryPanel :list="categoryListRef" />
  <HotPanel :list="hotPanelListRef" />
</template>

<style lang="scss">
page {
  background: #f7f7f7;
}
</style>
