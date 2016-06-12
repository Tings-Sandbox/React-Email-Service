import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'


const counterReducer = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const actionCreator = (type) => {
  return {
    type: type
  };
};

class CounterComponent extends Component{
  render() {
    return (
      <div>
      <h1>{this.props.value} hey hey hey</h1>
      <button onClick={this.props.onIncrement}>+</button>
      <button onClick={this.props.onDecrement}>-</button>
    </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <CounterComponent
      value = {store.getState()}
      onIncrement = {()=>store.dispatch(actionCreator("INCREMENT"))}
      onDecrement = {()=>store.dispatch(actionCreator("DECREMENT"))}
    />,
    document.getElementById('app-root')
  );
};

store.subscribe(render);
render();
