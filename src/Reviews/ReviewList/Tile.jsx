import React from 'react';
import './Tile.css';

export default function Tile() {
  return (
    <>
      <div className="review-tile">
        <p className="nickname">nickname, December 5, 2022 </p>
        <h5>Rating stars here  <span>★★☆☆☆</span></h5>
        <h2>Review Title: with word-break truncation to prevent wrapping onto the next...</h2>
        <p>Review Description:
          Donut gummi bears gingerbread gummies chocolate. Ice cream apple pie tiramisu fruitcake chuppa chups icing apple pie. Lemon drops cake pudding pudding.
        </p>
        <h5>✔️ I recommend this product</h5>
        <h5>Helpful? (5) | Report</h5>
      </div>
    </>)
}


// Single tile will include

// Rating

// nickname
// Date of Review
// Review Title
// Review Description
// Recommend?
// Response to review
// Rating helpful?
