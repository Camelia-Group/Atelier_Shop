import React, {useState} from 'react';
import StarRatings from 'react-star-ratings';
import './Stars.css'

const Stars = ({reviews}) => {
  const [rating, setRating] = useState(0);

  const handleClick = (num) => {
    setRating(num);
  }
  return (
    <div>
      {[1,2,3,4,5].map(num =>
        <span
          onClick={() => handleClick(num)}
          style={{ color: rating >= num ? "#ffd700" : "#ccc" }}
        >
          &#9733;
        </span>
      )}
    </div>
  );
};

export default Stars;