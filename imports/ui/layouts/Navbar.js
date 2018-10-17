import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  onLogout(){
    Accounts.logout();
  }

  render() {
    if (Meteor.userId()) {
      return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light backcolonav">
          <Link className="navbar-brand" to="/"><span className='ctext'>Doodles Uniandes</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/doodles'><span className='ctext'>Hitos</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/doodlesforms'><span className='ctext'>Crear Hito</span></Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={this.onLogout.bind(this)}><span className='ctext'>Logout</span></span>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      );
    } else {
      return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light backcolonav">
          <Link className="navbar-brand" to="/"><span className='ctext'>Doodles Uniandes</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/doodles'><span className='ctext'>Hitos</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'><span className='ctext'>Sobre Hitos</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/register'><span className='ctext'>Signup</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'><span className='ctext'>Login</span></Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      );
    }
  }
}
