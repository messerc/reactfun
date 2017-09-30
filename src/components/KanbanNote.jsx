import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { ItemTypes } from './Constants';
import { DragSource, DropTarget } from 'react-dnd';

import '../styles/KanbanNote.css';

const noteSource = {
  beginDrag(props) {
    return { ...props };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    let alertMessage = '';
    if (dropResult) {
      alertMessage = `You dropped ${JSON.stringify(item)} into ${JSON.stringify(dropResult)}`
    }
    window.alert(alertMessage);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function drop(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // only perform the move when mouse has crossed half of the items height

    // if dragging down
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // if dragging up
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
}

class KanbanNote extends Component {

  render() {
    const color = 'red';
    const { connectDragSource, connectDropTarget, isDragging, title, description } = this.props;
    return connectDragSource(connectDropTarget(
      <div className='card' style={{ 
        borderLeft: `3px solid ${color}`,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move' 
      }}>
        <div className='card-block'>
          <p className='card-title mb-0 text-muted'>{title}</p>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    ));
  }

}

export default DropTarget(ItemTypes.NOTE, cardTarget, drop)(DragSource(ItemTypes.NOTE, noteSource, collect)(KanbanNote))