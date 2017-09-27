import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../styles/KanbanNote.css";

export const KanbanNote = (props) => {
  const color = "red";
  return (
    <div className="card" style={{borderLeft: `3px solid ${color}`}}>
      <div className="card-block">
        <p className="card-title">{props.title}</p>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  )
}

export default KanbanNote