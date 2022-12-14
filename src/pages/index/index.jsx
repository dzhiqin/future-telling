import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Picker, Image, Text } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import DatePickerModal from '@/components/date-picker-modal/date-picker-modal'
import { humanDate } from '@/utils/formatter'
import AreaPicker from '@/components/area-picker/area-picker'
import nameSvg from '../../images/icons/name.svg'
import genderSvg from '../../images/icons/gender.svg'
import calenderSvg from '../../images/icons/calender.svg'
import addressSvg from '../../images/icons/address.svg'
import timeSvg from '../../images/icons/time.svg'
import bannerPng from '../../images/yinyang.png'
import './index.scss'


export default class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      // firstVisit: window.firstVisit,
      firstVisit: false,
      dateModalshow: false,
      name: '',
      gender: '男',
      time: '',
      addressArray: [],
      birthday: '',
      loading: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      window.firstVisit = false
      this.setState({firstVisit: false})
    }, 2000)
  }
  componentDidShow () { }
  componentDidHide () { }
  handleCancel = () => {
    this.setState({dateModalshow: false})
  }
  handleConfirm = (value) => {
    this.setState({dateModalshow: false,birthday: value})
  }
  handleChange = (stateName, event) => {
    this.setState({
      [stateName]: event+''
    })
  }
  handleTimeChange = (event) => {
    const {detail: {value}} = event
    this.setState({
      time: value
    })
  }
  handleSelectArea = (event) => {
    this.setState({addressArray: event})
  }
  handleSubmit = () => {
    const res = this.validator()
    if(!res.valid) {
      window.globalEvent.emit('toast', res.message)
      return
    }
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
      Taro.navigateTo({url: '/pages/result/result'})
    }, 2000)
    
  }
  validator = () => {
    const {name,gender,time,birthday,addressArray} = this.state
    if(!name) return {valid: false,message: '请输入姓名'}
    if(!time) return {valid: false,message: '请填写出生时间'}
    if(!birthday) return {valid: false,message: '请填写出生日期'}
    if(!addressArray || addressArray.length === 0) return {valid: false,message: '请填写出生地区'}
    Taro.setStorageSync('userInfo',{name,gender,time,birthday,addressArray})
    return {valid: true,message: '校验通过'}
  }
  render () {
    return (
      <View className='index'>
        {
          this.state.firstVisit &&
          <Image src={bannerPng} className='index-banner'></Image>
        }
        <View className='index-header'>
          <View className='index-header-title'>八字起盘</View>
        </View>
        <View className='index-form'>
          <View className='index-form-panel flex'>
            <Image src={nameSvg} className='input-item-icon' />
            <AtInput
              name='value'
              title='姓名'
              type='text'
              placeholder='标准五个字'
              value={this.state.name}
              onChange={this.handleChange.bind(this,'name')}
            />
          </View>
          <View className='index-form-panel flex-between input-item'>
            <View className='flex-between'>
              <Image src={genderSvg} className='input-item-icon' />
              <Text>性别</Text>
            </View>
            <View className='flex-between'>
              <AtButton className='index-form-btn' type={this.state.gender === '男' ? 'primary' : ''} size='small' onClick={() => this.setState({gender: '男'})}>男</AtButton>
              <AtButton className='index-form-btn' type={this.state.gender === '女' ? 'primary' : ''} size='small' onClick={() => this.setState({gender: '女'})}>女</AtButton>
            </View>
          </View>
          <View className='index-form-panel flex-between input-item' onClick={() => this.setState({dateModalshow: true})}>
            <View className='flex-between'>
              <Image src={calenderSvg} className='input-item-icon' />
              <View>出生日期</View>
            </View>
            <View>{this.state.birthday || '请选择出生日期'}</View>
          </View>
          <View className='index-form-panel flex-between input-item'>
            <View className='flex-between'>
              <Image src={timeSvg} className='input-item-icon' />
              <View>出生时间</View>
            </View>
            <Picker mode='time' onChange={this.handleTimeChange}>
              <View>{this.state.time || '请选择出生时间'}</View>
            </Picker>
          </View>
          <View className='index-form-panel flex-between input-item'>
            <View className='flex-between'>
              <Image src={addressSvg} className='input-item-icon' />
              <View>出生地区</View>
            </View>
            <AreaPicker onSelectArea={this.handleSelectArea} />
          </View>
        </View>
        <AtButton loading={this.state.loading} type='primary' customStyle='margin: 70px' onClick={this.handleSubmit}>开始测算</AtButton>
        <DatePickerModal 
          show={this.state.dateModalshow} 
          onCancel={this.handleCancel.bind(this)} 
          onConfirm={this.handleConfirm} 
          maxDate={humanDate(new Date())}
        /> 
      </View>
    )
  }
}
