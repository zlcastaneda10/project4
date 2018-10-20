import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

class About extends React.Component{
  componentDidMount(){
    document.body.background = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundSize = '';
  }
  render(){
    return (
      <div>
      <Navbar/>
      <br/>
      <div className="container">
            <h3 className="card-title title">
              Lorem ipsum dolor sit amet consectetur
              adipiscing elit potenti et senectus per
              sollicitudin, viverra porttitor nibh
              dictumst lacus cras non curabitur mi
              volutpat ligula.
            </h3>
            <br/>
            <h5 className="rostext">¿Facilisi molestie curae consequat, cursus pretium?</h5>
            <p className="card-text">
              Himenaeos dapibus vestibulum pellentesque id libero
              ultrices nostra nisl mauris, dis cum nulla ac
              condimentum primis arcu phasellus, montes suspendisse
              quam auctor aenean cursus facilisis urna.
              Sollicitudin vestibulum eu habitant dictum interdum
              nec senectus ornare cum quam himenaeos scelerisque,
              pellentesque tristique curae viverra consequat ad
              taciti velit nostra faucibus magnis natoque, eget
              aliquam mauris integer etiam habitasse fermentum
              magna conubia suscipit morbi. Est nibh quisque sapien
              pellentesque quam parturient fermentum, rhoncus libero
              maecenas hac arcu hendrerit, a ut consequat netus
              vivamus litora.
            </p>
            <br/>
            <h5 className="rostext">¿Facilisi molestie curae consequat, cursus pretium?</h5>
            <p className="card-text">
              Himenaeos dapibus vestibulum pellentesque id libero
              ultrices nostra nisl mauris, dis cum nulla ac
              condimentum primis arcu phasellus, montes suspendisse
              quam auctor aenean cursus facilisis urna.
              Sollicitudin vestibulum eu habitant dictum interdum
              nec senectus ornare cum quam himenaeos scelerisque,
              pellentesque tristique curae viverra consequat ad
              taciti velit nostra faucibus magnis natoque, eget
              aliquam mauris integer etiam habitasse fermentum
              magna conubia suscipit morbi. Est nibh quisque sapien
              pellentesque quam parturient fermentum, rhoncus libero
              maecenas hac arcu hendrerit, a ut consequat netus
              vivamus litora.
            </p>
            <h5 className="rostext">¿Facilisi molestie curae consequat, cursus pretium?</h5>
            <p className="card-text">
              Himenaeos dapibus vestibulum pellentesque id libero
              ultrices nostra nisl mauris, dis cum nulla ac
              condimentum primis arcu phasellus, montes suspendisse
              quam auctor aenean cursus facilisis urna.
              Sollicitudin vestibulum eu habitant dictum interdum
              nec senectus ornare cum quam himenaeos scelerisque,
              pellentesque tristique curae viverra consequat ad
              taciti velit nostra faucibus magnis natoque, eget
              aliquam mauris integer etiam.
            </p>
          </div>
      <br/>
      <Footer/>
      </div>
    );
  }
}

export default About;
