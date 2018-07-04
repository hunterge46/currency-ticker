import React, { Component } from 'react';
import './Tickers.css';
import CurrencyPair from './CurrencyPair.js';
import Axios from 'axios';

const API_KEY = 'pMVkOiRXu4af2p6krR4rUjiYAWm732lG';

// Component to display the ticker components
class Tickers extends Component {
    constructor (props) {
        super(props);
        // Initialize the state
        this.state = {
            data: [
                {
                    symbol: 'EURUSD',
                    price: 1
                },

                {
                    symbol: 'USDCHF',
                    price: 1
                },

                {
                    symbol: 'USDJPY',
                    price: 1
                },
            ]
        };
    }

    // When the component loads, fetch new ticker data
    componentDidMount () {
        this.fetchTickerData();
    }

    // Retrieve ticker data from forex.1forge API using Axios
    fetchTickerData () {
        Axios.get('https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,USDCHF,USDJPY&api_key='+API_KEY)
        .then(res => {
            // Filter the required currency pairs, andn update the state
            let required = ['EURUSD', 'USDCHF', 'USDJPY'];
            let result = res.data.filter(currency => required.includes(currency.symbol));
            this.setState({ data: result})
        })
        .catch(err => console.log(err));
    }

    render () {

        // Create JSX for the tickers using the state
        let tickers = this.state.data.map((currency) => 
            <CurrencyPair data={currency} key={currency.symbol} />
        );

        return (
            <div className="tickers-container">
            <h4>hello</h4>
                <ul className="tickers">{tickers}</ul>
                <div className="update-btn" onClick={this.fetchTickerData.bind(this)}>
                    <h2 className="update-btn-text">Update Price</h2>
                </div>
            </div>
        );
    }
}

export default Tickers;