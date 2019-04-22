import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTextarea, AtButton, AtMessage, AtRate } from 'taro-ui'
import Item from '@components/Item'
import './index.less'

const prefixCls = 'page-call-feedback';

class Index extends Component {

  state = {
    rate: 3
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '提交反馈'
  }

  handleSubmit = () => {
    Taro.atMessage({
      'message': '提交成功',
      'type': 'info',
    })
    Taro.navigateBack();
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleChange = (value, key) => {
    this.setState({ [key]: value })
  }

  render() {
    const { rate } = this.state
    return (
      <View className={`page page-inline ${prefixCls}`}>
      <AtMessage />
        <View className="page-content">
          <Item title='您的评分'>
            <AtRate
              value={rate}
              key='rate'
              size={30}
              onChange={(value) => { this.handleChange(value, 'rate') }}
            />
          </Item>
          <AtTextarea
            maxLength={200}
            placeholder='您的建议是...'
          />
        </View>
        <View className="page-footer">
          <AtButton type='primary' onClick={this.handleSubmit}>确定提交</AtButton>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
