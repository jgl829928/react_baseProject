import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/goods';
import { Button } from 'antd';

const GOODS = [{
    name: 'iPhone',
    price: '6,888',
    amount: 37
}, {
    name: 'iPad',
    price: '3,488',
    amount: 82
}, {
    name: 'MacBook Pro',
    price: '11,888',
    amount: 15
}];

class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
    }
    clickNum() {
        this.setState({
            num: this.state.num + 1
        })
    }
    componentDidMount() {
        let dispatch = this.props.dispatch
        dispatch(actions.getGoods(GOODS))
    }
    render() {
        return this.props.isFetching ? (<h1>Loading…</h1>) : (
            <ul className="goods">
                {
                    this.props.goods.map((ele, idx) => (
                        <li key={idx} style={{ marginBottom: 20, listStyle: 'none' }}>
                            <span>{ele.name}</span> |
                            <span>￥ {ele.price}</span> |
                            <span>剩余 {ele.amount} 件</span>
                            <span>{this.state.num}</span>
                            <div><Button type="primary" icon="search" onClick={this.clickNum.bind(this)}>click</Button></div>
                        </li>
                    ))
                }
            </ul>

        );
    }
}

const mapSateToProps = (state, ownprops) => ({
    isFetching: state.goods.isFetching,
    goods: state.goods.data
})

export default connect(mapSateToProps)(Goods);