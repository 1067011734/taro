import Taro, { Component } from '@tarojs/taro'
import { View ,Image} from '@tarojs/components'
import classNames from 'classnames';
import './index.less';

const prefixCls = 'wowo-tabs-bar';

export interface titleProps {
  data: any;
}

export default class DocsHeader extends Component<titleProps, {}> {
  static defaultProps = {
    data: []
  }
  render() {
    const { data } = this.props;

    const className = classNames({
      [`${prefixCls}`]: true
    });

    return (
      <View className={className}>
        {data.map((x,key)=>(
             <View className={`${prefixCls}-item`} key={key}>
             <Image src={x.src} mode="aspectFit"/>
             <View>{x.label}</View>
             <View className={`${prefixCls}-item-value`}>{x.value}</View>
           </View>
          ))}
      </View>
    )
  }
}
