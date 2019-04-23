import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames';
import './index.less';

const prefixCls = 'wowo-title';

export interface titleProps {
  // 子元素
  children: any;
  // 是否显示动画
  animation: Boolean;
}

export default class DocsHeader extends Component<titleProps, {}> {
  static defaultProps = {
    animation: false
  }
  render() {
    const { animation } = this.props;

    const className = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-animation`]: animation,
    });

    return (
      <View className={className}>
        <View className={`${prefixCls}-content`}>{this.props.children}</View>
      </View>
    )
  }
}
