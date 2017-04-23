/* @flow */
import React from 'react';
import Layout from '../../layout/layout';
import ezFlux from '../../../state/ez-flux';
import type { Todo } from '../../../state/configs/todo.state';

class TodoForm extends React.Component {
  inputRef: Object;

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    ezFlux.actions.todo.add(this.inputRef.value);
    this.inputRef.value = '';
  }

  render() {
    return (
      <div className="todo-form">
        <input ref={ref => this.inputRef = ref} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
