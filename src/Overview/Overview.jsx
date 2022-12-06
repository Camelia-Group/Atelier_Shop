import React, { useState, useEffect } from 'react';
import Details from './Details.jsx';
import Description from './Description.jsx';
import './Overview.css';

const axios = require('axios');

export default function Overview() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311', {
      headers: {
        Authorization: process.env.API_KEY,
      },
    }).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    // <div>
    //   <h1>Overview</h1>
    //   <div><Details product={product} /></div>
    // </div>
    <div id="wrapper">
      <div className="overviewContainer">
        <div className="image">image div</div>
        <div className="sidebarDiv">
          <div className="productDetails"><Details product={product} /></div>
          <div className="styleSelector">style selector</div>
          <div className="addToCart">add to cart</div>
        </div>
      </div>
      <div className="productDescription"><Description product={product} /></div>
    </div>
  );
}
