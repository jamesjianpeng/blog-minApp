import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './style.scss'
export class WeekendTitle extends Component<any, any> {
    render() {
        const { data = [] } = this.props
        const res = data.map((item: any, index: number) => {
            return <Text key={`WeekendTitle_${index}`} className="day">{ [item] }</Text>
        })
        return (<View className="weekend-title"> { res } </View>)
    }
}