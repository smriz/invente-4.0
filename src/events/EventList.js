import React from 'react';
import eventlist from '../data/eventlist.json';
import eventdetail from '../data/eventdetail.json';
import {Link} from 'react-router-dom';
import Navigator from '../components/Navigator';
import slugify from 'slugify';
import ProgressiveImage from 'react-progressive-image-loading';
import {Helmet} from 'react-helmet';
class EventList extends React.Component{
	constructor(props){
		super(props);
		this.sort = this.sort.bind(this);
	}

	sort(a,b){
		let {dept} = this.props.match.params;
		let ea  = eventdetail[dept][a];
		let eb  = eventdetail[dept][b];
		return (ea.isTechnical === eb.isTechnical)? 0 : ea.isTechnical? -1 : 1;
	}


	render(){

		let {dept} = this.props.match.params;
		return <div className='whatsapp'>
				<Helmet>
					<title>{dept} | Invente 3.0</title>
				</Helmet>
				<div style={{minHeight:'90vh'}} className='row wrap centerify maxi960'>
				{Object.keys(eventdetail[dept]).sort(this.sort).map(x =>
					<Link to={`/events/${dept}/${x}`} className={`transywhite centerify 8m-8m 8p-8p`} style={{display:'inline-flex'}}>
						<div className='col centerify'>
						<ProgressiveImage
    				preview={`https://robohash.org/${x}.png?bgset=bg2&&size=10x10`}
    				src={`https://images.ssninvente.com/designericons/${dept}/${x}.png?bgset=bg2&&size=150x150`}
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
