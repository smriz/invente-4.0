import React from 'react';
import {NavLink} from 'react-router-dom';
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
							<h3>{this.state.title}</h3>
						</div>
						<div className='links row x-center m-scroller'>
							{
								Object.keys(this.routeMap).map(key =>
	  								<NavLink className='16p-8p' to={this.routeMap[key]}>{key}</NavLink>
	  							)
							}
						</div>
					</div>
				</div>
			);
		}

}

export default Navigator;
