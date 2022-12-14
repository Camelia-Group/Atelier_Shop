import React, { useState } from 'react';
import Review from './Review.jsx'
import Sorting from './Sorting.jsx';
import Modal from '../newReview/Modal.jsx';

function ReviewList({ reviews }) {
  const [reviewRenderCount, setReviewRenderCount] = useState(2);

  const addReview = () => {
    console.log('clicked')
  }

  let reviewsSorted = [];
  const reviewKeys = Object.keys(reviews);
  const checkSort = (currReviews) => {
    if (currReviews.length === 1) {
      return true;
    }
    for (let i = 0; i < currReviews.length - 1; i += 1) {
      if (currReviews[i].review_helpfulness < currReviews[i + 1].review_helpfulness) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < reviewKeys.length; i += 1) {
    reviewsSorted.push(reviews[reviewKeys[i]]);
  }

  const sortReviews = (currReviews) => {
    const returned = currReviews;
    if (returned.length === 1) {
      return returned;
    }
    for (let i = 0; i < returned.length - 1; i += 1) {
      if (returned[i].review_helpfulness < returned[i + 1].review_helpfulness) {
        const swapped = returned[i];
        returned[i] = returned[i + 1];
        returned[i + 1] = swapped;
      }
    }
    if (checkSort(returned)) {
      return returned;
    }
    return sortReviews(returned);
  };
  reviewsSorted = sortReviews(reviewsSorted);

  const renderedReviews = reviewsSorted.slice(0, reviewRenderCount);
  if (reviews.length === 0) {
    return <p>Loading Reviews</p>;
  }
  return (
    <div className="review-list">
      {
        renderedReviews.map((review) => (
          <Review review={review} key={review.review_id} />
        ))
      }
      <div className="review-list-buttons">
        <button type="button">MORE REVIEWS <i class="fa-solid fa-angle-down"></i></button>
        <button type="button" onClick={() => { addReview(); }}>
          ADD A REVIEW <i class="fa-solid fa-plus"></i>
          &nbsp;&nbsp;
          <span style={{ fontSize: '15px', marginTop: '3px' }}>+</span>
        </button>
      </div>
    </div>
  );
}
export default ReviewList;