import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';



const counterReducer = (state=0, action) => {
  switch(action.type) {
    case("INCREASE"):
      return state + 1;
    case("DECREASE"):
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);


class MainApp extends Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.props.increase();
  }

  decrease() {
    this.props.decrease();
  }

  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={this.increase}>IncreaseMe!</button>
        <button onClick={this.decrease}>DecreaseMe!</button>
      </div>
    );
  }
};

const ActionCreator = (type) => {
  return {
    type: type
  };
};

const increaseFx = () => {
  store.dispatch(ActionCreator("INCREASE"));
};

const decreaseFx = () => {
  store.dispatch(ActionCreator("DECREASE"));
};

const render = () => {
  ReactDOM.render(
    <MainApp
      value={store.getState()}
      increase={increaseFx}
      decrease={decreaseFx}
    />,
    document.getElementById("app-root")
  );
};

store.subscribe(render);
render();
