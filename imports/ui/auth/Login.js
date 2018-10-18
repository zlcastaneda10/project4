import React from 'react';

import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({email},password,(err)=>{
      if (err) {
        this.setState({error: 'Unable to login! Check email and password.'});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <div className="container">
          <div className="col-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Login</h1>
                {this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" ref='email' name='email' aria-describedby="emailHelp" placeholder="Enter email" required/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" ref='password' name='password' placeholder="Password" required/>
                  </div>
                  <button type="submit" className="btn btn-primary float-right">Login</button>
                </form>
                <Link to='/register'><small className='dtext'>create an account</small></Link>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}
export default Login;
