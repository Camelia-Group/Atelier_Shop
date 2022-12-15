/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import './Overview.css';

export default function Details({ product, selectedStyle }) {
  let price = selectedStyle.original_price;
  let onSale = false;

  if (selectedStyle.sale_price !== null) {
    price = selectedStyle.sale_price;
    onSale = true;
  }
  if (onSale) {
    return (
      <div>
        <h2>Details</h2>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p style={{ color: 'red', display: 'inline' }}> ${price}</p>
        <s style={{ display: 'inline' }}>${selectedStyle.original_price}</s>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Details</h2>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p style={{ display: 'inline' }}>${selectedStyle.original_price}</p>
      </div>
    );
  }
}
