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
// import { AtIcon } from 'taro-ui'
const mobx_1 = require("@tarojs/mobx");
const constants_1 = require("../../constants");
// import TabBar from '../../components/TabBar'
require("./Project.scss");
let Index = class Index extends taro_1.Component {
    constructor(props) {
        super(props);
        /**
         * 指定config的类型声xiangmu明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '项目'
        };
        this.state = {
            current: 0
        };
    }
    componentWillMount() {
        console.log('componentWillMount');
        const store = this.props[constants_1.STORE_PROJECT];
        store.getList({
            name: `blog-administration,blog-client`,
            page: 1,
            pageSize: 10
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
        // const store = this.props[STORE_PROJECT]
        return (<components_1.View className='index'>
      <components_1.View className='at-row at-row__justify--center at-row__align--center default-box'>
        敬请期待
      </components_1.View>
      </components_1.View>);
    }
};
Index = __decorate([
    mobx_1.inject(constants_1.STORE_PROJECT),
    mobx_1.observer
], Index);
exports.default = Index;
//# sourceMappingURL=Project.jsx.map