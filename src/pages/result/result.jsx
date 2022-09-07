import React from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'
import BasicPanel from './basic-panel'
import './result.scss'
import HistoryPanel from './history-panel'
import FuturePanel from './future-panel'

const tabs = ['基本命盘','过往报告','未来预测']
export default class Result extends React.Component {
  state={
    currentTab: 0
  }
  componentDidMount() {}
  handleTabChange = (event) => {
    console.log(event);
    this.setState({currentTab: event})
  }
  render() {
    return(
      <View className='result'>
        <AtSegmentedControl current={this.state.currentTab} values={tabs} fontSize='32' onClick={this.handleTabChange} ></AtSegmentedControl>
        {
          this.state.currentTab === 0 && 
          <BasicPanel />
        }
        {
          this.state.currentTab === 1 &&
          <HistoryPanel />
        }
        {
          this.state.currentTab === 2 && 
          <FuturePanel />
        }
      </View>
    )
  }
}