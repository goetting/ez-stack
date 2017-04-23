/* @flow */
import React from 'react';
import ezFlux from '../../state/ez-flux';
import Collapsable from '../collapsable/collapsable';

type InputProps = { id: string, label: string };

const RicPriceInput = ({ id, label }: InputProps) => (
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input
      className="mdl-textfield__input"
      type="number"
      id={id}
      onChange={(e) => {
        ezFlux.actions.products.setPriceFilter({ key: id, val: Number(e.target.value) });
      }}
      value={ezFlux.state.products.filters.price[id]}
    />
    <label className="mdl-textfield__label" htmlFor={id}>{label}</label>
  </div>
);
const PriceFilter = () => (
  <Collapsable className="price-filter" label="Price">
    <RicPriceInput id="from" label="From" />
    <RicPriceInput id="to" label="To" />
  </Collapsable>
);

export default PriceFilter;
