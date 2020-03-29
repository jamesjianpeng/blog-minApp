import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { STORE_ARTICLE } from '../../constants'
import { ArticleStore } from '../../store'
import { AtList, AtListItem, AtActivityIndicator, AtSearchBar } from "taro-ui"
import moment from 'moment';
// import TabBar from '../../components/TabBar'
import './Article.scss'
// import { IArticle } from '@smartblog/models';

interface IProps {
  [STORE_ARTICLE]: ArticleStore
}

@inject(STORE_ARTICLE)
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
    navigationBarTitleText: '文章'
  }

  get getList() {
    const store = this.props[STORE_ARTICLE]
    return store.list.data
  }
  constructor(props: IProps) {
    super(props)
    this.state = {
      current: 0,
      loading: true
    }
  }

  componentWillMount() {
    this.initList()
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {
    console.log('=componentDidMount')
  }

  componentWillUnmount() {
    console.log('=componentWillUnmount')
  }

  componentDidShow() {
    this.initList()
  }

  componentDidHide() {
    console.log('=componentDidHide')
  }
  initList() {
    this.setState({
      loading: true
    })
    const store = this.props[STORE_ARTICLE]
    store.getList({
      page: store.list.page,
      pageSize: store.list.pageSize,
      type: store.list.type,
      keyword: store.list.keyword,
      startDate: store.list.startDate,
      endDate: store.list.endDate,
      tag: store.list.tag
    }).then(() => {
      this.setState({
        loading: false
      })
    })
  }

  render() {
    const store = this.props[STORE_ARTICLE]

    const list = this.getList.map((item) => {
      let time = item.createTime ? moment(new Date(item.updateTime)).format('YYYY/MM/DD hh:mm:ss') : '-'
      time = `${time}`
      return (
        // <Text key={ item.title }> { item.title } </Text>
        <AtListItem
          key={item.title}
          title={item.title}
          note={time}
          onClick={() => { this.handleClick(item) }}
          arrow='right'
          data-id={item._id}
        />
      )
    })
    console.log(store.list.data)
    return (
      <View className='index'>
        <AtSearchBar
          fixed={true}
          value={store.list.keyword || ''}
          placeholder="搜索文章名字"
          onConfirm={this.handleChange}
          onClear={this.clearChange}
          onChange={(e) => e}
        />
        <View className="box">
          <AtList>
            {list}
          </AtList>
        </View>
        {
          this.state.loading ? (
            <View className="fix-center">
              <AtActivityIndicator mode='center' size={32} color='#13CE66'></AtActivityIndicator>
            </View>
          ) : null
        }
      </View>
    )
  }

  handleChange = (e) => {
    console.log(e.detail.value)
    const value = e.detail.value
    this.setState({
      loading: true
    })
    const store = this.props[STORE_ARTICLE]
    store.getList({
      page: store.list.page,
      pageSize: store.list.pageSize,
      type: store.list.type,
      keyword: value,
      startDate: store.list.startDate,
      endDate: store.list.endDate,
      tag: store.list.tag
    }).then(() => {
      this.setState({
        loading: false
      })
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  clearChange = (e) => {
    this.setState({
      loading: true
    })
    const store = this.props[STORE_ARTICLE]
    store.getList({
      page: store.list.page,
      pageSize: store.list.pageSize,
      type: store.list.type,
      keyword: '',
      startDate: store.list.startDate,
      endDate: store.list.endDate,
      tag: store.list.tag
    }).then(() => {
      this.setState({
        loading: false
      })
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return ''
  }

  handleClick = (item) => {
    console.log(item)
    Taro.navigateTo({
      url: `/pages/Article/ArticleDetail?id=${item._id}`
    })
  }
}

export default Index as ComponentType
