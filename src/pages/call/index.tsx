import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar, AtButton } from 'taro-ui'
import './index.less'

const prefixCls = 'page-call';

class Index extends Component {
  state={
    // 用户头像
    avatarUrl:'',
    // 用户姓名
    nickName:'-',
  }

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

  getUserInfo = (data) => {
    if (!data) {
      return;
    }

    const { userInfo } = data.detail
    const { avatarUrl, nickName } = userInfo

    this.setState({
      avatarUrl,
      nickName
    })
  }

  render() {
    const { avatarUrl, nickName } = this.state

    return (
      <View className={`page page-inline ${prefixCls}`}>
        <View className="page-header">
          <View className="page-header-description">
            <View className="name"><span>Hello,</span>{nickName}</View>
            <View className="welcome"><span>👉</span>今晚一起来吃鸡吧！</View>
          </View>
          <View className="page-header-avatar">
            <AtAvatar
              size="large"
              circle
              image={avatarUrl}
            ></AtAvatar>
          </View>
        </View>
        <View className="page-content">
          content
        </View>
        <View className="page-footer">
          <AtButton openType="getUserInfo" onGetUserInfo={this.getUserInfo}>允许获取用户信息</AtButton>
          <AtButton type='primary' >我要反馈意见</AtButton>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
