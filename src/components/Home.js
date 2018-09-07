import React from 'react';
import Navigator from './Navigator'


class Home extends React.Component{
	render(){
		return <div>
			<Navigator title='Invente'/>
			<div id="main-landing">
			</div>
			<div id="about-invente">
			<div id="invente-content" style={{border:'2px solid #f75e5b'}}>
			    <div className="message-content" style={{padding:'30px 0px'}}>
				   <div className="head">
				       <h2 style={{textAlign:'center'}}>About Invente</h2>
				   </div>
				   <div className="main" style={{margin:'0 15%'}}>
				      <center>For the first time since its inception, SSN unveils Invente, a two-day techfest built around encouraging budding engineers to discover hidden interests and enticing technophiles to showcase their talents with unbridled enthusiasm. Creativity, originality, erudition, ideas and innovation - Invente hopes to integrate them all. This is a space for the tech-savvy, the fun-loving, and the puzzle-solvers to flaunt their abilities to the world.</center><br/>
						  <center> Here is a platform to put your ideas into action; to test your ability; and to reinvent yourself.SSN's national level technical symposiums of eight departments amalgamate to form this massive technical festival. So keep your planners clean on the 21st and 22nd of September and take a trip down to Kalavakkam. It's time for you to Invente.</center>
				   </div>
				</div>
			</div>
			</div>
		</div>;
	}
}
export default Home;