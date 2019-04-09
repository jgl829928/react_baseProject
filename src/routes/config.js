export default {
    menus: [ // 菜单相关路由
        // { key: '/app/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/welcome', title: 'welcome', icon: 'scan',
            subs: [
                { key: '/app/welcome/index', title: '按钮', component: 'welcomeIndex'},
                { key: '/app/welcome/sub', title: '图标', component: 'welcomeSub'},
            ],
        },
        {
            key: '/app/goods', title: 'goods', icon: 'rocket',
            subs: [
                { key: '/app/goods/table', title: '表格', component: 'goodsTable'},
                { key: '/app/goods/echart', title: '图表', component: 'goodsEchart'},
            ],
        },
    ],
    others: [] // 非菜单相关路由
}