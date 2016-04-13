import React from 'react';

const ItemDetail = ({team}) => {
	console.log(team);

	return (
		<div classTeam="container">
			<div>{team.name}<br />{team.email}</div>
		</div>
	)


}

export default ItemDetail;