import React, {useState, useEffect} from 'react';
import Tile from './Tile.jsx'
import Sorting from './Sorting.jsx';
import Modal from '../newReview/Modal.jsx';

export default function Tiles({productReviews}) {

  // const recommendProduct = (productReviews) => {
  //   let recommend = 0;
  //   productReviews.forEach((review) => {
  //     if(review.recommend) {
  //       recommend++
  //     }
  //   })
  //   return Math.round((recommend / reviews.length) * 100)
  // }

  return (
    <>
      <Sorting />
      {productReviews.map((productReview, i) =>
        <Tile productReview={productReview} key={productReview.review_id}/>
      )}
      <div>
      <button>More reviews</button>
      <Modal />
      </div>

    </>
  )
}