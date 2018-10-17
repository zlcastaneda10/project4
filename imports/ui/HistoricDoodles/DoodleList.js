import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';

class DoodleList extends React.Component{
  render(){
    return (
      <div>
        <Navbar/>
        <h1>DoodleList</h1>
      </div>
    );
  }
}

export default DoodleList;
