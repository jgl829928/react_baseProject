


import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
// import { connect } from 'dva';
import { Tree } from 'antd';
// import { responseCode } from '../../../utils/config';


const { SubMenu } = Menu;
const { TreeNode } = Tree;

var rootSubmenuKeys = [];
// @connect(({ apiCategory }) => ({
//   apiCategory
// }))


export default class AppTree extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        openKeys: [],
      res: { "rspCode": "000000", "rspMsg": "操作成功", "data": [{ "title": null, "key": "8af2c8fb5f962a33045fe28721590022", "value": "修改测试分类一", "label": null, "children": [{ "title": null, "key": "ns", "value": "内审应用", "label": null, "children": [], "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin", "value": "基础平台", "label": null, "children": [{ "title": null, "key": "wikin-notice", "value": "通知中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-tenant", "value": "租户管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-auth", "value": "权限中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-datacenter", "value": "数据中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "$wikin-swagger", "value": "服务中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-log", "value": "业务日志", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-file", "value": "文件中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-zipkin", "value": "调用链路", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-monitor", "value": "服务监控", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-protal", "value": "首页", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-bpm", "value": "流程管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-dict", "value": "数据字典", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-demoy", "value": "人员测试", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-app", "value": "应用管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }], "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol", "value": "巡检应用", "label": null, "children": [{ "title": null, "key": "patrol-location", "value": "巡检位置数据（本地）", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "$patrol-3D", "value": "三维模型管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol-record", "value": "巡检数据管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol-basic", "value": "基础数据管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol-schedule", "value": "巡检计划管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }], "disableCheckbox": false, "selectable": false }], "disableCheckbox": false, "selectable": false }] },
      "children": [{ "title": null, "key": "ns", "value": "内审应用", "label": null, "children": [], "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin", "value": "基础平台", "label": null, "children": [{ "title": null, "key": "wikin-notice", "value": "通知中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-tenant", "value": "租户管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-auth", "value": "权限中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-datacenter", "value": "数据中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "$wikin-swagger", "value": "服务中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-log", "value": "业务日志", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-file", "value": "文件中心", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-zipkin", "value": "调用链路", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-monitor", "value": "服务监控", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-protal", "value": "首页", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-bpm", "value": "流程管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-dict", "value": "数据字典", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-demoy", "value": "人员测试", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "wikin-app", "value": "应用管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }], "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol", "value": "巡检应用", "label": null, "children": [{ "title": null, "key": "patrol-location", "value": "巡检位置数据（本地）", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "$patrol-3D", "value": "三维模型管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol-record", "value": "巡检数据管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol-basic", "value": "基础数据管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }, { "title": null, "key": "patrol-schedule", "value": "巡检计划管理", "label": null, "children": null, "disableCheckbox": false, "selectable": false }], "disableCheckbox": false, "selectable": false }]
    }
  }
  menuSelect(event){
      event.preventDefault();
  }
//   componentDidMount() {
//     const { apiCategory: { appCG } } = this.props;
//     const values = {
//       nodeType: "1",
//     };
//     this.props.dispatch({
//       type: 'apiCategory/findAppCategory',
//       payload: values,
//       callback: (response) => {
//         //获取应用下的所有服务
//         if (response.rspCode == responseCode.SUCCESS) {
//           response.data.map((item) => {
//             rootSubmenuKeys.push(item.key);
//           });
//           openArrayKeys.push(rootSubmenuKeys[0])
//           this.setState({
//             openKeys: openArrayKeys
//           })

//         }
//       }
//     });

//   }
  // // submenu keys of first level
  // // rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  onCheck = (checkedKeys, info) => {
    this.props.dispatch({
      type: 'apiCategory/fetch',
      props: checkedKeys
    });

  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = rootSubmenuKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(openKeys) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  renderMunuNodes = (treeData) => {
    return treeData.map((item) => {
      if (item.children) {
        return (
          <TreeNode selectable={true} type="1" key={item.key} title={item.value} >
            {this.renderMunuNodes(item.children)}
          </TreeNode>
        );
      } else {
        return (
          <TreeNode selectable={true} key={item.key} title={item.value}>{item.value} </TreeNode>
        );
      }
    });
  }
  render() {
    // const { apiCategory: { appCG } } = this.props;
    const loop = data => data.map((item, ei) => {
      return (<SubMenu onSelect={this.menuSelect} key={item.key} title={<span><Icon type="appstore" /><span>{item.value}</span></span>}>
        <Tree
          checkable
          defaultExpandedKeys={[]}
          defaultSelectedKeys={[]}
          defaultCheckedKeys={[]}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          {this.renderMunuNodes(item.children)}
        </Tree>
      </SubMenu>);
    });
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >

        {loop(this.state.res.data)}
      </Menu>
    );
  }
}

