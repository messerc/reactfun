import React, { Component } from "react";
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
  render() {
    const { connectDropTarget, isOver, notes, title } = this.props
    return connectDropTarget(
      <div>
        <h6>{title}</h6>
        <hr />
        <div className='col tasks p-0'>
          {notes.map((note, i) => <KanbanNote key={i} {...note} />)}
        </div>
      </div>
    )
  }
}

export default DropTarget(ItemTypes.NOTE, boxTarget, collect)(Column)