import React, { Component } from 'react';

import KanbanNote from './KanbanNote';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>This is a board</h3>
        <KanbanNote />
      </div>
    )
  }
}