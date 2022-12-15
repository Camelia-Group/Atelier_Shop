import React, { useState } from 'react';
import './Tile.css';

function Review({ review, addReview }) {

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
      <h1>Reviews: </h1>
        <div className="review-body">
        <p className="review-person">{review.nickname ||  'anon'}, {parseDate(review.date)}</p>
          <span className="review-body-text">
            <b>{review.body}</b>
            {/* <h5>Photo List:{review.photos.length > 0 ?<div>{review.photos}</div> : null}</h5> */}
            <p>{review.summary}</p>
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
          <span>
            Helpful?&nbsp;
            <button onClick={() => {}} className="review-helpful-btn" type="button">
              <u>Yes</u>
              {`(${review.helpfulness})`}
            </button>

          </span>
          | <a>Report</a>

        </div>
      </div>


    </div>
  );
}
export default Review;

