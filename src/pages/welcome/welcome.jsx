import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'
import './welcome.scss'

export default class Welcome extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount() {
    setTimeout(() => {
      Taro.navigateTo({url: '/pages/index/index'})
    }, 2000);
  }
  render () {
    return(
      <View className='welcome' id='welcome'>
        <View className='loader'></View>
      </View>
    )
  }
}