import React from 'react';

export default function Description({product}) {
  console.log(product);
  return (
    <div id="descriptionWrapper">
      <div className="description">
        <h1>{product.slogan}</h1>
        <div>{product.description}</div>
      </div>
      <div className="features">
        <h3>Features</h3>
        <ul>
          <li>GMO and Pesticide-free</li>
          <li>Made with 100% Genetic Modification</li>
          <li>30% More Tears from Underpaid Labor</li>
          <li>Ends in the Ocean Guaranteed!</li>
        </ul>
      </div>
    </div>
  );
}
