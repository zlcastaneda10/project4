import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';
import DoodleBox from './DoodleBox';
import DoodleBoxComunity from './DoodleBoxComunity';

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
        <br/>
        <div className="container">
          <div className="row">
          <div className="card-deck">
            <DoodleBox/>
            <DoodleBox/>
            <DoodleBox/>
          </div>
          </div>
          <br/>
          <div className="row">
          <div className="card-deck">
            <DoodleBoxComunity/>
            <DoodleBoxComunity/>
            <DoodleBoxComunity/>
          </div>
          </div>
        </div>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default DoodleList;
