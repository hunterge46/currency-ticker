import React, { Component } from 'react';
import './App.css';

import TickersContainer from './components/TickersContainer.js';

// Root Component
class App extends Component {

  constructor (props) {
    super(props);
    // Initialize the state
  }

  render() {
    return (
      <div data-test='app-component' className="App">
        <div data-test='header' className="header">
          <h2>Currency Ticker</h2>
        </div>
        <TickersContainer data-test='tickers-container' />
      </div>
    );
  }
}

export default App;