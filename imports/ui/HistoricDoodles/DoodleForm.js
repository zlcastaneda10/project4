import React from 'react';
import { Link } from 'react-router-dom';

import { doodles } from './../../api/doodles';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class DoodleForm extends React.Component{
  onSubmit(e) {
    e.preventDefault();
    let parrafo = this.refs.parrafo.value.trim();
    let title = this.refs.title.value.trim();
    let date = this.refs.date.value.trim();
    if (parrafo && title && date) {
      Meteor.call('doodles.insert', title, parrafo, date)
      //doodles.insert({ parrafo });
      this.refs.parrafo.value = '';
    }

  }
  render(){
    return (
      <div>
        <Navbar/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label className="subtitles">Title</label>
            <input type="text" className="form-control" ref='title' name='title' aria-describedby="titleHelp" placeholder="Enter Title" required />
          </div>
          <div className="form-group col-md-6">
              <label className="secondary-text-color">Fecha de Ingreso</label>
              <input
                className="form-control"
                type="date"
                data-date=""
                data-date-format="DD MMMM YYYY"
                name="fechaIngreso"
                ref='date'
              />
            </div>
          <div className="form-group">
            <label>Example textarea</label>
            <textarea className="form-control" rows="5" ref="parrafo"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg float-right">Parrafo</button>
        </form>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default DoodleForm;
