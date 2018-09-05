import React, { Component } from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';
import Events from './events/Events'
import Organizers from './components/Organizers';
import Home from './components/Home';
import Aboutus from './components/Aboutus'
import Footer from './components/Footer'
class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={Home}/>
            <Route path='/events' component={Events}/>
            <Route path='/about-us' component={Aboutus}/>
            <Route path='/organizers' component={Organizers}/>
            <Route path='/hospitality' component={Default}/>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}
// temporary one just for nav purpose


const Default = ()=><div>Component has not yet created. From the navbar branch</div>





export default App;
