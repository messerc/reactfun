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
      <div className="row">
        <div className="col-12">
          <div className="mt-3">
            <h5 className="float-left">{this.props.name}</h5>
            <button className="btn btn-primary ml-3 mb-3 float-right">Add a new note</button>
          </div>
        </div>
        <div className="col-12 m-3 p-3 board">
          <div className="row">
            <div className="col-md-4 tasks mx-auto">
              <h5>To do</h5>
              {this.props.notes.map((note, i) => {
              return (
                <KanbanNote key={i} title={note.title} status={note.status} type={note.type} description={note.description} />
              )
              })}
            </div>
            <div className="col-md-4 tasks">
              <h5>In progress</h5>
            </div>
            <div className="col-md-4 tasks">
              <h5>Complete</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}