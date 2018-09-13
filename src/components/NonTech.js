import React from 'react';
import Navigator from './Navigator';
import EventListBox from '../events/EventListBox';
import eventdetail from '../data/eventdetail.json';
class Workshop extends React.Component{
  constructor(){
    super();
    this.obj = [];

    Object.keys(eventdetail).forEach(dept =>{
      Object.keys(eventdetail[dept]).forEach(event => {
        if(eventdetail[dept][event].eventtype == "Non-Technical"){
          this.obj.push({dept,event});
        }
      });
    })
  }
  render(){
    return(
      <div className='holi'>
        <Navigator/>
        <div className='whatsapp row centerify'  style={{minHeight:'90vh'}}>

          <div className="maxi960">
          {this.obj.map(x=> <EventListBox x={x.event} dept={x.dept}/>)}

          </div>
        </div>
      </div>
    )
  }
}


export default Workshop;
