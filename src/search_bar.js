import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	render() {
		return (
			<div className="container-fluid" style={{border: '1px solid darkgrey', padding: '10px'}} className="align-center col-md-12">
				<input
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)}
				placeholder="Find by name...">
				</input>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		console.log({term})
	}
}

export default SearchBar;