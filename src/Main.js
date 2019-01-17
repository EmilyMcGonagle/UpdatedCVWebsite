import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import Home from './components/home';
import Overview from './components/overview';
import Skills from './components/skillCards/skills';
import Qualifications from './components/qualifications';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.css';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <h1 className="main-title">Emily McGonagle - Online CV</h1>
            <ul className="header">
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to="/overview">Overview</NavLink></li>
              <li><NavLink to="/qualifications">Qualifications</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/overview" component={Overview}/>
              <Route path="/qualifications" component={Qualifications}/>
              <Route path="/skills" component={Skills}/>
              <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;