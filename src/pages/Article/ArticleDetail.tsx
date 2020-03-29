import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { STORE_ARTICLE } from '../../constants'
import { ArticleStore } from '../../store'
interface IProps {
    [STORE_ARTICLE]: ArticleStore
}

@inject(STORE_ARTICLE)
@observer
class ArticleDetail extends Component<IProps, any> {
  config: Config = {
    navigationBarTitleText: '文章详情'
  }

  get getData () {
    const store = this.props[STORE_ARTICLE]
    return store.data.content
  }

  constructor(props: IProps) {
    super(props)
  }

  componentWillMount () {
      console.log('componentWillMount')
      const store = this.props[STORE_ARTICLE]
      store.getData(this.$router.params.id)
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  imgClick = (src) => {
    Taro.previewImage({urls: [src]}).then(() => {
    })
  }

  linkClick = (href) => {
    Taro.setClipboardData({data: href}).then(() => {
      Taro.showToast({title: '链接已复制'}).then(() => {
      })
    })

  }
  render () {
    return (
      <View className='index'>
      { this.getData }
      </View>
    )
  }
}

export default ArticleDetail  as ComponentType
