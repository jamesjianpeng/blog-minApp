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
const index_1 = require("../../constants/index");
require("./index.scss");
let Index = class Index extends taro_1.Component {
    constructor() {
        super(...arguments);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            navigationBarTitleText: '首页'
        };
        this.increment = () => {
            const { counterStore } = this.props;
            counterStore.increment();
        };
        this.decrement = () => {
            const { counterStore } = this.props;
            counterStore.decrement();
        };
        this.incrementAsync = () => {
            const { counterStore } = this.props;
            counterStore.incrementAsync();
        };
    }
    componentWillMount() { }
    componentWillReact() {
        console.log('componentWillReact');
    }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        const { counterStore: { counter } } = this.props;
        return (<components_1.View className='index'>
        <components_1.Button onClick={this.increment}>+</components_1.Button>
        <components_1.Button onClick={this.decrement}>-</components_1.Button>
        <components_1.Button onClick={this.incrementAsync}>Add Async</components_1.Button>
        <components_1.Text>{counter}</components_1.Text>
      </components_1.View>);
    }
};
Index = __decorate([
    mobx_1.inject(index_1.STORE_COUNTER),
    mobx_1.observer
], Index);
exports.default = Index;
//# sourceMappingURL=index.jsx.map