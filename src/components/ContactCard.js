import React from 'react';

class ContactCard extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {name,email,contact} = this.props.contact;
		return (
			<a className='contact-card pointer 8m-8m col x-center' style={{display:'inline-flex',width:'auto'}}>
					<img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={`http://pikmail.herokuapp.com/${email}?size=100`}/>
					<div className='col'>
						<div className='text-center'>{name}</div>
						<div className='text-center'>{contact}</div>
					</div>

			</a>
		);
	}
}

export default ContactCard;
