import React from 'react';
import { Link } from 'react-router-dom';

class DoodleBox extends React.Component{

  constructor(props) {
    super(props);
  }

  parseDate(strDate) {
    let date = strDate.split('-');
    let year = date[0];
    let month = this.parseMonth(parseInt(date[1]));
    let day = date[2];
    return `${day} de ${month} de ${year}`;
  }

  parseMonth(month) {
      const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
      return months[month-1];
  }

  render(){
    return (
      <div className="card hitbox">
        <Link to='/'><img className="card-img-top" src="http://placehold.it/400x300" alt="Card image cap"/></Link>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            <small className="rostext">
              {this.parseDate(this.props.date)}
            </small>
            <a href="#" className="badge badge-warning float-right">
             {this.props.type}
            </a>
          </h6>
          <Link to='/'><h5 className="card-title title">{this.props.title}</h5></Link>
        </div>
      </div>
    );
  }
}

export default DoodleBox;
