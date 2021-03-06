import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class Doodle extends React.Component{
  parseDate(strDate) {
    let date = strDate.split('-');
    let year = date[0];
    let month = this.parseMonth(parseInt(date[1]));
    let day = date[2];
    return `${day} de ${month} de ${year}`;
  }

  parseMonth(month) {
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return months[month - 1];
  }
  render(){
    var textarea = this.props.location.state.value.parrafo.replace(/\r\n/g, "<br>");
    console.log(textarea);
    return (
      <div>
      <Navbar/>
        <div className="container">
        <h1 className="card-title title">
        {this.props.location.state.value.title}
        </h1>
        <h5 className="rostext"><small>{this.parseDate(this.props.location.state.value.date)}</small></h5>
        <p className="textareatest">
        {this.props.location.state.value.parrafo}
        </p>
        </div>
      <Footer/>
      </div>
    );
  }
}

export default Doodle;
