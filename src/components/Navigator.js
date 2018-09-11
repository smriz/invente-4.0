import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import FA from 'react-fontawesome';
class Navigator extends React.Component{
		constructor(props){
			super(props);
			this.routeMap = {
				main:{
				'Events' :'/events',
				'Workshops':'/workshops',
				'Register':'/register'
			},
			extra:{
				'Organizers':'/organizers',
				'About Us':'/about-us',
				'Hospitality':'/hospitality',
			}
			}
			this.state = {
				title:props.title,
				expand:false
			}
		}
		render(){
			return (
				<div className='holi'>
					<div className=' row navigator y-center  space-between m-col'>
						<div className='main row fluid x-center'>
							<Link to={'/'}><h3>Invente</h3></Link>
						</div>

						<div className='links row y-center x-center m-scroller'>
							{
								Object.keys(this.routeMap.main).map(key =>
	  								<NavLink className='8p-8p 8m-' to={this.routeMap.main[key]}>{key}</NavLink>
	  							)
							}
							<div className='relative y-center' style={{display:'inline-flex'}}>
							<div onClick={()=>{this.setState({expand:!this.state.expand})}}>
								<FA name='ellipsis-h' size={'2x'}/>
							</div>
								{this.state.expand && <div className='absolute col' style={{zIndex:'99',boxShadow:'4px 4px 4px #000',background:'white',top:'100%',right:'0px',width:'300px'}}>
								{
									Object.keys(this.routeMap.extra).map(key =>
											<NavLink className='8p-8p 8m-' to={this.routeMap.extra[key]}>{key}</NavLink>
										)
								}
								</div>}
							</div>
						</div>
					</div>
				</div>
			);
		}

}

export default Navigator;
