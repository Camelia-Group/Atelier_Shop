import React, {useState} from 'react';


export default function Sorting({metaData}) {

  const [reviewsSort, setReviewsSort] = useState('Relevant');

  function onChange(event) {
    setReviewsSort(event.target.value);
  }

  return(
    <>
    <p>777 reviews, sorted by:
     <select value={reviewsSort} onChange={onChange}>
        <option value="Relevant">Relevant</option>
        <option value="Newest">Newest</option>
        <option value="Helpful">Helpful</option>
      </select>
      </p>
    </>
  )
}

