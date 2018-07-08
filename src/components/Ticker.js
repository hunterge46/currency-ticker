import React, { Component } from 'react';
import './Ticker.css'
import moment from 'moment'

// Ticker Component for displaying the details for each currency pairs
class Ticker extends Component {
    render () {
        let {
            symbol,
            price,
            timestamp
        } = this.props.data;

        return (
            <li className={"ticker " + symbol}>
                <p data-test="symbol" className="ticker-symbol">({symbol})</p>
                <h1 data-test="price" className="ticker-price">{ (+price).toFixed(2) } {symbol.substring(3:5)}</h1>
                <p data-test="timestamp" className="ticker-timestamp">{moment.unix(timestamp).format("MM/DD/YYYY HH:mm:ss")} </p>
            </li>
        );
    }
}

export default Ticker;