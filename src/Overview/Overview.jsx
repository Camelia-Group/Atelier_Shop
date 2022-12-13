/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Details from './Details.jsx';
import Description from './Description.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import './Overview.css';

const axios = require('axios');

export default function Overview() {
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({ skus: {} });
  const [selectedImage, setSelectedImage] = useState('test');

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311', {
      headers: {
        Authorization: process.env.API_KEY,
      },
    }).then((response) => {
      setProduct(response.data);
    }).then(() => {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311/styles', {
        headers: {
          Authorization: process.env.API_KEY,
        },
      }).then((response) => {
        setProductStyles(response.data.results);
        setSelectedStyle(response.data.results[0]);
        setSelectedImage(response.data.results[0].photos[0].url);
      });
    });
  }, []);

  return (
    // <div>
    //   <h1>Overview</h1>
    //   <div><Details product={product} /></div>
    // </div>
    <div id="wrapper">
      <div className="overviewContainer">
        <div className="image">
          <ImageGallery
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            selectedStyle={selectedStyle}
          />
        </div>
        <div className="sidebarDiv">
          <div className="productDetails"><Details product={product} selectedStyle={selectedStyle} /></div>
          <div className="styleSelector">
            <StyleSelector
              styles={productStyles}
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
              setSelectedImage={setSelectedImage}
            />
          </div>
          <div className="addToCart"><AddToCart selectedStyle={selectedStyle} /></div>
        </div>
      </div>
      <div className="productDescription"><Description product={product} /></div>
    </div>
  );
}
