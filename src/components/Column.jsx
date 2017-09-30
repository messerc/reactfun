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
      notes: this.props.notes
    }

  }

  moveCard = (dragIndex, hoverIndex) => {
    const { notes } = this.state;
    const dragCard = notes[dragIndex];

    this.setState(update(this.state, {
      notes: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
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