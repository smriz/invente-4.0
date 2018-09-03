import React from 'react';
import {department,eventdetail} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
import ContactCard from '../components/ContactCard'
import FA from 'react-fontawesome';
import Navigator from '../components/Navigator';
class EventDetail extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		let {dept,slug} = this.props.match.params;
		let event = eventdetail[dept][slug];
		// console.log(event);
		return <div className='col event-detail fluid'>
{
				// <div className='relative fluid'>
				// 	<Link to={`/events/${dept}`} className='absolute close-btn'>X</Link>
				// 	<img className='fluid' src={`https://source.unsplash.com/random/400x200?${slug}`}/>
				// 	<div className={'absolute col x-start'} style={{bottom:'0'}}>
				// 		<h1 className='8m-8m'>{event.eventname}</h1>
				// 		<h5  className='8m-8m'>{event.tagline}</h5>
				// 	</div>
				// </div>
}
			{
			// <div className='row space-between'>
			// 	<div className='row y-center'>
			// 		<img style={{height:'40px',width:'40px'}}className='fluid' src={`https://api.adorable.io/avatars/80/${event.slug}.png`}/>
			// 		<h1>{event.eventname}</h1>
			// 	</div>
			// 		<Link to={`/events/${dept}`} className='absolute close-btn'>X</Link>
				}
				<div className='8p-8p maxi960'>
				 		<h1>{event.eventname}</h1>
						<h5  className='8m-8m'>{event.tagline}</h5>

						<div className="fb-like" data-href={`https://www.ssninvente.com/fb/events/${dept}/${slug}`} data-layout="standard" data-width='300' data-action="like" data-size="small" data-colorscheme='dark' data-show-faces="true" data-share="true"></div>
						<p>{event.description}</p>

					{event.notes!="" && <div className='notes'>
					<strong><FA style={{marginRight:'8px'}} name='bullhorn'/>Note </strong>
						{event.notes}
					</div>}
					<div className={'row space-between'}>
						<ContactCard contact={event.eventHeads[0]}/>
						<ContactCard contact={event.eventHeads[1]}/>
					</div>
					<div>
<div class="fb-comments" data-href={`https://www.ssninvente.com/fb/events/${dept}/${slug}`} data-width="300" data-numposts="5"></div>
					</div>
				</div>

				</div>;
	};
}

/*
{
  "dept": "bme",
  "slug": "biogonize",
  "last_updated": "8/26/2018 13:06:45",
  "description": "Totally 3 rounds,based on general engineering stuffs.And a team of 2 should participate",
  "eventtype": "Technical",
  "tagline": "It's not just your brains that needs to play!",
  "eventname": "BIOGONIZE",
  "notes": "",
  "eventHeads": [
    {
      "name": "Sivaranjani.M",
      "email": "siva.rj98@gmail.com",
      "contact": "9940425108"
    },
    {
      "name": "Sowmiya.M",
      "email": "sowmi18997@gmail.com",
      "contact": "9629043022"
    }
  ],
  "attachments": [],
  "rules": [
    [],
    "Fast video will be played and u have to identify the things in that video.The one who find maximum things wins the game",
    "U will be given few points using that points u should buy waste material and to make model out of that waste",
    "Rapid fire round",
    []
  ]
}"


*/

export default EventDetail;
