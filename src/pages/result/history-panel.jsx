import React from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import BkCard from '@/components/bk-card/bk-card'
import BkBlock from '@/components/bk-block/bk-block'
import './result.scss'

export default class HistoryPanel extends React.Component {
  handleClickYear = () => {
    console.log('click year');
    Taro.navigateTo({url: '/pages/year/year'})
  }
  render() {
    return(
      <View className='history-panel'>
        <View></View>
        <BkCard title='过往三大吉年' headerColor='orange' >
          <View style='padding: 10px;' className='flex-between' >
            <BkBlock title='贵人' headerColor='orange' text='2020年' onClick={this.handleClickYear} />
            <BkBlock title='贵人' headerColor='orange' text='2021年' onClick={this.handleClickYear} />
            <BkBlock title='大吉' headerColor='orange' text='2022年' onClick={this.handleClickYear} />
          </View>
        </BkCard>
        <BkCard title='过往三大凶年' headerColor='red' customStyle='margin-top: 20px'>
          <View style='padding: 10px;' className='flex-between' >
            <BkBlock title='大凶' headerColor='red' text='2011年' onClick={this.handleClickYear} />
            <BkBlock title='凶' headerColor='red' text='2013年' onClick={this.handleClickYear} />
            <BkBlock  text='2001' onClick={this.handleClickYear} />
          </View>
        </BkCard>
        <BkCard title='人生大运周期' headerColor='green' customStyle='margin-top: 20px'>
          <View style='padding: 10px;' className='flex-between'>
            <BkBlock title='大凶' headerColor='blueviolet' text='庚午-1990-马'></BkBlock>
            至
            <BkBlock text='丙子-1996-鼠'></BkBlock>
          </View>
          <View style='padding: 10px;' className='flex-between'>
            <BkBlock title='吉运' headerColor='coral' text='丁丑-1997-牛'></BkBlock>
            至
            <BkBlock text='葵未-2003-羊'></BkBlock>
          </View>
          <View style='padding: 10px;' className='flex-between'>
            <BkBlock title='大吉' headerColor='orange' text='辛卯-2011-兔'></BkBlock>
            至
            <BkBlock text='丁酉-2017-鸡'></BkBlock>
          </View>
          <View style='padding: 10px;' className='flex-between'>
            <BkBlock lock  text='辛卯-2011-兔'></BkBlock>
            至
            <BkBlock text='丁酉-2017-鸡'></BkBlock>
          </View>
        </BkCard>
      </View>
    )
  }
}