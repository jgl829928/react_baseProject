
import { handleActions } from 'redux-actions'
import { getSession } from "../utils/auth.js";

let state = {
    token:getSession('token') ,
    userInfo:getSession('userInfo') ? JSON.parse(getSession('userInfo')) :{},
    menuList:getSession('menu') ? JSON.parse(getSession('menu')) : [],
}

export const common = handleActions({
    SET_TOKEN: (state, action) => ({
        ...state,
        token:action.token
    }),
    SET_USER: (state, action) => ({
        ...state,
        userInfo:action.userInfo
    }),
    SET_MENU: (state, action) => ({
        ...state,
        menuList:action.menu
    }),
    LOGIN_OUT:(state, action)=>({
        ...state,
        token:"",
        userInfo:{},
        menuList:[],
    })
}, state);

























