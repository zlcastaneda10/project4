import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

class About extends React.Component{
  componentDidMount(){
    document.body.background = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundSize = '';
  }
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
