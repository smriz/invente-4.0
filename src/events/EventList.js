import React from 'react';
import {eventlist,eventdetail} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
import Navigator from '../components/Navigator';
import slugify from 'slugify';
class EventList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){

		let {dept} = this.props.match.params;
		return <div>
				<Navigator title={'Invente'}/>
				{Object.keys(eventdetail[dept]).map(x =>
					<Link to={`/events/${dept}/${x}`} className='x-center 8m-8m 8p-8p'>
						<img className='rounded'  src={`https://source.unsplash.com/random/150x150?${x},event`}/>
							<div className='8p-16p text-center'>
								{eventlist[dept][x]}
							</div>
					</Link>
				)}
			</div>
	};
}

export default EventList;
