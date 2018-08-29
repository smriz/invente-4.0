import React from 'react';
import {eventlist as eventList,slug} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
import Navigator from '../components/Navigator';
class EventList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>
				<Navigator title={'Invente'}/>
				{Object.keys(eventList[slug(this.props.match.params.dept)]).map(x => 
					<Link to={`/events/${x}`} className='x-center 8m-8m 8p-8p'>
						<img className='rounded'  src={`https://source.unsplash.com/random/150x150?${x},event`}/>
							<div className='8p-16p text-center'>	
								{eventList[slug(this.props.match.params.dept)][x]}
							</div>
					</Link>
				)}	
			</div>
	};
}

export default EventList;