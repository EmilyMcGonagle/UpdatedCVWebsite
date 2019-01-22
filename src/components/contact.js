import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import { SocialIcon } from 'react-social-icons';
import Footer from './footer';

 
class Contact extends Component {
  render() {
    return (
      <div>
          <Fade top>
                <p>Feel free to get in touch with me, below is my email address and LinkedIn. There is also a link to my GitHub, so you can check out my other projects!</p>
                <p></p>
                <SocialIcon url="https://www.linkedin.com/in/emily-mcgonagle-8a9258150/" />
                <SocialIcon url="https://github.com/EmilyMcGonagle" />
                <p><b>Email: </b>Emily.mcgonagle@outlook.com</p>
                <Footer />
          </Fade>
      </div>
    );
  }
}
 
export default Contact;