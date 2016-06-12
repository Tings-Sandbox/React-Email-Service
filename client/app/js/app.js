import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

export class EmailForm extends Component {


  constructor(props){
    super(props);
    this.state = {
      email: "",
      message: ""
    };
  }

  handleSubmit(e){
    var context = this;

    e.preventDefault();

    console.log(context.state);

    if (self.fetch){
      fetch('http://localhost:3000/api/send', {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(context.state)
      })
    }

    // console.log('this.state', this.state);

    // this.setState({email: '', message: ''});
  }

  updateEmail(e) {
    this.setState({email: e.target.value});
  }

  updateMessage(e) {
    this.setState({message: e.target.value});
  }
  

  render(){
    return (
        <form className="emailForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Your email" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
          <input type="text" placeholder="Your message" value={this.state.message} onChange={this.updateMessage.bind(this)}/>
          <input type="submit" value="Post"/>
        </form>
    );
  }
}

export class App extends Component {
  render(){
    return (
      <div>
        <EmailForm/>
      </div>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById("app-root")
);
