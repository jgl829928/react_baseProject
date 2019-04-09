import React, { Component } from 'react'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // date: new Date()
        }
    }
    
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <div>
                    {this.state.date}
                </div>
            </div>
        )
    }
}
export default Login