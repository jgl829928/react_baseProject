import axios from 'axios'
import { Component } from "react";
import { URL } from './api.js'
import { message } from 'antd';
import { store } from '../store';
import { createBrowserHistory as createHistory } from "history"

export const http = axios.create({
    baseURL: URL,
    timeout: 1000 * 10,
});

// 请求拦截器,在请求发出之前进行一些操作
http.interceptors.request.use(function (config) {
    let token =store.getState().common.token;
    if (!config.url.includes('/login')) {
        config.headers['Authorization'] = token;
        if (config.headers['Authorization'] == null) {
            // 到登录页重新获取token
            createHistory.push('/login')
        }
    }
    return config
}, function (error) {
    message.error('请求失败,请重试')
    return Promise.reject(error)
});


//响应拦截器异常处理
http.interceptors.response.use(response => {
    if (response && !response.data.isSucceed) {
        message.error(`${response.data.message}`)
    } else if (!response) {
        message.error(`连接错误`)
    }
    return response.data;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                message.error('错误请求');
                break;
            case 404:
                message.error('当前资源不存在');
                break;
            case 500:
                message.error('服务器忙，请重试');
                break;
            case 401:
                message.error('未授权，请重新登录');
                break;
            case 403:
                message.error('拒绝访问');
                break;
            case 408:
                message.error('请求超时');
                break;
            case 502:
                message.error('网络错误');
                break;
            case 503:
                message.error('服务不可用');
                break;
            default:
                message.error(`连接错误`);
        }
    } else {
        message.error(`当前网络不可用 请稍后重试`)
    }
    return false
});

http.all = axios.all;


Component.prototype.$http = http;