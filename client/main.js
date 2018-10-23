import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

//react imports
import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//component imports
import Signup from './../imports/ui/auth/Signup';
import Login from './../imports/ui/auth/Login';
import NotFound from './../imports/ui/layouts/NotFound';
import About from './../imports/ui/layouts/About';
import DoodleList from './../imports/ui/HistoricDoodles/DoodleList';
import DoodleForm from './../imports/ui/HistoricDoodles/DoodleForm';

//import main.html
import './main.html';

const history = createHistory();
const unauthenticatedPages = ['/', '/doodles', '/about', '/login', '/register'];
const authenticatedPages = ['/doodlesforms'];
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const routes = (
 <Router history={history}>
     <Switch>
       <Route exact path="/" component={DoodleList} />
       <Route exact path="/doodles" component={DoodleList} />
       <Route exact path="/doodlesforms" component={DoodleForm} />
       <Route exact path="/about" component={About} />
       <Route exact path="/register" component={Signup} />
       <Route exact path="/login" component={Login} />
       <Route exact path="*" component={NotFound} />
     </Switch>
 </Router>
 );

 Tracker.autorun(() => {
   const isAuthenticated = !!Meteor.userId();
   const pathname = history.location.pathname;
   const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
   const isAuthenticatedPage = authenticatedPages.includes(pathname);
   console.log('pathname: ', history.location.pathname);
   console.log('isAuthenticatedPage', isAuthenticated ? isAuthenticated : isUnauthenticatedPage);
   console.log('isAuthenticated', isAuthenticated);
   if (isUnauthenticatedPage && isAuthenticated) {
     history.push('/doodles');
   } else if (isAuthenticatedPage && !isAuthenticated) {
     history.push('/');
   }
 });

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('app'));
});
