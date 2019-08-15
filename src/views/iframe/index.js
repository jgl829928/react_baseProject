import React, { Component } from 'react';
import { connect } from 'react-redux';

let Base64 = require('js-base64').Base64;
class iframe extends Component {
    getPath(path) {
        if (!path) return false;
        return Base64.decode(path);
    }
    send(name) {
        let state = this.props.state;
        let data = {
            token: state.token,
            userInfo: {
                id: state.userInfo.userId,
                name: state.userInfo.userName,
                communityId: state.userInfo.communityId
            }
        };
        
        let iframe = window.frames[name];
        if (!iframe) return;
        console.log(this.$http.defaults.baseURL+name,data)
        iframe.postMessage(data,this.$http.defaults.baseURL+name);
    }
    render() {
        return <div>
            iframes
            {/* <iframe 
            src="http://www.58ln.cn:81/pms/pms/role/page "
            // src={this.$http.defaults.baseURL+this.getPath(this.props.query.path)}
                name={this.getPath(this.props.query.path)}
                width="100%" onLoad={this.send(this.getPath(this.props.query.path))}></iframe> */}
        </div>
    }
}

const mapSateToProps = (state, ownprops) => ({
    state: state.common,
})

export default connect(mapSateToProps)(iframe)