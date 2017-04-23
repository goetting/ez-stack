/* @flow */
import React from 'react';
import type { ProductType } from '../../state/configs/products.state';

type Props = ProductType;

export default function Product(product: Props = {}) {
  return (
    <div className="product">{product.title}</div>
  );
}
