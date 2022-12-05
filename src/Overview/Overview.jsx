import React, { useState } from 'react';
import Details from './Details.jsx';

const axios = require('axios');

export default function Overview() {
  const [product, setProduct] = useState({});

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311', {
    headers: {
      Authorization: process.env.API_KEY,
    },
  }).then((response) => {
    setProduct(response.data);
  });

  return (
    <div>
      <h1>Overview</h1>
      <div><Details product={product} /></div>
    </div>
  );
}
