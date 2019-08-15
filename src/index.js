import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';
import { Provider } from "react-redux";
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import './index.css';
import './style/reset.css';
import "./axios/http";
import qs from 'qs'
import { Component } from "react";

Component.prototype.$qs=qs

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Page></Page>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();









