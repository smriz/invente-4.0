import React from "react";
import Navigator from './Navigator'
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
        }]
        this.student=[{
            name:"Rahul Sriram",
            img:"IT"
        },{
            name:"Sharan Sundar",
            img:"CSE"
        },{
            name:"Meiyappan",
            img:"EEE"
        },{
            name:"Kaushik",
            img:"ECE"
        },{
            name:"Dharmasekaran",
            img:"Civil"
        },{
            name:"Jerome Jaykar",
            img:"BME"
        },{
             name:"Yashawin Harathi",
             img:"Mechanical"
        },{
            name:"Balaji",
            img:"Chemical"
        }]
    }
    render(){
        return (
            <div>
            <Navigator title={'Invente'}/>
            <div id="organizers-section">
            <div style={{textAlign:'center',fontSize:'30px',fontWeight:'300px'}}><p>Advisor of Student Affairs</p></div>
                  <div id="head-of-all">
                       <div className="card">
                          <img src={"https://images.ssninvente.com/organisers/asa.jpg"} alt="studentaffairs" />
                          <p>Sunita Nair</p>
                       </div>
                  </div>
                  <div id="staff-coordinator">
                  <div style={{textAlign:'center',fontSize:'20px',fontWeight:'100px'}}><p>Staff Co-ordinators</p></div>
                  <div className="card-set">
                  {
                      this.staff.map((x,index) => <div className="card-set-child" key={"fac-"+index}>
                          <img src={"https://images.ssninvente.com/organisers/fac-"+x.img+".jpg"} alt={"staff-image-"+index }/>
                          <p className="staff-name">{x.name}<br/>
                          <h3 className="dept-name">{x.img}</h3></p>

                      </div>)
                  }
                  </div>
                  </div>
                  <div id="student-coordinator">
                  <div style={{textAlign:'center',fontSize:'20px',fontWeight:'100px'}}><p>Student Co-ordinators</p></div>
                  <div className="card-set">
                  {
                      this.student.map((x,index) => <div className="card-set-child" key={"stu-"+index}>
                          <img src={"https://images.ssninvente.com/organisers/sc-"+x.img+".jpg"} alt={"student-image-"+index} />
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
