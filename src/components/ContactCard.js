import React from 'react';

class ContactCard extends React.Component{
	constructor(props){
		super(props);
		this.name= props.name;
		this.no = props.phoneNo;

	}
	render(){
		return (
			<a className='contact-card pointer row y-center' style={{display:'inline-flex',width:'auto'}}>
				<div className='col'>
					<div className='8p-' style={{borderBottom:'1px solid #eee'}}>Akash Milton</div>
					<div className='8p-'>8220617233</div>
				</div>
				<div className='8p-8p'>
					Xs
				</div>
			</a>
		);
	}
}

export default ContactCard;