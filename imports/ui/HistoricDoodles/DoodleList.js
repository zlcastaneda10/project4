import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';
import DoodleBox from './DoodleBox';
import DoodleBoxComunity from './DoodleBoxComunity';

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
  renderDoodlesList() {
    //<p key={ doodle._id }>{ doodle.parrafo } - { doodle.title} - { doodle.date }</p>
    return this.state.doodle.map((doodle) => {
      return <DoodleBox key={doodle._id} id={doodle._id} parrafo={doodle.parrafo} title={doodle.title} date={doodle.date} type={doodle.tipo} edit={false}/>
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="card-deck">
              {this.renderDoodlesList()}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="card-deck">
              <DoodleBoxComunity />
              <DoodleBoxComunity />
              <DoodleBoxComunity />
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
