import React from 'react';
import {Link} from 'react-router-dom';
class Navigator extends React.Component{
		constructor(props){
			super(props);
			this.routeMap = {
				'Events' :'/events',
				'Organizers':'/organizers',
				'About Us':'/about-us',
								'Aboudt Us':'/about-us',

				'Aboutd Us':'/about-us',
				'Adbout Us':'/about-us',

				'Hospitality':'/hospitality'
			}
			this.state = {
				title:props.title
			}
		}
		render(){
			return (
				<div className='navigator'>
					<div className='main'>
						<h3>{this.state.title}</h3>
					</div>
					<div className='links'>
						{
							Object.keys(this.routeMap).map(key => 
  								<Link to={this.routeMap[key]}>{key}</Link>
  							)
						}
					</div>		
				</div>
			);
		}

}

export default Navigator;