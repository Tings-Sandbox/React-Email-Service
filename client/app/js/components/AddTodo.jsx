import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = '';
      }}/>
      <button type="submit">
        Add Todo
      </button>
    </div>
  );
};
export default connect()(AddTodo);
