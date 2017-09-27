import React, { Component } from 'react';

import "../styles/Navbar.css";

export const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="row">
        <div className="col-6">
          <div className="d-flex justify-content-start">
            <h5 className="navtext p-2 mt-1">KaBa</h5>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <button className="btn p-2 mt-1" onClick={props.onClick}>Add a board</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar