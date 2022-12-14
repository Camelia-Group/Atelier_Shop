import React from 'react';
import StarRatings from 'react-star-ratings';

const Stars = ({rating}) => {

  return (
    <StarRatings
      rating={rating}
      numOfStars={5}
    />
  )
};

export default Stars;