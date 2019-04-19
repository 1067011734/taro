import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames';
import './index.less';

const prefixCls = 'wowo-item';

export interface titleProps {
  // 标题
  title: string;
  // 子元素
  children: any;
}

export default class DocsHeader extends Component<titleProps, {}> {
  static defaultProps = {
    animation: false
  }
  render() {
    const { title } = this.props;

    const className = classNames({
      [`${prefixCls}`]: true,
    });

    return (
      <View className={className}>
        <View className={`${prefixCls}-title`}>{title}</View>
        <View className={`${prefixCls}-content`}>{this.props.children}</View>
      </View>
    )
  }
}
