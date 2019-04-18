import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

const prefixCls = 'page-call';

class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我们的家'
  }

  render() {
    return (
      <View className={`page ${prefixCls}`}>
        <View className="page-header  page-inline">
          88888888888888
      </View>
        <View className="page-content  page-inline">
          content
      </View>
      </View>
    )
  }
}

export default Index as ComponentType
