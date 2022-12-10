import React from 'react';
import './Rating.css';

const Rating = ({productReviews}) => {

const avgRating = () => {
  let total = 0;
  productReviews.forEach((review) => {
    total += review.rating
  })
  return total/productReviews.length
}

const totalRating = () => {
  let obj = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  productReviews.forEach((review) => {
    obj[review.rating]++;
  })
  return obj;
}

  return (
    <>
  <div className="ratingContainer">
    <h2>Rating and Reviews</h2>
    <h5>{avgRating()} ★★★★★</h5>
<h5>100% of reviews recommend this product</h5>
  <div>5stars: {totalRating()[5]} ★★★★★ </div>
  <div>4stars: {totalRating()[4]} ★★★★ </div>
  <div>3stars: {totalRating()[3]} ★★★ </div>
  <div>2stars: {totalRating()[2]} ★★ </div>
  <div>1stars: {totalRating()[1]} ★ </div>
  </div>
    </>
  )
}


export default Rating;

