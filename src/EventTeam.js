import React from 'react';
import EventTeamItem from './EventTeamItem';

const EventTeam = (props) => {

	const teams = props.data.map((team) => {
		return (
			<EventTeamItem 
			key={team.id}
			team={team}/>
		);
	})

	return (
			<ul className="container-fluid list-group">
				{teams}
			</ul>
		);
};



export default EventTeam;
