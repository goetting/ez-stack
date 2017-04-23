/* @flow */
import React from 'react';
import ezFlux from '../../../state/ez-flux';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    ezFlux.actions.todo.add(this.inputRef.value);
    this.inputRef.value = '';
  }

  inputRef: Object;

  render() {
    return (
      <div className="todo-form">
        <input ref={(ref) => { this.inputRef = ref; }} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
