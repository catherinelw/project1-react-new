import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/navbar/components/Navbar';
import './App.css';
import Profile from './components/layout/profile/components/Profile'
import Resume from './components/pages/resume/components/Resume';
import AboutMe from './components/pages/aboutMe/components/AboutMe';
import Home from './components/pages/home/components/Home'
import Contact from './components/pages/contact/components/Contact'
import Portfolio from './components/pages/portfolio/components/Portfolio'

class App extends Component {
  constructor (props){
    super(props);

    this.state={
      activePage:'HOME'
      
    }
    this.changePage=this.changePage.bind(this);
}

changePage(pageName){
  return (event) => {
  event.preventDefault();

  this.setState({
     activePage: pageName,
  });
};
}

  
  render(){
  const {activePage} = this.state;

  return (
    // <Router>
    <div className="App">
    <Navbar activePage={activePage}
      onNavItemClick={this.changePage}
    />
    <div className="container">
    <div className="card">
      <Profile />
      <div className="content">
    {activePage==="HOME"&& <Home />}
    {activePage==="ABOUTME"&& <AboutMe />}
    {activePage==="RESUME"&& <Resume />}
    {activePage==="PORTFOLIO"&& <Portfolio />}
    {activePage==="CONTACT"&& <Contact />}

      {/* <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={AboutMe} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
      </Switch> */}
      </div>
    </div>
    </div>
    </div>
    // </Router>
  );
}
}
export default App;
