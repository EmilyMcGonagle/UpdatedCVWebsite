import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import Footer from './footer';

 
const Home = () => {
   {
    return (
      <div>
        <Fade top>
        <h1>Welcome!</h1>
        <div className="bgimg"><img src = "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/08/coding-1200x642.jpg" ></img></div>
            <p>My name is <b>Emily</b> and I am currently an apprentice. I created this website to demonstrate the skills I have been learning, specifically <b>React JS,</b> which incorporates elements of <b>HTML and CSS.</b></p>
            <p>This website is a way to showcase my skills, and put my training into practice. If you would like to contact me, I have included my contact information above, so feel free to ask any questions you may have!</p>
            <Footer />
        </Fade>
      </div>
    );
  }
}
 
export default Home;