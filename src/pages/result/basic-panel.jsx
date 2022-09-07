import React from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import defaultPng from '@/images/default-image.png'
import './result.scss'

const userInfo = Taro.getStorageSync('userInfo') || {}

export default class BasicPanel extends React.Component {
  render() {
    return(
      <View className='result-wrap'>
        <View className='bk-card-shadow result-card'>
          <View className='flex-center'>
            <AtAvatar image={defaultPng} circle />
          </View>
          <View className='result-card-info'>
            <View>{userInfo.name} {userInfo.gender}</View>
            <View>阳历 {userInfo.birthday} {userInfo.time}</View>
            <View>阴历 生日 </View>
          </View>
        </View>
        <View className='bk-card-shadow result-desc'>
          <View className='at-row'>
            <View className='at-col at-col-4'>
              <View className='result-desc-title'>生辰八字</View>
              <View className='result-desc-title'>宇宙能力</View>
              <View className='result-desc-title'>二十八星宿</View>
              <View className='result-desc-title'>灵魂性格</View>
            </View>
            <View className='at-col at-col-8'>
              <View className='result-desc-info'>庚午庚辰癸卯壬子，午能量</View>
              <View className='result-desc-info'>午量子场</View>
              <View className='result-desc-info'>轸宿</View>
              <View className='result-desc-info'>动灵魂，自强不息，居安思危</View>
            </View>
          </View>
        </View>
        <View className='bk-card-shadow result-detail'>
          <View className='result-detail-column'>
            <View className='result-detail-head'></View>
            <View className='result-detail-subHead'>天干</View>
            <View className='result-detail-subHead'>地支</View>
          </View>
          <View className='result-detail-column' style=''>
            <View className='result-detail-head'>年柱</View>
            <View className='result-detail-item' style='color: red;'>壬</View>
            <View className='result-detail-item'>申</View>
          </View>
          <View className='result-detail-column' style=''>
            <View className='result-detail-head'>月柱</View>
            <View className='result-detail-item'>已</View>
            <View className='result-detail-item' style='color: blue;'>巳</View>
          </View>
          <View className='result-detail-column' style=''>
            <View className='result-detail-head'>日柱</View>
            <View className='result-detail-item'>壬</View>
            <View className='result-detail-item'>午</View>
          </View>
          <View className='result-detail-column' style=''>
            <View className='result-detail-head'>时柱</View>
            <View className='result-detail-item' style='color: green;'>丙</View>
            <View className='result-detail-item'>巳</View>
          </View>
        </View>
      </View>
    )
  }
}