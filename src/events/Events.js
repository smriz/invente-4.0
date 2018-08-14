import React from 'react';
import {Route} from 'react-router-dom';
class Events extends React.Component{
	render(){
		return( 
			<div>
			Events Page
				<Route path='/events/:dept' render={(props)=> <div>{props.match.params.dept}</div>}/>
				<Route path='/events/:dept/:slug' render={(props)=> <div>{props.match.params.slug}</div>}/>
			</div>
		);
	}
}

export default Events;