
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import './index.less'
import api from '../../axios/api.js'
import { createTree, setSession } from "../../utils/auth.js";

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (err) return;
            console.log(api.login)
            let res = await this.$http.post(api.login, this.$qs.stringify(values));
            // 存入token及userData;
            if (res && res.isSucceed) {
                this.dealUserData(res);
                this.getMenu();
            }
        });
    };

    dealUserData(res) {
        let dispatch = this.props.dispatch;
        // 存入token
        let token = res.newPrimaryKeys.token_type + " " + res.newPrimaryKeys.access_token;
        dispatch({ type: "SET_TOKEN", token });
        setSession("token", token)

        // 存入userInfo
        let userInfo = res.newPrimaryKeys;
        dispatch({ type: "SET_USER", userInfo });
        setSession("userInfo", userInfo)

    }

    async getMenu() {
        let data = {
            userId: this.props.userInfo.userId,
        };
        let res = await this.$http.get(api.getMenu, { params: data });
        if (res && res.isSucceed) {
            let treeData=createTree(res.rows);
            console.log(treeData)
            let dispatch = this.props.dispatch;
            dispatch({ type: "SET_MENU", menu: treeData });
            setSession("menu", treeData)
            this.props.history.push('/')
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: 'Please input your account!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="account"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" >Log in</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapSateToProps = (state, ownprops) => ({
    token: state.common.token,
    userInfo: state.common.userInfo
})

export default connect(mapSateToProps)(WrappedNormalLoginForm)