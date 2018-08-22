import React from 'react';
import {eventlist as eventList,slug} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';

class EventList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div className='col'>
				{Object.keys(eventList[slug(this.props.match.params.dept)]).map(x => 
					<Link to={`/asdf`}>
						<div className='8p-16p row'>	
							{eventList[slug(this.props.match.params.dept)][x]}
						</div>
					</Link>
				)}	
			</div>
	};
}

export default EventList;