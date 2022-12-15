import React from 'react';
import './Rating.css';

const Rating = ({productReviews}) => {

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

// const fiveStar = (totalRating()[5] * 100 ) / productReviews.length;
const fiveStar = (totalRating()[5] / productReviews.length) * 100;
const fourStar = (totalRating()[4] / productReviews.length) * 100;
// const fourStar = (totalRating()[4] * 100 ) / productReviews.length;
const threeStar = (totalRating()[3] * 100 ) / productReviews.length;
const twoStar = (totalRating()[2] * 100 )  / productReviews.length;
const oneStar = (totalRating()[1] * 100 )  / productReviews.length;

  return (
    <>
  <div className="ratingContainer">
    <h2>Rating and Reviews</h2>
    <h5>{avgRating()} {stars(avgRating())}</h5>
<h5>100% of reviews recommend this product</h5>
 {/* <div>5stars: <h5 className="bar"><span className="filled-bar" style={{width: `${fiveStar}`}}></span></h5></div>
 <div>4stars: <h5 className="bar"><span className="filled-bar" style={{width: `${fourStar}`}}></span></h5></div> */}
  <div>4stars: <span className="bar">{totalRating()[5]}</span> </div>
  <div>4stars: <span className="bar">{totalRating()[4]}</span> </div>
  <div>3stars: <span className="bar">{totalRating()[3]}</span> </div>
  <div>2stars: <span className="bar">{totalRating()[2]}</span> </div>
  <div>1stars: <span className="bar">{totalRating()[1]}</span> </div>



  </div>
    </>
  )
}


export default Rating;

