import React, { Component } from 'react';

import '../styles/Board.css';

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
        <h3>{this.props.name}</h3>
        <div className='row board'>
            <div className='col'>
              <h3>To do</h3>
              {this.props.notes.map((note, i) => {
              return (
                <KanbanNote key={i} title={note.title} status={note.status} type={note.type} description={note.description} />
              )
              })}
            </div>
            <div className='col'>
              <h3>In progress</h3>
            </div>
            <div className='col'>
              <h3>Complete</h3>
            </div>
        </div>
      </div>
    )
  }
}