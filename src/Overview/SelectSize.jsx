/* eslint-disable react/prop-types */
import React from 'react';

export default function SelectSize({ skus, setPossibleQuantity, setSku }) {
  const handleSizeChange = (sizeSelected) => {
    skus.forEach((sku) => {
      if (sku[1].size === sizeSelected) {
        const quantitiesListed = [];
        for (let i = 1; i <= sku[1].quantity; i += 1) {
          quantitiesListed.push(i);
        }
        setPossibleQuantity(quantitiesListed);
        setSku(sku[0]);
      }
    });
  };

  return (
    <select name="size" onChange={(event) => handleSizeChange(event.target.value)}>
      <option value="" selected disabled hidden>Select Size...</option>
      {skus.map((sku) => {
        if (sku[1].quantity > 0) {
          return <option>{sku[1].size}</option>;
        }
      })}
    </select>
  );
}
