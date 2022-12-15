import React from 'react';
import './Tile.css';




export default function Tile({ review }) {
  const productRecommend = (reviews) => {
    let recommends = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].recommend) {
         recommends += 1;
        }
    }
    let percentage = recommends / reviews.length * 100;
    percentage = Math.round(percentage);
    if (percentage > 99) {
      percentage = 100;
    }
    return percentage;
  }




  return (
    <>
      <div className="review-tile">
       <h5>
        Rating:{review.rating} ★★★★★
      </h5>
      <h5>{review.reviewer_name}, {review.date}</h5>

      <h5>{review.summary}</h5>
      <h5>{review.body}</h5>
      <h5>{review.response}</h5>
      <h5>Photo List:{review.photos.length > 0 ?
              <div>
                {review.photos}
              </div> : null}</h5>


      <h5>{productRecommend(review)}% of reviews recommended this product</h5>
      <h5>Helpful</h5>
      </div>
    </>)
}


{/* <div className="review-tile">
<p className="nickname">nickname, December 5, 2022 </p>
<h5>Rating stars here  <span>★★☆☆☆</span></h5>
<h2>Review Title: with word-break truncation to prevent wrapping onto the next...</h2>
<p>Review Description:
  Donut gummi bears gingerbread gummies chocolate. Ice cream apple pie tiramisu fruitcake chuppa chups icing apple pie. Lemon drops cake pudding pudding.
</p>
<h5>✔️ I recommend this product</h5>
<h5>Helpful? (5) | Report</h5>
</div> */}