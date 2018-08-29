import React from 'react';
import {department} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
import Navigator from '../components/Navigator'
class DepartmentList extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div>
					<Navigator title='Invnete'/>
					<div className='row wrap x-center'>
						{Object.keys(department).map(x=><Link to={`/events/${x}`} className='x-center 8m-8m 8p-8p'>
							<img className='rounded'  src={`https://source.unsplash.com/random/150x150?${x},event`}/>
							<div className='8p-16p text-center'>	
								{x}
								</div>
						</Link>)}
					</div>;
				</div>
	};
}

export default DepartmentList;