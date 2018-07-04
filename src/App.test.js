import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


it('should contain two table columns', () => {
  const row = TestUtils.renderIntoDocument(<App />)
  expect(columns).to.have.length.of(2);
});