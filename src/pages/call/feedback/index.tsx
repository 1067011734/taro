import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtTextarea, AtButton, AtInput, AtRate } from 'taro-ui'
import Item from '@components/Item'
import './index.less'

const prefixCls = 'page-call-feedback';

class Index extends Component {

  state={
    rate:3
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

  handleSubmit = (ev) => {
    console.log(ev.detail.value, 11111)
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
        <AtForm
          onSubmit={this.handleSubmit}
        >
          <Item title='您的评分'>
          <AtRate
            value={rate}
            key='rate'
            onChange={(value) => { this.handleChange(value, 'rate') }}
          />
          </Item>
          <AtTextarea
            maxLength={200}
            placeholder='您的建议是...'
          />
          <AtButton formType='submit' type='primary'>提交</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default Index as ComponentType
