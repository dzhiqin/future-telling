import {View} from '@tarojs/components'

import './bk-title.scss'

export default function BkTitle(props) {
  const {title,customStyle} = props
  return(
    <View className='bk-title flex' style={customStyle? customStyle : ''}>
        {title}
    </View>
  )
}