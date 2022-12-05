import React from 'react';

export default function Details({ product }) {
  return (
    <div>
      <h2>Details</h2>
      <h3>Name: {product.name}</h3>
      <h4>Category: {product.category}</h4>
      <p>Price: {product.default_price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}
