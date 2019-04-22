import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import Title from '@components/Title'
import { View } from '@tarojs/components'
import { AtTimeline, AtGrid, AtFloatLayout, AtToast } from 'taro-ui'
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
        value: '智能社保',
        content: '“智能社保”主攻透明化、效率化的社保管理服务，“随时随地管社保”在节省沟通成本、控制企业不必要支出方面提供了高性价比的选择，致力于帮助中国企业快速提高人事薪酬福利和社保管理能效。'
      },
      {
        image:
          'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '智能薪酬',
        content: '智能薪酬”覆盖个税申报、薪酬报表、社保计算、薪酬档案、薪酬计算、工资条六大场景，并嵌入贴合2019年个税改革的个人所得税专项扣除功能。'
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
    ],
    layout: {
      isOpened: false,
      title: '',
      content: ''
    },
    isOpenedTotal: false
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

  /**
   * 显示/隐藏轻提示
   * @param bool false:隐藏；true:显示
   */
  toggleTotal = (bool) => {
    this.setState({ isOpenedTotal: bool })
  }

  /**
   * 点击产品，显示产品详情
   * @param item 点击的产品数据
   */
  handleAtGridClick = (item) => {
    const { layout } = this.state;
    const { value, content } = item;

    if (!content) {
      this.toggleTotal(true)
      return
    }

    this.setState({
      layout: {
        ...layout,
        title: value,
        isOpened: true,
        content
      }
    })
  }

  /**
   * 隐藏产品详情
   */
  handleLayoutClose = () => {
    const { layout } = this.state;

    this.setState({
      layout: {
        ...layout,
        isOpened: false,
      }
    })
  }

  render() {
    const { data, layout, isOpenedTotal } = this.state

    return (
      <View className='page-inline'>
        <AtToast isOpened={isOpenedTotal} text="暂无数据" duration={1000} onClose={() => { this.toggleTotal(false) }}></AtToast>
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
          onClick={this.handleAtGridClick}
        />
        <AtFloatLayout isOpened={layout.isOpened} title={layout.title} onClose={this.handleLayoutClose}>
          {layout.content}
        </AtFloatLayout>
      </View>
    )
  }
}

export default Index as ComponentType
