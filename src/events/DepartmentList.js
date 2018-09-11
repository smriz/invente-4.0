import React from 'react';
import department from '../data/dept.json';
import {Link} from 'react-router-dom';
import Navigator from '../components/Navigator'
import ProgressiveImage from 'react-progressive-image-loading';
class DepartmentList extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className={'whatsapp'}>
					<div  style={{minHeight:'100vh',margin:'auto'}} className='row wrap centerify maxi960'>
						{Object.keys(department).map(x=><Link  to={`/events/${x}`} className='transywhite x-center 8m-8m 8p-8p department-link'>
						<ProgressiveImage
							preview={`https://images.ssninvente.com/small/${x}.png`}
							src={`https://images.ssninvente.com/designericons/department/${x}.png`}
							render={(src, style) => <img src={src} style={{width:'150px',height:'150px'}} />}
						/>
						{/*	<img  style={{width:'150px',height:'150px'}}   src={`https://images.ssninvente.com/designericons/department/${x}.png`}/>*/}
							<div className='8p-16p text-center'>
								{department[x].displayName}
								</div>
						</Link>)}
					</div>;
				</div>
	};
}

export default DepartmentList;
