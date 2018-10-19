import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class DoodleList extends React.Component{
  componentDidMount(){
    document.body.background = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundSize = '';
  }
  render(){
    return (
      <div>
        <Navbar/>
        <h1>DoodleList</h1>
        <Footer/>
      </div>
    );
  }
}

export default DoodleList;
