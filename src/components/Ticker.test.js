import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ticker from './Ticker.js';
import moment from 'moment'
import { shallow } from 'enzyme';

it('renders the symbol, price and timestamp details for the currency pair ticker', () => {

	const mock_state_data = {
        symbol: 'EURUSD',
        price: 1.17,
        timestamp: 1530900000
    };

    const wrapper = shallow(<Ticker data={mock_state_data} />);

    const symbol = wrapper.find("[data-test='symbol']").text();
 	const expected_symbol = '('+mock_state_data.symbol+')';
	expect(symbol).toEqual(expected_symbol);

	const price = wrapper.find("[data-test='price']").text();
    const expected_price = (+mock_state_data.price).toFixed(2) + ' ' + mock_state_data.symbol.substring(3:5);
    expect(price).toEqual(expected_price);

	const timestamp = wrapper.find("[data-test='timestamp']").text().trim();
	const expected_date = moment.unix(mock_state_data.timestamp).format("MM/DD/YYYY HH:mm:ss")
    expect(timestamp).toEqual(expected_date);

});
