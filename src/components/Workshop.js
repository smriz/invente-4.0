import React from 'react';
import Navigator from './Navigator';
import EventListBox from '../events/EventListBox'
class Workshop extends React.Component{
  render(){
    return(
      <div className='holi'>
        <Navigator/>
        <div className='whatsapp row centerify'  style={{minHeight:'90vh'}}>
          <div className="maxi960">
          <EventListBox x={'artificial-intelligence-and-machine-learning'} dept={'it'}/>
          </div>
        </div>
      </div>
    )
  }
}


export default Workshop;
