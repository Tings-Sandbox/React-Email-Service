import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

export default class EmailForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      to      : "",
      from    : "",
      subject : "KQED Article",
      message : ""
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
      }).then(function(res){
        console.log('response', res);
      }).catch(function(err){
        console.log('err', err);
      })
    }

    // console.log('this.state', this.state);

    // this.setState({email: '', message: ''});
  }

  updateTo(e) {
    this.setState({to: e.target.value});
  }

  updateFrom(e) {
    this.setState({from: e.target.value});
  }

  updateSubject(e) {
    this.setState({subject: e.target.value});
  }
  
  updateMessage(e) {
    this.setState({message: e.target.value});
  }

  render(){
    return (
        <form className="emailForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="From" value={this.state.to} onChange={this.updateTo.bind(this)}/>
          <input type="text" placeholder="To" value={this.state.from} onChange={this.updateFrom.bind(this)}/>
          <input type="text" placeholder="Optional message" value={this.state.message} onChange={this.updateMessage.bind(this)}/>
          <input type="submit" value="Post"/>
        </form>
    );
  }
}