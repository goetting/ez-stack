/* @flow */
import React from 'react';
import { fuelLang } from '../../const/ids-to-lang';
import ezFlux from '../../state/ez-flux';
import Collapsable from '../collapsable/collapsable';

export default function FuelFilter() {
  return (
    <Collapsable className="fuel-filter" label="Fueltype">
      {Object.entries(fuelLang).map(([id, name]) => {
        const checked = !!ezFlux.state.products.filters.fuel[id];
        return (
          <label
            className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
            htmlFor={name}
            key={name}
          >
            <input
              type="checkbox"
              id={name}
              className="mdl-checkbox__input"
              checked={checked}
              onClick={() => ezFlux.actions.products.toggleFuelFilter(id)}
            />
            <span className="mdl-checkbox__label">{name}</span>
          </label>
        );
      })}
    </Collapsable>
  );
}
