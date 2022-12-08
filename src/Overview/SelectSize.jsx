/* eslint-disable react/prop-types */
import React from 'react';

export default function SelectSize({ skus, setSelectedSize, setPossibleQuantity }) {
  const handleSizeChange = (sizeSelected) => {
    setSelectedSize(sizeSelected);
    skus.forEach((sku) => {
      if (sku[1].size === sizeSelected) {
        const quantitiesListed = [];
        for (let i = 1; i <= sku[1].quantity; i += 1) {
          quantitiesListed.push(i);
        }
        setPossibleQuantity(quantitiesListed);
      }
    });
  };

  return (
    <select name="size" onChange={(event) => handleSizeChange(event.target.value)}>
      <option value="" selected disabled hidden>Select Size...</option>
      {skus.map((sku) => <option>{sku[1].size}</option>)}
    </select>
  );
}
