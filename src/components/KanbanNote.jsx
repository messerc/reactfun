import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/KanbanNote.css';

export const KanbanNote = (props) => {
  return (
    <div>
      <h5>{props.title}</h5>
      <h6>{props.description}</h6>
    </div>
  )
}

export default KanbanNote