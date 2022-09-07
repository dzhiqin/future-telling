import React from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtCalendar } from 'taro-ui'

export default class FuturePanel extends React.Component {
  handleDayClick = (event) => {
    console.log('event',event);
    Taro.navigateTo({url: '/pages/today/today'})
  }
  render() {
    return(
      <View className='future-panel'>
        <AtCalendar onDayClick={this.handleDayClick} />

      </View>
    )
  }
}