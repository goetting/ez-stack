/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import SearchResults from './search-results';

const history = createMemoryHistory({ basename: '/' });

describe('root component', () => {
  it('should render', shouldRender);
});

function shouldRender() {
  const tree = mount(
    <Router history={history}>
      <SearchResults onRoute={() => {}} />
    </Router>,
  );

  expect(tree.find('.search-results').node).toBeTruthy();
  tree.unmount();
}
