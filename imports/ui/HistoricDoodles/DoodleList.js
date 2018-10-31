import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';
import DoodleBox from './DoodleBox';

//server imports
import { doodles } from './../../api/doodles';


class DoodleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doodle: [],
      edit: false
    };
  }
  componentDidMount() {
    document.body.background = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundSize = '';

    this.doodlesTracker = Tracker.autorun(() => {
      Meteor.subscribe('doodles');
      const doodle = doodles.find({}).fetch();
      console.log(doodle);
      this.setState({ doodle });
    });
  }
  componentWillUnmount() {
    this.doodlesTracker.stop();
  }
  // Zulma Castañeda: No olviden implementar algun mecanismo de paginacion para sus Doodles, si quieren hacerlo con meteor https://github.com/alethes/meteor-pages aunque con react tambien hay muchas opciones
  renderDoodlesListUniandes() {
    return this.state.doodle.map((doodle) => {
      if (doodle.tipo === 'Uniandes') {
        return <DoodleBox key={doodle._id} id={doodle._id} parrafo={doodle.parrafo} title={doodle.title} date={doodle.date} type={doodle.tipo} edit={false}/>
      }
    });
  }
  renderDoodlesListComunidad() {
    return this.state.doodle.map((doodle) => {
      if (doodle.tipo === 'Comunidad') {
        return <DoodleBox key={doodle._id} id={doodle._id} parrafo={doodle.parrafo} title={doodle.title} date={doodle.date} type={doodle.tipo} edit={false}/>
      }
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">Hitos Uniandes</h1>
            <p className="lead">
            Hitos Uniandes es un espacio creado
            por la Oficina de Construcción de Comunidad
            para visibilizar la investigación sobre algunos
            hitos históricos de nuestra institucion y comunidad.
            Los invitamos a ser parte de esta iniciativa.
            </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="card-deck">
              {this.renderDoodlesListUniandes()}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="card-deck">
            {this.renderDoodlesListComunidad()}
            </div>
          </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

export default DoodleList;
