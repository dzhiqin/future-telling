// import React from 'react'
import { View } from '@tarojs/components'

import './bk-card.scss'

export default function BkCard(props) {
  
  const {title,headerColor,customStyle} = props
  const headerStyle = {
    background: `${props.headerColor}`,
    'border-top-left-radius': '8px',
    'border-top-right-radius': '8px',
    color: 'white'
  }
  return(
    <View className='bk-card' style={customStyle ? customStyle : ''}>
      {
        !!title && 
        <View  style={headerColor ? headerStyle : ''} className='bk-card-header'>
          {title}
        </View>
      }
      {
        props.children
      }
    </View>
  )
}