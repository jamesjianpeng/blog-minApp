import { ComponentType } from 'react'
import { AtTabBar } from 'taro-ui'
import Taro, { Component } from '@tarojs/taro'

class TabBar extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
        tabList: [
            { title: 'Project', iconType: 'equalizer', dot: true },
            { title: 'Article', iconType: 'folder', dot: true },
            { title: 'Home', iconType: 'home' }
        ]
    }
  }
  componentWillMount () {
    console.log(this.$router)
    console.log('componentWillMount')
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <AtTabBar
          fixed={true}
          tabList={this.state.tabList}
          onClick={this.handleClick.bind(this)}
          current={ 1 }
        />
    )
  }
  handleClick (value) {
    this.setState({
      current: value
    })
    console.log(value)
    const { title } = this.state.tabList[value]
    Taro.navigateTo({
        url: `/pages/${title}/${title}`
    })
  }
}

export default TabBar  as ComponentType