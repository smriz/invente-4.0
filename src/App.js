import React, { Component } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';
import Events from './events/Events'
import Organizers from './components/Organizers';
import Home from './components/Home';
class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={Home}/>
            <Route path='/events' component={Events}/>
            <Route path='/about-us' component={Default}/>
            <Route path='/organizers' component={Organizers}/>
            <Route path='/hospitality' component={Default}/>
          </div>
        </BrowserRouter>
    );
  }
}
// temporary one just for nav purpose
const Links = (x) => <div>

  <Link to="/">Home</Link>
  <Link to="/events">Events</Link>
  <Link to="/events/cse">Cse</Link>
  <Link to="/events/cse/paper-presentation">Cse-paper</Link>
</div>;

const Default = ()=><div>Component has not yet created. From the navbar branch</div>





export default App;
