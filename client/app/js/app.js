import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import EmailForm from './components/EmailForm.jsx';
import '../css/master.css';
const { Router, Route, hashHistory } = require('react-router');

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

const App = () => {
	<Router history={hashHistory}>
		<Route path='/' component={EmailForm}/>
	</Router>
}
 
ReactDOM.render(
  <App/>,
  document.getElementById("app-root")
);
