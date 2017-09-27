import React, { Component } from 'react';
import './App.css';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

export default DragDropContext(HTML5Backend)(App)
