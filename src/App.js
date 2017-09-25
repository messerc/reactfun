import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}

export default App;
