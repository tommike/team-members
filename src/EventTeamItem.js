import React from 'react';

const ItemDetail = ({team}) => {
	console.log(team);

	return (
		<div>{team.name}<br />{team.email}	
	)


}

export default ItemDetail;