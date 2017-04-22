/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Todo from './todo';

describe('root component', () => {
  it('should render', shouldRender);
});

function shouldRender() {
  const tree = mount(<Todo />);

  expect(tree.find('.todo').node).toBeTruthy();
  tree.unmount();
}
