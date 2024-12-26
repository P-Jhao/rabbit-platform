<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

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

//处理第一次加载数据
const isLoadingRef = ref(false)
onLoad(async () => {
  isLoadingRef.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotPanelData()])
  isLoadingRef.value = false
})

// 猜你喜欢组合式函数调用
const { guessRef, handleScrolltolower } = useGuessList()

//处理下拉刷新
const isTriggeredRef = ref(false)
const handleRefresherrefresh = async () => {
  isTriggeredRef.value = true
  guessRef.value!.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHotPanelData(),
    guessRef.value!.getGoodsGuessData(),
  ])
  isTriggeredRef.value = false
}
</script>

<template>
  <CustomNavbar />

  <scroll-view
    class="scrollView"
    scroll-y
    @scrolltolower="handleScrolltolower"
    refresher-enabled
    @refresherrefresh="handleRefresherrefresh"
    :refresher-triggered="isTriggeredRef"
  >
    <PageSkeleton v-if="isLoadingRef" />
    <template v-else>
      <XtxSwiper :list="bannerListRef" />
      <CategoryPanel :list="categoryListRef" />
      <HotPanel :list="hotPanelListRef" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scrollView {
  flex: 1;
}
</style>
