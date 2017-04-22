/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Root from './root';

describe('root component', () => {
  it('should render', shouldRender);
});

function shouldRender() {
  const tree = mount(<Root />);

  expect(tree.find('.root').node).toBeTruthy();
  tree.unmount();
}
