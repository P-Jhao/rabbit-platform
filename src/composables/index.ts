import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 */
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  const handleScrolltolower = () => {
    guessRef.value?.getGoodsGuessData()
  }
  return {
    guessRef,
    handleScrolltolower,
  }
}
