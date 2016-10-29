import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import Layout from './components/Layout.jsx';
import EmailForm from './components/EmailForm.jsx';
import SignIn from './components/SignIn.jsx';

import '../css/master.css';
const { Router, Route, hashHistory, IndexRoute } = require('react-router');

// Without the React Router
/* export class App extends Component {
  render(){
    return (
      <div className="emailform">
        <EmailForm/>
      </div>
    );
  }
} */ 

const App = () => (
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
  	   <IndexRoute component={EmailForm}/>
       <Route path='/signin' component={SignIn} />
    </Route>
  </Router>
)


ReactDOM.render(
  <App/>,
  document.getElementById("app-root")
);