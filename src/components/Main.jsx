import React, { Component } from 'react';

import Board from './Board'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>This is main</h1>
        <Board />
      </div>
    )
  }
}