import React, { Component } from 'react';
import Routes from './routes';
import SiderMenu from './component/siderMenu';
import { connect } from 'react-redux';
import './App.less';
import { Layout, Icon, Dropdown, Menu } from 'antd';

const { Header, Content, Sider } = Layout;




class App extends Component {
  componentDidMount(){
    console.log(this.props.userInfo)
  }
  onClick = ({ key }) => {
    if (key === '2') {
      sessionStorage.clear();
      this.props.history.push('/login');
      let dispatch = this.props.dispatch;
      dispatch({ type: "LOGIN_OUT"});
    }
  };
  menu = (
    <Menu onClick={this.onClick}>
      <Menu.Item key="1">
        修改密码
      </Menu.Item>
      <Menu.Item key="2">
        退出登录
      </Menu.Item>
    </Menu>
  );
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">react-admin</div>
          <div className="user-name">{this.props.userInfo.userName}</div>
          <div className="setting-icon">
            <Dropdown overlay={this.menu} trigger={['click']}>
              <Icon type="setting" className="ant-dropdown-link" />
            </Dropdown></div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <SiderMenu />
          </Sider>
          <Layout style={{ padding: '20px 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }}>
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapSateToProps = (state, ownprops) => ({
  userInfo: state.common.userInfo
})

export default  connect(mapSateToProps)(App);
