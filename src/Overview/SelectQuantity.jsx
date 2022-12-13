/* eslint-disable react/prop-types */
import React from 'react';

export default function SelectQuantity({ possibleQuantity }) {
  return (
    <select>
      <option value="" selected disabled hidden>Qty</option>
      {possibleQuantity.map((qty) => <option>{qty}</option>)}
    </select>
  );
}
