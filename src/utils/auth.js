let Base64 = require('js-base64').Base64;

export const createTree = function (data) {
    if (!data) return false;
    let treeData = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].parentid === 1) {
            data[i].title = data[i].resName;
            treeData.push(data[i]);
        }
    }
    return dealData(treeData, data)
}

function dealData(data, menuList) {
    for (let item of data) {
        if (item.resUrl && item.resUrl.endsWith("page")) {
            item.path = "/iframe?path=" + Base64.encode((item.resUrl)).replace(/\+/g, '%2B');
        } else {
            item.path = item.resUrl;
        }
        item.title = item.resName;
        item.children = [];
        for (let menuItem of menuList) {
            if (menuItem.parentid === item.id) {
                item.children.push(menuItem);
            }
        }
        dealData(item.children, menuList)
    }
    return data
}

//获取sessionStorage存储数据
export const getSession = name => {
    if (!name) return
    return window.sessionStorage.getItem(name)
}

//设置sessionStorage存储数据
export const setSession = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
}

//删除sessionStorage存储数据
export const delSession = (name) => {
    if (!name) return
    window.sessionStorage.removeItem(name)
}
































