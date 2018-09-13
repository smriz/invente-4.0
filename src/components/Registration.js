import React from 'react'
import Navigator from './Navigator'
import {Helmet} from 'react-helmet'
class Registration extends React.Component{


    render(){
        return <div>
               <Navigator title="Invente" />
            <div className="register-area">
                 <Helmet>
                     <title>Registration | Invente 3.0</title>
                 </Helmet>
               <div className="register-instructions">
                   Instructions to be followed:
                   <ul className="register-points">
                     <li>All Students must bring their college ID Card</li>
                     <li>The entry fee for different events are as follows:
                     <ul>
                        <li>General registration – 120 / person</li>
                        <li> Deep learning and Computer Vision workshop – 300 / person </li>
                        <li> Artificial Intelligence and Machine learning – 350 / person </li>
                        <li> 3D printing – 300 / person </li>
                        <li> Civil Workshop – 250 / person </li>
                        <li> Virtual Reality – 600 / person or 800 / team of 2 or 1200 / team of 3 </li>
                        <li> Ex log – 200 / team of 3 </li>
                      </ul>
                      <li>Payment must be made on spot </li>
                      <li> Workshop participants must be at the venue 30 mins prior the scheduled time.</li>
                      <li> Students who have registered can take part in the events on both days, 21</li>
                      <li> September and 22nd September 2018 (Applicable only for General Registration)</li>
                      </li>
                       </ul>
               </div>
            <div>
            <iframe style={{height:'1000px',width:'100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSf0onykh03arSsorpFzBKQ_WW3kuEyOzbHRYzd1twm9Fqv_sQ/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            {/*<iframe id="formdata" src="https://docs.google.com/forms/d/e/1FAIpQLSecQVbxa6NGzCmZrSp9-Gyqb1Tu1b435rVcRm73_6Aomn6yCg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>*/}
            </div>
            </div>
            </div>
        {/*<div id="registration">
                 <div id="registration-content">
                         <div id="registration-area">
                         <h3 style={{textAlign:'center'}}>Registration</h3>
                                <form action="" >
                                <div id="subform">
                                <div className="element">
                                <label for="name">Name: </label>
                                    <input type="text" name="Pname" id="name"/></div>
                                <div className="element"><label for="rollno">Roll Number or Unique Number: </label>
                                     <input type="text" name="Prollno" id="rollno"/></div>
                                <div className="element"><label for="dept">Department: </label>
                                <input type="text" name="Pdept" id="dept"/></div>
                                <div className="element"><label for="year">Year: </label>
                                <input type="text" name="Pyear" id="year" /></div>
                                <div className="element"><label for="phone">Phone Number: </label>
                                <input type="number" name="Pphone" id="phone"/></div>
                                <div className="element"><label for="email">Email ID: </label>
                                <input type="email" name="Pemail" id="email"/>
                                </div>
                                <div id="clearfix"></div>
                                <div className="element">
                                <input type="submit" name="Psubmit" id="sub"/></div>
                                </div>
                                </form>
                             </div>
                 </div>
    </div>*/}
    }
}
export default Registration
