/* @flow */
import React from 'react';
import Layout from '../layout/layout';
import ezFlux from '../../state/ez-flux';
import TodoForm from './form/todo-form';
import type { Todo } from '../../state/configs/todo.state';

type Props = { todos: Todo[] };

const TodoComp = ({ todos }: Props) => (
  <Layout>
    <h1>Todos</h1>
    <TodoForm />
    <ul className="todo">
      {todos.map(({ checked, text }: Todo, i: number) => (
        <li className="todo-item" key={i}>
          <button onClick={() => ezFlux.actions.todo.toggle(i)}>
            {checked ? '✓' : 'x'}
          </button>
          {text}
          <button onClick={() => ezFlux.actions.todo.remove(i)} className="todo-item-remove">
            Remove
          </button>
        </li>
      ))}
    </ul>
  </Layout>
);

export default ezFlux.plugins.connectClass(TodoComp, { todo: ['todos'] }, ezFlux.state.todo);
