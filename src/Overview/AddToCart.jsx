import React from 'react';

export default function AddToCart({ style }) {
  // need a two dropdowns for size and quantity
  // add to cart button which triggers post request
  const skus = Object.entries(style.skus);

  return (
    <form>
      <select name="size">
        {skus.map((sku) => { return <option>{sku[1].size}</option>; })}
      </select>
    </form>
  );
}
