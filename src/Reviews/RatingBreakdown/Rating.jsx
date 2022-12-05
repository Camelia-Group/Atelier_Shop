import React from 'react';
import './Rating.css';

const Rating = () => {

  return (
    <>
<div className="rating-review">
<div className="row">
  <div className="side">
    <div>5 ★</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-5"></div>
    </div>
  </div>
  <div className="side right">
    <div>150</div>
  </div>
  <div className="side">
    <div>4 ★</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-4"></div>
    </div>
  </div>
  <div className="side right">
    <div>63</div>
  </div>
  <div className="side">
    <div>3 ★</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-3"></div>
    </div>
  </div>
  <div className="side right">
    <div>15</div>
  </div>
  <div className="side">
    <div>2 ★</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-2"></div>
    </div>
  </div>
  <div className="side right">
    <div>6</div>
  </div>
  <div className="side">
    <div>1 ★</div>
  </div>
  <div className="middle">
    <div className="bar-container">
      <div className="bar-1"></div>
    </div>
  </div>
  <div className="side right">
    <div>20</div>
  </div>
</div>
</div>



    </>
  )
}


export default Rating;



// Average Rating
// 1 - 5 star Reviews in a range bar thing
// Filter Selected for star reviews
{/* <h2>Rating System</h2>
<h1>3.5
  <span>★★☆☆☆</span>
</h1>
<h5>100% of reviews recommend this product</h5>

<div>
  <ul>
    <li className="bar-5">5 stars .....</li>
    <li className="bar-4">4 stars .....</li>
    <li className="bar-3">3 stars .....</li>
    <li className="bar-2">2 stars .....</li>
    <li className="bar-1">1 stars .....</li>
  </ul>
</div> */}