"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const request_1 = require("../help/request");
const constants_1 = require("../constants");
class ArticleStore {
    constructor() {
        this.data = {};
        this.list = {
            data: [],
            total: 0,
            page: 1,
            search: '',
            pageSize: 5,
            type: constants_1.ARTICLE_DOING,
            keyword: '',
            startDate: '',
            endDate: '',
            tag: ''
        };
        this.step = 0;
        this.getList = (params) => {
            return request_1.requestGet('/api/v1/get/articles', params).then((res) => {
                console.log(res);
                console.log('-------');
                this.setList(res.data);
            });
        };
        this.getData = (_id) => {
            return request_1.requestGet('/api/v1/get/article/' + _id).then((res) => {
                this.data = res.data;
            });
        };
        this.deleteData = (_id) => {
            return request_1.requestDelete('/api/v1/delete/article/' + _id, {}, true);
        };
        this.putDataState = (data) => {
            return request_1.requestDelete('/api/v1/put/articleState/', data, true);
        };
        this.setData = (data) => {
            this.data = data || {
                title: '',
                post: '',
                content: '',
                html: '',
                tag: [],
                state: 'doing',
                createTime: '',
                updateTime: '',
                version: 0,
                history: []
            };
        };
        this.postData = (data) => {
            return request_1.requestPost('/api/v1/post/article', data);
        };
        this.setStep = (step) => {
            this.step = step;
        };
        this.setList = (data) => {
            this.list = Object.assign(Object.assign({}, this.list), data);
        };
    }
}
__decorate([
    mobx_1.observable
], ArticleStore.prototype, "data", void 0);
__decorate([
    mobx_1.observable
], ArticleStore.prototype, "list", void 0);
__decorate([
    mobx_1.observable
], ArticleStore.prototype, "step", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "getList", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "getData", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "deleteData", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "putDataState", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "setData", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "postData", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "setStep", void 0);
__decorate([
    mobx_1.action
], ArticleStore.prototype, "setList", void 0);
exports.ArticleStore = ArticleStore;
exports.default = new ArticleStore();
//# sourceMappingURL=article.js.map