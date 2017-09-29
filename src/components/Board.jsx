import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Board.css';

import KanbanNote from './KanbanNote';
import Column from './Column';


class Board extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<div className='col-12 m-2 p-3'>
					<div className='d-flex justify-content-start mt-3'>
						<h5 className='p-2 ml-2 text-muted'>{this.props.name}</h5>
						<button className='btn btn-primary ml-auto p-2'>Add a new note</button>
					</div>
				</div>
				<div className='col-12 m-3 p-3 board'>
					<div className='d-flex flex-wrap justify-content-between mr-3'>
						<div className='col-sm mr-2 mt-3'>
							<Column notes={this.props.notes.filter(listItem => listItem.status === 'TO_DO')} />
						</div>
						<div className='col-sm mr-2 mt-3'>
							<h6>In progress</h6>
							<hr />
								<div className='col tasks p-0'>
									{this.props.notes.filter(listItem => listItem.status === 'IN_PROGRESS').map((note, i) => {
									return (
										<KanbanNote key={i} {...note} />
									)
									})}
									</div>
						</div>
						<div className='col-sm mr-2 mt-3'>
							<h6>Complete</h6>
							<hr />
								<div className='col tasks p-0'>
									{this.props.notes.filter(listItem => listItem.status === 'COMPLETED').map((note, i) => {
									return (
										<KanbanNote key={i} {...note} />
									)
									})}
									</div>
						</div>
					</div>
				</div>
				<hr />
			</div>
		)
	}
}

export default Board 