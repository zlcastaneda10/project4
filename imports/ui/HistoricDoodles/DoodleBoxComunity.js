import React from 'react';
import { Link } from 'react-router-dom';

class DoodleBox extends React.Component{
  render(){
    return (
      <div className="card combox">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            <small className="rostext">
              20 de octubre de 2008
            </small>
            <a href="#" className="badge morado float-right">
             Comunidad
            </a>
          </h6>
          <Link to='/'><h5 className="card-title title">Un día especial</h5></Link>
        </div>
      </div>
    );
  }
}

export default DoodleBox;
