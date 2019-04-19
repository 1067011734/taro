import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

class Index extends Component {

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

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='at-article'>
        <View className='at-article__h1'>
          钉钉、人力窝联合成立“人力家”，智能社保和智能薪酬时代来了！
  </View>
        <View className='at-article__info'>
          2018-12-20 崔欢欢
  </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>职场开心又扎心的寒暄话题：社保交几年了？今天工资到账没？</View>
            <View className='at-article__p'>
              曾几何时，听基友谈及她公司一新同事近十年的社保一朝断交，呆了三个月就离职的事，一阵唏嘘，也是从那时起，小编知晓了社保断交对买车摇号和购房而言简直是一场无妄之灾。因此，当你有了一份新工作，社保一定不能断交，你除了要抓紧时间适应新环境，每天早中晚向HR各请安一次，了解续交社保进度是为第一要务。
      </View>
            <View className='at-article__p'>
              每个月你最开心的是哪天？当然是10号发薪水那天，可当你发现当天工资并没有到账，内心orz：发生了什么！于是除了某些心大的，不出一天各种公司八卦就满天飞了，如果后来你知道是HR另有要事，耽误了核发工资，再加上领导外出，批复延迟的锅，你能一笑而过么？在国内有超过4300万中小企业，HR还在使用Excel表核算薪资，耗时耗力且多凭经验，信息化和智能化相对落后，但企业人效需求旺盛，这也导致了中小企业普遍寿命较短的情况。
      </View>
            <View className='at-article__h2'>“智能社保”和“智能薪酬”来了</View>
            <View className='at-article__p'>
              12月19日，阿里巴巴钉钉联合人力窝在杭州召开发布会，宣布成立合资公司“人力家”，打造“智能社保”、“智能薪酬”两款应用正式对外发布，为中小企业提供包括人事管理、薪酬管理、社保管理、增值服务在内的一站式人力资源SaaS服务。
      </View>
            <View className='at-article__p'>
              阿里钉钉CEO无招表示，目前钉钉已经初步完成企业运营管理的“人财物事”数字化闭环，人力家的成立和智能薪酬、智能社保的推出，将进一步完善钉钉在“人”数字化方面的能力，加快推动企业的数字化升级。
      </View>
            <Image
              className='at-article__img'
              src='https://pic.doit.com.cn/2018/12/bc28df1fab8238983d905540770e1615.jpg'
              mode='widthFix' />
          </View>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
