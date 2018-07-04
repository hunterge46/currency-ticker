import React, { Component } from 'react';
import './CurrencyPair.css'
import moment from 'moment'

// Ticker Component for each individual currency pair
class CurrencyPair extends Component {
    render () {
        let {
            symbol,
            price,
            timestamp
        } = this.props.data;

        return (
            <li className={"currency-pair " + symbol}>
                <p className=".currency-pair-name">({symbol})</p>
                <h1>{ (+price).toFixed(2) } {symbol.substring(3:5)}</h1>
                <p>{moment.unix(timestamp).format("MM/DD/YYYY HH:mm:ss")} </p>
            </li>
        );
    }
}

export default CurrencyPair;