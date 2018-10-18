import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

class About extends React.Component{
  render(){
    return (
      <div>
      <Navbar/>
      <h1>About</h1>
      <Footer/>

      </div>
    );
  }
}

export default About;
