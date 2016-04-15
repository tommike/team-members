import React from 'react';
import SearchBar from './search_bar';

const ItemDetail = ({team}) => {
	console.log(team);
	// var person = {
	// 	height: 50px;
	// 	border: 1px solid darkgrey;
	// }
	return (
		<div className="container-fluid list-group" style={{border: '1px solid darkgrey', padding: '10px'}}>
			<div style={{fontWeight: 'bold'}}>{team.name}<br /></div>
			<div style={{fontSize: 13, color: 'darkgrey'}}>{team.email}</div>
		</div>
	)


}

export default ItemDetail;