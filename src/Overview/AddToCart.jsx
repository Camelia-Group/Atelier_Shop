/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SelectSize from './SelectSize.jsx';
import SelectQuantity from './SelectQuantity.jsx';

export default function AddToCart({ selectedStyle }) {
  // need a two dropdowns for size and quantity
  // add to cart button which triggers post request

  const [selectedSize, setSelectedSize] = useState('');
  const [possibleQuantity, setPossibleQuantity] = useState([]);

  // gives back an array of arrays like [[sku_num, {quantity: 0, size: " "}]]
  const skus = Object.entries(selectedStyle.skus);

  return (
    <form>
      <SelectSize
        skus={skus}
        setSelectedSize={setSelectedSize}
        setPossibleQuantity={setPossibleQuantity}
      />
      <SelectQuantity possibleQuantity={possibleQuantity} />
    </form>
  );
}
