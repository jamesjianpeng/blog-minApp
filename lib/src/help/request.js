"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const taro_1 = require("@tarojs/taro");
console.log();
const env = process.env.REACT_APP_SECRET_CODE || 'beta';
exports.isBeta = env === 'beta';
exports.isProd = env === 'prod';
exports.isRealProd = env === 'realProd';
exports.origin = 'https://smartblog.pengjiandry.com';
exports.file_url = '/api/file/v1/uploadImg';
const urlConfig = {
    'beta': 'http://localhost:3070',
    'prod': exports.origin,
    'beta_file': 'http://localhost:3070' + exports.file_url,
    'prod_file': exports.origin + exports.file_url,
};
exports.fileConfig = urlConfig[`${env}_file`];
const commonHeaders = {
    'beta': {
        appId: 'hcbHiywpFpP3m8CTW0',
        authCode: 'GJaImrLgzbgKQ0GaNX5kgCDtPrk7mcdF6Kq2zxe62pU=',
        token: 'rEXS5R5-xw2u-dc18ed47-508a-4f1b-b121-bbc7e167a8f8-m8OXg7'
    },
    'prod': {
        appId: 'hcbHiywpFpP3m8CTW0',
        authCode: 'GJaImrLgzbgKQ0GaNX5kgCDtPrk7mcdF6Kq2zxe62pU=',
        token: 'rEXS5R5-xw2u-dc18ed47-508a-4f1b-b121-bbc7e167a8f8-m8OXg7'
    }
};
exports.commonHeaderConfig = commonHeaders[env];
function requestGet(url, params, _showMessage) {
    return new Promise((resolve) => {
        taro_1.default.request({
            url: `${exports.origin}${url}`,
            data: params,
            method: 'GET',
            success: (res) => {
                resolve(res.data);
            }
        });
    });
}
exports.requestGet = requestGet;
function requestDelete(url, params, showMessage) {
    return new Promise((resolve, reject) => {
        axios_1.default.delete(`${exports.origin}${url}`, { params: params || {} }).then((res) => {
            if (res.data) {
                resolve(res.data);
                if (showMessage) {
                    alert(res.data.message.toString());
                }
            }
            else {
                if (showMessage) {
                    alert(res.toString());
                }
            }
        }).catch((e) => {
            alert(e.toString());
            reject(e);
        });
    });
}
exports.requestDelete = requestDelete;
function requestPost(url, params, showMessage) {
    return new Promise((resolve, reject) => {
        axios_1.default.post(`${exports.origin}${url}`, params).then((res) => {
            if (res.data) {
                resolve(res.data);
                if (showMessage) {
                    alert(res.data.message.toString());
                }
            }
            else {
                if (showMessage) {
                    alert(res.toString());
                }
            }
        }).catch((e) => {
            alert(e.toString());
            reject(e);
        });
    });
}
exports.requestPost = requestPost;
function requestPostUpload(file) {
    return axios_1.default.post(`${exports.origin}/api/file/v1/file/upload`, file, { headers: {
            'Content-Type': 'multipart/form-data'
        } });
}
exports.requestPostUpload = requestPostUpload;
const axiosInterceptorsReq = () => {
    axios_1.default.interceptors.request.use((config) => {
        // const token: any = window.localStorage.getItem('tokenString@playCommander') || '' // 获取Token
        // if (!token) { // 请求头中带token
        config.headers.common.token = exports.commonHeaderConfig.token;
        // config.headers.common.token = isBeta ? commonHeaderConfig.token : `${JSON.parse(token).token}`
        config.headers.common.appId = exports.commonHeaderConfig.appId;
        config.headers.common.authCode = exports.commonHeaderConfig.authCode;
        config.headers.common.language = 'zh_CN';
        // }
        return config;
    }, (error) => {
        return error;
    });
};
const axiosInterceptorsRes = () => {
    axios_1.default.interceptors.response.use((config) => {
        console.log(config);
        console.log('-----=======');
        return config;
    }, (error) => {
        return error;
    });
};
axiosInterceptorsRes();
axiosInterceptorsReq();
//# sourceMappingURL=request.js.map