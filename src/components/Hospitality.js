import React from 'react'
import '../res/hosp.css'
import Navigator from './Navigator'
import Footer from './Footer'
import {Helmet} from 'react-helmet';
class Hospitality extends React.Component{

    render(){
        return <div><Navigator title=""/><div className="hosp">
        <Helmet>
          <title>Hospitality | Invente 3.0</title>
        </Helmet>
        <div className ="content">
            <h2>HOW TO REACH SSN?</h2>
            <hr/>
            <h4>Route 1: Tamabaram to SSN</h4>
            <table align="center">
            <thead>
                    <tr>
                        <th>Route No.</th>
                        <th>Last Stop</th>
                        <th>Travel Duration</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>515</td>
                        <td>Mamallapuram</td>
                        <td>2hr</td>
                    </tr>
                    <tr>
                        <td>555,566</td>
                        <td>Thiruporur</td>
                        <td>1hr 45min</td>
                    </tr>
            </tbody>
            </table>
            <div className = "caption">
                <img src="https://images.ssninvente.com/temp/route2.png" alt="Tamabaram map" /><br/>
                <a href="https://www.google.co.in/maps/dir/Tambaram+Bus+Stop,+Chennai+-+Theni+Hwy,+East+Tambaram,+Tambaram,+Chennai,+Tamil+Nadu+600045/SSN+College+of+Engineering,+Kalavakkam,+Tamil+Nadu/@12.8372581,80.0809294,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3a525f6c4b566143:0x1d18ef6dce68a5d4!2m2!1d80.1166767!2d12.9254344!1m5!1m1!1s0x3a52512f04729e11:0xbc4ea0ae50ca1aaa!2m2!1d80.1972702!2d12.7508651" target="_blank">View Map</a>
            </div>
            <br/>
            <h4>Route 2: Koyambedu to SSN</h4>
            <table align="center">
            <thead>
                    <tr>
                        <th>Route No.</th>
                        <th>Last Stop</th>
                        <th>Travel Duration</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>570</td>
                        <td>Kelambakkam</td>
                        <td>2hr 45min</td>
                    </tr>
                    <tr>
                        <td>570X</td>
                        <td>Thiruporur</td>
                        <td>2hr 30min</td>
                    </tr>
                    </tbody>
            </table>
            <div className = "caption">
                <img src="https://images.ssninvente.com/temp/route1.png" alt="Koyambedu map" /><br/>
                <a href="https://www.google.co.in/maps/dir/Koyambedu+bus+terminus,+koyambedu+bus+terminus,+Koyambedu,+Chennai,+Tamil+Nadu/SSN+College+of+Engineering,+Kalavakkam,+Tamil+Nadu/@12.9116421,80.0216208,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3a5267b88ede8dbd:0x6d785091264444de!2m2!1d80.2054082!2d13.0662695!1m5!1m1!1s0x3a52512f04729e11:0xbc4ea0ae50ca1aaa!2m2!1d80.1972702!2d12.7508651" target="_blank">View Map</a>
            </div>
            <br/>
            <h4>Route 3: Central to SSN</h4>
            <table align="center">
            <thead>
                    <tr>
                        <th>Route No.</th>
                        <th>Last Stop</th>
                        <th>Travel Duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>102</td>
                        <td>Kelambakkam</td>
                        <td>2hr 45min</td>
                    </tr>
                    <tr>
                        <td>102X</td>
                        <td>Thiruporur</td>
                        <td>2hr 30min</td>
                    </tr>
                    <tr>
                        <td>521H</td>
                        <td>Thiruporur</td>
                        <td>2hr 35min</td>
                    </tr>
                    </tbody>
            </table>
            <div className = "caption">
                <img src="https://images.ssninvente.com/temp/route3.png" alt="Central map" /><br/>
                <a href="https://www.google.co.in/maps/dir/Chennai+Central,+Kannappar+Thidal,+Periyamet,+Chennai,+Tamil+Nadu+600003/SSN+College+of+Engineering,+Kalavakkam,+Tamil+Nadu/@12.9149532,80.1015567,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3a5266000af86837:0xb82ae0604cf7ec4d!2m2!1d80.2755083!2d13.0821888!1m5!1m1!1s0x3a52512f04729e11:0xbc4ea0ae50ca1aaa!2m2!1d80.1972702!2d12.7508651" target="_blank">View Map</a>
            </div>
            <br/>
            <p className = "note">Note: From Kelambakkam to SSN board any share auto or bus going to Thiruporur</p>
            <h2>ACCOMODATION</h2>
            <hr/>
            <p>Participants looking for accomodation please make note of the following:</p>
            <ul style={{margin:'0px 26%'}}>
                <li>Individual registration for accomodation</li>
                <li>Fee of Rs.150/- per day per person</li>
                <li>Caution Deposit of Rs.100/-</li>
                <li>Rooms will be allocated on shared basis</li>
            </ul>
            <p className = "note">Contacts for accomodation</p>
            <table align="center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ph.No.</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>
    </div>
    }
}
export default Hospitality
