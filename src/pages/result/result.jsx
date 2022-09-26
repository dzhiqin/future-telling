import React from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
// import { AtAvatar } from 'taro-ui'
// import defaultPng from '@/images/default-image.png'
import BkCard from '@/components/bk-card/bk-card'
import BkBlock from '@/components/bk-block/bk-block'
import BkTitle from '@/components/bk-title/bk-title'

// import BasicPanel from './basic-panel'
import './result.scss'
// import HistoryPanel from './history-panel'
// import FuturePanel from './future-panel'

// const tabs = ['基本命盘','过往报告','未来预测']
const userInfo = Taro.getStorageSync('userInfo') || {}
export default class Result extends React.Component {
  state={
    // currentTab: 0
    lunarBirthday: '',
    ShiChen: ''
  }
 
  componentDidMount() {
    
  }
  // handleTabChange = (event) => {
  //   console.log(event);
  //   this.setState({currentTab: event})
  // }
  
  handleClickYear = () => {
    console.log('click year');
    // Taro.navigateTo({url: '/pages/year/year'})
  }
  render() {
    return(
      <View className='result'>
        {/* <View className='result-header'></View> */}
        <View className='bk-card-shadow result-card'>
          {/* <View className='flex-center'>
            <AtAvatar image={defaultPng} circle />
          </View> */}
          <View className='result-card-info'>
            <View>{userInfo.name} {userInfo.gender}</View>
            <View>阳历生日 {userInfo.birthday} {userInfo.time}</View>
            {/* <View>阴历 {this.state.lunarBirthday} {this.state.ShiChen}</View> */}
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
        <BkTitle title='吉凶方位' />
        <View className='result-position'>
          <View>本命大吉位：正西酉鸡位（255°-285°）</View>
          <View>三合大吉位：东南偏南巳蛇位（135°-165°）、东北偏北丑牛位（15°-45°）</View>
          <View>怼命大凶位:  东北偏东寅虎位（45°-75°）</View>
          <View>绝命大凶位:  正南午马位（165°-195°）、正北子鼠位（345°-15°）</View>
          <View>大吉运坐向:  酉山（正西）卯向（正东）</View>
          <View>忌讳坐向:  午山（正南）子向（正北）</View>
          <View>大吉运开门位:  巳蛇位（135°-165°）、丑牛位（15°-45°）、辰龙位（105°-135°）</View>
          <View>忌讳开门位:  午马位（165°-195°）、寅虎位（45°-75°）、子鼠位（345°-15°）</View>
        </View>
        <BkTitle title='贵人' customStyle='margin-top: 40px' />
        <View>天上贵人:  丑未; 逢未丑年大吉，遇贵人相助，有获得财富和事业好机会。</View>
        <View>贵人圈:  巳卯酉丑辰亥未</View>
        
        <View className='history-panel'>
          <BkCard title='过往三大吉年' headerColor='orange' >
            <View style='padding: 10px;' className='flex-between' >
              <BkBlock title='贵人' headerColor='orange' text='2020年' onClick={this.handleClickYear} />
              <BkBlock title='贵人' headerColor='orange' text='2021年' onClick={this.handleClickYear} />
              <BkBlock title='' headerColor='orange' text='2022年' onClick={this.handleClickYear} />
            </View>
          </BkCard>
          <BkCard title='过往三大凶年' headerColor='red' customStyle='margin-top: 20px'>
            <View style='padding: 10px;' className='flex-between' >
              <BkBlock title='利空' headerColor='red' text='2011年' onClick={this.handleClickYear} />
              <BkBlock title='差' headerColor='red' text='2013年' onClick={this.handleClickYear} />
              <BkBlock  text='2001' onClick={this.handleClickYear} />
            </View>
          </BkCard>
          <BkCard title='人生大运周期' headerColor='green' customStyle='margin-top: 20px'>
            <View style='padding: 10px;' className='flex-between'>
              <BkBlock title='利空' headerColor='blueviolet' text='庚午-1990-马'></BkBlock>
              至
              <BkBlock text='丙子-1996-鼠'></BkBlock>
            </View>
            <View style='padding: 10px;' className='flex-between'>
              <BkBlock title='好' headerColor='coral' text='丁丑-1997-牛'></BkBlock>
              至
              <BkBlock text='葵未-2003-羊'></BkBlock>
            </View>
            <View style='padding: 10px;' className='flex-between'>
              <BkBlock title='利好' headerColor='orange' text='辛卯-2011-兔'></BkBlock>
              至
              <BkBlock text='丁酉-2017-鸡'></BkBlock>
            </View>
            <View style='padding: 10px;' className='flex-between'>
              {/* <BkBlock lock  text='辛卯-2011-兔'></BkBlock> */}
              <BkBlock title='平'  text='辛卯-2011-兔'></BkBlock>
              至
              <BkBlock text='丁酉-2017-鸡'></BkBlock>
            </View>
          </BkCard>
        </View>
       
        {/* <BasicPanel /> */}
        {/* <HistoryPanel /> */}
        
      </View>
    )
  }
}