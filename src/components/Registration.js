import React from 'react'
import Navigator from './Navigator'
class Registration extends React.Component{


    render(){
        return <div>
               <Navigator title="Invente" />
            <div className="register-area">
               <div className="register-instructions">
                   Instructions to be followed:
                   <ul className="register-points">
                   <li>All Students must bring their college ID Card</li>
                   <li>General Registration for events : Rs.100</li>
                   <li>Students can also register on the spot. Payment will have to be made with the same.</li>
                   <li>Participants who have registered can take part in events on both days 21th and 22nd Sept 2018.</li>
                   <li>Workshop Registration details are available on the workshop page</li>
                   <li>Online Registration closes on 19th September.</li>
                   <li>Workshop fee details are available in the workshop tab of the website. </li>
                       </ul>
               </div>
            <div  className="main-register" style={{margin:'5% 11%'}}>
            <iframe id="formdata" src="https://docs.google.com/forms/d/e/1FAIpQLSecQVbxa6NGzCmZrSp9-Gyqb1Tu1b435rVcRm73_6Aomn6yCg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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