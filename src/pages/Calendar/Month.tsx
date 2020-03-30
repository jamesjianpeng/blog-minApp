import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components';
import { WeekendTitle } from './Weekend';
import './style.scss'
export class Month extends Component<any, any> {
    render() {
        const { data, weekendTitle, month, year } = this.props
        const res = Object.keys(data || {}).map((key: string) => {
            const weekendData = data[key]
            const list = Object.keys(weekendData || {})
            const startIndex = Number(list[0])
            console.log(startIndex)
            if (startIndex != 0) {
                for (var i = 0; i < startIndex; i++) {
                    list.unshift('-1')
                }
            }
            console.log(list)
            return (
                <View key={ `${year}_${key}_${Math.random()}` } className="weekend">{
                    list.map((k: string) => {
                        const d = new Date()
                        const today = `${d.getFullYear()}/${d.getMonth()}/${d.getDate()}`
                        return (
                            <Text 
                                className={`${today === (weekendData[k] || {})._date ? 'is-today' : ''} day`}
                                key={`${ Math.random() }${k}`}
                            > 
                                { (weekendData[k] || {}).date || '000' } 
                            </Text>
                        )
                    })
                }</View>
            )
        })
       
        return (
            <div> 
                { year } - {  month } 月 
                { <WeekendTitle data={ weekendTitle } /> }
                { res }
            </div>
        )
    }
}
