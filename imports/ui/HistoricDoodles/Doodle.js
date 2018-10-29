import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class Doodle extends React.Component{
  render(){
    return (
      <div>
      <Navbar/>

      <Footer/>
      </div>
    );
  }
}

export default Doodle;
