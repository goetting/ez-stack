/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Doc from './doc';

describe('doc component', () => {
  it('should render', compRender);
  it('should call onRoute', onRouteCall);
});

function docMount(props = { onRoute: () => {} }) {
  const tree = mount(<Doc {...props} />);

  expect(tree.find('.doc').node).toBeTruthy();
  return tree;
}

function compRender() {
  docMount().unmount();
}

function onRouteCall() {
  let called = false;
  const tree = docMount({ onRoute: () => { called = true; } });

  expect(called).toBeTruthy();
  tree.unmount();
}
