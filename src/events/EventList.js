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
				<div style={{minHeight:'90vh'}} className='row wrap centerify'>
				{Object.keys(eventdetail[dept]).map(x =>
					<Link to={`/events/${dept}/${x}`} className='centerify 8m-8m 8p-8p' style={{display:'inline-flex'}}>
						<div className='col centerify'>
							<img className='rounded' style={{width:'150px'}} src={`https://robohash.org/${x}.png?bgset=bg2`}/>
							<div className='8p-16p text-center'>
								{eventlist[dept][x]}
							</div>
							</div>
					</Link>
				)}
				</div>
			</div>
	};
}

export default EventList;
