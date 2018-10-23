import React from 'react';
import { Link } from 'react-router-dom';

import { doodles } from './../../api/doodles';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class DoodleForm extends React.Component{
  onSubmit(e) {
    e.preventDefault();
    let parrafo = this.refs.parrafo.value.trim();
    if (parrafo) {
      Meteor.call('doodles.insert', parrafo)
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
