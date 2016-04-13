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
			<ul className="col-md-4 list-group">
				{teams}
			</ul>
		);
};



export default EventTeam;
