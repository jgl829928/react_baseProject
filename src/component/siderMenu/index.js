import React from 'react'
import { Link } from 'react-router-dom';
import routes from '../../routes/config';
import './index.css'
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const SiderMenu = () => (
    <Menu mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}>
        {
            routes.menus.map((firstMenu, firstIdx) => (
            <SubMenu key={firstMenu.key} title={<span><Icon type={firstMenu.icon} />{firstMenu.title}</span>}>
                {
                    firstMenu.subs.map((secMenu, secIdx) => (
                        <Menu.Item key={secMenu.key}>
                            <Link to={secMenu.key}>
                                <span className="nav-text">{secMenu.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                    )
                }
            </SubMenu>)
            )
        }
    </Menu>
);

export default SiderMenu

