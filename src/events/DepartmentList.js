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
							<img className='rounded' style={{width:'150px'}}  src={`http://images.ssninvente.com.s3.amazonaws.com/icons/${x}.svg`}/>
							<div className='8p-16p text-center'>
								{department[x].displayName}
								</div>
						</Link>)}
					</div>;
				</div>
	};
}

export default DepartmentList;
