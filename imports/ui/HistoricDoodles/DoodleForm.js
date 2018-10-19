import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class DoodleForm extends React.Component{
  render(){
    return (
      <div>
        <Navbar/>
        <h1>DoodleForm</h1>
        <Footer/>
      </div>
    );
  }
}

export default DoodleForm;
