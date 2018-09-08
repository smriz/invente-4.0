import React from 'react';
import {Route,Link} from 'react-router-dom';
import Navigator from '../components/Navigator';
import EventDetail from './EventDetail';
import EventList from './EventList';
import DepartmentList from './DepartmentList';
import FA from 'react-fontawesome';
import _ from 'lodash';
import {Helmet} from 'react-helmet';
class Events extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return(
			<div className='holi'>
					<Navigator title="Invente"/>
					<Helmet>
						<title> Events | Invente 3.0</title>
					</Helmet>
					<div className=' breadcrumbs row centerify'>
				 {
					 this.props.location.pathname.split('/').splice(1).map((x,i,arr) =>
						[<FA style={{margin:'auto 8px'}}name="angle-right"/>,<Link to={"/"+_.slice(arr,0,i+1).join('/')}>{x}</Link>]

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
