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
class ConfigStore {
    constructor() {
        this.tags = [];
        this.menus = [];
        this.getTags = () => {
            request_1.requestGet('/api/v1/get/config/tags').then((res) => {
                this.tags = res.data;
            });
        };
        this.getMenus = () => {
            request_1.requestGet('/api/v1/get/menus').then((res) => {
                this.menus = res.data;
            });
        };
    }
}
__decorate([
    mobx_1.observable
], ConfigStore.prototype, "tags", void 0);
__decorate([
    mobx_1.observable
], ConfigStore.prototype, "menus", void 0);
__decorate([
    mobx_1.action
], ConfigStore.prototype, "getTags", void 0);
__decorate([
    mobx_1.action
], ConfigStore.prototype, "getMenus", void 0);
exports.default = new ConfigStore();
//# sourceMappingURL=config.js.map