import React from "react";

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
    }
    render(){
        return (
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
                  <div id="card-set">
                  {
                      this.staff.map(x => <div className="card-set-child" key={"fac-"+x}>
                          <img src={"https://images.ssninvente.com/organisers/fac-"+x.img+".jpg"} alt={"staff-image"+x }/>
                          <p id="staff-name">{x.name}<br/>
                          <h3 class="dept-name">{x.img}</h3></p>
                          
                      </div>)
                  }
                  </div>
                  </div>
                  <div id="student-coordinator">
                  <div style={{textAlign:'center',fontSize:'20px',fontWeight:'100px'}}><p>Student Co-ordinators</p></div>
                  <div id="card-set">
                  {
                      this.staff.map(x => <div className="card-set-child" key={"stu-"+x}>
                          <img src={"https://images.ssninvente.com/organisers/fac-"+x.img+".jpg"} alt={"student-image"+x} />
                          <p id="staff-name">{x.name}<br/>
                          <h3 class="dept-name">{x.img}</h3></p>
                      </div>)
                  }
                  </div>
                  </div>
                </div>
        );
    }
}
export default Organizers