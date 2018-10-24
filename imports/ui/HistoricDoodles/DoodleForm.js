import React from 'react';
import { Link } from 'react-router-dom';

import { doodles } from './../../api/doodles';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class DoodleForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      success: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let parrafo = this.refs.parrafo.value.trim();
    let title = this.refs.title.value.trim();
    let date = this.refs.date.value.trim();
    if (parrafo && title && date) {
      Meteor.call('doodles.insert', title, parrafo, date)
      //doodles.insert({ parrafo });
      this.setState({ success: 'Ha creado correctamente un hito. Felicitaciones!' });
      this.refs.parrafo.value = '';
      this.refs.title.value = '';
      this.refs.date.value = '';
    }

  }
  render(){
    return (
      <div>
        <Navbar/>
        <br/>
        <br/>
        <div className="container">
        {this.state.success ? <div className="alert alert-success" role="alert">{this.state.success}</div> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="row">
          <div className="form-group col-9">
            <label className="subtitles">Titulo</label>
            <input type="text" className="form-control" ref='title' name='title' aria-describedby="titleHelp" placeholder="Enter Title" required />
          </div>
          <div className="form-group col-3">
                <label className="subtitles">Fecha</label>
              <input
                className="form-control"
                type="date"
                data-date=""
                data-date-format="DD MMMM YYYY"
                name="fechaIngreso"
                ref='date'
              />
            </div>
          </div>
          <div className="form-group">
            <label className="subtitles">Contenido</label>
            <textarea className="form-control" rows="5" ref="parrafo"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg float-right">Crear</button>
        </form>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default DoodleForm;
