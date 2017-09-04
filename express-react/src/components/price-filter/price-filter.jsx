/* @flow */
import React from 'react';
import productStore from '../../stores/product';
import Collapsable from '../collapsable/collapsable';

type InputProps = { id: string, label: string };

const RicPriceInput = ({ id, label }: InputProps) => (
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input
      className="mdl-textfield__input"
      type="number"
      id={id}
      onChange={(e) => {
        productStore.setPriceFilter({ key: id, val: Number(e.target.value) });
      }}
      value={`${productStore.filters.price[id]}`}
    />
    <label className="mdl-textfield__label" htmlFor={id}>{label}</label>
  </div>
);
const PriceFilter = () => (
  <Collapsable label="Price">
    <RicPriceInput id="from" label="From" />
    <RicPriceInput id="to" label="To" />
  </Collapsable>
);

export default PriceFilter;
