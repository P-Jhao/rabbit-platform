/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import type XtxGuess from '@/components/XtxGuess.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
  }
}

export type XtxGuessInstance = InstanceType<typeof XtxGuess>
