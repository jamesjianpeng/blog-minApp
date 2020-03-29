import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { AtButton, AtAvatar } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { STORE_PROJECT } from '../../constants'
import { ProjectStore } from '../../store'
// import TabBar from '../../components/TabBar'
import './Home.scss'

interface IProps {
    [STORE_PROJECT]: ProjectStore
}

@inject(STORE_PROJECT)
@observer
class Index extends Component<IProps, any> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '个人中心'
  }

  constructor(props: IProps) {
    super(props)
    this.state = {
      current: 0,
      userInfo: {}
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

  componentDidShow () {
    Taro.getUserInfo().then((e) => {
      console.log(e)
    }).catch((e) => {
      console.log(e)
    })
  }

  componentDidHide () { }

  onGotUserInfo = res => {
    if(res.detail.userInfo){ // 返回的信息中包含用户信息则证明用户允许获取信息授权
      console.log(res)
      console.log('授权成功')
      this.setState({
        userInfo: res.detail.userInfo
      })
    }else{ // 用户取消授权，进行提示，促进重新授权
      console.log('用户拒绝授权')
    }
  }

  render () {
    const store = this.props[STORE_PROJECT]
    console.log('render')
    console.log(store)
    console.log('render')
    return (
      <View className='index'>

        {
          this.state.userInfo.avatarUrl ? (
            <View className='at-row at-row__justify--center at-row__align--center default-box'>
              <AtAvatar circle image={ this.state.userInfo ? this.state.userInfo.avatarUrl : '' } />
              <View> { this.state.userInfo.nickName } </View>
            </View>
          ) : (
            <AtButton className='login-btn' openType='getUserInfo' onGetUserInfo={this.onGotUserInfo}>getuserinfo</AtButton>
          )
        }
      </View>
    )
  }
}

export default Index  as ComponentType
