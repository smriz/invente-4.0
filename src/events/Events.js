import React from 'react';
import {Route,Link} from 'react-router-dom';
import Navigator from '../components/Navigator';
import EventDetail from './EventDetail';
import EventList from './EventList';
import DepartmentList from './DepartmentList';

class Events extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className='holi'>
				<Route exact path= '/events'             component={DepartmentList}/>
				<Route exact path= '/events/:dept'       component={EventList}/>
				<Route exact path= '/events/:dept/:slug' component={EventDetail}/>
			</div>
		);
	}
}

export default Events;
