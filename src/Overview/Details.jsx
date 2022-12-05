import React from 'react';

export default function Details({ product }) {
  return (
    <div>
      <h2>Details</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}
