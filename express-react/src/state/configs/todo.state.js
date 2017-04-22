/* @flow *//* eslint-disable no-param-reassign */

export type Todo = { text: string, checked: boolean };
export type Values = { todos: Todo[] };

export default {
  values: {
    todos: [
      {
        text: 'do important stuff',
        checked: false,
      },
      {
        text: 'then do more important stuff',
        checked: false,
      },
    ],
  },
  actions: {
    add: (todo: Todo, { todos }: Values): Object => {
      todos.push(todo);
      return { todos };
    },
    remove: (i: number, { todos }: Values): Object => {
      todos.splice(i, 1);
      return { todos };
    },
    toggle: (i: number, { todos }: Values): Object => {
      todos[i].checked = !todos[i].checked;
      return { todos };
    },
  },
};
