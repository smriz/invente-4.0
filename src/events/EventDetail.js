import React from 'react';
import {department} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';

class EventDetail extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className='col event-detail'>
				<div className='relative fluid'>
					<span className='absolute close-btn'>X</span>
					<img src='https://source.unsplash.com/random/400x200?coding'/>	
				</div>
					<h1 className='8m-8m'>Codolympics</h1>
					<h5 className='8m-8m'>some random irrelevant tagline</h5>
				</div>;
	};
}

export default EventDetail;