import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import Title from '@components/Title'
import { View } from '@tarojs/components'
import { AtTimeline, AtGrid } from 'taro-ui'
import Header from './_components/Header'

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

  state = {
    data: [
      {
        image:
          'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '智能社保'
      },
      {
        image:
          'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '智能薪酬'
      },
      {
        image:
          'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: 'my社保'
      },
      {
        image:
          'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '社保代跑腿'
      },
      {
        image:
          'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: '背景调查'
      }
    ]
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我们的服务'
  }

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
      <View className='page-inline'>
        <Header />
        <View className="margin--bottom-base">
          <Title animation>如何使用？</Title>
          <AtTimeline
            items={[
              { title: '企业开通钉钉' },
              { title: '激活人数大于6人', color: 'green' },
              { title: '登录钉钉应用', color: 'red' },
              { title: '安装智能人事', color: 'yellow' },
              { title: '应用市场扫码安装社保应用', color: 'blue' },
              { title: '进入客户端', color: '#6a6a77' }
            ]}
          >
          </AtTimeline>
        </View>
        <Title animation>产品介绍</Title>
        <AtGrid
          mode='rect'
          data={data}
        />
      </View>
    )
  }
}

export default Index as ComponentType
