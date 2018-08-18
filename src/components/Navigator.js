import React from 'react';
import {Link} from 'react-router-dom';
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
				<div className='navigator'>
					<div className='main'>
						{this.state.title}
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