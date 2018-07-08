import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App.js';

//Function to create a ShallowWrapper for root App component
const setup = (props={}, state=null) => {
	return shallow(<App {...props} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='app-component']")
  expect(appComponent.length).toBe(1);
});

it('renders the container for the tickers', () => {
 	const wrapper = setup();
  	const tickersContainerComponent = wrapper.find("[data-test='tickers-container']")
  	expect(tickersContainerComponent.length).toBe(1);
});

it('renders the header', () => {
 	const wrapper = setup();
  	const header = wrapper.find("[data-test='header']")
  	expect(header.length).toBe(1);
});
