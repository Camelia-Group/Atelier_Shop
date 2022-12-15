/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import './Overview.css';

export default function Details({ product, selectedStyle, productReviews }) {
  let price = selectedStyle.original_price;
  let onSale = false;

  function stars(rating) {
    let star = "";

    for (let i = 0; i < rating; i++) {
      star += "★";
    }
    for(let j=0; j < star.length; j++){
      if(star.length <5) {
        star += "☆"
      }
    }

    return star;
  }

  const avgRating = () => {
    let total = 0;
    productReviews.forEach((review) => {
      total += review.rating
    })
    return total/productReviews.length
  }

  if (selectedStyle.sale_price !== null) {
    price = selectedStyle.sale_price;
    onSale = true;
  }
  if (onSale) {
    return (
      <div>
        <h4 style={{ display: 'inline' }}>{avgRating()} {stars(avgRating())}</h4>
        <a href="#reviews" style={{ display: 'inline', 'font-size': '10px', 'padding-left': '5px' }}>Read all reviews</a>
        <p style={{"text-transform": "uppercase"}}>{product.category}</p>
        <h3 style={{"text-transform": "uppercase"}}>{product.name}</h3>
        <p style={{ color: 'red', display: 'inline' }}>${price}  </p>
        <s style={{ display: 'inline' }}>${selectedStyle.original_price}</s>
      </div>
    );
  } else {
    return (
      <div>
        <h4 style={{ display: 'inline' }}>{avgRating()} {stars(avgRating())}</h4>
        <a href="#reviews" style={{ display: 'inline', 'font-size': '10px', 'padding-left': '5px'  }}>Read all reviews</a>
        <p style={{"text-transform": "uppercase"}}>{product.category}</p>
        <h3 style={{"text-transform": "uppercase"}}>{product.name}</h3>
        <p style={{ display: 'inline' }}>${selectedStyle.original_price}</p>
      </div>
    );
  }
}
