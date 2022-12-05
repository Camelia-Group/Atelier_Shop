import React from 'react';
import Rating from './RatingBreakdown/Rating.jsx';
import Tiles from './ReviewList/Tiles.jsx';
import Factors from './Factors/Factors.jsx';


export default function Reviews() {
    return(

      <>
      <h1>Reviews</h1>
      <Rating />
      <Tiles />
      <Factors />
      </>
    )
}