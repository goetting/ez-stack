/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Todo from './todo';
import { browserHistory, Router, Route } from 'react-router';

describe('root component', () => {
  it('should render', shouldRender);
});

function shouldRender() {
  const tree = mount(<Todo />);

  expect(tree.find('.todo').node).toBeTruthy();
  tree.unmount();
}
