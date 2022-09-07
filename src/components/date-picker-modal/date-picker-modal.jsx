import React from 'react'
import{ AtModal , AtButton, AtModalContent, AtModalAction, AtCalendar} from 'taro-ui'
import { Button, View } from '@tarojs/components'
import { humanDate } from '@/utils/formatter'

export default class DatePickerModal extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selectedDate: null,
      currentDate: humanDate(new Date())
    }
  }

  handleCancel = () => {
    console.log('cancel',typeof this.props.onCancel);
    if(typeof this.props.onCancel !== 'function') return
    this.props.onCancel()
  }
  handleConfirm = () => {
    if(typeof this.props.onConfirm !== 'function') return

    this.props.onConfirm(this.state.selectedDate || this.state.currentDate)
  }
  render () {
    return(
      <AtModal isOpened={this.props.show}>
        <AtModalContent>
          <AtCalendar isSwiper={false} onDayClick={(date) => this.setState({selectedDate: date.value})} 
            maxDate={this.props.maxDate ? this.props.maxDate : ''}
          />
          
        </AtModalContent>
        <AtModalAction> 
          <Button onClick={this.handleCancel.bind(this)}>取消</Button> 
          <Button onClick={this.handleConfirm.bind(this)}>确定</Button> 
        </AtModalAction>
      </AtModal>
    )
  }
}