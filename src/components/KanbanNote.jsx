import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../styles/KanbanNote.css";

export const KanbanNote = (props) => {
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{props.title}</h4>
        <h6 className="card-subtitle text-muted">type: {props.type}</h6>
        <p className="card-text mt-3">{props.description}</p>
      </div>
    </div>
  )
}

export default KanbanNote