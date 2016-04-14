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
			<ul className="container-fluid list-group" style={{paddingRight:'0'}}>
				{teams}
			</ul>
		);
};



export default EventTeam;
