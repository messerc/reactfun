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
          <div className="d-flex justify-content-start mt-3">
            <h5 className="p-2 ml-2 text-muted">{this.props.name}</h5>
            <button className="btn btn-primary ml-auto p-2">Add a new note</button>
          </div>
        </div>
        <div className="col-12 m-3 p-3 board">
          <div className="d-flex flex-wrap justify-content-between mr-3">
            <div className="col-sm">
              <h6>To do</h6>
              <div className="row">
                <div className="col p-0 tasks">
                  {this.props.notes.map((note, i) => {
                  return (
                    <KanbanNote key={i} title={note.title} status={note.status} type={note.type} description={note.description} />
                  )
                  })}
                </div>
              </div>
            </div>
            <div className="col-sm tasks">
              <h6>In progress</h6>
            </div>
            <div className="col-sm tasks">
              <h6>Complete</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}