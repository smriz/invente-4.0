import React from 'react';
import Navigator from './Navigator'


class Home extends React.Component{
	render(){
		return <div>
			<Navigator title='Invente'/>
			<div id="main-landing">
			</div>
			<div id="about-invente">
			<div id="head-section">
					    <h3>About</h3>
					  </div>
			  <div id="main-invente-section">
			      <div id="para-section">
			     <p>For the first time since its inception, SSN unveils Invente, a two-day techfest built around encouraging budding engineers to discover hidden interests and enticing technophiles to showcase their talents with unbridled enthusiasm. Creativity, originality, erudition, ideas and innovation - Invente hopes to integrate them all. This is a space for the tech-savvy, the fun-loving, and the puzzle-solvers to flaunt their abilities to the world. Here is a platform to put your ideas into action; to test your ability; and to reinvent yourself.SSN's national level technical symposiums of eight departments amalgamate to form this massive technical festival. So keep your planners clean on the 9th and 10th of September and take a trip down to Kalavakkam. It's time for you to Invente.</p></div>
			  </div>
			</div>
			<div id="star-events">
			<h3 style={{marginTop:0}}>Star Events</h3></div>


		</div>;
	}
}
export default Home;