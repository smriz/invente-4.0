import React from "react";
import Navigator from './Navigator'
import {Helmet} from 'react-helmet';
class Organizers extends React.Component{
    constructor(props){
        super(props);
        this.staff=[{
            name:"Sandana karuppan",
            img:"IT"
        },{
            name:"Sujaudeen",
            img:"CSE"
        },{
            name:"Nagarajan",
            img:"EEE"
        },{

            name:"Thiruvenkatesan",
            img:"ECE"
        },{
            name:"ShivaPriya",
            img:"Civil"
        },{
            name:"Dhanalakshmi",
            img:"BME"
        },{
             name:"Vimal Samsingh",
             img:"Mechanical"
        },{
            name:"Balaji",
            img:"Chemical"
        },{
            name:"Sampath Kumar",
            img:"Maths"
        }]
        this.student=[{
            name:"Rahul Sriram",
            img:"IT"
        },{
            name:"Sharan Sundar",
            img:"CSE"
        },{
            name:"Meyyappan",
            img:"EEE"
        },{
            name:"Kaushik",
            img:"ECE"
        },{
            name:"Dharmasekaran",
            img:"Civil"
        },{
            name:"Jerome Jayakar",
            img:"BME"
        },{
             name:"Yashaswin Harathi",
             img:"Mechanical"
        },{
            name:"Sudarsan",
            img:"Chemical"
        },{
            name:"Manickesh",
            img:"Maths"
        }]
        this.hod=[{
            name:"Dr. Nagarajan",
            img:"IT"
        },{
            name:"Dr. Chitra Babu",
            img:"CSE"
        },{
            name:"Dr. Kamaraj",
            img:"EEE"
        },{
            name:"Dr. Radha",
            img:"ECE"
        },{
            name:"Dr. Ramana Gopal",
            img:"Civil"
        },{
            name:"Dr. Kavitha",
            img:"BME"
        },{
             name:"Dr. Annamalai",
             img:"Mechanical"
        },{
            name:"Dr. Parthiban",
            img:"Chemical"
        },{
            name:"Dr. Narasimman",
            img:"Maths"
        }]
    }
    render(){
        return (
            <div>
            <Helmet>
                <title>Organizers | Invente 3.0 </title>
            </Helmet>
            <Navigator title={'Invente'}/>
            <div id="organizers-section" className=''>
                  <div id="hod">
                  <div style={{textAlign:'center',fontSize:'20px',fontWeight:'100px'}}><p>Head of Departments</p><hr style={{width:'40%'}}/></div>
                  <div className="card-set">
                  {
                      this.hod.map((x,index) => <div className="card-set-child" key={"hod-"+index}>
                          <img src={"https://images.ssninvente.com/organisers/hod-"+x.img+".jpg.webp"} alt={"staff-image-"+index }/>
                          <p className="staff-name">{x.name}<br/>
                          <h3 className="dept-name">{x.img}</h3></p>

                      </div>)
                  }
                  </div>
                  </div>

                  <div id="staff-coordinator">
                  <div style={{textAlign:'center',fontSize:'20px',fontWeight:'100px'}}><p>Faculty Co-ordinators</p><hr style={{width:'40%'}}/></div>
                  <div className="card-set">
                  {
                      this.staff.map((x,index) => <div className="card-set-child" key={"fac-"+index}>
                          <img src={"https://images.ssninvente.com/organisers/fac-"+x.img+".jpg.webp"} alt={"staff-image-"+index }/>
                          <p className="staff-name">{x.name}<br/>
                          <h3 className="dept-name">{x.img}</h3></p>

                      </div>)
                  }
                  </div>
                  </div>
                  <div style={{textAlign:'center',fontSize:'30px',fontWeight:'300px'}}><p>Advisor of Student Affairs</p><hr style={{width:'40%'}}/></div>
                  <div id="head-of-all">
                       <div className="card">
                          <img src={"https://images.ssninvente.com/organisers/asa.jpg"} alt="studentaffairs" />
                          <p>Sunita Nair</p>
                       </div>
                  </div>
                  <div id="student-coordinator">
                  <div style={{textAlign:'center',fontSize:'20px',fontWeight:'100px'}}><p>Association Presidents</p><hr style={{width:'40%'}}/></div>
                  <div className="card-set">
                  {
                      this.student.map((x,index) => <div className="card-set-child" key={"stu-"+index}>
                          <img src={"https://images.ssninvente.com/organisers/sc-"+x.img+".jpg.webp"} alt={"student-image-"+index} />
                          <p className="staff-name">{x.name}<br/>
                          <h3 className="dept-name">{x.img}</h3></p>
                      </div>)
                  }
                  </div>
                  </div>
                </div>
                </div>
        );
    }
}
export default Organizers
