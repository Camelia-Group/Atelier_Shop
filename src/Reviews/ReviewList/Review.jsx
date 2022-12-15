import React, { useState } from 'react';
import Sorting from './Sorting.jsx'
import './Tile.css';
// import Stars from '../Stars.jsx'

function Review({ review, addReview }) {

  const [helpful, setHelpful] = useState(review.helpfulness);
  const [click, setClick] = useState(false)

  const handleHelpful = () => {
    setHelpful(helpful + 1);
    handleHelpfulness(review.review_id, review.helpfulness);
  }

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

  const response = () => {
    if(review.response) {
      return `Response: ${review.response}`
    }
    return;
  }

  //Recommend
  const recommendProduct = (recc) => {
    if(recc.recommend.true) {
      return '✔️ I recommend this product'
    }
    return;
  }

  const [reviewRenderCount, setReviewRenderCount] = useState(2);
  let reviewsSorted = [];
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

  const renderedreviews = reviewsSorted.slice(0, reviewRenderCount);

  const parseDate = (date) => {
    const year = date.slice(0, 4);
    let month = date.slice(5, 7);
    const day = date.slice(8, 10);
    switch (month) {
      case '01':
        month = 'January';
        break;
      case '02':
        month = 'Febuary';
        break;
      case '03':
        month = 'March';
        break;
      case '04':
        month = 'April';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'June';
        break;
      case '07':
        month = 'July';
        break;
      case '08':
        month = 'August';
        break;
      case '09':
        month = 'September';
        break;
      case '10':
        month = 'October';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = 'December';
        break;
      default:
        break;
    }
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="review">
      <div className="review-body-container">
        <div className="review-body">
          <h3>{stars(review.rating)}</h3>
        <p className="review-person">{review.nickname ||  'anon'}, {parseDate(review.date)}</p>
          <span className="review-body-text">
            <b>{review.body}</b>
            <p>{review.summary}</p>
            {review.photos.length >= 1 ? (
        review.photos.map((photo, index) => (
          <img src={photo.url} className="reviewPhoto" key={index} />
        ))
      ) : (null)}
      {/* response */}
            {review.response ?
                <div className='review-response'>
                  <div className='review-response title'>Response: </div>
                  <div className='review-response text'>{review.response}</div>
                </div>
              : null
            }
          </span>
          {review.recommend ? <div >✔️ I recommend this product!</div> : null}
        </div>
        <div className="review-helpful-container">
        {!click ? (
        <div className="helpfulReview"
          onClick={() => {
            setHelpful(helpful + 1);
            setClick(true);
          }} >Helpful? <u>Yes</u> ({review.helpfulness})</div>
      ) : (
        <div className="helpfulReview">Helpful? <u>Yes</u> ({review.helpfulness + 1}) </div>
      )}
          | <a>Report</a>
        </div>
      </div>


    </div>
  );
}
export default Review;

