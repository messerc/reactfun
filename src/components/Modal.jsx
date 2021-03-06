import React, { Component } from "react";
import PropTypes from 'prop-types';

class Modal extends Component {
  
  state = {
    form: {
      name: '',
      desc: ''
    }
  }

  handleChange = (event, field) => {
    this.setState({
      form: {
        [field]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createBoard(this.state.form.name)
    this.setState({
      form: {
        name: '',
      }
    })
    this.props.onClose();
  } 

  renderBoardForm = () => {

    // gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0, 0, 0, .3)",
      padding: 50
    }

    // The modal window
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: "0 auto",
      padding: 30
    }

    const { form } = this.state;
      return (
        <div className="backdrop"  onClick={this.props.onClose} style={backdropStyle}>
        <div onClick={(e) => e.stopPropagation()} style={modalStyle}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Board name:
              <input className="ml-3" type="text" value={form.name} onChange={(e) => this.handleChange(e, "name")} />
            </label>
          </form>
          <div className="footer">
            <button onClick={this.props.onClose}>
              x
            </button>
          </div>
        </div>
      </div>
      )
    }
  

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
       {this.renderBoardForm()}
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;