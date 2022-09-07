import {View,Image} from '@tarojs/components'
import lockSvg from '@/images/icons/lock.svg'
import './bk-block.scss'

export default function BkBlock(props) {
  const title = props.title
  const headerColor = props.headerColor
  const lock = props.lock
  const text = props.text
  const lockStyle = {
    'pointer-events': 'none',
    'background-color': '#bfbfbf',
    'border-top-left-radius': '3px',
    'border-bottom-left-radius': '3px',
    'line-height': '2rem',
    'vertical-align': 'middle'
  }
  let titleStyle = ''
  if(title && headerColor){
    titleStyle = {
      color: '#fff',
      background: headerColor,
      'border-top-left-radius': '3px',
      'border-bottom-left-radius': '3px',
      'line-height': `${title.length === 1 ? 2 : 1}rem`
    }
  }
 
  const handleClick = () => {
    if(typeof props.onClick === 'function'){
      props.onClick()
    }
  }
  return(
    <View className='bk-block' onClick={handleClick.bind(this)}>
      {
        (lock || title) &&
        <View className='bk-block-title' style={lock ? lockStyle : titleStyle}>
          {
            lock &&
            <Image src={lockSvg} className='bk-block-title-icon'></Image>
          }
          {
            title &&
            <View>{title}</View>
          }
        </View>
      }
      <View className='bk-block-text'>{text}</View>
    </View>
  )
}