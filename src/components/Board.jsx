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
      <div className='row board'>
        <div className='d-flex mt-3 ml-3'>
            <h3>{this.props.name}</h3>
            <button className="btn btn-primary ml-3 mb-3">Add a new note</button>
        </div>
        <div className='col-12'>
          <div className='row'>
            <div className='col-md-4 tasks mx-auto'>
              <h3>To do</h3>
              {this.props.notes.map((note, i) => {
              return (
                <KanbanNote key={i} title={note.title} status={note.status} type={note.type} description={note.description} />
              )
              })}
            </div>
            <div className='col-md-4 tasks'>
              <h3>In progress</h3>
            </div>
            <div className='col-md-4 tasks'>
              <h3>Complete</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}