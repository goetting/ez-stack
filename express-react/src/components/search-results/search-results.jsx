/* @flow */
import React from 'react';
import Layout from '../layout/layout';
import Product from '../product/product';
import ezFlux from '../../state/ez-flux';
import type { ProductType, ProductStateValues } from '../../state/configs/products.state';

type Props = { onRoute: () => Promise<Object> };

class SearchResults extends React.Component {
  constructor(props: Props) {
    super(props);

    ezFlux.plugins.connectInstance(
      this,
      { products: (state: ProductStateValues) => state },
    );
  }

  state: ProductStateValues = ezFlux.state.products;

  componentDidMount() {
    this.props.onRoute();
  }

  props: Props;

  render() {
    return (
      <Layout>
        <div className="search-results">
          <div className="search-resuls-filters">
            Price,
            FuelType
          </div>
          <div className="search-results-items">
            {this.state.hits.map((item: ProductType) => <Product {...item} key={item.id} />)}
          </div>
        </div>
      </Layout>
    );
  }
}

export default SearchResults;
