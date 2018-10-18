import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return (
      <footer className="page-footer navcolorback">
        <div className="footer-copyright text-center py-3">
        <span className='ctext'>
          © 2018 Copyright: Derechos Reservados Universidad de los Andes
        </span>
        </div>

      </footer>
      );
  }
}

export default Footer;
