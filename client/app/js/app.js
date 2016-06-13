import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import EmailForm from './components/EmailForm.jsx';
import '../css/master.css';

export class App extends Component {
  render(){
    return (
      <div className="emailform">
        <EmailForm/>
      </div>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById("app-root")
);
