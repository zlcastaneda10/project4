import React from 'react';
import { Link } from 'react-router-dom';

class DoodleBox extends React.Component{
  render(){
    return (
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src="..." alt="Card image cap">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        </div>
        <div className="card-body">
          <Link to="/" className="card-link">more info.</Link>
        </div>
      </div>
    );
  }
}

export default DoodleBox;
