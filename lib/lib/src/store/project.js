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
const mobx_1 = require("mobx");
const request_1 = require("../help/request");
class ProjectStore {
    constructor() {
        this.data = {};
        this.list = {
            data: [],
            total: 0,
            page: 1,
            name: '',
            pageSize: 10,
            startDate: '',
            endDate: ''
        };
        this.step = 0;
        this.getList = (params) => {
            return request_1.requestGet('/api/v1/get/project', params).then((res) => {
                this.setList(res.data);
            });
        };
        this.setList = (data) => {
            this.list = Object.assign(Object.assign({}, this.list), data);
        };
    }
}
__decorate([
    mobx_1.observable
], ProjectStore.prototype, "data", void 0);
__decorate([
    mobx_1.observable
], ProjectStore.prototype, "list", void 0);
__decorate([
    mobx_1.observable
], ProjectStore.prototype, "step", void 0);
__decorate([
    mobx_1.action
], ProjectStore.prototype, "getList", void 0);
__decorate([
    mobx_1.action
], ProjectStore.prototype, "setList", void 0);
exports.ProjectStore = ProjectStore;
exports.default = new ProjectStore();
//# sourceMappingURL=project.js.map