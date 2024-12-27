<script setup lang="ts">
import {
  getMemberAddressByIdAPI,
  postMemberAddressAPI,
  putMemberAddressByIdAPI,
} from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'
import type { UniFormsInstance } from '@uni-helper/uni-ui-types'
import { ref } from 'vue'

// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})

const query = defineProps<{
  id?: string
}>()

const getMemberAddressByIdData = async () => {
  //判断是否为修改
  if (query.id) {
    //修改地址
    const res = await getMemberAddressByIdAPI(query.id)
    Object.assign(form.value, res.result)
  }
}

onLoad(() => {
  getMemberAddressByIdData()
})

uni.setNavigationBarTitle({
  title: query.id ? '修改地址' : '新建地址',
})

// 修改所在地区
const handleRegionChange: UniHelper.RegionPickerOnChange = (ev) => {
  const [provinceCode, cityCode, countyCode] = ev.detail.code!
  form.value.fullLocation = ev.detail.value.join(' ')
  Object.assign(form.value, { provinceCode, cityCode, countyCode })
}

// 修改是否为默认地址
const handleSwitchChange: UniHelper.SwitchOnChange = (ev) => {
  form.value.isDefault = +ev.detail.value
}

// 表单校验
const formRef = ref<UniFormsInstance>()
const rules: UniHelper.UniFormsRules = {
  receiver: {
    rules: [
      {
        required: true,
        errorMessage: '姓名不能为空',
      },
    ],
  },
  contact: {
    rules: [
      {
        required: true,
        errorMessage: '联系电话不能为空',
      },
      {
        pattern: /^1[3-9]\d{9}$/,
        errorMessage: '联系电话格式错误',
      },
    ],
  },
  fullLocation: {
    rules: [
      {
        required: true,
        errorMessage: '地区不能为空',
      },
    ],
  },
  address: {
    rules: [
      {
        required: true,
        errorMessage: '详细地址不能为空',
      },
    ],
  },
}

// 提交地址表单
const handleSubmitTap = async () => {
  try {
    // 提交前判断表单验证是否通过
    await formRef.value?.validate!()
    // 验证通过, 判断是否为修改地址
    if (query.id) {
      await putMemberAddressByIdAPI(query.id, form.value)
    } else {
      await postMemberAddressAPI(form.value)
    }

    uni.showToast({
      icon: 'success',
      title: query.id ? '修改成功' : '添加成功',
    })

    setTimeout(() => {
      uni.navigateBack()
    }, 500)
  } catch (error) {
    // 验证失败
    uni.showToast({
      icon: 'error',
      title: '请填写完整信息',
    })
  }
}
</script>

<template>
  <view class="content">
    <uni-forms ref="formRef" :rules="rules" :model="form">
      <!-- 表单内容 -->
      <uni-forms-item class="form-item" name="receiver">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="contact">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="fullLocation">
        <text class="label">所在地区</text>
        <picker class="picker" mode="region" value="" @change="handleRegionChange">
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item class="form-item" name="address">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault"
          @change="handleSwitchChange"
        />
      </view>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="handleSubmitTap">保存并使用</button>

  {{ form }}
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
