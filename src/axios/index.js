/**
 * Created by hao.cheng on 2017/4/16.
 */
import axios from 'axios';
import { get, post } from './tools';
import config from './config';

// 登录
export const login = (usr,pwd) => get({ url: `${config.login}?usr=${usr}&${pwd}` });
