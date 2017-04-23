/* eslint-disable no-use-before-define, import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Product from './product';
import ezFlux from '../../state/ez-flux';

async function beforeAll() {                                                                          // eslint-disable-line no-unused-vars
  await ezFlux.actions.product.callAPI();
}

describe('product component', () => {
  it('should render', shouldRender);
});


function shouldRender() {
  const item = ezFlux.state.products.hits[0];
  const tree = mount(<Product />);

  expect(tree.find('.product').node).toBeTruthy();
  tree.unmount();
}
