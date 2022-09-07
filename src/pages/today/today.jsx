import {View,Image} from '@tarojs/components'
import React from 'react'
import todayPng from '@/images/today.png'

export default class Today extends React.Component{
  render() {
    return(
      <View>
        <Image src={todayPng} />
      </View>
    )
  }
}