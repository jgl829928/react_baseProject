import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../routes/config';
import './index.css'
import { Menu, Icon, } from 'antd';

const { SubMenu } = Menu;
class SiderMenu extends Component {
    renderMunuNodes(data) {
        return data.map((item, index) => {
            {
                if (item.children && item.children.length > 0) {
                    return (<SubMenu key={item.id} title={<span>{item.resName}</span>}>
                        {
                            this.renderMunuNodes(item.children)
                        }
                    </SubMenu>)
                } else {
                    return (<Menu.Item key={item.id}>
                        <Link to={item.path}>
                            <span className="nav-text">{item.resName}</span>
                        </Link>
                    </Menu.Item>
                        )
                }
            }
        })
    }
    render() {
        return <Menu mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            {
                this.renderMunuNodes(this.props.menuList)
            }
        </Menu>
    }
}
const mapSateToProps = (state, ownprops) => ({
    menuList: state.common.menuList,
})

export default connect(mapSateToProps)(SiderMenu)

