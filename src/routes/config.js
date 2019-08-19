export default {
    menus: [ // 菜单相关路由
        // { key: '/app/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/peopleStatistics', title: 'welcome', icon: 'scan', component: 'welcomeIndex'
        },
        {
            key: '/app/goods', title: 'goods', icon: 'rocket',
            subs: [
                { key: '/app/goods/table', title: '表格', component: 'goodsTable'},
                { key: '/app/goods/echart', title: '图表', component: 'goodsEchart'},
            ],
        },
        {
            key: '/app/iframe', title: 'goods', icon: 'rocket',
            subs: [
                { key: '/app/iframe', title: '表格', component: 'iframes'},
            ],
        },
    ],
    others: [] // 非菜单相关路由
}