import React, {useState} from 'react';
import axios from 'axios';


export default function Sorting({reviews}) {

  const [reviewsSort, setReviewsSort] = useState('Relevant');

  const sortHandler = (e) => {
    axios.get('/reviews', {
      params: {
        product_id: 37311,
        count: 100,
        sort: e.target.value,
      }
    })
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(err => err);
  };

  function onChange(event) {
    setReviewsSort(event.target.value);
  }

  return(
    <>
    <p>{reviews.length} reviews, sorted by:
     <select value={reviewsSort} onChange={sortHandler}>
        <option value="Relevant">Relevant</option>
        <option value="Newest">Newest</option>
        <option value="Helpful">Helpful</option>
      </select>
      </p>
    </>
  )
}

