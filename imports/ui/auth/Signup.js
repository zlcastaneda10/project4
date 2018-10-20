import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';

class Signup extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  componentDidMount(){
    const totalCount = 30;
    var num = Math.ceil( Math.random() * totalCount );
    document.body.background = num+'.jpg';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.position = "relative";
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let username = this.refs.name.value.trim();
    console.log(password);

    Accounts.createUser({ username, email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
        Meteor.call('users.insert', username, email, () => {
          if (err) { console.log(err); return; }
        });
      }
    });
  }
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <br/>
        <div className="container">
          <div className="col-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title title">Registrate</h1>
                {this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="form-group">
                    <label className="subtitles">Name</label>
                    <input type="text" className="form-control" ref='name' name='name' placeholder="Enter name" required />
                  </div>
                  <div className="form-group">
                    <label className="subtitles">Email address</label>
                    <input type="email" className="form-control" ref='email' name='email' aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small className="form-text text-muted">We will never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label className="subtitles">Password</label>
                    <input type="password" className="form-control" ref='password' name='password' placeholder="Password" required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg float-right">Registrate</button>
                </form>
                <Link to='/login'><small className='rostext'>Ya tienes una cuenta?</small></Link>
              </div>
            </div>
          </div>
        </div>
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
export default Signup;
