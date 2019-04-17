import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less';

const prefixCls = 'wowo-title';

export interface titleProps {
  // 标题
  children: any;
}

export default class DocsHeader extends Component<titleProps, {}> {
  render() {
    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-content`}>{this.props.children}</View>
      </View>
    )
  }
}
