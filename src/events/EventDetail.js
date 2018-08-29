import React from 'react';
import {department} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
import ContactCard from '../components/ContactCard'
import Navigator from '../components/Navigator';
class EventDetail extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className='col event-detail fluid'>
				<Navigator title='Invnete'/>
				<div className='relative fluid'>
					<span className='absolute close-btn'>X</span>
					<img className='fluid' src='https://source.unsplash.com/random/400x200?coding'/>	
				</div>
					<h1 className='8m-8m'>Codolympics</h1>
					<h5 className='8m-8m'>some random irrelevant tagline</h5>
					<div>
						<ContactCard name='akash milton' phoneNo='8226123'/>
						<ContactCard name='akash milton' phoneNo='8226123'/>

					</div>
					<div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="standard" data-action="like" data-size="small" data-colorscheme='dark' data-show-faces="true" data-share="true"></div>
				</div>;
	};
}

export default EventDetail;