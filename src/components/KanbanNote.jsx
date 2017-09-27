import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

import '../styles/KanbanNote.css';

const noteSource = {
  beginDrag(props) {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class KanbanNote extends Component {

  render() {
    const color = 'red';
    const { connectDragSource, isDragging, title, description } = this.props;
    return connectDragSource(
      <div className='card' style={{ borderLeft: `3px solid ${color}` }}>
        <div className='card-block'>
          <p className='card-title mb-0 text-muted'>{title}</p>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    );
  }

}

export default DragSource(ItemTypes.NOTE, noteSource, collect)(KanbanNote);