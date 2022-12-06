import React from 'react';
import './Overview.css';

export default function Details({ product }) {
  return (
    <div>
      <h2>Details</h2>
      <p>{product.category}</p>
      <h3>{product.name}</h3>
      <p>{product.default_price}</p>
    </div>
  );
}
