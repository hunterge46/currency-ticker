import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TickersContainer from './TickersContainer.js';
import { shallow } from 'enzyme';

it('renders a ticker for each exhange pair', () => {
  	const wrapper = shallow(<TickersContainer />);
  	const tickerComponent = wrapper.find("[data-test='ticker-component']")
  	expect(tickerComponent.length).toBe(3);
});

it('currency pairs should be EURUSD, USDCHF and USDJPY', () => {
	const wrapper = shallow(<TickersContainer />);
	const requiredCurrencyPairs = wrapper.state('required_pairs');
	expect(requiredCurrencyPairs.length).toBeGreaterThanOrEqual(3);
	const expected = ['EURUSD', 'USDCHF', 'USDJPY'];
	expect(requiredCurrencyPairs).toEqual(expect.arrayContaining(expected));
});

it('renders the update price button', () => {
  	const wrapper = shallow(<TickersContainer />);
  	const updateBtnComponent = wrapper.find("[data-test='update-btn']")
  	expect(updateBtnComponent.length).toBe(1);
});

it('update button fetches new price data and updates state when it is clicked', () => {
  	const wrapper = shallow(<TickersContainer />);
  	const updateBtn = wrapper.find("[data-test='update-btn']");
  	const priceData = wrapper.state('ticker_data');
  	updateBtn.simulate('click');
  	wrapper.update();
});
