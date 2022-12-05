import React from 'react';
import './Overview.css';

export default function Details({ product }) {
  console.log(product);
  return (
    <div>
      <h2>Details</h2>
      <h3>{product.name}</h3>
    </div>
  );
}
