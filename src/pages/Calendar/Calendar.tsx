import Taro, { Component } from '@tarojs/taro'
import { ComponentType } from 'react'
import { Month } from './Month';
import { MONTH, DAY, getDatePickDateInstance } from './data'
import { Text, View } from '@tarojs/components'
interface IState { data: any, year: number}

class Calendar extends Component<any, IState> {
    config: Config = {
        navigationBarTitleText: '日历工具'
    }
    static defaultProps = {
        data: getDatePickDateInstance( new Date()),
        year:  new Date().getFullYear()
    }
    componentDidMount () {
        this.setState({
            data: getDatePickDateInstance( new Date()),
            year:  new Date().getFullYear()
        })
     }

    componentWillUnmount () { }
  
    componentDidShow () {
    }
  
    componentDidHide () { }
    render() {
        const { data, year } = this.state
        const res = Object.keys(data ||  {}).map((key: string) => (
            <Month 
                key={key} 
                data={ data[key] } 
                month={ MONTH[Number(key)] }
                weekendTitle={ DAY }
                year={ year }
            />))
        return (
            <View> { res } </View>
        )
    }
}

export default Calendar as ComponentType