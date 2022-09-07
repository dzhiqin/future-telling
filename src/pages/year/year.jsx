import {View} from '@tarojs/components'
import React from 'react'
import BkBlock from '@/components/bk-block/bk-block'

import './year.scss'

export default class Year extends React.Component{
  render() {
    return(
      <View className='year'>
        <View>大运周期 2011-2017</View>
        <View>流年 2011</View>
        <View>流年运势详解</View>
        <View className='bk-card-shadow' style='width: 100%; height: 200px'></View>
        <View>流月运势</View>
        <View className='bk-card-shadow' style='padding:20px'>
          <View className='flex-between'>
            <BkBlock title='大吉' headerColor='green' text='1月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='2月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='3月'></BkBlock>
          </View>
          <View className='flex-between'>
            <BkBlock title='大吉' headerColor='green' text='4月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='5月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='6月'></BkBlock>
          </View>
          <View className='flex-between'>
            <BkBlock title='大吉' headerColor='green' text='7月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='8月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='9月'></BkBlock>
          </View>
          <View className='flex-between'>
            <BkBlock title='大吉' headerColor='green' text='10月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='11月'></BkBlock>
            <BkBlock title='大吉' headerColor='orange' text='12月'></BkBlock>
          </View>
          
        </View>
      </View>
    )
  }
}