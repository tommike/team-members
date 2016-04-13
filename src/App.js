import $ from 'jquery';
import React, { Component } from 'react';
import EventTeam from './EventTeam';
import SearchBar from './search_bar';

export class App extends Component {

	getData() {
		const url = 'http://jsonplaceholder.typicode.com/users';
		$.get(url, (data) => {
			this.setState({
				infoData: data
			})
		})
	}

	constructor(props) {
		super(props);

		this.state = {
			infoData: []
		};

		this.getData();
	}

	// <EventTeam data={this.state.infoData}/>
  render() {
    return (
    	<div>
    		<SearchBar />
    		<EventTeam data={this.state.infoData}/>
    	</div>
    );
  }
}


