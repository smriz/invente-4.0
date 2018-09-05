import React from 'react';
import {NavLink,Link} from 'react-router-dom';
class Navigator extends React.Component{
		constructor(props){
			super(props);
			this.routeMap = {
				'Events' :'/events',
				'Organizers':'/organizers',
				'About Us':'/about-us',
				'Hospitality':'/hospitality'
			}
			this.state = {
				title:props.title
			}
		}
		render(){
			return (
				<div className='holi'>
					<div className='row navigator y-center  space-between m-col'>
						<div className='main row fluid x-center'>
							<Link to={'/'}><h3>Invente</h3></Link>
						</div>
						<div className='links row x-center m-scroller'>
							{
								Object.keys(this.routeMap).map(key =>
	  								<NavLink className='8p-8p 8m-' to={this.routeMap[key]}>{key}</NavLink>
	  							)
							}
						</div>
					</div>
				</div>
			);
		}

}

export default Navigator;
