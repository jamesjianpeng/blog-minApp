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
class TagStore {
    constructor() {
        this.data = {};
        this.list = {};
        this.step = 0;
        this.getList = (params) => {
            return request_1.requestGet('/api/v1/get/tags', params).then((res) => {
                this.list = res.data;
            });
        };
        this.getData = (_id) => {
            return request_1.requestGet('/api/v1/get/tag/' + _id).then((res) => {
                this.data = res.data;
            });
        };
        this.deleteData = (_id) => {
            return request_1.requestDelete('/api/v1/delete/tag/' + _id, {}, true);
        };
        this.setData = (data) => {
            this.data = data || {
                text: '',
                value: '',
                createTime: '',
                updateTime: '',
                version: 0,
                history: []
            };
        };
        this.postData = (data) => {
            return request_1.requestPost('/api/v1/post/tag', data, true);
        };
        this.setStep = (step) => {
            this.step = step;
        };
    }
}
__decorate([
    mobx_1.observable
], TagStore.prototype, "data", void 0);
__decorate([
    mobx_1.observable
], TagStore.prototype, "list", void 0);
__decorate([
    mobx_1.observable
], TagStore.prototype, "step", void 0);
__decorate([
    mobx_1.action
], TagStore.prototype, "getList", void 0);
__decorate([
    mobx_1.action
], TagStore.prototype, "getData", void 0);
__decorate([
    mobx_1.action
], TagStore.prototype, "deleteData", void 0);
__decorate([
    mobx_1.action
], TagStore.prototype, "setData", void 0);
__decorate([
    mobx_1.action
], TagStore.prototype, "postData", void 0);
__decorate([
    mobx_1.action
], TagStore.prototype, "setStep", void 0);
exports.default = new TagStore();
//# sourceMappingURL=tag.js.map