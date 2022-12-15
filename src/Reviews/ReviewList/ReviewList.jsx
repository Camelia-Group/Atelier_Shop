import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import Modal from '../newReview/Modal.jsx';
// import Modalx from '../newReview/Modalx.jsx';
import Sorting from './Sorting.jsx';
import './ReviewList.css';

function ReviewList({ reviews }) {
  const [reviewRenderCount, setReviewRenderCount] = useState(2);
  const [showMore, setShowMore] = useState([]);
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
      if (currReviews[i].helpfulness < currReviews[i + 1].helpfulness) {
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
      if (returned[i].helpfulness < returned[i + 1].helpfulness) {
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
  useEffect(() => {
    // Check if reviews are more than 2, and if show more is not already set to a value to prevent inf loop
    if (reviewsSorted.length > 2 && showMore.length === 0) {
      setShowMore([true, 'more']);
    }
  }, [reviewsSorted])

  const renderedReviews = reviewsSorted.slice(0, reviewRenderCount);

  if (reviews.length === 0) {
    return <p>Loading Reviews</p>;
  }

  return (
    <div className="review-list">
       <Sorting reviews={reviews}/>
      {
        // rendering of reviews
        renderedReviews.map((review, index) => {
          // check if current review being rendered is equal to the last review in reviewsSorted, indicating there are no further reviews
          // also make sure that show more is set to [true, 'more'] so that when it changes to collapse, it wont infinitely change state

          // if true change btn to collapse
          if (JSON.stringify(review) === JSON.stringify(reviewsSorted[reviewsSorted.length - 1]) && showMore[0] === true && showMore[1] === 'more') {
            setShowMore([true, 'collapse']);
          }
          return (
          <Review review={review} key={review.review_id} />
        )})
      }
      <div className="review-list-buttons">
        {
          showMore[0] === true && showMore[1] === 'more' ? (
            <button type="button" onClick={() => {
              setReviewRenderCount(reviewRenderCount + 2);
            }}>
              MORE REVIEWS
            </button>
          ) : null
        }
        {
          showMore[0] === true && showMore[1] === 'collapse' ? (
            <button type="button" onClick={() => {
              setShowMore([true, 'more']);
              setReviewRenderCount(2);
            }}>COLLAPSE</button>
           ) : null
        }
       <Modal />
      </div>
    </div>
  );
}
export default ReviewList;