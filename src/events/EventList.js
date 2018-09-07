import React from 'react';
import {eventlist,eventdetail} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
import Navigator from '../components/Navigator';
import slugify from 'slugify';
import ProgressiveImage from 'react-progressive-image-loading';
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
						<ProgressiveImage
    				preview={`https://robohash.org/${x}.png?bgset=bg2&&size=10x10`}
    				src={`https://robohash.org/${x}.png?bgset=bg2&&size=150x150`}
    render={(src, style) => <img src={src} style={{width:'150px',height:'150px'}} />}
/>
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
