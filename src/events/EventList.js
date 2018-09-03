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
				<div className='row wrap centerify'>
				{Object.keys(eventdetail[dept]).map(x =>
					<Link to={`/events/${dept}/${x}`} className='x-center 8m-8m 8p-8p'>
						<img className='rounded' style={{width:'150px'}} src={`https://api.adorable.io/avatars/150/${x}.png`}/>
							<div className='8p-16p text-center'>
								{eventlist[dept][x]}
							</div>
					</Link>
				)}
				</div>
			</div>
	};
}

export default EventList;
