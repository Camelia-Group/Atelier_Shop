/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SelectSize from './SelectSize.jsx';
import SelectQuantity from './SelectQuantity.jsx';

const axios = require('axios');

export default function AddToCart({ selectedStyle }) {
  // need a two dropdowns for size and quantity
  // add to cart button which triggers post request

  const [possibleQuantity, setPossibleQuantity] = useState([]);
  const [skuSelected, setSku] = useState(0);

  // gives back an array of arrays like [[sku_num, {quantity: 0, size: " "}]]
  const skus = Object.entries(selectedStyle.skus);

  const handleAddToCart = () => {
    alert(`An item of sku # ${skuSelected} has been added to the cart`);
  };

  return (
    <div>
      <SelectSize
        skus={skus}
        setPossibleQuantity={setPossibleQuantity}
        setSku={setSku}
      />
      <SelectQuantity possibleQuantity={possibleQuantity} />
      <button onClick={() => { handleAddToCart(); }}>Add To Cart</button>
    </div>
  );
}
