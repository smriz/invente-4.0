import React from 'react';
import '../res/about.css';
import Navigator from './Navigator'
import {Helmet} from 'react-helmet';
class Aboutus extends React.Component{

    render(){
        return(
            <div>
            <Helmet>
              <title>About Us | Invente 3.0</title>
            </Helmet>
            <Navigator title="Invente" />
            <h1>About Us</h1>
        <div className="aboutus"><div className = "container">
        <div className = "caption">
          <picture>
              <source srcset="http://images.ssninvente.com/about-us/shiv-nadar-hd.jpg.webp" alt="Dr. Shiv Nadar" className = "image" width={'250px'} height={'250px'}/>
              <source srcset="http://images.ssninvente.com/about-us/shiv-nadar-hd.jpg" alt="Dr. Shiv Nadar" className = "image" width={'250px'} height={'250px'}/>
              <img src="http://images.ssninvente.com/about-us/shiv-nadar-hd.jpg" alt="Ms. Kala Vijayakumar" className = "image" width={'250px'} height={'250px'}/>
          </picture>
            <div className = "name">Dr. Shiv Nadar</div>
            <div className = "pos">The Founder</div>
        </div>
        <p className = "text">The SSN Institutions are the outcome of the vision and initiative of Dr. Shiv Nadar, a pioneer in the field of information Technology. As the chairman of HCL Technologies Ltd., Dr. Shiv Nadar has played a pivotal role in the rise of India as a formidable power in Information Technology. His commitment to professional excellence and global vision is today a benchmark in the corporate world. Dr. Shiv Nadar has been conferred the prestigious Padma Bhushan award in 2008 by the Government of India. Recently, he has been recognized as one of the 48 Heroes of Philanthropy by Forbes for his long standing association with many NGOs.</p>
    </div>
    <div className = "container">
        <div className = "caption">
        <picture>
            <source srcset="http://images.ssninvente.com/about-us/kala-hd.jpg.webp" alt="Dr. Shiv Nadar" className = "image" width={'250px'} height={'250px'}/>
            <source srcset="http://images.ssninvente.com/about-us/kala-hd.jpg" alt="Dr. Shiv Nadar" className = "image" width={'250px'} height={'250px'}/>
            <img src="http://images.ssninvente.com/about-us/kala-hd.jpg" alt="Ms. Kala Vijayakumar" className = "image" width={'250px'} height={'250px'}/>
        </picture>
            <div className = "name">Ms. Kala Vijayakumar</div><div className = "pos">The President</div>
        </div>
        <p className = "text"><br/>Ms. Kala Vijayakumar, the president of SSN INSTITUTIONS, has a mix of Entrepreneur, IT profession and Academic Management experience. She worked in the software development projects in HCL technologies, playing roles like programmer and team leader. Ms. Kala Vijayakumar has been associated with SSN Institutions from the inception. The objectives of the institutions are to provide world className education, create the right type of learning ambience and make the education affordable to the meritorious students through large number of scholarshipS. She implements the vision of the founder, Dr. Shiv Nadar by providing day-to-day management and guidance in running the institutions.</p>
    </div>
    <div className = "container">
        <div className = "caption">
        <picture>
            <source srcset="http://images.ssninvente.com/about-us/Salivahanan.jpg.webp" alt="Dr. Shiv Nadar" className = "image" width={'250px'} height={'250px'}/>
            <source srcset="http://images.ssninvente.com/about-us/Salivahanan.jpg" alt="Dr. Shiv Nadar" className = "image" width={'250px'} height={'250px'}/>
            <img src="http://images.ssninvente.com/about-us/Salivahanan.jpg" alt="Ms. Kala Vijayakumar" className = "image" width={'250px'} height={'250px'}/>
        </picture>
            <div className = "name">Dr. S. Salivahanan</div><div className = "pos">The Principal</div>
        </div>
        <p className = "text"><br/>With 28 years of experience in teaching, research and industrial experience, Dr. Salivahanan brings an ideal mix of capabilities to the post of principal. Dr. Salivahanan has taught at NIT - Trichy, RVCE - Bangalore and ACCET - Karaikudi, among other places. During his distinguished career, Dr. Salivahanan has also been a scientist at ISRO, authored numerous books and papers, guided many students for their Ph.D.’s and received many honours and awards.</p>
    </div>
    <br/><br/><br/>
    </div>
    </div>);
    }
}
export default Aboutus
