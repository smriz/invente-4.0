import React from 'react';
import department from '../data/dept.json';
import eventdetail from '../data/eventdetail.json';
import {Link} from 'react-router-dom';
import ContactCard from '../components/ContactCard'
import FA from 'react-fontawesome';
import Navigator from '../components/Navigator';
import {Helmet} from 'react-helmet';
import FacebookProvider, { Like,Comments } from 'react-facebook';

class EventDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open:0,
		}
	}
	render(){
		let {dept,slug} = this.props.match.params;
		let event = eventdetail[dept][slug];
		// console.log(event);
		return <div className='col event-detail fluid whatsapp'>
				<Helmet>
					<title>{event.eventname} | {dept}</title>
				</Helmet>
				<div className='8p-8p maxi960 transywhite'>
				 		<h1>{event.eventname}</h1>
						{event.tagline && <h5 style={{marginLeft:'0px',marginTop:'-16px',color:'#888'}} className='text-center 8m-8m'>{event.tagline}</h5>}
						<FacebookProvider appId="262244974616409">
					         <Like href={`https://www.ssninvente.com/fb/events/${dept}/${slug}`} colorScheme="dark" showFaces share />
						</FacebookProvider>
						<div>{event.description.split('\n').map(x=> <div>{x}</div> )}</div>
						{event.eventtype =='Workshop' && <a target="_blank" className='16m-' style={{margin:'16px auto',marginLeft:'auto',background:'purple',display:'inline-block',color:'white',padding:'8px 16px'}} className='workshop-register' href="https://docs.google.com/forms/d/e/1FAIpQLSecQVbxa6NGzCmZrSp9-Gyqb1Tu1b435rVcRm73_6Aomn6yCg/viewform?usp=sf_link">Register Here</a>}
						<div className='row m-col'>
							{event.registrationFee &&<Fielder icon='rupee-sign' content={"Registration Fee: " +event.registrationFee}/>}
							{event.intenship && <Fielder icon='building' content={event.intenship}/>}
						</div>

						<div className='row m-col'>
							{event.timing &&<Fielder icon='clock' content={event.timing}/>}
							{event.venue && <Fielder icon='map' content={event.venue}/>}
						</div>
						<p>{event.attachments[0] && <a className='8p-16p 8m-8m' style={{display:'inline-block',background:'violet',color:'white'}} target="_blank" href={"//"+event.attachments[0]}>Click to view the Attachment</a>}</p>
						<div>
							<div className={'row rules-tab-holder'}>
									{event.rules.map((x,i)=> <div className={`${this.state.open == i?'active':''} rules-tab`} onClick={()=>{this.setState({open:i})}}>Round {i+1}</div>)}
							</div>
							<div className='rules-pane'>{event.rules && event.rules[this.state.open] && event.rules[this.state.open].map(x=><div>{x}</div>)}
							</div>
							{
							// 	event.rules.map((round,i) =><div> Round {i+1}
							// 	<ul>{round.map(x => <li>{x}</li>)}</ul>
							// </div>)

						}
						</div>

						<div>
					{event.notes!="" && <div className='notes'>
					<strong><FA style={{marginRight:'8px'}} name='bullhorn'/>Note </strong>
						{event.notes}
					</div>}
					<div className={'row space-around'}>
						<ContactCard contact={event.eventHeads[0]}/>
						<ContactCard contact={event.eventHeads[1]}/>
					</div>
					<div style={{width:'100%'}}>
					<FacebookProvider appId="262244974616409">
								 <Comments href={`https://www.ssninvente.com/fb/events/${dept}/${slug}`} colorScheme="dark" showFaces share />
					</FacebookProvider>
					</div>
				</div>
				</div>
				</div>;
	};
}


const Fielder = ({icon,content,color})=>
	<div style={{borderColor:color,margin:'8px 8px'}} className='fielder row'>
		<div style={{backgroundColor:color,display:'inline-flex',width:'auto'}}className='row centerify'><FA className='icon' name={icon}/></div>
		<div>{content}</div>
	</div>

/*
"degree-in-a-day": {
	"last_updated": "8/29/2018 22:11:08",
	"isTechnical": true,
	"dept": "cse",
	"slug": "degree-in-a-day",
	"venue": "CSE DEPARTMENT",
	"timing": "10 am - 3 pm",
	"displayName": "Degree in a day",
	"description": "Degree in day is a fun filled event where you own a qualitative and not a quantitative degree!",
	"tagline": "Walk in broke ,walk out with a degree",
	"eventname": "Degree in a day",
	"notes": "",
	"prize": "6000",
	"intenship": "No",
	"eventHeads": [
		{
			"name": "Parimala Suresh Congovi",
			"email": "parimala.congovi.12.05@gmail.com",
			"contact": "9487541856"
		},
		{
			"name": "Sakthi Uma Maheswari",
			"email": "sakthiumamaheswari@gmail.com",
			"contact": "9445054935"
		}
	],
	"attachments": [],
	"rules": [
		[
			"The round is for about 30 mins.",
			"You 'll have aptitude MCQ questions.",
			"It'll be a walk in walk out round."
		],
		[
			"The questions will be about data structures,C/C++.",
			"Question types include MCQ, Debugging."
		],
		[
			"This round would contain questions about DBMS, Networks and Operating System."
		]
	]
},

*/

export default EventDetail;
