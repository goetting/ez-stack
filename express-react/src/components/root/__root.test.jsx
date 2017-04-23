/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Root from './root';
import { useRouterHistory, Router, Route } from 'react-router';
import { createMemoryHistory } from 'history'

const history = createMemoryHistory({ basename: '/', });

describe('root component', () => {
  it('should render', shouldRender);
});

function shouldRender() {
  const tree = mount(<Router history={history}><Root /></Router>);

  expect(tree.find('.root').node).toBeTruthy();
  tree.unmount();
}
