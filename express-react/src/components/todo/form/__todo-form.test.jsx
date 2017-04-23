/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import TodoForm from './todo-form';

describe('root component', () => {
  it('should render', shouldRender);
});

function shouldRender() {
  const tree = mount(<TodoForm />);

  expect(tree.find('.todo-form').node).toBeTruthy();
  tree.unmount();
}
