import $ from 'jquery';
import React, { Component } from 'react';
import EventTeam from './EventTeam';

export class App extends Component {

	getData() {
		const url = 'http://jsonplaceholder.typicode.com/users';
		$.get(url, (data) => {console.log(data)})
	}

	constructor(props) {
		super(props);

		this.state = {};

		this.getData();
	}




  render() {
    return (
      <EventTeam />
    );
  }
}
