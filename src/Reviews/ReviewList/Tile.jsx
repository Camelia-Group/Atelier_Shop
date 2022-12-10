import React from 'react';
import './Tile.css';




export default function Tile({ productReview }) {
  // const recommend = (rec) => {
  //   let n = Math.floor((parseInt(rec.recommend.true) / (parseInt(rec.recommend.true) + parseInt(rec.recommend.false))) * 100)
  //   console.log(rec.recommend.true)
  //   console.log('this is res',n)
  //   return n;
  // }


  return (
    <>
      <div className="review-tile">
       <h5>
        Rating:{productReview.rating} ★
      </h5>
      <h5>{productReview.reviewer_name}, {productReview.date}</h5>
      <h5>{productReview.body}</h5>
      <h5>{productReview.response}</h5>
      <h5>Photo List:{productReview.photo}</h5>


      {/* <h5>{recommend(productReview)}% of reviews recommended this product</h5> */}
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