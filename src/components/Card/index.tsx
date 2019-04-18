import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames';
import './index.less';

const prefixCls = 'wowo-card';

export interface titleProps {
  // 标题
  title: String,
  // 子元素
  children: any;
  // 数据源
  data: any;
}

 class App extends Component<titleProps, {}> {
  static defaultProps = {
    animation: false,
    data:[]
  }

  render() {
    const { data, title } = this.props;

    const className = classNames({
      [`${prefixCls}`]: true
    });

    return (
      <View className={className}>
        <View className={`${prefixCls}-title`}>{title}</View>
        <View className={`${prefixCls}-content`}>
          {data.map((x,key)=>(
             <View className={`${prefixCls}-item`} key={key}>
             <View>{x.label}：</View>
             <View className={`${prefixCls}-item-value`}>{x.value}</View>
           </View>
          ))}
        </View>
      </View>
    )
  }
}

export default App
