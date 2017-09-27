import React, { Component } from "react";

import "../styles/Board.css";

import KanbanNote from "./KanbanNote";

export default class Board extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="row board">
        <div className="col-12">
          <div className="mt-3">
            <h3 className="float-left">{this.props.name}</h3>
            <button className="btn btn-primary ml-3 mb-3 float-right">Add a new note</button>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="row">
            <div className="col-md-4 tasks mx-auto border-right">
              <h3>To do</h3>
              {this.props.notes.map((note, i) => {
              return (
                <KanbanNote key={i} title={note.title} status={note.status} type={note.type} description={note.description} />
              )
              })}
            </div>
            <div className="col-md-4 tasks border-right">
              <h3>In progress</h3>
            </div>
            <div className="col-md-4 tasks">
              <h3>Complete</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}