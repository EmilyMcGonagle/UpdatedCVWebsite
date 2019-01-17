import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Footer from './footer';

 
class Overview extends Component {
  render() {
    return (
      <div>
          <Fade top>
              <h2>Overview</h2>
              <p></p>
              <h3>Welcome to my CV Website</h3>
              <p> I produced this simple website from scratch using <b>React.js</b>, as a way to showcase the skills I have learned. In the process of building this website, I have learned even more skills and have put these into practice throughout the project!</p>
              <p>I have a background in programming, and prior to this apprenticeship I completed my <b>A-Level in Computer Science.</b>I have been studying Computer Science for around 4 years, with my main focus on <b>Python.</b>I have had plenty of experience in both programming, and computing theory.</p>
              <p>My career aspiration has always been to be a programmer. I hope this apprenticeship will give me the skills I need to become a software engineer, and allow me to progress my career.</p>
              <p></p>
              <Footer />
            </Fade>
      </div>
    );
  }
}
 
export default Overview;