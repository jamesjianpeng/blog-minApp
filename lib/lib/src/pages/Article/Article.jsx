"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const mobx_1 = require("@tarojs/mobx");
const constants_1 = require("../../constants");
const taro_ui_1 = require("taro-ui");
const moment_1 = require("moment");
// import TabBar from '../../components/TabBar'
require("./Article.scss");
let Index = class Index extends taro_1.Component {
    constructor(props) {
        super(props);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '文章'
        };
        this.handleClick = (item) => {
            console.log(item);
        };
        this.state = {
            current: 0
        };
    }
    get getList() {
        const store = this.props[constants_1.STORE_ARTICLE];
        return store.list.data;
    }
    componentWillMount() {
        console.log('componentWillMount');
        const store = this.props[constants_1.STORE_ARTICLE];
        store.getList({
            page: store.list.page,
            pageSize: store.list.pageSize,
            type: store.list.type,
            keyword: store.list.keyword,
            startDate: store.list.startDate,
            endDate: store.list.endDate,
            tag: store.list.tag
        });
    }
    componentWillReact() {
        console.log('componentWillReact');
    }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        const store = this.props[constants_1.STORE_ARTICLE];
        const list = this.getList.map((item) => {
            let time = item.createTime ? moment_1.default(new Date(item.updateTime)).format('YYYY/MM/DD hh:mm:ss') : '-';
            time = `${time}`;
            return (
            // <Text key={ item.title }> { item.title } </Text>
            <taro_ui_1.AtListItem key={item.title} title={item.title} note={time} onClick={this.handleClick} extraText='查看' arrow='right'/>);
        });
        console.log(store.list.data);
        return (<components_1.View className='index'>
        <taro_ui_1.AtList>
          {list}
        </taro_ui_1.AtList>
      </components_1.View>);
    }
};
Index = __decorate([
    mobx_1.inject(constants_1.STORE_ARTICLE),
    mobx_1.observer
], Index);
exports.default = Index;
//# sourceMappingURL=Article.jsx.map