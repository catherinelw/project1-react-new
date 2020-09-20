import React from 'react';
import Navbar from './components/layout/navbar/components/Navbar';
import './App.css';
import Profile from './components/layout/profile/components/Profile'
// import Resume from './components/pages/resume/components/Resume'
// import AboutMe from './components/pages/aboutMe/components/AboutMe';
// import Resume from './components/pages/resume/components/Resume';
// import Portfolio from './components/pages/portfolio/components/Portfolio'
import Contact from './components/pages/contact/components/Contact'



function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
    <div className="card">
      <Profile />
      <div className="content">
      <Contact />
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
