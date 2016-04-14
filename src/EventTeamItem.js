import React from 'react';

const ItemDetail = ({team}) => {
	console.log(team);
	// var person = {
	// 	height: 50px;
	// 	border: 1px solid darkgrey;
	// }
	return (
		<div className="container-fluid" style={{border: '1px solid darkgrey', padding: '10px'}} className="align-center col-md-12">
			<div >{team.name}<br /></div>
			<div style={{fontSize: 13, color: 'gray'}}>{team.email}</div>
		</div>
	)


}

export default ItemDetail;