import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import Title from '@components/Title'
import { View } from '@tarojs/components'
import './index.less'

const prefixCls = 'wowo-love-footer';

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

class Index extends Component {

  state = {}

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { data } = this.state
    return (
      <View className={prefixCls}>
          <View className={`${prefixCls}-title`}>普惠人力</View>
          <View className={`${prefixCls}-content`}>我们已经为<span>330,000</span>企业用户,<span>10,000,000+</span>个人用户提供普惠人力服务</View>
      </View>
    )
  }
}

export default Index as ComponentType
