import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Somewhere in the world, <code>React</code> is being used.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
