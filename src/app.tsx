import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import store from './store/index'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/Article/Article',
      'pages/Project/Project',
      'pages/Calendar/Calendar',
      'pages/Article/ArticleDetail',
      'pages/Home/Home'
    ],
    tabBar: {
      "custom": false,
      "color": "#999",
      "selectedColor": "#fff",
      "backgroundColor": "#000",
      "list": [
        {
          "pagePath": "pages/Project/Project",
          "text": "Project"
        },
        {
          "pagePath": "pages/Calendar/Calendar",
          "text": "Calendar"
        },
        {
          "pagePath": "pages/Article/Article",
          "text": "Article"
        },
        {
          "pagePath": "pages/Home/Home",
          "text": "Home"
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
