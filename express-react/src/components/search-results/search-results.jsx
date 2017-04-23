/* @flow */
import React from 'react';
import Layout from '../layout/layout';
import Product from '../product/product';
import ezFlux from '../../state/ez-flux';
import FuelFilter from '../fuel-filter/fuel-filter';
import PriceFilter from '../price-filter/price-filter';
import type { ProductStateValues } from '../../state/configs/products.state';

class SearchResults extends React.Component {
  constructor(props: Props) {
    super(props);

    ezFlux.plugins.connectInstance(this, { products: (state: ProductStateValues) => state });
  }

  state: ProductStateValues = ezFlux.state.products;

  render() {
    const { filters } = ezFlux.state.products;
    const filterFuel = Object.values(filters.fuel).find(val => val);
    const priceInRange = price => price > filters.price.from && price < filters.price.to;
    const correctFuelType = fuelId => !filterFuel || filters.fuel[fuelId];

    return (
      <Layout>
        <div className="search-results ric-layout__large-content--with-sidebar">
          <nav className="ric-sidebar">
            <PriceFilter />
            <FuelFilter />
          </nav>
          <main className="ric-articles-list-view">
            {this.state.hits
              .filter(item => correctFuelType(item.fuelId) && priceInRange(item.price))
              .map(item => <Product {...item} key={item.id} />)
            }
          </main>
        </div>
      </Layout>
    );
  }
}

export default SearchResults;
