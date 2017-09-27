import React, { Component } from 'react';

import Board from './Board'
import Modal from './Modal'
import '../styles/Main.css'

const dummyData = [
        { name: 'My First Board', 
          notes: [{title: 'first note', status: 'To_do', type: 'task', description: 'this is the first of many tasks that I will be doing' }]
        },
        { name: 'My Second Board', 
          notes: [{title: 'second note', status: 'In_progress', type: 'bug', description: 'Fix this bug you god damn idiot, fuck.' }]
        }
      ];

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      boards: dummyData,
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }

  createBoard = (name) => {
    dummyData.push({
      name,
      notes: []
    })
  }

  handleKeyDown = event => {
    if (event.keyCode === 27 && !!this.state.isOpen) {
      event.preventDefault();
      this.toggleModal();
    }
  }
  
  componentDidMount = () => {
    console.log('sup I mounted')
  }

  render() {
    const renderBoards = this.state.boards.map((board, i) => {
      return <Board key={i} name={board.name} notes={board.notes} />
    })
    return (
    <div className="container-fluid" onKeyDown={this.handleKeyDown}>
      <div className='container main'>
        <div className="d-flex">
          <h1 className="mt-3">This is main</h1>
          <button className="btn btn-primary ml-3 mt-3" onClick={this.toggleModal}>Add a new board</button>
        </div>
        {renderBoards}
      </div>
         <Modal show={this.state.isOpen}
          createBoard={this.createBoard}
          tabIndex="0"
          onClose={this.toggleModal}>
          <p>This be some content niggaface</p>
        </Modal>
    </div>
    )
  }
}

