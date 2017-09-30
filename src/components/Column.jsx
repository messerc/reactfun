import React, { Component } from "react";
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { DropTarget, connectDropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';

import KanbanNote from './KanbanNote';
import '../styles/Column.css';

const boxTarget = {
	drop(props) {
		return {
      props
		};
	}
};

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	}
}

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: 0,
          title: 'Test note',
          description: 'I am restructuring this application motherfucker'
        },
        {
          id: 1,
          title: 'Test note 2',
          description: 'Yes, its happening ya dum cunt'
        }
      ]
    }

  }

  moveCard = (dragIndex, hoverIndex) => {
    const { notes } = this.state;
    const dragCard = notes[dragIndex];
    let copy = notes.slice();
    copy.splice(dragIndex, 1);
    copy.splice(hoverIndex, 0, dragCard);
    console.log(copy);
    this.setState({
      notes: copy
    })
  }

  render() {
    const { connectDropTarget, isOver, title } = this.props;
    const { notes } = this.state;


    let backgroundColor = '#F3F1F1'

    if (isOver) {
      backgroundColor = 'red';
    }

    return connectDropTarget(
      <div>
        <h6>{title}</h6>
        <hr />
        <div className='col tasks p-0' style={{ backgroundColor }}>
          {notes.map((note, i) => <KanbanNote key={i} index={i} moveCard={this.moveCard} {...note} />)}
        </div>
      </div>
    )
  }
}

export default DropTarget(ItemTypes.NOTE, boxTarget, collect)(Column)