import React from 'react'
import { Picker,View } from '@tarojs/components'

import { addressObj } from './area'

export default class MyPicker extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      indexArray: [0,0,0],
      provinces: Object.keys(addressObj),
      addressRange: [],
      provinceName: '',
      cityName: '',
      districtName: '',
      selectedResult: '请选择地址'
    }
  }
  componentDidMount() {
    const defaultCityObj = addressObj[this.state.provinces[0]]
    const defaultCitys = Object.keys(defaultCityObj)
    const defaultDistricts = defaultCityObj[defaultCitys[0]]
    this.setState({
      addressRange: [this.state.provinces, defaultCitys, defaultDistricts],
      provinceName: this.state.provinces[0],
      cityName: defaultCitys[0],
      districtName: defaultDistricts[0]
    })
  }
  handleChange = () => {
    if(typeof this.props.onSelectArea !== 'function') return
    const {provinceName,cityName,districtName} = this.state
    this.setState({
      selectedResult: `${provinceName} ${cityName} ${districtName}`
    })
    this.props.onSelectArea([provinceName,cityName,districtName])
  }
  handleColumnChange = (event) => {
    const { detail: {column, value}} = event
    if(column === 0){
      const cityObj = addressObj[this.state.provinces[value]]
      const citys = Object.keys(cityObj)
      const districts = cityObj[citys[0]]
      this.setState({
        addressRange: [this.state.provinces, citys, districts],
        indexArray: [value, this.state.indexArray[1], this.state.indexArray[2]],
        provinceName: this.state.provinces[value],
        cityName: citys[0],
        districtName: districts[0]
      })
    }
    if(column === 1){
      const cityName = this.state.addressRange[1][value]
      const districts = addressObj[this.state.provinceName][cityName]
      this.setState({
        addressRange: [this.state.provinces, this.state.addressRange[1], districts],
        indexArray: [this.state.indexArray[0], value, this.state.indexArray[2]],
        cityName,
        districtName: districts[0]
      })
    }
    if(column === 2){
      const districtName = this.state.addressRange[2][value]
      this.setState({
        indexArray: [this.state.indexArray[0], this.state.indexArray[1], value],
        districtName
      })
    }
  }
  
  render(){
    return(
      <View>
        <Picker 
          mode='multiSelector' 
          id='my-picker'
          onChange={this.handleChange}
          value={this.state.indexArray}
          range={this.state.addressRange}
          onColumnChange={this.handleColumnChange}
        >
          <View>{this.state.selectedResult}</View>
        </Picker>
      </View>
      
    )
  }
}