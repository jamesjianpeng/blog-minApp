"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../constants/index");
const article_1 = require("./article");
exports.ArticleStore = article_1.ArticleStore;
const config_1 = require("./config");
const tag_1 = require("./tag");
const project_1 = require("./project");
exports.ProjectStore = project_1.ProjectStore;
const counter_1 = require("./counter");
const projectStore = new project_1.ProjectStore();
const articleStore = new article_1.ArticleStore();
const store = {
    [index_1.STORE_COUNTER]: counter_1.default,
    [index_1.STORE_ARTICLE]: articleStore,
    [index_1.STORE_CONFIG]: config_1.default,
    [index_1.STORE_TAG]: tag_1.default,
    [index_1.STORE_PROJECT]: projectStore,
};
exports.default = store;
//# sourceMappingURL=index.js.map