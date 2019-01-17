import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Fade from 'react-reveal/Fade';

import Footer from '../footer';
import "../skillCards/skillsCards.css"

const FlippyStyle = {
    width: '300px',
    height: '400px',
    textAlign: 'center',
    color: '#FFF',
    fontSize: '30px',
    justifyContent: 'center',
    padding:'20px',
    display:'inline-block',
  }

//----------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------Python----------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

  const PythonCard = ({ flipDirection = 'horizontal' }) => (
    <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
    >

    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#b0c4e5',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src={require("C:/Users/emily.mcgonagle/OneDrive - Accenture/Desktop/Code/CV Project/cv_project/src/img/python.png")} col-xs-2 className="logo"
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
        <h1 className="cardTitle" >Python</h1>
        
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          <br />
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#b0c4e5',
          display: 'flex',
          alignItems: 'top',
          
          flexDirection: 'column'
        }}>
        <h1 className="cardTitle">Python Projects</h1>
        <p><b>4 Years of Experience through Higher Education</b></p>
        <span 
          style={{
            fontSize:'15px',
            alignItems:'center',
            bottom: '10px',
            width: '100%'
          }}>
          <br />
          <ul className="cardList">
            <li><b>Database Management System: </b>Using SQLite as a back-end database</li>
            <li><b>Encryption Program: </b>Using hashing algorithims</li>
            <li><b>Machine Learning: </b>Most recently, I have been looking into using Python for Machine Learning Algorithims</li>

        </ul>
        </span>
      </BackSide>
    </React.Fragment>
    </Flippy>);

//----------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------HTML/CSS--------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
const HTMLCard = ({ flipDirection = 'horizontal' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >

  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={require("C:/Users/emily.mcgonagle/OneDrive - Accenture/Desktop/Code/CV Project/cv_project/src/img/html.png")} col-xs-2 className="logo"
        style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
      <h1 className="cardTitle" >HTML/CSS</h1>
      
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'top',
        
        flexDirection: 'column'
      }}>
      <h1 className="cardTitle">HTML Projects</h1>
      <p><b>Experience through Industrial Cadets and Pluralsight Learning</b></p>
      <span 
        style={{
          fontSize:'15px',
          alignItems:'center',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
        <ul className="cardList">
          <li><b>Basis for learning other skills: </b>Eg Created a website using JQuery, React -need an understanding of HTML</li>
          <li><b>Css: </b>Basic CSS used for simple websites</li>
          <li><b>Bootstrap: </b>Used these skills to learn bootstrap, used on this website!</li>

      </ul>
      </span>
    </BackSide>
  </React.Fragment>
  </Flippy>);

//----------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------React-----------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

const ReactCard = ({ flipDirection = 'horizontal' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >

  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={require("C:/Users/emily.mcgonagle/OneDrive - Accenture/Desktop/Code/CV Project/cv_project/src/img/react.png")} col-xs-2 className="logo"
        style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
      <h1 className="cardTitle" >React</h1>
      
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'top',
        
        flexDirection: 'column'
      }}>
      <h1 className="cardTitle">React Projects</h1>
      <p><b>Self Learning</b></p>
      <span 
        style={{
          fontSize:'15px',
          alignItems:'center',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
        <ul className="cardList">
          <li><b>Weather App: </b>Pulls information from external API and displays for chosen location</li>
          <li><b>GitHub Project: </b>Search for a github user and displays their profile</li>
          <li><b>Cv Project: </b>Used these skills to produce my CV website</li>

      </ul>
      </span>
    </BackSide>
  </React.Fragment>
  </Flippy>);

//----------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------Java-----------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

const JavaCard = ({ flipDirection = 'horizontal' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >

  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={require("C:/Users/emily.mcgonagle/OneDrive - Accenture/Desktop/Code/CV Project/cv_project/src/img/java.png")} col-xs-2 className="logo"
        style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
      <h1 className="cardTitle" >Java</h1>
      
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'top',
        
        flexDirection: 'column'
      }}>
      <h1 className="cardTitle">Java Projects</h1>
      <p><b>Experince in Bootcamp</b></p>
      <span 
        style={{
          fontSize:'15px',
          alignItems:'center',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
        <ul className="cardList">
          <li><b>Top Trumps: </b>Produced a simple TopTrumps game against AI</li>
          <li><b>Car Project: </b>Simple application for viewing cars</li>
          <li><b>Restuarant Project: </b>Simple application for a retaurant, complete with billing calculator</li>
      </ul>
      </span>
    </BackSide>
  </React.Fragment>
  </Flippy>);
//----------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------SQLite------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

const SQCard = ({ flipDirection = 'horizontal' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >

  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={require("C:/Users/emily.mcgonagle/OneDrive - Accenture/Desktop/Code/CV Project/cv_project/src/img/sqlite.png")} col-xs-2 className="logo"
        style={{ maxWidth: '200px', maxHeight: '200px' }}
      />
      <h1 className="cardTitle" >SQLite</h1>
      
      <span 
        style={{
          fontSize:'12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: '#b0c4e5',
        display: 'flex',
        alignItems: 'top',
        
        flexDirection: 'column'
      }}>
      <h1 className="cardTitle">SQLite Projects</h1>
      <p><b>Some experience through Education</b></p>
      <span 
        style={{
          fontSize:'15px',
          alignItems:'center',
          bottom: '10px',
          width: '100%'
        }}>
        <br />
        <ul className="cardList">
          <li><b>Database Management: </b> Used SQLite to create a backend database to store records - integrated with python, allowing user to add/delete and view records</li>
          <li><b>Self Learning: </b>Also completed some online training to learn about different SQL functionality eg Joins</li>

      </ul>
      </span>
    </BackSide>
  </React.Fragment>
  </Flippy>);

//Displays all cards
class Skills extends Component{
    render(){
        return(
          <Fade top>
          <div>
            <h2>Skills</h2>
            <p>Below is some information on my main programming skills. These are the programming languages I have the most experience in, and I have included some information on some of the projects I have produced using these languages.</p>
            <PythonCard />
            <HTMLCard />
            <ReactCard />
            <JavaCard />
            <SQCard />
            <p>In addition to the skills above, I also have some limited experience in other areas, for example Angular. I have completed several training courses on PluralSight, and I am constantly working on upskilling and learning new skills.</p>
            <p>As part of my role, I am always learning new technologies. Most recently, I had experience with the Alexa Skills Kit. I am always working on upskilling and expanding my knowledge of different programming techniques, and putting these to practice with various projects (like this website!)</p>
            <Footer />
          </div>
          </Fade>
        );
    }

}

export default Skills
