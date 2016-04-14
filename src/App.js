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

  	var containerStyle = {
  		padding: 20,
  		backgroundColor: 'blueviolet',
  	}

  	var h3Color = {
  		color: 'white'
  	}

    return (
    	<div className="container-fluid">
    		<div style={containerStyle}>
    			<h3 style={h3Color}>Team Members</h3>
    		</div>
    		<div>
    			<i className="fa fa-search" aria-hidden="true"></i>
    			<SearchBar></SearchBar>
    		</div>
    		<EventTeam data={this.state.infoData}/>
    	</div>
    );
  }
}


