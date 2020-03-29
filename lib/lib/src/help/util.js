"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = require("jquery");
exports.scrollTop = () => {
    jquery_1.default('#main-container_srcoll-top').animate({ scrollTop: 0 }, 100);
    window.scrollTo(0, 0);
};
exports.delNullData = (data) => {
    Object.keys(data).map((item) => {
        if (!data[item]) {
            delete data[item];
        }
    });
};
exports.splitUrl = (url) => {
    const index = url.indexOf('?');
    url = url.slice(index + 1);
    const result = {};
    url.split('&').map((item) => {
        const newItem = item.split('=');
        result[newItem[0]] = decodeURIComponent(newItem[1]);
        return item;
    });
    return result;
};
exports.toolbar = [
    ['bold', 'italic', 'underline'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': ['#448aff', 'red'] }, { 'background': ['#448aff', 'red'] }],
    ['clean'],
    ['image'] // remove formatting button
];
exports.changeURL = (history, location, option) => {
    const query = exports.splitUrl(location.search);
    const newPath = buildURL(location.pathname, Object.assign(Object.assign({}, query), (option || {})));
    history.push(newPath);
};
exports.handleObj = (data) => {
    const list = [];
    for (const value in data) {
        list.push({
            text: data[value],
            value
        });
    }
    return list;
};
exports.getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const type = (() => {
    const typeList = ['String', 'Number', 'Boolean', 'Undefined', 'Null', 'Array', 'Object', 'Function', 'Arguments'];
    const tt = {};
    for (let i = 0; i < typeList.length; i++) {
        const t = typeList[i];
        ((typeInner) => {
            tt['is' + typeInner] = (options) => {
                return Object.prototype.toString.call(options) === '[object ' + typeInner + ']';
            };
        })(t);
    }
    return tt;
})();
/**
 * froEach Iterator
 *
 * @param {Object} obj Traversing objects
 * @param {Function} callback Callback
 *
 */
const forEach = (obj, callback) => {
    'use strict';
    if (obj == null) {
        throw new TypeError('obj is null or undefined');
    }
    if (typeof obj !== 'object') {
        throw new TypeError('obj is not object');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not function');
    }
    if (type.isObject(obj)) {
        for (const prop in obj) {
            const value = obj[prop];
            callback(value, prop, obj);
        }
    }
    if (type.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            const value = obj[i];
            callback(value, i, obj);
        }
    }
};
function encode(val) {
    val = val ? val : '';
    val = typeof val !== 'string' ? val.toString().trim() : val.trim();
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
}
/**
 * addURLParam is a function that connects each url parameter
 *
 * @param {String} url
 * @param {String} key
 * @param {String|Number|Boolean} value
 *
 */
const addURLParam = (url, key, value) => {
    'use strict';
    url += url.indexOf('?') === -1 ? '?' : '&';
    url += encode(key) + '=' + encode(value);
    return url;
};
/**
 *
 * buildURL is used '?' Or '&' splicing the full url
 *
 * @param {String} url
 * @param {Object} options
 *
 */
function buildURL(url, options) {
    if (!options) {
        return url;
    }
    const newOptions = {};
    Object.keys(options).map((it) => {
        if (it) {
            newOptions[it] = options[it];
        }
    });
    forEach(newOptions, (value, key) => {
        url = addURLParam(url, key, value);
    });
    return url;
}
exports.buildURL = buildURL;
//# sourceMappingURL=util.js.map