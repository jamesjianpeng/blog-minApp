"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_ui_1 = require("taro-ui");
const taro_1 = require("@tarojs/taro");
class TabBar extends taro_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: [
                { title: 'Project', iconType: 'equalizer', dot: true },
                { title: 'Article', iconType: 'folder', dot: true },
                { title: 'Home', iconType: 'home' }
            ]
        };
    }
    componentWillMount() {
        console.log(this.$router);
        console.log('componentWillMount');
    }
    componentWillReact() {
        console.log('componentWillReact');
    }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        return (<taro_ui_1.AtTabBar fixed={true} tabList={this.state.tabList} onClick={this.handleClick.bind(this)} current={1}/>);
    }
    handleClick(value) {
        this.setState({
            current: value
        });
        console.log(value);
        const { title } = this.state.tabList[value];
        taro_1.default.navigateTo({
            url: `/pages/${title}/${title}`
        });
    }
}
exports.default = TabBar;
//# sourceMappingURL=TabBar.jsx.map