import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// doesn't work
export class Layout extends Component {
	constructor(){
		super(props);
	}

	render(){
		return(
			<div class='layout'>
				{this.props.children}
			</div>
		)
	}
}  

// const React = require('react')

// const Layout = (props) => (
//   <div className='layout'>
//     {props.children}
//   </div>
// )

// module.exports = Layout