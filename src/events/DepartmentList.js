import React from 'react';
import {department} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
class DepartmentList extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div>
			<div className='col'>
						{Object.keys(department).map(x=><Link to={`/events/${x}`}>
							<div className='8p-16p row'>	
								{x}
							</div>
						</Link>)}
					</div>;
		</div>
	};
}

export default DepartmentList;