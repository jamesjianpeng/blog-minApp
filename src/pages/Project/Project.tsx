import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { STORE_PROJECT } from '../../constants'
import { ProjectStore } from '../../store'
// import TabBar from '../../components/TabBar'
import './Project.scss'

interface IProps {
    [STORE_PROJECT]: ProjectStore
}

@inject(STORE_PROJECT)
@observer
class Index extends Component<IProps, any> {
  /**
   * 指定config的类型声xiangmu明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '项目'
  }

  constructor(props: IProps) {
    super(props)
    this.state = {
      current: 0
    }
  }

  componentWillMount () {
      console.log(this.props[STORE_PROJECT])
      console.log('componentWillMount')
      const store = this.props[STORE_PROJECT]
      store.getList({
        name: `blog-administration,blog-client`,
        page: 1,
        pageSize: 10
      })
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const store = this.props[STORE_PROJECT]
    console.log('render')
    console.log(store)
    console.log('render')
    return (
      <View className='index'>
        <Text>welcom smartblog ✌ author: jamesjianpeng - project</Text>
      </View>
    )
  }
}

export default Index  as ComponentType