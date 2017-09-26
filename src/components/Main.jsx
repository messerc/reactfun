import React, { Component } from 'react';

import Board from './Board'
import '../styles/Main.css'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      boards: [
        { name: 'My First Board', 
          notes: [{title: 'first note', status: 'To_do', type: 'task', description: 'this is the first of many tasks that I will be doing' }]
        },
        { name: 'My First Board', 
          notes: [{title: 'first note', status: 'To_do', type: 'task', description: 'this is the first of many tasks that I will be doing' }]
        }
      ]
    }
  }

  render() {
    const renderBoards = this.state.boards.map((board, i) => {
      return <Board key={i} name={board.name} notes={board.notes} />
    })
    return (
      <div className='container-fluid main'>
        <h1>This is main</h1>
        <button className="btn btn-primary">Add a new board</button>
        {renderBoards}
      </div>
    )
  }
}