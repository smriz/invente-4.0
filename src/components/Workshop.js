import React from 'react'
import Navigator from './Navigator'
import {Helmet} from 'react-helmet';
class Workshop extends React.Component{

    constructor(props){
        super(props)
    this.workshop=[{
            "Title":"Workshop on Artificial Intelligence and Machine Learning",
            "Description":["Artificial Intelligence is a technology that is already impacting how users interact with, and are affected by the internet. In the near future, its impact is likely to only continue to grow. Machine Learning is a method of data analysis that automates analytical model building. It is branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.As of 2017, a quarter of organizations are spending 15% or more of their IT budget on machine learning capabilities, and the number of machine learning examples are expected to rise in the near future.","Altsense is an IOT, Robotics and automation company. They train and guide people towards advanced technology. Their main objective is to find solutions to everything related to robotics and automation. They are specialized in robotics, embedded systems, machine learning, arduino, Raspberry pi, python, 3D printing, IOT, artificial intelligence, automation, technology, deep learning."],
            "notes":["Session 1:Learning","Session 2:Hands-on"],
            "Registration-Fees":"Rs. 350",
            "Venue":"Main Auditorium",
            "Timings":"22, September 2018",
            "Event-Heads":[
                {
                    "name":"Abishek Sundaresan",
                     "phonenumber":"98745321"
                },{
                       "name":"Sathya Seelan",
                       "phonenumber":"987456321"
                }
            ]
    },{
        "Title":"Workshop on 3D Printing",
        "Description":["The world is witnessing the start of a 4th major industrial revolution; primarily focussed towards Smart Factories, which will be built of Cyber Physical Systems.There has been a huge gap in the Educational Curriculum vs the core Industrial Needs. A result of this is that the vast majority of the students today are not equipped for what the industry actually needs. One such is 3D Printing ,but unfortunately, 3D Printing is nowhere part of the major curriculum today. One attempt by 3D’ing has been to educate the modern generation of students with 3D Printing, a Technology that every industry requires, let it be Arts, Electronics, Manufacturing, Biotech, Construction, AeroSpace. As part of the same, 3D’ing in association with Invente 3.0 brings 3D printing workshop here in SSN College of Engineering on 21st September."," 3D’ing is the largest manufacturer of 3D Printers in India. Established in 2013, 3Ding manufactures & deals with a wide variety of 3D Printers ranging from Domestic to Industrial to large format 3D Printers. 3Ding also deals with 3D Scanners, Consumables, etc. 3Ding is also an Advisory Partner for Additive Manufacturing for quite a few Large Corporates, including one among the big 4."],
        "Registration-Fees":"Rs. 300",
        "Venue":"To be announced soon",
        "Timings":"21st September",
        "Event-Heads":[
            {
                "name":"JyodhirAdhitya",
                 "phonenumber":"9445388391"
            },{
                   "name":"",
                   "phonenumber":""
            }
        ]

    }]
    }

    render(){
        return <div> 
            <Navigator title=""/>
                    <div className="workshop">
                    <Helmet>
          <title>Workshop | Invente 3.0</title>
        </Helmet>
                <div className="workborder">
                    {
                        this.workshop.map((x,index)=><div className="workdata">
                                 <div><h3>{"Title"}</h3>
                                 <div>{x.Title}</div></div>
                                 <div>
                                     <h3>{"Description"}</h3>
                                     <div>{x["Description"].map((x,index)=><p>{x}</p>)}</div>
                                 </div>
                                 { x["notes"] && <div>
                                     <h3>Notes:</h3>
                                      {x["notes"].map((x,index)=><p>{x}</p>)}
                                 </div>}
                                 <div className="flex-row">
                                     <h3>{"Registration Fee: "}</h3><div>{x["Registration-Fees"]}</div>
                                 </div>
                                 <div className="flex-row">
                                     <h3>{"Venue:"}</h3><div>{x.Venue}</div>
                                     </div>
                                     <div className="flex-row">
                                          <h3>{"Date:"}</h3><div>{x.Timings}</div>
                                          </div>
                                        <div className="flex-col">
                                            <h3>{"Event Heads"}</h3>
                                            <div className="flex-col-item" >
                                                {x["Event-Heads"].map((xd,index)=> <div >{xd.name}{" "} <a href={"tel:+91"+xd.phonenumber} style={{textDecoration:'underline'}}>{xd.phonenumber}</a></div>)}
                                            </div>
                                            </div>
                                     </div>)
                    }
                    <div className="workdata">
                          Workshop on Deep Learning and Computer Vision to be published soon.Please do wait for the details.
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Workshop