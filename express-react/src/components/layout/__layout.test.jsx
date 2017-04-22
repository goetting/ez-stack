/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Layout from './layout';

describe('root component', () => {
  it('should render', shouldRender);
});

function shouldRender() {
  const tree = mount(<Layout />);

  expect(tree.find('.layout').node).toBeTruthy();
  tree.unmount();
}
