import React, { Component } from 'react';
import './TickersContainer.css';
import Ticker from './Ticker.js';
import Axios from 'axios';

const API_KEY = 'pMVkOiRXu4af2p6krR4rUjiYAWm732lG';

// Component containing the individual ticker components and update button
class TickersContainer extends Component {
    constructor (props) {
        super(props);

        // Initialize the state
        this.state = {
            required_pairs : ['EURUSD', 'USDCHF', 'USDJPY'],
            ticker_data: [
                {
                    symbol: 'EURUSD',
                    price: 0,
                    timestamp: 0
                },

                {
                    symbol: 'USDCHF',
                    price: 0,
                    timestamp: 0
                },

                {
                    symbol: 'USDJPY',
                    price: 0,
                    timestamp: 0
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

        var pairs_string = this.state.required_pairs.join();
        Axios.get('https://forex.1forge.com/1.0.3/quotes?pairs=${pairs_string}&api_key='+API_KEY)
        .then(res => {
            // Filter the API response to only the required currency pairs, and update the state
            let required_pairs = this.state.required_pairs;
            let result = res.data.filter(currency => required_pairs.includes(currency.symbol));
            this.setState({ ticker_data: result})
        })
        .catch(err => console.log(err));
    }

    render () {

        // Create JSX for each currency pair ticker
        let tickers = this.state.ticker_data.map((currency) => 
            <Ticker data-test='ticker-component' data={currency} key={currency.symbol} />
        );

        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <div data-test='update-btn' className="update-btn" onClick={this.fetchTickerData.bind(this)}>
                    <h4 className="update-btn-text">Update Price</h4>
                </div>
            </div>
        );
    }
}

export default TickersContainer;