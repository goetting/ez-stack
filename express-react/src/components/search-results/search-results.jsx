/* @flow */
import React from 'react';
import Layout from '../layout/layout';
import Product from '../product/product';
import connect from '../../lib/connect';
import FuelFilter from '../fuel-filter/fuel-filter';
import PriceFilter from '../price-filter/price-filter';
import type { ProductStateValues } from '../../stores/product';

type Props = ProductStateValues & { onRoute: () => Promise<Object> };

class SearchResultsBase extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.onRoute();
  }

  render() {
    const { filters } = this.props;
    const filterFuel = Object.values(filters.fuel).find(val => val);
    const priceInRange = price => price >= filters.price.from && price <= filters.price.to;
    const correctFuelType = fuelId => !filterFuel || filters.fuel[fuelId];

    return (
      <Layout>
        <div className="search-results ric-layout__large-content--with-sidebar">
          <nav className="ric-sidebar">
            <PriceFilter />
            <FuelFilter />
          </nav>
          <main className="ric-articles-list-view">
            {this.props.hits
              .filter(item => correctFuelType(item.fuelId) && priceInRange(item.price))
              .map(item => <Product {...item} key={item.id} />)
            }
          </main>
        </div>
      </Layout>
    );
  }
}

const SearchResults = connect(
  SearchResultsBase,
  { product: (state: ProductStateValues) => state },
);

export default SearchResults;
