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
					<div  style={{minHeight:'100vh',margin:'auto'}} className='row wrap centerify maxi960'>
						{Object.keys(department).map(x=><Link  to={`/events/${x}`} className='x-center 8m-8m 8p-8p department-link'>
							<img className='rounded'   src={`http://images.ssninvente.com.s3.amazonaws.com/icons/${x}.svg`}/>
							<div className='8p-16p text-center'>
								{department[x].displayName}
								</div>
						</Link>)}
					</div>;
				</div>
	};
}

export default DepartmentList;
