import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Board.css';

import KanbanNote from './KanbanNote';
import Column from './Column';


class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: this.props.notes
		}
	}

	render() {
		const { notes } = this.state;
		return (
			<div>
				<div className='col-12 m-2 p-3'>
					<div className='d-flex justify-content-start mt-3'>
						<h5 className='p-2 ml-2 text-muted'>{this.props.name}</h5>
					</div>
				</div>
				<div className='col-12 m-3 p-3 board'>
					<div className='d-flex flex-wrap justify-content-between mr-3'>
						<div className='col-sm mr-2 mt-3'>
							<Column title="To do" />
						</div>
						<div className='col-sm mr-2 mt-3'>
							<Column title="In progress" />
						</div>
						<div className='col-sm mr-2 mt-3'>
							<Column title="Completed" />
						</div>
					</div>
				</div>
				<hr />
			</div>
		)
	}
}

export default Board 