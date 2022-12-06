import React, {useState} from 'react';


export default function Sorting() {

  const [reviewsSort, setReviewsSort] = useState('');

  function onChange(event) {
    setReviewsSort(event.target.value);
  }

  return(
    <>
    <p>777 reviews, sorted by:
     <select value={reviewsSort} onChange={onChange}>
        <option value="relevant">Relevant</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>
      </p>
    </>
  )
}

