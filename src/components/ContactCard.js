import React from 'react';

class ContactCard extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {name,email,contact} = this.props.contact;
		return (
			<a className='contact-card pointer row y-center' style={{display:'inline-flex',width:'auto'}}>
			<div className='8p-8p'>
				<img style={{width:'50',height:'50',borderRadius:'50%'}} src={`http://pikmail.herokuapp.com/${email}?size=50`}/>
			</div>
				<div className='col'>
					<div className='8p-' style={{borderBottom:'1px solid #eee'}}>{name}</div>
					<div className='8p-'>{contact}</div>
				</div>

			</a>
		);
	}
}

export default ContactCard;
