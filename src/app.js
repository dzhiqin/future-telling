import { Component } from 'react'
import Taro from '@tarojs/taro'
import GlobalEventEmitter from '@/components/global-event/global-event'
import './app.scss'

const globalEvent = new GlobalEventEmitter()
window.globalEvent =  globalEvent

class App extends Component {

  componentDidMount () {
    window.globalEvent.on('toast',this.toastHandler)
  }
  toastHandler = (msg) => {
    Taro.showToast({
      title: msg,
      icon: 'none'
    })
  }
  componentDidShow () {}
  
  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
