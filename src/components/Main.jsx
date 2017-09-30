import React, { Component } from 'react';

import Board from './Board';
import Modal from './Modal';
import Navbar from './Navbar';
import '../styles/Main.css';

const dummyData = [
        { name: 'My First Board', 
          notes: [
            {title: 'first note', id: 0, status: 'TO_DO', type: 'task', description: 'this is the first of many tasks that I will be doing' },
            {title: 'second note', id: 1, status: 'IN_PROGRESS', type: 'task', description: 'another task' },
            {title: 'take a poop', id: 2, status: 'IN_PROGRESS', type: 'task', description: 'pretty self-explanatory' },
            {title: 'groceries', id: 3, status: 'COMPLETED', type: 'task', description: 'gettin the goodz.' }
          ]
        },
        { name: 'My Second Board', 
          notes: [{title: 'second note', id: 0, status: 'IN_PROGRESS', type: 'bug', description: 'Fix this bug you god damn idiot, fuck.' }]
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
    dummyData.unshift({
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
  
  render() {
    const renderBoards = this.state.boards.map((board, i) => {
      return <Board key={i} name={board.name} notes={board.notes} />
    })
    return (
    <div>
      <Navbar onClick={this.toggleModal} />
      <div className="container-fluid main" onKeyDown={this.handleKeyDown}>
        <div>
          {renderBoards}
        </div>
          <Modal show={this.state.isOpen}
            createBoard={this.createBoard}
            tabIndex="0"
            onClose={this.toggleModal}>
            <p>This be some content niggaface</p>
          </Modal>
      </div>
    </div>
    )
  }
}

