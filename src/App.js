import $ from 'jquery';
import React, { Component } from 'react';
import EventTeam from './EventTeam';
import SearchBar from './search_bar';
import SearchInput, {createFilter} from 'react-search-input';

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
			infoData: [],
			searchTerm: ''
		};


		this.getData();


	}

	// updateTerm(newTerm) {
	// 	this.setState({searchTerm: newTerm});
	// 	console.log('new', this.state.searchTerm);
	// }

	// <EventTeam data={this.state.infoData}/>

  render() {



  	var containerStyle = {
  		marginLeft: '0',
  		marginRight: '0',
  		backgroundColor: 'blueviolet'
  	}

  	var h3Style = {
  		color: 'white',
  		height: '80',
  		fontSize: '25',
  		textAlign: 'left',
  		marginLeft: '10',
  		paddingTop: '25',
  		marginBottom: '0'
  	}

    return (
    	<div>
    		<div style={containerStyle}>
    			<h3 style={h3Style}>Team Members</h3>
    		</div>
    		<div className="container-fluid list-group" style={{paddingRight:'0'}}>
    			<SearchBar data={this.state.infoData} />
    		</div>
    		<EventTeam data={this.state.infoData}/>
    	</div>
    );
  }
}


