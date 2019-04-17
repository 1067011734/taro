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

  state = {
    companyCount:0,
    personalCount:0,
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {
    this.getCount();
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getCount=()=>{
    this.renderCount(100000,'companyCount',330000);
    this.renderCount(1000000,'personalCount',10000000,100000);
  }

  /**
   * 数字每三位加','
   * @params num:值
   *  */
  renderValue=(num)=>{
    const data = String(num).split('').reverse().join("").replace(/[0-9]{3}/g,x=>`${x},`);
    const result = data.split('').reverse();
    if(result && result[0]==','){
      result[0]=''
    }
    return result.join("");
  }

  /**
   * 更新数值
   * @params num:初始值; key:更新的state属性;  total: 最大值; interval:间隔
   *  */
  renderCount=(num,key,total,interval=5000)=>{
    setTimeout(() => {
      num = num+interval;
      if(num>total){
         return '';
      }
      this.setState({[key]:num},()=>{
        this.renderCount(num,key,total,interval)
      })
    }, 10);
  }

  render() {
    const { companyCount,personalCount } = this.state
    return (
      <View className={prefixCls}>
          <View className={`${prefixCls}-title`}>普惠人力</View>
          <View className={`${prefixCls}-content`}>
          <View>我们已经为<span>{this.renderValue(companyCount)}</span>企业用户,</View>
          <View><span>{this.renderValue(personalCount)}+</span>个人用户提供普惠人力服务</View>
          </View>
      </View>
    )
  }
}

export default Index as ComponentType
