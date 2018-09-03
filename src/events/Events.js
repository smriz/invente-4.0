import React from 'react';
import {Route,Link} from 'react-router-dom';
import Navigator from '../components/Navigator';
import EventDetail from './EventDetail';
import EventList from './EventList';
import DepartmentList from './DepartmentList';
import FA from 'react-fontawesome';
class Events extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return(
			<div className='holi'>
					<Navigator title="Invente"/>
					<div className='breadcrumbs row centerify'>
				 { this.props.location.pathname.split('/').splice(1).map((x,i,arr)=>
						[<FA name="caret-right"/> ,<Link to={"/"+arr.join('/')}>{x}</Link>]
				 )}
				 </div>

				<Route exact path= '/events'             component={DepartmentList}/>
				<Route exact path= '/events/:dept'       component={EventList}/>
				<Route exact path= '/events/:dept/:slug' component={EventDetail}/>
			</div>
		);
	}
}

export default Events;
